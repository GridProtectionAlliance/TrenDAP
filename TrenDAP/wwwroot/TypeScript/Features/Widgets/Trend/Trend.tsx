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
import { TrenDAP, Redux } from '../../../global';
import styles from '../../../../Styles/app.scss';
import { Input, CheckBox, Select } from '@gpa-gemstone/react-forms';

import Widget, { SeriesSelect } from '../Widget/Widget';
import AdditionalInfoXDA from '../Widget/XDA/AdditionalInfo';
import AdditionalInfoOpenHistorian from '../Widget/OpenHistorian/AdditionalInfo';
import { CrossMark, Plus } from '../../../Constants';
import { Trend } from '../../../Implementations';
import moment from 'moment';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import SwitchButton from 'bootstrap-switch-button-react';
import { Switch } from 'react-router';
import Axis from './Axis';
import SeriesPicker from './SeriesPicker';

export default function TrendJSX(props: TrenDAP.iWidget<TrenDAP.iTrend>) {
    const ref = React.useRef(null);
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [record, setRecord] = React.useState<Trend>(new Trend(props));
    const hover = React.useRef<number>(-10);
    const svgs = React.useRef<d3.Selection<SVGSVGElement, unknown, null, undefined>[]>([]);
    const margin = React.useRef<{ bottom: number, left: number, top: number, right: number }>({ bottom: 50, left: 50, top: 40, right: 50 });
    const [chartAction, setChartAction] = React.useState<TrenDAP.ChartAction>('Pan');
    const chartActionRef = React.useRef<TrenDAP.ChartAction>('Pan');
    const setHover = React.useCallback((value) => {
        HandleHoverUpdate(value);
    }, []);

    try {
        
        React.useEffect(() => {
            setRecord(new Trend(props));
        }, [props]);

        React.useEffect(() => {
            chartActionRef.current = chartAction;
        }, [chartAction]);

        React.useEffect(() => {
            Initialize(record)
        }, [record])

        React.useEffect(() => {
            setRecord(new Trend({ ...record, Height: props.Height }))
        }, [props.Height])

        React.useEffect(() => {
            setRecord(new Trend({ ...record, Data: props.Data }));
        }, [props.Data]);

        React.useEffect(() => {
            return () => { d3.select(ref.current).selectAll('svg').remove(); }
        }, []);


    }
    catch (ex) {
        console.log(ex);
    }

    function Initialize(settings: Trend) {
        let svgCount = 1;
        if (settings.JSON.Split && settings.JSON.SplitType === 'Axis') {
            margin.current = { bottom: 50, left: 50, top: 40, right: 50 };
            svgCount = settings.JSON.YAxis.length;
        }
        else if (settings.JSON.Split && settings.JSON.SplitType === 'Series') {
            margin.current = { bottom: 50, left: 50, top: 40, right: 50 }
            svgCount = settings.JSON.Series.length;
        }
        else
            margin.current = {
                bottom: 50,
                left: (settings.JSON.YAxis.filter(axis => axis.Position === 'left').length == 0 ? 50 : settings.JSON.YAxis.filter(axis => axis.Position === 'left').length * 50),
                top: 40,
                right: (settings.JSON.YAxis.filter(axis => axis.Position === 'right').length == 0 ? 50 : settings.JSON.YAxis.filter(axis => axis.Position === 'right').length * 50)
            };

        if (settings.JSON.Legend) margin.current.right = margin.current.right + 200;

        const svgHeight = props.Height / svgCount;

        if (svgs.current.length !== svgCount) {
            svgs.current = [];
            d3.select(ref.current).selectAll('svg').remove()
            for (let i = 0; i < svgCount; i++) {
                const svg = d3.select(ref.current)
                    .append('svg')
                    .attr('width', settings.Width)
                    .attr('height', svgHeight)
                svgs.current.push(svg);

            }


        }

        const x = GetXScale(settings);

        
        svgs.current.forEach((svg, i) => {
            if (settings.JSON.Split && settings.JSON.SplitType === 'Axis')
                return InitializeSplitOnAxis(settings, svg, x, i);
            if (settings.JSON.Split && settings.JSON.SplitType === 'Series')
                return InitializeSplitOnSeries(settings, svg, x, i);
            else
                return InitializeNotSplit(settings, svg, x);
        });           
    }

    function InitializeSplitOnSeries(settings: Trend, svg, x: d3.ScaleTime<number, number>, i: number) {
        const svgHeight = parseInt(svg.attr('height'));

        const series = settings.JSON.Series[i];
        const axis = settings.JSON.YAxis[series.Axis];
        const field = series.Field;

        AddXAxis(svg, x);

        const y = GetYScale(svgHeight, axis);
        svg.selectAll('g.yaxis').remove();
        AddYAxisLeft(axis, svg, y);

        const filteredData = ((record.Data.find(ds => ds.DataSource.ID === series.DataSourceID)?.Data ?? []).find(ds => ds.ID === series.ID)?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[field] >= axis.Min && ds[field] <= axis.Max)
        const lineFunc = d3.line<TrenDAP.iXDATrendDataPoint>().x(dd => x(moment(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ'))).y(dd => y(dd[series.Field]));

        svg.selectAll("g.line").remove();
        svg.selectAll('g.line')
            .data([filteredData] as TrenDAP.iXDATrendDataPoint[][])
            .enter()
            .append('g')
            .classed('line', true)
            .append("path")            
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", series.Color)
            .attr("d", (d) => {
                return lineFunc(d)
            })

        if (series.ShowEvents) {
            AddEventLine(series, svg, x);
        }

        svg.selectAll("g.legend").remove();
        if (settings.JSON.Legend) {
            AddLegend(svg, [series]);
        }

        svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX));
        svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x));

    }

    function InitializeSplitOnAxis(settings: Trend, svg, x: d3.ScaleTime<number, number>, i: number) {
            const svgHeight = parseInt(svg.attr('height'));
            const axis = settings.JSON.YAxis[i];
            const series = settings.JSON.Series.filter((s) => s.Axis === i).map(s => ({
                ...s,
                Data: ((record.Data.find(ds => ds.DataSource.ID === s.DataSourceID)?.Data ?? []).find(ds => ds.ID === s.ID)?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[s.Field] >= axis.Min && ds[s.Field] <= axis.Max).map(point => [point.Timestamp, point[s.Field]])
            }));

            AddXAxis(svg, x);

            const y = GetYScale(svgHeight, axis);
            svg.selectAll('g.yaxis').remove();
            AddYAxisLeft(axis, svg, y);

            const lineFunc = d3.line<[string, number]>().x(dd => x(moment(dd[0], 'YYYY-MM-DDTHH:mm:ss.fffZ'))).y(dd => y(dd[1]));

            svg.selectAll("g.line").remove();
            svg.selectAll("g.line")
                .data(series)
                .enter()
                .append('g')
                .classed('line', true)
                .append("path")
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", (s) => s.Color)
                .attr("d", (s) => lineFunc(s.Data as [string, number][]))

            series.forEach(s => AddEventLine(s,svg, x))

            svg.selectAll("g.legend").remove();
            if (settings.JSON.Legend) {
                AddLegend(svg, series);
            }


            svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX));
            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x));
    }

    function InitializeNotSplit(settings: Trend, svg, x: d3.ScaleTime<number, number>) {
        AddXAxis(svg, x);
        const y = settings.JSON.YAxis.map(axis => GetYScale(settings.Height, axis));

        svg.selectAll('g.yaxis').remove();
        const yAxis = settings.JSON.YAxis.map((axis, index) => {
            let a;
            if (axis.Position === 'left') {
                let ind = settings.JSON.YAxis.filter(axis => axis.Position === 'left').findIndex(axis => axis === settings.JSON.YAxis[index]);
                AddYAxisLeft(axis, svg, y[index], false, ind);
            }
            else {
                let ind = settings.JSON.YAxis.filter(axis => axis.Position === 'right').findIndex(axis => axis === settings.JSON.YAxis[index]);
                AddYAxisRight(axis, svg, y[index], ind);
            }

            return a;

        });

        svg.selectAll("g.legend").remove();
        if (settings.JSON.Legend) {
            AddLegend(svg, settings.JSON.Series);
        }

        svg.selectAll("g.line").remove();
        svg.selectAll("g.line")
            .data(settings.JSON.Series)
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", (d: TrenDAP.iTrendSeries) => d.Color)
            .attr("d", (d: TrenDAP.iTrendSeries) => {
                let yScale = y[d.Axis];
                let lineFunc = d3.line<TrenDAP.iXDATrendDataPoint>().x(dd => x(moment(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ'))).y(dd => yScale(dd[d.Field]));
                let filteredData = ((record.Data.find(ds => ds.DataSource.ID === d.DataSourceID)?.Data ?? []).find(ds => ds.ID === d.ID)?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[d.Field] >= settings.JSON.YAxis[d.Axis]?.Min && ds[d.Field] <= settings.JSON.YAxis[d.Axis]?.Max)
                return lineFunc(filteredData);
            })
        svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX))
        svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x))

        settings.JSON.Series.filter(series => series.ShowEvents).forEach(series => AddEventLine(series, svg, x));
    }

    function AddLegend(svg, series: TrenDAP.iTrendSeries[]) {
        const svgHeight = parseInt(svg.attr('height'));
        const svgWidth = parseInt(svg.attr('width'));

        const legend = svg.selectAll('g.legend')
            .data([series])
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${svgWidth - 200},${margin.current.top})`);

        const legendRows = legend.selectAll('g.legendRow')
            .data(d => d)
            .enter()
            .append('g')
            .attr('class', 'legendrow')
            .attr('transform', (d, i) => `translate(10,${i * 30})`);

        legendRows.append('rect').attr('height', 20).attr('width', 20).attr('fill', d => d.Color)
        legendRows.append('text').attr('x', 30).attr('y', 15)
          .text(function(d){
              if (d.Label.length > 15)
                  return d.Label.slice(0, 15) + '...';
              else
                  return d.Label;
          });
        legendRows.append('title').text(d => d.Label)
    }
        
    function AddEventLine(series: TrenDAP.iTrendSeries, svg, x) {
        const svgHeight = parseInt(svg.attr('height'))
        

        const data = ((record.Data.find(ds => ds.DataSource.ID === series.DataSourceID)?.Data as TrenDAP.iXDAReturnData[] ?? []).find(ds => ds.ID.toString() === series.ID)?.Events ?? [])
        svg.selectAll('g.event-line').remove();
        const g = svg.selectAll('g.event-line')
            .data(data)
            .enter()
            .append('g')
            .classed('event-line', true)
        g.append('path')
            .attr('stroke-width', '2px')
            .attr("d", d => `M0,${svgHeight - margin.current.bottom - margin.current.top}L-10,${svgHeight - margin.current.bottom - margin.current.top + 10},L10,${svgHeight - margin.current.bottom - margin.current.top + 10}L0,${svgHeight - margin.current.bottom - margin.current.top}Z`)
            .attr("transform", d => `translate(${x(moment(d.StartTime, 'YYYY-MM-DDTHH:mm:ss.fff'))},${margin.current.top})`)
            .attr('stroke', 'red')
            .attr('fill', 'red')
            .style('cursor', 'pointer')
            .on('click', (e, d) => {
                window.open(record.Data.find(ds => ds.DataSource.ID === series.DataSourceID).DataSource.OpenSEE + '?eventID=' + d.ID)
            })
    }

    function AddXAxis(svg, x) {
        const svgWidth = parseInt(svg.attr('width'));
        const svgHeight = parseInt(svg.attr('height'));

        svg.selectAll('g.xaxis').remove();
        const xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.current.bottom) + ")")
            .call(d3.axisBottom(x))

        svg.append("g").classed('xaxis', true).append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.current.bottom / 3) + ")")
            .text("Time")

    }

    function AddYAxisLeft(axis: TrenDAP.iYAxis, svg, y, rotate: boolean = true, index: number = 0) {
        const svgWidth = parseInt(svg.attr('width'));
        const svgHeight = parseInt(svg.attr('height'));

        const yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + (margin.current.left - index * 50) + ",0)")
            .call(d3.axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => d3.format("~s")(value)));

        const text = svg.append("g")
            .classed('yaxis', true)
            .append("text")                 
            .text(axis.Units);
        if (rotate)
            text.attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + ((margin.current.left - index * 50) / 3) + ")").style("text-anchor", "middle");
        else
            text.attr("transform", "translate(" + (margin.current.left - index * 50) + "," + (svgHeight - margin.current.bottom / 2) + ")").style("text-anchor", "end");
    }

    function AddYAxisRight(axis: TrenDAP.iYAxis, svg, y, index: number = 0) {
        const svgWidth = parseInt(svg.attr('width'));
        const svgHeight = parseInt(svg.attr('height'));

        const yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + (svgWidth - margin.current.right + index * 50) + ",0)")
            .call(d3.axisRight(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => d3.format("~s")(value)));

        const text = svg.append("g")
            .classed('yaxis', true)
            .append("text")
            .text(axis.Units);
            text.attr("transform", "translate(" + (svgWidth - margin.current.right + index * 50) + "," + (svgHeight - margin.current.bottom / 2) + ")").style("text-anchor", "start");
    }

    function GetXScale(settings: Trend) {
        return d3.scaleUtc()
            .domain([settings.JSON.Min, settings.JSON.Max])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([margin.current.left, settings.Width - margin.current.right]);
    }

    function GetYScale(svgHeight: number, axis: TrenDAP.iYAxis) {
        return d3.scaleLinear()
            .range([svgHeight - margin.current.bottom, margin.current.top])
            .domain([axis.Min, axis.Max])
    }

    function HandleHoverUpdate(hover: number) {
        if (chartActionRef.current !== 'Click') return;
        svgs.current.forEach((svg, index) => {
            const height = parseInt(svg.attr('height')) - margin.current.top - margin.current.bottom;

            if (hover >= margin.current.left && hover <= (props.Width - margin.current.right)) {
                svg.selectAll('g.mouse-over').remove()
                svg.append('g')
                    .classed('mouse-over', true)
                    .append('path')
                    .attr("d", d => `M 0 0 V ${height}`)
                    .attr("transform", `translate(${hover},${margin.current.top})`)
                    .attr('stroke', 'gray')

            }

        });
    }

    function HandleReset() {
        setRecord(record.CalculateAxisRange('x'));
    }

    function HandleChartAction(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
        const height = parseInt(svg.attr('height'));
        const width = parseInt(svg.attr('width'));
        evt.preventDefault();
        if (evt.offsetX < margin.current.left || evt.offsetX > width - margin.current.right) return;
        else if (evt.offsetY < margin.current.top || evt.offsetY >height - margin.current.bottom) return;
        else if (chartActionRef.current == 'Click')
            OnClick(evt, svg, scale);
        else if (chartActionRef.current == 'Pan')
            OnPan(evt, svg, scale)
        else if (chartActionRef.current == 'ZoomX')
            OnXZoom(evt, svg, scale)


    }

    function OnClick(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
        const height = parseInt(svg.attr('height'));
        const tooltipHeight = record.JSON.Series.length * 15;
        if (evt.offsetX < margin.current.left && evt.offsetX > (props.Width - margin.current.right)) return;

        svg.selectAll('g.mouse-over2').remove()
        svg.append('g')
            .classed('mouse-over2', true)
            .append('path')
            .attr("d", d => `M 0 0 V ${height - margin.current.bottom - margin.current.top}`)
            .attr("transform", `translate(${evt.offsetX},${margin.current.top})`)
            .attr('stroke', 'grey')


        svg.selectAll('g.charttooltip').remove();
        const tooltip = svg.append('g')
            .attr('class', 'charttooltip')
            .attr("transform", `translate(${evt.offsetX + 15},${evt.offsetY - tooltipHeight/2})`);
        const rect = tooltip.append('rect')
            .attr('fill', 'gainsboro')
            .attr('height', record.JSON.Series.length + 'em')
            .attr('width', 200)
            .attr('x', 0)
            .attr('y',0)
        const text = tooltip.append('text')
            .attr('x', 0)
            .attr('y', 0)

        let width = 200;
        record.JSON.Series.forEach((series, index) => {
            tooltip.append('rect').attr('x', 5).attr('y', `${index}em`).attr('height', '1em').attr('width', '1em').attr('fill', series.Color);
            const dataSource = record.Data.find(ds => ds.DataSource.ID == series.DataSourceID)?.Data ?? [];
            const data = dataSource.find(ds => ds.ID == series.ID)?.Data ?? [];
            const floor = Math.floor(data.length * evt.offsetX / props.Width * .95);
            const ceil = Math.ceil(data.length * evt.offsetX / props.Width * 1.05);
            const shortenedData = data.slice(floor, ceil);
            const dist = shortenedData.map(datum => ({ Value: datum[series.Field], Distance: Math.abs(evt.offsetX - scale(moment(datum.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ').toDate().getTime())) }));
            dist.sort((a, b) => {
                if (a.Distance > b.Distance) return 1;
                else if (a.Distance == b.Distance) return 0;
                else return -1;
            })
            const datum = d3.format('.2f')(dist[0].Value);
            text.append('tspan').text(series.Label + ' - ' + datum).attr('x', '1.5em').attr('y', `${index+1}em`);
            width = text.node().getBBox().width + 25 > width ? text.node().getBBox().width + 25  : width;
        });
        rect.attr('width', width);
        if (width > props.Width - margin.current.right - evt.offsetX)
            tooltip.attr("transform", `translate(${evt.offsetX - 15 - width},${evt.offsetY - tooltipHeight / 2})`);
    }

    function OnPan(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
        const start = evt.clientX;
        svg.on('mousemove.pan', (e: MouseEvent) => {
            record.UpdateJSON('Min', scale.invert(scale.range()[0] + start - e.clientX).getTime())
            setRecord(new Trend(record.UpdateJSON('Max', scale.invert(scale.range()[1] + start - e.clientX).getTime())))
        });
        svg.on('mouseup.pan', () => svg.on('mousemove.pan', null));
    }

    function OnXZoom(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
        const start = evt.offsetX;
        const brush = d3.brushX()
            .extent([[margin.current.left, margin.current.top + 0.5], [props.Width - margin.current.right, parseInt(svg.attr('height')) - margin.current.bottom + 0.5]])
        const br = svg.append('g').call(brush)
        br.call(brush.move, [start, start + 1]);
        svg.on('mousemove.brush', (e: MouseEvent) => {
            br.call(brush.move, [start, e.offsetX]);
        })
        svg.on('mouseup.brush', (e: MouseEvent) => {
            const min = Math.min(start, e.offsetX);
            const max = Math.max(start, e.offsetX);
            record.UpdateJSON('Min', scale.invert(min).getTime())
            setRecord(new Trend(record.UpdateJSON('Max', scale.invert(max).getTime())))

            br.remove();
            svg.on('mousemove.brush', null);
            svg.on('mouseup.brush', null);
        });
    }

    return (
        <div className="card" style={{ width: props.Width, height: props.Height }}>
            <div className="card-body" style={{ padding: 0 }}>
                <div className={styles["widgit-label"]}>
                    <span>{props.Label}
                        <button className={"btn " + styles["widgit-controls"]} title='Widget Settings' onClick={() => setToggle(true)}><i className="fa fa-cog"></i></button>
                    </span>
                </div>
                <div ref={ref} style={{ userSelect: 'none' }}>
                    <div style={{ position: 'absolute', left: 10, zIndex: 1010 }}>
                        <button className='btn btn-light' onClick={HandleReset}>Reset</button>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" checked={chartAction == 'Pan'} onChange={(evt) => setChartAction('Pan')} />Pan
                                </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" checked={chartAction == 'ZoomX'} onChange={(evt) => setChartAction('ZoomX')} />Zoom
                                </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" checked={chartAction == 'Click'} onChange={(evt) => setChartAction('Click')} />Click
                                </label>
                        </div>

                        {/*
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" checked={chartAction == 'ZoomY'} onChange={(evt) => setChartAction('ZoomY')} />Zoom Y
                                </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" checked={chartAction == 'ZoomXY'} onChange={(evt) => setChartAction('ZoomXY')} />Zoom X & Y
                                </label>
                                </div>
                            */}
                    </div>

                </div>
            </div>

            <Widget {...props} Record={record} Toggle={toggle} SetToggle={(bool) => setToggle(bool)}>
                <div className="col">
                    <Input<TrenDAP.iWidget> Field='Label' Record={record} Type='text' Setter={(r) => setRecord(new Trend(r))} Valid={(field) => true} />

                    <label>Width</label>
                    <div className="input-group">
                        <input type="number" className="form-control" value={record?.Width} onChange={(evt) => setRecord(new Trend({ ...record,Width: parseInt(evt.target.value)}))} />
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setRecord(new Trend({ ...record, Width: window.innerWidth - 200})) }>Full Width</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <label>Split</label>
                            <br/>
                            <SwitchButton checked={record?.JSON?.Split ?? false} onChange={(checked: boolean) => setRecord(record.UpdateJSON('Split', checked))} />
                        </div>
                        <div className='col-2'>
                            <Select<TrenDAP.iTrend> Label='Split On' Field='SplitType' Record={record?.JSON} Setter={(r) => setRecord(new Trend({ ...record, JSON: r }))} Options={[{ Value: 'Axis', Label: 'Axis' }, { Value: 'Series', Label: 'Series' }]} />
                        </div>
                        <div className='col-2'>
                            <label>Legend</label>
                            <br />
                            <SwitchButton checked={record.JSON?.Legend ?? false} onChange={(checked: boolean) => setRecord(record.UpdateJSON('Legend', checked))} />
                        </div>

                    </div>
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
                    <ul className="list-group list-group-flush" style={{maxHeight: window.innerHeight - 625, overflowY: 'auto', overflowX: 'hidden', width: '100%' }}>

                        {record.JSON.YAxis.map((axis, index) => (
                            <li key={index} className='list-group-item'><Axis Axis={axis} Index={index} Widget={record} Callback={() => setRecord(new Trend(record)) }/></li>
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h6>Series</h6>
                    <hr />
                    <div id="accordion" style={{ overflowY: 'auto', maxHeight: window.innerHeight - 250}}>
                        {record.Data.map((d, i) =>
                            <React.Fragment key={i}>
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href={"#collapse" + i}>{d.DataSource.Name}</a>
                                </div>
                                <div id={"collapse" + i} className="collapse show" data-parent="#accordion">
                                    <div className="card-body">
                                        {(d.DataSource.Type === 'TrenDAPDB' ?
                                        <>
                                            <button className='btn btn-primary' onClick={() => setRecord(record.QuickAddVoltageRMS(d.DataSource.ID))}>Quick Add VRMS</button>
                                            <button className='btn btn-primary' onClick={() => setRecord(record.QuickAddCurrentRMS(d.DataSource.ID))}>Quick Add IRMS</button>
                                            <button className='btn btn-primary' onClick={() => setRecord(record.RemoveAll(d.DataSource.ID))}>Remove All</button> 
                                        </>: null)
                                    }
                                        <SeriesSelect Widget={record} DataSourceID={d.DataSource.ID} Callback={() => setRecord(new Trend(record))} />
                                        <ul className="list-group">
                                            {record.JSON.Series.map((series, ind) => {
                                                let datum = d.Data.find(dd => dd.ID === series.ID);
                                                if (datum === undefined) return null;
                                                return (
                                                    <li key={series.ID} className="list-group-item">                                                            
                                                        <SeriesPicker Type={d.DataSource.Type} Index={ind} Series={series} Data={datum as TrenDAP.iXDAReturnData} Widget={record} Callback={() => setRecord(new Trend(record))} />
                                                    </li>
                                                )
                                            })}
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