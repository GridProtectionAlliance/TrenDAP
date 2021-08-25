//******************************************************************************************************
//  OpenHistorianSlice.ts - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  09/24/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TrenDAP, Redux } from '../../global';
import { OpenHistorian } from '@gpa-gemstone/application-typings';
import {ajax, JQuery } from 'jquery';

export const FetchOpenHistorian = createAsyncThunk('OpenHistorian/FetchOpenHistorian', async (ds: { dataSourceID: number },{ dispatch }) => {
    return await GetOpenHistorian(ds.dataSourceID)
});


export const OpenHistorianSlice = createSlice({
    name: 'OpenHistorian',
    initialState: [] as { ID: number, State: Redux.OpenHistorianState }[],
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(FetchOpenHistorian.fulfilled, (state, action) => {
            const instances:OpenHistorian.Types.iHistorian[] = typeof (action.payload.Instances) === 'string' ? JSON.parse(action.payload.Instances) : action.payload.Instances;
            const json: OpenHistorian.Types.iActiveMeasurement[] = typeof (action.payload.MetaData) === 'string' ? JSON.parse(action.payload.MetaData) : action.payload.MetaData;

            let obj = state.find(s => s.ID === action.meta.arg.dataSourceID);
            let s = {
                Instances: instances,
                Status: 'idle',
                Measurements: json,
                Error: null
            } as Redux.OpenHistorianState;

            if (obj !== undefined)
                obj.State = s;
            else
                state.push({ ID: action.meta.arg.dataSourceID, State: s });


        });
        builder.addCase(FetchOpenHistorian.pending, (state, action) => {
            let obj = state.find(s => s.ID === action.meta.arg.dataSourceID);
            let s = {
                Instances: [],
                Status: 'loading',
                Measurements: [],
                Error: null
            } as Redux.OpenHistorianState;

            if (obj !== undefined)
                obj.State = s;
            else
                state.push({ ID: action.meta.arg.dataSourceID, State: s });


        });
        builder.addCase(FetchOpenHistorian.rejected, (state, action) => {
            let obj = state.find(s => s.ID === action.meta.arg.dataSourceID);
            let s = {
                Instances: [],
                Status: 'error',
                Measurements: [],
                Error: action.error.message
            } as Redux.OpenHistorianState;

            if (obj !== undefined)
                obj.State = s;
            else
                state.push({ ID: action.meta.arg.dataSourceID, State: s });
        });

    }

});

export const { } = OpenHistorianSlice.actions;
export default OpenHistorianSlice.reducer;
export const SelectOpenHistorian = (state: Redux.StoreState, dsid: number) => state.OpenHistorian.find(s => s.ID === dsid)?.State;
export const SelectOpenHistorianStatus = (state: Redux.StoreState, dsid: number) => state.OpenHistorian.find(s => s.ID === dsid)?.State.Status
export const SelectNewOpenHistorianDataSet = () => ({Devices: [], Aggregate: '1d', Phases: [], Types: [], Instance: '' }) as TrenDAP.iOpenHistorianDataSet;

function GetOpenHistorian(dataSourceID: number): JQuery.jqXHR<string> {
    return new Promise(async (res, rej) => {
        let instances = await ajax({
            type: "GET",
            url: `${homePath}api/TrenDAPDB/${dataSourceID}/GetInstances`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        })

        let table = await ajax({
            type: "GET",
            url: `${homePath}api/TrenDAPDB/${dataSourceID}/GetMetaData`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        })
        res({MetaData: table, Instances: instances})
    });
}





