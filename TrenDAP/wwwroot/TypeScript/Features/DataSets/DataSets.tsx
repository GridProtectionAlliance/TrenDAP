﻿//******************************************************************************************************
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
import { TrenDAP } from '../../global';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@gpa-gemstone/react-table/lib/index'
import { Sort, FetchDataSets, SelectDataSetsStatus, RemoveDataSet, SelectDataSetsForUser, SelectDataSetsAllPublicNotUser, SelectDataSetsSortField, SelectDataSetsAscending } from './DataSetsSlice';
import EditDataSet from './EditDataSet';
import { TrashCan, HeavyCheckMark, Pencil } from './../../Constants'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const DataSets: React.FunctionComponent = (props: {}) => {
    //const history = useHistory();
    //const context = React.useContext();
    const dispatch = useDispatch();
    const DataSets = useSelector(state => SelectDataSetsForUser(state, userName));
    const publicDataSets = useSelector(state => SelectDataSetsAllPublicNotUser(state, userName));

    const wsStatus = useSelector(SelectDataSetsStatus);

    const sortField = useSelector(SelectDataSetsSortField);
    const ascending = useSelector(SelectDataSetsAscending);

    React.useEffect(() => {
        if (wsStatus != 'unitiated' && wsStatus != 'changed') return;
        let promise = dispatch(FetchDataSets());

        return function () {
            if (wsStatus === 'loading')
                promise.abort();
        }
    }, [dispatch, wsStatus]);

    return (
        <div className="row" style={{ margin: 10 }}>
            <div className="col-8">
                <div className="card">
                    <div className="card-header">My DataSets</div>
                    <div className="card-body">
                        <Table<TrenDAP.iDataSet>
                        cols={[
                            { key: 'Name', label: 'Name' },
                            { key: 'Public', label: 'Public', content: (item, key, style) => <span>{item[key] ? HeavyCheckMark : null}</span> },
                            { key: 'UpdatedOn', label: 'Updated', content: (item, key, style) => <span>{moment(item[key]).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span> },
                            { key: null, label: '', headerStyle: { width: 125 }, rowStyle: { width: 125 }, content: (item, key, style) => <span><Link to={`${homePath}EditDataSet/${item.ID}`} className='btn'>{Pencil}</Link><a className="btn" onClick={() => dispatch(RemoveDataSet(item)) }>{TrashCan}</a></span>}

                        ]}
                        tableClass="table table-hover"
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        sortField={sortField}
                        onClick={(data) => { }}
                        onSort={data => dispatch(Sort({ SortField: data.col, Ascending: data.ascending }))}
                        data={DataSets}
                        ascending={ascending}
                            />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card-header">Public DataSets</div>
                    <div className="card-body">
                        <Table<TrenDAP.iDataSet>
                            cols={[
                                { key: 'Name', label: 'Name' },
                                { key: 'UpdatedOn', label: 'Updated', content: (item, key, style) => <span>{moment(item[key]).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span> },

                                //{ key: null, label: '', content: (item, key, style) => <span><EditDataSet DataSet={item} /><button className="btn" onClick={() => dispatch(RemoveDataSet(item))}>{TrashCan}</button></span> }

                            ]}
                            tableClass="table table-hover"
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            sortField={sortField}
                            onClick={() => { }}
                            onSort={data => dispatch(Sort({ SortField: data.col, Ascending: data.ascending }))}
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