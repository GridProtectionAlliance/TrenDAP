//******************************************************************************************************
//  Histogram.tsx - Gbtc
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
import { TrenDAP } from '../../../global';
import styles from '../../../../Styles/app.scss';
import { Input } from '@gpa-gemstone/react-forms';
import Widget, { SeriesSelect } from './Widget/Widget';
import AdditionalInfoXDA from './Widget/XDA/AdditionalInfo';
import AdditionalInfoOpenHistorian from './Widget/OpenHistorian/AdditionalInfo';
import AdditionalInfoSapphire from './Widget/Sapphire/AdditionalInfo';

import { CrossMark } from '@gpa-gemstone/gpa-symbols';
import { Histogram } from './Implementations';


const SvgStyle: React.CSSProperties = {
    fill: 'none',
    shapeRendering: 'crispEdges',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
};

export default function HistogramJSX(props: TrenDAP.iWidget<TrenDAP.iHistogram>) {
    const ref = React.useRef(null);
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [record, setRecord] = React.useState<Histogram>(new Histogram(props));

    React.useEffect(() => {
    }, [toggle, props.JSON]);

    React.useEffect(() => {
        Initialize(record);
    }, [record])

    React.useEffect(() => {
        setRecord(new Histogram({ ...record, Data: props.Data }));
    }, [props.Data]);

    React.useEffect(() => {
        setRecord(new Histogram({ ...record, Height: props.Height }))
    }, [props.Height])

    function Initialize(settings: TrenDAP.iWidget<TrenDAP.iHistogram>) {
        const profile = settings.JSON.Series.map(series => series.Profile).reduce((prev, curr) => prev || curr, false);
        const margin = { bottom: 50, left: 50, top: 40, right: (profile ? 70 : 20) };
        const svgHeight = record.Height - margin.top - margin.bottom;

        const extent = d3.extent([].concat(...settings.JSON.Series.map(series => ((settings.Data.find(d => d.DataSource.ID === series.DataSourceID)?.Data ??[]).find(d=> d.ID.toString() === series.ID)?.Data?? []).map(d => d[series.Field] as number))));
        //// set the parameters for the histogram
        let histograms = (settings.JSON?.Series ?? []).map(series => {
            let dataSource = settings.Data.find(d => d.DataSource.ID === series.DataSourceID)?.Data ?? [];
            let datum = dataSource.find(d => d.ID.toString() === series.ID)?.Data.map(d => d[series.Field]) ?? [];
            let histogram = d3.histogram<number, number>()
                .value(function (d) { return d; })   // I need to give the vector of value
                .domain(extent)  // then the domain of the graphic
                .thresholds(settings.JSON.BinCount); // then the numbers of bins

            // And apply this function to data to get the bins
            return histogram(datum);

        });

        let yMax = Math.max(...[].concat(...histograms).map(b => b.length));
       d3.select(ref.current).selectAll('svg').remove()
       const svg = d3.select(ref.current)
            .append('svg')
           .attr('width', settings.Width)
           .attr('height', settings.Height)

        const x = d3.scaleLinear()
            .domain([settings.JSON.Min, settings.JSON.Max])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);


        const xAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (settings.Height - margin.bottom) + ")")
            .call(d3.axisBottom(x))

        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (settings.Width / 2) + "," + (settings.Height - margin.bottom/3) + ")")
            .text(record.JSON.Units)

        const y = d3.scaleLinear()
            .range([settings.Height - margin.top - margin.bottom, 0])
            .domain([0, yMax]);   // d3.hist has to be called before the Y axis obviously

        const yAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(d3.axisLeft(y));
        svg.append("text")
            .attr("transform", "rotate(-90) translate(-" + settings.Height/2 + "," + margin.left/3 + ")")
            .style("text-anchor", "middle")
            .text("Counts")

        const binWidth = Math.max(...histograms.map(histogram => Math.max(...histogram.map(a => x(a.x1) - x(a.x0)))));
        //svg.selectAll("g.bins").remove();

        svg.selectAll("g.bins")
            .data(settings.JSON.Series)
            .enter()
                .append('g').attr('class', 'bins').attr("fill", (series) => series.Color)
            .attr('transform', (d, index) => `translate(${margin.left + index * binWidth / settings.JSON.Series.length},${margin.top})`)
                //.attr("opacity", 0.3)
                .selectAll('rect')
                .data((series, index) => histograms[index])
                .enter()
                    .append("rect")
                    .attr("x", 1)
                    .attr("transform", (d,i,g) => `translate(${x(d.x0)},${y(d.length)})`)
            .attr("width", (d) => (x(d.x1) - x(d.x0) > 2 ? (x(d.x1) - x(d.x0)) / settings.JSON.Series.length : 2) - 1)
                    .attr("height", (d) => svgHeight - y(d.length))
            
        if (profile) {
            const profiles = record.JSON.Series.filter(series => series.Profile).map((series, index) => {
                let dataSource = settings.Data.find(d => d.DataSource.ID === series.DataSourceID)?.Data ?? [];
                let datum = dataSource.find(d => d.ID.toString() === series.ID)?.Data.map(d => d[series.Field]) ?? [];
                let histogram = d3.histogram<number, number>()
                    .value(function (d) { return d; })   // I need to give the vector of value
                    .domain(d3.extent(datum) as [number, number])  // then the domain of the graphic
                    .thresholds(settings.JSON.BinCount)(datum); // then the numbers of bins

                return { Color: series.ProfileColor, Profile: histogram.map((sum => value => sum += value.length)(0)).map((prof, i) => ({ Bin: histogram[i].x0, Value: prof }))};

            });
            //const profiles = histograms.map(hist => hist.map((sum => value => sum += value.length)(0)).map((prof, i) => ({ Bin: hist[i].x0, Value: prof })));
            const pyMax = Math.max(...profiles.map(pr => pr.Profile).reduce((prev, curr) => prev.concat(curr), []).map(p => p.Value))
            
            const py = d3.scaleLinear()
                .range([settings.Height - margin.top - margin.bottom, 0])
                .domain([0, pyMax]);   // d3.hist has to be called before the Y axis obviously

            const pyAxis = svg.append("g")
                .attr("transform", "translate(" + (settings.Width - margin.right) + "," + margin.top + ")")
                .call(d3.axisRight(py));
            svg.append("text")
                .attr("transform", "rotate(-90) translate(-" + settings.Height / 2 + "," + (settings.Width - margin.right/3) + ")")
                .style("text-anchor", "middle")
                .text("Profile")

            //const filteredData = profile.find(ds => ds.ID === series.ID)?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[field] >= axis.Min && ds[field] <= axis.Max)
            const lineFunc = d3.line<{Bin: number, Value: number}>().x(dd => x(dd.Bin)).y(dd => py(dd.Value));

            svg.append("path")
                .data(profiles)
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", d => d.Color)
                .attr("d", (d) => lineFunc(d.Profile))
                .attr("transform", `translate(${margin.left},${margin.top})`)

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

            <Widget {...props} Record={record} Toggle={toggle} SetToggle={(bool) => setToggle(bool) }>
                <div className="col-4">
                    <Input<TrenDAP.iWidget> Field='Label' Record={record} Type='text' Setter={(r) => setRecord(new Histogram(r))} Valid={(field) => true} />

                    <label>Width</label>
                    <div className="input-group">
                        <input type="number" className="form-control" value={record?.Width ?? 0} onChange={(evt) => setRecord(new Histogram({ ...record, Width: parseInt(evt.target.value) }))} />
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setRecord(new Histogram({ ...record, Width: window.innerWidth - 200 }))}>Full Width</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Input<TrenDAP.iHistogram> Field='Units' Record={record.JSON} Type='text' Setter={(r) => setRecord(new Histogram({ ...record, JSON: r }))} Valid={(field) => true} />
                        </div>
                        <div className='col'>
                            <Input<TrenDAP.iHistogram> Field='BinCount' Label='Bins' Record={record.JSON} Type='number' Setter={(r) => setRecord(new Histogram({ ...record, JSON: r }))} Valid={(field) => true} />

                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <Input<TrenDAP.iHistogram> Field='Min' Label='Min' Record={record.JSON as TrenDAP.iHistogram} Type='number' Setter={(r) => setRecord({ ...record, JSON: r })} Valid={(field) => true} />
                        </div>
                        <div className="col">
                            <Input<TrenDAP.iHistogram> Field='Max' Record={record.JSON as TrenDAP.iHistogram} Type='number' Setter={(r) => setRecord({ ...record, JSON: r })} Valid={(field) => true} />
                        </div>
                        <div className="col-2" style={{position: 'relative'}}>
                            <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => setRecord(record.CalculateAxisRange())}>Use Data</button>
                        </div>

                    </div>

                </div>
                <div className="col">
                    <h6>Series</h6>
                    <hr />
                    <div id="accordion" style={{overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight/2}}>
                        {record.Data.map((d, i) =>
                        <React.Fragment key={i}>
                            <div className="card-header">
                                <a className="card-link" data-toggle="collapse" href={"#collapse" + i}>{d.DataSource.Name}</a>
                            </div>
                            <div id={"collapse" + i} className="collapse show" data-parent="#accordion">
                                    <div className="card-body">
                                        <SeriesSelect Widget={record} DataSourceID={d.DataSource.ID} Callback={() => setRecord(new Histogram(record))} />

                                        <ul className="list-group">
                                            {(d.DataSource.Type === 'TrenDAPDB' ? (record.JSON?.Series ?? []).map((series,ind) => {
                                                let datum = (d.Data as TrenDAP.iXDAReturnData[]).find(dd => dd.ID.toString() === series.ID);
                                                if (datum === undefined) return null;
                                                return (
                                                    <li key={series.ID} className="list-group-item">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label>{datum.Name}</label>
                                                                <AdditionalInfoXDA Data={datum} Index={i} />
                                                            </div>
                                                            <SeriesPicker Index={ind} Series={series} Widget={record} Callback={(widget) => setRecord(widget)} />

                                                        </div>
                                                    </li>
                                                )
                                            }) : null)}
                                            {(d.DataSource.Type === 'Sapphire' ? (record.JSON?.Series ?? []).map((series, ind) => {
                                                let datum = (d.Data as TrenDAP.iSapphireReturnData[]).find(dd => dd.ID.toString() === series.ID);
                                                if (datum === undefined) return null;
                                                return (
                                                    <li key={series.ID} className="list-group-item">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label>{datum.Name}</label>
                                                                <AdditionalInfoSapphire Data={datum} Index={i} />
                                                            </div>
                                                            <SeriesPicker Index={ind} Series={series} Widget={record} Callback={(widget) => setRecord(widget)} />

                                                        </div>
                                                    </li>
                                                )
                                            }) : null)}
                                            {(d.DataSource.Type === 'OpenHistorian' ? (record.JSON?.Series ?? []).map((series, ind) => {
                                                let datum = (d.Data as TrenDAP.iOpenHistorianReturn[]).find(dd => dd.ID.toString() === series.ID);
                                                if (datum === undefined) return null;
                                                return (
                                                    <li key={series.ID} className="list-group-item">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label>{datum.Device + ' - ' + datum.Description }</label>
                                                                <AdditionalInfoOpenHistorian Data={datum} />
                                                            </div>
                                                            <SeriesPicker Index={ind} Series={series} Widget={record} Callback={(widget) => setRecord(widget)} />

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

const SeriesPicker = (props: { Index: number, Series: TrenDAP.iHistogramSeries, Widget: Histogram, Callback: (widget: Histogram) => void }) => {
    const [color, setColor] = React.useState<string>(props.Series.Color);
    const [type, setType] = React.useState<TrenDAP.iXDATrendDataPointField>(props.Series.Field);
    const [profile, setProfile] = React.useState<boolean>(props.Series.Profile);
    const [pColor, setPColor] = React.useState<string>(props.Series.ProfileColor);
    React.useEffect(() => props.Callback(props.Widget.UpdateSeries(props.Index, "Color", color)), [color]);
    React.useEffect(() => props.Callback(props.Widget.UpdateSeries(props.Index, "Field", type)), [type]);
    React.useEffect(() => props.Callback(props.Widget.UpdateSeries(props.Index, "Profile", profile)), [profile]);
    React.useEffect(() => props.Callback(props.Widget.UpdateSeries(props.Index, "ProfileColor", pColor)), [pColor]);


    return (
        <>
            <div className="col-2">
                <label>Field</label>
                <select className="form-control" value={type} onChange={(evt) => setType(evt.target.value as TrenDAP.iXDATrendDataPointField)}>
                    <option value="Average">Avg</option>
                    <option value="Minimum">Min</option>
                    <option value="Maximum">Max</option>
                </select>
            </div>
            <div className="col">
                <label>Color</label>
                <input type="color" className="form-control" value={color} onChange={(evt) => setColor(evt.target.value)} />
            </div>
            <div className="col-1">
                <label>Profile</label>
                <input type="checkbox" className="form-control" style={{width: 20}}  value={profile?.toString()} checked={profile} onChange={(evt) => setProfile(evt.target.checked)} />
            </div>
            <div className="col">
                <label>Profile Color</label>
                <input type="color" className="form-control" value={pColor} onChange={(evt) => setPColor(evt.target.value)} />
            </div>

            <div className="col-1">
                <button className="btn btn-link" onClick={() => props.Callback(props.Widget.RemoveSeries(props.Index)) }>{CrossMark}</button>
            </div>
        </>

);
}