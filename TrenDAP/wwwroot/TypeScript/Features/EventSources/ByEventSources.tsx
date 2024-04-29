 //******************************************************************************************************
//  ByEventSources.tsx - Gbtc
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
//  04/29/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import _ from 'lodash';
import { EventSourceTypes } from '../../global';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ReactTable } from '@gpa-gemstone/react-table';
import { SelectEventSourceTypes, SelectEventSourceTypesStatus, FetchEventSourceTypes } from './Slices/EventSourceTypesSlice';
import { SelectEventSources, SelectEventSourcesStatus, FetchEventSources, RemoveEventSource } from './Slices/EventSourcesSlice';
import { TrashCan, HeavyCheckMark, Pencil } from './../../Constants';
import AddEditEventSource from './AddEditEventSource';
import { Warning } from '@gpa-gemstone/react-interactive';

const ByEventSources: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const evtTypes = useAppSelector(SelectEventSourceTypes);
    const evtTypeStatus = useAppSelector(SelectEventSourceTypesStatus);
    const [editEvt, setEditEvt] = React.useState<EventSourceTypes.IEventSourceView>(undefined);
    const [showDelete, setShowDelete] = React.useState<boolean>(false);
    const [showEdit, setShowEdit] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (evtTypeStatus === 'unitiated' || evtTypeStatus === 'changed')
            dispatch(FetchEventSourceTypes());
    }, [evtTypeStatus]);

    return (
        <div className="row" style={{ margin: 10}}>
            <div className="col-6" style={{ padding: '0 0 0 0' }}>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="d-flex col-6 justify-content-start">
                                <h4>My EventSources</h4>
                            </div>
                            <div className="d-flex col-6 justify-content-end">
                                <button className="btn btn-primary" onClick={() => {
                                    setShowEdit(true);
                                    setEditEvt({
                                        ID: -1,
                                        Name: '',
                                        EventSourceTypeID: evtTypes.find(type => type.Name === 'OpenXDA')?.ID ?? -1,
                                        URL: '',
                                        RegistrationKey: '',
                                        Expires: null,
                                        Public: false,
                                        User: '',
                                        Settings: undefined
                                    });
                                }}>Add New</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <EventSourceTable OwnedByUser={true} SetEventSource={setEditEvt} SetShowEdit={setShowEdit} SetShowDelete={setShowDelete} />
                    </div>
                </div>
            </div>
            <div className="col-6" style={{ padding: '0 0 0 0' }}>
                <div className="card">
                    <div className="card-header"><h4>Shared EventSources</h4></div>
                    <div className="card-body">
                        <EventSourceTable OwnedByUser={false} SetEventSource={setEditEvt} SetShowEdit={setShowEdit} SetShowDelete={setShowDelete} />
                    </div>
                </div>
            </div>
            <AddEditEventSource EventSource={editEvt} Show={showEdit} SetShow={setShowEdit} />
            <Warning Title={'Delete ' + editEvt?.Name} Show={showDelete} Message={"This will remove the EventSource and can not be undone."}
                CallBack={(c) => {
                    if (c) dispatch(RemoveEventSource(editEvt));
                    setShowDelete(false);
                }} />
        </div>
    );
}

interface ITableProps {
    OwnedByUser: boolean,
    SetEventSource: (evt: EventSourceTypes.IEventSourceView) => void,
    SetShowEdit: (shw: boolean) => void,
    SetShowDelete: (shw: boolean) => void
}

const EventSourceTable = React.memo((props: ITableProps) => {
    const [sortField, setSortField] = React.useState<string>('Name');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [eventSources, setEventSources] = React.useState<EventSourceTypes.IEventSourceView[]>([]);

    const dispatch = useAppDispatch();
    const evtTypes = useAppSelector(SelectEventSourceTypes);
    const evtTypeStatus = useAppSelector(SelectEventSourceTypesStatus);
    const allEventSources = useAppSelector(SelectEventSources);
    const evtStatus = useAppSelector(SelectEventSourcesStatus);

    React.useEffect(() => {
        if (evtTypeStatus === 'unitiated' || evtTypeStatus === 'changed')
            dispatch(FetchEventSourceTypes);
    }, [evtTypeStatus]);

    React.useEffect(() => {
        if (evtStatus === 'unitiated' || evtStatus === 'changed')
            dispatch(FetchEventSources);
    }, [evtStatus]);

    React.useEffect(() => {
        setEventSources(_.orderBy(allEventSources.filter(source => {
            if (props.OwnedByUser) return source.User === userName;
            else return source.Public && source.User !== userName;
        }), [sortField], [ascending ? 'asc' : 'desc']));
    }, [sortField, ascending, allEventSources, props.OwnedByUser]);

    return (
        <ReactTable.Table<EventSourceTypes.IEventSourceView>
            TableClass="table table-hover"
            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
            TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }}
            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            // Small note: ReactTable gives the key as sort, but here we wanna use field. This is not an issue if they match.
            SortKey={sortField}
            OnClick={() => { }}
            OnSort={data => {
                if (data.colKey === sortField) setAscending(s => !s);
                else setSortField(data.colKey);
            }}
            Data={eventSources}
            KeySelector={source => source.ID}
            Ascending={ascending}>
            <ReactTable.Column<EventSourceTypes.IEventSourceView> Key={'Name'} Field={'Name'}>Name</ReactTable.Column>
            <ReactTable.Column<EventSourceTypes.IEventSourceView> Key={'EventSourceTypeID'} Field={'EventSourceTypeID'}
                Content={row => evtTypes.find(dst => row.item.EventSourceTypeID === dst.ID)?.Name}>Type</ReactTable.Column>
            {
                props.OwnedByUser ?
                    <ReactTable.Column<EventSourceTypes.IEventSourceView> AllowSort={false} Key={'Edit'} Field={'Public'}
                        Content={row => <span>{row.item.Public ? HeavyCheckMark : null}</span>}>Shared</ReactTable.Column>
                    : <></>
            }
            {
                props.OwnedByUser ?
                    <ReactTable.Column<EventSourceTypes.IEventSourceView> AllowSort={false} Key={'Delete'} Field={'Public'}
                        Content={row =>
                            <span>
                                <button className="btn" onClick={() => { props.SetEventSource(row.item); props.SetShowEdit(true); }}>{Pencil}</button>
                                <button className="btn" onClick={() => { props.SetEventSource(row.item); props.SetShowDelete(true); }}>{TrashCan}</button>
                            </span>}
                    ><></></ReactTable.Column>
                    : <></>
            }
        </ReactTable.Table>
    );
});

export default ByEventSources;