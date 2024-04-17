//******************************************************************************************************
//  DataSlice.ts - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  02/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TrenDAP, Redux } from '../../../global';
import _, { result } from 'lodash';
import moment from 'moment';
import TrenDAPDB, { DataSetTableRow } from './../TrenDAPDB';
import { ajax } from 'jquery';

// #region [ Thunks ]

export const FetchData = createAsyncThunk('Data/FetchData', async (req: { DataSet: TrenDAP.iDataSet, DataSourceID: number, ChannelID: number }, { dispatch }) => {
    return await GetDataSetData(req.DataSet);
});

export const PatchDataSetData = createAsyncThunk('DataSets/PatchDataSetData', async (req: { DataSet: TrenDAP.iDataSet, dataSourceID, channelID, record }, { dispatch }) => {
    return await UpdateDataSetData(req.DataSet, req.dataSourceID, req.channelID, req.record);
});

// #endregion

// #region [ Slice ]
export const DataSetsSlice = createSlice({
    name: 'Data',
    initialState: {
        ChannelID: 0,
        DataSourceID: 0,
        Status: 'unitiated',
        Data: [],
        Error: null,
    } ,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(FetchData.fulfilled, (state, action) => {
            state.Status = 'idle';
            state.Error = null;
            
        });
        builder.addCase(FetchData.pending, (state, action) => {
            state.Status = 'loading';
            state.ChannelID = action.meta.arg.ChannelID;
            state.DataSourceID = action.meta.arg.DataSourceID;
        });
        builder.addCase(FetchData.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });

        //builder.addCase(PatchDataSetData.fulfilled, (state, action) => {
        //    //state.Status = 'idle';
        //    //state.Error = null;
        //    state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'idle', Error: null };

        //});
        //builder.addCase(PatchDataSetData.pending, (state, action) => {
        //    state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'loading', Error: null };

        //    //state.Status = 'loading';
        //});
        //builder.addCase(PatchDataSetData.rejected, (state, action) => {
        //    //state.Status = 'error';
        //    //state.Error = action.error.message;
        //    state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'error', Error: action.error.message };

        //});
    }

});
// #endregion

// #region [ Selectors ]
//export const { Sort, New, Update, SetRecordByID } = DataSetsSlice.actions;
export default DataSetsSlice.reducer;
export const SelectDataSets = (state: Redux.StoreState) => state.DataSets.Data;
export const SelectDataSetByID = (state: Redux.StoreState, id: number) => state.DataSets.Data.find(ds => ds.ID === id) as TrenDAP.iDataSet;
export const SelectDataSetData = async (state: Redux.StoreState, id: number) => {
    const db = new TrenDAPDB();
    let result = await db.Read('DataSet', parseInt(id.toString()));
    return result.Data as TrenDAP.iDataSetReturn[];
};
export const SelectRecord = (state: Redux.StoreState) => state.DataSets.Record;
export const SelectNewDataSet = () => ({ ID: 0, Name: '', User: '', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 53) - 1, Months: Math.pow(2, 12) - 1 }) as TrenDAP.iDataSet;
export const SelectNewXDADataSet = () => ({ By: 'Meter', IDs: [], Phases: [], Groups: [], Chans: [], Aggregate: '' }) as TrenDAP.iXDADataSet;
export const SelectDataSetsStatus = (state: Redux.StoreState) => state.DataSets.Status;
export const SelectDataSetsForUser = (state: Redux.StoreState, user) => state.DataSets.Data.filter(ws => ws.User === user);
export const SelectDataSetsAllPublicNotUser = (state: Redux.StoreState, user) => state.DataSets.Data.filter(ws => ws.Public && ws.User !== user);
export const SelectDataSetsSortField = (state: Redux.StoreState) => state.DataSets.SortField;
export const SelectDataSetsAscending = (state: Redux.StoreState) => state.DataSets.Ascending;

// #endregion

// #region [ Async Functions ]
export async function GetDataSetDataFromIDB(id: number) {
    const db = new TrenDAPDB();
    let result = await db.Read('DataSet', parseInt(id.toString()));
    return result.Data as TrenDAP.iDataSetReturn[];
}

function GetDataSetData(dataSet: TrenDAP.iDataSet) {
    return new Promise((resolve, reject) => {
        ajax({
            type: "GET",
            url: `${homePath}api/DataSet/Query/${dataSet.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(data => resolve(data)).fail(err => reject(err));
    }).then(data => {
        const db = new TrenDAPDB();
        db.Add("DataSet", dataSet.ID, dataSet.Name, data);
        return dataSet.ID;
    });
}

async function UpdateDataSetData(dataSet: TrenDAP.iDataSet, dataSourceID, channelID, record) {
    const db = new TrenDAPDB();
    const data = await db.Read('DataSet', dataSet.ID);

    const newData = [...data.Data];
    let ref = ((newData.find(d => d.DataSource.ID === dataSourceID)?.Data ?? [])
        .find(d => d.ID === channelID)?.Data ?? [])
        .find(d => d.Timestamp === record.Timestamp)

    if (ref) {
        newData.find(d => d.DataSource.ID === dataSourceID).Data.find(d => d.ID === channelID).Data.find(d => d.Timestamp === record.Timestamp).QualityFlags = record.QualityFlags;

        return db.Add("DataSet", dataSet.ID, dataSet.Name, newData);
    }


}

// #endregion
