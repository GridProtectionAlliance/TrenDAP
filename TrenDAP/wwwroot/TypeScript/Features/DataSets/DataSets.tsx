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
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ReactTable } from '@gpa-gemstone/react-table'
import { Sort, FetchDataSets, SelectDataSetsStatus, RemoveDataSet, SelectDataSetsForUser, SelectDataSetsAllPublicNotUser, SelectDataSetsSortField, SelectDataSetsAscending, CloneDataSet, New } from './DataSetsSlice';
import moment from 'moment';
import DataSetData from './DataSetData';
import { DNA, TrashCan, HeavyCheckMark, Pencil, Wrench } from '@gpa-gemstone/gpa-symbols';
import { Warning } from '@gpa-gemstone/react-interactive'

const DataSets: React.FunctionComponent = (props: {}) => {
    const dispatch = useAppDispatch();
    const DataSets = useAppSelector((state: Redux.StoreState) => SelectDataSetsForUser(state, userName));
    const publicDataSets = useAppSelector((state: Redux.StoreState) => SelectDataSetsAllPublicNotUser(state, userName));

    const [deleteItem, setDeleteItem] = React.useState<TrenDAP.iDataSet>(null);
    const cardHeaderRef = React.useRef<HTMLDivElement>(null);
    const [cardHeaderHeight, setCardHeaderHeight] = React.useState<number>(50)

    const dsStatus = useAppSelector(SelectDataSetsStatus);

    const sortField = useAppSelector(SelectDataSetsSortField);
    const ascending = useAppSelector(SelectDataSetsAscending);

    React.useLayoutEffect(() => {
        if (cardHeaderHeight !== cardHeaderRef.current?.offsetHeight)
            setCardHeaderHeight(cardHeaderRef.current.offsetHeight)
    })

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
                    <div className="card-header" ref={cardHeaderRef}>
                        <div className="row">
                            <div className="col">
                                <h4>My DataSets:</h4>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary pull-right"
                                    onClick={() => {
                                        dispatch(New({}));
                                        window.location.href = `${homePath}AddNewDataSet`;
                                    }}
                                >Add New</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <ReactTable.Table<TrenDAP.iDataSet>
                            TableClass={"table table-hover"}
                            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                            OnSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                            Data={DataSets}
                            TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
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
                                HeaderStyle={{ width: 75 }}
                                RowStyle={{ width: 75 }}
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
                                        <DataSetData {...d.item} />
                                        {d.item.Data?.Status === 'idle' ?
                                            <button className="btn" title='View/Edit DataSet Data.'
                                                onClick={() => {
                                                    window.location.href = `${homePath}ViewDataSet/${d.item.ID}`;
                                                }}
                                            >{Wrench}</button>
                                            : null}
                                        <button className="btn" title='Edit DataSet Parameters.'
                                            onClick={() => {
                                                window.location.href = `${homePath}EditDataSet/${d.item.ID}`;
                                            }}
                                        >{Pencil}</button>
                                        <a title='Clone DataSet.' className="btn" onClick={() => dispatch(CloneDataSet(d.item))}>{DNA}</a>
                                        <a title='Delete DataSet.' className="btn" onClick={() => setDeleteItem(d.item)}>{TrashCan}</a>
                                    </span>
                                }
                            >
                            </ReactTable.Column>
                        </ReactTable.Table>
                    </div>
                </div>
            </div>
            <div className="col-4" style={{ padding: '0 0 0 0' }}>
                <div className="card">
                    <div className="card-header" style={{ height: cardHeaderHeight }}>Shared DataSets</div>
                    <div className="card-body">
                        <ReactTable.Table<TrenDAP.iDataSet>
                            TableClass={"table table-hover"}
                            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                            TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
                            RowStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
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