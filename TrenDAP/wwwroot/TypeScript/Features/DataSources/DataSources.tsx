//******************************************************************************************************
//  DataSources.tsx - Gbtc
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
//  09/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, Redux } from '../../global';
import { useSelector, useDispatch } from 'react-redux';
import { Sort, SelectDataSourcesForUser, FetchDataSources, SelectDataSourcesStatus, RemoveDataSource, SelectDataSourcesAllPublicNotUser, SelectDataSourcesSortField, SelectDataSourcesAscending } from './DataSourcesSlice'
import Table from '@gpa-gemstone/react-table/lib/index'
import { SelectDataSourceTypes, SelectDataSourceTypesStatus, FetchDataSourceTypes } from '../DataSourceTypes/DataSourceTypesSlice';
import EditDataSource from './EditDataSource';
import { TrashCan, HeavyCheckMark } from './../../Constants'

const DataSources: React.FunctionComponent = (props: {}) => {
    const dispatch = useDispatch();
    const dataSources = useSelector((state: Redux.StoreState) => SelectDataSourcesForUser(state, userName));
    const publicDataSources = useSelector((state: Redux.StoreState)  => SelectDataSourcesAllPublicNotUser(state,userName));

    const dsStatus = useSelector(SelectDataSourcesStatus);
    const dataSourceTypes = useSelector(SelectDataSourceTypes);
    const dstStatus = useSelector(SelectDataSourceTypesStatus);

    const sortField = useSelector(SelectDataSourcesSortField);
    const ascending = useSelector(SelectDataSourcesAscending);

    React.useEffect(() => {
        if (dsStatus != 'unitiated' && dsStatus != 'changed') return;
        dispatch(FetchDataSources());

        return function () {
        }
    }, [dispatch, dsStatus]);

    React.useEffect(() => {
        if (dstStatus != 'unitiated') return;

        dispatch(FetchDataSourceTypes());
        return function () {
        }
    }, [dispatch, dstStatus]);

    return (
    <div className="row" style={{ margin: 10}}>
            <div className="col-6" style={{ padding: '0 0 0 0' }}>
            <div className="card">
                <div className="card-header">My DataSources</div>
                <div className="card-body">
                    <Table<TrenDAP.iDataSource>
                        cols={[
                            { key: 'Name', label: 'Name' },
                            { key: 'DataSourceTypeID', label: 'Type', content: (item, key, style) => dataSourceTypes.find(dst => item.DataSourceTypeID === dst.ID)?.Name },
                            { key: 'URL', label: 'Url' },
                            { key: 'Public', label: 'Global', content: (item, key, style) => <span>{item[key] ? HeavyCheckMark : null}</span> },
                            { key: null, label: '', content: (item, key, style) => <span><EditDataSource DataSource={item} /><button className="btn" onClick={() => dispatch(RemoveDataSource(item))}>{TrashCan}</button></span> }

                        ]}
                        tableClass="table table-hover"
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        sortField={sortField}
                        onClick={() => { }}
                        onSort={data => dispatch(Sort({SortField: data.col, Ascending: data.ascending}))}
                        data={dataSources}
                        ascending={ascending}
                    />

                </div>
            </div>
        </div>
            <div className="col-6" style={{ padding: '0 0 0 0' }}>
                <div className="card">
                    <div className="card-header">Global DataSources</div>
                    <div className="card-body">
                        <Table<TrenDAP.iDataSource>
                            cols={[
                                { key: 'Name', label: 'Name' },
                                { key: 'DataSourceTypeID', label: 'Type', content: (item, key, style) => dataSourceTypes.find(dst => item.DataSourceTypeID === dst.ID)?.Name },
                                { key: 'URL', label: 'Url' },
                                //{ key: 'Public', label: 'Global', content: (item, key, style) => <span>{item[key] ? HeavyCheckMark : null}</span> },
                                //{ key: null, label: '', content: (item, key, style) => <span><EditDataSource DataSource={item} /><button className="btn" onClick={() => dispatch(RemoveDataSource(item))}>{TrashCan}</button></span> }

                            ]}
                            tableClass="table table-hover"
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            sortField={sortField}
                            onClick={() => { }}
                            onSort={data => dispatch(Sort({ SortField: data.col, Ascending: data.ascending }))}
                            data={publicDataSources}
                            ascending={ascending}
                        />

                    </div>
                </div>

        </div>
    </div>
    );
}

export default DataSources;