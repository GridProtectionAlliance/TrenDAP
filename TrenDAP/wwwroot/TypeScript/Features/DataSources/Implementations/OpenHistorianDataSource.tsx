//******************************************************************************************************
//  XDADataSource.tsx - Gbtc
//
//  Copyright � 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  04/10/2024 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************

import { Select, ArrayCheckBoxes, ArrayMultiSelect } from '@gpa-gemstone/react-forms';
import { DataSourceTypes, TrenDAP, Redux, DataSetTypes } from '../../../global';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import * as React from 'react';
import { SelectOpenHistorian, FetchOpenHistorian } from '../../OpenHistorian/OpenHistorianSlice';
import { IDataSource } from '../Interface';


const OpenHistorianDataSource: IDataSource<{}, TrenDAP.iOpenHistorianDataSet> = {
    Name: 'openHistorian',
    DefaultSourceSettings: {},
    DefaultDataSetSettings: { Devices: [], Phases: [], Types: [], Instance: "", Aggregate: '1w'},
    ConfigUI: () => { return <></>; },
    DataSetUI: (props: DataSourceTypes.IDataSourceDataSetProps<{}, TrenDAP.iOpenHistorianDataSet>) => {
        const dispatch = useAppDispatch();
        const devices: Redux.OpenHistorianState = useAppSelector((state: Redux.StoreState) => SelectOpenHistorian(state, props.DataSource.ID));

        React.useEffect(() => {
            if (devices != undefined && devices?.Status != 'unitiated' && devices?.Status != 'changed') return;
            dispatch(FetchOpenHistorian({ dataSourceID: props.DataSource.ID }));

        }, [dispatch, devices?.Status]);

        return (
            <form>
                <div className="row">
                    <div className="col">
                        <ArrayMultiSelect<TrenDAP.iOpenHistorianDataSet> Style={{ height: window.innerHeight - 450 }} Record={props.DataSetSettings} Options={[...new Set(devices?.Measurements.filter(m => {
                            if (props.DataSetSettings.Instance !== 'None')
                                return m.ID.includes(props.DataSetSettings.Instance);
                            else
                                return false
                        }).map(m => m.Device) ?? [])].map(m => ({ Value: m, Label: m }))} Field="Devices" Setter={props.SetDataSetSettings} />
                    </div>
                    <div className="col">
                        <Select<TrenDAP.iOpenHistorianDataSet> Record={props.DataSetSettings} Field="Instance" Options={[{ Value: 'None', Label: 'None' }].concat(devices?.Instances.map(m => ({ Value: m.Acronym, Label: m.Acronym })) ?? [])} Setter={props.SetDataSetSettings} />
                        <Select<TrenDAP.iOpenHistorianDataSet> Record={props.DataSetSettings} Field="Aggregate" Options={[{ Value: '1m', Label: 'Minute' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1M', Label: 'Month' }]} Setter={props.SetDataSetSettings} />
                        <ArrayCheckBoxes<TrenDAP.iOpenHistorianDataSet> Record={props.DataSetSettings} Checkboxes={[{ ID: 'A', Label: 'A' }, { ID: 'B', Label: 'B' }, { ID: 'C', Label: 'C' }, { ID: 'N', Label: 'N' }, { ID: '+', Label: 'Pos' }, { ID: '0', Label: 'Zero' }, { ID: '-', Label: 'Neg' }, { ID: 'None', Label: 'None' }]} Field="Phases" Setter={props.SetDataSetSettings} />
                        <ArrayCheckBoxes<TrenDAP.iOpenHistorianDataSet> Record={props.DataSetSettings} Checkboxes={[{ ID: 'IPHM', Label: 'Current Magnitude' }, { ID: 'IPHA', Label: 'Current Angle' }, { ID: 'VPHM', Label: 'Voltage Magnitude' }, { ID: 'VPHA', Label: 'Voltage Angle' }, { ID: 'FREQ', Label: 'Frequency' }, { ID: 'DFDT', Label: 'DFDT' }, { ID: 'ALOG', Label: 'Analog' }, { ID: 'DIGI', Label: 'Digital' }, { ID: 'CALC', Label: 'Calculated' }]} Field="Types" Setter={props.SetDataSetSettings} />
                    </div>
                </div>
            </form>
        );

    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LoadDataSetMeta: function (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, dataConn: DataSourceTypes.IDataSourceDataSet): Promise<DataSetTypes.IDataSetMetaData[]> {
        throw new Error('Function not implemented.');
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LoadDataSet: function (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, dataConn: DataSourceTypes.IDataSourceDataSet): Promise<DataSetTypes.IDataSetData[]> {
        throw new Error('Function not implemented.');
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TestAuth: function (dataSource: DataSourceTypes.IDataSourceView): Promise<boolean> {
        throw new Error('Function not implemented.');
    }
}

export default OpenHistorianDataSource;