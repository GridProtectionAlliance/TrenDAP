//******************************************************************************************************
//  AddNewDataSet.tsx - Gbtc
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
import { SelectDataSets, SelectDataSetsStatus, SelectNewDataSet, FetchDataSets } from './DataSetsSlice';
import { FetchDataSourceDataSets } from '../DataSources/DataSourceDataSetSlice';
import DataSet from './DataSet';
import { ToolTip, TabSelector } from '@gpa-gemstone/react-interactive';
import { Warning } from '@gpa-gemstone/gpa-symbols';
import moment from 'moment';
import { CrossMark } from '../../Constants';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { SelectDataSources } from '../DataSources/DataSourcesSlice'
import * as _ from "lodash"

const AddNewDataSet: React.FunctionComponent<{}> = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const allDataSets = useAppSelector(SelectDataSets);
    const setStatus = useAppSelector(SelectDataSetsStatus);
    const dataSources = useAppSelector(SelectDataSources);

    const [warnings, setWarning] = React.useState<string[]>([]);
    const [errors, setErrors] = React.useState<string[]>([]);
    const [sourceErrors, setSourceErrors] = React.useState<string[]>([]);
    const [hover, setHover] = React.useState<boolean>(false);
    const [dataSet, setDataSet] = React.useState<TrenDAP.iDataSet>(SelectNewDataSet());
    const [connections, setConnections] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [tab, setTab] = React.useState<string>('settings');

    React.useEffect(() => {
        if (setStatus === 'unitiated' || setStatus === 'changed') dispatch(FetchDataSets());
    }, [setStatus]);

    React.useEffect(() => {
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
        const e = [];
        if (dataSet.Name == null || dataSet.Name.trim().length == 0)
            e.push("A Name has to be entered.")
        if (dataSet.Name != null && dataSet.Name.length > 200)
            e.push("Name has to be less than 200 characters.");
        if (dataSet.Name != null && allDataSets.findIndex(ds => ds.ID !== dataSet.ID && ds.Name.toLowerCase() == dataSet.Name.toLowerCase()) > -1)
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
        setErrors(e.concat(sourceErrors));
    }, [dataSet, connections, sourceErrors]);

    return (
        <div className="row" style={{ margin: 10 }}>
            <div className="card" style={{ width: '100%', height: window.innerHeight - 60 }}>
                <div className="card-header">
                    New Data Set {dataSet.Name !== null && dataSet.Name.trim().length > 0 ? ('(' + dataSet.Name + ')') : ''}
                </div>
                <div className="card-body" style={{ overflowY: 'auto' }}>
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
                            <button type="button" data-tooltip="newBtn"
                                className={"btn btn-success" + (errors.length > 0 ? ' disabled' : '')}
                                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                                onClick={() => {
                                    if (errors.length > 0)
                                        return;
                                    const handle = $.ajax({
                                        type: "POST",
                                        url: `${homePath}api/DataSet/NewWithConnections`,
                                        contentType: "application/json; charset=utf-8",
                                        dataType: 'json',
                                        data: JSON.stringify({
                                            DataSet: {
                                                ...dataSet, UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss')
                                            },
                                            Connections: connections
                                        }),
                                        cache: false,
                                        async: true
                                    }).done(() => {
                                        dispatch(FetchDataSourceDataSets());
                                        dispatch(FetchDataSets());
                                    }).done(() => {
                                        navigate(`${homePath}DataSets`);
                                    });
                                    return () => { if (handle != null && handle.abort != null) handle.abort(); }
                                }}
                            > Save</button>
                        </div>
                        <ToolTip Target="newBtn" Show={hover && (warnings.length > 0 || errors.length > 0)} Position={'top'}>
                            {warnings.map((w, i) => <p key={2 * i}>{Warning} {w} </p>)}
                            {errors.map((e, i) => <p key={2 * i + 1}>{CrossMark} {e} </p>)}
                        </ToolTip>
                        {tab !== 'settings' ?
                            <div className="d-flex col-6 justify-content-end">
                                <button className='btn btn-danger' onClick={() => {
                                    let deletedConnectionIdx = connections.findIndex((con, index) => dataSources.find(ds => ds.ID === con.DataSourceID)?.Name + index.toString() === tab)
                                    let newConnections = _.cloneDeep(connections);
                                    newConnections.splice(deletedConnectionIdx, 1);
                                    setConnections(newConnections);
                                    setTab('settings');
                                }}
                                >Remove DataSource</button>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewDataSet;