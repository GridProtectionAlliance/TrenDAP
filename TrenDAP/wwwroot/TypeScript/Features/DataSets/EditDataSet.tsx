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
import {  SelectDataSourceDataSets, SelectDataSourceDataSetStatus, FetchDataSourceDataSets, RemoveDataSourceDataSet, UpdateDataSourceDataSet, AddDataSourceDataSet } from '../DataSources/DataSourceDataSetSlice';
import DataSet from './DataSet';
import { useNavigate } from "react-router-dom";
import { TabSelector } from '@gpa-gemstone/react-interactive';
import * as _ from 'lodash';
import { SelectDataSources } from '../DataSources/DataSourcesSlice'

const EditDataSet: React.FunctionComponent<{}> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const sourceSetConnections = useAppSelector(SelectDataSourceDataSets);
    const dsdsStatus = useAppSelector(SelectDataSourceDataSetStatus);
    const dataSets = useAppSelector(SelectDataSets);
    const wsStatus = useAppSelector(SelectDataSetsStatus);
    const dataSources = useAppSelector(SelectDataSources);

    const [connections, setConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);    const [deletedConnections, setDeletedConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [deletedConnections, setDeletedConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [dataSet, setDataSet] = React.useState<TrenDAP.iDataSet>(undefined);
    const [tab, setTab] = React.useState<string>('settings');

    React.useEffect(() => {
        if (wsStatus === 'unitiated' || wsStatus === 'changed')
            dispatch(FetchDataSets());
    }, [wsStatus]);

    React.useEffect(() => {
        if (wsStatus === 'idle')
            setDataSet(dataSets.find(set => set.ID == (props['useParams']?.id ?? -1)));
    }, [wsStatus, props['useParams']?.id]);

    React.useEffect(() => {
        if (dsdsStatus === 'unitiated' || dsdsStatus === 'changed')
            dispatch(FetchDataSourceDataSets());
    }, [dsdsStatus]);

    React.useEffect(() => {
        if (dataSet === undefined) return;
        if (dsdsStatus === 'idle')
            setConnections(sourceSetConnections.filter(conn => conn.DataSetID === dataSet.ID));
    }, [dsdsStatus, dataSet?.ID]);

    if (dataSet === undefined) return null;
    return (
        <div className="card" style={{ width: '100%', height: '100%' }}>
            <div className="card-header">
                Edit Data Set
            </div>
            <div className="card-body" style={{overflowY:'auto'}}>
                <TabSelector Tabs={[
                    { Label: 'Settings', Id: 'settings' },
                    ...connections.map((item, index) => ({
                        Label: dataSources.find(ds => ds.ID === item.DataSourceID)?.Name,
                        Id: dataSources.find(ds => ds.ID === item.DataSourceID)?.Name + index.toString(),
                    })),
                ]}
                 SetTab={(item) => setTab(item)} CurrentTab={tab} />
                <DataSet DataSet={dataSet} SetDataSet={setDataSet} Connections={connections} SetConnections={setConnections} Tab={tab}/>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="d-flex col-6 justify-content-start">
                        <button className='btn btn-success'
                            onClick={() => {
                                dispatch(UpdateDataSet(dataSet));
                                connections.forEach(conn => {
                                    if (conn.ID !== -1) dispatch(UpdateDataSourceDataSet(conn));
                                    else dispatch(AddDataSourceDataSet(conn));
                                });
                                deletedConnections.forEach(conn => dispatch(RemoveDataSourceDataSet(conn)));
                                navigate(`${homePath}DataSets`);
                            }}
                        >Save</button>
                    </div>
                    {tab !== 'settings' ?
                        <div className="d-flex col-6 justify-content-end">
                            <button className='btn btn-danger' onClick={() => {
                                //Remove the connection from connections array
                                let deletedConnection = connections.find((con, index) => dataSources.find(ds => ds.ID === con.DataSourceID)?.Name + index.toString() === tab)
                                let deletedConnectionIdx = connections.findIndex((con, index) => dataSources.find(ds => ds.ID === con.DataSourceID)?.Name + index.toString() === tab)
                                let newConnections = _.cloneDeep(connections);
                                newConnections.splice(deletedConnectionIdx, 1);
                                setConnections(newConnections)

                                //add connection to deletedConnections array to delete on Save
                                if (deletedConnection?.ID !== -1) {
                                    let newDeletedConnections = _.cloneDeep(deletedConnections);
                                    newDeletedConnections.push(deletedConnection);
                                    setDeletedConnections(newDeletedConnections)
                                }
                                setTab('settings')
                            }}
                            >Remove DataSource</button>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default EditDataSet;