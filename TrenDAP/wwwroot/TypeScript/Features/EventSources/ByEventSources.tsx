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
import { EventSourceTypes, IEventSource } from './Interface';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ReactTable } from '@gpa-gemstone/react-table';
import { SelectEventSources, SelectEventSourcesStatus, FetchEventSources, RemoveEventSource } from './Slices/EventSourcesSlice';
import { TrashCan, HeavyCheckMark, Pencil } from './../../Constants';
import AddEditEventSource from './AddEditEventSource';
import { Warning } from '@gpa-gemstone/react-interactive';
import RandomEvents from './Implementations/RandomEvents';
import OpenXDAEvents from './Implementations/OpenXDAEvents';

export const EventDataSources: IEventSource<any, any>[] = [OpenXDAEvents, RandomEvents];

const ByEventSources: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const [editEvt, setEditEvt] = React.useState<EventSourceTypes.IEventSourceView>(undefined);
    const [showDelete, setShowDelete] = React.useState<boolean>(false);
    const [showEdit, setShowEdit] = React.useState<boolean>(false);

    return (
        <div className="container-fluid d-flex h-100 flex-row" style={{ height: 'inherit', padding: '0 0 0 0' }}>
            <div className="col-8" style={{ padding: '0 20px 0 0' }}>
                <div className="card" style={{ width: '100%', height: '100%' }}>
                    <div className="card-header">
                        <div className="row">
                            <div className="d-flex col-6 justify-content-start">
                                <h4>My Event Data Sources</h4>
                            </div>
                            <div className="d-flex col-6 justify-content-end">
                                <button className="btn btn-primary" onClick={() => {
                                    setShowEdit(true);
                                    setEditEvt({
                                        ID: -1,
                                        Name: '',
                                        Type: EventDataSources[0].Name,
                                        URL: '',
                                        RegistrationKey: '',
                                        APIToken: '',
                                        Public: false,
                                        User: undefined,
                                        Settings: EventDataSources[0].DefaultSourceSettings
                                    });
                                }}>Add New</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0" style={{ overflow: "hidden" }}>
                        <EventSourceTable OwnedByUser={true} SetEventSource={setEditEvt} SetShowEdit={setShowEdit} SetShowDelete={setShowDelete} />
                    </div>
                </div>
            </div>
            <div className="col-4" style={{ padding: '0 0 0 0' }}>
                <div className="card" style={{ width: '100%', height: '100%' }}>
                    <div className="card-header"><h4>Shared Event Data Sources</h4></div>
                    <div className="card-body p-0" style={{ overflow: "hidden" }}>
                        <EventSourceTable OwnedByUser={false} SetEventSource={setEditEvt} SetShowEdit={setShowEdit} SetShowDelete={setShowDelete} />
                    </div>
                </div>
            </div>
            <AddEditEventSource EventSource={editEvt} Show={showEdit} SetShow={setShowEdit} />
            <Warning Title={'Delete ' + editEvt?.Name} Show={showDelete} Message={"This will remove the Event Data Source and can not be undone."}
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
    const allEventSources = useAppSelector(SelectEventSources);
    const evtStatus = useAppSelector(SelectEventSourcesStatus);


    React.useEffect(() => {
        if (evtStatus === 'unitiated' || evtStatus === 'changed')
            dispatch(FetchEventSources());
    }, [evtStatus]);

    // #ToDO Clean up Slicing and sorting
    React.useEffect(() => {
        setEventSources(_.orderBy(allEventSources.filter(source => {
            if (props.OwnedByUser) return source.User === userName;
            else return source.Public && source.User !== userName;
        }), [sortField], [ascending ? 'asc' : 'desc']));
    }, [sortField, ascending, allEventSources, props.OwnedByUser]);

    return (
        <ReactTable.Table<EventSourceTypes.IEventSourceView>
            TableClass="table table-hover"
            TableStyle={{
                padding: 0, width: 'calc(100%)', height: '100%',
                tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0
            }}
            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
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
            <ReactTable.Column<EventSourceTypes.IEventSourceView> Key={'Type'} Field={'Type'}>Type</ReactTable.Column>
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