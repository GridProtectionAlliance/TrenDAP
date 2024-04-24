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
import { TabSelector, ToolTip } from '@gpa-gemstone/react-interactive';
import * as _ from 'lodash';
import { SelectDataSources } from '../DataSources/DataSourcesSlice'
import moment from 'moment';
import { CrossMark, Warning } from '@gpa-gemstone/gpa-symbols';

const EditDataSet: React.FunctionComponent<{}> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const sourceSetConnections = useAppSelector(SelectDataSourceDataSets);
    const dsdsStatus = useAppSelector(SelectDataSourceDataSetStatus);
    const dataSets = useAppSelector(SelectDataSets);
    const wsStatus = useAppSelector(SelectDataSetsStatus);
    const dataSources = useAppSelector(SelectDataSources);

    const [warnings, setWarning] = React.useState<string[]>([]);
    const [errors, setErrors] = React.useState<string[]>([]);
    const [newErrors, setNewErrors] = React.useState<number>(0);
    const sourceErrors = React.useRef<Map<string, string[]>>(new Map<string, string[]>());
    const [hover, setHover] = React.useState<boolean>(false);
    const [connections, setConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
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

    React.useEffect(() => {
        if (dataSet == null) return;
        const w = [];
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Day' && dataSet.RelativeValue < 7)
            w.push("With the current Time Context and Day of Week Filter it is possible for the dataset to be empty at times.")
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Week' && dataSet.RelativeValue < 53)
            w.push("With the current Time Context and Week of Year Filter it is possible for the dataset to be empty at times.")
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Day' && dataSet.RelativeValue < 366)
            w.push("With the current Time Context and Week of Year Filter it is possible for the dataset to be empty at times.")
        setWarning(w);
    }, [dataSet]);

    React.useEffect(() => {
        if (dataSet == null) return;
        const e = [];
        if (dataSet.Name == null || dataSet.Name.trim().length == 0)
            e.push("A Name has to be entered.")
        if (dataSet.Name != null && dataSet.Name.length > 200)
            e.push("Name has to be less than 200 characters.");
        if (dataSet.Name != null && dataSets.findIndex(ds => ds.ID !== dataSet.ID && ds.Name.toLowerCase() == dataSet.Name.toLowerCase()) > -1)
            e.push("A DataSet with this name already exists.");
        if (dataSet.Context == 'Fixed Dates' && moment(dataSet.From).isAfter(moment(dataSet.To)))
            e.push("A valid Timeframe has to be selected.")
        if (dataSet.Hours == 0)
            e.push("At least 1 Hour has to be selected.")
        if (dataSet.Days == 0)
            e.push("At least 1 Day has to be selected.")
        if (dataSet.Months == 0)
            e.push("At least 1 Month has to be selected.")
        if (dataSet.Weeks == 0)
            e.push("At least 1 Week has to be selected.")
        if (connections.length == 0)
            e.push("At least 1 DataSource needs to be added.");
        [...sourceErrors.current.keys()].forEach(key => {
            e.push(`The following errors exist for datasource ${key}:`);
            const keyErrors = sourceErrors.current.get(key);
            keyErrors.forEach(error => e.push(`\t${error}`));
        });
        setErrors(e);
    }, [dataSet, connections, newErrors]);

    const setSourceErrors = React.useCallback((e: string[], name: string) => {
        setNewErrors(c => c + 1);
        if (e.length > 0) sourceErrors.current.set(name, e);
        else sourceErrors.current.delete(name);
    }, []);

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
                <DataSet DataSet={dataSet} SetDataSet={setDataSet} Connections={connections} SetConnections={setConnections} Tab={tab} SetErrors={setSourceErrors} />
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="d-flex col-6 justify-content-start">
                        <button data-tooltip="newBtn"
                            className={"btn btn-success" + (errors.length > 0 ? ' disabled' : '')}
                            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                            onClick={() => {
                                if (errors.length > 0)
                                    return;
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
                    <ToolTip Target="newBtn" Show={hover && (warnings.length > 0 || errors.length > 0)} Position={'top'}>
                        {warnings.map((w, i) => <p key={2 * i}>{Warning} {w} </p>)}
                        {errors.map((e, i) => <p key={2 * i + 1}>{CrossMark} {e} </p>)}
                    </ToolTip>
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