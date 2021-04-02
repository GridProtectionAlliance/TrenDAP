//******************************************************************************************************
//  WorkSpacesSlice.ts - Gbtc
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
//  09/25/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TrenDAP, Redux } from '../../global';
import _ from 'lodash';
import moment from 'moment';
import { $, JQuery,ajax } from 'jquery';

// #region [ Thunks ]
export const FetchWorkSpaces = createAsyncThunk('WorkSpaces/FetchWorkSpaces', async (_, { dispatch }) => {
    return await GetWorkSpaces();
});

export const AddWorkSpace = createAsyncThunk('WorkSpaces/AddWorkSpace', async (workSpace: TrenDAP.iWorkSpace, { dispatch }) => {
    return await PostWorkSpace(workSpace);
});

export const RemoveWorkSpace = createAsyncThunk('WorkSpaces/RemoveWorkSpace', async (workSpace: TrenDAP.iWorkSpace, { dispatch }) => {
    return await DeleteWorkSpace(workSpace);
});

export const UpdateWorkSpace = createAsyncThunk('WorkSpaces/UpdateWorkSpace', async (workSpace: TrenDAP.iWorkSpace, { dispatch }) => {
    return await PatchWorkSpace(workSpace);
});

export const OpenCloseWorkSpace = createAsyncThunk('WorkSpaces/OpenCloseWorkSpace', async (req: { workSpace: TrenDAP.iWorkSpace, open: boolean }, { dispatch }) => {
    return await OCWorkSpace(req.workSpace, req.open);
});

// #endregion

// #region [ Slice ]
export const WorkSpacesSlice = createSlice({
    name: 'WorkSpaces',
    initialState: {
        Status: 'unitiated',
        Data: [],
        Error: null,
        SortField: 'UpdatedOn',
        Ascending: false
    } as Redux.State<TrenDAP.iWorkSpace>,
    reducers: {
        Sort: (state, action) => {
            if (state.SortField === action.payload.SortField)
                state.Ascending = !action.payload.Ascending;
            else
                state.SortField = action.payload.SortField;

            const sorted = _.orderBy(state.Data, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.Data = sorted;
        },
        OpenWorkSpace: (state, action) => {
            state.Data.find(ws => ws.ID == action.payload).Open = true;
        },
        CloseWorkSpace: (state, action) => {
            state.Data.find(ws => ws.ID == action.payload).Open = false;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(FetchWorkSpaces.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;

            const sorted = _.orderBy(action.payload, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.Data = sorted;

        });
        builder.addCase(FetchWorkSpaces.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchWorkSpaces.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddWorkSpace.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(AddWorkSpace.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(AddWorkSpace.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(RemoveWorkSpace.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(RemoveWorkSpace.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(RemoveWorkSpace.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(UpdateWorkSpace.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(UpdateWorkSpace.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(UpdateWorkSpace.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(OpenCloseWorkSpace.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(OpenCloseWorkSpace.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(OpenCloseWorkSpace.fulfilled, (state, action) => {
            state.Status = 'changed';
            state.Error = null;
        });

    }

});
// #endregion

// #region [ Selectors ]
export const { Sort, OpenWorkSpace, CloseWorkSpace } = WorkSpacesSlice.actions;
export default WorkSpacesSlice.reducer; 
export const SelectWorkSpaces = (state: Redux.StoreState) => state.WorkSpaces.Data;
export const SelectWorkSpaceByID = (state: Redux.StoreState, id: number) => state.WorkSpaces.Data.find(ds => ds.ID === id);
export const SelectNewWorkSpace = () => ({ ID: 0, Name: '', DataSetID: 0,  User: '', JSON: '' });
export const SelectWorkSpacesStatus = (state: Redux.StoreState) => state.WorkSpaces.Status;
export const SelectWorkSpacesForUser = (state: Redux.StoreState, user: string) => state.WorkSpaces.Data.filter(ws => ws.User === user);
export const SelectWorkSpacesAllPublicNotUser = (state: Redux.StoreState, user: string) => state.WorkSpaces.Data.filter(ws => ws.Public && ws.User !== user);
export const SelectWorkSpacesSortField = (state: Redux.StoreState) => state.WorkSpaces.SortField;
export const SelectWorkSpacesAscending = (state: Redux.StoreState) => state.WorkSpaces.Ascending;

// #endregion

// #region [ Async Functions ]
function GetWorkSpaces(): JQuery.jqXHR<TrenDAP.iWorkSpace[]> {
    return ajax({
        type: "GET",
        url: `${homePath}api/WorkSpace`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

function PostWorkSpace(workSpace: TrenDAP.iWorkSpace): JQuery.jqXHR<TrenDAP.iWorkSpace> {
    return ajax({
        type: "POST",
        url: `${homePath}api/WorkSpace`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...workSpace, JSONString: JSON.stringify({ Rows: [], By: 'Meter',Type: 'TrenDAPDB'}), UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss') }),
        cache: false,
        async: true
    });
}

function DeleteWorkSpace(workSpace: TrenDAP.iWorkSpace): JQuery.jqXHR<TrenDAP.iWorkSpace> {
    return ajax({
        type: "DELETE",
        url: `${homePath}api/WorkSpace`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(workSpace),
        cache: false,
        async: true
    });
}

function PatchWorkSpace(workSpace: TrenDAP.iWorkSpace): JQuery.jqXHR<TrenDAP.iWorkSpace> {
    return ajax({
        type: "PATCH",
        url: `${homePath}api/WorkSpace`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...workSpace, UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss') }),
        cache: false,
        async: true
    });
}

function OCWorkSpace(workSpace: TrenDAP.iWorkSpace, open:boolean): JQuery.jqXHR<TrenDAP.iWorkSpace> {
    return ajax({
        type: "PATCH",
        url: `${homePath}api/WorkSpace`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...workSpace, Open: open }),
        cache: false,
        async: true
    });
}


// #endregion
