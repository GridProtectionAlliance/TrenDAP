﻿//******************************************************************************************************
//  EditDataSet.tsx - Gbtc
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

import * as React from 'react';
import { TrenDAP } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UpdateDataSet, AddDataSet,SelectDataSetByID, SelectDataSetsStatus, FetchDataSets, SelectRecord, SetRecordByID, Update } from './DataSetsSlice'
import DataSet from './DataSet';
import { Pencil } from '../../Constants'

const EditDataSet: React.FunctionComponent<{}> = (props) => {
    const dispatch = useAppDispatch();
    const dataSet = useAppSelector(SelectRecord)
    const wsStatus = useAppSelector(SelectDataSetsStatus);

    React.useEffect(() => {
        if (wsStatus === 'unitiated' || wsStatus === 'changed') {
            dispatch(FetchDataSets());
            return function () {
            }
        }
        
        dispatch(SetRecordByID(parseInt(props['useParams']?.id ?? -1)));

    }, [dispatch, wsStatus]);

    if (dataSet === undefined) return null;
    return (
        <div className="row" style={{ margin: 10 }}>
            <div className="card">
                <div className="card-header">
                    Edit Data Set
                </div>
                <div className="card-body" style={{overflowY:'auto'}}>
                    <DataSet Record={dataSet} SetDataSet={(record) => dispatch(Update(record))} />
                </div>
                <div className="card-footer">
                    <button className='btn btn-link'
                        onClick={() => {
                            dispatch(UpdateDataSet(dataSet));
                            window.location.href = `${homePath}DataSets`;
                        }}
                    >Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditDataSet;