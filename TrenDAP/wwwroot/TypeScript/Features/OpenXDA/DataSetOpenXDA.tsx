﻿//******************************************************************************************************
//  DataSetOpenXDA.tsx - Gbtc
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
//  08/16/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, Redux, DataSourceTypes } from '../../global';
import { Select, ArrayCheckBoxes, ArrayMultiSelect } from '@gpa-gemstone/react-forms';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SelectOpenXDA, FetchOpenXDA, SelectOpenXDAStatus } from '../OpenXDA/OpenXDASlice';
import moment from 'moment';
import { OpenXDA } from '@gpa-gemstone/application-typings';

const DataSetOpenXDA: React.FunctionComponent<{ Record: TrenDAP.iDataSet, Data: { DataSource: DataSourceTypes.IDataSourceView, Data: TrenDAP.iXDADataSet }, Index: number, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dispatch = useAppDispatch();
    const phases: OpenXDA.Types.Phase[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'Phase'));
    const phStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.Data.DataSource.ID, 'Phase'));
    const meters: OpenXDA.Types.Meter[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'Meter'));
    const meterStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.Data.DataSource.ID, 'Meter'));
    const assets: OpenXDA.Types.Asset[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'Asset'));
    const assetStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.Data.DataSource.ID, 'Asset'));

    const channelGroups: any[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'ChannelGroup'));
    const cgStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.Data.DataSource.ID, 'ChannelGroup'));

    const channelTypes: any[] = useAppSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'ChannelGroupType'));
    const cgtStatus: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectOpenXDAStatus(state, props.Data.DataSource.ID, 'ChannelGroupType'));


    function UpdateDS(...params: { field: keyof TrenDAP.iXDADataSet, value: any }[]) {
        let json = JSON.parse(props.Record.JSONString);
        json[props.Index].Data = { ...props.Data.Data };
        for (var index in params)
            json[props.Index].Data[params[index].field] = params[index].value;
        props.SetDataSet({ ...props.Record, JSONString: JSON.stringify(json) });
    }

    React.useEffect(() => {
        if (phStatus != 'unitiated' && phStatus != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'Phase' }));

        return function () {
        }
    }, [dispatch, phStatus]);

    React.useEffect(() => {
        if (meterStatus != 'unitiated' && meterStatus != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'Meter' }));

        return function () {
        }
    }, [dispatch, meterStatus]);

    React.useEffect(() => {
        if ( assetStatus != 'unitiated' && assetStatus != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'Asset' }));

        return function () {
        }
    }, [dispatch, assetStatus]);

    React.useEffect(() => {
        if (cgStatus != 'unitiated' && cgStatus != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroup' }));

        return function () {
        }
    }, [dispatch, cgStatus]);

    React.useEffect(() => {
        if (cgtStatus != 'unitiated' && cgtStatus != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroupType' }));

        return function () {
        }
    }, [dispatch, cgtStatus]);

    return (
        <form>
            <div className="row">
                <div className="col">
                    <Select<TrenDAP.iXDADataSet> Record={props.Data.Data} Field="Aggregate" Options={[{ Value: '', Label: 'None' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1w', Label: 'Week' }]} Setter={(record) => UpdateDS({ field: 'Aggregate', value: record.Aggregate })} />
                    <Select<TrenDAP.iXDADataSet> Record={props.Data.Data} Field="By" Options={[{ Value: 'Meter', Label: 'Meter' }, { Value: 'Asset', Label: 'Asset' }]} Setter={(record) => UpdateDS({ field: 'By', value: record.By }, { field: 'IDs', value: [] })} />
                    <ArrayMultiSelect<TrenDAP.iXDADataSet> Style={{ height: window.innerHeight - 560 }} Record={props.Data.Data} Options={(props.Data.Data.By == 'Meter' ? meters?.map(m => ({ Value: m.ID.toString(), Label: m.Name })) : assets?.map(m => ({ Value: m.ID.toString(), Label: m.AssetName }))) ?? []} Field="IDs" Setter={(record) => UpdateDS({ field: 'IDs', value: record.IDs })} />
                </div>
                <div className="col">
                    <ArrayCheckBoxes<TrenDAP.iXDADataSet> Record={props.Data.Data} Checkboxes={phases?.map(m => ({ ID: m.ID.toString(), Label: m.Name })) ?? []} Field="Phases" Setter={(record) => UpdateDS({ field: 'Phases', value: record.Phases })} />
                    <ArrayCheckBoxes<TrenDAP.iXDADataSet> Label="Quick Selection" Record={props.Data.Data} Checkboxes={channelGroups?.map(m => ({ ID: m.ID, Label: m.Name })) ?? []} Field="Groups" Setter={(record) => {
                        const oldGroups = props.Data.Data.Groups;
                        if (oldGroups.length > record.Groups.length) { // something was taken out
                            let a = oldGroups.map(x => record.Groups.indexOf(x));
                            let i = a.indexOf(-1);
                            let channelGroupID = oldGroups[i];
                            let newa = props.Data.Data.Types.map(t => channelTypes.find(ct => ct.ID === t)).filter(t => t.ChannelGroupID !== oldGroups[i]).map(t => t.ID);
                            UpdateDS({ field: 'Groups', value: record.Groups }, { field: 'Types', value: newa });
                        }
                        else if (oldGroups.length < record.Groups.length) { // something was put in
                            let a = record.Groups.map(x => oldGroups.indexOf(x));
                            let i = a.indexOf(-1);
                            let channelGroupID = record.Groups[i];
                            let newa = [...props.Data.Data.Types, ...channelTypes.filter(t => t.ChannelGroupID === channelGroupID).map(t => t.ID)];
                            UpdateDS({ field: 'Groups', value: record.Groups }, { field: 'Types', value: newa });
                        }
                        else {  // this probably can't happen, but means nothing changed

                        }


                    }} />
                    <ArrayMultiSelect<TrenDAP.iXDADataSet> Style={{ height: window.innerHeight - 520 }} Record={props.Data.Data} Options={channelTypes?.map(m => ({ Value: m.ID, Label: m.DisplayName })) ?? []} Field="Types" Setter={(record) => UpdateDS({ field: 'Types', value: record.Types })} />
                </div>
            </div>
        </form>
    );

}

function CreatePost(dataSet: TrenDAP.iDataSet, data: TrenDAP.iXDADataSet)
{
    let startTime = moment(dataSet.From);
    let endTime = moment(dataSet.To);
    if (dataSet.Context == "Relative") {
        endTime = moment();
        startTime = moment();
        if (dataSet.RelativeWindow == "Day")
            startTime.add('days', -dataSet.RelativeValue);
        else if (dataSet.RelativeWindow == "Week")
            startTime.add('days', -dataSet.RelativeValue * 7);
        else if (dataSet.RelativeWindow == "Month")
            startTime.add('months', -dataSet.RelativeValue);
        else
            startTime.add('years', -dataSet.RelativeValue);
    }

    return {
        By : data.By,
        IDs : data.IDs,
        Phases : data.Phases,
        Groups : data.Groups,
        Types : data.Types,
        StartTime : startTime,
        EndTime : endTime,
        Hours : dataSet.Hours,
        Days : dataSet.Days,
        Weeks: dataSet.Weeks,
        Months: dataSet.Months,
        Aggregate: data.Aggregate
    };


}



export default DataSetOpenXDA;