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
import { TrenDAP, Redux } from '../../global';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ReactTable } from '@gpa-gemstone/react-table'
import { Sort, FetchDataSets, SelectDataSetsStatus, RemoveDataSet, SelectDataSetsForUser, SelectDataSetsAllPublicNotUser, SelectDataSetsSortField, SelectDataSetsAscending, CloneDataSet, New } from './DataSetsSlice';
import moment from 'moment';
import { DNA, TrashCan, HeavyCheckMark, Pencil } from '@gpa-gemstone/gpa-symbols';
import { Warning, ToolTip } from '@gpa-gemstone/react-interactive'
import { useNavigate } from "react-router-dom";


type Hover = ('Pencil' | 'Clone' | 'Delete' | 'None')

const DataSets: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const DataSets = useAppSelector((state: Redux.StoreState) => SelectDataSetsForUser(state, userName));
    const publicDataSets = useAppSelector((state: Redux.StoreState) => SelectDataSetsAllPublicNotUser(state, userName));

    const [deleteItem, setDeleteItem] = React.useState<TrenDAP.iDataSet>(null);
    const [hover, setHover] = React.useState<Hover>('None')
    const dsStatus = useAppSelector(SelectDataSetsStatus);

    const sortField = useAppSelector(SelectDataSetsSortField);
    const ascending = useAppSelector(SelectDataSetsAscending);

    React.useEffect(() => {
        if (dsStatus != 'unitiated' && dsStatus != 'changed') return;
        dispatch(FetchDataSets());

    }, [dispatch, dsStatus]);

    return (
        <div className="container-fluid d-flex h-100 flex-row" style={{ height: 'inherit', padding: '0 0 0 0' }}>
            <div className="col-8" style={{ padding: '0 20px 0 0' }}>
                <div className="card" style={{ width: '100%', height: '100%' }}>
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h4>My Data Sets</h4>
                            </div>
                            <div className="col">
                                <button className="btn btn-info pull-right"
                                    onClick={() => {
                                        dispatch(New());
                                        navigate(`${homePath}DataSets/EditDataSet/-1`);
                                    }}
                                >Add New</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0" style={{ overflow: "hidden" }}>
                        <ReactTable.Table<TrenDAP.iDataSet>
                            TableClass={"table table-hover"}
                            TableStyle={{
                                padding: 0, width: 'calc(100%)', height: '100%',
                                tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0
                            }}
                            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            OnSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                            Data={DataSets}
                            Ascending={ascending}
                            SortKey={sortField}
                            KeySelector={item => item.ID}
                        >
                            <ReactTable.Column<TrenDAP.iDataSet>
                                Key={'Name'}
                                AllowSort={true}
                                Field={'Name'}
                            >
                                Name
                            </ReactTable.Column>
                            <ReactTable.Column<TrenDAP.iDataSet>
                                Key={'Public'}
                                AllowSort={true}
                                Field={'Public'}
                                Content={(d) => <span>{d.item[d.key] ? HeavyCheckMark : null}</span>}
                            >
                                Shared
                            </ReactTable.Column>
                            <ReactTable.Column<TrenDAP.iDataSet>
                                Key={'UpdatedOn'}
                                AllowSort={true}
                                Field={'UpdatedOn'}
                                Content={(d) => <span>{moment(d.item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span>}
                            >
                                Updated
                            </ReactTable.Column>
                            <ReactTable.Column<TrenDAP.iDataSet>
                                Key={'Status'}
                                AllowSort={false}
                                Content={(d) =>
                                    <span>
                                        <button data-toggle="tooltip" data-tooltip="pencil-btn" data-placement="bottom" className="btn" onMouseEnter={() => setHover('Pencil')}
                                            onMouseLeave={() => setHover('None')} onClick={() => navigate(`${homePath}DataSets/EditDataSet/${d.item.ID}`)}>
                                            {Pencil}
                                        </button>
                                        <ToolTip Show={hover === 'Pencil'} Position={'top'} Target={'pencil-btn'}><p>Edit Data Set Parameters</p></ToolTip>
                                        <a className="btn" data-toggle="tooltip" data-tooltip="clone-btn" data-placement="bottom" onMouseEnter={() => setHover('Clone')}
                                            onClick={() => dispatch(CloneDataSet(d.item))} onMouseLeave={() => setHover('None')}>
                                            {DNA}
                                        </a>
                                        <ToolTip Show={hover === 'Clone'} Position={'top'} Target={'clone-btn'}><p>Clone Data Set</p></ToolTip>
                                        <a className="btn" onClick={() => setDeleteItem(d.item)} data-tooltip="delete-btn" data-toggle="tooltip" data-placement="bottom"
                                            onMouseEnter={() => setHover('Delete')} onMouseLeave={() => setHover('None')}>
                                            {TrashCan}
                                        </a>
                                        <ToolTip Show={hover === 'Delete'} Position={'top'} Target={'delete-btn'}><p>Delete Data Set</p></ToolTip>
                                    </span>
                                }
                            >
                                {'\u200B'}
                            </ReactTable.Column>
                        </ReactTable.Table>
                    </div>
                </div>
            </div>
            <div className="col-4" style={{ padding: '0 0 0 0' }}>
                <div className="card" style={{ width: '100%', height: '100%' }}>
                    <div className="card-header">
                        <h4>
                            Shared Data Sets
                        </h4>
                    </div>
                    <div className="card-body p-0" style={{ overflow: "hidden" }}>
                        <ReactTable.Table<TrenDAP.iDataSet>
                            TableClass={"table table-hover"}
                            TableStyle={{
                                padding: 0, width: 'calc(100%)', height: '100%',
                                tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0
                            }}
                            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            Data={publicDataSets}
                            Ascending={ascending}
                            OnSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                            SortKey={sortField}
                            KeySelector={(item) => item.ID}
                        >
                            <ReactTable.Column<TrenDAP.iDataSet>
                                Key={'Name'}
                                AllowSort={true}
                                Field={'Name'}
                            >
                                Name
                            </ReactTable.Column>
                            <ReactTable.Column<TrenDAP.iDataSet>
                                Key={'UpdatedOn'}
                                AllowSort={true}
                                Field={'UpdatedOn'}
                                Content={(item) => <span>{moment(item.item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span>}
                            >
                                Updated
                            </ReactTable.Column>
                        </ReactTable.Table>
                    </div>
                </div>
            </div>
            <Warning Title={'Delete ' + deleteItem?.Name} Show={deleteItem != null}
                Message={"This will remove the Dataset and can not be undone."} CallBack={(c) => { if (c) dispatch(RemoveDataSet(deleteItem)); setDeleteItem(null); }} />
        </div>

    );
}


export default DataSets;