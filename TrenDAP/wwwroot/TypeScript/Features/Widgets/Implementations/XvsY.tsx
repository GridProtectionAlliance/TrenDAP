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
import { ISelectedChannels } from '../WidgetWrapper';

import { WidgetTypes } from '../Interfaces';
import { linearRegression, linearRegressionLine, rSquared } from 'simple-statistics';
import moment from 'moment';
import _ from 'lodash'

import { DataSetTypes } from '../../../global';


interface IProps {
    XAxisLabel: string,
    YAxisLabel: string,
}

interface IChannelSettings {
    TargetKey: TrenDAP.IChannelKey,
    TargetParentID: string //Used to correctly generate targetkey
    Color: string,
    RegressionLine: boolean,
    Field: TrenDAP.SeriesField,
    Axis: ('X' | 'Y'),
}

interface IAxisSelection extends IChannelSettings {
    LabelValue: SelectValue,
    Key: TrenDAP.IChannelKey
}

interface SelectValue {
    Field: TrenDAP.SeriesField,
    Axis: ('X' | 'Y'),
    Key: TrenDAP.IChannelKey
}


export const XvsYWidget: WidgetTypes.IWidget<IProps, IChannelSettings> = {
    DefaultSettings: { XAxisLabel: "X Axis", YAxisLabel: 'Y Axis' },
    DefaultChannelSettings: { Field: 'Average', Color: 'red', TargetKey: null, TargetParentID: null, Axis: 'Y', RegressionLine: false, },
    Name: "XvsY",
    WidgetUI: (props) => {
        const ref = React.useRef<HTMLDivElement>(null);

        React.useEffect(() => {
            Initialize()
        }, [props.Settings, props.Data])


        function Initialize() {
            if (props.Data == null || props?.Data.length == 0) return;
            let xMax = 100, xMin = 0, yMax = 100, yMin = 0;

            const xSeries = props.Data.filter(d => d.ChannelSettings.Axis === 'X').map(d => ({ Color: d.ChannelSettings.Color, Data: d.SeriesData[d.ChannelSettings.Field], SourceKey: d.ChannelKey, TargetKey: d.ChannelSettings.TargetKey, Regression: d.ChannelSettings.RegressionLine }));
            const ySeries = props.Data.filter(d => d.ChannelSettings.Axis === 'Y').map(d => ({ Color: d.ChannelSettings.Color, Data: d.SeriesData[d.ChannelSettings.Field], SourceKey: d.ChannelKey, TargetKey: d.ChannelSettings.TargetKey, Regression: d.ChannelSettings.RegressionLine }));

            const combinedData = matchDataByTime(xSeries, ySeries);

            if (xSeries?.length > 0) {
                xMax = Math.max(...xSeries.map(d => d.Data.map(d => d[1])).flat());
                xMin = Math.min(...xSeries.map(d => d.Data.map(d => d[1])).flat());
            }

            if (ySeries?.length > 0) {
                yMax = Math.max(...ySeries.map(d => d.Data.map(d => d[1])).flat());
                yMin = Math.min(...ySeries.map(d => d.Data.map(d => d[1])).flat());
            }

            const margin = { bottom: 50, left: 50, top: 40, right: 50 };
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

            let groupedData = _.groupBy(combinedData.filter(d => d.Regression), 'UniqKey');

            // Theres got to be a better way to do do this than iterating over groupedData..
            if (groupedData)
                Object.keys(groupedData).forEach((key, index) => {
                    let group = groupedData[key];
                    const linearRegModel = linearRegression(group.map(d => d.Values));
                    const linearRegline = linearRegressionLine(linearRegModel);
                    const r2 = rSquared(group.map(d => d.Values), linearRegline);
                    const lineFunc = d3.line<number[]>().x(d => xScale(d[0])).y(d => yScale(linearRegline(d[0])));

                    // Create regression line
                    svg.append("path")
                        .datum(group)
                        .attr("class", "line")
                        .attr("fill", "none")
                        .attr("stroke-width", 1.5)
                        .attr("stroke", d => d[0].Color)
                        .attr("transform", `translate(${margin.left},${margin.top})`)
                        .attr("d", lineFunc(group.map(g => g.Values)));

                    svg.append('text')
                        .datum(group)
                        .attr('stroke', d => d[0].Color)
                        .attr("transform", `translate(${ref.current.offsetWidth - margin.left - margin.right},${margin.top + (index * 15)})`)
                        .text(`R2 - ${r2.toFixed(3)}`);
                });

        }

        return (
            <div className="d-flex h-100 flex-column" ref={ref}></div>
        );
    },
    SettingsUI: (props) => {
        return <>

            <div className="row">
                <div className="col-12">
                    <Input<IProps> Record={props.Settings} Field='XAxisLabel' Label="X Axis Label" Valid={() => true} Setter={item => props.SetSettings(item)} />
                    <Input<IProps> Record={props.Settings} Field='YAxisLabel' Label="Y Axis Label" Valid={() => true} Setter={item => props.SetSettings(item)} />
                </div>
            </div>
        </>
    },
    ChannelSelectionUI: (props) => {
        const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>(props.AllChannels);
        const [ascending, setAscending] = React.useState<boolean>(false);
        const [sortField, setSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Phase');
        const [showPairSelection, setShowPairSelection] = React.useState<boolean>(false);
        //change name of thsi to just selectedPair
        const [localSelectedPair, setLocalSelectedPair] = React.useState<DataSetTypes.IDataSetMetaData[]>([]); // this needs to be a tuple
        const [pairs, setPairs] = React.useState<[ISelectedChannels, ISelectedChannels][]>([]);

        const [editedPair, setEdittedPair] = React.useState<[ISelectedChannels, ISelectedChannels]>(null);

        React.useEffect(() => {
            if (props.SelectedChannels == null || props.SelectedChannels?.length === 0) {
                setPairs([])
                return
            }

            let targetIndex = -1;
            let channelPairs: [ISelectedChannels, ISelectedChannels][] = []
            props.SelectedChannels.forEach((chan, index) => {
                if (index === targetIndex) return;
                let sourceChan = { ...chan }
                let targetChan = props.SelectedChannels.find(target => _.isEqual(chan.ChannelSettings?.TargetKey, target.Key))
                targetIndex = props.SelectedChannels.findIndex(target => _.isEqual(chan.ChannelSettings?.TargetKey, target.Key))
                if (targetChan != null) {
                    //confirm this making it in db aren't making its way into the db..
                    sourceChan.ChannelSettings = { ...sourceChan.ChannelSettings, LabelValue: { Field: sourceChan.ChannelSettings.Field, Axis: sourceChan.ChannelSettings.Axis, Key: sourceChan.Key } }
                    targetChan.ChannelSettings = { ...targetChan.ChannelSettings, LabelValue: { Field: targetChan.ChannelSettings.Field, Axis: targetChan.ChannelSettings.Axis, Key: targetChan.Key } }
                }
                channelPairs.push([sourceChan, targetChan])
            })
            setPairs(channelPairs)

        }, [props.SelectedChannels, props.Settings])

        const sort = (field: keyof DataSetTypes.IDataSetMetaData, ascend: boolean) => {
            setSortField(field);
            setAscending(ascend);
            setAllChannels((c) => _.orderBy(c, field, [ascend ? "asc" : "desc"]))
        }

        const handleChannelPairSelection = (conf: boolean) => {
            if (conf) {
                let selectedChannels = [...props.SelectedChannels]
                let chanDefaultSettings = { ...XvsYWidget.DefaultChannelSettings }

                let maxParentValue = 0
                if (props.SelectedChannels.length !== 0) {
                    maxParentValue = props.SelectedChannels.reduce((max, channel) => {
                        return channel.Key.Parent > max ? channel.Key.Parent : max;
                    }, props.SelectedChannels[0].Key.Parent);
                }

                if (editedPair != null) {
                    let sameChan1 = localSelectedPair.find(p => _.isEqual(p, editedPair[0].MetaData))
                    let sameChan2 = localSelectedPair.find(p => _.isEqual(p, editedPair[1].MetaData))
                    if (sameChan1 !== null && sameChan2 != null) {
                        setEdittedPair(null)
                        setShowPairSelection(false);
                        return;
                    }

                    //Since we do a deep equality check of whole object this should cover the case of
                    //the same channel with a different targets..
                    let chan1Index = selectedChannels.findIndex(c => _.isEqual(c, editedPair[0]))
                    props.SetSelectedChannels(selectedChannels.splice(chan1Index, 1))

                    let chan2Index = selectedChannels.findIndex(c => _.isEqual(c, editedPair[1]))
                    props.SetSelectedChannels(selectedChannels.splice(chan2Index, 1))
                    //we can use the same settings here as we override the non shared ones below
                    chanDefaultSettings = { ...editedPair[0].ChannelSettings }
                    setEdittedPair(null)
                }

                let chan1TargetKey = { Phase: localSelectedPair[1].Phase, Type: localSelectedPair[1].Type, Harmonic: localSelectedPair[1].Harmonic, Parent: maxParentValue + 2 }
                let chan2TargetKey = { Phase: localSelectedPair[0].Phase, Type: localSelectedPair[0].Type, Harmonic: localSelectedPair[0].Harmonic, Parent: maxParentValue + 1 }
                let chan1Settings = { ...chanDefaultSettings, TargetKey: chan1TargetKey, TargetParentID: localSelectedPair[1].ParentID }
                let chan2Settings = { ...chanDefaultSettings, TargetKey: chan2TargetKey, TargetParentID: localSelectedPair[0].ParentID }
                let chan1MetaData = { ...localSelectedPair[0] }
                let chan2MetaData = { ...localSelectedPair[1] }

                let chan1 = {
                    MetaData: chan1MetaData,
                    ChannelSettings: chan1Settings,
                    Key: chan2TargetKey,
                    IsNew: true
                }

                let chan2 = {
                    MetaData: chan2MetaData,
                    ChannelSettings: chan2Settings,
                    Key: chan1TargetKey,
                    IsNew: true
                }

                if (selectedChannels.length === 0)
                    props.SetSelectedChannels([chan1, chan2])
                else
                    props.SetSelectedChannels([...selectedChannels, chan1, chan2])

            }
            setLocalSelectedPair([]);
            setShowPairSelection(false)
        }

        { /*In pairs table we dont need to be sending of the LabelValue and Key to be saved to database */ }

        return <>
            <div className="row">
                <div className="col-6 d-flex justify-content-start">
                    <button className="btn btn-primary" onClick={() => setShowPairSelection(true)}>Add New Pair</button>
                </div>
            </div>
            <div className="col-12 d-flex h-100 d-flex-column">
                <ReactTable.Table<[ISelectedChannels, ISelectedChannels]>
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
                    <ReactTable.Column<[ISelectedChannels, ISelectedChannels]>
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
                    <ReactTable.Column<[ISelectedChannels, ISelectedChannels]>
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
                    <ReactTable.Column<[ISelectedChannels, ISelectedChannels]>
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
                    <ReactTable.Column<[ISelectedChannels, ISelectedChannels]>
                        Key={'Color'}
                        AllowSort={true}
                        Field={'1'}
                        Content={({ item }) =>
                            <ColorPicker<IChannelSettings> Record={item[0]?.ChannelSettings} Label="Color" Field="Color" Style={{ backgroundColor: item[0]?.ChannelSettings?.Color, borderColor: item[0]?.ChannelSettings?.Color }}
                                Setter={(record) => {
                                    item.forEach(i => {
                                        props.SetChannelSettings(i.Key, {
                                            TargetKey: i.ChannelSettings.TargetKey,
                                            TargetParentID: i.ChannelSettings.TargetParentID,
                                            RegressionLine: i.ChannelSettings.RegressionLine,
                                            Field: i.ChannelSettings.Field,
                                            Axis: i.ChannelSettings.Axis,
                                            Color: record.Color,
                                        })
                                    })
                                }}
                            />
                        }
                    >
                        Color
                    </ReactTable.Column>
                    <ReactTable.Column<[ISelectedChannels, ISelectedChannels]>
                        Key={'XAxis'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item, style }) => {
                            console.log('style from x axis', style)
                            let xChannel = item.find(item => item?.ChannelSettings?.Axis === 'X') ?? item[0]
                            return (
                                <StylableSelect<IAxisSelection> Style={{ position: undefined }} Record={xChannel?.ChannelSettings} Field="LabelValue" Options={getAxisOptions(item, 'X')} Label="" Setter={axis => {
                                    let record: SelectValue = axis.LabelValue
                                    const newXAxis = item.find(c => _.isEqual(record.Key, c.Key))
                                    //rewrite settings

                                    if (newXAxis.ChannelSettings.Axis !== record.Axis || newXAxis.ChannelSettings.Field !== record.Field)
                                        props.SetChannelSettings(newXAxis.Key, {
                                            TargetKey: newXAxis.ChannelSettings.TargetKey,
                                            TargetParentID: newXAxis.ChannelSettings.TargetParentID,
                                            RegressionLine: newXAxis.ChannelSettings.RegressionLine,
                                            Color: newXAxis.ChannelSettings.Color,
                                            Axis: record.Axis,
                                            Field: record.Field
                                        })
                                }} />
                            )
                        }}
                    >
                        X Axis
                    </ReactTable.Column>
                    <ReactTable.Column<[ISelectedChannels, ISelectedChannels]>
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
                                            TargetParentID: newYAxis.ChannelSettings.TargetParentID,
                                            TargetKey: newYAxis.ChannelSettings.TargetKey,
                                            Axis: record.Axis,
                                            Field: record.Field
                                        })
                                }} />
                            )
                        }}
                    >
                        Y Axis
                    </ReactTable.Column>
                    <ReactTable.Column<[ISelectedChannels, ISelectedChannels]>
                        Key={'EditClone'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) => <>
                            <div className="btn-group">
                                <button className="btn" onClick={() => {
                                    setShowPairSelection(true);
                                    let chan1 = props.SelectedChannels.find(c => _.isEqual(c, item[0]))
                                    let chan2 = props.SelectedChannels.find(c => _.isEqual(c, item[1]))

                                    setEdittedPair([chan1, chan2]);
                                    setLocalSelectedPair([chan1.MetaData, chan2.MetaData])
                                }}><ReactIcons.Pencil Size={15} /></button>
                                <button className="btn" onClick={() => setShowPairSelection(true)}> <ReactIcons.Copy Size={15} /></button>
                                <button className="btn" onClick={() => { props.SetSelectedChannels(props.SelectedChannels.filter(chan => !item.map(i => i.Key).includes(chan.Key))) }}>
                                    <ReactIcons.TrashCan Color="Red" Size={15} />
                                </button>
                            </div>
                        </>}
                    >
                        {'\u200B'}
                    </ReactTable.Column>
                    <ReactTable.Column<[ISelectedChannels, ISelectedChannels]>
                        Key={'EditClone'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) => <>
                            <CheckBox<IChannelSettings> Record={item[0]?.ChannelSettings} Field="RegressionLine" Label="" Setter={(record) => {
                                item.forEach(i => {
                                    //rewrite settings

                                    props.SetChannelSettings(i.Key,
                                        { ...i.ChannelSettings, RegressionLine: record.RegressionLine })
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
                DisableConfirm={showPairSelection && localSelectedPair.length !== 2}
                ConfirmShowToolTip={showPairSelection && localSelectedPair.length !== 2}
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
                        const isChannelSelected = localSelectedPair?.find(chan => chan.ID === row.ID);
                        if (localSelectedPair.length < 2)
                            setLocalSelectedPair(prev => [...prev, row]);
                        else if (isChannelSelected ?? false)
                            setLocalSelectedPair(prev => prev.filter(pair => pair.ID !== row.ID))
                    }}
                    OnSort={data => sort(data.colField, data.ascending)}
                    Data={allChannels}
                    Ascending={ascending}
                    KeySelector={(row) => row.ID}
                    Selected={(row) => localSelectedPair.find(chan => chan.ID === row.ID) != null ? true : null}
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
    TargetKey: TrenDAP.IChannelKey,
    SourceKey: TrenDAP.IChannelKey,
    Regression: boolean
}

function matchDataByTime(seriesData1: ISeriesData[], seriesData2: ISeriesData[]) {
    let returnArray: { Timestamp: number, Values: [number, number], Color: string, UniqKey: string, Regression: boolean }[] = [];

    seriesData1.forEach((series1, index) => {
        const series2 = seriesData2[index];
        if (series1.Data.length > series2.Data.length) {
            series1.Data.forEach(point1 => {
                const point2 = series2.Data.find(data2 => data2[0] === point1[0] && _.isEqual(series1.SourceKey, series2.TargetKey));
                if (point2 === undefined) return;
                returnArray.push({ Timestamp: point1[0], Values: [point1[1], point2[1]], Color: series2.Color, UniqKey: JSON.stringify({ ...series1.SourceKey, ...series2.TargetKey }), Regression: series2.Regression });
            });
        } else {
            series2.Data.forEach(point2 => {
                const point1 = series1.Data.find(data1 => data1[0] === point2[0] && _.isEqual(series1.SourceKey, series2.TargetKey));
                if (point1 === undefined) return;
                returnArray.push({ Timestamp: point2[0], Values: [point1[1], point2[1]], Color: series2.Color, UniqKey: JSON.stringify({ ...series1.SourceKey, ...series2.TargetKey }), Regression: series2.Regression });
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
