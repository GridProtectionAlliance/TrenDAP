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
import moment from 'moment';
import { Select, ArrayCheckBoxes, ArrayMultiSelect } from '@gpa-gemstone/react-forms';
import { OpenXDA } from '@gpa-gemstone/application-typings';
import { DataSourceTypes, TrenDAP, Redux } from '../../../global';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { SelectOpenXDA, FetchOpenXDA, SelectOpenXDAStatus } from '../../OpenXDA/OpenXDASlice';
import { ajax } from 'jquery';


const XDADataSource: DataSourceTypes.IDataSource<{}, TrenDAP.iXDADataSet> = {
    Name: 'TrenDAPDB',
    DefaultSourceSettings: {},
    DefaultDataSetSettings: { By: 'Meter', IDs: [], Phases: [], Groups: [], Types: [], Aggregate: ''},
    ConfigUI: () => { return <></>; },
    DataSetUI: (props: DataSourceTypes.IDataSetProps<{}, TrenDAP.iXDADataSet>) => {
        const dispatch = useAppDispatch();
        const phases: OpenXDA.Types.Phase[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'Phase'));
        const phStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'Phase'));
        const meters: OpenXDA.Types.Meter[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'Meter'));
        const meterStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'Meter'));
        const assets: OpenXDA.Types.Asset[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'Asset'));
        const assetStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'Asset'));

        const channelGroups: any[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'ChannelGroup'));
        const cgStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'ChannelGroup'));

        const channelTypes: any[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSource.ID, 'ChannelGroupType'));
        const cgtStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.DataSource.ID, 'ChannelGroupType'));

        React.useEffect(() => {
            if (phStatus != 'unitiated' && phStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'Phase' }));

            return function () {
            }
        }, [dispatch, phStatus]);

        React.useEffect(() => {
            if (meterStatus != 'unitiated' && meterStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'Meter' }));

            return function () {
            }
        }, [dispatch, meterStatus]);

        React.useEffect(() => {
            if (assetStatus != 'unitiated' && assetStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'Asset' }));

            return function () {
            }
        }, [dispatch, assetStatus]);

        React.useEffect(() => {
            if (cgStatus != 'unitiated' && cgStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'ChannelGroup' }));

            return function () {
            }
        }, [dispatch, cgStatus]);

        React.useEffect(() => {
            if (cgtStatus != 'unitiated' && cgtStatus != 'changed') return;
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSource.ID, table: 'ChannelGroupType' }));

            return function () {
            }
        }, [dispatch, cgtStatus]);

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
                        <ArrayCheckBoxes<TrenDAP.iXDADataSet> Label="Quick Selection" Record={props.DataSetSettings} Checkboxes={channelGroups?.map(m => ({ ID: m.ID, Label: m.Name })) ?? []} Field="Groups" Setter={(record) => {
                            const oldGroups = props.DataSetSettings.Groups;
                            if (oldGroups.length > record.Groups.length) { // something was taken out
                                let a = oldGroups.map(x => record.Groups.indexOf(x));
                                let i = a.indexOf(-1);
                                let newa = props.DataSetSettings.Types.map(t => channelTypes.find(ct => ct.ID === t)).filter(t => t.ChannelGroupID !== oldGroups[i]).map(t => t.ID);
                                const newSettings = { ...props.DataSetSettings };
                                newSettings.Groups = record.Groups;
                                newSettings.Types = newa;
                                props.SetDataSetSettings(newSettings);
                            }
                            else if (oldGroups.length < record.Groups.length) { // something was put in
                                let a = record.Groups.map(x => oldGroups.indexOf(x));
                                let i = a.indexOf(-1);
                                let channelGroupID = record.Groups[i];
                                let newa = [...props.DataSetSettings.Types, ...channelTypes.filter(t => t.ChannelGroupID === channelGroupID).map(t => t.ID)];
                                const newSettings = { ...props.DataSetSettings };
                                newSettings.Groups = record.Groups;
                                newSettings.Types = newa;
                                props.SetDataSetSettings(newSettings);
                            }
                        }} />
                        <ArrayMultiSelect<TrenDAP.iXDADataSet> Style={{ height: window.innerHeight - 520 }} Record={props.DataSetSettings}
                            Options={channelTypes?.map(m => ({ Value: m.ID, Label: m.DisplayName })) ?? []}
                            Field="Types" Setter={props.SetDataSetSettings} />
                    </div>
                </div>
            </form>
        );

    },
    LoadDataSet: function (dataSet: TrenDAP.iDataSet): Promise<TrenDAP.iDataSetReturn<TrenDAP.iDataSetReturnType>> {
        throw new Error('Function not implemented.');
    },
    QuickViewDataSet: function (dataSet: TrenDAP.iDataSet): string {
        throw new Error('Function not implemented.');
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