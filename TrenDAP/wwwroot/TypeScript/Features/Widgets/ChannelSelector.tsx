//******************************************************************************************************
//  ChannelSelector.tsx - Gbtc
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
//  05/03/2024 - Preston Crawford / CHristoph Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { DataSetTypes } from '../../global';
import { WidgetTypes } from './Interfaces';
import { ReactTable } from '@gpa-gemstone/react-table';
import * as _ from 'lodash';


const ChannelSelector: React.FC<WidgetTypes.IChannelSelectionProps<any, any>> = (props) => {
    const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>(props.AllChannels);
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [sortField, setSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Phase');


    const sort = (field: keyof DataSetTypes.IDataSetMetaData, ascend: boolean) => {
        setSortField(field);
        setAscending(ascend);
        setAllChannels((c) => _.orderBy(c, field, [ascend ? "asc" : "desc"]))
    }

    return <>
        <ReactTable.Table<DataSetTypes.IDataSetMetaData>
            TableClass="table table-hover"
            TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
            TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            SortKey={sortField}
            OnClick={(item) => {
                props.SelectedChannels.forEach(chan => props.RemoveChannel(chan.MetaData.ID));
                props.AddChannel(item.row.ID, null);
            }}
            OnSort={data => sort(data.colField, data.ascending)}
            Data={allChannels}
            Ascending={ascending}
            KeySelector={(row) => row.ID}
            Selected={(row) => props.SelectedChannels.find(c => c.MetaData.ID === row.ID) != null ? true : false}
        >
            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                Key={'ParentName'}
                AllowSort={true}
                Field={'ParentName'}
            >
                Parent
            </ReactTable.Column>
            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                Key={'Name'}
                AllowSort={true}
                Field={'Name'}
            >
                Name
            </ReactTable.Column>
            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                Key={'Type'}
                AllowSort={true}
                Field={'Type'}
            >
                Type
            </ReactTable.Column>

            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                Key={'Phase'}
                AllowSort={true}
                Field={'Phase'}
            >
                Phase
            </ReactTable.Column>

        </ReactTable.Table>
    </>
}

export default ChannelSelector;