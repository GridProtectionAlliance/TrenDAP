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
import _ from 'lodash'

import { DataSetTypes } from '../../../global';


interface IProps {
    XAxisLabel: string,
    YAxisLabel: string,
    Pairs: IPairSettings[]
}

interface IChannelSettings {
    Field: TrenDAP.SeriesField,
    Axis: ('X' | 'Y'),
    PairId: number
}

interface IPairSettings {
    Color: string,
    RegressionLine: boolean,
    Id: number
}

interface IPairChannel extends WidgetTypes.ISelectedChannels<IChannelSettings> {
    LabelValue: SelectValue
}

interface SelectValue {
    Field: TrenDAP.SeriesField,
    Axis: ('X' | 'Y'),
    Key: TrenDAP.IChannelKey
}

interface IPairData {
    Color: string,
    Data: [...number[]][],
    RegressionLine: boolean,
    PairId: number,
    Axis: ('X' | 'Y')
}

export const XvsYWidget: WidgetTypes.IWidget<IProps, IChannelSettings> = {
    DefaultSettings: { XAxisLabel: "X Axis", YAxisLabel: 'Y Axis', Pairs: [] },
    DefaultChannelSettings: { Field: 'Average', Axis: 'Y', PairId: -1 },
    Name: "XvsY",
    WidgetUI: (props) => {
        const plotRef = React.useRef<HTMLDivElement>(null);
        const [plotSize, setPlotSize] = React.useState<{ Height: number, Width: number }>()

        React.useLayoutEffect(() => {
            if (plotRef.current != null) {
                let newSize = { Height: plotRef.current.offsetHeight, Width: plotRef.current.offsetWidth }
                if (!_.isEqual(newSize, plotSize))
                    setPlotSize(newSize)
            }
        })

        React.useEffect(() => {
            Initialize()
        }, [props.Settings, props.Data, plotSize])

        function Initialize() {
            if (props.Data == null || props?.Data.length == 0) return;
            let xMax = 100, xMin = 0, yMax = 100, yMin = 0;

            let combinedData: ICombinedData[] = []

            props.Settings.Pairs.forEach(pair => {
                let chans: IPairData[] = props.Data.filter(d => d.ChannelSettings.PairId === pair.Id)
                    .map(chan => ({ Color: pair.Color, PairId: pair.Id, Data: chan.SeriesData[chan.ChannelSettings.Field], RegressionLine: pair.RegressionLine, Axis: chan.ChannelSettings.Axis }))

                let x = chans.find(chan => chan.Axis === 'X')
                let y = chans.find(chan => chan.Axis === 'Y')
                
                if (x != null && y !== null) 
                    combinedData.push(matchDataByTime(x.Data, y.Data, pair.Color, pair.RegressionLine, pair.Id))
            })

            if (combinedData.length > 0) {
                xMax = Math.max(...combinedData.map(d => d.XMax));
                yMax = Math.max(...combinedData.map(d => d.YMax));

                xMin = Math.min(...combinedData.map(d => d.XMin));
                yMin = Math.min(...combinedData.map(d => d.YMin));
            }

            const margin = { bottom: 50, left: 70, top: 40, right: 100 };
            const svgHeight = plotRef.current.offsetHeight;

            d3.select(plotRef.current).selectAll('svg').remove()

            const xScale = d3.scaleLinear()
                .domain([xMin, xMax])
                .range([0, plotRef.current.offsetWidth - margin.left - margin.right]);
            const yScale = d3.scaleLinear()
                .domain([yMin, yMax])
                .range([svgHeight - margin.top - margin.bottom, 0]);

            //Create svg
            const svg = d3.select(plotRef.current)
                .append('svg')
                .attr('width', plotRef.current.offsetWidth)
                .attr('height', svgHeight);

            //CREATE X AXIS AND LABEL
            svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + (svgHeight - margin.bottom) + ")")
                .call(d3.axisBottom(xScale))

            svg.append("text")
                .style("text-anchor", "middle")
                .attr("transform", "translate(" + (plotRef.current.offsetWidth / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
                .text(props.Settings.XAxisLabel)

            //CREATE YAXIS AND LABEL
            svg.append("g")
                .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")")
                .call(d3.axisLeft(yScale));

            svg.append("text")
                .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + (margin.left / 3) + ")")
                .style("text-anchor", "middle")
                .text(props.Settings.YAxisLabel);


            // Create pair groups for circles and lines
            svg.selectAll("g.pair-group")
                .data(combinedData)
                .enter()
                .append("g")
                .attr("class", d => `pair-${d.PairId}`)
                .attr("transform", `translate(${margin.left},${margin.top})`)
                .each(function (data, i) {
                    // Create circles
                    d3.select(this)
                        .selectAll("circle")
                        .data(data.Values)
                        .enter()
                        .append("circle")
                        .attr("r", 3.5)
                        .attr("cx", d => xScale(d[0]))
                        .attr("cy", d => yScale(d[1]))
                        .style("stroke", data.Color)
                        .style("fill", data.Color);

                    // Create Regression Line if needed
                    if (data.Regression) {
                        const linearRegModel = linearRegression(data.Values);
                        const linearRegline = linearRegressionLine(linearRegModel);
                        const lineFunc = d3.line<[number, number]>()
                            .x(dd => xScale(dd[0]))
                            .y(dd => yScale(linearRegline(dd[0])));

                        d3.select(this)
                            .append("path")
                            .attr("class", "line")
                            .attr("fill", "none")
                            .attr("stroke-width", 1.5)
                            .attr("stroke", data.Color)
                            .attr("d", lineFunc(data.Values));

                        const r2 = rSquared(data.Values, linearRegline);

                        // Add text element for the R-squared value
                        d3.select(this)
                            .append("text")
                            .attr("class", "r2-text")
                            .attr("stroke", data.Color)
                            .attr("transform", `translate(${plotRef.current.offsetWidth - margin.left - margin.right + 25},${margin.top + (i * 15)})`)
                            .text(`R2 - ${r2.toFixed(3)}`);
                    }
                });

        }

        return (
            <div className="d-flex h-100 flex-column" ref={plotRef}></div>
        );
    },
    SettingsUI: (props) => {
        return <>
            <div className="row">
                <div className="col-12">
                    <Input<IProps> Record={props.Settings} Field='XAxisLabel' Label="X Axis Label" Valid={() => true} Setter={item => props.SetSettings(item)} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
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

        const [selectedPair, setSelectedPair] = React.useState<{ MetaData: DataSetTypes.IDataSetMetaData, Axis: ('X' | 'Y') }[]>([]);
        const [pairs, setPairs] = React.useState<[IPairChannel, IPairChannel][]>([]);

        const [edittedPair, setEdittedPair] = React.useState<[IPairChannel, IPairChannel]>(null);

        React.useEffect(() => {
            if (props.SelectedChannels == null || props.SelectedChannels?.length === 0) {
                setPairs([])
                return
            }
            let newPairs: [IPairChannel, IPairChannel][] = []

            props.Settings.Pairs.forEach(pair => {
                let chans = props.SelectedChannels.filter(chan => chan.ChannelSettings.PairId === pair.Id)
                if (chans != null && chans.length === 2) {
                    newPairs.push([
                        { ...chans[0], LabelValue: { Field: chans[0].ChannelSettings.Field, Axis: chans[0].ChannelSettings.Axis, Key: chans[0].Key } },
                        { ...chans[1], LabelValue: { Field: chans[1].ChannelSettings.Field, Axis: chans[1].ChannelSettings.Axis, Key: chans[1].Key } }
                    ])
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
                let maxPairID = props.Settings.Pairs.reduce((max, current) => {
                    return current.Id > max ? current.Id : max
                }, 0)
                maxPairID = props.Settings.Pairs.length === 0 ? 0 : maxPairID + 1
                let defaultChanSetting: IChannelSettings = { ...XvsYWidget.DefaultChannelSettings, PairId: maxPairID }
                let pairSettings: IPairSettings = { Color: 'Red', RegressionLine: false, Id: maxPairID }

                let chan1Settings: IChannelSettings = null
                let chan2Settings: IChannelSettings = null

                let pairs = [...props.Settings.Pairs]

                if (edittedPair != null) {
                    let sameChan1 = selectedPair.find(p => _.isEqual(p, edittedPair[0].MetaData))
                    let sameChan2 = selectedPair.find(p => _.isEqual(p, edittedPair[1].MetaData))
                    if (sameChan1 == null && sameChan2 == null) {
                        const oldPairSettings = pairs.find(pair => pair.Id === edittedPair[0].ChannelSettings.PairId)
                        pairs = pairs.filter(pair => pair.Id !== edittedPair[0].ChannelSettings.PairId)

                        //Remove editted channels..
                        props.RemoveChannel(edittedPair[0].MetaData.ID)
                        props.RemoveChannel(edittedPair[1].MetaData.ID)

                        //Remove pair from settings
                        props.SetSettings({ ...props.Settings, Pairs: pairs })

                        //Update chan1 and chan2 settings
                        chan1Settings = { ...edittedPair[0].ChannelSettings, PairId: maxPairID }
                        chan2Settings = { ...edittedPair[1].ChannelSettings, PairId: maxPairID }

                        pairSettings = { ...oldPairSettings, Id: maxPairID }
                    }
                    setEdittedPair(null)
                }

                props.AddChannel(selectedPair[0].MetaData.ID, { ...chan1Settings ?? defaultChanSetting, Axis: selectedPair[0].Axis })
                props.AddChannel(selectedPair[1].MetaData.ID, { ...chan2Settings ?? defaultChanSetting, Axis: selectedPair[1].Axis })
                props.SetSettings({ ...props.Settings, Pairs: [...pairs, pairSettings] })

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
                        Content={({ item }) => {
                            const pair = props.Settings.Pairs.find(pair => pair.Id === item[0].ChannelSettings.PairId)
                            if (pair != null)

                                return (
                                    <ColorPicker<IPairSettings> Record={pair} Label="Color" Field="Color" Style={{ backgroundColor: pair?.Color, borderColor: pair?.Color }}
                                        Setter={(record) => {
                                            props.SetSettings({ ...props.Settings, Pairs: [...props.Settings.Pairs.map(p => p.Id === pair.Id ? record : p)] })
                                        }}
                                    />
                                )

                        }}
                    >
                        Color
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'XAxis'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) => {
                            let xChannel = item.find(item => item.ChannelSettings.Axis === 'X')
                            return (
                                <StylableSelect<IPairChannel> Record={xChannel} Field="LabelValue" Options={getAxisOptions(item, 'X')} Label="" Setter={axis => {
                                    let record: SelectValue = axis.LabelValue
                                    const newXAxis = item.find(c => _.isEqual(record.Key, c.Key))
                                    if (newXAxis.ChannelSettings.Axis !== record.Axis || newXAxis.ChannelSettings.Field !== record.Field)
                                        props.SetChannelSettings(newXAxis.Key, {
                                            Axis: record.Axis,
                                            PairId: newXAxis.ChannelSettings.PairId,
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
                                <StylableSelect<IPairChannel> Record={yChannel} Field="LabelValue" Options={getAxisOptions(item, 'Y')} Label="" Setter={axis => {
                                    let record: SelectValue = axis.LabelValue
                                    const newYAxis = item.find(c => _.isEqual(record.Key, c.Key))
                                    if (newYAxis.ChannelSettings.Axis !== record.Axis || newYAxis.ChannelSettings.Field !== record.Field)
                                        props.SetChannelSettings(newYAxis.Key, {
                                            Axis: record.Axis,
                                            Field: record.Field,
                                            PairId: newYAxis.ChannelSettings.PairId
                                        })
                                }} />
                            )
                        }}
                    >
                        Y Axis
                    </ReactTable.Column>
                    <ReactTable.Column<[IPairChannel, IPairChannel]>
                        Key={'Edit'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) => <>
                            <div className="btn-group">
                                <button className="btn" onClick={() => {
                                    setShowPairSelection(true);
                                    let chans = props.SelectedChannels.filter(c => _.isEqual(c.ChannelSettings.PairId, item[0].ChannelSettings.PairId))

                                    setEdittedPair([{ ...chans[0], LabelValue: item[0].LabelValue }, { ...chans[1], LabelValue: item[1].LabelValue }]);
                                    setSelectedPair([{ MetaData: chans[0].MetaData, Axis: item[0].ChannelSettings.Axis }, { MetaData: chans[1].MetaData, Axis: item[1].ChannelSettings.Axis }])
                                }}><ReactIcons.Pencil Size={15} /></button>
                                <button className="btn" onClick={() => setShowPairSelection(true)}> <ReactIcons.Copy Size={15} /></button>
                                <button className="btn" onClick={() => {
                                    props.RemoveChannel(item[0].MetaData.ID);
                                    props.RemoveChannel(item[1].MetaData.ID);
                                    let updatedSettings = { ...props.Settings, Pairs: [...props.Settings.Pairs].filter(pair => pair.Id !== item[0].ChannelSettings.PairId) }
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
                        Key={'Regress'}
                        AllowSort={true}
                        Field={'0'}
                        Content={({ item }) => {
                            const pair = props.Settings.Pairs.find(pair => pair.Id === item[0].ChannelSettings.PairId)
                            if (pair != null)
                                return (
                                    <CheckBox<IPairSettings> Record={pair} Field="RegressionLine" Label="" Setter={(record) => {
                                        props.SetSettings({ ...props.Settings, Pairs: [...props.Settings.Pairs.map(p => p.Id === pair.Id ? record : p)] })
                                    }}
                                    />
                                )
                        }}
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
                        const isChannelSelected = selectedPair?.find(chan => chan.MetaData.ID === row.ID);
                        if (selectedPair.length == 0)
                            setSelectedPair([{ MetaData: row, Axis: 'X' }])
                        else if (selectedPair.length === 1) {
                            let hasYAxis = selectedPair.find(p => p.Axis === 'Y')
                            let axis: ('X' | 'Y') = 'Y'
                            if (hasYAxis != null)
                                axis = 'X'
                            setSelectedPair(prev => [...prev, { MetaData: row, Axis: axis }]);
                        }
                        else if (isChannelSelected ?? false)
                            setSelectedPair(prev => prev.filter(pair => pair.MetaData.ID !== row.ID))
                    }}
                    OnSort={data => sort(data.colField, data.ascending)}
                    Data={allChannels}
                    Ascending={ascending}
                    KeySelector={(row) => row.ID}
                    Selected={(row) => selectedPair.find(chan => chan.MetaData.ID === row.ID) != null ? true : null}
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
                    <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                        Key={'xaxis'}
                        AllowSort={true}
                        Field={'ID'}
                        Content={({ item }) => {
                            let xAxis = selectedPair.find(p => p.MetaData.ID === item.ID && p.Axis === 'X')
                            return xAxis == null ? null : <ReactIcons.CheckMark Color="Green" />
                        }}
                    >
                        X Axis
                    </ReactTable.Column>
                    <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                        Key={'yaxis'}
                        AllowSort={true}
                        Field={'ID'}
                        Content={({ item }) => {
                            let yAxis = selectedPair.find(p => p.MetaData.ID === item.ID && p.Axis === 'Y')
                            return yAxis == null ? null : <ReactIcons.CheckMark Color="Green" />
                        }}
                    >
                        Y Axis
                    </ReactTable.Column>
                </ReactTable.Table>
            </Modal>
        </>
    }
}

interface ICombinedData {
    Values: [number, number][],
    Color: string,
    Regression: boolean,
    PairId: number,
    XMin: number,
    XMax: number,
    YMin: number,
    YMax: number
}

function matchDataByTime(xData: [...number[]][], yData: [...number[]][], Color: string, RegressionLine: boolean, PairId: number): ICombinedData {
    let returnValues: [number, number][] = [];

    if (xData.length > yData.length) {
        yData.forEach(y => {
            const x = xData.find(xData => y[0] === xData[0])
            if (x == null) return
            returnValues.push([x[1], y[1]])
        })
    } else {
        xData.forEach(x => {
            const y = yData.find(yData => x[0] === yData[0])
            if (y == null) return
            returnValues.push([x[1], y[1]])
        })
    }


    return {
        Color: Color,
        Regression: RegressionLine,
        PairId: PairId,
        Values: returnValues,
        XMin: Math.min(...xData.map(val => val[1])),
        XMax: Math.max(...xData.map(val => val[1])),
        YMin: Math.min(...yData.map(val => val[1])),
        YMax: Math.max(...yData.map(val => val[1])),
    }
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
