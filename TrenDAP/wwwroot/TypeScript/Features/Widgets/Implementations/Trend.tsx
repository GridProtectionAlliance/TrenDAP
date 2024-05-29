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

import { axisBottom, axisLeft, axisRight, brushX, format, line, scaleLinear, scaleUtc, select, bisector, bisect } from 'd3';
import * as React from 'react';
import { DataSetTypes, TrenDAP } from '../../../global';
import { WidgetTypes } from '../Interfaces';
import { Input, Select, ToggleSwitch, DatePicker, ColorPicker } from '@gpa-gemstone/react-forms';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ReactTable } from '@gpa-gemstone/react-table';
import { ToolTip } from '@gpa-gemstone/react-interactive';
import { ISelectedChannels } from '../WidgetWrapper'
import _ from 'lodash';
import moment from 'moment';

export interface IProps {
    AutoXScale: boolean
    Min: string,
    Max: string,
    YAxis: TrenDAP.IYAxis[],
    Legend: boolean,
    Split: boolean,
    SplitType: 'Axis' | 'Series',
}

interface IChannelSettings {
    Field: TrenDAP.SeriesField,
    Color: string,
    YAxisID: number,
}

interface IYScale {
    ID: number,
    Scale: d3.ScaleLinear<number, number, never>
}

export const TrendWidget: WidgetTypes.IWidget<IProps, IChannelSettings> = {
    DefaultSettings: {
        Min: new Date().toISOString(),
        Max: new Date().toISOString(),
        YAxis: [],
        Legend: true,
        Split: false,
        SplitType: 'Axis',
        AutoXScale: true
    },
    DefaultChannelSettings: { Field: 'Average', Color: 'Red', YAxisID: -1 },
    Name: "Trend",
    WidgetUI: (props) => {
        const plotRef = React.useRef<HTMLDivElement>(null);
        const svgs = React.useRef<d3.Selection<SVGSVGElement, unknown, null, undefined>[]>([]);
        const margin = React.useRef<{ bottom: number, left: number, top: number, right: number }>({ bottom: 50, left: 60, top: 40, right: 60 });
        const chartActionRef = React.useRef<TrenDAP.ChartAction>('Pan');
        const xScaleRef = React.useRef<d3.ScaleTime<number, number, never>>(null);
        const yScalesRef = React.useRef<IYScale[]>(null);

        const [svgCount, setSvgCount] = React.useState<number>(0);
        const [chartAction, setChartAction] = React.useState<TrenDAP.ChartAction>('Pan');

        React.useEffect(() => {
            chartActionRef.current = chartAction;
        }, [chartAction]);

        React.useEffect(() => {
            Initialize()
        }, [svgCount])

        React.useEffect(() => {
            if (plotRef.current != null && props.Data.length !== 0) {
                if (props.Settings.Split) {
                    if (props.Settings.Split && props.Settings.SplitType === 'Axis')
                        setSvgCount(props.Settings.YAxis.length);
                    else if (props.Settings.SplitType === 'Series')
                        setSvgCount(props.Data.length);
                }
                else
                    setSvgCount(1);
            }
        }, [props.Data, props.Settings])

        React.useEffect(() => {
            return () => { select(plotRef.current).selectAll('svg').remove(); }
        }, []);

        function GetChannelData(channel: WidgetTypes.IWidgetData<IChannelSettings>) {
            return props.Data.find(data => data.ID === channel.ID).SeriesData[channel.ChannelSettings.Field]
        }

        function GetDataSeriesForD3(series: WidgetTypes.IWidgetData<IChannelSettings>) {
            return (GetChannelData(series)).map(data => [data[0], data[1]]);
        }

        function Initialize() {
            if (props.Data.length === 0) return;
            margin.current = {
                bottom: 50,
                left: (props.Settings.YAxis.filter(axis => axis.Position === 'left').length == 0 ? 60 : props.Settings.YAxis.filter(axis => axis.Position === 'left').length * 75),
                top: 40,
                right: (props.Settings.YAxis.filter(axis => axis.Position === 'right').length == 0 ? 60 : props.Settings.YAxis.filter(axis => axis.Position === 'right').length * 75)
            }

            let legendWidth = props.Settings.Legend ? 200 : 0;
            const svgHeight = plotRef.current.offsetHeight / svgCount;
            const svgWidth = plotRef.current.offsetWidth - margin.current.left - margin.current.right - legendWidth;

            if (props.Settings.Split) {
                if (props.Settings.Split && props.Settings.SplitType === 'Axis')
                    margin.current = { bottom: 50, left: 60, top: 40, right: 60 };
                else if (props.Settings.SplitType === 'Series')
                    margin.current = { bottom: 50, left: 60, top: 40, right: 60 }
            }

            yScalesRef.current = props.Settings.YAxis.map(axis => GetYScale(axis, svgCount));
            xScaleRef.current = GetXScale();

            if (props.Settings.Legend)
                margin.current.right = margin.current.right + 200;

            let currentSvgSize = select(plotRef.current).node().getBoundingClientRect()

            if (svgs.current.length !== svgCount || currentSvgSize.width !== plotRef.current.offsetWidth || currentSvgSize.height !== plotRef.current.offsetHeight) {
                svgs.current = [];
                select(plotRef.current).selectAll('svg').remove()
                for (let i = 0; i < svgCount; i++) {
                    const svg = select(plotRef.current).append('svg')
                        .attr('width', plotRef.current.offsetWidth)
                        .attr('height', svgHeight);

                    // Define clip path
                    svg.append('defs').append('clipPath')
                        .attr('id', `clip-${i}`)
                        .append('rect')
                        .attr('x', margin.current.left)
                        .attr('y', margin.current.top)
                        .attr('width', svgWidth)
                        .attr('height', svgHeight - margin.current.top - margin.current.bottom);

                    svgs.current.push(svg);
                }
            }

            updateLines()
        }

        function updateLines() {
            svgs.current.forEach((svg, i) => {
                if (props.Settings.Split && props.Settings.SplitType === 'Axis')
                    InitializeSplitOnAxis(svg, i, svgCount);
                else if (props.Settings.Split && props.Settings.SplitType === 'Series')
                    InitializeSplitOnChannel(svg, xScaleRef.current, i);
                else
                    InitializeNotSplit(svg, i);
            });
        }

        function InitializeSplitOnChannel(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, xScale: d3.ScaleTime<number, number>, dataIndex: number) {
            const series = props.Data[dataIndex];
            const axis = props.Settings.YAxis.find(axis => axis.ID === series.ChannelSettings.YAxisID);
            const yScale = yScalesRef.current.find(scale => scale.ID === axis.ID)
            AddXAxis(svg);

            svg.selectAll('g.yaxis').remove();
            AddYAxisLeft(axis, svg);

            let lineFunc = line<number[]>().x(dd => xScale(dd[0])).y(dd => yScale.Scale(dd[1]));
            let data = GetDataSeriesForD3(series);

            svg.selectAll("g.line").remove();
            svg.selectAll('g.line')
                .data([data])
                .enter()
                .append('g')
                .classed('line', true)
                .append("path")
                .attr('clip-path', `url(#clip-${dataIndex})`)
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", series.ChannelSettings.Color)
                .attr("d", (d) => {
                    return lineFunc(data);

                })

            /*
            if (series.ChannelSettings.YAxis.ShowEvents) {
                //AddEventLine(series, svg, x);
            }*/

            svg.selectAll("g.legend").remove();
            if (props.Settings.Legend) {
                AddLegend(svg, [series]);
            }

            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg));

        }


        function InitializeSplitOnAxis(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, axisIndex: number, svgCount) {
            const axis = props.Settings.YAxis[axisIndex];
            const series = props.Data.filter(s => s.ChannelSettings.YAxisID === axis.ID).map(s => {
                let datum = GetChannelData(s);

                return {
                    ...s, Data: datum
                    //Data: datum.filter(data => data[0] >= props.Settings.Min && data[0] <= props.Settings.Max && data[s.ChannelSettings.Field] >= axis.Min && data[s.ChannelSettings.Field] <= axis.Max)
                }
            });

            AddXAxis(svg);

            const yScale = GetYScale(axis, svgCount).Scale;
            svg.selectAll('g.yaxis').remove();
            AddYAxisLeft(axis, svg);

            svg.selectAll("g.line").remove();
            svg.selectAll("g.line")
                .data(series)
                .enter()
                .append('g')
                .classed('line', true)
                .append("path")
                .attr('clip-path', `url(#clip-${axisIndex})`)
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", (s) => s.ChannelSettings.Color)
                .attr("d", (s) => {
                    let lineFunc = line<number[]>().x(dd => xScaleRef.current(dd[0])).y(dd => yScale(dd[1]));
                    let data = GetDataSeriesForD3(s);
                    return lineFunc(data);

                })

            //series.forEach(s => AddEventLine(s, svg, x))

            svg.selectAll("g.legend").remove();
            if (props.Settings.Legend) {
                AddLegend(svg, props.Data.filter(s => s.ChannelSettings.YAxisID === axis.ID));
            }


            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg));
        }


        function InitializeNotSplit(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, clipIndex: number) {
            AddXAxis(svg);
            svg.selectAll('g.yaxis').remove();

            //Create yAxis
            props.Settings.YAxis.forEach(yAxis => {
                if (yAxis.Position === 'left') {
                    let ind = props.Settings.YAxis.filter(axis => axis.Position === 'left').findIndex(axis => axis.ID === yAxis.ID);
                    AddYAxisLeft(yAxis, svg, ind);
                }
                else {
                    let ind = props.Settings.YAxis.filter(axis => axis.Position === 'right').findIndex(axis => axis.ID === yAxis.ID);
                    AddYAxisRight(yAxis, svg, ind);
                }
            });

            svg.selectAll("g.legend").remove();
            if (props.Settings.Legend)
                AddLegend(svg, props.Data);

            svg.selectAll("g.line").remove();
            svg.selectAll("g.line")
                .data(props.Data)
                .enter()
                .append("g")
                .classed("line", true)
                .append("path")
                .attr('clip-path', `url(#clip-${clipIndex})`)
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", d => d.ChannelSettings.Color)
                .attr("d", d => {
                    let yScale = yScalesRef.current.find(scale => d.ChannelSettings.YAxisID === scale.ID)?.Scale;
                    let lineFunc = line<number[]>().x(dd => xScaleRef.current(dd[0])).y(dd => yScale(dd[1]));
                    let data = GetDataSeriesForD3(d);
                    return lineFunc(data);
                })

            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg))

            //props.Data.filter(channel => channel.ChannelSettings.ShowEvents).forEach(series => AddEventLine(channel, svg, x));

        }

        function AddLegend(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, data: WidgetTypes.IWidgetData<IChannelSettings>[]) {
            const svgWidth = parseInt(svg.attr('width'));
            const legend = svg.selectAll('g.legend')
                .data([data])
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

            legendRows.append('rect').attr('height', 20).attr('width', 20).attr('fill', d => d.ChannelSettings.Color)
            legendRows.append('text').attr('x', 30).attr('y', 15)
                .text(function (s) {
                    let name = s.Name
                    if (name.length > 15)
                        return name.slice(0, 15) + '...';
                    else
                        return name;
                });
        }

        //I believe this is to do with the Event Data Sources
        /*
        function AddEventLine(series: WidgetTypes.IWidgetData, svg, x) {
            const svgHeight = parseInt(svg.attr('height'))

            let datum = GetChannelData(series);
            let d = datum?.Events ?? [];

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
                    window.open(record.Data.find(ds => ds.DataSource.ID === series.DataSourceID).DataSource.OpenSEE + '?eventID=' + d.ID)
                })
        }*/

        function AddXAxis(svg) {
            const svgWidth = parseInt(svg.attr('width'));
            const svgHeight = parseInt(svg.attr('height'));

            svg.selectAll('g.xaxis').remove();
            const xAxis = svg.append("g").classed('xaxis', true)
                .attr("transform", "translate(0," + (svgHeight - margin.current.bottom) + ")")
                .call(axisBottom(xScaleRef.current))

            svg.append("g").classed('xaxis', true).append("text")
                .style("text-anchor", "middle")
                .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.current.bottom / 3) + ")")
                .text("Time")

        }

        function AddYAxisLeft(axis: TrenDAP.IYAxis, svg, index: number = 0) {
            const svgWidth = parseInt(svg.attr('width'));
            const svgHeight = parseInt(svg.attr('height'));
            const yScale = yScalesRef.current.find(a => a.ID === axis.ID).Scale

            const yAxis = svg.append("g").classed('yaxis', true)
                .attr("transform", "translate(" + (margin.current.left - index * 60) + ",0)")
                .call(axisLeft(yScale).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => format("~s")(value)));

            const text = svg.append("g")
                .classed('yaxis', true)
                .append("text")
                .text(axis.Label)
                .attr("transform", `rotate(-90) translate(${-svgHeight / 2}, ${margin.current.left - index * 60 - 40})`)
                .style("text-anchor", "middle");
        }

        function AddYAxisRight(axis: TrenDAP.IYAxis, svg, index: number = 0) {
            const svgWidth = parseInt(svg.attr('width'));
            const svgHeight = parseInt(svg.attr('height'));
            const yScale = yScalesRef.current.find(a => a.ID === axis.ID).Scale

            const yAxis = svg.append("g").classed('yaxis', true)
                .attr('transform', `translate(${svgWidth - margin.current.right + index * 60}, 0)`)
                .call(axisRight(yScale).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => format("~s")(value)));

            const text = svg.append("g")
                .classed('yaxis', true)
                .append("text")
                .text(axis.Label)
                .style("text-anchor", "middle")
                .attr('transform', `rotate(90) translate(${svgHeight / 2}, ${-svgWidth + margin.current.right - index * 60 - 40})`);
        }

        function GetXScale() {
            let d = props.Data.map(channel => GetDataSeriesForD3(channel))
            let dd = [].concat(...d)
            let xMax = Math.max(...dd.map(dp => dp[0]));
            let xMin = Math.min(...dd.map(dp => dp[0]));
            if (!props.Settings.AutoXScale) {
                xMin = new Date(props.Settings.Min).getTime()
                xMax = new Date(props.Settings.Max).getTime()
            }

            return scaleUtc()
                .domain([xMin, xMax])
                .range([margin.current.left, plotRef.current.offsetWidth - margin.current.right - (props.Settings.Legend ? 200 : 0)]);
        }

        function GetYScale(axis: TrenDAP.IYAxis, svgCount) {
            const svgHeight = plotRef.current.offsetHeight / svgCount;

            let d = props.Data.filter(s => s.ChannelSettings.YAxisID === axis.ID).map(s => GetDataSeriesForD3(s))
            let dd = [].concat(...d)
            let yMax = Math.max(...dd.map(dp => dp[1]));
            let yMin = Math.min(...dd.map(dp => dp[1]));
            if (!axis.AutoMinScale)
                yMin = axis.Min
            if (!axis.AutoMaxScale)
                yMax = axis.Max

            return {
                ID: axis.ID, Scale: scaleLinear()
                    .range([svgHeight - margin.current.bottom, margin.current.top])
                    .domain([yMin, yMax])
            }

        }

        function HandleReset() {
            xScaleRef.current = GetXScale()
            updateLines()
        }

        function HandleChartAction(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) {
            const height = parseInt(svg.attr('height'));
            const width = parseInt(svg.attr('width'));
            evt.preventDefault();
            if (evt.offsetX < margin.current.left || evt.offsetX > width - margin.current.right) return;
            else if (evt.offsetY < margin.current.top || evt.offsetY > height - margin.current.bottom) return;
            else if (chartActionRef.current == 'Click')
                OnClick(evt, svg);
            else if (chartActionRef.current == 'Pan')
                OnPan(evt, svg)
            else if (chartActionRef.current == 'ZoomX')
                OnXZoom(evt, svg)

        }

        function OnClick(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) {
            const height = parseInt(svg.attr('height'));
            const tooltipHeight = props.Data.length * 15;
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
                .attr('height', props.Data.length + 'em')
                .attr('width', 200)
                .attr('x', 0)
                .attr('y', 0)
            const text = tooltip.append('text')
                .attr('x', 0)
                .attr('y', 0)

            let width = 200;
            props.Data.forEach((series, seriesIndex) => {
                tooltip.append('rect')
                    .attr('x', 5)
                    .attr('y', `${seriesIndex}em`)
                    .attr('height', '1em')
                    .attr('width', '1em')
                    .attr('fill', series.ChannelSettings.Color);

                let ds = GetChannelData(series);

                // Get the corresponding date for the clicked position
                const clickedDate = xScaleRef.current.invert(evt.offsetX);

                // Find the closest data point
                const bisectDate = bisector(d => new Date(d[0]));
                const index = bisectDate.left(ds, clickedDate);
                const closestData = ds[Math.min(index, ds.length - 1)];

                const closestValue = closestData != null ? closestData[1] : null;

                if (closestValue !== null) {
                    const formatted = format('.2f')(closestValue);
                    text.append('tspan')
                        .text(`${series.Name} - ${formatted}`)
                        .attr('x', '1.5em')
                        .attr('y', `${seriesIndex + 1}em`);

                    width = Math.max(width, text.node().getBBox().width + 25);
                }
            });

            rect.attr('width', width);
            if (width > props.Width - margin.current.right - evt.offsetX) {
                tooltip.attr("transform", `translate(${evt.offsetX - 15 - width},${evt.offsetY - tooltipHeight / 2})`);
            }

        }

        function OnPan(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) {
            const start = evt.clientX;
            svg.on('mousemove.pan', (e: MouseEvent) => {
                xScaleRef.current.domain([xScaleRef.current.invert(xScaleRef.current.range()[0] + start - e.clientX).getTime(), xScaleRef.current.invert(xScaleRef.current.range()[1] + start - e.clientX).getTime()])
                //need to break initialize up into more functions because we dont need to do some of that logic again..
                updateLines()
            });
            svg.on('mouseup.pan', () => svg.on('mousemove.pan', null));
        }

        function OnXZoom(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) {
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
                xScaleRef.current.domain([xScaleRef.current.invert(min).getTime(), xScaleRef.current.invert(max).getTime()])
                updateLines()
                br.remove();
                svg.on('mousemove.brush', null);
                svg.on('mouseup.brush', null);
            });
        }

        return (
            <div className="d-flex h-100 flex-column" ref={plotRef} style={{ userSelect: 'none' }}>
                <div style={{ position: 'absolute', left: 10, zIndex: 1010 }}>
                    <button className='btn btn-light' onClick={HandleReset}>
                        Reset Limits
                    </button>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" checked={chartAction == 'Pan'} onChange={(evt) => setChartAction('Pan')} />Pan
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" checked={chartAction == 'ZoomX'} onChange={(evt) => setChartAction('ZoomX')} />Zoom X
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" checked={chartAction == 'Click'} onChange={(evt) => setChartAction('Click')} />Click
                        </label>
                    </div>
                </div>
            </div>
        );
    },
    SettingsUI: (props) => {
        const [deleteHover, setDeleteHover] = React.useState<{ ID: number, Hover: boolean }>({ ID: -1, Hover: false });

        return <>
            <div className="row">
                <div className="col-6">
                    <Select<IProps> Label='Split On' Field='SplitType' Record={props?.Settings} Setter={(r) => props.SetSettings(r)} Options={[{ Value: 'Axis', Label: 'Axis' }, { Value: 'Series', Label: 'Series' }]}
                        Disabled={!props.Settings.Split} />
                </div>
                <div className="col-6">
                    <label style={{ display: 'block' }}>&nbsp;</label>
                    <ToggleSwitch<IProps> Record={props.Settings} Field="Split" Setter={record => props.SetSettings(record)} />
                </div>
            </div>
            <ToggleSwitch<IProps> Record={props.Settings} Field="Legend" Setter={record => props.SetSettings(record)} />
            <br />
            <h6>X Axis</h6>
            <div className="row">
                <div className="col-5">
                    <DatePicker<IProps> Record={props.Settings} Field="Min" Valid={() => true} Setter={record => props.SetSettings(record)} Type="datetime-local"
                        Disabled={props.Settings.AutoXScale} AllowEmpty={true} />
                </div>
                <div className="col-5">
                    <DatePicker<IProps> Record={props.Settings} Field="Max" Valid={() => true} Setter={record => props.SetSettings(record)} Type="datetime-local"
                        Disabled={props.Settings.AutoXScale} AllowEmpty={true} />
                </div>
                <div className="col-2">
                    <label style={{ display: 'block' }}>&nbsp;</label>
                    <ToggleSwitch<IProps> Record={props.Settings} Field="AutoXScale" Label="Use Data" Setter={record => props.SetSettings(record)} />
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex align-items-center justify-content-start">
                    <h6>Y Axises</h6>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <button className='btn btn-primary' onClick={() => {
                        let maxID = props.Settings.YAxis.reduce((max, current) => {
                            return current.ID > max ? current.ID : max
                        }, 0)
                        props.SetSettings({
                            ...props.Settings, YAxis: [...props.Settings.YAxis, {
                                Max: 10, Min: 0, Position: 'left', Type: `None`, AutoMaxScale: true, AutoMinScale: true, Label: '',
                                ShowEvents: false,
                                ID: props.Settings.YAxis.length !== 0 ? maxID + 1 : 0
                            }]
                        });
                    }}>Add New</button>
                </div>
            </div>
            <ReactTable.Table<TrenDAP.IYAxis>
                TableClass="table table-hover"
                TableStyle={{ width: 'calc(100%)', height: '50%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                SortKey={"Label"}
                OnClick={() => { }}
                OnSort={() => { }}
                Data={props.Settings.YAxis}
                Ascending={true}
                KeySelector={(row) => row.ID}
            >
                <ReactTable.Column<TrenDAP.IYAxis>
                    Key={'ID'}
                    AllowSort={true}
                    Field={'ID'}
                >
                    ID
                </ReactTable.Column>
                <ReactTable.Column<TrenDAP.IYAxis>
                    Key={'Label'}
                    AllowSort={true}
                    Field={'Label'}
                    Content={({ item }) =>
                        <Input<TrenDAP.IYAxis> Label="" Field='Label' Record={item} Type='text' Valid={(field) => true}
                            Setter={(record) => { props.SetSettings({ ...props.Settings, YAxis: props.Settings.YAxis.map(axis => axis.ID === record.ID ? record : axis) }) }} />
                    }
                >
                    Label
                </ReactTable.Column>
                <ReactTable.Column<TrenDAP.IYAxis>
                    Key={'Position'}
                    AllowSort={true}
                    Field={'Position'}
                    Content={({ item }) =>
                        <Select<TrenDAP.IYAxis> Label="" Record={item} Field="Position" Options={[{ Label: 'Left', Value: 'left' }, { Label: 'Right', Value: 'right' }]}
                            Setter={(record) => { props.SetSettings({ ...props.Settings, YAxis: props.Settings.YAxis.map(axis => axis.ID === record.ID ? record : axis) }) }} />
                    }
                >
                    Position
                </ReactTable.Column>
                <ReactTable.Column<TrenDAP.IYAxis>
                    Key={'Min'}
                    AllowSort={true}
                    Field={'Min'}
                    Content={({ item }) =>
                        <>
                            <Input<TrenDAP.IYAxis> Label="" Field='Min' Record={item} Type='number' Disabled={item.AutoMinScale} Valid={(field) => true}
                                Setter={(record) => { props.SetSettings({ ...props.Settings, YAxis: props.Settings.YAxis.map(axis => axis.ID === record.ID ? record : axis) }) }} />
                            <ToggleSwitch<TrenDAP.IYAxis> Field="AutoMinScale" Label="Use Data" Record={item}
                                Setter={(record) => { props.SetSettings({ ...props.Settings, YAxis: props.Settings.YAxis.map(axis => axis.ID === record.ID ? record : axis) }) }} />
                        </>
                    }
                >
                    Min
                </ReactTable.Column>
                <ReactTable.Column<TrenDAP.IYAxis>
                    Key={'Max'}
                    AllowSort={true}
                    Field={'Max'}
                    Content={({ item }) =>
                        <>
                            <Input<TrenDAP.IYAxis> Label="" Field='Max' Record={item} Type='number' Disabled={item.AutoMaxScale} Valid={(field) => true}
                                Setter={(record) => { props.SetSettings({ ...props.Settings, YAxis: props.Settings.YAxis.map(axis => axis.ID === record.ID ? record : axis) }) }} />
                            <ToggleSwitch<TrenDAP.IYAxis> Field="AutoMaxScale" Label="Use Data" Record={item}
                                Setter={(record) => { props.SetSettings({ ...props.Settings, YAxis: props.Settings.YAxis.map(axis => axis.ID === record.ID ? record : axis) }) }} />
                        </>
                    }
                >
                    Max
                </ReactTable.Column>
                <ReactTable.Column<TrenDAP.IYAxis>
                    Key="Delete"
                    AllowSort={false}
                    Field="AutoMaxScale"
                    Content={({ item }) =>
                        <>
                            <div onMouseEnter={() => setDeleteHover({ ID: item.ID, Hover: true })} onMouseLeave={() => setDeleteHover({ ID: item.ID, Hover: false })}>
                                <button className="btn btn-link" data-tooltip={`deletebtn-${item.ID}`} disabled={props.ChannelSettings.find(c => c.YAxisID === item.ID) != null ? true : false}
                                    onClick={() => props.SetSettings({ ...props.Settings, YAxis: props.Settings.YAxis.filter(axis => axis.ID !== item.ID) })}>
                                    <ReactIcons.TrashCan Color={'Red'} />
                                </button>
                            </div>
                            <ToolTip Target={`deletebtn-${item.ID}`} Zindex={9999} Show={(deleteHover.Hover && deleteHover.ID === item.ID) && props.ChannelSettings.find(c => c.YAxisID === item.ID) != null ? true : false}>
                                <span>Unable to delete axis that's in use by a channel.</span>
                            </ToolTip>
                        </>
                    }
                >
                </ReactTable.Column>
            </ReactTable.Table>
        </>
    },
    ChannelSelectionUI: (props) => {
        const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>(props.AllChannels);
        const [ascending, setAscending] = React.useState<boolean>(false);
        const [sortField, setSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Phase');

        const sort = (field: keyof DataSetTypes.IDataSetMetaData, ascend: boolean) => {
            setSortField(field);
            setAscending(ascend);
            setAllChannels((c) => _.orderBy(c, field, [ascend ? "asc" : "desc"]))
        }

        return <>
            <div className="container-fluid d-flex h-50 flex-column p-0">
                <ReactTable.Table<DataSetTypes.IDataSetMetaData>
                    TableClass="table table-hover"
                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    SortKey={sortField}
                    OnClick={(item) => {
                        const isSelected = props.SelectedChannels?.find(c => c.MetaData.ID === item.row.ID);
                        if (isSelected ?? false)
                            props.RemoveChannel(item.row.ID);
                        else {
                            const exisitingAxis = props.Settings.YAxis.find(axis => axis.Type === item.row.Type)
                            let yAxisID = exisitingAxis != null ? exisitingAxis.ID : 0
                            if (exisitingAxis == null) {
                                if (props.Settings.YAxis.length !== 0)
                                    yAxisID = props.Settings.YAxis.reduce((max, current) => {
                                        return current.ID > max ? current.ID : max
                                    }, 0) + 1
                                const newAxis: TrenDAP.IYAxis = { ID: yAxisID, Min: 0, Max: 10, AutoMaxScale: true, AutoMinScale: true, Label: '', Type: item.row.Type, Position: 'left', ShowEvents: false }

                                props.SetSettings({
                                    ...props.Settings,
                                    YAxis: [...props.Settings.YAxis, newAxis]
                                });
                            }

                            props.AddChannel(item.row.ID, { ...TrendWidget.DefaultChannelSettings, YAxisID: yAxisID });
                        }
                    }}
                    OnSort={data => sort(data.colField, data.ascending)}
                    Data={allChannels}
                    Ascending={ascending}
                    KeySelector={(row) => row.ID}
                    Selected={(row) => props.SelectedChannels.find(c => c.MetaData.ID === row.ID) != null ? true : false}
                >
                    <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                        Key={'ParentName'}
                        AllowSort={true}
                        Field={'ParentName'}
                    >
                        Parent
                    </ReactTable.Column>
                    <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                        Key={'Name'}
                        AllowSort={true}
                        Field={'Name'}
                    >
                        Name
                    </ReactTable.Column>
                    <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                        Key={'Type'}
                        AllowSort={true}
                        Field={'Type'}
                    >
                        Type
                    </ReactTable.Column>

                    <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                        Key={'Phase'}
                        AllowSort={true}
                        Field={'Phase'}
                    >
                        Phase
                    </ReactTable.Column>
                </ReactTable.Table>
            </div>
            <div className="container-fluid d-flex h-50 flex-column p-0">
                <ReactTable.Table<ISelectedChannels>
                    TableClass="table table-hover"
                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    SortKey={"ChannelKey"}
                    OnSort={() => { }}
                    Data={props.SelectedChannels}
                    Ascending={ascending}
                    KeySelector={(row, idx) => idx}
                >
                    <ReactTable.Column<ISelectedChannels>
                        Key={'Name'}
                        AllowSort={true}
                        Field={'MetaData'}
                        Content={({ item }) => <p>{item?.MetaData?.Name}</p>}
                    >
                        Channel
                    </ReactTable.Column>
                    <ReactTable.Column<ISelectedChannels>
                        Key={'Color'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={({ item }) =>
                            <ColorPicker<IChannelSettings> Record={item?.ChannelSettings} Label="Color" Field="Color" Setter={(record) => props.SetChannelSettings(item.Key, record)}
                                Style={{ backgroundColor: item.ChannelSettings.Color, borderColor: item.ChannelSettings.Color }} />
                        }
                    >
                        Color
                    </ReactTable.Column>
                    <ReactTable.Column<ISelectedChannels>
                        Key={'SeriesField'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={({ item }) =>
                            <Select<IChannelSettings> Record={item?.ChannelSettings} Label="" Field="Field" Setter={(record) => props.SetChannelSettings(item.Key, record)}
                                Options={[{ Label: 'Average', Value: 'Average' }, { Label: 'Minimum', Value: 'Minimum' }, { Label: 'Maximum', Value: 'Maximum' }]} />
                        }
                    >
                        Field
                    </ReactTable.Column>
                    <ReactTable.Column<ISelectedChannels>
                        Key={'YAxis'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={({ item }) =>
                            <>
                                <Select<IChannelSettings> Label="" Record={item.ChannelSettings} Field="YAxisID" Setter={(record) => props.SetChannelSettings(item.Key, { ...item.ChannelSettings, YAxisID: parseInt(record.YAxisID as any) })} Options={props.Settings.YAxis.map(axis => { return { Label: `${axis.ID}`, Value: `${axis.ID}` } })} />
                            </>
                        }
                    >
                        Y Axis ID
                    </ReactTable.Column>
                </ReactTable.Table>
            </div>
        </>
    }
}

