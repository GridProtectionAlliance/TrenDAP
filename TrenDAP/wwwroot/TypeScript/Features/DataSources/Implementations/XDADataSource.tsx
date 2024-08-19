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
import { Input, MultiCheckBoxSelect } from '@gpa-gemstone/react-forms';
import { OpenXDA, SystemCenter } from '@gpa-gemstone/application-typings';
import { DataSourceTypes, TrenDAP, Redux, DataSetTypes } from '../../../global';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { SelectOpenXDA, FetchOpenXDA, SelectOpenXDAStatus } from '../../OpenXDA/OpenXDASlice';
import { IDataSource, EnsureTypeSafety } from '../Interface';
import $ from 'jquery';
import queryString from 'querystring';
import moment from 'moment';
import { NavBarFilterButton } from '@gpa-gemstone/common-pages';
import TrenDAPSelectPopup from '../../OpenXDA/TrenDAPSelectPopup';
import { ConfigTable } from '@gpa-gemstone/react-interactive';
import _ from 'lodash';
import { ReactTable } from '@gpa-gemstone/react-table';

const encodedDateFormat = 'MM/DD/YYYY';
const encodedTimeFormat = 'HH:mm:ss.SSS';
const tdapDateFormat = 'YYYY-MM-DD';
const hidsServerFormat = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";
const colList = ["Meter", "Asset", "Description", "Longitude", "Latitude", "Channel Group", "Unit"];
const defaultCols = new Set(["Meter", "Asset"]);

interface IPrivateSettings {
    URL: string,
    RegistrationKey: string,
    APIToken: string,
}

interface XDAChannel extends OpenXDA.Types.Channel {
    AssetID: number,
    MeterID: number,
    ChannelGroup: string,
    Unit: string,
    Longitude: number,
    Latitude: number
}

interface IMultiCheckboxOption {
    Value: number|string,
    Text: string,
    Selected: boolean
}

const XDADataSource: IDataSource<IPrivateSettings, TrenDAP.iXDADataSource, TrenDAP.iXDADataSet> = {
    Name: 'TrenDAPDB',
    DefaultPrivateSourceSettings: { URL: "http://localhost:8989/", APIToken: "", RegistrationKey: "TrenDAP" },
    DefaultSourceSettings: { PQBrowserUrl: "http://localhost:44368/"},
    DefaultDataSetSettings: { MeterIDs: [], AssetIDs: [], Phases: [], Groups: [], ChannelIDs: [], Aggregate: '' },
    PrivateConfigUI: (props: TrenDAP.ISourceConfig<IPrivateSettings>) => {
        React.useEffect(() => {
            const errors: string[] = [];
            if (props.Settings.URL == null || props.Settings.URL.length === 0)
                errors.push("XDA URL is required by data source.");
            if (props.Settings.APIToken == null || props.Settings.APIToken.length === 0)
                errors.push("XDA API Token is required by data source.");
            if (props.Settings.RegistrationKey == null || props.Settings.RegistrationKey.length === 0)
                errors.push("XDA API Registration Key is required by data source.");
            props.SetErrors(errors);
        }, [props.Settings]);

        function valid(field: keyof IPrivateSettings): boolean {
            if (field === 'URL') return (props.Settings.URL != null && props.Settings.URL.length !== 0);
            if (field === 'RegistrationKey') return (props.Settings.RegistrationKey != null && props.Settings.RegistrationKey.length !== 0);
            if (field === 'APIToken') return (props.Settings.APIToken != null && props.Settings.APIToken.length !== 0);
            return true;
        }

        return <>
            <Input<IPrivateSettings> Record={props.Settings} Setter={props.SetSettings} Field='URL' Label='XDA URL' Valid={valid} />
            <Input<IPrivateSettings> Record={props.Settings} Setter={props.SetSettings} Field='APIToken' Label='API Token' Valid={valid} />
            <Input<IPrivateSettings> Record={props.Settings} Setter={props.SetSettings} Field='RegistrationKey' Label='Regisrtation Key' Valid={valid} />
        </>;
    },
    ConfigUI: (props: TrenDAP.ISourceConfig<TrenDAP.iXDADataSource>) => {
        React.useEffect(() => {
            const errors: string[] = [];
            if (props.Settings.PQBrowserUrl === null || props.Settings.PQBrowserUrl.length === 0)
                errors.push("PQ Browser URL is required by datasource.");
            props.SetErrors(errors);
        }, [props.Settings]);

        function valid(field: string): boolean {
            if (field === 'PQBrowserUrl') return (props.Settings.PQBrowserUrl !== null && props.Settings.PQBrowserUrl.length !== 0);
            return true;
        }

        return <Input Record={props.Settings} Setter={props.SetSettings} Field='PQBrowserUrl' Label='PQ Browser URL' Valid={valid} />;
    },
    DataSetUI: (props: DataSourceTypes.IDataSourceDataSetProps<TrenDAP.iXDADataSource, TrenDAP.iXDADataSet>) => {
        const dispatch = useAppDispatch();
        const phases: OpenXDA.Types.Phase[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'Phase', 'data'));
        const phStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'Phase', 'data'));
        const meters: SystemCenter.Types.DetailedMeter[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'DetailedMeter', 'data'));
        const meterStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'DetailedMeter', 'data'));
        const assets: SystemCenter.Types.DetailedAsset[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'DetailedAsset', 'data'));
        const assetStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'DetailedAsset', 'data'));
        const channelGroups: any[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'ChannelGroup', 'data'));
        const cgStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'ChannelGroup', 'data'));

        const [filter, setFilter] = React.useState<string>('None');
        const [phaseOptions, setPhaseOptions] = React.useState<IMultiCheckboxOption[]>([]);
        const [channelGroupOptions, setChannelGroupOptions] = React.useState<IMultiCheckboxOption[]>([]);

        const [channels, setChannels] = React.useState<XDAChannel[]>([]);
        const [sortField, setSortField] = React.useState<keyof XDAChannel>('Name');
        const [ascending, setAscending] = React.useState<boolean>(true);


        const meterList: SystemCenter.Types.DetailedMeter[] = React.useMemo(() => {
            if (meterStatus != 'idle') return [];
            return meters.filter(item => props.DataSetSettings.MeterIDs.findIndex(id => id === item.ID) !== -1);
        }, [props.DataSetSettings.MeterIDs, meterStatus]);

        const assetList: SystemCenter.Types.DetailedAsset[] = React.useMemo(() => {
            if (assetStatus != 'idle') return [];
            return assets.filter(item => props.DataSetSettings.AssetIDs.findIndex(id => id === item.ID) !== -1);
        }, [props.DataSetSettings.AssetIDs, assetStatus]);

        function makeMultiCheckboxOptions(field: keyof TrenDAP.iXDADataSet & ('Phases' | 'Groups'), setOptions: (options: IMultiCheckboxOption[]) => void, allKeys: any[]) {
            if (allKeys == null || allKeys.length === 0) return;
            const newOptions: IMultiCheckboxOption[] = allKeys.map((key) => ({ Value: key['ID'], Text: key.Name, Selected: props.DataSetSettings[field].findIndex(id => id === key.ID) !== -1 }));
            setOptions(newOptions);
        }

        function multiCheckboxUpdate(field: keyof TrenDAP.iXDADataSet & ('Phases' | 'Groups'), newOptions: IMultiCheckboxOption[], oldOptions: IMultiCheckboxOption[]) {
            const ids: number[] = [];
            oldOptions.forEach(item => {
                const selected: boolean = item.Selected != (newOptions.findIndex(option => item.Value === option.Value) > -1);
                if (selected) ids.push(item.Value as number);
            });
            const newSettings = {...props.DataSetSettings};
            newSettings.ChannelIDs = [];
            newSettings[field] = ids;
            props.SetDataSetSettings(newSettings);
        }

        // Handle table sort
        React.useEffect(() => {
            setChannels(_.orderBy(channels, [sortField], [ascending ? 'asc' : 'desc']));
        }, [sortField, ascending]);

        React.useEffect(() => {
            const errors: string[] = [];
            if (props.DataSetSettings.MeterIDs === null || props.DataSetSettings.MeterIDs.length === 0)
                errors.push(`Meters must be selected to filter for channels.`);
            if (props.DataSetSettings.Phases === null || props.DataSetSettings.Phases.length === 0)
                errors.push(`Phases must be selected to filter for channels.`);
            if (props.DataSetSettings.Groups === null || props.DataSetSettings.Groups.length === 0)
                errors.push(`Channel groups must be selected to filter for channels.`);
            if (props.DataSetSettings.ChannelIDs === null || props.DataSetSettings.ChannelIDs.length === 0)
                errors.push(`Channels must be selected to retrieve data.`);
            props.SetErrors(errors);
        }, [props.DataSetSettings]);

        // Multicheckbox Options Updates
        React.useEffect(() => {
            if (phStatus !== 'idle') return;
            makeMultiCheckboxOptions('Phases', setPhaseOptions, phases);
        }, [phStatus, props.DataSetSettings.Phases]);
    
        React.useEffect(() => {
            if (cgStatus !== 'idle') return;
            makeMultiCheckboxOptions('Groups', setChannelGroupOptions, channelGroups);
        }, [cgStatus, props.DataSetSettings.Groups]);

        React.useEffect(() => {
            if (phStatus != 'unitiated' && phStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'Phase' }));
        }, [phStatus]);

        React.useEffect(() => {
            if (meterStatus != 'unitiated' && meterStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'DetailedMeter' }));
        }, [meterStatus]);

        React.useEffect(() => {
            if (assetStatus != 'unitiated' && assetStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'DetailedAsset' }));
        }, [assetStatus]);

        React.useEffect(() => {
            if (cgStatus != 'unitiated' && cgStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'ChannelGroup' }));
        }, [cgStatus]);

        React.useEffect(() => {
            const filter = {
                Phases: props.DataSetSettings.Phases,
                ChannelGroups: props.DataSetSettings.Groups,
                MeterList: props.DataSetSettings.MeterIDs,
                AssetList: props.DataSetSettings.AssetIDs
            };

            const handle = $.ajax({
                type: "POST",
                url: `${homePath}api/TrenDAPDB/Channel/GetTrendChannels/${props.DataSource.ID}`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(filter),
                dataType: 'json',
                cache: true,
                async: true
            }).done((data: XDAChannel[]) => {
                setChannels(_.orderBy(data, [sortField], [ascending ? 'asc' : 'desc']));
            });

            return () => {
                if (handle != null && handle.abort() != null) handle.abort(); 
            }
        }, [props.DataSetSettings]);

        return (
            <div className={'row'} style={{ flex: 1, overflow: 'hidden' }}>
                <div className="col-3">
                    <fieldset className="border" style={{ padding: '10px' }}>
                        <legend className="w-auto" style={{ fontSize: 'large' }}>Channel Filters:</legend>
                        <div className={"row"}>
                            <div className={'col'}>
                                <NavBarFilterButton Type={'Meter'} OnClick={() => setFilter('Meter')} Data={meterList} AlternateColors={{ normal: "#3840B5", selected: "#FF9B4B" }}/>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={'col'}>
                                <NavBarFilterButton Type={'Asset'} OnClick={() => setFilter('Asset')} Data={assetList} />
                            </div>
                        </div>
                        <label style={{ width: '100%', position: 'relative', float: "left" }}>Phase: </label>
                        <div className={"row"}>
                            <div className={"col"}>
                                <MultiCheckBoxSelect
                                    ItemTooltip={'dark'}
                                    Options={phaseOptions}
                                    Label={''}
                                    OnChange={(evt, Options: IMultiCheckboxOption[]) => multiCheckboxUpdate("Phases", Options, phaseOptions)}
                                />
                            </div>
                        </div>
                        <label style={{ width: '100%', position: 'relative', float: "left" }}>Channel Group: </label>
                        <div className={"row"}>
                            <div className={"col"}>
                                <MultiCheckBoxSelect
                                    ItemTooltip={'dark'}
                                    Options={channelGroupOptions}
                                    Label={''}
                                    OnChange={(evt, Options: IMultiCheckboxOption[]) => multiCheckboxUpdate("Groups", Options, channelGroupOptions)}
                                />
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="col-9 h-100">
                    <ConfigTable.Table<XDAChannel>
                        Data={channels}
                        SortKey={sortField}
                        Ascending={ascending}
                        OnSort={(data) => {
                            if (data.colField == null) return;
                            if (data.colField === sortField) setAscending(!ascending);
                            else setSortField(data.colField);
                        }}
                        KeySelector={(item) => item.ID}
                        OnClick={(item, event) => {
                            event.preventDefault();
                            const newIds: Set<number> = new Set();
                            if (event.shiftKey) {
                                const clickIndex: number = channels.findIndex(chan => chan.ID === item.row.ID);
                                const firstSelectedIndex: number = channels.findIndex(chan => props.DataSetSettings.ChannelIDs.findIndex(id => id === chan.ID) !== -1);
                                if (firstSelectedIndex >= 0) {
                                    const lowerIndex: number = clickIndex < firstSelectedIndex ? clickIndex : firstSelectedIndex;
                                    const upperIndex: number = clickIndex > firstSelectedIndex ? clickIndex : firstSelectedIndex;
                                    for (let index: number = lowerIndex; index <= upperIndex; index++) {
                                        newIds.add(channels[index].ID);
                                    }
                                }
                            } else
                                newIds.add(item.row.ID);
        
                            // Changing the added values based on held ctrl key
                            if (event.ctrlKey) {
                                props.DataSetSettings.ChannelIDs.forEach(id => newIds.add(id));
                                // Handle the unselect case
                                if (!event.shiftKey && props.DataSetSettings.ChannelIDs.findIndex(id => id === item.row.ID) !== -1) newIds.delete(item.row.ID);
                            }
                            const newSettings = { ...props.DataSetSettings };
                            newSettings.ChannelIDs = [...newIds.keys()];
                            props.SetDataSetSettings(newSettings);
                        }}
                        Selected={(item) => props.DataSetSettings.ChannelIDs.findIndex(id => id === item.ID) !== -1}
                        TableClass="table table-hover"
                        TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                        TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1, userSelect: 'none' }}
                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}>
                        <ReactTable.AdjustableCol<XDAChannel>
                            Key={'Name'}
                            AllowSort={true}
                            Field={'Name'}
                        >Channel Name</ReactTable.AdjustableCol>
                        <ReactTable.AdjustableCol<XDAChannel>
                            Key={'Phase'}
                            AllowSort={true}
                            Field={'Phase'}
                        />
                        {colList.map(name =>
                            <ConfigTable.Configurable key={name.replace(/\s/, "")} Key={name.replace(/\s/, "")} Label={name} Default={defaultCols.has(name)}>
                                <ReactTable.AdjustableCol<XDAChannel>
                                    Key={name.replace(/\s/, "")}
                                    AllowSort={true}
                                    Field={name.replace(/\s/, "") as keyof XDAChannel}
                                >{name}</ReactTable.AdjustableCol>
                            </ConfigTable.Configurable>)
                        }
                    </ConfigTable.Table>
                </div>
                <TrenDAPSelectPopup<SystemCenter.Types.DetailedMeter> Table='DetailedMeter' SourceID={props.DataSource.ID} SourceType='data'
                    Show={filter === 'Meter'} Selection={meterList} Type='multiple'
                    OnClose={(selected, conf) => {
                        setFilter('None');
                        if (conf) {
                            const newSettings = { ...props.DataSetSettings };
                            newSettings.ChannelIDs = [];
                            newSettings.MeterIDs = selected.map(item => item.ID);
                            props.SetDataSetSettings(newSettings);
                        }
                    }}
                    TableColumns={[
                        { key: 'AssetKey', field: 'AssetKey', label: 'Key', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Name', field: 'Name', label: 'Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Location', field: 'Location', label: 'Substation', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'MappedAssets', field: 'MappedAssets', label: 'Assets', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Make', field: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Model', field: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Scroll', label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                    ]} 
                    SearchColumns={[
                        { label: 'Key', key: 'AssetKey', type: 'string', isPivotField: false },
                        { label: 'Name', key: 'Name', type: 'string', isPivotField: false },
                        { label: 'Substation', key: 'Location', type: 'string', isPivotField: false },
                        { label: 'Make', key: 'Make', type: 'string', isPivotField: false },
                        { label: 'Model', key: 'Model', type: 'string', isPivotField: false },
                        { label: 'Number of Assets', key: 'MappedAssets', type: 'number', isPivotField: false },
                        { label: 'Description', key: 'Description', type: 'string', isPivotField: false },
                    ]} DefaultSearchCol={{ label: 'Name', key: 'Name', type: 'string', isPivotField: false }} Title='Filter by Meter' />
                <TrenDAPSelectPopup<SystemCenter.Types.DetailedAsset> Table='DetailedAsset' SourceID={props.DataSource.ID} SourceType='data'
                    Show={filter === 'Asset'} Selection={assetList} Type='multiple'
                    OnClose={(selected, conf) => {
                        setFilter('None');
                        if (conf) {
                            const newSettings = { ...props.DataSetSettings };
                            newSettings.ChannelIDs = [];
                            newSettings.AssetIDs = selected.map(item => item.ID);
                            props.SetDataSetSettings(newSettings);
                        }
                    }}
                    TableColumns={[
                        { key: 'AssetKey', field: 'AssetKey', label: 'Key', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'AssetName', field: 'AssetName', label: 'Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'AssetType', field: 'AssetType', label: 'Asset Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'VoltageKV', field: 'VoltageKV', label: 'Voltage (kV)', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Meters', field: 'Meters', label: 'Meters', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Locations', field: 'Locations', label: 'Substations', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } }
                    ]} 
                    SearchColumns={[
                        { label: 'Key', key: 'AssetKey', type: 'string', isPivotField: false },
                        { label: 'Name', key: 'AssetName', type: 'string', isPivotField: false },
                        { label: 'Nominal Voltage (L-L kV)', key: 'VoltageKV', type: 'number', isPivotField: false },
                        { label: 'Type', key: 'AssetType', type: 'enum', isPivotField: false },
                        { label: 'Meter Key', key: 'Meter', type: 'string', isPivotField: false },
                        { label: 'Substation Key', key: 'Location', type: 'string', isPivotField: false },
                        { label: 'Number of Meters', key: 'Meters', type: 'integer', isPivotField: false },
                        { label: 'Number of Substations', key: 'Locations', type: 'integer', isPivotField: false },
                        { label: 'Description', key: 'Description', type: 'string', isPivotField: false },
                    ]} DefaultSearchCol={{ label: 'Name', key: 'AssetName', type: 'string', isPivotField: false }} Title='Filter by Asset' />
                
            </div>
        );

    },
    LoadDataSetMeta: function (_dataSource: DataSourceTypes.IDataSourceView, _dataSet: TrenDAP.iDataSet, setConn: DataSourceTypes.IDataSourceDataSet): Promise<DataSetTypes.IDataSetMetaData[]> {
        return new Promise<DataSetTypes.IDataSetMetaData[]>((resolve, reject) => {
            const dataSetSettings = EnsureTypeSafety(setConn.Settings, XDADataSource.DefaultDataSetSettings);
            const returnData: DataSetTypes.IDataSetMetaData[] = dataSetSettings.ChannelIDs.map(id => ({
                ID: id.toString(),
                Name: '',
                ParentID: '',
                ParentName: '',
                Phase: '',
                Type: ''
            }));
            $.ajax({
                type: "POST",
                url: `${homePath}api/TrenDAPDB/Channel/GetTrendChannels/${setConn.DataSourceID}`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    Phases: dataSetSettings.Phases,
                    ChannelGroups: dataSetSettings.Groups,
                    MeterList: dataSetSettings.MeterIDs,
                    AssetList: dataSetSettings.AssetIDs
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
                    // Setting it to this to avoid collisons between multiple sources
                    returnData[index].ID = `${setConn.ID}-${returnData[index].ID}`;
                    returnData[index].ParentID = `${setConn.ID}-${channelDatum.MeterID}`;
                    returnData[index].ParentName = channelDatum.Meter;
                    returnData[index].Name = channelDatum.Name;
                    returnData[index].Phase = channelDatum.Phase;
                    returnData[index].Type = channelDatum.ChannelGroup;
                    returnData[index].Longitude = channelDatum.Longitude;
                    returnData[index].Latitude = channelDatum.Latitude;
                    returnData[index].Harmonic = channelDatum.HarmonicGroup;
                    returnData[index].Unit = channelDatum.Unit;
                });
                resolve(returnData);
            }).fail(err => reject(err));
        });
    },
    LoadDataSet: function (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, setConn: DataSourceTypes.IDataSourceDataSet, events?: TrenDAP.IEvent[]): Promise<DataSetTypes.IDataSetData[]> {
        return new Promise<DataSetTypes.IDataSetData[]>((resolve, reject) => {
            const dataSetSettings = EnsureTypeSafety(setConn.Settings, XDADataSource.DefaultDataSetSettings);
            const returnData: DataSetTypes.IDataSetData[] = dataSetSettings.ChannelIDs.map(id => ({
                ID: id.toString(),
                Name: '',
                ParentID: '',
                ParentName: '',
                Phase: '',
                Type: '',
                SeriesData: { Minimum: [], Maximum: [], Average: [] }
            }));
            let metaData: DataSetTypes.IDataSetMetaData[] | null = null;
            // Handle to query HIDS information (through XDA)
            let dataHandle: JQuery.jqXHR<string>;
            if (events == null) dataHandle = $.ajax({
                type: "Get",
                url: `${homePath}api/TrenDAPDB/Query/${setConn.ID}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'text',
                cache: false,
                async: true
            });
            else if (events.length !== 0) dataHandle = $.ajax({
                type: "Post",
                url: `${homePath}api/TrenDAPDB/Query/ByEvents/${setConn.ID}`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(events),
                dataType: 'text',
                cache: false,
                async: true
            });
            else {
                resolve([]);
                return;
            }
            
            dataHandle.done((data: string) => {
                const newPoints: string[] = data.split("\n");
                newPoints.forEach(jsonPoint => {
                    let point: TrenDAP.iXDATrendDataPoint | undefined = undefined;
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
                            Object.keys(returnData[dataIndex].SeriesData).forEach(key => {
                                const dataPoint = point[key];
                                if (dataPoint == null) return;
                                returnData[dataIndex].SeriesData[key].push([timeStamp, dataPoint]);
                            });
                        } else {
                            console.warn(`Datapoint found with unexpected channel ID ${Number("0x" + point.Tag)}`);
                        }
                    }
                });
            }).fail(err => reject(err));

            // Fetch meta data
            const infoHandle = XDADataSource.LoadDataSetMeta(dataSource, dataSet, setConn).then((data) => { metaData = data; });

            // Handle to query channel information
            Promise.all([dataHandle, infoHandle]).then(() => {
                for (let index = 0; index < returnData.length; index++) {
                    // Setting it to this to avoid collisons between multiple sources
                    returnData[index].ID = `${setConn.ID}-${returnData[index].ID}`;
                    const metaDatum = metaData!.find(chan => chan.ID === returnData[index].ID);
                    if (metaDatum == null) {
                        console.warn(`Unable to retrieve meta data for channel with ID ${returnData[index].ID}.`);
                        continue;
                    }
                    Object.keys(metaDatum).forEach(key => returnData[index][key] = metaDatum[key]);
                }
                resolve(returnData);
            });
        });
    },
    QuickViewDataSet: function (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, setConn: DataSourceTypes.IDataSourceDataSet): string {
        const dataSetSettings = EnsureTypeSafety(setConn.Settings, XDADataSource.DefaultDataSetSettings);
        const sourceSettings = EnsureTypeSafety(dataSource.Settings, XDADataSource.DefaultSourceSettings);
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

        queryParams['meters'] = `[${dataSetSettings.MeterIDs.join(',')}]`;
        queryParams['assets'] = `[${dataSetSettings.AssetIDs.join(',')}]`;
        queryParams['phases'] = `[${dataSetSettings.Phases.join(',')}]`;
        queryParams['groups'] = `[${dataSetSettings.Groups.join(',')}]`;

        const queryUrl = queryString.stringify(queryParams, "&", "=", { encodeURIComponent: queryString.escape });
        // Regex removes trailing /
        return `${sourceSettings.PQBrowserUrl.replace(/[\/]$/, '')}/trenddata?${queryUrl}`;
    },
    TestAuth: function (dataSource: DataSourceTypes.IDataSourceView): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `${homePath}api/TrenDAPDB/TestAuth/${dataSource.ID}`,
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