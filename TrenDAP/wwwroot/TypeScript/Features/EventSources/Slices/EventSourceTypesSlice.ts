//******************************************************************************************************
//  EventSourceTypesSlice.ts - Gbtc
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
import { ajax } from 'jquery';

export const FetchEventSourceTypes = createAsyncThunk('EventSources/FetchEventSourceTypes', async (_,{ dispatch }) => {
    return await GetEventSourceTypes()
});


export const EventSourceTypesSlice = createSlice({
    name: 'EventSourceTypes',
    initialState: {
        Status: 'unitiated',
        Data: [],
        SortField: 'Name',
        Ascending: true,
        Error: null
    } as Redux.State<EventSourceTypes.IEventSourceType>,
    reducers: {
        Add: (state, action) => {
            state.Data.push(action.payload);
        },
        AddRange: (state, action) => {
            state = action.payload;
        },
        Remove: state => {

        }
    },
    extraReducers: (builder) => {

        builder.addCase(FetchEventSourceTypes.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;
            state.Data.push(...action.payload);
            FetchEventSourceTypes();
        });
        builder.addCase(FetchEventSourceTypes.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchEventSourceTypes.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });

    }

});

export const { Add, AddRange } = EventSourceTypesSlice.actions;
export default EventSourceTypesSlice.reducer;
export const SelectEventSourceTypes = (state: Redux.StoreState) => state.EventSourceTypes.Data;
export const SelectEventSourceTypesStatus = (state: Redux.StoreState) => state.EventSourceTypes.Status;

function GetEventSourceTypes(): JQuery.jqXHR<EventSourceTypes.IEventSourceType[]> {
    return ajax({
        type: "GET",
        url: `${homePath}api/EventSourceType`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}



