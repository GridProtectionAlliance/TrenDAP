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
import _ from 'lodash';
import { DataSourceTypes } from '../../global';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { FetchDataSources, SelectDataSourcesStatus, RemoveDataSource, SelectDataSources } from './DataSourcesSlice'
import { ReactTable } from '@gpa-gemstone/react-table';
import EditDataSource from './EditDataSource';
import { TrashCan, HeavyCheckMark } from './../../Constants';
import AddNewDataSource from './AddNewDataSource';
import { Warning } from '@gpa-gemstone/react-interactive';
import XDADataSource from './Implementations/XDADataSource';
import SapphireDataSource from './Implementations/SapphireDataSource';
import OpenHistorianDataSource from './Implementations/OpenHistorianDataSource';
import { IDataSource } from './Interface';

export const AllSources: IDataSource<any, any>[] = [XDADataSource, SapphireDataSource, OpenHistorianDataSource];

const DataSources: React.FunctionComponent = () => {
    return (
        <div className="container-fluid d-flex h-100 flex-row" style={{ height: 'inherit', padding: '0 0 0 0' }}>
            <div className="col-8" style={{ padding: '0 20px 0 0' }}>
                <div className="card" style={{ width: '100%', height: '100%' }}>
                    <div className="card-header">
                        <div className="row">
                            <div className="d-flex col-6 justify-content-start">
                                <h4>My Data Sources</h4>
                            </div>
                            <div className="d-flex col-6 justify-content-end">
                                <AddNewDataSource/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <DataSourceTable OwnedByUser={true}/>
                    </div>
                </div>
            </div>
            <div className="col-4" style={{ padding: '0 0 0 0' }}>
                <div className="card" style={{ width: '100%', height: '100%' }}>
                    <div className="card-header"><h4>Shared Data Sources</h4></div>
                    <div className="card-body p-0">
                        <DataSourceTable OwnedByUser={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ITableProps {
    OwnedByUser: boolean
}

const DataSourceTable = React.memo((props: ITableProps) => {
    const [sortField, setSortField] = React.useState<string>('Name');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [dataSources, setDataSources] = React.useState<DataSourceTypes.IDataSourceView[]>([]);

    const dispatch = useAppDispatch();
    const dsStatus = useAppSelector(SelectDataSourcesStatus);
    const allDataSources = useAppSelector(SelectDataSources);
    const [deleteItem, setDeleteItem] = React.useState<DataSourceTypes.IDataSourceView>(null);

    React.useEffect(() => {
        if (dsStatus === 'unitiated' || dsStatus === 'changed') dispatch(FetchDataSources());
    }, [dsStatus]);

    React.useEffect(() => {
        setDataSources(_.orderBy(allDataSources.filter(source => {
            if (props.OwnedByUser) return source.User === userName;
            else return source.Public && source.User !== userName;
        }), [sortField], [ascending ? 'asc' : 'desc']));
    }, [sortField, ascending, allDataSources, props.OwnedByUser]);

    return (
        <>
            <ReactTable.Table<DataSourceTypes.IDataSourceView>
                TableClass="table table-hover"
                TableStyle={{
                    padding: 0, width: 'calc(100%)', height: '100%',
                    tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0
                }}
                TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                // Small note: ReactTable gives the key as sort, but here we wanna use field. This is not an issue if they match.
                SortKey={sortField}
                OnClick={() => { }}
                OnSort={data => {
                    if (data.colKey === sortField) setAscending(s => !s);
                    else setSortField(data.colKey);
                }}
                Data={dataSources}
                KeySelector={source => source.ID}
                Ascending={ascending}>
                <ReactTable.Column<DataSourceTypes.IDataSourceView> Key={'Name'} Field={'Name'}>Name</ReactTable.Column>
                <ReactTable.Column<DataSourceTypes.IDataSourceView> Key={'Type'} Field={'Type'}>Type</ReactTable.Column>
                {
                    props.OwnedByUser ?
                        <ReactTable.Column<DataSourceTypes.IDataSourceView> AllowSort={false} Key={'Edit'} Field={'Public'}
                            Content={row => <span>{row.item.Public ? HeavyCheckMark : null}</span>}>Shared</ReactTable.Column>
                        : <></>
                }
                {
                    props.OwnedByUser ?
                        <ReactTable.Column<DataSourceTypes.IDataSourceView> AllowSort={false} Key={'Delete'} Field={'Public'}
                            Content={row =>
                                <span>
                                    <EditDataSource DataSource={row.item}/>
                                    <button className="btn" onClick={() => setDeleteItem(row.item)}>{TrashCan}</button>
                                </span>}
                        ><></></ReactTable.Column>
                        : <></>
                }
            </ReactTable.Table>
            <Warning Title={'Delete ' + deleteItem?.Name} Show={deleteItem != null} Message={"This will remove the Data Source and can not be undone."}
                CallBack={(c) => {
                    if (c)
                        dispatch(RemoveDataSource(deleteItem));
                    setDeleteItem(null);
                }} />
        </>
    );
});

export default DataSources;