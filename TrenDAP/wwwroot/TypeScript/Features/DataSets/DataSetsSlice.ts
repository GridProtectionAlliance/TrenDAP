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
import { TrenDAP, Redux } from '../../global';
import _ from 'lodash';
import moment from 'moment';
import $ from 'jquery';

// #region [ Thunks ]
export const FetchDataSets = createAsyncThunk('DataSets/FetchDataSets', async (_) => {
    return await GetDataSets();
});

export const AddDataSet = createAsyncThunk('DataSets/AddDataSet', async (DataSet: TrenDAP.iDataSet) => {
    return await PostDataSet(DataSet);
});


export const CloneDataSet = createAsyncThunk('DataSets/CloneDataSet', async (DataSet: TrenDAP.iDataSet) => {
    const dataSet = { ...DataSet };
    dataSet.ID = 0;
    dataSet.Name = `Copy of ${DataSet.Name}`;
    return await PostDataSet(dataSet);
});

export const RemoveDataSet = createAsyncThunk('DataSets/RemoveDataSet', async (DataSet: TrenDAP.iDataSet) => {
    return await DeleteDataSet(DataSet);
});

export const DataSetsHaveChanged = createAsyncThunk('DataSets/DataSetsHaveChanged', async () => { return; });

export const UpdateDataSet = createAsyncThunk('DataSets/UpdateDataSet', async (DataSet: TrenDAP.iDataSet) => {
    return await PatchDataSet(DataSet);
});

// #endregion

// #region [ Consts ]
const newDataSet: TrenDAP.iDataSet = {
    ID: -1,
    Name: '',
    User: '',
    Context: 'Fixed Dates',
    From: moment().subtract(30, 'days').format('YYYY-MM-DD'),
    To: moment().format('YYYY-MM-DD'),
    Hours: Math.pow(2, 24) - 1,
    Days: Math.pow(2, 7) - 1,
    Weeks: Math.pow(2, 53) - 1,
    Months: Math.pow(2, 12) - 1,
    RelativeValue: 7,
    RelativeWindow: 'Day',
    EventWindowUnit: 'Hour',
    EventWindowSize: null,
    Public: false,
    UpdatedOn: ''
}
// #endregion

// #region [ Slice ]
export const DataSetsSlice = createSlice({
    name: 'DataSets',
    initialState: {
        Status: 'unitiated',
        Data: [],
        Error: null,
        SortField: 'UpdatedOn',
        Ascending: false,
        Record: {
            ID: 0, Name: '', User: '', Context: 'Relative', RelativeValue: 30, RelativeWindow: 'Day', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 53) - 1, Months: Math.pow(2, 12) - 1, Data: { Status: 'unitiated', Error: null }
        }
    } as Redux.State<TrenDAP.iDataSet>,
    reducers: {
        Sort: (state, action) => {
            if (state.SortField === action.payload.SortField)
                state.Ascending = !action.payload.Ascending;
            else
                state.SortField = action.payload.SortField;

            const sorted = _.orderBy(state.Data, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.Data = sorted as TrenDAP.iDataSet[];
        },
        New: (state) => {
            state.Record = { ID: 0, Name: '', User: '', Context: 'Relative', RelativeValue: 30, RelativeWindow: 'Day', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 53) - 1, Months: Math.pow(2, 12) - 1 } as TrenDAP.iDataSet
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

        builder.addCase(FetchDataSets.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;
            const results = action.payload.map(r => ({ ...r, From: moment(r.From).format('YYYY-MM-DD'), To: moment(r.To).format('YYYY-MM-DD'), Data: { Status: 'unitiated', Error: null } }));
            const sorted = _.orderBy(results, [state.SortField], [state.Ascending ? "asc" : "desc"]) as TrenDAP.iDataSet[];
            state.Data = sorted;
        });
        builder.addCase(FetchDataSets.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchDataSets.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = (action.error.message == null ? '' : action.error.message);

        });
        builder.addCase(AddDataSet.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(AddDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = (action.error.message == null ? '' : action.error.message);

        });
        builder.addCase(AddDataSet.fulfilled, (state) => {
            state.Status = 'changed';
            state.Error = null;
        });

        builder.addCase(CloneDataSet.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(CloneDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = (action.error.message == null ? '' : action.error.message);

        });
        builder.addCase(CloneDataSet.fulfilled, (state) => {
            state.Status = 'changed';
            state.Error = null;
        });

        builder.addCase(RemoveDataSet.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(RemoveDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = (action.error.message == null ? '' : action.error.message);

        });
        builder.addCase(RemoveDataSet.fulfilled, (state) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(UpdateDataSet.pending, (state) => {
            state.Status = 'loading';
        });
        builder.addCase(UpdateDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = (action.error.message == null ? '' : action.error.message);

        });
        builder.addCase(UpdateDataSet.fulfilled, (state) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(DataSetsHaveChanged.pending, (state) => { state.Status = 'changed'; });
    }

});
// #endregion

// #region [ Selectors ]
export const { Sort, New, Update, SetRecordByID } = DataSetsSlice.actions;
export default DataSetsSlice.reducer; 
export const SelectDataSets = (state: Redux.StoreState) => state.DataSets.Data;
export const SelectDataSetByID = (state: Redux.StoreState, id: number) => state.DataSets.Data.find(ds => ds.ID === id) as TrenDAP.iDataSet;
export const SelectRecord = (state: Redux.StoreState) => state.DataSets.Record;
export const SelectNewDataSet = () => newDataSet;
export const SelectNewXDADataSet = () => ({ By: 'Meter', IDs: [], Phases: [], Groups: [], ChannelIDs: [], Aggregate: '' }) as TrenDAP.iXDADataSet;
export const SelectDataSetsStatus = (state: Redux.StoreState)  => state.DataSets.Status;
export const SelectDataSetsForUser = (state: Redux.StoreState, user) => state.DataSets.Data.filter(ws => ws.User === user);
export const SelectDataSetsAllPublicNotUser = (state: Redux.StoreState, user) => state.DataSets.Data.filter(ws => ws.Public && ws.User !== user);
export const SelectDataSetsSortField = (state: Redux.StoreState)  => state.DataSets.SortField;
export const SelectDataSetsAscending = (state: Redux.StoreState)  => state.DataSets.Ascending;
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

function DeleteDataSet(dataSet: TrenDAP.iDataSet){
    const deleteHandler =  $.ajax({
        type: "DELETE",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(dataSet),
        cache: false,
        async: true
    })
    return () => { deleteHandler.abort() }
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
