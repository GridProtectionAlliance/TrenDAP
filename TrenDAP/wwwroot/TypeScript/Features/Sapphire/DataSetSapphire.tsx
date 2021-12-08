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
import { TrenDAP, Redux } from '../../global';
import { Select, ArrayCheckBoxes, ArrayMultiSelect } from '@gpa-gemstone/react-forms';
import { useSelector, useDispatch } from 'react-redux';
import { SelectSapphire, FetchSapphire } from './SapphireSlice';

const DataSetSapphire: React.FunctionComponent<{ Record: TrenDAP.iDataSet, Data: { DataSource: TrenDAP.iDataSource, Data: TrenDAP.iSapphireDataSet }, Index: number, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dispatch = useDispatch();
    const phases = useSelector((state: Redux.StoreState) => SelectSapphire(state, props.Data.DataSource.ID, 'Phase'));
    const meters = useSelector((state: Redux.StoreState) => SelectSapphire(state, props.Data.DataSource.ID, 'Meter'));
    const channelTypes = useSelector((state: Redux.StoreState) => SelectSapphire(state, props.Data.DataSource.ID, 'ChannelGroupType'));

    function UpdateDS(...params: { field: keyof TrenDAP.iSapphireDataSet, value: any }[]) {
        let json = JSON.parse(props.Record.JSONString);
        json[props.Index].Data = { ...props.Data.Data };
        for (var index in params)
            json[props.Index].Data[params[index].field] = params[index].value;
        props.SetDataSet({ ...props.Record, JSONString: JSON.stringify(json) });
    }

    React.useEffect(() => {
        if (phases != undefined && phases?.Status != 'unitiated' && phases?.Status != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.Data.DataSource.ID, table: 'Phase' }));

        return function () {
        }
    }, [dispatch, phases?.Status]);

    React.useEffect(() => {
        if (meters != undefined && meters?.Status != 'unitiated' && meters?.Status != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.Data.DataSource.ID, table: 'Meter' }));

        return function () {
        }
    }, [dispatch, meters?.Status]);

    React.useEffect(() => {
        if (channelTypes != undefined && channelTypes?.Status != 'unitiated' && channelTypes?.Status != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroupType' }));

        return function () {
        }
    }, [dispatch, channelTypes?.Status]);

    return (
        <form>
            <div className="row">
                <div className="col">
                    <Select<TrenDAP.iSapphireDataSet> Record={props.Data.Data} Field="Aggregate" Options={[{ Value: '', Label: 'None' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1w', Label: 'Week' }]} Setter={(record) => UpdateDS({ field: 'Aggregate', value: record.Aggregate })} />
                    <ArrayMultiSelect<TrenDAP.iSapphireDataSet> Style={{ height: window.innerHeight - 510 }} Record={props.Data.Data} Options={ meters?.Data.map(m => ({ Value: m.ID, Label: m.Name })) ?? []} Field="IDs" Setter={(record) => UpdateDS({ field: 'IDs', value: record.IDs })} />
                </div>
                <div className="col">
                    <ArrayCheckBoxes<TrenDAP.iSapphireDataSet> Record={props.Data.Data} Checkboxes={phases?.Data.map(m => ({ ID: m.ID, Label: m.Name })) ?? []} Field="Phases" Setter={(record) => UpdateDS({ field: 'Phases', value: record.Phases })} />
                    <ArrayMultiSelect<TrenDAP.iSapphireDataSet> Style={{ height: window.innerHeight - 520 }} Record={props.Data.Data} Options={channelTypes?.Data.map(m => ({ Value: m.ID, Label: m.DisplayName })) ?? []} Field="Types" Setter={(record) => UpdateDS({ field: 'Types', value: record.Types })} />
                    
                </div>
            </div>
        </form>
    );

}

export default DataSetSapphire;