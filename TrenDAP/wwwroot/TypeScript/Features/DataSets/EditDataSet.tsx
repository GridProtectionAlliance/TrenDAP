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
import { SelectEventSourceDataSets, SelectEventSourceDataSetStatus, FetchEventSourceDataSets, RemoveEventSourceDataSet, UpdateEventSourceDataSet, AddEventSourceDataSet } from '../EventSources/Slices/EventSourceDataSetSlice';
import { useNavigate } from "react-router-dom";
import { TabSelector, ToolTip } from '@gpa-gemstone/react-interactive';
import * as _ from 'lodash';
import { SelectDataSources } from '../DataSources/DataSourcesSlice'
import { SelectEventSources } from '../EventSources/Slices/EventSourcesSlice'
import moment from 'moment';
import { CrossMark, Warning } from '@gpa-gemstone/gpa-symbols';
import DataSetGlobalSettings from './Types/DataSetGlobalSettings';
import EventDataSourceWrapper from '../EventSources/EventDataSourceWrapper';
import { EventSourceTypes } from '../EventSources/Interface';
import DataSourceWrapper from '../DataSources/DataSourceWrapper';

const EditDataSet: React.FunctionComponent<{}> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const sourceSetConnections = useAppSelector(SelectDataSourceDataSets);
    const dsdsStatus = useAppSelector(SelectDataSourceDataSetStatus);
    const dataSets = useAppSelector(SelectDataSets);
    const wsStatus = useAppSelector(SelectDataSetsStatus);
    const dataSources = useAppSelector(SelectDataSources);

    const eventSourceSetConnections = useAppSelector(SelectEventSourceDataSets);
    const esdsStatus = useAppSelector(SelectEventSourceDataSetStatus);
    const eventSources = useAppSelector(SelectEventSources);

    const [warnings, setWarning] = React.useState<string[]>([]);
    const [errors, setErrors] = React.useState<string[]>([]);

    const [sourceErrors, setSourceErrors] = React.useState<string[]>([]);

    const [dataSource, setDataSource] = React.useState<DataSourceTypes.IDataSourceView>(undefined);
    const [dataConnection, setDataConnection] = React.useState<DataSourceTypes.IDataSourceDataSet>(undefined);
    const [deletedDataConnections, setDeletedDataConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);

    const [eventSource, setEventSource] = React.useState<EventSourceTypes.IEventSourceView>(undefined);
    const [eventConnection, setEventConnection] = React.useState<EventSourceTypes.IEventSourceDataSet>(undefined);
    const [deletedEventConnections, setDeletedEventConnections] = React.useState<EventSourceTypes.IEventSourceDataSet[]>([]);

    const [hover, setHover] = React.useState<boolean>(false);

    const [dataConnections, setDataConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [eventConnections, setEventConnections] = React.useState<EventSourceTypes.IEventSourceDataSet[]>([]);
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
        if (dsdsStatus === 'idle') setDataConnections(sourceSetConnections.filter(conn => conn.DataSetID === dataSet.ID));
    }, [dsdsStatus, dataSet?.ID]);

    React.useEffect(() => {
        if (esdsStatus === 'unitiated' || esdsStatus === 'changed')
            dispatch(FetchEventSourceDataSets());
    }, [esdsStatus]);

    React.useEffect(() => {
        if (dataSet === undefined) return;
        if (dsdsStatus === 'idle') setEventConnections(eventSourceSetConnections.filter(conn => conn.DataSetID === dataSet.ID));
    }, [esdsStatus, dataSet?.ID]);

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
        if (dataConnections.length == 0)
            e.push("At least 1 DataSource needs to be added.");
        setErrors(e.concat(sourceErrors));
    }, [dataSet, dataConnections, sourceErrors]);

    if (dataSet === undefined) return null;
    return (
        <div className="card" style={{ width: '100%', height: '100%' }}>
            <div className="card-header">
                Edit Data Set
            </div>
            <div className="card-body" style={{overflowY:'auto'}}>
                <TabSelector Tabs={[
                    { Label: 'Settings', Id: 'settings' },
                    ...dataConnections.map((item, index) => ({
                        Label: dataSources.find(ds => ds.ID === item.DataSourceID)?.Name + ' (Trend)',
                        Id: 'trend-' + index,
                    })),
                    ...eventConnections.map((item, index) => ({
                        Label: eventSources.find(es => es.ID === item.EventSourceID)?.Name + ' (Event)',
                        Id: 'event-' + index
                    }))
                ]} SetTab={tab => {
                    setTab(tab);
                    if (tab === 'settings') return;
                    const tabSplit = tab.split('-');
                    const index = Number(tabSplit[1]);
                    if (isNaN(index)) {
                        console.error(`Could not find connection ${index} in connection array.`);
                        return;
                    }
                    if (tabSplit[0] === 'trend') {
                        const conn = dataConnections[index];
                        setDataConnection(conn);
                        setDataSource(dataSources.find(ds => ds.ID === conn.DataSourceID));
                    } else {
                        const conn = eventConnections[index];
                        setEventConnection(conn);
                        setEventSource(eventSources.find(es => es.ID === conn.EventSourceID));
                    }
                }} CurrentTab={tab} />
                {tab.startsWith('event') ?
                    <EventDataSourceWrapper DataSet={dataSet} Connection={eventConnection} EventDataSource={eventSource} SetErrors={() => { }}
                        SetConnection={newConn => {
                            const newConns = [...eventConnections];
                            const index = Number(tab.split('-')[1]);
                            if (isNaN(index) || index < 0 || index >= newConns.length) {
                                console.error(`Could not find connection ${index} in connection array.`);
                                return;
                            }
                            newConns.splice(index, 1, newConn);
                            setEventConnections(newConns);
                        }} /> : <></>}
                {tab.startsWith('trend') ?
                    <DataSourceWrapper DataSource={dataSource} DataSetConn={dataConnection} ComponentType='datasetConfig' DataSet={dataSet} SetErrors={() => { }}
                        SetDataSetConn={newConn => {
                            const newConns = [...dataConnections];
                            const index = Number(tab.split('-')[1]);
                            if (isNaN(index) || index < 0 || index >= newConns.length) {
                                console.error(`Could not find connection ${index} in connection array.`);
                                return;
                            }
                            newConns.splice(index, 1, newConn);
                            setDataConnections(newConns);
                        }} /> : <></>}
                {tab == 'settings' ?
                    <DataSetGlobalSettings DataSet={dataSet} SetDataSet={setDataSet}
                        DataConnections={dataConnections} SetDataConnections={setDataConnections} EventConnections={eventConnections} SetEventConnections={setEventConnections}/> : <></>}

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
                                dataConnections.forEach(conn => {
                                    if (conn.ID !== -1) dispatch(UpdateDataSourceDataSet(conn));
                                    else dispatch(AddDataSourceDataSet(conn));
                                });
                                eventConnections.forEach(conn => {
                                    if (conn.ID !== -1) dispatch(UpdateEventSourceDataSet(conn));
                                    else dispatch(AddEventSourceDataSet(conn));
                                });
                                deletedDataConnections.forEach(conn => dispatch(RemoveDataSourceDataSet(conn)));
                                deletedEventConnections.forEach(conn => dispatch(RemoveEventSourceDataSet(conn)));
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
                                const tabSplit = tab.split('-');
                                const index = Number(tabSplit[1]);
                                if (isNaN(index)) {
                                    console.error(`Could not find connection ${index} in connection array.`);
                                    return;
                                }
                                if (tabSplit[0] === 'trend') {
                                    let newConnections = _.cloneDeep(dataConnections);
                                    const deletedConnection = newConnections.splice(index, 1);
                                    setDataConnections(newConnections);

                                    //add connection to deletedConnections array to delete on Save
                                    if (deletedConnection[0]?.ID !== -1) setDeletedDataConnections(deletedDataConnections.concat(deletedConnection));
                                } else {
                                    let newConnections = _.cloneDeep(eventConnections);
                                    const deletedConnection = newConnections.splice(index, 1);
                                    setEventConnections(newConnections);

                                    //add connection to deletedConnections array to delete on Save
                                    if (deletedConnection[0]?.ID !== -1) setDeletedEventConnections(deletedEventConnections.concat(deletedConnection));
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