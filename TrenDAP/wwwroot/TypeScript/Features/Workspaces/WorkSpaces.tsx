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
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Sort, FetchWorkSpaces, SelectWorkSpacesStatus, RemoveWorkSpace, SelectWorkSpacesForUser, SelectWorkSpacesAllPublicNotUser, SelectWorkSpacesSortField, SelectWorkSpacesAscending, SelectNewWorkSpace } from './WorkspacesSlice';
import WorkspaceSettings from './WorkspaceSettings';
import moment from 'moment';
import { SelectDataSetsStatus, FetchDataSets } from '../DataSets/DataSetsSlice';
import { useNavigate } from 'react-router-dom';
import { ReactTable } from '@gpa-gemstone/react-table';
import { Warning } from '@gpa-gemstone/react-interactive';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';

const Workspaces: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const workSpaces = useAppSelector((state: Redux.StoreState) => SelectWorkSpacesForUser(state, userName));
    const publicWorkSpaces = useAppSelector((state: Redux.StoreState) => SelectWorkSpacesAllPublicNotUser(state, userName));
    const wsStatus = useAppSelector(SelectWorkSpacesStatus);
    const dsStatus = useAppSelector(SelectDataSetsStatus);
    const newWorkspace = useAppSelector(SelectNewWorkSpace);

    const sortField = useAppSelector(SelectWorkSpacesSortField);
    const ascending = useAppSelector(SelectWorkSpacesAscending);

    const headerRef = React.useRef<HTMLDivElement>();
    const [cardHeaderHeight, setCardHeaderHeight] = React.useState<number>(50);
    const [deletedWorkspace, setDeletedWorkspace] = React.useState<TrenDAP.iWorkSpace>(null);
    const [edittedWorkspace, setEdittedWorkspace] = React.useState<TrenDAP.iWorkSpace>(null);
    const [showAddModal, setShowAddModal] = React.useState<boolean>(false);
    const [showEditModal, setShowEditModal] = React.useState<boolean>(false);

    React.useLayoutEffect(() => {
        if (cardHeaderHeight !== headerRef.current?.offsetHeight)
            setCardHeaderHeight(headerRef.current.offsetHeight)
    })

    React.useEffect(() => {
        if (wsStatus != 'unitiated' && wsStatus != 'changed') return;
        dispatch(FetchWorkSpaces());

    }, [dispatch, wsStatus]);


    React.useEffect(() => {
        if (dsStatus != 'unitiated' && dsStatus != 'changed') return;
        dispatch(FetchDataSets());

    }, [dispatch, dsStatus]);

    return (
        <div className="row">
            <div className="col-12 col-md-6 col-xl-8">
                <div className="card h-100">
                    <div className="card-header" ref={headerRef}>
                        <div className="row">
                            <div className="d-flex col-6 justify-content-start">
                                <h4>My Workspaces</h4>
                            </div>
                            <div className="d-flex col-6 justify-content-end">
                                <button className="btn btn-primary" onClick={() => setShowAddModal(true)}> Add Workspace</button>
                                <WorkspaceSettings New={true} Workspace={newWorkspace} Show={showAddModal} SetShow={setShowAddModal} />
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{ overflow: 'hidden' }}>
                        <div className="container-fluid d-flex h-100 flex-column">
                            <ReactTable.Table<TrenDAP.iWorkSpace>
                                TableClass="table table-hover"
                                TableStyle={{
                                    padding: 0, width: 'calc(100%)', height: '100%',
                                    tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0
                                }}
                                TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                                RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                SortKey={sortField}
                                OnClick={(data, evt) => {
                                    if (evt.target.tagName.toLowerCase() === 'td')
                                        navigate(`${homePath}Workspaces/${data.row.ID}`)
                                }}
                                OnSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                                Data={workSpaces}
                                Ascending={ascending}
                                KeySelector={(row) => row.ID}
                            >
                                <ReactTable.Column<TrenDAP.iWorkSpace>
                                    Key={'Name'}
                                    AllowSort={true}
                                    Field={'Name'}
                                >
                                    Name
                                </ReactTable.Column>
                                <ReactTable.Column<TrenDAP.iWorkSpace>
                                    Key={'Public'}
                                    AllowSort={true}
                                    Field={'Public'}
                                    Content={(row) => <span>{row.item[row.key] ? <ReactIcons.CheckMark Color="green" /> : null}</span>}
                                >
                                    Shared
                                </ReactTable.Column>
                                <ReactTable.Column<TrenDAP.iWorkSpace>
                                    Key={'UpdatedOn'}
                                    AllowSort={true}
                                    Field={'UpdatedOn'}
                                    Content={(row) => <span>{moment(row.item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span>}
                                >
                                    Updated
                                </ReactTable.Column>
                                <ReactTable.Column<TrenDAP.iWorkSpace>
                                    Key={'Buttons'}
                                    AllowSort={false}
                                    Content={(row) =>
                                        <>
                                            <span>
                                                <button className="btn" onClick={() => { setEdittedWorkspace(row.item); setShowEditModal(true);  }}><ReactIcons.Pencil /></button>
                                                <button className="btn" onClick={() => setDeletedWorkspace(row.item)}><ReactIcons.TrashCan Color="red" /></button>
                                            </span>
                                        </>
                                    }>
                                    {'\u200B'}
                                </ReactTable.Column>
                            </ReactTable.Table>
                            <WorkspaceSettings Workspace={edittedWorkspace} New={false} Show={showEditModal && edittedWorkspace != null} SetShow={setShowEditModal} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block col-6 col-xl-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h4>Shared Workspaces</h4>
                    </div>
                    <div className="card-body" style={{ overflow: 'hidden' }}>
                        <div className="container-fluid d-flex h-100 flex-column">
                            <ReactTable.Table<TrenDAP.iWorkSpace>
                                TableClass="table table-hover"
                                TableStyle={{
                                    padding: 0, width: 'calc(100%)', height: '100%',
                                    tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0
                                }}
                                TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                                RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                SortKey={sortField}
                                OnClick={(data, evt) => {
                                    if (evt.target.tagName.toLowerCase() === 'td')
                                        navigate(`${homePath}Workspaces/${data.row.ID}`)
                                }}
                                OnSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                                Data={publicWorkSpaces}
                                Ascending={ascending}
                                KeySelector={row => row.ID}
                            >
                                <ReactTable.Column<TrenDAP.iWorkSpace>
                                    Key={'Name'}
                                    AllowSort={true}
                                    Field={'Name'}
                                >
                                    Name
                                </ReactTable.Column>
                                <ReactTable.Column<TrenDAP.iWorkSpace>
                                    Key={'UpdatedOn'}
                                    AllowSort={true}
                                    Field={'UpdatedOn'}
                                    Content={(row) => <span>{moment(row.item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')}</span>}
                                >
                                    Updated
                                </ReactTable.Column>
                            </ReactTable.Table>
                        </div>
                        <Warning Title={'Delete ' + deletedWorkspace?.Name} Show={deletedWorkspace != null} Message={"This will remove the workspace and can not be undone."}
                            CallBack={(c) => {
                                if (c)
                                    dispatch(RemoveWorkSpace(deletedWorkspace));
                                setDeletedWorkspace(null);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workspaces;