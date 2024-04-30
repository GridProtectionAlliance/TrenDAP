//******************************************************************************************************
//  EventSourceDataSetsSlice.ts - Gbtc
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
//  04/29/2020 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Redux } from '../../../global';
import { EventSourceTypes } from '../Interface';
import _ from 'lodash';
import { ajax } from 'jquery';

// #region [ Consts ]
const blankConnection: EventSourceTypes.IEventSourceDataSet = {
    ID: -1, Settings: '{}', EventSourceID: -1, DataSetID: -1
}
// #endregion

// #region [ Thunks ]
export const FetchEventSourceDataSets = createAsyncThunk('EventSourceDataSets/FetchEventSourceDataSets', async (_, { dispatch }) => {
    return await GetEventSourceDataSets();
});

export const AddEventSourceDataSet = createAsyncThunk('EventSourceDataSets/AddEventSourceDataSet', async (DataSet: EventSourceTypes.IEventSourceDataSet, { dispatch }) => {
    return await PostEventSourceDataSet(DataSet);
});

export const RemoveEventSourceDataSet = createAsyncThunk('EventSourceDataSets/RemoveEventSourceDataSet', async (DataSet: EventSourceTypes.IEventSourceDataSet, { dispatch }) => {
    return await DeleteEventSourceDataSet(DataSet);
});

export const UpdateEventSourceDataSet = createAsyncThunk('EventSourceDataSets/UpdateEventSourceDataSet', async (DataSet: EventSourceTypes.IEventSourceDataSet, { dispatch }) => {
    return await PatchEventSourceDataSet(DataSet);
});

// #endregion

// #region [ Slice ]
export const EventSourceDataSetSlice = createSlice({
    name: 'EventSourceDataSets',
    initialState: {
        Status: 'unitiated',
        Data: [],
        Error: null,
        SortField: 'ID',
        Ascending: false,
        Record: blankConnection
    } as Redux.State<EventSourceTypes.IEventSourceDataSet>,
    reducers: {
        Sort: (state, action) => {
            if (state.SortField === action.payload.SortField)
                state.Ascending = !action.payload.Ascending;
            else
                state.SortField = action.payload.SortField;

            const sorted = _.orderBy(state.Data, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.Data = sorted as EventSourceTypes.IEventSourceDataSet[];
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
        builder.addCase(FetchEventSourceDataSets.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;
            const sorted = _.orderBy(action.payload, [state.SortField], [state.Ascending ? "asc" : "desc"]) as EventSourceTypes.IEventSourceDataSet[];
            state.Data = sorted;
        });
        builder.addCase(FetchEventSourceDataSets.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchEventSourceDataSets.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;
        });

        builder.addCase(AddEventSourceDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(AddEventSourceDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddEventSourceDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });

        builder.addCase(RemoveEventSourceDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(RemoveEventSourceDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(RemoveEventSourceDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });

        builder.addCase(UpdateEventSourceDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(UpdateEventSourceDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(UpdateEventSourceDataSet.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
    }
});
// #endregion

// #region [ Selectors ]
export const { Sort, New, Update, SetRecordByID } = EventSourceDataSetSlice.actions;
export default EventSourceDataSetSlice.reducer; 
export const SelectEventSourceDataSets = (state: Redux.StoreState) => state.EventSourceDataSets.Data;
export const SelectEventSourceDataSetStatus = (state: Redux.StoreState)  => state.EventSourceDataSets.Status;
export const SelectEventSourceDataSetField = (state: Redux.StoreState)  => state.EventSourceDataSets.SortField;
export const SelectEventSourceDataSetAscending = (state: Redux.StoreState)  => state.EventSourceDataSets.Ascending;
// #endregion

// #region [ Async Functions ]
function GetEventSourceDataSets(): JQuery.jqXHR<EventSourceTypes.IEventSourceDataSet[]> {
    return ajax({
        type: "GET",
        url: `${homePath}api/EventSourceDataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

function PostEventSourceDataSet(EventSourceDataSet: EventSourceTypes.IEventSourceDataSet): JQuery.jqXHR<EventSourceTypes.IEventSourceDataSet> {
    return ajax({
        type: "POST",
        url: `${homePath}api/EventSourceDataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(EventSourceDataSet),
        cache: false,
        async: true
    });
}

function DeleteEventSourceDataSet(EventSourceDataSet: EventSourceTypes.IEventSourceDataSet){
    return ajax({
        type: "DELETE",
        url: `${homePath}api/EventSourceDataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(EventSourceDataSet),
        cache: false,
        async: true
    });
}

function PatchEventSourceDataSet(EventSourceDataSet: EventSourceTypes.IEventSourceDataSet): JQuery.jqXHR<EventSourceTypes.IEventSourceDataSet> {
    return ajax({
        type: "PATCH",
        url: `${homePath}api/EventSourceDataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(EventSourceDataSet),
        cache: false,
        async: true
    });
}
// #endregion