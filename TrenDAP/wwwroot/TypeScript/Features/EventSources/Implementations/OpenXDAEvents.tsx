//******************************************************************************************************
//  OpenXDAEvents.tsx - Gbtc
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
//  05/07/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as $ from 'jquery';
import moment from 'moment';
import queryString from 'querystring';
import { TrenDAP, Redux } from '../../../global';
import { SelectOpenXDA, FetchOpenXDA, SelectOpenXDAStatus } from '../../OpenXDA/OpenXDASlice';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { EventSourceTypes, IEventSource, EnsureTypeSafety } from '../Interface';
import { ComputeTimeCenterAndSize } from '../../DataSets/HelperFunctions';
import { Input } from '@gpa-gemstone/react-forms';
import { EventCharacteristicFilter, EventTypeFilter, NavBarFilterButton } from '@gpa-gemstone/common-pages';
import { OpenXDA, SystemCenter } from '@gpa-gemstone/application-typings';
import { TimeUnit } from '@gpa-gemstone/common-pages/lib/TimeWindowUtils';
import TrenDAPSelectPopup from '../../OpenXDA/TrenDAPSelectPopup';

const encodedDateFormat = 'MM/DD/YYYY';
const encodedTimeFormat = 'HH:mm:ss.SSS';
const xdaServerFormat = "YYYY-MM-DD[T]HH:mm:ss.SSSSSSS";

interface IPrivateSettings {
    URL: string,
    RegistrationKey: string,
    APIToken: string,
}
interface ISetting { PQBrowserUrl: string }
interface IDatasetSetting {
    AssetIDs: number[],
    MeterIDs: number[],
    AssetGroupIDs: number[],
    SubstationIDs: number[],
    EventCharacteristicFilter: IEventCharacteristicFilter,
    Types: number[]
}

interface IEventCharacteristicFilter {
    durationMin?: number, durationMax?: number,
    phases: { AN: boolean, BN: boolean, CN: boolean, AB: boolean, BC: boolean, CA: boolean, ABG: boolean, BCG: boolean, ABC: boolean, ABCG: boolean },
    transientMin?: number, transientMax?: number, transientType: ('LL'|'LN'|'both'),
    sagMin?: number, sagMax?: number, sagType: ('LL' | 'LN' | 'both'),
    swellMin?: number, swellMax?: number, swellType: ('LL' | 'LN' | 'both'),
    curveID: number, curveInside: boolean, curveOutside: boolean
}

interface IxdaEvent {
    ID: number,
    StartTime: string,
    EndTime: string,
    Type: string,
    MeterName: string,
    AssetName: string
}

const OpenXDAEvents: IEventSource<IPrivateSettings, ISetting, IDatasetSetting> = {
    Name: 'openXDA',
    DefaultPrivateSourceSettings: { URL: "http://localhost:8989/", APIToken: "", RegistrationKey: "TrenDAP" },
    DefaultSourceSettings: { PQBrowserUrl: "http://localhost:44368/" },
    DefaultDataSetSettings: {
        AssetIDs: [],
        MeterIDs: [],
        AssetGroupIDs: [],
        SubstationIDs: [],
        EventCharacteristicFilter: {
            phases: { AN: false, BN: false, CN: false, AB: false, BC: false, CA: false, ABG: false, BCG: false, ABC: false, ABCG: false },
            durationMin: undefined,
            durationMax: undefined,
            swellMin: undefined,
            swellMax: undefined,
            sagMin: undefined,
            sagMax: undefined,
            transientMin: undefined,
            transientMax: undefined,
            curveID: -1,
            curveInside: true,
            curveOutside: true,
            transientType: 'both',
            sagType: 'both',
            swellType: 'both'

        },
        Types: []
    },
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
            <Input<IPrivateSettings> Record={props.Settings} Setter={props.SetSettings} Field='RegistrationKey' Label='Registration Key' Valid={valid} />
        </>;
    },
    ConfigUI: (props: TrenDAP.ISourceConfig<ISetting>) => {
        React.useEffect(() => {
            const errors: string[] = [];
            if (props.Settings.PQBrowserUrl == null || props.Settings.PQBrowserUrl.length === 0)
                errors.push("PQ Browser URL is required by datasource.");
            props.SetErrors(errors);
        }, [props.Settings]);

        function valid(field: string): boolean {
            if (field === 'PQBrowserUrl') return (props.Settings.PQBrowserUrl !== null && props.Settings.PQBrowserUrl.length !== 0);
            return true;
        }

        return <Input Record={props.Settings} Setter={props.SetSettings} Field='PQBrowserUrl' Label='PQ Browser URL' Valid={valid} />;
    },
    DataSetUI: (props: EventSourceTypes.IEventSourceDataSetProps<ISetting, IDatasetSetting>) => {
        const dispatch = useAppDispatch();
        const meters: SystemCenter.Types.DetailedMeter[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'DetailedMeter', 'event'));
        const meterStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'DetailedMeter', 'event'));
        const assets: SystemCenter.Types.DetailedAsset[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'DetailedAsset', 'event'));
        const assetStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'DetailedAsset', 'event'));
        const groups: OpenXDA.Types.AssetGroup[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'AssetGroup', 'event'));
        const groupStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'AssetGroup', 'event'));
        const locations: SystemCenter.Types.DetailedLocation[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'DetailedLocation', 'event'));
        const locationStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'DetailedLocation', 'event'));
        const types: OpenXDA.Types.EventType[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'EventType', 'event'));
        const typeStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'EventType', 'event'));
        const curves: any[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'StandardMagDurCurve', 'event'));
        const curveStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'StandardMagDurCurve', 'event'));

        const [filter, setFilter] = React.useState<string>('None');

        const meterList: SystemCenter.Types.DetailedMeter[] = React.useMemo(() => {
            if (meterStatus != 'idle') return [];
            return meters.filter(item => props.Settings.MeterIDs.findIndex(id => id === item.ID) !== -1);
        }, [props.Settings.MeterIDs, meterStatus]);

        const assetList: SystemCenter.Types.DetailedAsset[] = React.useMemo(() => {
            if (assetStatus != 'idle') return [];
            return assets.filter(item => props.Settings.AssetIDs.findIndex(id => id === item.ID) !== -1);
        }, [props.Settings.AssetIDs, assetStatus]);

        const groupList: OpenXDA.Types.AssetGroup[] = React.useMemo(() => {
            if (groupStatus != 'idle') return [];
            return groups.filter(item => props.Settings.AssetGroupIDs.findIndex(id => id === item.ID) !== -1);
        }, [props.Settings.AssetGroupIDs, groupStatus]);

        const locationList: SystemCenter.Types.DetailedLocation[] = React.useMemo(() => {
            if (locationStatus != 'idle') return [];
            return locations.filter(item => props.Settings.SubstationIDs.findIndex(id => id === item.ID) !== -1);
        }, [props.Settings.SubstationIDs, locationStatus]);

        React.useEffect(() => {
            const errors: string[] = [];
            if (!valid('durationMin') || !valid('durationMax'))
                errors.push('Duration range is not valid.');
            if (!valid('sagMin') || !valid('sagMax'))
                errors.push('Sag range is not valid.');
            if (!valid('swellMin') || !valid('swellMax'))
                errors.push('Swell range is not valid.');
            if (!valid('transientMin') || !valid('transientMax'))
                errors.push('Transient range is not valid.');
            props.SetErrors(errors);
        }, [props.Settings]);

        React.useEffect(() => {
            if (meterStatus === 'unitiated' || meterStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'DetailedMeter' }));
        }, [meterStatus]);

        React.useEffect(() => {
            if (assetStatus === 'unitiated' || assetStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'DetailedAsset' }));
        }, [assetStatus]);

        React.useEffect(() => {
            if (groupStatus === 'unitiated' || groupStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'AssetGroup' }));
        }, [groupStatus]);

        React.useEffect(() => {
            if (locationStatus === 'unitiated' || locationStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'DetailedLocation' }));
        }, [locationStatus]);

        React.useEffect(() => {
            if (typeStatus === 'unitiated' || typeStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'EventType' }));
        }, [typeStatus]);

        React.useEffect(() => {
            if (curveStatus === 'unitiated' || curveStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'StandardMagDurCurve' }));
        }, [curveStatus]);

        function valid(field: keyof IEventCharacteristicFilter) {
            function NullOrNaN(val) {
                return val == null || isNaN(val);
            }

            if (field == 'durationMin')
                return NullOrNaN(props.Settings.EventCharacteristicFilter.durationMin) || (
                    props.Settings.EventCharacteristicFilter.durationMin! >= 0 && props.Settings.EventCharacteristicFilter.durationMin! < 100 &&
                    (NullOrNaN(props.Settings.EventCharacteristicFilter.durationMax) ||
                        props.Settings.EventCharacteristicFilter.durationMax! >= props.Settings.EventCharacteristicFilter.durationMin!));
            if (field == 'durationMax')
                return NullOrNaN(props.Settings.EventCharacteristicFilter.durationMax) || (
                    props.Settings.EventCharacteristicFilter.durationMax! >= 0 && props.Settings.EventCharacteristicFilter.durationMax! < 100 &&
                    (NullOrNaN(props.Settings.EventCharacteristicFilter.durationMin) ||
                        props.Settings.EventCharacteristicFilter.durationMax! >= props.Settings.EventCharacteristicFilter.durationMin!));
            if (field == 'sagMin')
                return NullOrNaN(props.Settings.EventCharacteristicFilter.sagMin) || (
                    props.Settings.EventCharacteristicFilter.sagMin! >= 0 && props.Settings.EventCharacteristicFilter.sagMin! < 1 &&
                    (NullOrNaN(props.Settings.EventCharacteristicFilter.sagMax) ||
                        props.Settings.EventCharacteristicFilter.sagMax! >= props.Settings.EventCharacteristicFilter.sagMin!));
            if (field == 'sagMax')
                return NullOrNaN(props.Settings.EventCharacteristicFilter.sagMax) || (
                    props.Settings.EventCharacteristicFilter.sagMax! >= 0 && props.Settings.EventCharacteristicFilter.sagMax! < 1 &&
                    (NullOrNaN(props.Settings.EventCharacteristicFilter.sagMax) ||
                        props.Settings.EventCharacteristicFilter.sagMax! >= props.Settings.EventCharacteristicFilter.sagMax!));
            if (field == 'swellMin')
                return NullOrNaN(props.Settings.EventCharacteristicFilter.swellMin) || (
                    props.Settings.EventCharacteristicFilter.swellMin! >= 1 && props.Settings.EventCharacteristicFilter.swellMin! < 9999 &&
                    (NullOrNaN(props.Settings.EventCharacteristicFilter.swellMax) ||
                        props.Settings.EventCharacteristicFilter.swellMax! >= props.Settings.EventCharacteristicFilter.swellMin!));
            if (field == 'swellMax')
                return NullOrNaN(props.Settings.EventCharacteristicFilter.swellMax) || (
                    props.Settings.EventCharacteristicFilter.swellMax! >= 1 && props.Settings.EventCharacteristicFilter.swellMax! < 9999 &&
                    (NullOrNaN(props.Settings.EventCharacteristicFilter.swellMin) ||
                        props.Settings.EventCharacteristicFilter.swellMax! >= props.Settings.EventCharacteristicFilter.swellMin!));
            if (field == 'transientMin')
                return NullOrNaN(props.Settings.EventCharacteristicFilter.transientMin) || (
                    props.Settings.EventCharacteristicFilter.transientMin! >= 0 && props.Settings.EventCharacteristicFilter.transientMin! < 9999 &&
                    (NullOrNaN(props.Settings.EventCharacteristicFilter.transientMax) ||
                        props.Settings.EventCharacteristicFilter.transientMax! >= props.Settings.EventCharacteristicFilter.transientMin!));
            if (field == 'transientMax')
                return NullOrNaN(props.Settings.EventCharacteristicFilter.transientMax) || (
                    props.Settings.EventCharacteristicFilter.transientMax! >= 0 && props.Settings.EventCharacteristicFilter.transientMax! < 9999 &&
                    (NullOrNaN(props.Settings.EventCharacteristicFilter.transientMin) ||
                        props.Settings.EventCharacteristicFilter.transientMax! >= props.Settings.EventCharacteristicFilter.transientMin!));

            return true;
        }

        return (
            <>
                <div className="row" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                    <EventCharacteristicFilter setEventFilters={(newCharacteristics, newTypes) => {
                        const newSettings = {...props.Settings};
                        newSettings.Types = newTypes ?? OpenXDAEvents.DefaultDataSetSettings.Types;
                        newSettings.EventCharacteristicFilter = newCharacteristics ?? OpenXDAEvents.DefaultDataSetSettings.EventCharacteristicFilter;
                        props.SetSettings(newSettings);
                    }} eventTypes={types} eventCharacteristicFilter={props.Settings.EventCharacteristicFilter} magDurCurves={curves} eventTypeFilter={props.Settings.Types} />
                </div>
                <div className="row">
                    <div className="col-6">
                        <EventTypeFilter SetSelectedTypeIDs={(newTypes) => {
                            const newSettings = {...props.Settings};
                            newSettings.Types = newTypes;
                            props.SetSettings(newSettings);
                        }} EventTypes={types} SelectedTypeID={props.Settings.Types} />
                    </div>
                    <div className="col-6">
                        <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                            <legend className="w-auto" style={{ fontSize: 'large' }}>Other Filters:</legend>
                            <div className={"row"}>
                                <div className={'col'}>
                                    <NavBarFilterButton Type={'Meter'} OnClick={() => setFilter('Meter')} Data={meterList} />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={'col'}>
                                    <NavBarFilterButton Type={'Asset'} OnClick={() => setFilter('Asset')} Data={assetList} />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={'col'}>
                                    <NavBarFilterButton Type={'AssetGroup'} OnClick={() => setFilter('AssetGroup')} Data={groupList} />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={'col'}>
                                    <NavBarFilterButton Type={'Station'} OnClick={() => setFilter('Station')} Data={locationList} />
                                </div>
                                </div>
                        </fieldset>
                    </div>
                </div>
                <TrenDAPSelectPopup<SystemCenter.Types.DetailedMeter> Table='DetailedMeter' SourceID={props.EventSource.ID} SourceType='event'
                    Show={filter === 'Meter'} Selection={meterList} Type='multiple'
                    OnClose={(selected, conf) => {
                        setFilter('None');
                        if (conf) {
                            const newSettings = { ...props.Settings };
                            newSettings.MeterIDs = selected.map(item => item.ID);
                            props.SetSettings(newSettings);
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
                <TrenDAPSelectPopup<SystemCenter.Types.DetailedAsset> Table='DetailedAsset' SourceID={props.EventSource.ID} SourceType='event'
                    Show={filter === 'Asset'} Selection={assetList} Type='multiple'
                    OnClose={(selected, conf) => {
                        setFilter('None');
                        if (conf) {
                            const newSettings = { ...props.Settings };
                            newSettings.AssetIDs = selected.map(item => item.ID);
                            props.SetSettings(newSettings);
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
                <TrenDAPSelectPopup<OpenXDA.Types.AssetGroup> Table='AssetGroup' SourceID={props.EventSource.ID} SourceType='event'
                    Show={filter === 'AssetGroup'} Selection={groupList} Type='multiple'
                    OnClose={(selected, conf) => {
                        setFilter('None');
                        if (conf) {
                            const newSettings = { ...props.Settings };
                            newSettings.AssetGroupIDs = selected.map(item => item.ID);
                            props.SetSettings(newSettings);
                        }
                    }}
                    TableColumns={[
                        { key: 'Name', field: 'Name', label: 'Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Assets', field: 'Assets', label: 'Assets', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Meters', field: 'Meters', label: 'Meters', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Users', field: 'Users', label: 'Users', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'AssetGroups', field: 'AssetGroups', label: 'SubGroups', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Scroll', label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } }
                    ]} 
                    SearchColumns={[
                        { label: 'Name', key: 'Name', type: 'string', isPivotField: false },
                        { label: 'Number of Meters', key: 'Meters', type: 'integer', isPivotField: false },
                        { label: 'Number of Transmission Assets', key: 'Assets', type: 'integer', isPivotField: false },
                        { label: 'Number of Asset Groups', key: 'AssetGroups', type: 'integer', isPivotField: false },
                        { label: 'Show in PQ Dashboard', key: 'DisplayDashboard', type: 'boolean', isPivotField: false },
                        { label: 'Show in Email Subscription', key: 'DisplayEmail', type: 'boolean', isPivotField: false },
                    ]} DefaultSearchCol={{ label: 'Name', key: 'Name', type: 'string', isPivotField: false }} Title='Filter by Asset Group' />
                <TrenDAPSelectPopup<SystemCenter.Types.DetailedLocation> Table='DetailedLocation' SourceID={props.EventSource.ID} SourceType='event'
                    Show={filter === 'Station'} Selection={locationList} Type='multiple'
                    OnClose={(selected, conf) => {
                        setFilter('None');
                        if (conf) {
                            const newSettings = { ...props.Settings };
                            newSettings.SubstationIDs = selected.map(item => item.ID);
                            props.SetSettings(newSettings);
                        }
                    }}
                    TableColumns={[
                        { key: 'Name', field: 'Name', label: 'Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'LocationKey', field: 'LocationKey', label: 'Key', headerStyle: { width: '30%' }, rowStyle: { width: '30%' } },
                        { key: 'Meters', field: 'Meters', label: 'Meters', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: 'Assets', field: 'Assets', label: 'Assets', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: 'Scroll', label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } }
                    ]} 
                    SearchColumns={[
                        { label: 'Name', key: 'Name', type: 'string', isPivotField: false },
                        { label: 'Key', key: 'LocationKey', type: 'string', isPivotField: false },
                        { label: 'Transmission Asset', key: 'Asset', type: 'string', isPivotField: false },
                        { label: 'Meter', key: 'Meter', type: 'string', isPivotField: false },
                        { label: 'Number of Transmission Assets', key: 'Assets', type: 'integer', isPivotField: false },
                        { label: 'Number of Meters', key: 'Meters', type: 'integer', isPivotField: false },
                        { label: 'Description', key: 'Description', type: 'string', isPivotField: false },
                    ]} DefaultSearchCol={{ label: 'Name', key: 'Name', type: 'string', isPivotField: false }} Title='Filter by Substation' />
            </>
        );

    },
    Load: function (eventSource: EventSourceTypes.IEventSourceView, _dataSet: TrenDAP.iDataSet, setConn: EventSourceTypes.IEventSourceDataSet): Promise<TrenDAP.IEvent[]> {
        return new Promise<TrenDAP.IEvent[]>((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/Query/${setConn.ID}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((xdaEvents: IxdaEvent[]) => {
                const dataSetSettings = EnsureTypeSafety(setConn.Settings, OpenXDAEvents.DefaultDataSetSettings);
                const sourceSettings = EnsureTypeSafety(eventSource.Settings, OpenXDAEvents.DefaultSourceSettings);

                // Settings query params common to all events
                const queryParams: any = {};
                function processArray(array: number[], name: string) {
                    if (array.length > 0 && array.length < 100) array.forEach((arg, index) => queryParams[name + index] = arg);
                }
                processArray(dataSetSettings.MeterIDs, 'meters');
                processArray(dataSetSettings.AssetIDs, 'assets');
                processArray(dataSetSettings.AssetGroupIDs, 'groups');
                processArray(dataSetSettings.SubstationIDs, 'stations');

                queryParams['windowSize'] = 3;
                queryParams['timeWindowUnits'] = 3; // hours

                // Map XDA event to trenDAP event
                const tdapEvents: TrenDAP.IEvent[] = xdaEvents.map(evt => {
                    const startTime = moment.utc(evt.StartTime, xdaServerFormat);
                    queryParams['time'] = startTime.format(encodedTimeFormat);
                    queryParams['date'] = startTime.format(encodedDateFormat);
                    queryParams['eventid'] = evt.ID;

                    const queryUrl = queryString.stringify(queryParams, "&", "=", { encodeURIComponent: queryString.escape });
                    // Regex removes trailing /
                    return {
                        Time: startTime.valueOf(),
                        Duration: moment.utc(evt.EndTime, xdaServerFormat).valueOf() - startTime.valueOf(),
                        Title: evt.Type,
                        Description: `${evt.MeterName} - ${evt.AssetName}`,
                        Link: `${sourceSettings.PQBrowserUrl.replace(/[\/]$/, '')}/eventsearch?${queryUrl}`
                    }
                });
                resolve(tdapEvents);
            }).fail(err => reject(err));
        });
    },
    QuickView: function (eventSource: EventSourceTypes.IEventSourceView, dataSet: TrenDAP.iDataSet, setConn: EventSourceTypes.IEventSourceDataSet): string {
        const dataSetSettings = EnsureTypeSafety(setConn.Settings, OpenXDAEvents.DefaultDataSetSettings);
        const sourceSettings = EnsureTypeSafety(eventSource.Settings, OpenXDAEvents.DefaultSourceSettings);
        const queryParams: any = {};

        // Time filter on the other side takes center time and a unit number
        const time = ComputeTimeCenterAndSize(dataSet, 'hours');
        queryParams['time'] = time.Center.format(encodedTimeFormat);
        queryParams['date'] = time.Center.format(encodedDateFormat);
        queryParams['windowSize'] = time.Size;
        queryParams['timeWindowUnits'] = 3; // hours

        function processArray(array: number[], name: string) {
            if (array.length > 0 && array.length < 100) array.forEach((arg, index) => queryParams[name + index] = arg);
        }
        processArray(dataSetSettings.Types, 'types');
        processArray(dataSetSettings.MeterIDs, 'meters');
        processArray(dataSetSettings.AssetIDs, 'assets');
        processArray(dataSetSettings.AssetGroupIDs, 'groups');
        processArray(dataSetSettings.SubstationIDs, 'stations');

        // Handle Curve Filter
        if (dataSetSettings.EventCharacteristicFilter.curveID != null)
            queryParams['curveID'] = dataSetSettings.EventCharacteristicFilter.curveID;
        queryParams['curveInside'] = dataSetSettings.EventCharacteristicFilter.curveInside;
        queryParams['curveOutside'] = dataSetSettings.EventCharacteristicFilter.curveOutside;

        // Handle types
        queryParams['sagType'] = dataSetSettings.EventCharacteristicFilter.sagType;
        queryParams['swellType'] = dataSetSettings.EventCharacteristicFilter.swellType;
        queryParams['transientType'] = dataSetSettings.EventCharacteristicFilter.transientType;

        // Handle ranges
        if (dataSetSettings.EventCharacteristicFilter?.durationMin != null) queryParams['durationMin'] = dataSetSettings.EventCharacteristicFilter.durationMin;
        if (dataSetSettings.EventCharacteristicFilter?.durationMax != null) queryParams['durationMax'] = dataSetSettings.EventCharacteristicFilter.durationMax;
        if (dataSetSettings.EventCharacteristicFilter?.transientMin != null) queryParams['transientMin'] = dataSetSettings.EventCharacteristicFilter.transientMin;
        if (dataSetSettings.EventCharacteristicFilter?.transientMax != null) queryParams['transientMax'] = dataSetSettings.EventCharacteristicFilter.transientMax;
        if (dataSetSettings.EventCharacteristicFilter?.sagMin != null) queryParams['sagMin'] = dataSetSettings.EventCharacteristicFilter.sagMin;
        if (dataSetSettings.EventCharacteristicFilter?.sagMax != null) queryParams['sagMax'] = dataSetSettings.EventCharacteristicFilter.sagMax;
        if (dataSetSettings.EventCharacteristicFilter?.swellMax != null) queryParams['swellMax'] = dataSetSettings.EventCharacteristicFilter.swellMax;
        if (dataSetSettings.EventCharacteristicFilter?.swellMin != null) queryParams['swellMin'] = dataSetSettings.EventCharacteristicFilter.swellMin;

        queryParams['PhaseAN'] = dataSetSettings.EventCharacteristicFilter.phases.AN;
        queryParams['PhaseBN'] = dataSetSettings.EventCharacteristicFilter.phases.BN;
        queryParams['PhaseCN'] = dataSetSettings.EventCharacteristicFilter.phases.CN;
        queryParams['PhaseAB'] = dataSetSettings.EventCharacteristicFilter.phases.AB;
        queryParams['PhaseBC'] = dataSetSettings.EventCharacteristicFilter.phases.BC;
        queryParams['PhaseCA'] = dataSetSettings.EventCharacteristicFilter.phases.CA;
        queryParams['PhaseABG'] = dataSetSettings.EventCharacteristicFilter.phases.ABG;
        queryParams['PhaseBCG'] = dataSetSettings.EventCharacteristicFilter.phases.BCG;
        queryParams['PhaseABC'] = dataSetSettings.EventCharacteristicFilter.phases.ABC;
        queryParams['PhaseABCG'] = dataSetSettings.EventCharacteristicFilter.phases.ABCG;

        const queryUrl = queryString.stringify(queryParams, "&", "=", { encodeURIComponent: queryString.escape });
        // Regex removes trailing /
        return `${sourceSettings.PQBrowserUrl.replace(/[\/]$/, '')}/eventsearch?${queryUrl}`;
    },
    GetLogo: function (eventSource: EventSourceTypes.IEventSourceView) {
        const sourceSettings = EnsureTypeSafety(eventSource.Settings, OpenXDAEvents.DefaultSourceSettings);
        return `${sourceSettings.PQBrowserUrl.replace(/[\/]$/, '')}/Images/PQBrowserLight.png`;
    },
    TestAuth: function (eventSource: EventSourceTypes.IEventSourceView): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/TestAuth/${eventSource.ID}`,
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
export default OpenXDAEvents;