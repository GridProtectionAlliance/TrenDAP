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
import _, { result } from 'lodash';
import moment from 'moment';
import TrenDAPDB, { DataSetTableRow } from './TrenDAPDB';
import { ajax,JQuery } from 'jquery';
// #region [ Thunks ]
export const FetchDataSets = createAsyncThunk('DataSets/FetchDataSets', async (_, { dispatch }) => {
    return await GetDataSets();
});

export const FetchDataSetData = createAsyncThunk('DataSets/FetchDataSetData', async (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    return await GetDataSetData(DataSet);
});


export const AddDataSet = createAsyncThunk('DataSets/AddDataSet', async (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    return await PostDataSet(DataSet);
});


export const CloneDataSet = createAsyncThunk('DataSets/CloneDataSet', async (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    let dataSet = { ...DataSet };
    dataSet.ID = 0;
    dataSet.Name = `Copy of ${DataSet.Name}`;
    return await PostDataSet(dataSet);
});

export const RemoveDataSet = createAsyncThunk('DataSets/RemoveDataSet', async (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    return await DeleteDataSet(DataSet);
});

export const UpdateDataSet = createAsyncThunk('DataSets/UpdateDataSet', async (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    return await PatchDataSet(DataSet);
});
export const UpdateDataSetDataFlag = createAsyncThunk('DataSets/UpdateDataSetDataFlag', (DataSet: TrenDAP.iDataSet, { dispatch }) => {
    return GetDataSetDataLocal(DataSet);
});
export const PatchDataSetData = createAsyncThunk('DataSets/PatchDataSetData', async (req: { DataSet: TrenDAP.iDataSet, dataSourceID, channelID, record }, { dispatch }) => {
    return await UpdateDataSetData(req.DataSet, req.dataSourceID, req.channelID, req.record);
});

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
            ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', Context: 'Relative', RelativeValue: 30, RelativeWindow: 'Day', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 52) - 1, Months: Math.pow(2, 12) - 1, Data: {Status: 'unitiated', Error: null} }
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
        New: (state, action) => {
            state.Record = { ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 52) - 1, Months: Math.pow(2, 12) - 1 } as TrenDAP.iDataSet
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
            const results = action.payload.map(r => ({ ...r, From: moment(r.From).format('YYYY-MM-DD'), To: moment(r.To).format('YYYY-MM-DD'), Data: { Status: 'unitiated', Error: null}}));
            const sorted = _.orderBy(results, [state.SortField], [state.Ascending ? "asc" : "desc"]);
            state.Data = sorted;
        });
        builder.addCase(FetchDataSets.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(FetchDataSets.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });

        builder.addCase(FetchDataSetData.fulfilled, (state, action) => {
            //state.Status = 'idle';
            //state.Error = null;
            state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'idle', Error: null } ;

        });
        builder.addCase(FetchDataSetData.pending, (state, action) => {
            state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'loading', Error: null };

            //state.Status = 'loading';
        });
        builder.addCase(FetchDataSetData.rejected, (state, action) => {
            //state.Status = 'error';
            //state.Error = action.error.message;
            state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'error', Error: action.error.message };

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

        builder.addCase(CloneDataSet.pending, (state, action) => {
            state.Status = 'loading';
        });
        builder.addCase(CloneDataSet.rejected, (state, action) => {
            state.Status = 'error';
            state.Error = action.error.message;

        });
        builder.addCase(CloneDataSet.fulfilled, (state, action) => {
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
        builder.addCase(UpdateDataSetDataFlag.pending, (state, action) => {
            state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'loading', Error: null };
        });
        builder.addCase(UpdateDataSetDataFlag.rejected, (state, action) => {
            if(action.meta.arg.ID !== undefined)
                state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'error', Error: action.error.message };
        });
        builder.addCase(UpdateDataSetDataFlag.fulfilled, (state, action) => {
            if(action.payload !== undefined)
                state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'idle', Error: null };
            else
                state.Data.find(d => d.ID === action.meta.arg.ID).Data = { Status: 'unitiated', Error: null};

        });
        builder.addCase(PatchDataSetData.pending, (state, action) => {
            state.Data.find(d => d.ID === action.meta.arg.DataSet.ID).Data = { Status: 'changed', Error: null };
        });

    }

});
// #endregion

// #region [ Selectors ]
export const { Sort, New, Update, SetRecordByID } = DataSetsSlice.actions;
export default DataSetsSlice.reducer; 
export const SelectDataSets = (state: Redux.StoreState) => state.DataSets.Data;
export const SelectDataSetByID = (state: Redux.StoreState, id: number) => state.DataSets.Data.find(ds => ds.ID === id) as TrenDAP.iDataSet;
export const SelectDataSetData = async (state: Redux.StoreState, id: number) => {
    const db = new TrenDAPDB();
    let result = await db.Read('DataSet', parseInt(id.toString()));
    return result.Data as TrenDAP.iDataSetReturn[];
};
export const SelectRecord = (state: Redux.StoreState) => state.DataSets.Record;
export const SelectNewDataSet = ()  => ({ ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 53) - 1, Months: Math.pow(2, 12) - 1 }) as TrenDAP.iDataSet;
export const SelectNewXDADataSet = ()  => ({ By: 'Meter', IDs: [], Phases: [], Groups: [], Types: [], Aggregate: '' }) as TrenDAP.iXDADataSet;
export const SelectDataSetsStatus = (state: Redux.StoreState)  => state.DataSets.Status;
export const SelectDataSetsForUser = (state: Redux.StoreState, user) => state.DataSets.Data.filter(ws => ws.User === user);
export const SelectDataSetsAllPublicNotUser = (state: Redux.StoreState, user) => state.DataSets.Data.filter(ws => ws.Public && ws.User !== user);
export const SelectDataSetsSortField = (state: Redux.StoreState)  => state.DataSets.SortField;
export const SelectDataSetsAscending = (state: Redux.StoreState)  => state.DataSets.Ascending;
// #endregion

// #region [ Async Functions ]
export async function GetDataSetDataFromIDB(id: number) {
    const db = new TrenDAPDB();
    let result = await db.Read('DataSet', parseInt(id.toString()));
    return result.Data as TrenDAP.iDataSetReturn[];
}

function GetDataSets(): JQuery.jqXHR<TrenDAP.iDataSet[]> {
    return ajax({
        type: "GET",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
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


export async function UpdateDataSetData(dataSet: TrenDAP.iDataSet, dataSourceID: number, channelID: number, record: TrenDAP.iXDATrendDataPoint | TrenDAP.iXDATrendDataPoint[]) {
    const db = new TrenDAPDB();
    const data = await db.Read('DataSet', dataSet.ID);

    const newData = [...data.Data];

    if ((record as TrenDAP.iXDATrendDataPoint[]).length == undefined) {
        let ref = ((newData.find(d => d.DataSource.ID === dataSourceID)?.Data ?? [])
            .find(d => d.ID === channelID)?.Data ?? [])
            .find(d => d.Timestamp === (record as TrenDAP.iXDATrendDataPoint).Timestamp)

        if (ref) {
            newData.find(d => d.DataSource.ID === dataSourceID).Data.find(d => d.ID === channelID).Data.find(d => d.Timestamp === (record as TrenDAP.iXDATrendDataPoint).Timestamp).QualityFlags = (record as TrenDAP.iXDATrendDataPoint).QualityFlags;

            return db.Add("DataSet", dataSet.ID, dataSet.Name, newData);
        }

    }
    else {
        (record as TrenDAP.iXDATrendDataPoint[]).forEach(r => {
            let ref = ((newData.find(d => d.DataSource.ID === dataSourceID)?.Data ?? [])
                .find(d => d.ID === channelID)?.Data ?? [])
                .find(d => d.Timestamp === r.Timestamp)

            if (ref) {
                newData.find(d => d.DataSource.ID === dataSourceID).Data.find(d => d.ID === channelID).Data.find(d => d.Timestamp === r.Timestamp).QualityFlags = r.QualityFlags;

            }

        });

        return db.Add("DataSet", dataSet.ID, dataSet.Name, newData);


    }

    
}


function PostDataSet(DataSet: TrenDAP.iDataSet): JQuery.jqXHR<TrenDAP.iDataSet> {
    return ajax({
        type: "POST",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...DataSet, UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss') }),
        cache: false,
        async: true
    });
}

function DeleteDataSet(dataSet: TrenDAP.iDataSet): JQuery.jqXHR<TrenDAP.iDataSet> {
    return ajax({
        type: "DELETE",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(dataSet),
        cache: false,
        async: true
    }).then(() => {
        const db = new TrenDAPDB();
        db.Delete("DataSet",dataSet.ID);
        return dataSet;
    });;
}

function PatchDataSet(DataSet: TrenDAP.iDataSet): JQuery.jqXHR<TrenDAP.iDataSet> {
    return ajax({
        type: "PATCH",
        url: `${homePath}api/DataSet`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ ...DataSet, UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss') }),
        cache: false,
        async: true
    });
}

function GetDataSetDataLocal(DataSet: TrenDAP.iDataSet): Promise<{Created: number, ID: number}> {
    const db = new TrenDAPDB();
    return db.Read('DataSet', DataSet.ID).then(data => {
        if (data == null)
            throw ('Data not loaded into indexedb.');
        return { ID: data.ID, Created: data.Created}
    });
}
// #endregion
