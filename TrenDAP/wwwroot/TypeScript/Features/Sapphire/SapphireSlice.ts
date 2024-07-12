//******************************************************************************************************
//  SapphireSlice.ts - Gbtc
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
import { Redux, TrenDAP } from '../../global';
import $ from 'jquery';

export const FetchSapphire = createAsyncThunk<string | object, { dataSourceID: number, table: string }, {}>('Sapphire/FetchSapphire', async (ds) => {
    return await GetSapphire(ds.dataSourceID, ds.table)
});

export const SapphireSlice = createSlice({
    name: 'Sapphire',
    initialState: {} as {
        [instance: number]: { [table: string]: Redux.SapphireTableSlice }
    },
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(FetchSapphire.fulfilled, (state, action) => {
            if (state[action.meta.arg.dataSourceID] === undefined) {
                state[action.meta.arg.dataSourceID] = {};
            }

            if (state[action.meta.arg.dataSourceID][action.meta.arg.table] === undefined) {
                state[action.meta.arg.dataSourceID][action.meta.arg.table] = {
                    Status: 'unitiated' as TrenDAP.Status,
                    Data: [] as any,
                    Error: null
                };
            }

            state[action.meta.arg.dataSourceID][action.meta.arg.table].Status = 'idle';
            state[action.meta.arg.dataSourceID][action.meta.arg.table].Error = null;
            if (typeof (action.payload) === "string")
                state[action.meta.arg.dataSourceID][action.meta.arg.table].Data.push(...JSON.parse(action.payload));
            else if (typeof (action.payload) === "object")
                state[action.meta.arg.dataSourceID][action.meta.arg.table].Data = action.payload as any[];
        });
        builder.addCase(FetchSapphire.pending, (state, action) => {
            if (state[action.meta.arg.dataSourceID] === undefined) {
                state[action.meta.arg.dataSourceID] = {};
            }

            if (state[action.meta.arg.dataSourceID][action.meta.arg.table] === undefined) {
                state[action.meta.arg.dataSourceID][action.meta.arg.table] = {
                    Status: 'unitiated' as TrenDAP.Status,
                    Data: [] as any,
                    Error: null
                };
            }


            state[action.meta.arg.dataSourceID][action.meta.arg.table].Status = 'loading';
        });
        builder.addCase(FetchSapphire.rejected, (state, action) => {
            if (state[action.meta.arg.dataSourceID] === undefined) {
                state[action.meta.arg.dataSourceID] = {};
            }

            if (state[action.meta.arg.dataSourceID][action.meta.arg.table] === undefined) {
                state[action.meta.arg.dataSourceID][action.meta.arg.table] = {
                    Status: 'unitiated' as TrenDAP.Status,
                    Data: [] as any,
                    Error: null
                };
            }

            state[action.meta.arg.dataSourceID][action.meta.arg.table].Status = 'error';
            state[action.meta.arg.dataSourceID][action.meta.arg.table].Error = action.error.message;
        });

    }

});

export const { } = SapphireSlice.actions;
export default SapphireSlice.reducer;
export const SelectSapphire = (state: Redux.StoreState, dsid: number, table: string) => (state.Sapphire[dsid] ? state.Sapphire[dsid][table]?.Data ?? [] : [] );
export const SelectSapphireStatus = (state: Redux.StoreState, dsid: number, table: string) => (state.Sapphire[dsid] ? state.Sapphire[dsid][table]?.Status ?? 'unitiated' : 'unitiated') as TrenDAP.Status
export const NewSapphireDataSet = () => ({ IDs: [], Phases: [], Types: [], Aggregate: 'IS10MIN', Harmonics: '0-100' }) as TrenDAP.iSapphireDataSet;

function GetSapphire(dataSourceID: number, table: string): JQuery.jqXHR<string> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/Sapphire/${dataSourceID}/${table}`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}



