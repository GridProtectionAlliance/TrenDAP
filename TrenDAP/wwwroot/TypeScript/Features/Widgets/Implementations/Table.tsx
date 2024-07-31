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

import * as React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Input } from '@gpa-gemstone/react-forms';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ReactTable } from '@gpa-gemstone/react-table';
import { WidgetTypes } from '../Interfaces';
import { DataSetTypes, TrenDAP } from '../../../global';
import { sort } from '../HelperFunctions';

interface IProps { Precision: number }

interface ITableData {
    ID: number,
    Timestamp: number,
    Event?: TrenDAP.IEvent,
    Logo?: string,
    Chan1Minimum?: number,
    Chan1Maximum?: number,
    Chan1Average?: number,
    Chan2Minimum?: number,
    Chan2Maximum?: number,
    Chan2Average?: number,
    IsInEvent: boolean
}

//lets make this a pagedTable as we can get up to 250+ results here as it slows down render times..

export const TableWidget: WidgetTypes.IWidget<IProps, null, null> = {
    DefaultSettings: { Precision: 3 },
    DefaultChannelSettings: null,
    DefaultEventSourceSettings: null,
    Name: "Table",
    WidgetUI: (props) => {
        const [sortField, setSortField] = React.useState<keyof ITableData>('Timestamp');
        const [ascending, setAscending] = React.useState<boolean>(true);
        const [data, setData] = React.useState<ITableData[]>([]);

        React.useEffect(() => {
            if (props.Data == null || props.Events == null || props.Data.length === 0) return;
            let results: ITableData[] = [];

            // Process first channel data
            const firstChannelData = props.Data[0]?.SeriesData;
            if (firstChannelData != null && firstChannelData?.Average != null) {
                const inactiveEvents: { Event: TrenDAP.IEvent, Logo?: string }[] = _.orderBy(props.Events.flatMap(evtSrc => evtSrc.Events
                    .map(event => ({ Event: event, Logo: evtSrc.Logo }))), 'Event.Time', 'desc');
                let activeEvents: { Event: TrenDAP.IEvent, Logo?: string }[] = [];
                let dataIndex = 0;

                firstChannelData.Average.forEach((avgItem, index) => {
                    const [timestamp, avg] = avgItem;
                    const min = firstChannelData?.Minimum?.[index][1];
                    const max = firstChannelData?.Maximum?.[index][1];

                    // Check to see if a new event becomes active
                    while (inactiveEvents.length !== 0) {
                        if (timestamp > inactiveEvents[inactiveEvents.length - 1].Event.Time) {
                            const newActiveEvent = inactiveEvents.pop();

                            results.push({
                                ID: dataIndex,
                                Timestamp: newActiveEvent.Event.Time,
                                Event: newActiveEvent.Event,
                                Logo: newActiveEvent?.Logo,
                                IsInEvent: true
                            });
                            dataIndex += 1;
                            activeEvents.push(newActiveEvent);
                        }
                        else break;
                    }
                    // Filter away any now non-active event
                    activeEvents = activeEvents.filter(evt => timestamp < evt.Event.Time + evt.Event.Duration);

                    results.push({
                        ID: dataIndex,
                        Timestamp: timestamp,
                        Chan1Minimum: min,
                        Chan1Maximum: max,
                        Chan1Average: avg,
                        IsInEvent: activeEvents.length !== 0
                    });
                    dataIndex += 1;
                });
            }

            // Find matching Data for channel two 
            if (props.Data.length > 1) {
                const secondChannelData = props.Data[1].SeriesData;
                if (secondChannelData != null && secondChannelData?.Average != null) {
                    secondChannelData.Average.forEach((avgItem, index) => {
                        const [timestamp, avg] = avgItem;
                        const min = secondChannelData?.Minimum?.[index][1];
                        const max = secondChannelData?.Maximum?.[index][1];

                        const existingEntry = results.find(r => r.Timestamp === timestamp);
                        if (existingEntry != null) {
                            existingEntry.Chan2Minimum = min;
                            existingEntry.Chan2Maximum = max;
                            existingEntry.Chan2Average = avg;
                        }
                    });
                }
            }

            setData(results);
        }, [props.Data, props.Events]);

        React.useEffect(() => {
            const ordered = _.orderBy(data, [sortField], [ascending ? 'asc' : 'desc'])
            setData(ordered);
        }, [ascending, sortField])

        return (
            <>
                <ReactTable.Table<ITableData>
                    TableClass={"table table-hover"}
                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    SortKey={sortField}
                    OnClick={(data, evt) => {
                        evt.preventDefault();
                        evt.stopPropagation();
                        if (data.row?.Event?.Link != null) {
                            const handle = setTimeout(() => window.open(data.row.Event.Link, '_blank'), 500);
                            return (() => { clearTimeout(handle); })
                        }
                    }}
                    OnSort={(data) => {
                        if (data.colField === sortField)
                            setAscending(!ascending)
                        else {
                            setSortField(data.colField as keyof ITableData)
                            setAscending(true)
                        }
                    }}
                    Data={data}
                    Ascending={ascending}
                    KeySelector={item => item.ID}
                    Selected={item => item.IsInEvent}
                >
                    <ReactTable.Column<ITableData>
                        Key={'Timestamp'}
                        AllowSort={true}
                        Field={'Timestamp'}
                        Content={(item) => moment(item.item.Timestamp).toISOString()}
                    >
                        Timestamp
                    </ReactTable.Column>
                    <ReactTable.Column<ITableData>
                        Key={'Chan1Min'}
                        AllowSort={true}
                        Field={'Chan1Minimum'}
                        Content={row => {
                            if (row.item?.Event != null)
                                return row.item.Event.Title;
                            if (row.item?.Chan1Minimum != null)
                                return row.item.Chan1Minimum.toFixed(props.Settings.Precision);
                            return 'n/a'
                        }}
                    >
                        {props.Data[0]?.Name ?? 'Chan 1'} Min
                    </ReactTable.Column>
                    <ReactTable.Column<ITableData>
                        Key={'Chan1Maximum'}
                        AllowSort={true}
                        Field={'Chan1Maximum'}
                        Content={row => {
                            if (row.item?.Event != null)
                                return row.item.Event.Description;
                            if (row.item?.Chan1Maximum != null)
                                return row.item.Chan1Maximum.toFixed(props.Settings.Precision);
                            return 'n/a'
                        }}
                    >
                        {props.Data[0]?.Name ?? 'Chan 1'} Max
                    </ReactTable.Column>
                    <ReactTable.Column<ITableData>
                        Key={'Chan1Avg'}
                        AllowSort={true}
                        Field={'Chan1Average'}
                        Content={row => {
                            if (row.item?.Event?.Link != null) {
                                if (row.item?.Logo != null) {
                                    return <img style={{ maxHeight: 24 }} src={row.item.Logo} />
                                }
                                return <ReactIcons.ShareArrowDiagonal Size={24} />;
                            }
                            if (row.item?.Chan1Average != null)
                                return row.item.Chan1Average.toFixed(props.Settings.Precision);
                            return 'n/a'
                        }}
                    >
                        {props.Data[0]?.Name ?? 'Chan 1'} Avg
                    </ReactTable.Column>
                    <ReactTable.Column<ITableData>
                        Key={'Chan2Min'}
                        AllowSort={true}
                        Field={'Chan2Minimum'}
                        Content={row => {
                            if (row.item?.Event != null) return '';
                            if (row.item?.Chan2Minimum != null)
                                return row.item.Chan2Minimum.toFixed(props.Settings.Precision);
                            return 'n/a';
                        }}
                    >
                        {props.Data[1]?.Name ?? 'Chan 2'} Min
                    </ReactTable.Column>
                    <ReactTable.Column<ITableData>
                        Key={'Chan2Maximum'}
                        AllowSort={true}
                        Field={'Chan2Maximum'}
                        Content={row => {
                            if (row.item?.Event != null) return '';
                            if (row.item?.Chan2Maximum != null)
                                return row.item.Chan2Maximum.toFixed(props.Settings.Precision);
                            return 'n/a';
                        }}
                    >
                        {props.Data[1]?.Name ?? 'Chan 2'} Max
                    </ReactTable.Column>
                    <ReactTable.Column<ITableData>
                        Key={'Chan2Avg'}
                        AllowSort={true}
                        Field={'Chan2Average'}
                        Content={row => {
                            if (row.item?.Event != null) return '';
                            if (row.item?.Chan2Average != null)
                                return row.item.Chan2Average.toFixed(props.Settings.Precision);
                            return 'n/a';
                        }}
                    >
                        {props.Data[1]?.Name ?? 'Chan 2'} Avg
                    </ReactTable.Column>
                </ReactTable.Table>
            </>
        );
    },
    SettingsUI: (props) => {
        return <>
            <Input<IProps> Record={props.Settings} Field={'Precision'} Setter={(item) => props.SetSettings(item)} Valid={() => true} AllowNull={true} />
        </>
    },
    ChannelSelectionUI: (props) => {
        const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>(props.AllChannels);
        const [ascending, setAscending] = React.useState<boolean>(false);
        const [sortField, setSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Phase');

        return (
            <ReactTable.Table<DataSetTypes.IDataSetMetaData>
                TableClass="table table-hover"
                TableStyle={{ padding: 0, width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0 }}
                TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                SortKey={sortField}
                OnClick={(item) => {
                    const isSelected = props.SelectedChannels?.find(c => c.MetaData.ID === item.row.ID) != null;
                    if (isSelected)
                        props.RemoveChannel(item.row.ID);
                    else if (props.SelectedChannels.length < 2)
                        props.AddChannel(item.row.ID, null); //no channel specific settings here..
                }}
                OnSort={data => sort(data.colField as keyof DataSetTypes.IDataSetMetaData, sortField, setSortField, data.ascending, setAscending, ascending, allChannels, setAllChannels)}
                Data={allChannels}
                Ascending={ascending}
                KeySelector={(row) => row.ID}
                Selected={(row) => props.SelectedChannels?.find(c => c.MetaData.ID === row.ID) != null ? true : false}
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

            </ReactTable.Table>);
    }
}
