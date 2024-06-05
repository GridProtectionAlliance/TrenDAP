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
import * as _ from 'lodash';
import moment from 'moment';
import * as $ from 'jquery';
import { useNavigate } from "react-router-dom";
import { TabSelector, ToolTip } from '@gpa-gemstone/react-interactive';
import { CrossMark, Warning } from '@gpa-gemstone/gpa-symbols';
import { DataSourceTypes, TrenDAP } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SelectDataSetsStatus, FetchDataSets, SelectDataSets, DataSetsHaveChanged, SelectNewDataSet } from './DataSetsSlice';
import DataSetSettingsTab from './Tabs/DataSetSettingsTab';
import DataSourceConnectionTab from './Tabs/DataSourceConnectionTab';
import EventSourceConnectionTab from './Tabs/EventSourceConnectionTab';
import { EventSourceTypes } from '../EventSources/Interface';

const EditDataSet: React.FunctionComponent<{}> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const dataSets = useAppSelector(SelectDataSets);
    const dataSetStatus = useAppSelector(SelectDataSetsStatus);

    const [warnings, setWarning] = React.useState<string[]>([]);
    const [errors, setErrors] = React.useState<string[]>([]);

    const [dataErrors, setDataErrors] = React.useState<string[]>([]);
    const [eventErrors, setEventErrors] = React.useState<string[]>([]);

    const [hover, setHover] = React.useState<boolean>(false);

    const [dataConnections, setDataConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [eventConnections, setEventConnections] = React.useState<EventSourceTypes.IEventSourceDataSet[]>([]);
    const [dataSet, setDataSet] = React.useState<TrenDAP.iDataSet>(undefined);
    const [tab, setTab] = React.useState<string>('settings');

    React.useEffect(() => {
        if (dataSetStatus === 'unitiated' || dataSetStatus === 'changed')
            dispatch(FetchDataSets());
    }, [dataSetStatus]);

    React.useEffect(() => {
        if (dataSetStatus !== 'idle') return;
        const id = (props['useParams']?.id ?? -1);
        if (id < 0) setDataSet(SelectNewDataSet());
        else setDataSet(dataSets.find(set => set.ID == id));
    }, [dataSetStatus, props['useParams']?.id]);

    React.useEffect(() => {
        const id = props['useParams']?.id ?? -1;
        if (id === -1) return;
        const dataConnectionHandle = $.ajax({
            type: "GET",
            url: `${homePath}api/DataSourceDataSet/${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: DataSourceTypes.IDataSourceDataSet[]) => {
            setDataConnections(data);
        });
        const eventConnectionHandle = $.ajax({
            type: "GET",
            url: `${homePath}api/EventSourceDataSet/${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: EventSourceTypes.IEventSourceDataSet[]) => {
            setEventConnections(data);
        });
        return () => {
            if (dataConnectionHandle != null && dataConnectionHandle.abort != null) dataConnectionHandle.abort();
            if (eventConnectionHandle != null && eventConnectionHandle.abort != null) eventConnectionHandle.abort();
        }
    }, [props['useParams']?.id]);

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
        else if (dataSet.Name.length > 200)
            e.push("Name has to be less than 200 characters.");
        else if (dataSets.findIndex(ds => (ds.Public || ds.User === userName) && ds.ID !== dataSet.ID && ds.Name.toLowerCase() == dataSet.Name.toLowerCase()) > -1)
            e.push("A DataSet with this name already exists.");
        else if (dataSet.Public && dataSets.findIndex(ds => ds.ID !== dataSet.ID && ds.Name.toLowerCase() == dataSet.Name.toLowerCase()) > -1)
            e.push("A DataSet with this name was already created by another user.");
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
            e.push("At least 1 Trend DataSource needs to be added.");
        setErrors(e.concat(dataErrors).concat(eventErrors));
    }, [dataSet, dataConnections, dataErrors, eventErrors]);

    if (dataSet === undefined) return null;
    return (
        <div className="container-fluid d-flex h-100 flex-column">
            <div className="row" style={{ flex: 1, overflow: 'hidden' }}>
                <div className="card">
                    <div className="card-header">
                        Edit Data Set
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-column h-100">
                            <TabSelector Tabs={[
                                { Label: 'Settings', Id: 'settings' },
                                { Label: 'Trend Data Sources', Id: 'trend' },
                                { Label: 'Event Data Sources', Id: 'event' },
                            ]} SetTab={setTab} CurrentTab={tab} />
                            <br />
                            {tab === 'trend' ?
                                <DataSourceConnectionTab DataSourceConnections={dataConnections} SetDataSourceConnections={setDataConnections}
                                    DataSet={dataSet} SetErrors={setDataErrors} /> : <></>}
                            {tab === 'event' ?
                                <EventSourceConnectionTab EventSourceConnections={eventConnections} SetEventSourceConnections={setEventConnections}
                                    DataSet={dataSet} SetErrors={setEventErrors} /> : <></>}
                            {tab === 'settings' ?
                                <DataSetSettingsTab DataSet={dataSet} SetDataSet={setDataSet}
                                    DataConnections={dataConnections} SetDataConnections={setDataConnections} EventConnections={eventConnections} SetEventConnections={setEventConnections}/> : <></>}
                        </div>
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
                                        $.ajax({
                                            type: "POST",
                                            url: `${homePath}api/DataSet/${dataSet.ID >= 0 ? 'UpdateWithConnections' : 'NewWithConnections'}`,
                                            contentType: "application/json; charset=utf-8",
                                            dataType: 'json',
                                            data: JSON.stringify({
                                                DataSet: {
                                                    ...dataSet, UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss')
                                                },
                                                DataConnections: dataConnections,
                                                EventConnections: eventConnections
                                            }),
                                            cache: false,
                                            async: true
                                        }).done(() => {
                                            dispatch(DataSetsHaveChanged());
                                            navigate(`${homePath}DataSets`);
                                        });
                                    }}
                                >Save</button>
                            </div>
                            <ToolTip Target="newBtn" Show={hover && (warnings.length > 0 || errors.length > 0)} Position={'top'}>
                                {warnings.map((w, i) => <p key={2 * i}>{Warning} {w} </p>)}
                                {errors.map((e, i) => <p key={2 * i + 1}>{CrossMark} {e} </p>)}
                            </ToolTip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditDataSet;