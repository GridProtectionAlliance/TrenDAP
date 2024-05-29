//******************************************************************************************************
//  DataSourceDataSetsSlice.ts - Gbtc
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
//  04/04/2020 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Redux, DataSourceTypes } from '../../global';
import _ from 'lodash';
import $ from 'jquery';

// #region [ Consts ]
const blankConnection: DataSourceTypes.IDataSourceDataSet = {
    ID: -1, Settings: '{}', DataSourceID: -1, DataSetID: -1
}
// #endregion

// #region [ Thunks ]
export const FetchDataSourceDataSets = createAsyncThunk('DataSourceDataSets/FetchDataSourceDataSets', async (_, { dispatch }) => {
    return await GetDataSourceDataSets();
});

export const AddDataSourceDataSet = createAsyncThunk('DataSourceDataSets/AddDataSourceDataSet', async (DataSet: DataSourceTypes.IDataSourceDataSet, { dispatch }) => {
    return await PostDataSourceDataSet(DataSet);
});

export const RemoveDataSourceDataSet = createAsyncThunk('DataSourceDataSets/RemoveDataSourceDataSet', async (DataSet: DataSourceTypes.IDataSourceDataSet, { dispatch }) => {
    return await DeleteDataSourceDataSet(DataSet);
});

export const UpdateDataSourceDataSet = createAsyncThunk('DataSourceDataSets/UpdateDataSourceDataSet', async (DataSet: DataSourceTypes.IDataSourceDataSet, { dispatch }) => {
    return await PatchDataSourceDataSet(DataSet);
});

// #endregion

// #region [ Slice ]
export const DataSourceDataSetSlice = createSlice({
    name: 'DataSourceDataSets',
    initialState: {
        Status: 'unitiated',
        Data: [],
        Error: null,
        SortField: 'ID',
        Ascending: false,
        Record: blankConnection
    } as Redux.State<DataSourceTypes.IDataSourceDataSet>,
    reducers: {
        Sort: (state, action) => {
            if (state.SortField === action.payload.SortField)
                state.Ascending = !action.payload.Ascending;
            else
                state.SortField = action.payload.SortField;

            const sorted = _.orderBy(state.Data, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.Data = sorted as DataSourceTypes.IDataSourceDataSet[];
        },
        New: (state, action) => {
            state.Record = blankConnection
        },
        SetRecordByID: (state, action) => {
            const record = state.Data.find(ds => ds.ID === action.payload);
            if (record !== undefined)
                state.Record = record;
        },
        Update: (state, action) => {
            state.Record = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchDataSourceDataSets.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;
            const sorted = _.orderBy(action.payload, [state.SortField], [state.Ascending ? "asc" : "desc"]) as DataSourceTypes.IDataSourceDataSet[];
            state.Data = sorted;
        });
        builder.addCase(FetchDataSourceDataSets.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchDataSourceDataSets.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;
        });

        builder.addCase(AddDataSourceDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(AddDataSourceDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddDataSourceDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });

        builder.addCase(RemoveDataSourceDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(RemoveDataSourceDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(RemoveDataSourceDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });

        builder.addCase(UpdateDataSourceDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(UpdateDataSourceDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(UpdateDataSourceDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
    }
});
// #endregion

// #region [ Selectors ]
export const { Sort, New, Update, SetRecordByID } = DataSourceDataSetSlice.actions;
export default DataSourceDataSetSlice.reducer; 
export const SelectDataSourceDataSets = (state: Redux.StoreState) => state.DataSourceDataSets.Data;
export const SelectRecord = (state: Redux.StoreState) => state.DataSourceDataSets.Record;
export const SelectNewDataSourceDataSet = ()  => blankConnection;
export const SelectDataSourceDataSetStatus = (state: Redux.StoreState)  => state.DataSourceDataSets.Status;
export const SelectDataSourceDataSetField = (state: Redux.StoreState)  => state.DataSourceDataSets.SortField;
export const SelectDataSourceDataSetAscending = (state: Redux.StoreState)  => state.DataSourceDataSets.Ascending;
// #endregion

// #region [ Async Functions ]
function GetDataSourceDataSets(): JQuery.jqXHR<DataSourceTypes.IDataSourceDataSet[]> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/DataSourceDataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

function PostDataSourceDataSet(dataSourceDataSet: DataSourceTypes.IDataSourceDataSet): JQuery.jqXHR<DataSourceTypes.IDataSourceDataSet> {
    return $.ajax({
        type: "POST",
        url: `${homePath}api/DataSourceDataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(dataSourceDataSet),
        cache: false,
        async: true
    });
}

function DeleteDataSourceDataSet(dataSourceDataSet: DataSourceTypes.IDataSourceDataSet){
    return $.ajax({
        type: "DELETE",
        url: `${homePath}api/DataSourceDataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(dataSourceDataSet),
        cache: false,
        async: true
    });
}

function PatchDataSourceDataSet(dataSourceDataSet: DataSourceTypes.IDataSourceDataSet): JQuery.jqXHR<DataSourceTypes.IDataSourceDataSet> {
    return $.ajax({
        type: "PATCH",
        url: `${homePath}api/DataSourceDataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(dataSourceDataSet),
        cache: false,
        async: true
    });
}
// #endregion