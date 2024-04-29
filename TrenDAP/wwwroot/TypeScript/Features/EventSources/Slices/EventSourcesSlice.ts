//******************************************************************************************************
//  EventSourcesSlice.ts - Gbtc
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
//  04/29/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { EventSourceTypes, Redux } from '../../../global';
import _ from 'lodash';
import { ajax } from 'jquery';

// #region [ Thunks ]
export const FetchEventSources = createAsyncThunk('EventSources/FetchEventSources', async (_, { dispatch }) => {
    return await GetEventSources();
});

export const AddEventSource = createAsyncThunk('EventSources/AddEventSource', async (EventSource: EventSourceTypes.IEventSourceView) => {
    return await PostEventSource(EventSource);
});

export const RemoveEventSource = createAsyncThunk('EventSources/RemoveEventSource', async (EventSource: EventSourceTypes.IEventSourceView, { dispatch }) => {
    return await DeleteEventSource(EventSource);
});

export const UpdateEventSource = createAsyncThunk('EventSources/UpdateEventSource', async (EventSource: EventSourceTypes.IEventSourceView, { dispatch }) => {
    return await PatchEventSource(EventSource);
});
// #endregion

// #region [ Slice ]
export const EventSourcesSlice = createSlice({
    name: 'EventSources',
    initialState: {
        Status: 'unitiated',
        Data: [],
        Error: null,
        SortField: 'Name',
        Ascending: true
    } as Redux.State<EventSourceTypes.IEventSourceView>,
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

        builder.addCase(FetchEventSources.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;

            const sorted = _.orderBy(action.payload, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.Data = sorted;

        });
        builder.addCase(FetchEventSources.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchEventSources.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddEventSource.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(AddEventSource.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddEventSource.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(RemoveEventSource.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(RemoveEventSource.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(RemoveEventSource.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(UpdateEventSource.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(UpdateEventSource.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(UpdateEventSource.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });

    }

});

export const {Sort} = EventSourcesSlice.actions;
export default EventSourcesSlice.reducer; 
// #endregion

// #region [ Selectors ]
export const SelectEventSources = (state: Redux.StoreState) => state.EventSources.Data;
export const SelectEventSourcesStatus = (state: Redux.StoreState) => state.EventSources.Status;
export const SelectEventSourcesSortField = (state: Redux.StoreState) => state.EventSources.SortField;
export const SelectEventSourcesAscending = (state: Redux.StoreState) => state.EventSources.Ascending;

// #endregion

// #region [ Async Functions ]

function GetEventSources(): JQuery.jqXHR<EventSourceTypes.IEventSourceView[]> {
    return ajax({
        type: "GET",
        url: `${homePath}api/EventSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

function PostEventSource(EventSource: EventSourceTypes.IEventSourceView): JQuery.jqXHR<EventSourceTypes.IEventSourceView> {
    return ajax({
        type: "POST",
        url: `${homePath}api/EventSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...EventSource, User: userName }),
        cache: false,
        async: true
    });
}

function DeleteEventSource(EventSource: EventSourceTypes.IEventSourceView): JQuery.jqXHR<EventSourceTypes.IEventSourceView> {
    return ajax({
        type: "DELETE",
        url: `${homePath}api/EventSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(EventSource),
        cache: false,
        async: true
    });
}

function PatchEventSource(EventSource: EventSourceTypes.IEventSourceView): JQuery.jqXHR<EventSourceTypes.IEventSourceView> {
    return ajax({
        type: "PATCH",
        url: `${homePath}api/EventSource`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(EventSource),
        cache: false,
        async: true
    });
}

// #endregion
