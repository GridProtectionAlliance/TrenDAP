//******************************************************************************************************
//  XDADataSource.tsx - Gbtc
//
//  Copyright © 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  04/01/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { Select, ArrayCheckBoxes, ArrayMultiSelect, Input } from '@gpa-gemstone/react-forms';
import { OpenXDA } from '@gpa-gemstone/application-typings';
import { DataSourceTypes, TrenDAP, Redux, DataSetTypes } from '../../../global';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { SelectOpenXDA, FetchOpenXDA, SelectOpenXDAStatus } from '../../OpenXDA/OpenXDASlice';
import { ParseSettings } from '../DataSourceWrapper';
import { ajax } from 'jquery';
import queryString from 'querystring';
import moment from 'moment';

const encodedDateFormat = 'MM/DD/YYYY';
const encodedTimeFormat = 'HH:mm:ss.SSS';
const tdapDateFormat = 'YYYY-MM-DD';
const hidsServerFormat = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

interface XDAChannel extends OpenXDA.Types.Channel {
    AssetID: number,
    MeterID: number,
    ChannelGroup: string,
    Unit: string,
    Longitude: number,
    Latitude: number
}

const XDADataSource: DataSourceTypes.IDataSource<TrenDAP.iXDADataSource, TrenDAP.iXDADataSet> = {
    Name: 'TrenDAPDB',
    DefaultSourceSettings: { PQBrowserUrl: "http://localhost:44368/"},
    DefaultDataSetSettings: { By: 'Meter', IDs: [], Phases: [], Groups: [], Chans: [], Aggregate: ''},
    ConfigUI: (props: DataSourceTypes.IConfigProps<TrenDAP.iXDADataSource>) => {
        React.useEffect(() => {
            const errors: string[] = [];
            if (props.Settings.PQBrowserUrl === null || props.Settings.PQBrowserUrl.length === 0)
                errors.push("PQ Browser URL is required by datasource.");
        }, [props.Settings]);

        return <Input Record={props.Settings} Setter={props.SetSettings} Field='PQBrowserUrl' Label='PQ Browser URL' Valid={() => true} />;
    },
    DataSetUI: (props: DataSourceTypes.IDataSetProps<TrenDAP.iXDADataSource, TrenDAP.iXDADataSet>) => {
        const dispatch = useAppDispatch();
        const phases: OpenXDA.Types.Phase[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'Phase'));
        const phStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'Phase'));
        const meters: OpenXDA.Types.Meter[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'Meter'));
        const meterStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'Meter'));
        const assets: OpenXDA.Types.Asset[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'Asset'));
        const assetStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'Asset'));

        const channelGroups: any[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'ChannelGroup'));
        const cgStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'ChannelGroup'));

        const [channels, setChannels] = React.useState<XDAChannel[]>([]);

        React.useEffect(() => {
            const errors: string[] = [];
            if (props.DataSetSettings.IDs === null || props.DataSetSettings.IDs.length === 0)
                errors.push(`${props.DataSetSettings.By === 'Meter' ? 'Meter' : 'Asset'}s must be selected to filter for channels.`);
            if (props.DataSetSettings.Phases === null || props.DataSetSettings.Phases.length === 0)
                errors.push(`Phases must be selected to filter for channels.`);
            if (props.DataSetSettings.Groups === null || props.DataSetSettings.Groups.length === 0)
                errors.push(`Channel groups must be selected to filter for channels.`);
            if (props.DataSetSettings.Chans === null || props.DataSetSettings.Chans.length === 0)
                errors.push(`Channels must be selected to retrieve data.`);
        }, [props.DataSetSettings]);

        React.useEffect(() => {
            if (phStatus != 'unitiated' && phStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'Phase' }));
        }, [phStatus]);

        React.useEffect(() => {
            if (meterStatus != 'unitiated' && meterStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'Meter' }));
        }, [meterStatus]);

        React.useEffect(() => {
            if (assetStatus != 'unitiated' && assetStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'Asset' }));
        }, [assetStatus]);

        React.useEffect(() => {
            if (cgStatus != 'unitiated' && cgStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'ChannelGroup' }));
        }, [cgStatus]);

        React.useEffect(() => {
            const filter = {
                Phases: props.DataSetSettings.Phases,
                ChannelGroups: props.DataSetSettings.Groups,
                MeterList: props.DataSetSettings.By === 'Meter' ? props.DataSetSettings.IDs : [],
                AssetList: props.DataSetSettings.By === 'Asset' ? props.DataSetSettings.IDs : []
            };

            const handle = ajax({
                type: "POST",
                url: `${homePath}api/TrenDAPDB/Channel/GetTrendChannels/${props.DataSource.ID}`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(filter),
                dataType: 'json',
                cache: true,
                async: true
            }).done((data: XDAChannel[]) => {
                setChannels(data);
            });

            return () => {
                if (handle != null && handle.abort() != null) handle.abort(); 
            }
        }, [props.DataSetSettings]);

        return (
            <form>
                <div className="row">
                    <div className="col">
                        <Select<TrenDAP.iXDADataSet> Record={props.DataSetSettings} Field="Aggregate"
                            Options={[{ Value: '', Label: 'None' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1w', Label: 'Week' }]}
                            Setter={props.SetDataSetSettings} />
                        <Select<TrenDAP.iXDADataSet> Record={props.DataSetSettings} Field="By" Options={[{ Value: 'Meter', Label: 'Meter' }, { Value: 'Asset', Label: 'Asset' }]} Setter={props.SetDataSetSettings} />
                        <ArrayMultiSelect<TrenDAP.iXDADataSet> Style={{ height: window.innerHeight - 560 }} Record={props.DataSetSettings}
                            Options={(props.DataSetSettings.By == 'Meter' ? meters?.map(m => ({ Value: m.ID.toString(), Label: m.Name })) : assets?.map(m => ({ Value: m.ID.toString(), Label: m.AssetName }))) ?? []}
                            Field="IDs" Setter={props.SetDataSetSettings} />
                    </div>
                    <div className="col">
                        <ArrayCheckBoxes<TrenDAP.iXDADataSet> Record={props.DataSetSettings} Checkboxes={phases?.map(m => ({ ID: m.ID.toString(), Label: m.Name })) ?? []} Field="Phases" Setter={props.SetDataSetSettings} />
                        <ArrayCheckBoxes<TrenDAP.iXDADataSet> Record={props.DataSetSettings} Label="Channel Groups" Checkboxes={channelGroups?.map(m => ({ ID: m.ID.toString(), Label: m.Name })) ?? []} Field="Groups" Setter={props.SetDataSetSettings} />
                        <ArrayMultiSelect<TrenDAP.iXDADataSet> Style={{ height: window.innerHeight - 520 }} Record={props.DataSetSettings}
                            Options={channels?.map(m => ({ Value: m.ID.toString(), Label: `${props.DataSetSettings.By === 'Meter' ? m.Meter : m.Asset} - ${m.Name}` })) ?? []}
                            Field="Chans" Setter={props.SetDataSetSettings} />
                    </div>
                </div>
            </form>
        );

    },
    LoadDataSet: function (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, setConn: DataSourceTypes.IDataSourceDataSet): Promise<DataSetTypes.IDataSetData[]> {
        return new Promise<DataSetTypes.IDataSetData[]>((resolve, reject) => {
            const dataSetSettings = ParseSettings(setConn.Settings, XDADataSource.DefaultDataSetSettings);
            const returnData: DataSetTypes.IDataSetData[] = dataSetSettings.Chans.map(id => ({
                ID: id.toString(),
                Name: '',
                ParentID: '',
                ParentName: '',
                Phase: '',
                Type: '',
                SeriesData: new Map<string, [...number[]][]>(),
            }));

            // Handle to query HIDS information (through XDA)
            const dataHandle = ajax({
                type: "Get",
                url: `${homePath}api/DataSourceDataSet/Query/${setConn.ID}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'text',
                cache: true,
                async: true
            }).done((data: string) => {
                const newPoints: string[] = data.split("\n");
                newPoints.forEach(jsonPoint => {
                    let point: TrenDAP.iXDATrendDataPoint = undefined;
                    try {
                        if (jsonPoint !== "") point = JSON.parse(jsonPoint);
                    }
                    catch {
                        console.error("Failed to parse point: " + jsonPoint);
                    }
                    if (point !== undefined) {
                        const timeStamp = moment.utc(point.Timestamp, hidsServerFormat).valueOf();
                        const dataIndex = returnData.findIndex(data => data.ID === Number("0x" + point.Tag).toString());
                        if (dataIndex !== -1) {
                            ['Minimum', 'Maximum', 'Average'].forEach(key => {
                                const dataPoint = point[key];
                                if (dataPoint == null) return;
                                if (returnData[dataIndex].SeriesData.has(key)) {
                                    const data = returnData[dataIndex].SeriesData.get(key);
                                    data.push([timeStamp, dataPoint]);
                                } else {
                                    const data: [...number[]][] = [[timeStamp, dataPoint]];
                                    returnData[dataIndex].SeriesData.set(key, data);
                                }
                            });
                        } else {
                            console.warn(`Datapoint found with unexpected channel ID ${Number("0x" + point.Tag)}`);
                        }
                    }
                });
            }).fail(err => reject(err));

            // Handle to query channel information
            const infoHandle = ajax({
                type: "POST",
                url: `${homePath}api/TrenDAPDB/Channel/GetTrendChannels/${setConn.DataSourceID}`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    Phases: dataSetSettings.Phases,
                    ChannelGroups: dataSetSettings.Groups,
                    MeterList: dataSetSettings.By === 'Meter' ? dataSetSettings.IDs : [],
                    AssetList: dataSetSettings.By === 'Asset' ? dataSetSettings.IDs : []
                }),
                dataType: 'json',
                cache: true,
                async: true
            }).done((channelData: XDAChannel[]) => {
                returnData.forEach((returnDatum, index) => {
                    const channelDatum = channelData.find(datum => datum.ID.toString() === returnDatum.ID);
                    if (channelDatum == null) {
                        console.warn(`Unable to find information associated with channel ID ${returnDatum.ID}`);
                        return;
                    }
                    returnData[index].ParentID = (dataSetSettings.By === 'Meter' ? channelDatum.MeterID : channelDatum.AssetID).toString();
                    returnData[index].ParentName = dataSetSettings.By === 'Meter' ? channelDatum.Meter : channelDatum.Asset;
                    returnData[index].Name = channelDatum.Name;
                    returnData[index].Phase = channelDatum.Phase;
                    returnData[index].Type = channelDatum.ChannelGroup;
                    returnData[index].Longitude = channelDatum.Longitude;
                    returnData[index].Latitude = channelDatum.Latitude;
                    returnData[index].Harmonic = channelDatum.HarmonicGroup;
                    returnData[index].Unit = channelDatum.Unit;

                });
            }).fail(err => reject(err));

            Promise.all([dataHandle, infoHandle]).then(() => resolve(returnData));
        });
    },
    QuickViewDataSet: function (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, setConn: DataSourceTypes.IDataSourceDataSet): string {
        const dataSetSettings = ParseSettings(setConn.Settings, XDADataSource.DefaultDataSetSettings);
        const sourceSettings = ParseSettings(dataSource.Settings, XDADataSource.DefaultSourceSettings);
        const queryParams: any = {};

        // Time filter on the other side takes center time and a unit number
        let windowSize: number;
        let centerTime: moment.Moment;
        // Most granular we can do tdap side is days, so hours should be able to handle fractional middle points
        if (dataSet.Context === 'Relative') {
            let duration: moment.Duration;
            switch (dataSet.RelativeWindow) {
                case 'Day':
                    duration = moment.duration(dataSet.RelativeValue, 'days');
                    break;
                case 'Week':
                    duration = moment.duration(dataSet.RelativeValue, 'weeks');
                    break;
                case 'Month':
                    duration = moment.duration(dataSet.RelativeValue, 'months');
                    break;
                default:
                    console.warn("Could not match relative window to a moment value");
                    // Falls-through
                case 'Year':
                    duration = moment.duration(dataSet.RelativeValue, 'years');
                    break;
            }
            windowSize = duration.asHours() / 2;
            centerTime = moment().add(-windowSize);
        } else {
            const duration = moment(dataSet.From, tdapDateFormat).diff(moment(dataSet.To, tdapDateFormat), 'hours', true);
            windowSize = duration / 2;
            centerTime = moment(dataSet.From).add(windowSize);
        }
        queryParams['time'] = centerTime.format(encodedTimeFormat);
        queryParams['date'] = centerTime.format(encodedDateFormat);
        queryParams['windowSize'] = windowSize;
        queryParams['timeWindowUnits'] = 3; // hours

        queryParams[dataSetSettings.By.toLowerCase() + 's'] = `[${dataSetSettings.IDs.join(',')}]`;
        queryParams['phases'] = `[${dataSetSettings.Phases.join(',')}]`;
        queryParams['groups'] = `[${dataSetSettings.Groups.join(',')}]`;

        const queryUrl = queryString.stringify(queryParams, "&", "=", { encodeURIComponent: queryString.escape });
        // Regex removes trailing /
        return `${sourceSettings.PQBrowserUrl.replace(/[\/]$/, '')}/trenddata?${queryUrl}`;
    },
    TestAuth: function (dataSource: DataSourceTypes.IDataSourceView): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            ajax({
                type: "GET",
                url: `${homePath}api/DataSource/TestAuth/${dataSource.ID}`,
                contentType: "application/json; charset=utf-8",
                cache: true,
                async: true
            }).done((data: string) => {
                if (data === "1") resolve(true);
                else {
                    console.error(data);
                    resolve(false);
                }
            }).fail(() => {
                reject("Unable to resolve auth test.");
            });
        });
    }
}

export default XDADataSource;