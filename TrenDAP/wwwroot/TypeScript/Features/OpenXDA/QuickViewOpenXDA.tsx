//******************************************************************************************************
//  QuickViewOpenXDA.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  08/16/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import MultiCheckBoxSelect from './../../Forms/MultiCheckBoxSelect';
import queryString from "querystring";
import { createBrowserHistory } from "history"
//import { ExportToCsv } from '../ExportCSV';
import moment, { Moment } from 'moment';
import 'moment-timezone';
import { scaleLinear, line, extent, axisBottom, axisLeft, format as d3Format, scaleUtc, scaleTime, brushX } from 'd3';
import { select } from 'd3-selection';
import stats from 'stats-lite';
//import ExportCSV from './ExportCSV';
import { TrenDAP } from '../../global';

const MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ssZ'
const MomentDateFormat = 'YYYY-MM-DD';
const MomentTimeZone = 'America/Chicago';

const QuickViewOpenXDA = (props: {}) => {
    const [meters, setMeters] = React.useState<string[]>([]);
    const [meter, setMeter] = React.useState<string>(undefined);
    const [channels, setChannels] = React.useState<{ Channel: TrenDAP.iXDAReturnData, Selected: boolean }[]>([]);
    const [showStats, setShowStats] = React.useState<'stats' | 'cp'>('stats');
    const [hover, setHover] = React.useState<number>(0);
    const [data, setData] = React.useState<TrenDAP.iXDAReturnData[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    React.useEffect(() => {
        let json = JSON.parse(localStorage.getItem('QuickViewOpenXDA'));

        $.ajax({
            type: "POST",
            url: `${homePath}api/DataSet/QuickView/${json.DataSourceID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(json.PostData),
            cache: false,
            async: true
        }).done((d: TrenDAP.iXDAReturnData[]) => {

            d = _.orderBy(d, ['Meter']);
            setData(d);
            let ms = [...(new Set(d.map(d => d.Meter)))];
            setMeters(ms);
            let m = ms[0];
            setMeter(m);
            let cs = d.filter(ch => ch.Meter == m).map(ch => ({ Channel: ch, Selected: true }));
            setChannels(cs);
            setLoading(false);
        });


    }, []);

    React.useEffect(() => {
    }, [meters]);

    React.useEffect(() => {
        if (data.length == 0 || channels.length == 0) return;
        let cs = data.filter(ch => ch.Meter == meter).map(ch => ({ Channel: ch, Selected: channels.filter(c => c.Channel.Name == ch.Name)[0]?.Selected ?? false }));
        setChannels(cs);
    }, [meter]);

    return (
        <div style={{ height: "100%", width: '100%' }}>
            <div className="row" style={{ height: 130, margin: 5 }}>
                <div className="col" style={{ padding: 0 }}>
                    <div className="card">
                        <div className="card-body" style={{ height: 130 }}>
                            <div className="row">
                                <div className="col">
                                    <label>Meter</label>
                                    <select className='form-control' value={meter} onChange={(evt) => setMeter(meters.find(m => m === evt.target.value))}>
                                        {meters.map((m, i) => <option key={i} value={m}>{m}</option>)}
                                    </select>
                                </div>
                                <div className="col">
                                    <label>Channels</label>
                                    <MultiCheckBoxSelect Options={channels.map(t => ({ Text: t.Channel.Name, Value: t.Channel.Name, Selected: t.Selected }))} OnChange={(evt, options) => {
                                        let newChannels = _.cloneDeep(channels);
                                        $.each(options, (index, option) => {
                                            newChannels.find(type => type.Channel.Name == option.Value).Selected = !option.Selected
                                        });
                                        setChannels(newChannels)
                                    }} />
                                </div>
                                <div className='col-1'>
                                    <label>Summary</label>
                                    <select className='form-control' value={showStats} onChange={(evt) => setShowStats(evt.target.value as any)}>
                                        <option value='stats'>Stats</option>
                                        <option value='cp'>CP</option>
                                    </select>
                                </div>
                                {/*
                                <div className='col-1' style={{ paddingTop: 30 }}><ExportCSV Meter={meter} Channels={channels.filter(c => c.Selected).map(c => c.Channel)} StartDate={dates[0]} EndDate={dates[1]} /></div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ maxHeight: "calc(100% - 135px)", overflowY: 'auto', margin: '5px 5px 5px 5px ' }}>
                <div className="col" style={{ padding: '0px 2px 0px 0px' }}>
                    {
                    loading ? <span>Loading ...</span> :
                            [...new Set(channels.filter(c => c.Selected).map(c => c.Channel.Type + ' ' + c.Channel.Characteristic + ' (' + c.Channel.Unit + ')'))].map(k => <Chart key={k} ShowStats={showStats} Name={k} Channels={channels.filter(c => c.Selected && (c.Channel.Type + ' ' + c.Channel.Characteristic + ' (' + c.Channel.Unit + ')') == k).map(ch => ch.Channel)} Hover={hover} SetHover={(hov) => {
                                if (Math.abs(hov - hover) > 5)
                                    setHover(hov);
                            }} SetZoom={(s, e) => {
                    }} />)
                    }
                </div>
            </div>
        </div>
    )
}

interface ChartSeries {
    Channel: TrenDAP.iXDAReturnData, Field: 'min' | 'max' | 'avg', Selected: boolean, Data: { TimeStamp: Moment, Value: number }[], Min: number, Max: number, Avg: number, StDev: number, CP99: number, CP95: number, CP50: number, CP05: number, CP01: number, Outliers: number, DataPoints: number
}

const Chart = (props: { Name: string, Channels: TrenDAP.iXDAReturnData[], ShowStats: 'stats' | 'cp', Hover: number, SetHover: (hov: number) => void, SetZoom: (startDate: string, endDate: string) => void }) => {
    const svgHeight = 300;
    const svgWidth = window.innerWidth - 850;
    const margin = { top: 40, right: 0, bottom: 40, left: 50 };
    const ref = React.useRef(null);
    const [hoverData, setHoverData] = React.useState<object>({});
    const [data, setData] = React.useState<object>({});

    React.useEffect(() => {
        if (props.Channels.length > 0  && Object.keys(data).length == 0) {
            let dict = {};
            let i = 0;
            for (let channel of props.Channels) {

                dict[channel.Name + '-Avg'] = {
                    Channel: channel,
                    Field: 'avg',
                    Data: channel.Data.map(d => ({ TimeStamp: moment.utc(d.Timestamp, MomentDateTimeFormat), Value: d.Average })),
                    Selected: true,
                    Max: 0,
                    Min: 0,
                    Avg: 0,
                    StDev: 0, CP99: 0, CP95: 0, CP50: 0, CP05: 0, CP01: 0, DataPoints: channel.Data.length, Outliers: 0
                } as ChartSeries;

                dict[channel.Name + '-Min'] = {
                    Channel: channel,
                    Field: 'min',
                    Data: channel.Data.map(d => ({ TimeStamp: moment.utc(d.Timestamp, MomentDateTimeFormat), Value: d.Minimum })),
                    Selected: true,
                    Max: 0,
                    Min: 0,
                    Avg: 0,
                    StDev: 0, CP99: 0, CP95: 0, CP50: 0, CP05: 0, CP01: 0, DataPoints: channel.Data.length, Outliers: 0
                } as ChartSeries;

                dict[channel.Name + '-Max'] = {
                    Channel: channel,
                    Field: 'max',
                    Data: channel.Data.map(d => ({ TimeStamp: moment.utc(d.Timestamp, MomentDateTimeFormat), Value: d.Maximum })),
                    Selected: true,
                    Max: 0,
                    Min: 0,
                    Avg: 0,
                    StDev: 0, CP99: 0, CP95: 0, CP50: 0, CP05: 0, CP01: 0, DataPoints: channel.Data.length, Outliers: 0
                } as ChartSeries;

                
            }

            let hovDict = {};
            $.each(Object.keys(dict), (i, key) => {
                dict[key].Min = Math.min(...dict[key].Data.map(d => d.Value));
                dict[key].Max = Math.max(...dict[key].Data.map(d => d.Value));
                dict[key].Avg = stats.mean(dict[key].Data.map(d => d.Value));
                dict[key].StDev = stats.stdev(dict[key].Data.map(d => d.Value));
                dict[key].CP99 = stats.percentile(dict[key].Data.map(d => d.Value), 0.99);
                dict[key].CP95 = stats.percentile(dict[key].Data.map(d => d.Value), 0.95);
                dict[key].CP50 = stats.percentile(dict[key].Data.map(d => d.Value), 0.5);
                dict[key].CP05 = stats.percentile(dict[key].Data.map(d => d.Value), 0.05);
                dict[key].CP01 = stats.percentile(dict[key].Data.map(d => d.Value), 0.01);

                let lowerBound = dict[key].Avg - 3 * dict[key].StDev;
                let upperBound = dict[key].Avg + 3 * dict[key].StDev;

                dict[key].Outliers = dict[key].Data.filter(d => d.Value < lowerBound || d.Value > upperBound).length;
                dict[key].DataPoints = dict[key].Data.length;
                hovDict[key] = dict[key].Data[0].Value;
            });


            setData(dict);
            setHoverData(hovDict);
        }
    }, [props.Channels]);

    React.useEffect(() => DrawChart(), [data]);
    React.useEffect(() => {
        if (props.Hover < margin.left) return;
        else if (props.Hover > svgWidth - margin.right) return;

        const svg = select(ref.current).select('svg');
        svg.selectAll("g.hover-line").remove();
        svg.append("g")
            .classed("hover-line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", 'red')
            .attr("d", `M ${props.Hover} ${svgHeight - margin.bottom} V ${margin.top}`)

        //let x = scaleUtc().rangeRound([margin.left, svgWidth - margin.right]);
        //x.domain([moment.utc(props.StartDate, MomentDateTimeFormat), moment.utc(props.EndDate, MomentDateTimeFormat)]);
        //let ts = moment.utc(x.invert(props.Hover)).format(MomentDateTimeFormat);

        let hovDict = {};
                    let mult = (props.Hover - margin.left - margin.right) / (svgWidth - margin.left - margin.right);

        $.each(Object.keys(data), (i, key) => {
            let length = data[key].Data.length;
            let index = Math.floor(mult * length);
            //console.log(ts, data[key].Data[index].TimeStamp);

            hovDict[key] = data[key].Data[index].Value;
        });
        setHoverData(hovDict);

    }, [props.Hover]);

    function DrawChart() {
        let x = scaleUtc().rangeRound([margin.left, svgWidth - margin.right]);
        let y = scaleLinear().rangeRound([svgHeight - margin.top, margin.bottom]);


        select(ref.current).selectAll('svg').remove()
        const svg = select(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .style('user-select', 'none')
            .on('mousemove', (d: MouseEvent) => {
                console.log('mousemove')
                props.SetHover(d.offsetX)
            })
            //.on('mousedown', (d: MouseEvent) => OnXZoom(d, svg, x));

        let yextent = extent([].concat(...Object.keys(data).filter(key => data[key].Selected).map(key => data[key].Data.map(d => d.Value))));
        y.domain(yextent);
        let xextent = extent([].concat(...Object.keys(data).filter(key => data[key].Selected).map(key => data[key].Data.map(d => d.TimeStamp))));
        x.domain(xextent);

        const xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(axisBottom(x));


        const yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", `translate(${margin.left},0)`)
            .call(axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => d3Format("~s")(value)));

        let linefunc = line<{ TimeStamp: string, Value: number, Field: string }>().x(d => x(moment.utc(d.TimeStamp))).y(d => y(d.Value));

        svg.selectAll("g.min-line").remove();
        svg.selectAll("g.min-line")
            .data(Object.keys(data).filter(key => data[key].Field == 'min' && data[key].Selected))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", 4)
            .attr("stroke", (d: string) => getColor(data[d].Channel.Phase))
            .attr("d", (d: string) => {
                return linefunc(data[d].Data);
            })

        svg.selectAll("g.avg-line").remove();
        svg.selectAll("g.avg-line")
            .data(Object.keys(data).filter(key => data[key].Field == 'avg' && data[key].Selected))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", (d: string) => getColor(data[d].Channel.Phase))
            .attr("d", (d: string) => {
                return linefunc(data[d].Data);
            })


        svg.selectAll("g.max-line").remove();
        svg.selectAll("g.max-line")
            .data(Object.keys(data).filter(key => data[key].Field == 'max' && data[key].Selected))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", (d) => 2)
            .attr("stroke", (d: string) => getColor(data[d].Channel.Phase))
            .attr("d", (d: string) => {
                return linefunc(data[d].Data);
            })
    }



    function getColor(label) {
        if (label.toUpperCase().indexOf('AN') >= 0) return '#A30000';   // darker red
        else if (label.toUpperCase().indexOf('BN') >= 0) return '#0029A3';
        else if (label.toUpperCase().indexOf('CN') >= 0) return '#007A29';
        else if (label.toUpperCase().indexOf('NG') >= 0) return '#c3c3c3';   // grey
        else if (label.toUpperCase().indexOf('AB') >= 0) return '#FF0000';   // brighter red
        else if (label.toUpperCase().indexOf('BC') >= 0) return '#0066CC';
        else if (label.toUpperCase().indexOf('CA') >= 0) return '#33CC33';   // grey
        else if (label.toUpperCase().indexOf('RES') >= 0) return '#c3c3c3';  // grey
        else if (label.toUpperCase().indexOf('ALL') >= 0) return '#c3c3c3';  // grey
        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);

            return `#${(ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne)}${(ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo)}${(ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree)}`;
        }
    }

    function getlabel(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0) return 'Max';
        else if (label.toUpperCase().indexOf('MIN') >= 0) return 'Min';
        else return 'Avg';
    }

    function getDashArray(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0) return 2;
        else if (label.toUpperCase().indexOf('MIN') >= 0) return 4;
        else return null;
    }

    function getLine(tag, measurement) {
        let path = "M 0 17  C 10 0, 20 0, 25 10 S 32 25, 45 17";
        if (measurement.Selected)
            return <svg height={25} width={50} onClick={() => {
                let newData = { ...data };
                newData[tag].Selected = false;
                setData(newData);
            }}>
                <path d={path} stroke={getColor(measurement.Channel.Phase)} strokeDasharray={getDashArray(measurement.Field)} strokeWidth={1.5} fill="transparent" />
            </svg>;
        else
            return <svg height={25} width={50} onClick={() => {
                let newData = { ...data };
                newData[tag].Selected = true;
                setData(newData);
            }}>
                <path d={path} stroke={getColor(measurement.Channel.Phase)} strokeDasharray={getDashArray(measurement.Field)} strokeWidth={1.5} fill="transparent" opacity={0.2} />
            </svg>;

    }

    function formatText(num: number) {
        if (num >= 10) return num.toFixed(0);
        else if (num >= 0) return num.toFixed(2);
        else if (num >= 0.0001) return num.toFixed(4);
        else if (num >= 0.000001) return num.toFixed(6);
        else return num;

    }

    //function OnXZoom(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
    //    const start = evt.offsetX;
    //    const brush = brushX()
    //        .extent([[margin.left, margin.top + 0.5], [svgWidth - margin.right, svgHeight - margin.bottom + 0.5]])

    //    const br = svg.append('g').call(brush)
    //    br.call(brush.move, [start, start + 1]);
    //    svg.on('mousemove.brush', (e: MouseEvent) => {
    //        br.call(brush.move, [start, e.offsetX]);
    //    })
    //    svg.on('mouseup.brush', (e: MouseEvent) => {
    //        const min = Math.min(start, e.offsetX);
    //        const max = Math.max(start, e.offsetX);
    //        props.SetZoom(moment(scale.invert(min)).format(MomentDateTimeFormat), moment(scale.invert(max)).format(MomentDateTimeFormat));
    //        br.remove();
    //        svg.on('mousemove.brush', null);
    //        svg.on('mouseup.brush', null);
    //    });
    //}

    return (
        <div className="card">
            <div className="card-header">{props.Name}</div>
            <div className="card-body" style={{ padding: 0, position: 'relative' }}>
                <div ref={ref} className='pull-left' style={{ height: 300, width: 'calc(100% - 400px)', position: 'absolute', top: 0, left: 0 }}></div>
                <div className='pull-right' style={{ height: 300, maxHeight: 300, overflowY: 'auto', width: window.innerWidth / 3 - 75, position: 'relative', right: 0 }}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Phase</th>
                                <th></th>
                                <th>Hover</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Min</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Avg</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Max</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>StDev</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP99</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP95</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP50</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP05</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP01</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Counts</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Outliers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map(key =>
                                <tr key={key}>
                                    <td>{data[key].Channel.Phase}-{getlabel(key)}</td>
                                    <td>{getLine(key, data[key])}</td>
                                    <td>{formatText(hoverData[key])}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].Min)}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].Avg)}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].Max)}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].StDev)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP99)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP95)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP50)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP05)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP01)}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{data[key].DataPoints}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{data[key].Outliers}</td>
                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default QuickViewOpenXDA;