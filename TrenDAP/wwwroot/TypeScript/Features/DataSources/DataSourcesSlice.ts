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
import { DataSourceTypes, Redux } from '../../global';
import _ from 'lodash';
import $ from 'jquery';

// #region [ Thunks ]
export const FetchDataSources = createAsyncThunk('DataSources/FetchDataSources', async (_) => {
    return await GetDataSources();
});

export const FetchPublicDataSources = createAsyncThunk('DataSources/FetchPublicDataSources', async (_) => {
    return await GetPublicDataSources();
});

export const AddDataSource = createAsyncThunk('DataSources/AddDataSource', async (dataSource: DataSourceTypes.IDataSourceView) => {
    return await PostDataSource(dataSource);
});

export const RemoveDataSource = createAsyncThunk('DataSources/RemoveDataSource', async (dataSource: DataSourceTypes.IDataSourceView) => {
    return await DeleteDataSource(dataSource);
});

export const UpdateDataSource = createAsyncThunk('DataSources/UpdateDataSource', async (dataSource: DataSourceTypes.IDataSourceView) => {
    return await PatchDataSource(dataSource);
});
// #endregion

// #region [ Slice ]
export const DataSourcesSlice = createSlice({
    name: 'DataSources',
    initialState: {
        Status: 'unitiated',
        Data: [],
        Error: null,
        SortField: 'Name',
        Ascending: true,
        PublicStatus: 'unitiated',
        PublicData: []
    } as Redux.PublicPrivateState<DataSourceTypes.IDataSourceView>,
    reducers: {
        Sort: (state, action) => {
            if(state.SortField === action.payload.SortField)
                state.Ascending = !action.payload.Ascending;
            else 
                state.SortField = action.payload.SortField;

            const sorted = _.orderBy(state.Data, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.Data = sorted;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchPublicDataSources.fulfilled, (state, action) => {
            state.PublicStatus = 'idle';
            state.Error = null;
            state.PublicData = action.payload;

        });
        builder.addCase(FetchPublicDataSources.pending, (state, action) => {
            state.PublicStatus = 'loading';
        });
        builder.addCase(FetchPublicDataSources.rejected, (state, action) => {
            state.PublicStatus = 'error';
            state.Error = action.error.message;
        });

        builder.addCase(FetchDataSources.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;

            const sorted = _.orderBy(action.payload, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.Data = sorted;

        });
        builder.addCase(FetchDataSources.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchDataSources.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddDataSource.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(AddDataSource.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddDataSource.fulfilled, (state) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(RemoveDataSource.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(RemoveDataSource.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(RemoveDataSource.fulfilled, (state) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(UpdateDataSource.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(UpdateDataSource.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(UpdateDataSource.fulfilled, (state) => {
            state.Status = 'changed';
            state.Error = null;
        });

    }

});

export const {Sort} = DataSourcesSlice.actions;
export default DataSourcesSlice.reducer; 
// #endregion

// #region [ Selectors ]
export const SelectDataSources = (state: Redux.StoreState) => state.DataSources.Data;
export const SelectDataSourceByID = (state: Redux.StoreState, id) => state.DataSources.Data.find(ds => ds.ID === id);
export const SelectPublicDataSources = (state: Redux.StoreState) => state.DataSources.PublicData;
export const SelectPublicDataSourcesStatus = (state: Redux.StoreState) => state.DataSources.PublicStatus;
export const SelectDataSourcesStatus = (state: Redux.StoreState) => state.DataSources.Status;
export const SelectDataSourcesSortField = (state: Redux.StoreState) => state.DataSources.SortField;
export const SelectDataSourcesAscending = (state: Redux.StoreState) => state.DataSources.Ascending;

// #endregion

// #region [ Async Functions ]

function GetDataSources(): JQuery.jqXHR<DataSourceTypes.IDataSourceView[]> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/DataSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

function GetPublicDataSources(): JQuery.jqXHR<DataSourceTypes.IDataSourceView[]> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/DataSourcePublic`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

function PostDataSource(dataSource: DataSourceTypes.IDataSourceView): JQuery.jqXHR<DataSourceTypes.IDataSourceView> {
    return $.ajax({
        type: "POST",
        url: `${homePath}api/DataSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...dataSource, User: userName }),
        cache: false,
        async: true
    });
}

function DeleteDataSource(dataSource: DataSourceTypes.IDataSourceView): JQuery.jqXHR<DataSourceTypes.IDataSourceView> {
    return $.ajax({
        type: "DELETE",
        url: `${homePath}api/DataSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(dataSource),
        cache: false,
        async: true
    });
}

function PatchDataSource(dataSource: DataSourceTypes.IDataSourceView): JQuery.jqXHR<DataSourceTypes.IDataSourceView> {
    return $.ajax({
        type: "PATCH",
        url: `${homePath}api/DataSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(dataSource),
        cache: false,
        async: true
    });
}

// #endregion
