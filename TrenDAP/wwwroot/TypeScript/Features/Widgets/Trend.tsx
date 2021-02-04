//******************************************************************************************************
//  Trend.tsx - Gbtc
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
//  11/13/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as d3 from 'd3';
import * as React from 'react';
import { TrenDAP, Redux } from '../../global';
import styles from '../../../Styles/app.scss';
import { Input, CheckBox } from '@gpa-gemstone/react-forms';

import Widget, { SeriesSelect, AdditionalInfo} from './Widget';
import { CrossMark, Plus } from '../../Constants';
import { Trend } from '../../Implementations';
import moment from 'moment';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

export default function TrendJSX(props: TrenDAP.iWidget<TrenDAP.iTrend>) {
    const ref = React.useRef(null);
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [record, setRecord] = React.useState<Trend>(new Trend(props));

    React.useEffect(() => {
        //record.current = new Trend(props);
    }, [toggle, props.JSON]);

    React.useEffect(() => {
        if (record.JSON.Split)
            InitializeSplit(record);
        else
            InitializeNotSplit(record)
    }, [record])

    React.useEffect(() => {
        setRecord(new Trend({...record,Height: props.Height}))
    }, [props.Height])

    React.useEffect(() => {
        setRecord(new Trend({...record, Data: props.Data}));
    }, [props.Data]);

    function SetRecord(field: keyof TrenDAP.iWidget<TrenDAP.iTrend>, r: TrenDAP.iWidget<TrenDAP.iTrend>) {
        setRecord(new Trend(r));
    }

    function InitializeSplit(settings: Trend) {
        const margin = { bottom: 50, left: 50, top: 40, right: 50 };
        const svgHeight = props.Height / settings.JSON.Series.length;
        d3.select(ref.current).selectAll('svg').remove()
        const x = d3.scaleTime()
            .domain([settings.JSON.Min, settings.JSON.Max])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);

        settings.JSON.Series.map(series => {
            const axis = settings.JSON.YAxis[series.Axis];
            const field = series.Field;

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
                .text("Time")

            const y = d3.scaleLinear()
                .range([svgHeight - margin.top - margin.bottom, 0])
                .domain([axis.Min, axis.Max]);   // d3.hist has to be called before the Y axis obviously

            const yAxis = svg.append("g")
                .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")")
                .call(d3.axisLeft(y));

            svg.append("text")
                .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + (margin.left / 3) + ")")
                .style("text-anchor", "middle")
                .text(axis.Units);

            const filteredData = ((record.Data.find(ds => ds.DataSource.ID === series.DataSourceID)?.Data ?? []).find(ds => ds.ID === series.ID)?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[field] >= axis.Min && ds[field] <= axis.Max )
            const lineFunc = d3.line<TrenDAP.iXDATrendDataPoint>().x(dd => x(moment(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ'))).y(dd => y(dd[series.Field]));

            svg.append("path")
                .data([filteredData])
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", series.Color)
                .attr("d", (d) => lineFunc(d))
                .attr("transform", `translate(${margin.left},${margin.top})`)


        })
    }
    function InitializeNotSplit(settings: Trend) {
        const margin = { bottom: 50, left: settings.JSON.YAxis.filter(axis => axis.Position === 'left').length * 50, top: 40, right: settings.JSON.YAxis.filter(axis => axis.Position === 'right').length * 50};
        const x = d3.scaleTime()
            .domain([settings.JSON.Min, settings.JSON.Max])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);


        d3.select(ref.current).selectAll('svg').remove()
        const svg = d3.select(ref.current)
            .append('svg')
            .attr('width', settings.Width)
            .attr('height', settings.Height)

        const xAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (settings.Height - margin.bottom) + ")")
            .call(d3.axisBottom(x));

        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (settings.Width / 2) + "," + (settings.Height - margin.bottom / 3) + ")")
            .text("Time")

        const y = settings.JSON.YAxis.map(axis => {
            let a = d3.scaleLinear()
                .range([settings.Height - margin.top - margin.bottom, 0])
                .domain([axis.Min, axis.Max]);   // d3.hist has to be called before the Y axis obviously
            return a;
        });

        const yAxis = settings.JSON.YAxis.map((axis, index) => {
            let a;
            if (axis.Position === 'left') {
                let ind = settings.JSON.YAxis.filter(axis => axis.Position === 'left').findIndex(axis => axis === settings.JSON.YAxis[index]);
                a = svg.append("g")
                    .attr("transform", "translate(" + (margin.left - ind*50)  + "," + margin.top + ")")
                    .call(d3.axisLeft(y[index]));
                svg.append("text")
                    .attr("transform", "rotate(-90) translate(-" + props.Height / 2 + "," + (margin.left - ind * 50 - 25) + ")")
                    .style("text-anchor", "middle")
                    .text(axis.Units)

            }
            else {
                a = svg.append("g")
                    .attr("transform", "translate(" + (settings.Width - margin.right) + "," + margin.top + ")")
                    .call(d3.axisRight(y[index]));
                svg.append("text")
                    .attr("transform", "rotate(-90) translate(-" + props.Height / 2 + "," + (settings.Width - margin.right / 3) + ")")
                    .style("text-anchor", "middle")
                    .text(axis.Units)

            }

            return a;

        });

        svg.selectAll("g.line").remove();
        svg.selectAll("g.line")
            .data(settings.JSON.Series)
            .enter()
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`)
            .classed("line", true)
            .append("path")            
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", (d: TrenDAP.iTrendSeries) => d.Color)
            .attr("d", (d: TrenDAP.iTrendSeries) => {
                let yScale = y[d.Axis];
                let lineFunc = d3.line<TrenDAP.iXDATrendDataPoint>().x(dd => x(moment(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ'))).y(dd => yScale(dd[d.Field]));
                let filteredData = ((record.Data.find(ds => ds.DataSource.ID === d.DataSourceID)?.Data ?? []).find(ds => ds.ID === d.ID)?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[d.Field] >= settings.JSON.YAxis[d.Axis].Min && ds[d.Field] <= settings.JSON.YAxis[d.Axis].Max)
                return lineFunc(filteredData);
            })

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

            <Widget {...props} Record={record} Toggle={toggle} SetToggle={(bool) => setToggle(bool)}>
                <div className="col">
                    <Input<TrenDAP.iWidget> Field='Label' Record={record} Type='text' Setter={(r) => SetRecord('Label', r)} Valid={(field) => true} />

                    <label>Width</label>
                    <div className="input-group">
                        <input type="number" className="form-control" value={record?.Width} onChange={(evt) => setRecord(new Trend({ ...record,Width: parseInt(evt.target.value)}))} />
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setRecord(new Trend({ ...record, Width: window.innerWidth - 200})) }>Full Width</button>
                        </div>
                    </div>

                    <CheckBox<TrenDAP.iTrend> Field='Split' Record={record?.JSON} Setter={(r) => setRecord(new Trend({ ...record, JSON: r })) } />

                    <h6>X Axis</h6>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <label>Min</label>
                            <Datetime value={moment(record.JSON.Min)} onChange={(value) => setRecord(new Trend({ ...record, JSON: { ...record.JSON,Min: moment(value).toDate().getTime()}}))}/>
                        </div>
                        <div className="col">
                            <label>Min</label>
                            <Datetime value={moment(record.JSON.Max)} onChange={(value) => setRecord(new Trend({ ...record, JSON: { ...record.JSON, Max: moment(value).toDate().getTime() }}))}/>
                        </div>
                        <div className="col-2" style={{ position: 'relative' }}>
                            <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => {
                                record.CalculateAxisRange('x', 0);
                                setRecord(new Trend(record));
                            }}>Use Data</button>
                        </div>

                    </div>
                    <h6>Y Axis</h6> <button style={{position: 'relative', float: 'right', top: -30}} className='btn btn-link' onClick={() => {
                        record.AddAxis()
                        setRecord(new Trend(record));
                    }}>{Plus}</button>
                    <hr />
                    <ul className="list-group">

                        {record.JSON.YAxis.map((axis, index) => (
                            <li key={index} className='list-group-item'><Axis Axis={axis} Index={index} Widget={record} Callback={() => setRecord(new Trend(record)) }/></li>
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h6>Series</h6>
                    <hr />
                    <div id="accordion" style={{ overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 }}>
                        {record.Data.map((d, i) =>
                            <React.Fragment key={i}>
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href={"#collapse" + i}>{d.DataSource.Name}</a>
                                </div>
                                <div id={"collapse" + i} className="collapse show" data-parent="#accordion">
                                    <div className="card-body">
                                        <SeriesSelect Data={record.AvailableSeries()} AddSeries={(id, dsID) => {
                                            record.AddSeries(id, dsID)
                                            let something = new Trend(record);                                    
                                            setRecord(something);
                                        }} />
                                        <ul className="list-group">
                                            {(d.DataSource.Type === 'OpenXDA' ? record.JSON.Series.map((series, ind) => {
                                                let datum = d.Data.find(dd => dd.ID === series.ID);
                                                if (datum === undefined) return null;
                                                return (
                                                    <li key={series.ID} className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <label>{datum.Name}</label>
                                                                <AdditionalInfo Index={i} Data={datum}/>
                                                            </div>
                                                            <SeriesPicker Index={ind} Series={series} Widget={record} Callback={() => setRecord(new Trend(record))} />
                                                        </div>
                                                    </li>
                                                )
                                            }) : null)}
                                        </ul>
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

const SeriesPicker = (props: { Index: number, Series: TrenDAP.iTrendSeries, Widget: Trend, Callback: () => void}) => {
    const [axis, setAxis] = React.useState<number>(props.Series.Axis);
    const [color, setColor] = React.useState<string>(props.Series.Color);
    const [type, setType] = React.useState<TrenDAP.iXDATrendDataPointField>(props.Series.Field);

    React.useEffect(() => {
        props.Widget.UpdateSeries(props.Index, "Color", color);
        props.Callback();
    }, [color]);
    React.useEffect(() => {
        props.Widget.UpdateSeries(props.Index, "Field", type);
        props.Callback();
    }, [type]);
    React.useEffect(() => {
        props.Widget.UpdateSeries(props.Index, "Axis", axis);
        props.Callback();
    }, [axis]);



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
            <div className="col">
                    <label className="form-label">YAxis</label>
                    <select className="form-control" value={axis} onChange={(evt) => setAxis(parseInt(evt.target.value))}>
                        {props.Widget.JSON.YAxis.map((axis, index) => <option value={index} key={index}>{axis.Units}</option> )}
                    </select>
            </div>
            <div className="col">
                <label className="form-label">Color</label>
                <input type="color" className="form-control" value={color} onChange={(evt) => setColor(evt.target.value)} />
            </div>
            <div className="col-1">
                <button className="btn btn-link" onClick={() => {
                    props.Widget.RemoveSeries(props.Index);
                    props.Callback();
                }}>{CrossMark}</button>
            </div>
        </>

    );
}

const Axis = (props: { Index: number, Axis: TrenDAP.iYAxis, Widget: Trend, Callback: () => void }) => {
    const firstRender = React.useRef(true);

    React.useEffect(() => {
        firstRender.current = false;
    }, []);

    //const [bins, setBins] = React.useState<number>(props.Series?.BinCount ?? 10);
    const [units, setUnits] = React.useState<string>(props.Axis.Units);
    const [position, setPosition] = React.useState<'left' | 'right'>(props.Axis.Position);
    const [min, setMin] = React.useState<number>(props.Axis.Min);
    const [max, setMax] = React.useState<number>(props.Axis.Max);

    React.useEffect(() => {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Units", units);
            props.Callback();
        }
    }, [units]);
    React.useEffect(() => {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Position", position);
            props.Callback();
        }
    }, [position]);
    React.useEffect(() => {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Max", max);
            props.Callback();

        }
    }, [max]);
    React.useEffect(() => {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Min", min);
            props.Callback();
        }
    }, [min]);

    return (
            <div className='row'>
                <div className="col-2">
                    <label>Position</label>

                    <select className="form-control" value={position} onChange={(evt) => setPosition(evt.target.value as ('left' | 'right'))}>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div className="col">
                    <Input<TrenDAP.iYAxis> Field='Units' Record={props.Axis} Type='text' Setter={(r) => setUnits(r.Units)} Valid={(field) => true} />
                </div>
                <div className="col-2">
                    <Input<TrenDAP.iYAxis> Field='Min' Label='Min' Record={props.Axis} Type='number' Setter={(r) => setMin(r.Min)} Valid={(field) => true} />
                </div>
                <div className="col-2">
                    <Input<TrenDAP.iYAxis> Field='Max' Record={props.Axis} Type='number' Setter={(r) => setMax(r.Max)} Valid={(field) => true} />
                </div>
                <div className="col-2" style={{ position: 'relative' }}>
                <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => {
                    props.Widget.CalculateAxisRange('y', props.Index)
                    props.Callback();
                }}>Use Data</button>
                </div>

                <div className="col-1">
                <button className="btn btn-link" style={{top: 30} } onClick={() => props.Widget.RemoveAxis(props.Index)}>{CrossMark}</button>
                </div>

            </div>
    );
}


