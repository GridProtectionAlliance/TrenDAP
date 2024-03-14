//******************************************************************************************************
//  XvsY.tsx - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  11/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as d3 from 'd3';
import * as React from 'react';
import { TrenDAP, Redux } from '../../../global';
import styles from '../../../../Styles/app.scss';
import { Input, CheckBox } from '@gpa-gemstone/react-forms';

import Widget, { SeriesSelect } from './Widget/Widget';
import AdditionalInfoXDA from './Widget/XDA/AdditionalInfo';
import AdditionalInfoOpenHistorian from './Widget/OpenHistorian/AdditionalInfo';
import { CrossMark, Plus } from '@gpa-gemstone/gpa-symbols';
import { XvsY } from './Implementations';
import moment from 'moment';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { linearRegression, linearRegressionLine, rSquared } from 'simple-statistics';

export default function XvsYJSX(props: TrenDAP.iWidget<TrenDAP.iXvsY>) {
    const ref = React.useRef(null);
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [record, setRecord] = React.useState<XvsY>(new XvsY(props));
    const [editRecord, setEditRecord] = React.useState<XvsY>(new XvsY(props));

    React.useEffect(() => {
        //record.current = new Trend(props);
    }, [toggle, props.JSON]);

    React.useEffect(() => {
        Initialize(record)
        setEditRecord(record);
    }, [record])

    React.useEffect(() => {
        setRecord(new XvsY({ ...record, Height: props.Height }))
    }, [props.Height])

    React.useEffect(() => {
        setRecord(new XvsY({ ...record, Data: props.Data }));
    }, [props.Data]);

    function Zip<T>(array1: T[], field1: keyof T, array2: T[], field2: keyof T, zipField: keyof T) {
        let returnArray: { ZipField: T[keyof T], Array1: T[keyof T], Array2:  T[keyof T]}[]= [];
        if (array1.length > array2.length) {
            array1.forEach((xd, i) => {
                const array2Point = array2.find(point => point[zipField] === xd[zipField])
                if (array2Point == undefined) return;
                returnArray.push({
                    ZipField: xd[zipField], Array1: xd[field1], Array2: array2Point[field2]
                });
            });
        }
        else {
            array2.forEach((xd, i) => {
                const array1Point = array1.find(point => point[zipField] === xd[zipField])
                if (array1Point == undefined) return;
                returnArray.push({
                    ZipField: xd[zipField], Array2: xd[field1], Array1: array1Point[field2]
                });
            });
        }

        return returnArray
    }

    function Initialize(settings: XvsY) {
        if (settings.JSON.X.Series == undefined || settings.JSON.Y.Series == undefined) return;

        const margin = { bottom: 50, left: 50, top: 40, right: 50 };
        const svgHeight = props.Height;
        d3.select(ref.current).selectAll('svg').remove()
        const x = d3.scaleLinear()
            .domain([settings.JSON.X.Min, settings.JSON.X.Max])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);
        const y = d3.scaleLinear()
            .range([svgHeight - margin.top - margin.bottom, 0])
            .domain([settings.JSON.Y.Min, settings.JSON.Y.Max]);   // d3.hist has to be called before the Y axis obviously

        const svg = d3.select(ref.current)
            .append('svg')
            .attr('width', settings.Width)
            .attr('height', svgHeight);

        const xAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (svgHeight - margin.bottom) + ")")
                .call(d3.axisBottom(x))

        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (settings.Width / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text(settings.JSON.X.Units)

        const yAxis = svg.append("g")
            .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")")
            .call(d3.axisLeft(y));

        svg.append("text")
            .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + (margin.left / 3) + ")")
            .style("text-anchor", "middle")
            .text(settings.JSON.Y.Units);

        const xData: TrenDAP.iXDATrendDataPoint[] = GetDatum('x')?.Data ?? [];
        const yData: TrenDAP.iXDATrendDataPoint[] = GetDatum('y')?.Data ?? [];
        const combinedData = Zip(xData, record.JSON.X.Series.Field, yData, record.JSON.Y.Series.Field, 'Timestamp'); 
        //const combinedData = xData.map((xd, i) => ({ Timestamp: xd.Timestamp, X: xd[record.JSON.XSeries.Field], Y: yData[i][record.JSON.YSeries.Field] }))
        const filteredData = combinedData.filter(d => moment(d.ZipField).toDate().getTime() >= record.JSON.TimeMin && moment(d.ZipField).toDate().getTime() <= record.JSON.TimeMax);
        svg.selectAll("dot")
            .data(filteredData)
            .enter().append("circle")
            .attr("r", 3.5)
            .attr("cx", function (d) { return x(d.Array1 as number); })
            .attr("cy", function (d) { return y(d.Array2 as number); })
            .attr("transform", `translate(${margin.left},${margin.top})`);


        if (record.JSON.RegressionLine) {
            const data = filteredData.map(d => [d.Array1 as number, d.Array2 as number])
            const model = linearRegression(data);
            const lrLine = linearRegressionLine(model);
            const r2 = rSquared(data, lrLine);
            const lineFunc = d3.line<number[]>().x(d => x(d[0])).y(d => y(lrLine(d[0])));
            svg.append('text')
                .attr('stroke', 'red')
                .attr("transform", `translate(${props.Width - margin.left - margin.right},${margin.top})`)
                .text(`R2 - ${r2.toFixed(3)}`);

            svg.append("path")
                .data([data])
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", 'red')
                .attr("d", (d) => lineFunc(d))
                .attr("transform", `translate(${margin.left},${margin.top})`)


        }

    }

    function GetDatum(axis: 'x' | 'y') {
        if (axis === 'x') {
            if (record.JSON.X.Series == undefined) return {Name: ''} as any;
            const dataSource = record.Data.find(d => d.DataSource.ID.toString() === record.JSON.X.Series.DataSourceID.toString())?.Data ?? [];
            const datum = dataSource.find(ds => ds.ID.toString() === record.JSON.X.Series.ID.toString())
            return datum;
        }
        else {
            if (record.JSON.Y.Series == undefined) return { Name: '' } as any;
            const dataSource = record.Data.find(d => d.DataSource.ID.toString() === record.JSON.Y.Series.DataSourceID.toString())?.Data ?? [];
            const datum = dataSource.find(ds => ds.ID.toString() === record.JSON.Y.Series.ID.toString())
            return datum;
        }
    }

    return (
        <div className="card" style={{ width: props.Width, height: props.Height }}>
            <div className="card-body" style={{ padding: 0 }}>
                <div className={styles["widgit-label"]}>
                    <span>{props.Label}
                        <button className={"btn " + styles["widgit-controls"]} title='Widget Settings' onClick={() => setToggle(true)}><i className="fa fa-cog"></i></button>
                    </span>
                </div>
                <div ref={ref}></div>
            </div>

            <Widget {...props} Record={record} Toggle={toggle} SetToggle={(bool) => setToggle(bool)} EditRecord={editRecord }>
                <div className="col">
                    <Input<TrenDAP.iWidget> Field='Label' Record={editRecord} Type='text' Setter={(r) => setEditRecord(new XvsY(r))} Valid={(field) => true} />

                    <label>Width</label>
                    <div className="input-group">
                        <input type="number" className="form-control" value={editRecord?.Width} onChange={(evt) => setEditRecord(new XvsY({ ...editRecord, Width: parseInt(evt.target.value) }))} />
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setEditRecord(new XvsY({ ...editRecord, Width: window.innerWidth - 200 }))}>Full Width</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Min</label>
                            <Datetime value={moment(editRecord.JSON.TimeMin)} onChange={(value) => setEditRecord(new XvsY(editRecord.UpdateJSON('TimeMin', moment(value).toDate().getTime())))} />
                        </div>
                        <div className="col">
                            <label>Max</label>
                            <Datetime value={moment(editRecord.JSON.TimeMax)} onChange={(value) => setEditRecord(new XvsY(editRecord.UpdateJSON('TimeMax', moment(value).toDate().getTime())))} />
                        </div>
                        <div className="col-2" style={{ position: 'relative' }}>
                            <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => setEditRecord(editRecord.CalculateRange('time'))}>Use Data</button>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <CheckBox<TrenDAP.iXvsY> Record={editRecord.JSON} Field='RegressionLine' Label='Add Regression' Setter={(r) => setEditRecord(new XvsY(editRecord.UpdateJSON('RegressionLine', r.RegressionLine)))} />
                        </div>
                    </div>
                    <br/>

                    <h6>X Axis</h6>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <Input<TrenDAP.iAxis> Record={editRecord.JSON.X} Field='Units' Valid={() => true} Setter={(r) => setEditRecord(editRecord.SetAxis('x', 'Units', r.Units))} />
                        </div>
                        <div className="col">
                            <Input<TrenDAP.iAxis> Record={editRecord.JSON.X} Field='Min' Valid={() => true} Setter={(r) => setEditRecord(editRecord.SetAxis('x', 'Min', r.Min))} />
                        </div>
                        <div className="col">
                            <Input<TrenDAP.iAxis> Record={editRecord.JSON.X} Field='Max' Valid={() => true} Setter={(r) => setEditRecord(editRecord.SetAxis('x', 'Max', r.Max))} />
                        </div>
                        <div className="col-2" style={{ position: 'relative' }}>
                            <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => setEditRecord(editRecord.CalculateRange('x'))}>Use Data</button>
                        </div>

                    </div>
                    <h6>Y Axis</h6>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <Input<TrenDAP.iAxis> Record={editRecord.JSON.Y} Field='Units' Valid={() => true} Setter={(r) => setEditRecord(editRecord.SetAxis('y', 'Units', r.Units))} />
                        </div>
                        <div className="col">
                            <Input<TrenDAP.iAxis> Record={editRecord.JSON.Y} Field='Min' Valid={() => true} Setter={(r) => setEditRecord(editRecord.SetAxis('y', 'Min', r.Min))} />
                        </div>
                        <div className="col">
                            <Input<TrenDAP.iAxis> Record={editRecord.JSON.Y} Field='Max' Valid={() => true} Setter={(r) => setEditRecord(editRecord.SetAxis('y', 'Max', r.Max))} />
                        </div>
                        <div className="col-2" style={{ position: 'relative' }}>
                            <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => setEditRecord(editRecord.CalculateRange('y'))}>Use Data</button>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <h6>Series</h6>
                    <hr />
                    <div id="accordion" style={{ overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 }}>
                        {editRecord.Data.map((d, i) =>
                            <React.Fragment key={i}>
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href={"#collapse" + i}>{d.DataSource.Name}</a>
                                </div>
                                <div id={"collapse" + i} className="collapse show" data-parent="#accordion">
                                    <div className="card-body">
                                        <h6>X Series</h6>
                                        <hr/>
                                        <SeriesSelect Widget={editRecord} DataSourceID={d.DataSource.ID} Axis='x' Callback={() => setEditRecord(new XvsY(editRecord))}  />
                                        {(editRecord.JSON.X.Series != undefined ?
                                            <div className="row">
                                                <div className="col-3">
                                                    <label>{GetDatum('x')?.Name ?? ''}</label>
                                                    <AdditionalInfoXDA Index={i} Data={GetDatum('x')} />
                                                </div>
                                                <SeriesPicker Axis='x' Series={editRecord.JSON.X.Series} Widget={editRecord} Callback={() => setEditRecord(new XvsY(editRecord))} />
                                            </div> : null)}
                                        <h6>Y Series</h6>
                                        <hr />
                                        <SeriesSelect Widget={editRecord} DataSourceID={d.DataSource.ID} Axis='y' Callback={() => setEditRecord(new XvsY(editRecord))}  />
                                        {(editRecord.JSON.Y.Series != undefined ?
                                            <div className="row">
                                                <div className="col-3">
                                                    <label>{GetDatum('y')?.Name ?? ''}</label>
                                                    <AdditionalInfoXDA Index={i} Data={GetDatum('y')} />
                                                </div>
                                                <SeriesPicker Axis='y' Series={editRecord.JSON.Y.Series} Widget={editRecord} Callback={() => setEditRecord(new XvsY(editRecord))} />
                                            </div> : null)}
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </Widget>
        </div>

    );

}

const SeriesPicker = (props: { Axis: 'x'|'y', Series: TrenDAP.iSeries, Widget: XvsY, Callback: () => void }) => {
    const [type, setType] = React.useState<TrenDAP.iXDATrendDataPointField>(props.Series.Field);

    React.useEffect(() => {
        props.Widget.UpdateSeries(props.Axis, "Field", type);
        props.Callback();
    }, [type]);



    return (
        <>
            <div className="col">
                <label className="form-label">Field</label>
                <select className="form-control" value={type} onChange={(evt) => setType(evt.target.value as TrenDAP.iXDATrendDataPointField)}>
                    <option value="Average">Avg</option>
                    <option value="Minimum">Min</option>
                    <option value="Maximum">Max</option>
                </select>
            </div>
            <div className="col-1">
                <button className="btn btn-link" onClick={() => {
                    props.Widget.RemoveSeries(props.Axis);
                    props.Callback();
                }}>{CrossMark}</button>
            </div>
        </>

    );
}

