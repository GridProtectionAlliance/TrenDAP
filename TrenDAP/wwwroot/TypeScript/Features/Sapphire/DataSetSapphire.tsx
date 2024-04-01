//******************************************************************************************************
//  DataSetSapphire.tsx - Gbtc
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
//  12/03/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, Redux, DataSourceTypes } from '../../global';
import { Select, ArrayCheckBoxes, ArrayMultiSelect, Input } from '@gpa-gemstone/react-forms';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SelectSapphire, FetchSapphire, SelectSapphireStatus } from './SapphireSlice';

const DataSetSapphire: React.FunctionComponent<{ Record: TrenDAP.iDataSet, Data: { DataSource: DataSourceTypes.IDataSourceView, Data: TrenDAP.iSapphireDataSet }, Index: number, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dispatch = useAppDispatch();

    const resolutions: any[] = useAppSelector((state: Redux.StoreState) => SelectSapphire(state, props.Data.DataSource.ID, 'Resolution'));
    const rStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.Data.DataSource.ID, 'Resolution'));

    const phases: any[] = useAppSelector((state: Redux.StoreState) => SelectSapphire(state, props.Data.DataSource.ID, 'Phase'));
    const phStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.Data.DataSource.ID, 'Phase'));
    const meters: any[] = useAppSelector((state: Redux.StoreState) => SelectSapphire(state, props.Data.DataSource.ID, 'Meter'));
    const mStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.Data.DataSource.ID, 'Meter'));
    const channelTypes: any[] = useAppSelector((state: Redux.StoreState) => SelectSapphire(state, props.Data.DataSource.ID, 'ChannelGroupType'));
    const ctStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.Data.DataSource.ID, 'ChannelGroupType'));

    function UpdateDS(...params: { field: keyof TrenDAP.iSapphireDataSet, value: any }[]) {
        let json = JSON.parse(props.Record.JSONString);
        json[props.Index].Data = { ...props.Data.Data };
        for (var index in params)
            json[props.Index].Data[params[index].field] = params[index].value;
        props.SetDataSet({ ...props.Record, JSONString: JSON.stringify(json) });
    }

    React.useEffect(() => {
        if (phStatus != 'unitiated' && phStatus != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.Data.DataSource.ID, table: 'Phase' }));

        return function () {
        }
    }, [phStatus]);

    React.useEffect(() => {
        if (rStatus != 'unitiated' && rStatus != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.Data.DataSource.ID, table: 'Resolution' }));

        return function () {
        }
    }, [rStatus]);

    React.useEffect(() => {
        if (mStatus != 'unitiated' && mStatus != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.Data.DataSource.ID, table: 'Meter' }));

        return function () {
        }
    }, [mStatus]);

    React.useEffect(() => {
        if (ctStatus != 'unitiated' && ctStatus != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroupType' }));

        return function () {
        }
    }, [ctStatus]);

    function TestHarmonics(harmonics: string): boolean {
        let re = /^\d+(?:-\d+)?(?:,\h*\d+(?:-\d+)?)*$/;
        return re.test(harmonics);
    }
    return (
        <form>
            <div className="row">
                <div className="col">
                    <Select<TrenDAP.iSapphireDataSet> Record={props.Data.Data} Field="Aggregate" Options={resolutions.map(m => ({ Value: m.Description, Label: m.DisplayName }))} Setter={(record) => UpdateDS({ field: 'Aggregate', value: record.Aggregate })} />
                    <ArrayMultiSelect<TrenDAP.iSapphireDataSet> Style={{ height: window.innerHeight - 510 }} Record={props.Data.Data} Options={ meters.map(m => ({ Value: m.ID, Label: m.Name }))} Field="IDs" Setter={(record) => UpdateDS({ field: 'IDs', value: record.IDs })} />
                </div>
                <div className="col">
                    <ArrayCheckBoxes<TrenDAP.iSapphireDataSet> Record={props.Data.Data} Checkboxes={phases.map(m => ({ ID: m.ID, Label: m.Name })) ?? []} Field="Phases" Setter={(record) => UpdateDS({ field: 'Phases', value: record.Phases })} />
                    <Input<TrenDAP.iSapphireDataSet> Field='Harmonics' Record={props.Data.Data} Label='Harmonics' Setter={(record) => UpdateDS({ field: 'Harmonics', value: record.Harmonics.replace(' ', '') })} Valid={(field) => TestHarmonics(props.Data.Data.Harmonics) } Feedback='Harmonic groups should be listed by range or index.  eg 1-15,19,23,26-100' Type='text'/>
                    <ArrayMultiSelect<TrenDAP.iSapphireDataSet> Style={{ height: window.innerHeight - 600 }} Record={props.Data.Data} Options={channelTypes.map(m => ({ Value: m.ID, Label: m.DisplayName }))} Field="Types" Setter={(record) => UpdateDS({ field: 'Types', value: record.Types })} />
                    
                </div>
            </div>
        </form>
    );

}

export default DataSetSapphire;