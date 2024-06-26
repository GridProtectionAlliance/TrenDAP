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

const EventSelector: React.FC<WidgetTypes.IEventSourceSelectionProps<any>> = (props) => {
    const [allEventSources, setAllEventSources] = React.useState<WidgetTypes.ISelectedEvents<any>[]>([]);
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [sortField, setSortField] = React.useState<keyof WidgetTypes.ISelectedEvents<any>>('Name');

    React.useEffect(() => {
        if (props.SelectedSources.length === 0) return;
        setAllEventSources(_.orderBy(props.SelectedSources, [sortField], [ascending ? 'asc' : 'desc']));
    }, [ascending, sortField, props.SelectedSources]);

    return (
        <ReactTable.Table<WidgetTypes.ISelectedEvents<any>>
            TableClass="table table-hover"
            TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
            TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            SortKey={sortField}
            OnClick={(item) => {
                const changedSource = { ...item.row };
                changedSource.Enabled = !changedSource.Enabled;
                props.SetSource(changedSource)
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
            Selected={(row) => row.Enabled}
        >
            <ReactTable.Column<WidgetTypes.ISelectedEvents<any>>
                Key={'Name'}
                AllowSort={true}
                Field={'Name'}
            >
                Name
            </ReactTable.Column>
            <ReactTable.Column<WidgetTypes.ISelectedEvents<any>>
                Key={'Type'}
                AllowSort={true}
                Field={'SourceType'}
            >
                Type
            </ReactTable.Column>
        </ReactTable.Table>);
}

export default EventSelector;