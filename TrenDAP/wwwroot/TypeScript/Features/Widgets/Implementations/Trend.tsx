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
import { DataSetTypes, TrenDAP } from '../../../global';
import { Input, Select, CheckBox, ToggleSwitch, DatePicker, ColorPicker } from '@gpa-gemstone/react-forms';
import { WidgetTypes } from '../Interfaces';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ReactTable } from '@gpa-gemstone/react-table';
import moment from 'moment';
import _ from 'lodash';
import { ISelectedChannels } from '../WidgetWrapper'

export interface IProps {
    Min: number,
    Max: number,
    YAxis: TrenDAP.iYAxis[],
    Legend: boolean,
    Split: boolean,
    SplitType: 'Axis' | 'Series',
}

interface IChannelSettings {
    Field: TrenDAP.SeriesField,
    Color: string,
    ShowEvents: boolean,
    Axis: number //not sure yet what this is.. i think this was how he was tying axises to yAxises but we need to use channelKeys here..
}

export const TrendWidget: WidgetTypes.IWidget<IProps, IChannelSettings> = {
    DefaultSettings: {
        Min: 0,
        Max: 100,
        YAxis: [],
        Legend: true,
        Split: false,
        SplitType: 'Axis',
    },
    DefaultChannelSettings: { Field: 'Average', Color: 'Red', ShowEvents: false, Axis: 0 },
    Name: "Trend",
    WidgetUI: (props) => {
        const ref = React.useRef<HTMLDivElement>(null);
        const [toggle, setToggle] = React.useState<boolean>(false);
        const hover = React.useRef<number>(-10);
        const svgs = React.useRef<d3.Selection<SVGSVGElement, unknown, null, undefined>[]>([]);
        const margin = React.useRef<{ bottom: number, left: number, top: number, right: number }>({ bottom: 50, left: 50, top: 40, right: 50 });
        const [chartAction, setChartAction] = React.useState<TrenDAP.ChartAction>('Pan');
        const chartActionRef = React.useRef<TrenDAP.ChartAction>('Pan');
        const setHover = React.useCallback((value) => {
            HandleHoverUpdate(value);
        }, []);

        React.useEffect(() => {
            chartActionRef.current = chartAction;
        }, [chartAction]);

        React.useEffect(() => {
            Initialize()
        }, [props.Data, props.Settings])

        React.useEffect(() => {
            return () => { select(ref.current).selectAll('svg').remove(); }
        }, []);


        function GetChannelData(channel: WidgetTypes.IWidgetData<IChannelSettings>) {
            return props.Data.find(data => data.ID === channel.ID).SeriesData[channel.ChannelSettings.Field]
        }

        function GetDataSeriesForD3(series: WidgetTypes.IWidgetData<IChannelSettings>) {
            return (GetChannelData(series)).map(data => [data[0], data[1]]);
        }

        function Initialize() {
            //d3.select(ref.current).selectAll('svg').remove()
            if (props.Data.length === 0) return;
            let svgCount = 1;
            if (props.Settings.Split && props.Settings.SplitType === 'Axis') {
                margin.current = { bottom: 50, left: 50, top: 40, right: 50 };
                svgCount = props.Settings.YAxis.length;
            }
            else if (props.Settings.Split && props.Settings.SplitType === 'Series') {
                margin.current = { bottom: 50, left: 50, top: 40, right: 50 }
                svgCount = props.Data.length;
            }
            else
                margin.current = {
                    bottom: 50,
                    left: (props.Settings.YAxis.filter(axis => axis.Position === 'left').length == 0 ? 50 : props.Settings.YAxis.filter(axis => axis.Position === 'left').length * 50),
                    top: 40,
                    right: (props.Settings.YAxis.filter(axis => axis.Position === 'right').length == 0 ? 50 : props.Settings.YAxis.filter(axis => axis.Position === 'right').length * 50)
                };

            if (props.Settings.Legend) margin.current.right = margin.current.right + 200;

            const svgHeight = ref.current.offsetHeight / svgCount;

            if (svgs.current.length !== svgCount) {
                svgs.current = [];
                select(ref.current).selectAll('svg').remove()
                for (let i = 0; i < svgCount; i++) {
                    const svg = select(ref.current).append('svg')
                    svg.attr('width', ref.current.offsetWidth).attr('height', svgHeight)

                    svgs.current.push(svg);

                }


            }

            const x = GetXScale();

            svgs.current.forEach((svg, i) => {
                if (props.Settings.Split && props.Settings.SplitType === 'Axis')
                    return InitializeSplitOnAxis(svg, x, i);
                if (props.Settings.Split && props.Settings.SplitType === 'Series')
                    return InitializeSplitOnSeries(svg, x, i);
                else
                    return InitializeNotSplit(svg, x);
            });
        }

        function InitializeSplitOnSeries(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, x: d3.ScaleTime<number, number>, i: number) {
            const series = props.Data[i];
            const axis = props.Settings.YAxis[series.ChannelSettings.Axis];
            AddXAxis(svg, x);

            const y = GetYScale(series.ChannelSettings.Axis);
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
                .attr("stroke", series.ChannelSettings.Color)
                .attr("d", (d) => {
                    return lineFunc(data);

                })

            if (series.ChannelSettings.ShowEvents) {
                //AddEventLine(series, svg, x);
            }

            svg.selectAll("g.legend").remove();
            if (props.Settings.Legend) {
                AddLegend(svg);
            }

            svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX));
            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x));

        }

        function InitializeSplitOnAxis(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, x: d3.ScaleTime<number, number>, i: number) {
            const svgHeight = parseInt(svg.attr('height'));
            const axis = props.Settings.YAxis[i];
            const series = props.Data.filter(s => s.ChannelSettings.Axis === i).map(s => {
                let datum = GetChannelData(s);

                return {
                    ...s,
                    Data: datum.filter(data => data[0] >= props.Settings.Min && data[0] <= props.Settings.Max && data[s.ChannelSettings.Field] >= axis.Min && data[s.ChannelSettings.Field] <= axis.Max)
                }
            });

            AddXAxis(svg, x);

            const y = GetYScale(i);
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
                .attr("stroke", (s) => s.ChannelSettings.Color)
                .attr("d", (s) => {
                    let lineFunc = line<number[]>().x(dd => x(dd[0])).y(dd => y(dd[1]));
                    let data = GetDataSeriesForD3(s);
                    return lineFunc(data);

                })

            //series.forEach(s => AddEventLine(s, svg, x))

            svg.selectAll("g.legend").remove();
            if (props.Settings.Legend) {
                AddLegend(svg);
            }


            svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX));
            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x));
        }

        function InitializeNotSplit(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, x: d3.ScaleTime<number, number>) {
            AddXAxis(svg, x);
            const y = props.Settings.YAxis.map((axis, index) => GetYScale(index));
            svg.selectAll('g.yaxis').remove();
            const yAxis = props.Settings.YAxis.map((axis, index) => {
                let a;
                if (axis.Position === 'left') {
                    let ind = props.Settings.YAxis.filter(axis => axis.Position === 'left').findIndex(axis => axis === props.Settings.YAxis[index]);
                    AddYAxisLeft(axis, svg, y[index], false, ind);
                }
                else {
                    let ind = props.Settings.YAxis.filter(axis => axis.Position === 'right').findIndex(axis => axis === props.Settings.YAxis[index]);
                    AddYAxisRight(axis, svg, y[index], ind);
                }

                return a;

            });

            svg.selectAll("g.legend").remove();
            if (props.Settings.Legend) {
                AddLegend(svg);
            }

            svg.selectAll("g.line").remove();
            svg.selectAll("g.line")
                .data(props.Data)
                .enter()
                .append("g")
                .classed("line", true)
                .append("path")
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", d => d.ChannelSettings.Color)
                .attr("d", d => {
                    let yScale = y[d.ChannelSettings.Axis];
                    let lineFunc = line<number[]>().x(dd => x(dd[0])).y(dd => yScale(dd[1]));
                    let data = GetDataSeriesForD3(d);
                    return lineFunc(data);
                })

            svg.on('mousemove', (d: MouseEvent) => setHover(d.offsetX))
            svg.on('mousedown', (d: MouseEvent) => HandleChartAction(d, svg, x))


            //props.Data.filter(channel => channel.ChannelSettings.ShowEvents).forEach(series => AddEventLine(channel, svg, x));

        }

        function AddLegend(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) {
            const svgHeight = parseInt(svg.attr('height'));
            const svgWidth = parseInt(svg.attr('width'));

            const legend = svg.selectAll('g.legend')
                .data([props.Data])
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

        function GetXScale() {
            let d = props.Data.map(channel => GetDataSeriesForD3(channel))
            let dd = [].concat(...d)
            let ddx = dd.map(dp => new Date(dp.Timestamp).getTime());
            let xMax = Math.max(...dd.map(dp => dp[0]));
            let xMin = Math.min(...dd.map(dp => dp[0]));
            return scaleUtc()
                .domain([xMin, xMax])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
                .range([margin.current.left, ref.current.offsetWidth - margin.current.right]);
        }

        function GetYScale(axis: number) {
            let d = props.Data.filter(s => s.ChannelSettings.Axis === axis).map(s => GetDataSeriesForD3(s))
            let dd = [].concat(...d)
            let yMax = Math.max(...dd.map(dp => dp[1]));
            let yMin = Math.min(...dd.map(dp => dp[1]));

            return scaleLinear()
                .range([ref.current.offsetHeight - margin.current.bottom, margin.current.top])
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
            //this will need to be redone
            //CalculateAxisRange('x');
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

            let width = 200

            props.Data.forEach((series, index) => {
                tooltip.append('rect').attr('x', 5).attr('y', `${index}em`).attr('height', '1em').attr('width', '1em').attr('fill', series.ChannelSettings.Color);
                let datum = GetChannelData(series);
                const floor = Math.floor(datum.length * evt.offsetX / props.Width * .95);
                const ceil = Math.ceil(datum.length * evt.offsetX / props.Width * 1.05);
                const shortenedData = datum.slice(floor, ceil);
                const dist = shortenedData.map(d => ({ Value: d[1], Distance: Math.abs(evt.offsetX - scale(d[0])) }));
                dist.sort((a, b) => {
                    if (a.Distance > b.Distance) return 1;
                    else if (a.Distance == b.Distance) return 0;
                    else return -1;
                })

                const formated = format('.2f')(dist[0].Value);
                text.append('tspan').text(series.Name + ' - ' + formated).attr('x', '1.5em').attr('y', `${index + 1}em`);
                width = text.node().getBBox().width + 25 > width ? text.node().getBBox().width + 25 : width;
            });
            rect.attr('width', width);
            if (width > props.Width - margin.current.right - evt.offsetX)
                tooltip.attr("transform", `translate(${evt.offsetX - 15 - width},${evt.offsetY - tooltipHeight / 2})`);
        }

        function OnPan(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
            const start = evt.clientX;
            svg.on('mousemove.pan', (e: MouseEvent) => {
                props.SetSettings({ ...props.Settings, Min: scale.invert(scale.range()[0] + start - e.clientX).getTime() })
                props.SetSettings({ ...props.Settings, Max: scale.invert(scale.range()[1] + start - e.clientX).getTime() })
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
                props.SetSettings({ ...props.Settings, Min: scale.invert(min).getTime() })
                props.SetSettings({ ...props.Settings, Max: scale.invert(max).getTime() })

                br.remove();
                svg.on('mousemove.brush', null);
                svg.on('mouseup.brush', null);
            });
        }
        return (
            <div className="d-flex h-100 flex-column" ref={ref} style={{ userSelect: 'none' }}>
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

                </div>
            </div>
        );
    },
    SettingsUI: (props) => {
        return <>
            <ToggleSwitch<IProps> Record={props.Settings} Field="Legend" Setter={record => props.SetSettings(record)} />
            <ToggleSwitch<IProps> Record={props.Settings} Field="Split" Setter={record => props.SetSettings(record)} />
            <Select<IProps> Label='Split On' Field='SplitType' Record={props?.Settings} Setter={(r) => props.SetSettings(r)} Options={[{ Value: 'Axis', Label: 'Axis' }, { Value: 'Series', Label: 'Series' }]} />
            <h6>X Axis</h6>
            <hr />
            <div className="row">
                <div className="col-5">
                    <DatePicker<IProps> Record={props.Settings} Field="Min" Valid={() => true /*make sure its in dataset range*/}
                        Setter={record => props.SetSettings(record)} Type="datetime-local" />
                </div>
                <div className="col-5">
                    <DatePicker<IProps> Record={props.Settings} Field="Max" Valid={() => true /*make sure its in dataset range*/}
                        Setter={record => props.SetSettings(record)} Type="datetime-local" />
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => {
                        //CalculateAxisRange('x', 0);
                    }}>Use Data</button>
                </div>
            </div>
            <h6>Y Axis</h6>
            <button style={{ position: 'relative', float: 'right', top: -30 }} className='btn btn-primary' onClick={() => {
                props.SetSettings({ ...props.Settings, YAxis: [...props.Settings.YAxis, { Max: 10, Min: 0, Position: 'left', Units: '' }] });
            }}>Add New</button>
            <hr />
            <ul className="list-group list-group-flush" style={{ maxHeight: window.innerHeight - 625, overflowY: 'auto', overflowX: 'hidden', width: '100%' }}>
                {props.Settings.YAxis.map((axis, index) => (
                    <li key={index} className='list-group-item'>
                        <AxisSettings Axis={axis}
                            SetAxis={axis => {
                                let axises = [...props.Settings.YAxis]
                                axises[index] = axis
                                props.SetSettings({ ...props.Settings, YAxis: axises })
                            }}
                            RemoveAxis={() => {
                                let axises = [...props.Settings.YAxis]
                                axises.splice(index, 1)
                                props.SetSettings({ ...props.Settings, YAxis: axises })
                            }}
                            key={index}
                        /></li>
                ))}
            </ul>
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
            <div className="container-fluid d-flex h-50 flex-column">
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
                        else
                            props.AddChannel(item.row.ID, TrendWidget.DefaultChannelSettings);
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
            <div className="container-fluid d-flex h-50 flex-column">
                <ReactTable.Table<ISelectedChannels>
                    TableClass="table table-hover"
                    TableStyle={{ maxHeight: 'calc((-230px + 100vh) / 2)', width: '100%', overflow: 'hidden' }}
                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'scroll' }}
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
                        Content={(row) => <p>{row.item.MetaData.Name}</p>}
                    >
                        Channel
                    </ReactTable.Column>
                    <ReactTable.Column<ISelectedChannels>
                        Key={'Color'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={(row) =>
                            <ColorPicker<IChannelSettings> Record={row.item?.ChannelSettings} Label="Color" Field="Color" Setter={(item) => props.SetChannelSettings(row.item.Key, item)}
                                Style={{ backgroundColor: row.item.ChannelSettings.Color, borderColor: row.item.ChannelSettings.Color }} />
                        }
                    >
                        Color
                    </ReactTable.Column>
                    <ReactTable.Column<TrenDAP.IWidgetChannels<IChannelSettings>>
                        Key={'SeriesField'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={(row) =>
                            <Select<IChannelSettings> Record={row.item?.ChannelSettings} Label="" Field="Field" Setter={(item) => props.SetChannelSettings(row.item.Key, item)}
                                Options={[{ Label: 'Average', Value: 'Average' }, { Label: 'Minimum', Value: 'Minimum' }, { Label: 'Maximum', Value: 'Maximum' }]} />
                        }
                    >
                        Field
                    </ReactTable.Column>
                    <ReactTable.Column<TrenDAP.IWidgetChannels<IChannelSettings>>
                        Key={'SeriesField'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={(row) => <CheckBox<IChannelSettings> Record={row.item?.ChannelSettings} Field="ShowEvents" Setter={(item) => props.SetChannelSettings(row.item.Key, item)} />}
                    >
                        Show Events
                    </ReactTable.Column>
                </ReactTable.Table>
            </div>
        </>
    }
}

function AxisSettings(props: { Axis: TrenDAP.iYAxis, SetAxis: (axis: TrenDAP.iYAxis) => void, RemoveAxis: () => void }) {
    return (
        <div className='row'>
            <div className="col-2">
                <Select<TrenDAP.iYAxis> Record={props.Axis} Field="Position" Setter={record => props.SetAxis(record)}
                    Options={[{ Label: 'Left', Value: 'left' }, { Label: 'Right', Value: 'right' }]} />
            </div>
            <div className="col-2">
                { /*This needs to be a select of units for the Axis Type..*/}
                <Input<TrenDAP.iYAxis> Field='Units' Record={props.Axis} Type='text' Setter={(r) => props.SetAxis(r)} Valid={(field) => true} />
            </div>
            <div className="col-2">
                <Input<TrenDAP.iYAxis> Field='Min' Label='Min' Record={props.Axis} Type='number' Setter={(r) => props.SetAxis(r)} Valid={(field) => true} />
            </div>
            <div className="col-2">
                <Input<TrenDAP.iYAxis> Field='Max' Record={props.Axis} Type='number' Setter={(r) => props.SetAxis(r)} Valid={(field) => true} />
            </div>
            <div className="col-2" style={{ position: 'relative' }}>
                <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => {
                    //let newWidget = CalculateAxisRange(props.Widget, 'y', props.Index)
                    //props.Callback(newWidget);
                }}>Use Data</button>
            </div>

            <div className="col-2">
                <button className="btn btn-link" style={{ position: 'relative' }} onClick={() => { props.RemoveAxis() }}>
                    <ReactIcons.TrashCan Color={'Red'} />
                </button>
            </div>

        </div>
    );
}

//Helper Functions
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




export const Pan = (trend: TrenDAP.IWidgetProps<TrenDAP.ITrend>, value: number) => {
    let newTrend = { ...trend }
    newTrend.Settings.Max = newTrend.Settings.Max + value;
    newTrend.Settings.Min = newTrend.Settings.Min + value;
    return newTrend;
};*/