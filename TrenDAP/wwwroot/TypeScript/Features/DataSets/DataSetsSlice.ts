//******************************************************************************************************
//  DataSetsSlice.ts - Gbtc
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
//  10/05/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TrenDAP } from '../../global';
import _, { result } from 'lodash';

// #region [ Thunks ]
export const FetchDataSets = createAsyncThunk('DataSets/FetchDataSets', async (_, { dispatch }) => {
    return await GetDataSets();
});

export const AddDataSet = createAsyncThunk('DataSets/AddDataSet', async (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    return await PostDataSet(DataSet);
});

export const RemoveDataSet = createAsyncThunk('DataSets/RemoveDataSet', async (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    return await DeleteDataSet(DataSet);
});

export const UpdateDataSet = createAsyncThunk('DataSets/UpdateDataSet', async (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    return await PatchDataSet(DataSet);
});
// #endregion

// #region [ Slice ]
export const DataSetsSlice = createSlice({
    name: 'DataSets',
    initialState: {
        Status: 'unitiated' as TrenDAP.Status,
        DataSets: [] as TrenDAP.iDataSet[],
        Error: null,
        SortField: 'UpdatedOn',
        Ascending: false,
        Record: { ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 52) - 1, Months: Math.pow(2, 12) - 1 } as TrenDAP.iDataSet
    },
    reducers: {
        Sort: (state, action) => {
            if (state.SortField === action.payload.SortField)
                state.Ascending = !action.payload.Ascending;
            else
                state.SortField = action.payload.SortField;

            const sorted = _.orderBy(state.DataSets, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.DataSets = sorted as TrenDAP.iDataSet[];
        },
        New: (state, action) => {
            state.Record = { ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 52) - 1, Months: Math.pow(2, 12) - 1 } as TrenDAP.iDataSet
        },
        SetRecordByID: (state, action) => {
            const record = state.DataSets.find(ds => ds.ID === action.payload);
            if(record !== undefined)
                state.Record = record;
        },
        Update: (state, action) => {
            state.Record = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(FetchDataSets.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;
            const results = action.payload.map(r => ({ ...r, From: moment(r.From).format('YYYY-MM-DD'), To: moment(r.To).format('YYYY-MM-DD') }));
            const sorted = _.orderBy(results, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.DataSets = sorted as TrenDAP.iDataSet[];

        });
        builder.addCase(FetchDataSets.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchDataSets.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(AddDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(RemoveDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(RemoveDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(RemoveDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(UpdateDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(UpdateDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(UpdateDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });

    }

});
// #endregion

// #region [ Selectors ]
export const { Sort, New, Update, SetRecordByID } = DataSetsSlice.actions;
export default DataSetsSlice.reducer; 
export const SelectDataSets = state => state.DataSets.DataSets as TrenDAP.iDataSet[];
export const SelectDataSetByID = (state, id) => state.DataSets.DataSets.find(ds => ds.ID === id) as TrenDAP.iDataSet;
export const SelectRecord = (state) => state.DataSets.Record;
export const SelectNewDataSet = (state) => ({ ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 52) - 1, Months: Math.pow(2, 12) - 1 }) as TrenDAP.iDataSet;
export const SelectNewXDADataSet = () => ({ By: 'Meter', IDs: [], Phases: [], Groups: [], Types: [] }) as TrenDAP.iXDADataSet;
export const SelectDataSetsStatus = state => state.DataSets.Status as TrenDAP.Status;
export const SelectDataSetsForUser = (state, user) => state.DataSets.DataSets.filter(ws => ws.User === user) as TrenDAP.iDataSet;
export const SelectDataSetsAllPublicNotUser = (state, user) => state.DataSets.DataSets.filter(ws => ws.Public && ws.User !== user) as TrenDAP.iDataSet;
export const SelectDataSetsSortField = state => state.DataSets.SortField as keyof TrenDAP.iDataSet;
export const SelectDataSetsAscending = state => state.DataSets.Ascending as boolean;

// #endregion

// #region [ Async Functions ]
function GetDataSets(): JQuery.jqXHR<TrenDAP.iDataSet[]> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

function PostDataSet(DataSet: TrenDAP.iDataSet): JQuery.jqXHR<TrenDAP.iDataSet> {
    return $.ajax({
        type: "POST",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...DataSet, UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss') }),
        cache: false,
        async: true
    });
}

function DeleteDataSet(DataSet: TrenDAP.iDataSet): JQuery.jqXHR<TrenDAP.iDataSet> {
    return $.ajax({
        type: "DELETE",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(DataSet),
        cache: false,
        async: true
    });
}

function PatchDataSet(DataSet: TrenDAP.iDataSet): JQuery.jqXHR<TrenDAP.iDataSet> {
    return $.ajax({
        type: "PATCH",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...DataSet, UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss') }),
        cache: false,
        async: true
    });
}
// #endregion
