//******************************************************************************************************
//  DataSets.tsx - Gbtc
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
import Table from '@gpa-gemstone/react-table/lib/index'
import { Sort, FetchDataSets, SelectDataSetsStatus, RemoveDataSet, SelectDataSetsForUser, SelectDataSetsAllPublicNotUser, SelectDataSetsSortField, SelectDataSetsAscending, FetchDataSetData, CloneDataSet } from './DataSetsSlice';
import EditDataSet from './EditDataSet';
import { TrashCan, HeavyCheckMark, Pencil, Wrench, CrossMark, Spinner } from './../../Constants'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DataSetData from './DataSetData';
import { DNA } from '@gpa-gemstone/gpa-symbols';

const DataSets: React.FunctionComponent = (props: {}) => {

    const dispatch = useDispatch();
    const DataSets = useSelector((state: Redux.StoreState) => SelectDataSetsForUser(state, userName));
    const publicDataSets = useSelector((state: Redux.StoreState) => SelectDataSetsAllPublicNotUser(state, userName));

    const dsStatus = useSelector(SelectDataSetsStatus);

    const sortField = useSelector(SelectDataSetsSortField);
    const ascending = useSelector(SelectDataSetsAscending);

    React.useEffect(() => {
        if (dsStatus != 'unitiated' && dsStatus != 'changed') return;
        dispatch(FetchDataSets());

        return function () {
        }
    }, [dispatch, dsStatus]);

    return (
        <div className="row" style={{ margin: 10 }}>
            <div className="col-8" style={{ padding: '0 0 0 0' }}>
                <div className="card">
                    <div className="card-header">My DataSets</div>
                    <div className="card-body">
                        <Table<TrenDAP.iDataSet>
                        cols={[
                                { key: 'Name', field: 'Name', label: 'Name' },
                                { key: 'Public', field: 'Public', label: 'Global', headerStyle: { width: 75 }, rowStyle: { width: 75 },content: (item, key, style) => <span>{item[key] ? HeavyCheckMark : null}</span> },
                                { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: (item, key, style) => <span>{moment(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span> },
                                {
                                    key: null,
                                    label: '',
                                    headerStyle: { width: 300 },
                                    rowStyle: { width: 300 },
                                    content: (item, key, style) =>
                                    <span>
                                            <DataSetData {...item} />
                                            {item.Data?.Status === 'idle' ? <Link to={`${homePath}ViewDataSet/${item.ID}`} title='View/Edit DataSet Data.' className='btn'>{Wrench}</Link> : null}
                                            <Link to={`${homePath}EditDataSet/${item.ID}`} title='Edit DataSet Parameters.' className='btn'>{Pencil}</Link>
                                            <a title='Clone DataSet.' className="btn" onClick={() => dispatch(CloneDataSet(item))}>{DNA}</a>
                                            <a title='Delete DataSet.' className="btn" onClick={() => dispatch(RemoveDataSet(item))}>{TrashCan}</a>
                                    </span>
                                }

                        ]}
                        tableClass="table table-hover"
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        sortKey={sortField}
                        onClick={(data) => { }}
                        onSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                        data={DataSets}
                        ascending={ascending}
                            />
                    </div>
                </div>
            </div>
            <div className="col-4" style={{ padding: '0 0 0 0' }}>
                <div className="card">
                    <div className="card-header">Global DataSets</div>
                    <div className="card-body">
                        <Table<TrenDAP.iDataSet>
                            cols={[
                                { key: 'Name', field: 'Name', label: 'Name' },
                                { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: (item, key, style) => <span>{moment(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span> },

                                //{ key: null, label: '', content: (item, key, style) => <span><EditDataSet DataSet={item} /><button className="btn" onClick={() => dispatch(RemoveDataSet(item))}>{TrashCan}</button></span> }

                            ]}
                            tableClass="table table-hover"
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            sortKey={sortField}
                            onClick={() => { }}
                            onSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                            data={publicDataSets}
                            ascending={ascending}
                        />

                    </div>
                </div>
            </div>

        </div>

    );
}


export default DataSets;