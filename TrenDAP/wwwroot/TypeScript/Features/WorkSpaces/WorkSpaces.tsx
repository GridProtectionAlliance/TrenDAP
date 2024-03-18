//******************************************************************************************************
//  WorkSpaces.tsx - Gbtc
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
import { TrenDAP, Redux } from '../../global';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@gpa-gemstone/react-table'
import { Sort, FetchWorkSpaces, SelectWorkSpacesStatus, RemoveWorkSpace, SelectWorkSpacesForUser, SelectWorkSpacesAllPublicNotUser, SelectWorkSpacesSortField, SelectWorkSpacesAscending } from './WorkSpacesSlice';
import EditWorkSpace from './EditWorkSpace';
import { TrashCan, HeavyCheckMark } from './../../Constants'
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { SelectDataSets } from '../DataSets/DataSetsSlice';

const WorkSpaces: React.FunctionComponent = (props: {}) => {
    const dispatch = useDispatch();
    const workSpaces = useSelector((state: Redux.StoreState) => SelectWorkSpacesForUser(state, userName));
    const publicWorkSpaces = useSelector((state: Redux.StoreState) => SelectWorkSpacesAllPublicNotUser(state, userName));
    const dataSets = useSelector(SelectDataSets);
    const wsStatus = useSelector(SelectWorkSpacesStatus);

    const sortField = useSelector(SelectWorkSpacesSortField);
    const ascending = useSelector(SelectWorkSpacesAscending);

    React.useEffect(() => {
        if (wsStatus != 'unitiated' && wsStatus != 'changed') return;
        dispatch(FetchWorkSpaces());

        return function () {
        }
    }, [dispatch, wsStatus]);

    return (
        <div className="row" style={{ margin: 10 }}>
            <div className="col-8" style={{padding: '0 0 0 0'}}>
                <div className="card">
                    <div className="card-header">My Workspaces</div>
                    <div className="card-body">
                        <Table<TrenDAP.iWorkSpace>
                            cols={[
                                { key: 'Name', label: 'Name', field: 'Name'},
                                { key: 'DataSetID', label: 'Data Set',  field: 'DataSetID',content: (item, key, style) => dataSets.find(ds => ds.ID === item.DataSetID)?.Name },
                                { key: 'Type', label: 'Type', field: 'Type' },

                                { key: 'Public', label: 'Shared', field: 'Public', content: (item, key, style) => <span>{item[key] ? HeavyCheckMark : null}</span> },
                                { key: 'UpdatedOn', field: 'UpdatedOn',label: 'Updated', content: (item, key, style) => <span>{moment(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span> },
                                    {
                                        key: null, label: '', content: (item, key, style) =>
                                            <span><EditWorkSpace WorkSpace={item} /><button className="btn" onClick={(evt) => {
                                                evt.preventDefault();
                                                dispatch(RemoveWorkSpace(item));
                                            }}>{TrashCan}</button></span>
                                    }

                            ]}
                            tableClass="table table-hover"
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            sortKey={sortField}
                            onClick={(data, evt) => {
                                if (evt.target.tagName.toLowerCase() === 'td')
                                    window.location.href = `${homePath}WorkSpaceEditor/${data.row.ID}`
                            }}
                            onSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                            data={workSpaces}
                            ascending={ascending}
                            />
                    </div>
                </div>
            </div>
            <div className="col-4" style={{ padding: '0 0 0 0' }}>
                <div className="card ">
                    <div className="card-header">Shared Workspaces</div>
                    <div className="card-body">
                        <Table<TrenDAP.iWorkSpace>
                            cols={[
                                { key: 'Name', label: 'Name', field: 'Name' },
                                { key: 'DataSetID', field: 'DataSetID', label: 'Data Set', content: (item, key, style) => dataSets.find(ds => ds.ID === item.ID)?.Name },
                                { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: (item, key, style) => <span>{moment(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span> },

                                //{ key: null, label: '', content: (item, key, style) => <span><EditWorkSpace WorkSpace={item} /><button className="btn" onClick={() => dispatch(RemoveWorkSpace(item))}>{TrashCan}</button></span> }

                            ]}
                            tableClass="table table-hover"
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            sortKey={sortField}
                            onClick={(data, evt) => {
                                if (evt.target.tagName.toLowerCase() === 'td')
                                    window.location.href = `${homePath}WorkSpaceEditor/${data.row.ID}`
                            }}
                            onSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                            data={publicWorkSpaces}
                            ascending={ascending}
                        />

                    </div>
                </div>
            </div>

        </div>

    );
}

export default WorkSpaces;