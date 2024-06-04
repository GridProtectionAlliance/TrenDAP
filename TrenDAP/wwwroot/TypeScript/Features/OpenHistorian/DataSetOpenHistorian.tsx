//******************************************************************************************************
//  DataSetOpenHistorian.tsx - Gbtc
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
//  03/03/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, Redux, DataSourceTypes } from '../../global';
import { Select, ArrayCheckBoxes, ArrayMultiSelect } from '@gpa-gemstone/react-forms';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SelectOpenHistorian, FetchOpenHistorian } from './OpenHistorianSlice';
import { OpenHistorian } from '@gpa-gemstone/application-typings';

const DataSetOpenHistorian: React.FunctionComponent<{ Record: TrenDAP.iDataSet, Data: { DataSource: DataSourceTypes.IDataSourceView, Data: TrenDAP.iOpenHistorianDataSet }, Index: number, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dispatch = useAppDispatch();
    const devices: Redux.OpenHistorianState = useAppSelector((state: Redux.StoreState) => SelectOpenHistorian(state, props.Data.DataSource.ID));

    function UpdateDS(...params: { field: keyof TrenDAP.iOpenHistorianDataSet, value: any }[]) {
        /*
        let json = JSON.parse(props.Record.JSONString);
        json[props.Index].Data = { ...props.Data.Data };
        for (var index in params)
            json[props.Index].Data[params[index].field] = params[index].value;
        props.SetDataSet({ ...props.Record, JSONString: JSON.stringify(json) });
        */
    }

    React.useEffect(() => {
        if (devices != undefined && devices?.Status != 'unitiated' && devices?.Status != 'changed') return;
        dispatch(FetchOpenHistorian({ dataSourceID: props.Data.DataSource.ID}));

        return function () {
        }
    }, [dispatch, devices.Status]);

    return (
        <form>
            <div className="row">
                <div className="col">
                    
                    <ArrayMultiSelect<TrenDAP.iOpenHistorianDataSet> Style={{ height: window.innerHeight - 450 }} Record={props.Data.Data} Options={[...new Set(devices?.Measurements.filter(m => {
                        if (props.Data.Data.Instance !== 'None')
                            return m.ID.includes(props.Data.Data.Instance);
                        else
                            return false
                    }).map(m => m.Device) ?? [])].map(m => ({ Value: m, Label: m })) } Field="Devices" Setter={(record) => UpdateDS({ field: 'Devices', value: record.Devices })} />
                </div>
                <div className="col">
                    <Select<TrenDAP.iOpenHistorianDataSet> Record={props.Data.Data} Field="Instance" Options={[{ Value: 'None', Label: 'None'}].concat(devices?.Instances.map(m => ({ Value: m.Acronym, Label: m.Acronym })) ?? [])} Setter={(record) => UpdateDS({ field: 'Instance', value: record.Instance })} />
                    <Select<TrenDAP.iOpenHistorianDataSet> Record={props.Data.Data} Field="Aggregate" Options={[{ Value: '1m', Label: 'Minute' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1M', Label: 'Month' }]} Setter={(record) => UpdateDS({ field: 'Aggregate', value: record.Aggregate })} />
                    <ArrayCheckBoxes<TrenDAP.iOpenHistorianDataSet> Record={props.Data.Data} Checkboxes={[{ ID: 'A', Label: 'A' }, { ID: 'B', Label: 'B' }, { ID: 'C', Label: 'C' }, { ID: 'N', Label: 'N' }, { ID: '+', Label: 'Pos' }, { ID: '0', Label: 'Zero' }, { ID: '-', Label: 'Neg' }, { ID: 'None', Label: 'None' }]} Field="Phases" Setter={(record) => UpdateDS({ field: 'Phases', value: record.Phases })} />
                    <ArrayCheckBoxes<TrenDAP.iOpenHistorianDataSet> Record={props.Data.Data} Checkboxes={[{ ID: 'IPHM', Label: 'Current Magnitude' }, { ID: 'IPHA', Label: 'Current Angle' }, { ID: 'VPHM', Label: 'Voltage Magnitude' }, { ID: 'VPHA', Label: 'Voltage Angle' }, { ID: 'FREQ', Label: 'Frequency' }, { ID: 'DFDT', Label: 'DFDT' }, { ID: 'ALOG', Label: 'Analog' }, { ID: 'DIGI', Label: 'Digital' }, { ID: 'CALC', Label: 'Calculated' }]} Field="Types" Setter={(record) => UpdateDS({ field: 'Types', value: record.Types })} />
                </div>
            </div>
        </form>
    );

}


export default DataSetOpenHistorian;