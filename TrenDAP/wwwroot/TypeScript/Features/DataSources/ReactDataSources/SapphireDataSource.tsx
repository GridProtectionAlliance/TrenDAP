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
import { DataSourceTypes, TrenDAP, Redux } from '../../../global';
import { Select, ArrayCheckBoxes, ArrayMultiSelect, Input } from '@gpa-gemstone/react-forms';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { SelectSapphire, FetchSapphire, SelectSapphireStatus } from '../../Sapphire/SapphireSlice';

const SapphireDataSource: DataSourceTypes.IDataSource<{}, TrenDAP.iSapphireDataSet> = {
    Name: 'Sapphire',
    DefaultSourceSettings: {},
    DefaultDataSetSettings: { IDs: [], Phases: [], Types: [], Aggregate: "", Harmonics: "" },
    ConfigUI: () => { return <></>; },
    DataSetUI: (props: DataSourceTypes.IDataSetProps<{}, TrenDAP.iSapphireDataSet>) => {
        const dispatch = useAppDispatch();
        const resolutions: any[] = useAppSelector((state: Redux.StoreState) => SelectSapphire(state, props.DataSource.ID, 'Resolution'));
        const rStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.DataSource.ID, 'Resolution'));

        const phases: any[] = useAppSelector((state: Redux.StoreState) => SelectSapphire(state, props.DataSource.ID, 'Phase'));
        const phStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.DataSource.ID, 'Phase'));
        const meters: any[] = useAppSelector((state: Redux.StoreState) => SelectSapphire(state, props.DataSource.ID, 'Meter'));
        const mStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.DataSource.ID, 'Meter'));
        const channelTypes: any[] = useAppSelector((state: Redux.StoreState) => SelectSapphire(state, props.DataSource.ID, 'ChannelGroupType'));
        const ctStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.DataSource.ID, 'ChannelGroupType'));


        React.useEffect(() => {
            if (phStatus != 'unitiated' && phStatus != 'changed') return;
            dispatch(FetchSapphire({ dataSourceID: props.DataSource.ID, table: 'Phase' }));

        }, [phStatus]);

        React.useEffect(() => {
            if (rStatus != 'unitiated' && rStatus != 'changed') return;
            dispatch(FetchSapphire({ dataSourceID: props.DataSource.ID, table: 'Resolution' }));

        }, [rStatus]);

        React.useEffect(() => {
            if (mStatus != 'unitiated' && mStatus != 'changed') return;
            dispatch(FetchSapphire({ dataSourceID: props.DataSource.ID, table: 'Meter' }));

        }, [mStatus]);

        React.useEffect(() => {
            if (ctStatus != 'unitiated' && ctStatus != 'changed') return;
            dispatch(FetchSapphire({ dataSourceID: props.DataSource.ID, table: 'ChannelGroupType' }));

        }, [ctStatus]);

        function TestHarmonics(harmonics: string): boolean {
            let re = /^\d+(?:-\d+)?(?:,\h*\d+(?:-\d+)?)*$/;
            return re.test(harmonics);
        }

        return (
            <>
                <form>
                    <div className="row">
                        <div className="col">
                            <Select<TrenDAP.iSapphireDataSet> Record={props.DataSetSettings} Field="Aggregate" Options={resolutions.map(m => ({ Value: m.Description, Label: m.DisplayName }))} Setter={props.SetDataSetSettings} />
                            <ArrayMultiSelect<TrenDAP.iSapphireDataSet> Style={{ height: window.innerHeight - 510 }} Record={props.DataSetSettings} Options={meters.map(m => ({ Value: m.ID, Label: m.Name }))} Field="IDs" Setter={props.SetDataSetSettings} />
                        </div>
                        <div className="col">
                            <ArrayCheckBoxes<TrenDAP.iSapphireDataSet> Record={props.DataSetSettings} Checkboxes={phases.map(m => ({ ID: m.ID, Label: m.Name })) ?? []} Field="Phases" Setter={props.SetDataSetSettings} />
                            <Input<TrenDAP.iSapphireDataSet> Field='Harmonics' Record={props.DataSetSettings} Label='Harmonics' Setter={props.SetDataSetSettings} Valid={(field) => TestHarmonics(props.DataSetSettings.Harmonics)} Feedback='Harmonic groups should be listed by range or index.  eg 1-15,19,23,26-100' Type='text' />
                            <ArrayMultiSelect<TrenDAP.iSapphireDataSet> Style={{ height: window.innerHeight - 600 }} Record={props.DataSetSettings} Options={channelTypes.map(m => ({ Value: m.ID, Label: m.DisplayName }))} Field="Types" Setter={props.SetDataSetSettings} />
                        </div>
                    </div>
                </form>
            </>
        );

    },
    LoadDataSet: function (dataSet: TrenDAP.iDataSet): Promise<TrenDAP.iDataSetReturn<TrenDAP.iDataSetReturnType>> {
        throw new Error('Function not implemented.');
    },
    QuickViewDataSet: function (dataSet: TrenDAP.iDataSet): string {
        throw new Error('Function not implemented.');
    },
    TestAuth: function (dataSource: DataSourceTypes.IDataSourceView): boolean {
        throw new Error('Function not implemented.');
    }
}

export default SapphireDataSource;