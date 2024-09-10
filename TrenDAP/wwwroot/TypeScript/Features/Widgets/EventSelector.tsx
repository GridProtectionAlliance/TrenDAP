//******************************************************************************************************
//  EventSelector.tsx - Gbtc
//
//  Copyright (c) 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  06/18/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import _ from 'lodash';
import { WidgetTypes } from './Interfaces';
import { ReactTable } from '@gpa-gemstone/react-table';

interface IGenericSelector extends WidgetTypes.IEventSourceSelectionProps<unknown> {
    DefaultSettings: unknown
}

const EventSelector: React.FC<IGenericSelector> = (props) => {
    const [allEventSources, setAllEventSources] = React.useState<WidgetTypes.ISelectedEvents<unknown>[]>([]);
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [sortField, setSortField] = React.useState<keyof WidgetTypes.ISelectedEvents<unknown>>('Name');

    React.useEffect(() => {
        if (props.AllEventSources.length === 0) return;
        // All keys should be unique, positive keys exist in map, negative don't
        const tempSources: WidgetTypes.ISelectedEvents<unknown>[] = props.AllEventSources
            .filter(eventSource => props.SelectedSources.findIndex(selected => selected.ID === eventSource.ID) === -1)
            .map((src) => ({ ...src, Key: -src.ID, EventSettings: props.DefaultSettings}));
        setAllEventSources(_.orderBy(tempSources.concat(props.SelectedSources), [sortField], [ascending ? 'asc' : 'desc']));
    }, [props.AllEventSources, props.SelectedSources, props.DefaultSettings]);

    React.useEffect(() => {
        if (allEventSources.length === 0) return;
        setAllEventSources(_.orderBy(allEventSources, [sortField], [ascending ? 'asc' : 'desc']));
    }, [ascending, sortField]);

    return (
        <ReactTable.Table<WidgetTypes.ISelectedEvents<unknown>>
            TableClass="table table-hover"
            TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            SortKey={sortField}
            OnClick={(item) => {
                const ind = props.SelectedSources.findIndex(src => src.ID === item.row.ID);
                if (ind !== -1) props.RemoveSource(props.SelectedSources[ind]);
                else props.AddOrEditSource(item.row);
            }}
            OnSort={data => {
                if (sortField === data.colField) setAscending(a => !a);
                else {
                    setSortField(data.colField);
                    setAscending(true);
                }
            }}
            Data={allEventSources}
            Ascending={ascending}
            KeySelector={(row) => row.Key}
            Selected={(row) => props.SelectedSources.findIndex(selected => selected.ID === row.ID) !== -1}
        >
            <ReactTable.Column<WidgetTypes.ISelectedEvents<unknown>>
                Key={'Name'}
                AllowSort={true}
                Field={'Name'}
            >
                Name
            </ReactTable.Column>
            <ReactTable.Column<WidgetTypes.ISelectedEvents<unknown>>
                Key={'Type'}
                AllowSort={true}
                Field={'SourceType'}
            >
                Type
            </ReactTable.Column>
        </ReactTable.Table>);
}

export default EventSelector;