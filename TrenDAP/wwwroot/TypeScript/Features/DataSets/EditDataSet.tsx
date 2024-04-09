//******************************************************************************************************
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
import { DataSourceTypes, TrenDAP } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UpdateDataSet, SelectDataSetsStatus, FetchDataSets, SelectDataSets, SetRecordByID, Update } from './DataSetsSlice'
import { SelectDataSourceDataSets, SelectDataSourceDataSetStatus, FetchDataSourceDataSets, RemoveDataSourceDataSet, UpdateDataSourceDataSet, AddDataSourceDataSet } from '../DataSources/DataSourceDataSetSlice';
import DataSet from './DataSet';

const EditDataSet: React.FunctionComponent<{}> = (props) => {
    const dispatch = useAppDispatch();
    const sourceSetConnections = useAppSelector(SelectDataSourceDataSets);
    const dsdsStatus = useAppSelector(SelectDataSourceDataSetStatus);
    const dataSets = useAppSelector(SelectDataSets);
    const wsStatus = useAppSelector(SelectDataSetsStatus);
    const [connections, setConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [dataSet, setDataSet] = React.useState<TrenDAP.iDataSet>(undefined);

    React.useEffect(() => {
        if (wsStatus === 'unitiated' || wsStatus === 'changed') dispatch(FetchDataSets());
    }, [wsStatus]);

    React.useEffect(() => {
        if (wsStatus === 'idle') setDataSet(dataSets.find(set => set.ID == (props['useParams']?.id ?? -1)));
    }, [wsStatus, props['useParams']?.id]);

    React.useEffect(() => {
        if (dsdsStatus === 'unitiated' || dsdsStatus === 'changed') dispatch(FetchDataSourceDataSets());
    }, [dsdsStatus]);

    React.useEffect(() => {
        if (dataSet === undefined) return;
        if (dsdsStatus === 'idle') setConnections(sourceSetConnections.filter(conn => conn.DataSetID === dataSet.ID));
    }, [dsdsStatus, dataSet?.ID]);

    if (dataSet === undefined) return null;
    return (
        <div className="row" style={{ margin: 10 }}>
            <div className="card">
                <div className="card-header">
                    Edit Data Set
                </div>
                <div className="card-body" style={{overflowY:'auto'}}>
                    <DataSet DataSet={dataSet} SetDataSet={setDataSet} Connections={connections} SetConnections={setConnections}/>
                </div>
                <div className="card-footer">
                    <button className='btn btn-link'
                        onClick={() => {
                            dispatch(UpdateDataSet(dataSet));
                            connections.forEach(conn => {
                                if (conn.ID !== -1) dispatch(UpdateDataSourceDataSet(conn));
                                else dispatch(AddDataSourceDataSet(conn));
                            });
                            const deletedConnections = sourceSetConnections.filter(oldConn => connections.findIndex(newConn => newConn.ID === oldConn.ID) === -1);
                            deletedConnections.forEach(conn => dispatch(RemoveDataSourceDataSet(conn)));
                            window.location.href = `${homePath}DataSets`;
                        }}
                    >Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditDataSet;