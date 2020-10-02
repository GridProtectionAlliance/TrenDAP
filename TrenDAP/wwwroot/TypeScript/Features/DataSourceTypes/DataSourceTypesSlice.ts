//******************************************************************************************************
//  DataSourceTypesSlice.ts - Gbtc
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
import { TrenDAP } from '../../global';

export const FetchDataSourceTypes = createAsyncThunk('DataSources/FetchDataSourceTypes', async (_,{ dispatch }) => {
    return await GetDataSourceTypes()
});


export const DataSourceTypesSlice = createSlice({
    name: 'DataSourceTypess',
    initialState: {
        Status: 'unitiated' as TrenDAP.Status,
        DataSourceTypes: [] as TrenDAP.iDataSourceType[],
        Error: null
    },
    reducers: {
        Add: (state, action) => {
            state.DataSourceTypes.push(action.payload);
        },
        AddRange: (state, action) => {
            state = action.payload;
        },
        Remove: state => {

        }
    },
    extraReducers: (builder) => {

        builder.addCase(FetchDataSourceTypes.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;
            state.DataSourceTypes.push(...action.payload);
            FetchDataSourceTypes();
        });
        builder.addCase(FetchDataSourceTypes.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchDataSourceTypes.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });

    }

});

export const { Add, AddRange } = DataSourceTypesSlice.actions;
export default DataSourceTypesSlice.reducer;
export const SelectDataSourceTypes = state => state.DataSourceTypes.DataSourceTypes as TrenDAP.iDataSourceType[]
export const SelectDataSourceTypesStatus = state => state.DataSourceTypes.Status as TrenDAP.Status

function GetDataSourceTypes(): JQuery.jqXHR<TrenDAP.iDataSourceType[]> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/DataSourceType`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}



