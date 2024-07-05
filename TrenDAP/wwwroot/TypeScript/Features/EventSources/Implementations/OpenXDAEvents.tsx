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
import _ from 'lodash';
import moment from 'moment';
import queryString from 'querystring';
import { TrenDAP, Redux } from '../../../global';
import { SelectOpenXDA, FetchOpenXDA, SelectOpenXDAStatus } from '../../OpenXDA/OpenXDASlice';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { EventSourceTypes, IEventSource, EnsureTypeSafety } from '../Interface';
import { ComputeTimeCenterAndSize } from '../../DataSets/HelperFunctions';
import { ArrayCheckBoxes, ArrayMultiSelect, Input, Select } from '@gpa-gemstone/react-forms';
import { OpenXDA } from '@gpa-gemstone/application-typings';

const encodedDateFormat = 'MM/DD/YYYY';
const encodedTimeFormat = 'HH:mm:ss.SSS';

interface ISetting { PQBrowserUrl: string }
interface IDatasetSetting {
    // Todo: Replace this with 4 arrays that match eventsearch on sebrowser after we get access to generic slices
    By: 'Asset' | 'Meter', IDs: number[],
    Phases: number[],
    LegacyPhases: { AN: boolean, BN: boolean, CN: boolean, AB: boolean, BC: boolean, CA: boolean, ABG: boolean, BCG: boolean, ABC: boolean, ABCG: boolean },
    Types: number[],
    CurveID: number | null,
    CurveInside: boolean,
    DurationMin: number | null,
    DurationMax: number | null,
    TransientMin: number | null,
    TransientMax: number | null,
    TransientType: 'LL' | 'LN' | 'both',
    SagMin: number | null,
    SagMax: number | null,
    SagType: 'LL' | 'LN' | 'both',
    SwellMin: number | null,
    SwellMax: number | null,
    SwellType: 'LL' | 'LN' | 'both'
}

const OpenXDAEvents: IEventSource<ISetting, IDatasetSetting> = {
    Name: 'OpenXDA',
    DefaultSourceSettings: { PQBrowserUrl: "http://localhost:44368/" },
    DefaultDataSetSettings: {
        By: 'Meter',
        IDs: [],
        Phases: [],
        LegacyPhases: { AN: false, BN: false, CN: false, AB: false, BC: false, CA: false, ABG: false, BCG: false, ABC: false, ABCG: false },
        Types: [],
        DurationMin: null,
        DurationMax: null,
        SwellMin: null,
        SwellMax: null,
        SagMin: null,
        SagMax: null,
        TransientMin: null,
        TransientMax: null,
        CurveID: null,
        CurveInside: true,
        TransientType: 'both',
        SagType: 'both',
        SwellType: 'both'
    },
    ConfigUI: (props: TrenDAP.ISourceConfig<ISetting>) => {
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
    DataSetUI: (props: EventSourceTypes.IEventSourceDataSetProps<ISetting, IDatasetSetting>) => {
        const dispatch = useAppDispatch();
        const phases: OpenXDA.Types.Phase[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'Phase', 'event'));
        const phaseStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'Phase', 'event'));
        const meters: OpenXDA.Types.Meter[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'Meter', 'event'));
        const meterStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'Meter', 'event'));
        const assets: OpenXDA.Types.Asset[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'Asset', 'event'));
        const assetStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'Asset', 'event'));
        const types: OpenXDA.Types.EventType[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'EventType', 'event'));
        const typeStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'EventType', 'event'));
        const curves: any[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.EventSource.ID, 'StandardMagDurCurve', 'event'));
        const curveStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.EventSource.ID, 'StandardMagDurCurve', 'event'));

        React.useEffect(() => {
            const errors: string[] = [];
            if (!valid('DurationMin') || !valid('DurationMax'))
                errors.push('Duration range is not valid.');
            if (!valid('SagMin') || !valid('SagMax'))
                errors.push('Sag range is not valid.');
            if (!valid('SwellMin') || !valid('SwellMax'))
                errors.push('Swell range is not valid.');
            if (!valid('TransientMin') || !valid('TransientMax'))
                errors.push('Transient range is not valid.');
            props.SetErrors(errors);
        }, [props.Settings]);

        React.useEffect(() => {
            if (phaseStatus === 'unitiated' || phaseStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'Phase' }));
        }, [phaseStatus]);

        React.useEffect(() => {
            if (meterStatus === 'unitiated' || meterStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'Meter' }));
        }, [meterStatus]);

        React.useEffect(() => {
            if (assetStatus === 'unitiated' || assetStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'Asset' }));
        }, [assetStatus]);

        React.useEffect(() => {
            if (typeStatus === 'unitiated' || typeStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'EventType' }));
        }, [typeStatus]);

        React.useEffect(() => {
            if (curveStatus === 'unitiated' || curveStatus === 'changed')
                dispatch(FetchOpenXDA({ dataSourceID: props.EventSource.ID, sourceType: 'event', table: 'StandardMagDurCurve' }));
        }, [curveStatus]);

        function valid(field: keyof IDatasetSetting) {
            function NullOrNaN(val) {
                return val == null || isNaN(val);
            }

            if (field == 'DurationMin')
                return NullOrNaN(props.Settings.DurationMin) || (
                    props.Settings.DurationMin >= 0 && props.Settings.DurationMin < 100 &&
                    (NullOrNaN(props.Settings.DurationMax) ||
                        props.Settings.DurationMax >= props.Settings.DurationMin));
            if (field == 'DurationMax')
                return NullOrNaN(props.Settings.DurationMax) || (
                    props.Settings.DurationMax >= 0 && props.Settings.DurationMax < 100 &&
                    (NullOrNaN(props.Settings.DurationMin) ||
                        props.Settings.DurationMax >= props.Settings.DurationMin));
            if (field == 'SagMin')
                return NullOrNaN(props.Settings.SagMin) || (
                    props.Settings.SagMin >= 0 && props.Settings.SagMin < 1 &&
                    (NullOrNaN(props.Settings.SagMax) ||
                        props.Settings.SagMax >= props.Settings.SagMin));
            if (field == 'SagMax')
                return NullOrNaN(props.Settings.SagMax) || (
                    props.Settings.SagMax >= 0 && props.Settings.SagMax < 1 &&
                    (NullOrNaN(props.Settings.SagMax) ||
                        props.Settings.SagMax >= props.Settings.SagMax));
            if (field == 'SwellMin')
                return NullOrNaN(props.Settings.SwellMin) || (
                    props.Settings.SwellMin >= 1 && props.Settings.SwellMin < 9999 &&
                    (NullOrNaN(props.Settings.SwellMax) ||
                        props.Settings.SwellMax >= props.Settings.SwellMin));
            if (field == 'SwellMax')
                return NullOrNaN(props.Settings.SwellMax) || (
                    props.Settings.SwellMax >= 1 && props.Settings.SwellMax < 9999 &&
                    (NullOrNaN(props.Settings.SwellMin) ||
                        props.Settings.SwellMax >= props.Settings.SwellMin));
            if (field == 'TransientMin')
                return NullOrNaN(props.Settings.TransientMin) || (
                    props.Settings.TransientMin >= 0 && props.Settings.TransientMin < 9999 &&
                    (NullOrNaN(props.Settings.TransientMax) ||
                        props.Settings.TransientMax >= props.Settings.TransientMin));
            if (field == 'TransientMax')
                return NullOrNaN(props.Settings.TransientMax) || (
                    props.Settings.TransientMax >= 0 && props.Settings.TransientMax < 9999 &&
                    (NullOrNaN(props.Settings.TransientMin) ||
                        props.Settings.TransientMax >= props.Settings.TransientMin));

            return true;
        }

        function setPhases(record: IDatasetSetting) {
            const phaseFilter = { ...props.Settings.LegacyPhases };
            Object.keys(phaseFilter).forEach(phaseField => {
                const phaseId = phases.find(p => p.Name == phaseField)?.ID ?? -1;
                phaseFilter[phaseField] = (phaseId !== -1) &&
                    (record.Phases.findIndex(p => p == phaseId) !== -1);
            });
            const newRecord: IDatasetSetting = { ...record, LegacyPhases: phaseFilter };
            props.SetSettings(newRecord);
        }

        return (
            <div className="row"style={{ flex: 1, overflow: 'hidden' }}>
                <div className="col" style={{ height: '100%', overflow: 'hidden' }}>
                    <Select<IDatasetSetting> Record={props.Settings} Field="By" Options={[{ Value: 'Meter', Label: 'Meter' }, { Value: 'Asset', Label: 'Asset' }]} Setter={props.SetSettings} />
                    <ArrayMultiSelect<IDatasetSetting> Style={{ height: window.innerHeight - 560 }} Record={props.Settings} Field="IDs" Setter={props.SetSettings} 
                        Options={(props.Settings.By == 'Meter' ? meters?.map(m => ({ Value: m.ID.toString(), Label: m.Name })) : assets?.map(m => ({ Value: m.ID.toString(), Label: m.AssetName }))) ?? []} />
                </div>
                <div className="col">
                    <ArrayCheckBoxes<IDatasetSetting> Record={props.Settings} Checkboxes={types?.map(m => ({ ID: m.ID.toString(), Label: m.Name })) ?? []} Field="Types" Setter={props.SetSettings} />
                    <ArrayCheckBoxes<IDatasetSetting> Record={props.Settings} Checkboxes={phases?.map(m => ({ ID: m.ID.toString(), Label: m.Name })) ?? []} Field="Phases" Setter={setPhases} />
                    <div className="row">
                        <div className={"col-6"}>
                            <form>
                                <div className="form-group">
                                    <div className='input-group input-group-sm' style={{ width: '100%' }}>
                                        <Select<IDatasetSetting> Record={props.Settings} Label='Mag-Dur:' Field='CurveID' Setter={props.SetSettings} EmptyOption={true} EmptyLabel=''
                                            Options={curves.map((v) => (v.Area != null && v.Area.length > 0 ? { Value: v.ID.toString(), Label: v.Name } : null))} />
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input className="form-check-input" type="radio"
                                            onChange={() => props.SetSettings({ ...props.Settings, CurveInside: true })}
                                            checked={props.Settings.CurveInside} />
                                        <label className="form-check-label">Inside</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input className="form-check-input" type="radio"
                                            onChange={() => props.SetSettings({ ...props.Settings, CurveInside: false })}
                                        checked={!props.Settings.CurveInside} />
                                        <label className="form-check-label">Outside</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className={"col-6"}>
                            <form>
                                <label style={{ margin: 0 }}>Sags (p.u.):</label>
                                <div className="form-group">
                                    <div className="row">
                                        <div className='input-group input-group-sm'>
                                            <div className='col' style={{ width: '45%', paddingRight: 0, paddingLeft: 0 }}>
                                                <Input<IDatasetSetting> Record={props.Settings} Label='' Field='SagMin' Setter={props.SetSettings}
                                                    Valid={valid} Feedback={'Min must be less than max and between 0 and 1'} Type='number' Size={'small'} AllowNull={true} />
                                            </div>
                                            <div className="input-group-append" style={{ height: '37px' }}>
                                                <span className="input-group-text"> to </span>
                                            </div>
                                            <div className='col' style={{ width: '45%', paddingLeft: 0, paddingRight: 0 }}>
                                                <Input<IDatasetSetting> Record={props.Settings} Label='' Field='SagMax' Setter={props.SetSettings}
                                                    Valid={valid} Feedback={'Max must be greater than min and between 0 and 1'} Type='number' Size={'small'} AllowNull={true} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-md-center">
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, SagType: 'LL' })}
                                                checked={props.Settings?.SagType === 'LL'} />
                                            <label className="form-check-label">LL</label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, SagType: 'LN' })}
                                                checked={props.Settings?.SagType === 'LN'} />
                                            <label className="form-check-label">LN</label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, SagType: 'both' })}
                                                checked={props.Settings?.SagType === 'both'} />
                                            <label className="form-check-label">Both</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={"col-6"}>
                            <form>
                                <label style={{ margin: 0 }}>Transients (p.u.):</label>
                                <div className="form-group">
                                    <div className="row">
                                        <div className='input-group input-group-sm'>
                                            <div className='col' style={{ width: '45%', paddingRight: 0, paddingLeft: 0 }}>
                                                <Input<IDatasetSetting> Record={props.Settings} Label='' Field='TransientMin' Setter={props.SetSettings}
                                                    Valid={valid} Feedback={'Min must be less than max and between 0 and 9999'} Type='number' Size={'small'} AllowNull={true} />
                                            </div>
                                            <div className="input-group-append" style={{ height: '37px' }}>
                                                <span className="input-group-text"> to </span>
                                            </div>
                                            <div className='col' style={{ width: '45%', paddingLeft: 0, paddingRight: 0 }}>
                                                <Input<IDatasetSetting> Record={props.Settings} Label='' Field='TransientMax' Setter={props.SetSettings}
                                                    Valid={valid} Feedback={'Max must be greater than min and between 0 and 9999'} Type='number' Size={'small'} AllowNull={true} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-md-center">
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, TransientType: 'LL' })}
                                                checked={props.Settings?.TransientType === 'LL'} />
                                            <label className="form-check-label">LL</label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, TransientType: 'LN' })}
                                                checked={props.Settings?.TransientType === 'LN'} />
                                            <label className="form-check-label">LN</label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, TransientType: 'both' })}
                                                checked={props.Settings?.TransientType === 'both'} />
                                            <label className="form-check-label">Both</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className={"col-6"}>
                            <form>
                                <label style={{ margin: 0 }}>Swells (p.u.):</label>
                                <div className="form-group">
                                    <div className="row">
                                        <div className='input-group input-group-sm'>
                                            <div className='col' style={{ width: '45%', paddingRight: 0, paddingLeft: 0 }}>
                                                <Input<IDatasetSetting> Record={props.Settings} Label='' Field='SwellMin' Setter={props.SetSettings}
                                                    Valid={valid} Feedback={'Min must be less than max and between 1 and 9999'} Type='number' Size={'small'} AllowNull={true} />
                                            </div>
                                            <div className="input-group-append" style={{ height: '37px' }}>
                                                <span className="input-group-text"> to </span>
                                            </div>
                                            <div className='col' style={{ width: '45%', paddingLeft: 0, paddingRight: 0 }}>
                                                <Input<IDatasetSetting> Record={props.Settings} Label='' Field='SwellMax' Setter={props.SetSettings}
                                                    Valid={valid} Feedback={'Max must be greater than min and between 1 and 9999'} Type='number' Size={'small'} AllowNull={true} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-md-center">
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, SwellType: 'LL' })}
                                                checked={props.Settings?.SwellType === 'LL'} />
                                            <label className="form-check-label">LL</label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, SwellType: 'LN' })}
                                                checked={props.Settings?.SwellType === 'LN'} />
                                            <label className="form-check-label">LN</label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input className="form-check-input" type="radio"
                                                onChange={() => props.SetSettings({ ...props.Settings, SwellType: 'both' })}
                                                checked={props.Settings?.SwellType === 'both'} />
                                            <label className="form-check-label">Both</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={"col-6"}>
                            <form>
                                <label style={{ margin: 0 }}>Duration (cycle):</label>
                                <div className="form-group">
                                    <div className='input-group input-group-sm'>
                                        <div className='col' style={{ width: '45%', paddingRight: 0, paddingLeft: 0 }}>
                                            <Input<IDatasetSetting> Record={props.Settings} Label='' Field='DurationMin' Setter={props.SetSettings}
                                                Valid={valid} Feedback={'Min must be less than max and between 0 and 100'} Type='number' Size={'small'} AllowNull={true} />
                                        </div>
                                        <div className="input-group-append" style={{ height: '37px' }}>
                                            <span className="input-group-text"> to </span>
                                        </div>
                                        <div className='col' style={{ width: '45%', paddingLeft: 0, paddingRight: 0 }}>
                                            <Input<IDatasetSetting> Record={props.Settings} Label='' Field='DurationMax' Setter={props.SetSettings}
                                                Valid={valid} Feedback={'Max must be greater than min and between 0 and 100'} Type='number' Size={'small'} AllowNull={true} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

    },
    Load: function (_dataSource: EventSourceTypes.IEventSourceView, _dataSet: TrenDAP.iDataSet, setConn: EventSourceTypes.IEventSourceDataSet): Promise<TrenDAP.IEvent[]> {
        return new Promise<TrenDAP.IEvent[]>((resolve, reject) => {
            $.ajax({
                type: "Get",
                url: `${homePath}api/EventSourceDataSet/Query/${setConn.ID}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'text',
                cache: true,
                async: true
            }).done((data: string) => {
                resolve(JSON.parse(data));
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
        processArray(dataSetSettings.IDs, dataSetSettings.By === 'Meter' ? 'meters' : 'assets');

        // Handle Curve Filter
        if (dataSetSettings.CurveID != null)
            queryParams['curveID'] = dataSetSettings.CurveID;
        queryParams['curveInside'] = dataSetSettings.CurveInside;
        queryParams['curveOutside'] = !dataSetSettings.CurveInside;

        // Handle types
        queryParams['sagType'] = dataSetSettings.SagType;
        queryParams['swellType'] = dataSetSettings.SwellType;
        queryParams['transientType'] = dataSetSettings.TransientType;

        // Handle ranges
        if (dataSetSettings.DurationMin != null) queryParams['durationMin'] = dataSetSettings.DurationMin;
        if (dataSetSettings.DurationMax != null) queryParams['durationMax'] = dataSetSettings.DurationMax;
        if (dataSetSettings.TransientMin != null) queryParams['transientMin'] = dataSetSettings.TransientMin;
        if (dataSetSettings.TransientMax != null) queryParams['transientMax'] = dataSetSettings.TransientMax;
        if (dataSetSettings.SagMin != null) queryParams['sagMin'] = dataSetSettings.SagMin;
        if (dataSetSettings.SagMax != null) queryParams['sagMax'] = dataSetSettings.SagMax;
        if (dataSetSettings.SwellMax != null) queryParams['swellMax'] = dataSetSettings.SwellMax;
        if (dataSetSettings.SwellMin != null) queryParams['swellMin'] = dataSetSettings.SwellMin;

        queryParams['PhaseAN'] = dataSetSettings.LegacyPhases.AN;
        queryParams['PhaseBN'] = dataSetSettings.LegacyPhases.BN;
        queryParams['PhaseCN'] = dataSetSettings.LegacyPhases.CN;
        queryParams['PhaseAB'] = dataSetSettings.LegacyPhases.AB;
        queryParams['PhaseBC'] = dataSetSettings.LegacyPhases.BC;
        queryParams['PhaseCA'] = dataSetSettings.LegacyPhases.CA;
        queryParams['PhaseABG'] = dataSetSettings.LegacyPhases.ABG;
        queryParams['PhaseBCG'] = dataSetSettings.LegacyPhases.BCG;
        queryParams['PhaseABC'] = dataSetSettings.LegacyPhases.ABC;
        queryParams['PhaseABCG'] = dataSetSettings.LegacyPhases.ABCG;

        const queryUrl = queryString.stringify(queryParams, "&", "=", { encodeURIComponent: queryString.escape });
        // Regex removes trailing /
        return `${sourceSettings.PQBrowserUrl.replace(/[\/]$/, '')}/eventsearch?${queryUrl}`;
    },
    TestAuth: function (eventSource: EventSourceTypes.IEventSourceView): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `${homePath}api/EventSource/TestAuth/${eventSource.ID}`,
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