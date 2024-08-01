//******************************************************************************************************
//  EventSourceCOnnectionTab.tsx - Gbtc
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
//  05/01/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { ReactTable } from '@gpa-gemstone/react-table';
import { Pencil, Plus, TrashCan } from '@gpa-gemstone/gpa-symbols';
import { TrenDAP } from '../../../global';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { FetchEventSources, SelectEventSources, SelectEventSourcesStatus } from '../../EventSources/Slices/EventSourcesSlice';
import { EventSourceTypes } from '../../EventSources/Interface';
import EventDataSourceWrapper from '../../EventSources/EventDataSourceWrapper';

interface IProps {
    EventSourceConnections: EventSourceTypes.IEventSourceDataSet[],
    SetEventSourceConnections: (newConns: EventSourceTypes.IEventSourceDataSet[]) => void,
    DataSet: TrenDAP.iDataSet,
    SetErrors: (e: string[]) => void
}

const EventSourceConnectionTab: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch();
    const eventSources = useAppSelector(SelectEventSources);
    const eventSourceStatus = useAppSelector(SelectEventSourcesStatus);
    const errors = React.useRef<Array<string[]>>(new Array<string[]>().fill(null));
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    React.useEffect(() => {
        if (eventSourceStatus === 'unitiated' || eventSourceStatus === 'changed')
            dispatch(FetchEventSources());
    }, [eventSourceStatus]);

    React.useEffect(() => {
        props.SetErrors([]);
        errors.current = new Array<string[]>().fill(null);
    }, [props.DataSet.ID]);

    const eventSource = React.useMemo(() => {
        const srcId = props.EventSourceConnections[currentIndex]?.EventSourceID;
        if (srcId == undefined) return undefined;
        return eventSources.find(src => srcId === src.ID);
    }, [eventSourceStatus, currentIndex, props.EventSourceConnections]);

    const AddDS = React.useCallback((src: EventSourceTypes.IEventSourceView) => {
        const newConns = [...props.EventSourceConnections];
        newConns.push({ ID: -1, EventSourceID: src.ID, EventSourceName: src.Name, DataSetID: props.DataSet.ID, DataSetName: props.DataSet.Name, Settings: {} });
        setCurrentIndex(newConns.length - 1);
        props.SetEventSourceConnections(newConns);
    }, [props.EventSourceConnections, props.SetEventSourceConnections, props.DataSet, currentIndex, eventSourceStatus]);

    const pushErrors = React.useCallback(() => {
        let e: string[] = [];
        errors.current.forEach(errorList => {
            if (errorList != null) e = e.concat(errorList);
        })
        props.SetErrors(e);
    }, [props.SetErrors]);

    const addWrapperErrors = React.useCallback((e: string[]) => {
        if (e.length === 0) errors.current[currentIndex] = null;
        else errors.current[currentIndex] = [`Errors from ${props.EventSourceConnections[currentIndex]?.EventSourceName}:`].concat(e);
        pushErrors();
    }, [pushErrors, currentIndex, props.EventSourceConnections]);

    return (
        <div className="row" style={{ flex: 1, overflow: 'hidden' }}>
            <div className="col-4 d-none d-xl-flex" style={{
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="row">
                    <div className="col-7">
                        <h4>Event Connections</h4>
                    </div>
                    <div className="col-5">
                        <div className="dropdown">
                            <button className="btn btn-info pull-right dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {Plus} Add New
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-header">Your Event Sources</div>
                                {eventSources.filter(src => src.User === userName).map(ds => <a key={ds.ID} className="dropdown-item" style={{ cursor: 'pointer' }}
                                    onClick={() => AddDS(ds)}>{ds.Name} ({ds.Type})</a>)}
                                <div className="dropdown-header">Shared Event Sources</div>
                                {eventSources.filter(src => src.Public && src.User !== userName).map(ds => <a key={ds.ID} className="dropdown-item" style={{ cursor: 'pointer' }}
                                    onClick={() => AddDS(ds)}>{ds.Name} ({ds.Type})</a>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ flex: 1, overflow: 'hidden' }}>
                    <div className="col" style={{
                        height: '100%', overflow: 'hidden',
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <ReactTable.Table<EventSourceTypes.IEventSourceDataSet>
                            TableClass="table table-hover"
                            Data={props.EventSourceConnections}
                            SortKey={null}
                            Ascending={null}
                            OnSort={() => { }}
                            TableStyle={{
                                padding: 0, width: '100%', height: '100%',
                                tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column'
                            }}
                            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                            RowStyle={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
                            Selected={(_item, index) => currentIndex === index}
                            KeySelector={(_item, index) => index}
                            OnClick={(item) => { setCurrentIndex(item.index); }}
                        >
                            <ReactTable.Column<EventSourceTypes.IEventSourceDataSet>
                                Key={'EventSourceName'}
                                AllowSort={true}
                                Field={'EventSourceName'}
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                            > EventSource
                            </ReactTable.Column>
                            <ReactTable.Column<EventSourceTypes.IEventSourceDataSet>
                                Key={'ID'}
                                AllowSort={false}
                                Field={'ID'}
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={row =>
                                    <span>
                                        <button className="btn pull-right" onClick={(evt) => {
                                            evt.preventDefault();
                                            evt.stopPropagation();
                                            const newConns = [...props.EventSourceConnections];
                                            newConns.splice(row.index, 1);
                                            errors.current.splice(row.index, 1);
                                            props.SetEventSourceConnections(newConns);
                                            pushErrors();
                                            if (currentIndex === row.index) setCurrentIndex(0);
                                        }}>{TrashCan}</button>
                                    </span>}
                            ><></></ReactTable.Column>
                        </ReactTable.Table>
                    </div>
                </div>
            </div>
            <div className="col-8 d-none d-xl-flex" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                {props.EventSourceConnections[currentIndex] != null ?
                    <EventDataSourceWrapper EventDataSource={eventSource} Connection={props.EventSourceConnections[currentIndex]}
                        DataSet={props.DataSet} SetErrors={addWrapperErrors}
                        SetConnection={newConn => {
                            const newConns = [...props.EventSourceConnections];
                            newConns.splice(currentIndex, 1, newConn)
                            props.SetEventSourceConnections(newConns);
                        }} /> : <></>}
            </div>
        </div>
    );

}

export default EventSourceConnectionTab;