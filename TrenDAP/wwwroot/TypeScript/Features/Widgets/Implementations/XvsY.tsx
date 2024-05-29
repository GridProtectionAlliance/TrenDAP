//******************************************************************************************************
//  Text.tsx - Gbtc
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
import { Input, CheckBox, ColorPicker, StylableSelect } from '@gpa-gemstone/react-forms';
import { ReactTable } from '@gpa-gemstone/react-table';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols'
import { Modal } from '@gpa-gemstone/react-interactive';
import { WidgetTypes } from '../Interfaces';
import { linearRegression, linearRegressionLine, rSquared } from 'simple-statistics';
import moment from 'moment';
import _ from 'lodash'

import { DataSetTypes } from '../../../global';


interface IProps {
    XAxisLabel: string,
    YAxisLabel: string,
    Pairs: {
        Keys: [TrenDAP.IChannelKey, TrenDAP.IChannelKey],
        Index: number
    }[]
}

interface IChannelSettings {
    Color: string,
    RegressionLine: boolean,
    Field: TrenDAP.SeriesField,
    Axis: ('X' | 'Y'),
    PairIndex: number
}

interface IAxisSelection extends IChannelSettings {
    LabelValue: SelectValue,
}


interface IPairChannel extends TrenDAP.IWidgetChannels<IAxisSelection> {
    MetaData: DataSetTypes.IDataSetMetaData, IsNew: boolean, PairIndex: number
}

interface SelectValue {
    Field: TrenDAP.SeriesField,
    Axis: ('X' | 'Y'),
    Key: TrenDAP.IChannelKey
}

export const XvsYWidget: WidgetTypes.IWidget<IProps, IChannelSettings> = {
    DefaultSettings: { XAxisLabel: "X Axis", YAxisLabel: 'Y Axis', Pairs: [] },
    DefaultChannelSettings: { Field: 'Average', Color: 'red', Axis: 'Y', RegressionLine: false, PairIndex: -1 },
    Name: "XvsY",
    WidgetUI: (props) => {
        const ref = React.useRef<HTMLDivElement>(null);

        React.useEffect(() => {
            Initialize()
        }, [props.Settings, props.Data])


        function Initialize() {
            if (props.Data == null || props?.Data.length == 0) return;
            let xMax = 100, xMin = 0, yMax = 100, yMin = 0;

            const xSeries = props.Data.filter(d => d.ChannelSettings.Axis === 'X').map(d => ({ Color: d.ChannelSettings.Color, Data: d.SeriesData[d.ChannelSettings.Field], Regression: d.ChannelSettings.RegressionLine, PairIndex: d.ChannelSettings.PairIndex }));
            const ySeries = props.Data.filter(d => d.ChannelSettings.Axis === 'Y').map(d => ({ Color: d.ChannelSettings.Color, Data: d.SeriesData[d.ChannelSettings.Field], Regression: d.ChannelSettings.RegressionLine, PairIndex: d.ChannelSettings.PairIndex }));

            const combinedData = matchDataByTime(xSeries, ySeries);

            if (xSeries?.length > 0) {
                xMax = Math.max(...xSeries.map(d => d.Data.map(d => d[1])).flat());
                xMin = Math.min(...xSeries.map(d => d.Data.map(d => d[1])).flat());
            }

            if (ySeries?.length > 0) {
                yMax = Math.max(...ySeries.map(d => d.Data.map(d => d[1])).flat());
                yMin = Math.min(...ySeries.map(d => d.Data.map(d => d[1])).flat());
            }

            const margin = { bottom: 50, left: 60, top: 40, right: 100 };
            const svgHeight = ref.current.offsetHeight;

            d3.select(ref.current).selectAll('svg').remove()

            const xScale = d3.scaleLinear()
                .domain([xMin, xMax])
                .range([0, ref.current.offsetWidth - margin.left - margin.right]);
            const yScale = d3.scaleLinear()
                .range([svgHeight - margin.top - margin.bottom, 0])
                .domain([yMin, yMax]);

            //Create svg
            const svg = d3.select(ref.current)
                .append('svg')
                .attr('width', ref.current.offsetWidth)
                .attr('height', svgHeight);

            //CREATE X AXIS AND LABEL
            svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + (svgHeight - margin.bottom) + ")")
                .call(d3.axisBottom(xScale))

            svg.append("text")
                .style("text-anchor", "middle")
                .attr("transform", "translate(" + (ref.current.offsetWidth / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
                .text(props.Settings.XAxisLabel)

            //CREATE YAXIS AND LABEL
            svg.append("g")
                .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")")
                .call(d3.axisLeft(yScale));

            svg.append("text")
                .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + (margin.left / 3) + ")")
                .style("text-anchor", "middle")
                .text(props.Settings.YAxisLabel);

            svg.selectAll("dot")
                .data(combinedData)
                .enter().append("circle")
                .attr("r", 3.5)
                .attr("cx", d => xScale(d.Values[0]))
                .attr("cy", d => yScale(d.Values[1]))
                .style("stroke", d => d.Color)
                .style("fill", d => d.Color)
                .attr("transform", `translate(${margin.left},${margin.top})`);

            // Group data by PairIndex
            let groupedData = Object.values(_.groupBy(combinedData.filter(d => d.Regression), 'PairIndex'));

            if (groupedData != null && groupedData.length !== 0) {
                let lines = svg.selectAll(".line")
                    .data(groupedData)
                    .enter()
                    .append("path")
                    .attr("class", "line")
                    .attr("fill", "none")
                    .attr("stroke-width", 1.5)
                    .attr("stroke", d => d[0].Color)
                    .attr("transform", `translate(${margin.left},${margin.top})`)
                    .attr("d", d => {
                        const linearRegModel = linearRegression(d.map(dd => dd.Values));
                        const linearRegline = linearRegressionLine(linearRegModel);
                        const lineFunc = d3.line<number[]>()
                            .x(dd => xScale(dd[0]))
                            .y(dd => yScale(linearRegline(dd[0])));
                        return lineFunc(d.map(dd => dd.Values));
                    });

                // Create text elements for each group of data
                let texts = svg.selectAll(".r2-text")
                    .data(groupedData)
                    .enter()
                    .append("text")
                    .attr("class", "r2-text")
                    .attr('stroke', d => d[0].Color)
                    .attr("transform", (d, i) => `translate(${ref.current.offsetWidth - margin.left - margin.right + 50},${margin.top + (i * 15)})`)
                    .text(d => {
                        const linearRegModel = linearRegression(d.map(dd => dd.Values));
                        const linearRegline = linearRegressionLine(linearRegModel);
                        const r2 = rSquared(d.map(dd => dd.Values), linearRegline);
                        return `R2 - ${r2.toFixed(3)}`;
                    });
            }
        }

        return (
            <div className="d-flex h-100 flex-column" ref={ref}></div>
        );
    },
    SettingsUI: (props) => {
        return <>
            <Input<IProps> Record={props.Settings} Field='XAxisLabel' Label="X Axis Label" Valid={() => true} Setter={item => props.SetSettings(item)} />
            <Input<IProps> Record={props.Settings} Field='YAxisLabel' Label="Y Axis Label" Valid={() => true} Setter={item => props.SetSettings(item)} />
        </>
    },
    ChannelSelectionUI: (props) => {
        const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>(props.AllChannels);
        const [ascending, setAscending] = React.useState<boolean>(false);
        const [sortField, setSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Phase');
        const [showPairSelection, setShowPairSelection] = React.useState<boolean>(false);

        const [selectedPair, setSelectedPair] = React.useState<DataSetTypes.IDataSetMetaData[]>([]); // this needs to be a tuple
        const [pairs, setPairs] = React.useState<[IPairChannel, IPairChannel][]>([]);

        const [edittedPair, setEdittedPair] = React.useState<[IPairChannel, IPairChannel]>(null);

        React.useEffect(() => {
            if (props.SelectedChannels == null || props.SelectedChannels?.length === 0) {
                setPairs([])
                return
            }
            let newPairs: [IPairChannel, IPairChannel][] = []

            props.Settings.Pairs.forEach(pair => {
                let chan1 = props.SelectedChannels.find(chan => _.isEqual(chan.Key, pair.Keys[0]))
                let chan2 = props.SelectedChannels.find(chan => _.isEqual(chan.Key, pair.Keys[1]))
                if (chan1 != null && chan2 != null) {
                    chan1.ChannelSettings = { ...chan1.ChannelSettings, LabelValue: { Field: chan1.ChannelSettings.Field, Axis: chan1.ChannelSettings.Axis, Key: chan1.Key } }
                    chan2.ChannelSettings = { ...chan2.ChannelSettings, LabelValue: { Field: chan2.ChannelSettings.Field, Axis: chan2.ChannelSettings.Axis, Key: chan2.Key } }
                    newPairs.push([{ ...chan1, PairIndex: pair.Index }, { ...chan2, PairIndex: pair.Index }])
                }
            })
            setPairs(newPairs)
        }, [props.SelectedChannels, props.Settings, showPairSelection])

        const sort = (field: keyof DataSetTypes.IDataSetMetaData, ascend: boolean) => {
            setSortField(field);
            setAscending(ascend);
            setAllChannels((c) => _.orderBy(c, field, [ascend ? "asc" : "desc"]))
        }

        const handleChannelPairSelection = (conf: boolean) => {
            if (conf) {
                let maxParent = props.SelectedChannels.reduce((max, current) => {
                    return current.Key.Parent > max ? current.Key.Parent : max;
                }, 0);
                maxParent = props.SelectedChannels.length === 0 ? 0 : maxParent + 1
                let maxPairID = props.Settings.Pairs.reduce((max, current) => {
                    return current.Index > max ? current.Index : max
                }, 0)
                maxPairID = props.Settings.Pairs.length === 0 ? 0 : maxPairID + 1
                let chanDefaultSettings: IChannelSettings = { ...XvsYWidget.DefaultChannelSettings, PairIndex: maxPairID }

                let chan1Key: TrenDAP.IChannelKey = { Type: selectedPair[0].Type, Phase: selectedPair[0].Phase, Harmonic: selectedPair[0].Harmonic, Parent: maxParent }
                let chan2Key: TrenDAP.IChannelKey = { Type: selectedPair[1].Type, Phase: selectedPair[1].Phase, Harmonic: selectedPair[1].Harmonic, Parent: maxParent + 1 }

                if (edittedPair != null) {
                    let sameChan1 = selectedPair.find(p => _.isEqual(p, edittedPair[0].MetaData))
                    let sameChan2 = selectedPair.find(p => _.isEqual(p, edittedPair[1].MetaData))
                    if (sameChan1 !== null && sameChan2 != null)
                        setEdittedPair(null)

                    else {
                        let pairs = [...props.Settings.Pairs]

                        //Remove editted pair
                        let pairIndex = pairs.findIndex(pair => _.isEqual(pair, [edittedPair[0].Key, edittedPair[1].Key]))
                        props.RemoveChannel(edittedPair[0].MetaData.ID)
                        props.RemoveChannel(edittedPair[1].MetaData.ID)
                        props.SetSettings({ ...props.Settings, Pairs: pairs.splice(pairIndex, 1) })

                        //Update replaced pair's settings
                        chanDefaultSettings = edittedPair[0].ChannelSettings
                        setEdittedPair(null)
                    }
                }

                props.AddChannel(selectedPair[0].ID, chanDefaultSettings, chan1Key)
                props.AddChannel(selectedPair[1].ID, chanDefaultSettings, chan2Key)
                props.SetSettings({ ...props.Settings, Pairs: [...props.Settings.Pairs, { Keys: [chan1Key, chan2Key], Index: maxPairID }] })

            }
            setSelectedPair([]);
            setShowPairSelection(false);
        };

        return <>
            <div className="container-fluid d-flex h-100 flex-column p-0">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={() => setShowPairSelection(true)}>Add New Pair</button>
                    </div>
                </div>

                <ReactTable.Table<[IPairChannel, IPairChannel]>
                    TableClass="table table-hover"
                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    SortKey={sortField}
                    OnClick={({ row }) => { }}
                    OnSort={() => { }}
                    Data={pairs}
                    Ascending={ascending}
                    KeySelector={(row, idx) => idx}
                >
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'PairNames'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) =>
                            <>
                                <span>{item[0]?.MetaData?.Name}</span>
                                <br />
                                <span>{item[1]?.MetaData?.Name}</span>
                            </>}
                    >
                        Names
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'PairPhases'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) =>
                            <>
                                <span>{item[0]?.MetaData?.Phase}</span>
                                <br />
                                <span>{item[1]?.MetaData?.Phase}</span>
                            </>}
                    >
                        Phases
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'PairTypes'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) =>
                            <>
                                <span>{item[0]?.MetaData?.Type}</span>
                                <br />
                                <span>{item[1]?.MetaData?.Type}</span>
                            </>}
                    >
                        Types
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'Color'}
                        AllowSort={true}
                        Field={'1'}
                        Content={({ item }) =>
                            <ColorPicker<IChannelSettings> Record={item[0]?.ChannelSettings} Label="Color" Field="Color" Style={{ backgroundColor: item[0]?.ChannelSettings?.Color, borderColor: item[0]?.ChannelSettings?.Color }}
                                Setter={(record) => {
                                    item.forEach(i => {
                                        props.SetChannelSettings(i.Key, {
                                            RegressionLine: i.ChannelSettings.RegressionLine,
                                            Field: i.ChannelSettings.Field,
                                            Axis: i.ChannelSettings.Axis,
                                            PairIndex: i.PairIndex,
                                            Color: record.Color,
                                        })
                                    })
                                }}
                            />
                        }
                    >
                        Color
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'XAxis'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item, style }) => {
                            let xChannel = item.find(item => item?.ChannelSettings?.Axis === 'X') ?? item[0]
                            return (
                                <StylableSelect<IAxisSelection> Record={xChannel?.ChannelSettings} Field="LabelValue" Options={getAxisOptions(item, 'X')} Label="" Setter={axis => {
                                    let record: SelectValue = axis.LabelValue
                                    const newXAxis = item.find(c => _.isEqual(record.Key, c.Key))
                                    if (newXAxis.ChannelSettings.Axis !== record.Axis || newXAxis.ChannelSettings.Field !== record.Field)
                                        props.SetChannelSettings(newXAxis.Key, {
                                            RegressionLine: newXAxis.ChannelSettings.RegressionLine,
                                            Color: newXAxis.ChannelSettings.Color,
                                            Axis: record.Axis,
                                            PairIndex: newXAxis.PairIndex,
                                            Field: record.Field
                                        })
                                }} />
                            )
                        }}
                    >
                        X Axis
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'YAxis'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) => {
                            let yChannel = item.find(item => item?.ChannelSettings?.Axis === 'Y') ?? item[1]
                            return (
                                <StylableSelect<IAxisSelection> Record={yChannel?.ChannelSettings} Field="LabelValue" Options={getAxisOptions(item, 'Y')} Label="" Setter={axis => {
                                    let record: SelectValue = axis.LabelValue
                                    const newYAxis = item.find(c => _.isEqual(record.Key, c.Key))
                                    if (newYAxis.ChannelSettings.Axis !== record.Axis || newYAxis.ChannelSettings.Field !== record.Field)
                                        props.SetChannelSettings(newYAxis.Key, {
                                            RegressionLine: newYAxis.ChannelSettings.RegressionLine,
                                            Color: newYAxis.ChannelSettings.Color,
                                            Axis: record.Axis,
                                            Field: record.Field,
                                            PairIndex: newYAxis.PairIndex
                                        })
                                }} />
                            )
                        }}
                    >
                        Y Axis
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'EditClone'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) => <>
                            <div className="btn-group">
                                <button className="btn" onClick={() => {
                                    setShowPairSelection(true);
                                    let chan1 = props.SelectedChannels.find(c => _.isEqual(c, item[0]))
                                    let chan2 = props.SelectedChannels.find(c => _.isEqual(c, item[1]))

                                    setEdittedPair([{ ...chan1, PairIndex: -1 }, { ...chan2, PairIndex: -1 }]);
                                    setSelectedPair([chan1.MetaData, chan2.MetaData])
                                }}><ReactIcons.Pencil Size={15} /></button>
                                <button className="btn" onClick={() => setShowPairSelection(true)}> <ReactIcons.Copy Size={15} /></button>
                                <button className="btn" onClick={() => {
                                    props.RemoveChannel(item[0].MetaData.ID);
                                    props.RemoveChannel(item[1].MetaData.ID);
                                    let updatedSettings = { ...props.Settings, Pairs: [...props.Settings.Pairs].filter(pair => pair.Index !== item[0].PairIndex) }
                                    props.SetSettings(updatedSettings)
                                }}>
                                    <ReactIcons.TrashCan Color="Red" Size={15} />
                                </button>
                            </div>
                        </>}
                    >
                        {'\u200B'}
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'EditClone'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) => <>
                            <CheckBox<IChannelSettings> Record={item[0]?.ChannelSettings} Field="RegressionLine" Label="" Setter={(record) => {
                                item.forEach(i => {
                                    props.SetChannelSettings(i.Key, {
                                        Color: i.ChannelSettings.Color,
                                        Axis: i.ChannelSettings.Axis,
                                        Field: i.ChannelSettings.Field,
                                        RegressionLine: record.RegressionLine,
                                        PairIndex: i.ChannelSettings.PairIndex
                                    })
                                })
                            }} />
                        </>}
                    >
                        Regression Line
                    </ReactTable.Column>
                </ReactTable.Table>
            </div>
            <Modal
                Show={showPairSelection}
                ConfirmBtnClass="btn btn-success mr-auto"
                ShowX={true}
                ConfirmText='Save'
                Title='Pair Selection'
                CallBack={(conf) => handleChannelPairSelection(conf)}
                Size="lg"
                DisableConfirm={showPairSelection && selectedPair.length !== 2}
                ConfirmShowToolTip={showPairSelection && selectedPair.length !== 2}
                ConfirmToolTipContent={<><p>Please select at least two channels</p></>}
                ShowCancel={false}
            >
                <ReactTable.Table<DataSetTypes.IDataSetMetaData>
                    TableClass="table table-hover"
                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    SortKey={sortField}
                    OnClick={({ row }) => {
                        const isChannelSelected = selectedPair?.find(chan => chan.ID === row.ID);
                        if (selectedPair.length < 2)
                            setSelectedPair(prev => [...prev, row]);
                        else if (isChannelSelected ?? false)
                            setSelectedPair(prev => prev.filter(pair => pair.ID !== row.ID))
                    }}
                    OnSort={data => sort(data.colField, data.ascending)}
                    Data={allChannels}
                    Ascending={ascending}
                    KeySelector={(row) => row.ID}
                    Selected={(row) => selectedPair.find(chan => chan.ID === row.ID) != null ? true : null}
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
            </Modal>
        </>
    }
}

interface ISeriesData {
    Color: string,
    Data: [...number[]][],
    Regression: boolean,
    PairIndex: number
}

function matchDataByTime(seriesData1: ISeriesData[], seriesData2: ISeriesData[]) {
    let returnArray: { Timestamp: number, Values: [number, number], Color: string, Regression: boolean, PairIndex: number }[] = [];

    seriesData1.forEach((series1, index) => {
        const series2 = seriesData2[index];
        if (series1.Data.length > series2.Data.length) {
            series1.Data.forEach(point1 => {
                const point2 = series2.Data.find(data2 => data2[0] === point1[0] && series1.PairIndex === series2.PairIndex);
                if (point2 === undefined) return;
                returnArray.push({ Timestamp: point1[0], Values: [point1[1], point2[1]], Color: series2.Color, Regression: series2.Regression, PairIndex: series1.PairIndex });
            });
        } else {
            series2.Data.forEach(point2 => {
                const point1 = series1.Data.find(data1 => data1[0] === point2[0] && series1.PairIndex === series2.PairIndex);
                if (point1 === undefined) return;
                returnArray.push({ Timestamp: point2[0], Values: [point1[1], point2[1]], Color: series2.Color, Regression: series2.Regression, PairIndex: series1.PairIndex });
            });
        }
    });

    return returnArray;
}



const getAxisOptions = (chans, axis) => {
    //not sure if using a 0.7 rem font size is the best approach here but more logic would be required to dynamically fit the text..
    return React.useMemo(() => {
        const axisOptions = (chans, axis) => {
            if (axis === 'X') {
                return [
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[0]?.MetaData?.Name + ` Average`}</span>, Value: { Field: 'Average', Axis: 'X', Key: chans[0]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[0]?.MetaData?.Name + ` Maximum`}</span>, Value: { Field: 'Maximum', Axis: 'X', Key: chans[0]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[0]?.MetaData?.Name + ` Minimum`}</span>, Value: { Field: 'Minimum', Axis: 'X', Key: chans[0]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[1]?.MetaData?.Name + ` Average`}</span>, Value: { Field: 'Average', Axis: 'X', Key: chans[1]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[1]?.MetaData?.Name + ` Maximum`}</span>, Value: { Field: 'Maximum', Axis: 'X', Key: chans[1]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[1]?.MetaData?.Name + ` Minimum`}</span>, Value: { Field: 'Minimum', Axis: 'X', Key: chans[1]?.Key } as SelectValue },
                ];
            } else {
                return [
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[0]?.MetaData?.Name + ` Average`}</span>, Value: { Field: 'Average', Axis: 'Y', Key: chans[0]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[0]?.MetaData?.Name + ` Maximum`}</span>, Value: { Field: 'Maximum', Axis: 'Y', Key: chans[0]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[0]?.MetaData?.Name + ` Minimum`}</span>, Value: { Field: 'Minimum', Axis: 'Y', Key: chans[0]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[1]?.MetaData?.Name + ` Average`}</span>, Value: { Field: 'Average', Axis: 'Y', Key: chans[1]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[1]?.MetaData?.Name + ` Maximum`}</span>, Value: { Field: 'Maximum', Axis: 'Y', Key: chans[1]?.Key } as SelectValue },
                    { Element: <span style={{ fontSize: '0.7rem' }}>{chans[1]?.MetaData?.Name + ` Minimum`}</span>, Value: { Field: 'Minimum', Axis: 'Y', Key: chans[1]?.Key } as SelectValue },
                ];
            }
        };
        return axisOptions(chans, axis);
    }, [chans, axis]);
};
