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
//  11/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { axisBottom, axisLeft, axisRight, brushX, format, line, scaleLinear, scaleUtc, select } from 'd3';
import * as React from 'react';
import { TrenDAP } from '../../../../global';
import { Input, Select, CheckBox } from '@gpa-gemstone/react-forms';
import { OpenXDA, OpenHistorian } from '@gpa-gemstone/application-typings';
import { WidgetTypes } from '../../Interfaces';
import { Plus } from '@gpa-gemstone/gpa-symbols';
import moment from 'moment';
import "react-datetime/css/react-datetime.css";
import SwitchButton from 'bootstrap-switch-button-react';
import Axis from './Axis';
import SeriesPicker from './SeriesPicker';

export interface IProps { Min: number, Max: number, YAxis: TrenDAP.iYAxis[], Legend: boolean, Split: boolean, SplitType: 'Axis' | 'Series', Series: TrenDAP.iTrendTemplateSeries[] }

export const TrendWidget: WidgetTypes.IWidget<IProps,any> = {
    DefaultSettings: {
        Min: 0,
        Max: 100,
        YAxis: [{ Min: 0, Max: 100, Units: "", Position: "left" }],
        Legend: true,
        Split: false,
        SplitType: 'Axis',
        Series: [],
    },
    DefaultChannelSettings: null,
    Name: "Trend",
    WidgetUI: (props) => {
        const ref = React.useRef(null);
        /*
        const hover = React.useRef<number>(-10);
        const svgs = React.useRef<d3.Selection<SVGSVGElement, unknown, null, undefined>[]>([]);
        const margin = React.useRef<{ bottom: number, left: number, top: number, right: number }>({ bottom: 50, left: 50, top: 40, right: 50 });
        const [chartAction, setChartAction] = React.useState<TrenDAP.ChartAction>('Pan');
        const chartActionRef = React.useRef<TrenDAP.ChartAction>('Pan');
        const setHover = React.useCallback((value) => {
            HandleHoverUpdate(value);
        }, []);

        try { //once we get loaddataset reworked this needs to be reworked.. we shouldnt be wrapping all the useffects in a try catch unless we have a valid reason to do so..

            React.useEffect(() => {
                chartActionRef.current = chartAction;
            }, [chartAction]);

            React.useEffect(() => {
                Initialize(props)
            }, [props])

            React.useEffect(() => {
                return () => { select(ref.current).selectAll('svg').remove(); }
            }, []);

        }
        catch (ex) {
            console.log(ex);
        }
        
        function GetDataSeries(series: TrenDAP.iTrendTemplateSeries): TrenDAP.iDataSetReturnType {
            const dataSource = props.Data.find(dd => dd.DataSource.ID === series?.DataSourceID ?? 0)
            const data = dataSource?.Data ?? [];
            let datum;

            if (dataSource?.DataSource.Type === 'OpenHistorian') {
                let s = series as TrenDAP.iTrendTemplateSeriesOpenHistorian;
                datum = data.find((dd: TrenDAP.iOpenHistorianReturn) => dd[props.By] === props.Device && dd.SignalType === s.Type && dd.Phase === s.Phase);
            }
            else if (dataSource?.DataSource.Type === 'TrenDAPDB') {
                let s = series as TrenDAP.iTrendTemplateSeriesXDA;
                datum = data.find((dd: TrenDAP.iXDAReturnData) => dd[props.By] === props.Device && dd.Type === s.Type && dd.Phase === s.Phase && dd.Characteristic === s.Characteristic);
            }
            else if (dataSource?.DataSource.Type === 'Sapphire') {
                let s = series as TrenDAP.iTrendTemplateSeriesSapphire;
                datum = data.find((dd: TrenDAP.iSapphireReturnData) => dd.Meter === props.Device && dd.Phase === s.Phase && dd.Characteristic === s.Measurement && dd.Harmonic == s.Harmonic);
            }
            else
                datum = { Data: [] };

            return datum;
        }
        
        function GetDataSeriesForD3(series: TrenDAP.iTrendTemplateSeries) {
            return (GetDataSeries(series)?.Data ?? []).map(d => [new Date(d.Timestamp).getTime(), d[series.Field]]);
        }

        
        function GetDataSeriesName(series: TrenDAP.iTrendTemplateSeries): string {
            const dataSeries = GetDataSeries(series);
            if (series == undefined) return '';
            const dataSource = props.Data.find(dd => dd.DataSource.ID === series?.DataSourceID ?? 0)

            if (dataSource?.DataSource.Type === 'OpenHistorian') {
                let d = dataSeries as TrenDAP.iOpenHistorianReturn;
                return d?.PointTag ?? ''
            }
            else if (dataSource?.DataSource.Type === 'TrenDAPDB') {
                let d = dataSeries as TrenDAP.iXDAReturnData;
                return d?.Name ?? ''
            }
            else if (dataSource?.DataSource.Type === 'Sapphire') {
                let d = dataSeries as TrenDAP.iSapphireReturnData;
                return d?.Name ?? ''
            }
            else
                return '';
        }
        
        function Initialize(settings: TrenDAP.IWidgetProps<TrenDAP.ITrend>) {
            //d3.select(ref.current).selectAll('svg').remove()
            let svgCount = 1;
            if (settings.Settings.Split && settings.Settings.SplitType === 'Axis') {
                margin.current = { bottom: 50, left: 50, top: 40, right: 50 };
                svgCount = settings.Settings.YAxis.length;
            }
            else if (settings.Settings.Split && settings.Settings.SplitType === 'Series') {
                margin.current = { bottom: 50, left: 50, top: 40, right: 50 }
                svgCount = settings.Settings.Series.length;
            }
            else
                margin.current = {
                    bottom: 50,
                    left: (settings.Settings.YAxis.filter(axis => axis.Position === 'left').length == 0 ? 50 : settings.Settings.YAxis.filter(axis => axis.Position === 'left').length * 50),
                    top: 40,
                    right: (settings.Settings.YAxis.filter(axis => axis.Position === 'right').length == 0 ? 50 : settings.Settings.YAxis.filter(axis => axis.Position === 'right').length * 50)
                };

            if (settings.Settings.Legend) margin.current.right = margin.current.right + 200;

            const svgHeight = props.Height / svgCount;

            if (svgs.current.length !== svgCount) {
                svgs.current = [];
                select(ref.current).selectAll('svg').remove()
                for (let i = 0; i < svgCount; i++) {
                    const svg = select(ref.current).append('svg')
                    svg.attr('width', settings.Width).attr('height', svgHeight)

                    svgs.current.push(svg);

                }


            }

            const x = GetXScale(settings);


            svgs.current.forEach((svg, i) => {
                if (settings.Settings.Split && settings.Settings.SplitType === 'Axis')
                    return InitializeSplitOnAxis(settings, svg, x, i);
                if (settings.Settings.Split && settings.Settings.SplitType === 'Series')
                    return InitializeSplitOnSeries(settings, svg, x, i);
                else
                    return InitializeNotSplit(settings, svg, x);
            });
        }
        
        function InitializeSplitOnSeries(settings: TrenDAP.IWidgetProps<TrenDAP.ITrend>, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, x: d3.ScaleTime<number, number>, i: number) {
            const svgHeight = parseInt(svg.attr('height'));

            const series = settings.Settings.Series[i];
            const axis = settings.Settings.YAxis[series.Axis];
            const field = series.Field;

            AddXAxis(svg, x);

            const y = GetYScale(settings, svgHeight, series.Axis);
            svg.selectAll('g.yaxis').remove();
            AddYAxisLeft(axis, svg, y);

            let lineFunc = line<number[]>().x(dd => x(dd[0])).y(dd => y(dd[1]));
            let data = GetDataSeriesForD3(series);

            svg.selectAll("g.line").remove();
            svg.selectAll('g.line')
                .data([data])
                .enter()
                .append('g')
                .classed('line', true)
                .append("path")
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", series.Color)
                .attr("d", (d) => {
                    return lineFunc(data);

                })

            if ((series as TrenDAP.iTrendTemplateSeriesXDA).ShowEvents) {
                AddEventLine(series as TrenDAP.iTrendTemplateSeriesXDA, svg, x);
            }

            svg.selectAll("g.legend").remove();
            if (settings.Settings.Legend) {
                AddLegend(svg, [series] as TrenDAP.iTrendTemplateSeriesXDA[]);
            }

            svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX));
            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x));

        }

        function InitializeSplitOnAxis(settings: TrenDAP.IWidgetProps<TrenDAP.ITrend>, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, x: d3.ScaleTime<number, number>, i: number) {
            const svgHeight = parseInt(svg.attr('height'));
            const axis = settings.Settings.YAxis[i];
            const series = (settings.Settings.Series as any[]).filter((s) => s.Axis === i).map((s: TrenDAP.iTrendTemplateSeries) => {
                const dataSource = props.Data.find(dd => dd.DataSource.ID === s?.DataSourceID ?? 0)
                const data = dataSource?.Data ?? [];
                let datum = GetDataSeries(s);

                return {
                    ...s,
                    Data: (datum?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.Settings.Min && moment(ds.Timestamp).toDate().getTime() <= settings.Settings.Max && ds[s.Field] >= axis.Min && ds[s.Field] <= axis.Max).map(point => [point.Timestamp, point[s.Field]])
                }
            });

            AddXAxis(svg, x);

            const y = GetYScale(settings, svgHeight, i);
            svg.selectAll('g.yaxis').remove();
            AddYAxisLeft(axis, svg, y);

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
                .attr("d", (s) => {
                    let lineFunc = line<number[]>().x(dd => x(dd[0])).y(dd => y(dd[1]));
                    let data = GetDataSeriesForD3(s);
                    return lineFunc(data);

                })

            series.forEach(s => AddEventLine(s, svg, x))

            svg.selectAll("g.legend").remove();
            if (settings.Settings.Legend) {
                AddLegend(svg, series);
            }


            svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX));
            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x));
        }

        function InitializeNotSplit(settings: TrenDAP.IWidgetProps<TrenDAP.ITrend>, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, x: d3.ScaleTime<number, number>) {
            AddXAxis(svg, x);
            const y = settings.Settings.YAxis.map((axis, index) => GetYScale(settings, settings.Height, index));
            svg.selectAll('g.yaxis').remove();
            const yAxis = settings.Settings.YAxis.map((axis, index) => {
                let a;
                if (axis.Position === 'left') {
                    let ind = settings.Settings.YAxis.filter(axis => axis.Position === 'left').findIndex(axis => axis === settings.Settings.YAxis[index]);
                    AddYAxisLeft(axis, svg, y[index], false, ind);
                }
                else {
                    let ind = settings.Settings.YAxis.filter(axis => axis.Position === 'right').findIndex(axis => axis === settings.Settings.YAxis[index]);
                    AddYAxisRight(axis, svg, y[index], ind);
                }

                return a;

            });

            svg.selectAll("g.legend").remove();
            if (settings.Settings.Legend) {
                AddLegend(svg, settings.Settings.Series);
            }

            svg.selectAll("g.line").remove();
            svg.selectAll("g.line")
                .data(settings.Settings.Series)
                .enter()
                .append("g")
                .classed("line", true)
                .append("path")
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", (d: TrenDAP.iTrendSeries) => d.Color)
                .attr("d", (d: TrenDAP.iTrendSeries) => {
                    let yScale = y[d.Axis];
                    let lineFunc = line<number[]>().x(dd => x(dd[0])).y(dd => yScale(dd[1]));
                    let data = GetDataSeriesForD3(d);
                    return lineFunc(data);
                })

            svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX))
            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x))

            settings.Settings.Series.filter((series: TrenDAP.iTrendTemplateSeriesXDA) => series.ShowEvents).forEach(series => AddEventLine(series, svg, x));

        }

        function AddLegend(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, series: TrenDAP.iTrendTemplateSeries[]) {
            const svgHeight = parseInt(svg.attr('height'));
            const svgWidth = parseInt(svg.attr('width'));

            const legend = svg.selectAll('g.legend')
                .data([series])
                .enter()
                .append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${svgWidth - 200},${margin.current.top})`);

            const legendRows = legend.selectAll('g.legendRow')
                .data(d => d as TrenDAP.iTrendTemplateSeries[])
                .enter()
                .append('g')
                .attr('class', 'legendrow')
                .attr('transform', (d, i) => `translate(10,${i * 30})`);

            legendRows.append('rect').attr('height', 20).attr('width', 20).attr('fill', d => d.Color)
            legendRows.append('text').attr('x', 30).attr('y', 15)
                .text(function (s) {
                    const name = GetDataSeriesName(s);


                    if (name.length > 15)
                        return name.slice(0, 15) + '...';
                    else
                        return name;
                });
            legendRows.append('title').text(d => d.Label)
        }

        function AddEventLine(series: TrenDAP.iTrendTemplateSeries, svg, x) {
            const svgHeight = parseInt(svg.attr('height'))

            const dataSource = props.Data.find(dd => dd.DataSource.ID === series?.DataSourceID ?? 0)
            if (dataSource == undefined) return;
            const data = dataSource?.Data ?? [];
            let datum = GetDataSeries(series);
            let d = (datum as TrenDAP.iXDAReturnData)?.Events ?? [];

            svg.selectAll('g.event-line').remove();
            const g = svg.selectAll('g.event-line')
                .data(d)
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
                    window.open(props.Data.find(ds => ds.DataSource.ID === series.DataSourceID).DataSource.OpenSEE + '?eventID=' + d.ID)
                })
        }

        function AddXAxis(svg, x) {
            const svgWidth = parseInt(svg.attr('width'));
            const svgHeight = parseInt(svg.attr('height'));

            svg.selectAll('g.xaxis').remove();
            const xAxis = svg.append("g").classed('xaxis', true)
                .attr("transform", "translate(0," + (svgHeight - margin.current.bottom) + ")")
                .call(axisBottom(x))

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
                .call(axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => format("~s")(value)));

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
                .call(axisRight(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => format("~s")(value)));

            const text = svg.append("g")
                .classed('yaxis', true)
                .append("text")
                .text(axis.Units);
            text.attr("transform", "translate(" + (svgWidth - margin.current.right + index * 50) + "," + (svgHeight - margin.current.bottom / 2) + ")").style("text-anchor", "start");
        }

        function GetXScale(settings: TrenDAP.IWidgetProps<TrenDAP.ITrend>) {
            let d = settings.Settings.Series.map(s => GetDataSeriesForD3(s))
            let dd = [].concat(...d)
            let ddx = dd.map(dp => new Date(dp.Timestamp).getTime());
            let xMax = Math.max(...dd.map(dp => dp[0]));
            let xMin = Math.min(...dd.map(dp => dp[0]));
            return scaleUtc()
                .domain([xMin, xMax])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
                .range([margin.current.left, settings.Width - margin.current.right]);
        }

        function GetYScale(settings: TrenDAP.IWidgetProps<TrenDAP.ITrend>, svgHeight: number, axis: number) {
            let d = settings.Settings.Series.filter(s => s.Axis === axis).map(s => GetDataSeriesForD3(s))
            let dd = [].concat(...d)
            let yMax = Math.max(...dd.map(dp => dp[1]));
            let yMin = Math.min(...dd.map(dp => dp[1]));

            return scaleLinear()
                .range([svgHeight - margin.current.bottom, margin.current.top])
                .domain([yMin, yMax])
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
            props.SetSettings(CalculateAxisRange(props, 'x'));
        }

        function HandleChartAction(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
            const height = parseInt(svg.attr('height'));
            const width = parseInt(svg.attr('width'));
            evt.preventDefault();
            if (evt.offsetX < margin.current.left || evt.offsetX > width - margin.current.right) return;
            else if (evt.offsetY < margin.current.top || evt.offsetY > height - margin.current.bottom) return;
            else if (chartActionRef.current == 'Click')
                OnClick(evt, svg, scale);
            else if (chartActionRef.current == 'Pan')
                OnPan(evt, svg, scale)
            else if (chartActionRef.current == 'ZoomX')
                OnXZoom(evt, svg, scale)


        }

        function OnClick(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
            const height = parseInt(svg.attr('height'));
            const tooltipHeight = props.Settings.Series.length * 15;
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
                .attr("transform", `translate(${evt.offsetX + 15},${evt.offsetY - tooltipHeight / 2})`);
            const rect = tooltip.append('rect')
                .attr('fill', 'gainsboro')
                .attr('height', props.Settings.Series.length + 'em')
                .attr('width', 200)
                .attr('x', 0)
                .attr('y', 0)
            const text = tooltip.append('text')
                .attr('x', 0)
                .attr('y', 0)

            let width = 200;
            props.Settings.Series.forEach((series, index) => {
                tooltip.append('rect').attr('x', 5).attr('y', `${index}em`).attr('height', '1em').attr('width', '1em').attr('fill', series.Color);
                const dataSource = props.Data.find(dd => dd.DataSource.ID === series?.DataSourceID ?? 0)
                let ds = GetDataSeries(series);
                let datum = ds?.Data ?? [];

                const floor = Math.floor(datum.length * evt.offsetX / props.Width * .95);
                const ceil = Math.ceil(datum.length * evt.offsetX / props.Width * 1.05);
                const shortenedData = datum.slice(floor, ceil);
                const dist = shortenedData.map(d => ({ Value: d[series.Field], Distance: Math.abs(evt.offsetX - scale(moment(d.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ').toDate().getTime())) }));
                dist.sort((a, b) => {
                    if (a.Distance > b.Distance) return 1;
                    else if (a.Distance == b.Distance) return 0;
                    else return -1;
                })

                const formated = format('.2f')(dist[0].Value);
                text.append('tspan').text(series.Label + ' - ' + formated).attr('x', '1.5em').attr('y', `${index + 1}em`);
                width = text.node().getBBox().width + 25 > width ? text.node().getBBox().width + 25 : width;
            });
            rect.attr('width', width);
            if (width > props.Width - margin.current.right - evt.offsetX)
                tooltip.attr("transform", `translate(${evt.offsetX - 15 - width},${evt.offsetY - tooltipHeight / 2})`);
        }

        function OnPan(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
            const start = evt.clientX;
            svg.on('mousemove.pan', (e: MouseEvent) => {
                let newRecord = UpdateJSON(props, 'Min', scale.invert(scale.range()[0] + start - e.clientX).getTime())
                props.SetSettings(UpdateJSON(newRecord, 'Max', scale.invert(scale.range()[1] + start - e.clientX).getTime()))
            });
            svg.on('mouseup.pan', () => svg.on('mousemove.pan', null));
        }

        function OnXZoom(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
            const start = evt.offsetX;
            const brush = brushX()
                .extent([[margin.current.left, margin.current.top + 0.5], [props.Width - margin.current.right, parseInt(svg.attr('height')) - margin.current.bottom + 0.5]])
            const br = svg.append('g').call(brush)
            br.call(brush.move, [start, start + 1]);
            svg.on('mousemove.brush', (e: MouseEvent) => {
                br.call(brush.move, [start, e.offsetX]);
            })
            svg.on('mouseup.brush', (e: MouseEvent) => {
                const min = Math.min(start, e.offsetX);
                const max = Math.max(start, e.offsetX);
                let newRecord = UpdateJSON(props, 'Min', scale.invert(min).getTime())
                props.SetSettings(UpdateJSON(newRecord, 'Max', scale.invert(max).getTime()))

                br.remove();
                svg.on('mousemove.brush', null);
                svg.on('mouseup.brush', null);
            });
        }
        */
        return (
            <div ref={ref} style={{ userSelect: 'none' }}>
                <div style={{ position: 'absolute', left: 10, zIndex: 1010 }}>{/*
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
                        */}
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
        );
    },
    SettingsUI: (props) => {
        /*function GetDataSeries(series: TrenDAP.iTrendTemplateSeries): TrenDAP.iDataSetReturnType {
            const dataSource = props.Data.find(dd => dd.DataSource.ID === series?.DataSourceID ?? 0)
            const data = dataSource?.Data ?? [];
            let datum;

            if (dataSource?.DataSource.Type === 'OpenHistorian') {
                let s = series as TrenDAP.iTrendTemplateSeriesOpenHistorian;
                datum = data.find((dd: TrenDAP.iOpenHistorianReturn) => dd[props.By] === props.Device && dd.SignalType === s.Type && dd.Phase === s.Phase);
            }
            else if (dataSource?.DataSource.Type === 'TrenDAPDB') {
                let s = series as TrenDAP.iTrendTemplateSeriesXDA;
                datum = data.find((dd: TrenDAP.iXDAReturnData) => dd[props.By] === props.Device && dd.Type === s.Type && dd.Phase === s.Phase && dd.Characteristic === s.Characteristic);
            }
            else if (dataSource?.DataSource.Type === 'Sapphire') {
                let s = series as TrenDAP.iTrendTemplateSeriesSapphire;
                datum = data.find((dd: TrenDAP.iSapphireReturnData) => dd.Meter === props.Device && dd.Phase === s.Phase && dd.Characteristic === s.Measurement && dd.Harmonic == s.Harmonic);
            }
            else
                datum = { Data: [] };

            return datum;
        }*/

        return <>
            <div className="row">
                <div className="col">
                    <div className='row'>
                        <div className='col-1'>
                            <label>Split</label>
                            <br />
                            <SwitchButton checked={props?.Settings?.Split ?? false} onChange={(checked: boolean) => props.SetSettings(UpdateJSON(props.Settings, 'Split', checked))} />
                        </div>
                        <div className='col-2'>
                            <Select<IProps> Label='Split On' Field='SplitType' Record={props?.Settings} Setter={(r) => props.SetSettings(r)} Options={[{ Value: 'Axis', Label: 'Axis' }, { Value: 'Series', Label: 'Series' }]} />
                        </div>
                        <div className='col-2'>
                            <label>Legend</label>
                            <br />
                            <SwitchButton checked={props.Settings?.Legend ?? false} onChange={(checked: boolean) => props.SetSettings(UpdateJSON(props.Settings, 'Legend', checked))} />
                        </div>

                    </div>
                    {/*
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

                    </div>*/}
                    <h6>Y Axis</h6> <button style={{ position: 'relative', float: 'right', top: -30 }} className='btn btn-link' onClick={() => {
                        props.SetSettings(AddAxis(props.Settings));
                    }}>{Plus}</button>
                    <hr />
                    <ul className="list-group list-group-flush" style={{ maxHeight: window.innerHeight - 625, overflowY: 'auto', overflowX: 'hidden', width: '100%' }}>

                        {props.Settings.YAxis.map((axis, index) => (
                            <li key={index} className='list-group-item'><Axis Axis={axis} Index={index} Widget={props} Callback={() => props.SetSettings(props.Settings)} /></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    },
    ChannelSelectionUI: (props) => {
        return (
            <>
                <div id="accordion" style={{ overflowY: 'auto', maxHeight: window.innerHeight - 250 }}>
                    {/*props.Data.map((d, i) =>
                            <React.Fragment key={i}>
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href={"#collapse" + i}>{d.DataSource.Name}</a>
                                </div>
                                <div id={"collapse" + i} className="collapse show" data-parent="#accordion">
                                    <div className="card-body">
                                        {(d.DataSource.Type === 'TrenDAPDB' ?
                                            <>
                                                <button className='btn btn-primary' onClick={() => props.SetSettings(QuickAddVoltageRMS(props, d.DataSource.ID))}>Quick Add VRMS</button>
                                                <button className='btn btn-primary' onClick={() => props.SetSettings(QuickAddCurrentRMS(props, d.DataSource.ID))}>Quick Add IRMS</button>
                                                <button className='btn btn-primary' onClick={() => props.SetSettings(RemoveAll(props, d.DataSource.ID))}>Remove All</button>
                                            </> : null)
                                        }
                                        <SeriesSelect Widget={props} DataSourceID={d.DataSource.ID} Callback={() => props.SetSettings(props)} />
                                        <ul className="list-group">
                                            {(props.Settings.Series).map((series, ind) => {
                                                const dataSource = props.Data.find(dd => dd.DataSource.ID === series?.DataSourceID ?? 0)
                                                const data = dataSource?.Data ?? [];
                                                let datum = GetDataSeries(series);

                                                if (datum === undefined) return null;
                                                return (
                                                    <li key={ind} className="list-group-item">
                                                        <SeriesPicker Type={dataSource.DataSource.Type} Index={ind} Series={series} Data={datum as TrenDAP.iXDAReturnData} Widget={props} Callback={() => props.SetSettings(props)} />
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>
                        )*/}
                </div>
            </>
        )
    }
}

//Helper functions
//this needs to be typed correctly after rework of classes and possibily updated to be generic for use in other widgets
const UpdateJSON = (trend: IProps, field: any, value: any) => {
    let newTrend = { ...trend }
    newTrend[field] = value;
    return newTrend;
}

export const AddAxis = (trend: IProps) => {
    let newTrend = { ...trend }
    newTrend.YAxis.push({ Max: 10, Min: 0, Position: 'left', Units: '' });
    return newTrend;
}
export const RemoveAxis = (trend: WidgetTypes.ISettingsProps<IProps>, index: number) => {
    let newTrend = { ...trend }
    if (newTrend.Settings.YAxis.length == 1) return;

    newTrend.Settings.YAxis.splice(index, 1)
    newTrend.Settings.Series.forEach(series => {
        if (series.Axis >= index)
            series.Axis = (index > 0 ? series.Axis - 1 : 0);
    });
    return newTrend;
};
export const UpdateAxis = (trend: WidgetTypes.ISettingsProps<IProps>, index: keyof TrenDAP.iYAxis[], field: keyof TrenDAP.iYAxis, value: TrenDAP.iYAxis[keyof TrenDAP.iYAxis]) => {
    let newTrend = { ...trend }
    newTrend.Settings.YAxis[index][field] = value;
    return newTrend
};
/*
export const CalculateAxisRange = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, type: 'x' | 'y', index?: number) => {
    let newTrend = { ...trend }
    if (newTrend.Settings.Series.length == 0) return;

    let ds = newTrend.Data.find(ds => ds.DataSource.ID === newTrend.Settings.Series[0].DataSourceID)
    let dd: TrenDAP.iDataSetReturnType[] = [].concat(...newTrend.Data.map(d => d.Data));
    if (type === 'x')
        newTrend = CalculateXAxis(newTrend, ds, dd);
    else {
        if (index == undefined) {
            for (let index = 0; index < newTrend.Settings.YAxis.length; index++) {
                newTrend = CalculateYAxis(newTrend, ds, dd, index);
            }
        }
        else
            newTrend = CalculateYAxis(newTrend, ds, dd, index);
    }

    return newTrend;
};*/
/*
const CalculateXAxis = (trend: WidgetTypes.IWidgetProps<TrenDAP.ITrend>, ds: TrenDAP.iDataSetReturn<TrenDAP.iDataSetReturnType>, dd: TrenDAP.iDataSetReturnType[]) => {
    let newTrend = { ...trend }

    let ss;
    if (ds.DataSource.Type === 'TrenDAPDB') {
        let phases = newTrend.Settings.Series.map((s: TrenDAP.iTrendTemplateSeriesXDA) => s.Phase)
        let types = newTrend.Settings.Series.map((s: TrenDAP.iTrendTemplateSeriesXDA) => s.Type)
        let characteristics = newTrend.Settings.Series.map((s: TrenDAP.iTrendTemplateSeriesXDA) => s.Characteristic)
        let series = dd.find((d) => d[newTrend.By] === newTrend.Device && phases.indexOf((d as TrenDAP.iXDAReturnData).Phase) >= 0 && characteristics.indexOf((d as TrenDAP.iXDAReturnData).Characteristic) >= 0 && types.indexOf((d as TrenDAP.iXDAReturnData).Type) >= 0);

        ss = (series?.Data ?? []).map(d => new Date(d.Timestamp).getTime());
    }
    else if (ds.DataSource.Type === 'OpenHistorian') {
        let phases = newTrend.Settings.Series.map((s: TrenDAP.iTrendTemplateSeriesOpenHistorian) => s.Phase)
        let types = newTrend.Settings.Series.map((s: TrenDAP.iTrendTemplateSeriesOpenHistorian) => s.Type)
        let series = dd.find((d) => d[newTrend.By] === newTrend.Device && phases.indexOf((d as TrenDAP.iOpenHistorianReturn).Phase) >= 0 && types.indexOf((d as TrenDAP.iOpenHistorianReturn).SignalType) >= 0);

        ss = (series?.Data ?? []).map(d => new Date(d.Timestamp).getTime());
    }
    else if (ds.DataSource.Type === 'Sapphire') {
        let phases = newTrend.Settings.Series.map((s: TrenDAP.iTrendTemplateSeriesSapphire) => s.Phase)
        let types = newTrend.Settings.Series.map((s: TrenDAP.iTrendTemplateSeriesSapphire) => s.Measurement)
        let harmonics = newTrend.Settings.Series.map((s: TrenDAP.iTrendTemplateSeriesSapphire) => s.Harmonic);
        let series = dd.find((d) => d[newTrend.By] === newTrend.Device && phases.indexOf((d as TrenDAP.iSapphireReturnData).Phase) >= 0 && types.indexOf((d as TrenDAP.iSapphireReturnData).Characteristic) >= 0 && harmonics.indexOf((d as TrenDAP.iSapphireReturnData).Harmonic) >= 0);

        ss = (series?.Data ?? []).map(d => new Date(d.Timestamp).getTime());
    }
    else
        ss = [];


    let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
    newTrend.Settings.Max = Math.max(...[].concat(...mm));
    newTrend.Settings.Min = Math.min(...[].concat(...mm));
    return newTrend;
}
*/
/*
export const CalculateYAxis = (trend: WidgetTypes.IWidgetProps<TrenDAP.ITrend>, ds: TrenDAP.iDataSetReturn<TrenDAP.iDataSetReturnType>, dd: TrenDAP.iDataSetReturnType[], index: number) => {
    let newTrend = { ...trend }

    let axes = newTrend.Settings.Series.filter(series => series.Axis === index);

    let ss = axes.map(a => {
        if (ds.DataSource.Type === 'TrenDAPDB') {
            const axis = a as TrenDAP.iTrendTemplateSeriesXDA;
            const series = dd.find((d) => d[newTrend.By] === newTrend.Device && axis.Phase === (d as TrenDAP.iXDAReturnData).Phase && axis.Characteristic === (d as TrenDAP.iXDAReturnData).Characteristic && axis.Type === (d as TrenDAP.iXDAReturnData).Type);
            return (series?.Data ?? []).map(d => d[axis.Field]);
        }
        else if (ds.DataSource.Type === 'OpenHistorian') {
            const axis = a as TrenDAP.iTrendTemplateSeriesOpenHistorian;
            const series = dd.find((d) => d[newTrend.By] === newTrend.Device && axis.Phase === (d as TrenDAP.iOpenHistorianReturn).Phase && axis.Type === (d as TrenDAP.iOpenHistorianReturn).SignalType);
            return (series?.Data ?? []).map(d => d[axis.Field]);
        }
        else if (ds.DataSource.Type === 'Sapphire') {
            const axis = a as TrenDAP.iTrendTemplateSeriesSapphire;
            const series = dd.find((d) => d[newTrend.By] === newTrend.Device && axis.Phase === (d as TrenDAP.iSapphireReturnData).Phase && axis.Measurement === (d as TrenDAP.iSapphireReturnData).Characteristic && (d as TrenDAP.iSapphireReturnData).Harmonic === axis.Harmonic);
            return (series?.Data ?? []).map(d => d[axis.Field]);
        }
        else
            ss = [];

    });
    let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
    newTrend.Settings.Max = Math.max(...[].concat(...mm));
    newTrend.Settings.Min = Math.min(...[].concat(...mm));
    return newTrend;
}

export const AddSeriesXDA = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, dataSourceID: number, phase: OpenXDA.Types.PhaseName, type: OpenXDA.Types.MeasurementTypeName, characteristic: OpenXDA.Types.MeasurementCharacteristicName) => {
    let newTrend = { ...trend }

    let label = '';
    if (characteristic === 'Frequency')
        label = 'Frequency';
    else if (type === 'Voltage' && characteristic === 'RMS')
        label = `V${phase}`;
    else if (type === 'Voltage')
        label = `V${phase} ${characteristic}`;
    else if (type === 'Current' && characteristic === 'RMS')
        label = `I${phase}`;
    else if (type === 'Current')
        label = `I${phase} ${characteristic}`;
    else label = `${type} ${phase} ${characteristic}`;

    let dd: TrenDAP.iXDAReturnData[] = [].concat(...newTrend.Data.map(d => d.Data));
    let channel = dd.find(d => d.Characteristic === characteristic && d.Type === type && d.Phase === phase);
    let unit = channel?.Unit ?? ''
    let axisIndex = newTrend.Settings.YAxis.findIndex(a => a.Units === unit);

    if (axisIndex === -1) {
        axisIndex = newTrend.Settings.YAxis.push({ Units: unit, Min: 0, Max: 100, Position: 'left' }) - 1;
    }

    let series = {
        Phase: phase,
        Type: type,
        Characteristic: characteristic,
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor(label),
        Axis: axisIndex,
        ShowEvents: false
    } as TrenDAP.iTrendTemplateSeriesXDA



    newTrend.Settings.Series.push(series as any);
    newTrend = CalculateAxisRange(newTrend, 'x');
    newTrend = CalculateAxisRange(newTrend, 'y');
    return newTrend;
}

export const AddSeriesSapphire = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, dataSourceID: number, phase: string, measurement: string, harmonic: number) => {
    let newTrend = { ...trend }

    let label = `${phase} ${measurement}${(measurement.indexOf('HRMS') >= 0 ? ' HG: ' + harmonic.toString() : '')}`;

    let dd: TrenDAP.iSapphireReturnData[] = [].concat(...newTrend.Data.map(d => d.Data));
    let channel = dd.find(d => d.Characteristic === measurement && d.Phase === phase);
    let unit = channel?.Unit ?? ''
    let axisIndex = newTrend.Settings.YAxis.findIndex(a => a.Units === unit);

    if (axisIndex === -1)
        axisIndex = newTrend.Settings.YAxis.push({ Units: unit, Min: 0, Max: 100, Position: 'left' }) - 1;

    let series = {
        Phase: phase,
        Measurement: measurement,
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor(label),
        Axis: axisIndex,
        ShowEvents: false,
        Harmonic: harmonic
    } as TrenDAP.iTrendTemplateSeriesSapphire

    (newTrend.Settings.Series as TrenDAP.iTrendTemplateSeriesSapphire[]).push(series);
    return newTrend;
}

export const AddSeriesOH = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, dataSourceID: number, phase: OpenHistorian.Types.Phase, type: OpenHistorian.Types.SignalType) => {
    let newTrend = { ...trend }

    let label = `${type} ${phase}`;

    let series = {
        Phase: phase,
        Type: type,
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor(label),
        Axis: 0
    } as TrenDAP.iTrendTemplateSeriesOpenHistorian


    newTrend.Settings.Series.push(series as any);
    newTrend = CalculateAxisRange(newTrend, 'x');
    newTrend = CalculateAxisRange(newTrend, 'y');
    return newTrend;
}

export const QuickAddVoltageRMS = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, dataSourceID: number) => {
    let newTrend = { ...trend }

    let axis = newTrend.Settings.YAxis.findIndex(axis => axis.Units === 'Volts')
    if (axis < 0)
        axis = newTrend.Settings.YAxis.push({ Units: 'Volts', Position: 'left', Min: 0, Max: 100 }) - 1

    let series = [{
        Phase: 'AN',
        Type: 'Voltage',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('VAN RMS'),
        Axis: 0,
        Label: 'VAN RMS',
        ShowEvents: false
    }, {
        Phase: 'BN',
        Type: 'Voltage',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('VBN RMS'),
        Axis: 0,
        Label: 'VBN RMS',
        ShowEvents: false
    }, {
        Phase: 'CN',
        Type: 'Voltage',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('VCN RMS'),
        Axis: 0,
        Label: 'VCN RMS',
        ShowEvents: false
    }, {
        Phase: 'AB',
        Type: 'Voltage',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('VAB RMS'),
        Axis: 0,
        Label: 'VAB RMS',
        ShowEvents: false
    }, {
        Phase: 'BC',
        Type: 'Voltage',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('VBC RMS'),
        Axis: 0,
        Label: 'VBC RMS',
        ShowEvents: false
    }, {
        Phase: 'CA',
        Type: 'Voltage',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('VCA RMS'),
        Axis: 0,
        Label: 'VCA RMS',
        ShowEvents: false
    }] as TrenDAP.iTrendTemplateSeriesXDA[]

    (newTrend.Settings.Series as TrenDAP.iTrendTemplateSeriesXDA[]).concat(series);
    newTrend = CalculateAxisRange(newTrend, 'x');
    newTrend = CalculateAxisRange(newTrend, 'y');
    return newTrend;
}

export const QuickAddCurrentRMS = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, dataSourceID: number) => {
    let newTrend = { ...trend }

    let axis = newTrend.Settings.YAxis.findIndex(axis => axis.Units === 'Amps')
    if (axis < 0)
        axis = newTrend.Settings.YAxis.push({ Units: 'Amps', Position: 'left', Min: 0, Max: 100 }) - 1

    let series = [{
        Phase: 'AN',
        Type: 'Current',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('IAN RMS'),
        Axis: 0,
        Label: 'IAN RMS',
        ShowEvents: false
    }, {
        Phase: 'BN',
        Type: 'Current',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('IBN RMS'),
        Axis: 0,
        Label: 'IBN RMS',
        ShowEvents: false
    }, {
        Phase: 'CN',
        Type: 'Current',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('ICN RMS'),
        Axis: 0,
        Label: 'ICN RMS',
        ShowEvents: false
    }, {
        Phase: 'NG',
        Type: 'Current',
        Characteristic: 'RMS',
        DataSourceID: dataSourceID,
        Field: "Average",
        Color: GetColor('ING RMS'),
        Axis: 0,
        Label: 'ING RMS',
        ShowEvents: false
    }] as TrenDAP.iTrendTemplateSeriesXDA[]

    (newTrend.Settings.Series as TrenDAP.iTrendTemplateSeriesXDA[]).concat(series);
    newTrend = CalculateAxisRange(newTrend, 'x');
    newTrend = CalculateAxisRange(newTrend, 'y');
    return newTrend;
}

export const RemoveSeries = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, index: number) => {
    let newTrend = { ...trend }

    newTrend.Settings.Series.splice(index, 1);
    return newTrend;
}

export const RemoveAll = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, dataSourceID: number) => {
    let newTrend = { ...trend }

    newTrend.Settings.Series = [];
    return newTrend;
}

export const UpdateSeries = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, index: keyof TrenDAP.iTrendSeries[], field: keyof TrenDAP.iTrendSeries, value: TrenDAP.iTrendSeries[keyof TrenDAP.iTrendSeries]) => {
    let newTrend = { ...trend }
    newTrend.Settings.Series[index][field] = value;
    return newTrend;
};

export const Pan = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, value: number) => {
    let newTrend = { ...trend }

    newTrend.Settings.Max = newTrend.Settings.Max + value;
    newTrend.Settings.Min = newTrend.Settings.Min + value;
    return newTrend;
};*/