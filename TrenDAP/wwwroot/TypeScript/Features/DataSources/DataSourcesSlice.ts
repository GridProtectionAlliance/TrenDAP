//******************************************************************************************************
//  DataSourcesSlice.ts - Gbtc
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
//  09/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TrenDAP } from '../../global';

export const FetchDataSources = createAsyncThunk('DataSources/FetchDataSources', async () => {
    return await GetDataSources()
});

export const DataSourcesSlice = createSlice({
    name: 'DataSources',
    initialState: [] as TrenDAP.iDataSouce[],
    reducers: {
        Add: (state, action) => {
            state.push(action.payload);
        },
        AddRange: (state, action) => {
            state = action.payload;
        },
        Remove: state => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchDataSources.fulfilled, (state, action) => {
            state.push(...action['payload']);
        });
    }

});

export const { Add, AddRange } = DataSourcesSlice.actions;
export default DataSourcesSlice.reducer;
export const SelectDataSources = state => state

function GetDataSources(): JQuery.jqXHR<TrenDAP.iDataSouce[]> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/DataSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

