//******************************************************************************************************
//  OpenXDASlice.ts - Gbtc
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
import {ajax } from 'jquery';

export const FetchOpenXDA = createAsyncThunk<string | object, { dataSourceID: number, table: string }, {}>('OpenXDA/FetchOpenXDA', async (ds ,{ dispatch }) => {
    return await GetOpenXDA(ds.dataSourceID, ds.table)
});

export const OpenXDASlice = createSlice({
    name: 'OpenXDA',
    initialState: {} as {
        [instance: number]: { [table: string]: Redux.OpenXDATableSlice }
    },
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(FetchOpenXDA.fulfilled, (state, action) => {
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
        builder.addCase(FetchOpenXDA.pending, (state, action) => {
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
        builder.addCase(FetchOpenXDA.rejected, (state, action) => {
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

export const { } = OpenXDASlice.actions;
export default OpenXDASlice.reducer;
export const SelectOpenXDA = (state, dsid: number, table: string) => (state.OpenXDA[dsid] ? state.OpenXDA[dsid][table].Data : [] ) as Redux.OpenXDATableSlice;
export const SelectOpenXDAStatus = (state, dsid: number, table: string) => (state.OpenXDA[dsid] ? state.OpenXDA[dsid][table]?.Status ?? 'unitiated' : 'unitiated') as TrenDAP.Status

function GetOpenXDA(dataSourceID: number, table: string): JQuery.jqXHR<string> {
    return ajax({
        type: "GET",
        url: `${homePath}api/TrenDAPDB/${dataSourceID}/${table}`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}



