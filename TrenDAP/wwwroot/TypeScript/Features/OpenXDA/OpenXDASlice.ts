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
import $ from 'jquery';
import { Search } from '@gpa-gemstone/react-interactive';

export const FetchOpenXDA = createAsyncThunk<string | object, { dataSourceID: number, table: string, sourceType?: 'event' | 'data' }, {}>('OpenXDA/FetchOpenXDA', async (ds ,{ dispatch }) => {
    return await GetOpenXDA(ds.dataSourceID, ds.sourceType ?? 'data', ds.table)
});

export const SearchOpenXDA = createAsyncThunk<string | object, { dataSourceID: number, table: string, filter: Search.IFilter<any>[], sourceType?: 'event' | 'data' }, {}>('OpenXDA/SearchOpenXDA', async (ds, { dispatch }) => {
    return await PostOpenXDA(ds.dataSourceID, ds.sourceType ?? 'data', ds.table, ds.filter)
});

const getNewTable = () => ({
    Status: 'unitiated' as TrenDAP.Status,
    Data: [] as any,
    SearchStatus: 'unitiated' as TrenDAP.Status,
    SearchData: [] as any
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
            const key = action.meta.arg.dataSourceID + (action.meta.arg.sourceType ?? 'data');

            if (state[key] === undefined) {
                state[key] = {};
            }

            if (state[key][action.meta.arg.table] === undefined)
                state[key][action.meta.arg.table] = getNewTable();

            state[key][action.meta.arg.table].Status = 'idle';
            if (typeof (action.payload) === "string")
                state[key][action.meta.arg.table].Data.push(...JSON.parse(action.payload));
            else if (typeof (action.payload) === "object")
                state[key][action.meta.arg.table].Data = action.payload as any[];
        });
        builder.addCase(FetchOpenXDA.pending, (state, action) => {
            const key = action.meta.arg.dataSourceID + (action.meta.arg.sourceType ?? 'data');

            if (state[key] === undefined) {
                state[key] = {};
            }

            if (state[key][action.meta.arg.table] === undefined)
                state[key][action.meta.arg.table] = getNewTable();

            state[key][action.meta.arg.table].Status = 'loading';
        });
        builder.addCase(FetchOpenXDA.rejected, (state, action) => {
            const key = action.meta.arg.dataSourceID + (action.meta.arg.sourceType ?? 'data');

            if (state[key] === undefined) {
                state[key] = {};
            }

            if (state[key][action.meta.arg.table] === undefined)
                state[key][action.meta.arg.table] = getNewTable();

            state[key][action.meta.arg.table].Status = 'error';
            console.error(action.error.message);
        });

        builder.addCase(SearchOpenXDA.fulfilled, (state, action) => {
            const key = action.meta.arg.dataSourceID + (action.meta.arg.sourceType ?? 'data');

            if (state[key] === undefined) {
                state[key] = {};
            }

            if (state[key][action.meta.arg.table] === undefined)
                state[key][action.meta.arg.table] = getNewTable();

            state[key][action.meta.arg.table].SearchStatus = 'idle';
            if (typeof (action.payload) === "string")
                state[key][action.meta.arg.table].SearchData.push(...JSON.parse(action.payload));
            else if (typeof (action.payload) === "object")
                state[key][action.meta.arg.table].SearchData = action.payload as any[];
        });
        builder.addCase(SearchOpenXDA.pending, (state, action) => {
            const key = action.meta.arg.dataSourceID + (action.meta.arg.sourceType ?? 'data');

            if (state[key] === undefined) {
                state[key] = {};
            }

            if (state[key][action.meta.arg.table] === undefined)
                state[key][action.meta.arg.table] = getNewTable();

            state[key][action.meta.arg.table].SearchStatus = 'loading';
        });
        builder.addCase(SearchOpenXDA.rejected, (state, action) => {
            const key = action.meta.arg.dataSourceID + (action.meta.arg.sourceType ?? 'data');

            if (state[key] === undefined) {
                state[key] = {};
            }

            if (state[key][action.meta.arg.table] === undefined)
                state[key][action.meta.arg.table] = getNewTable();

            state[key][action.meta.arg.table].SearchStatus = 'error';
            console.error(action.error.message);
        });

    }

});

export const { } = OpenXDASlice.actions;
export default OpenXDASlice.reducer;
export const SelectOpenXDA = (state: Redux.StoreState, dsid: number, table: string, type?: 'event' | 'data') => (state.OpenXDA[dsid + (type ?? 'data')] ? state.OpenXDA[dsid + (type ?? 'data')][table].Data : [] ) ;
export const SelectOpenXDAStatus = (state: Redux.StoreState, dsid: number, table: string, type?: 'event' | 'data') => (state.OpenXDA[dsid + (type ?? 'data')] ? state.OpenXDA[dsid + (type ?? 'data')][table]?.Status ?? 'unitiated' : 'unitiated') as TrenDAP.Status
export const SelectSearchOpenXDA = (state: Redux.StoreState, dsid: number, table: string, type?: 'event' | 'data') => (state.OpenXDA[dsid + (type ?? 'data')] ? state.OpenXDA[dsid + (type ?? 'data')][table].SearchData : []);
export const SelectSearchOpenXDAStatus = (state: Redux.StoreState, dsid: number, table: string, type?: 'event' | 'data') => (state.OpenXDA[dsid + (type ?? 'data')] ? state.OpenXDA[dsid + (type ?? 'data')][table]?.SearchStatus ?? 'unitiated' : 'unitiated') as TrenDAP.Status

function GetOpenXDA(sourceID: number, type: 'event' | 'data',  table: string): JQuery.jqXHR<string> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/${type === 'data' ? 'TrenDAPDB' : 'OpenXDA'}/${sourceID}/${table}`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}
function PostOpenXDA(sourceID: number, type: 'event' | 'data', table: string, filters: Search.IFilter<any>[]): JQuery.jqXHR<string> {
    return $.ajax({
        type: "Post",
        url: `${homePath}api/${type === 'data' ? 'TrenDAPDB' : 'OpenXDA'}/${sourceID}/${table}`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        // Todo: If there is no ID col, this won't work. Every single one does, but this should still be more resilient
        data: JSON.stringify({ Searches: filters, OrderBy: "ID", Ascending: true }),
        cache: true,
        async: true
    });
}



