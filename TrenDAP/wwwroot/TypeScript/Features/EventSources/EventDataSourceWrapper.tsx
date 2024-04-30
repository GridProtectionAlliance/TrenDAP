//******************************************************************************************************
//  EventDataSourceWrapper.tsx - Gbtc
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
import * as _ from 'lodash';
import { TrenDAP } from '../../global';
import { EventSourceTypes, IEventSource, EventDataSources } from '../EventSources/Interface';

interface IProps {
    DataSet: TrenDAP.iDataSet,
    Connection: EventSourceTypes.IEventSourceDataSet,
    EventDataSource: EventSourceTypes.IEventSourceView,
    SetConnection: (arg: EventSourceTypes.IEventSourceDataSet) => void,
    SetErrors: (e: string[]) => void
}

const EventDataSourceWrapper: React.FunctionComponent<IProps> = (props: IProps) => {
    const implementation: IEventSource<any, any> | null = React.useMemo(() => EventDataSources.find(t => t.Name == props.EventDataSource.Type), [props.EventDataSource.Type])
    
    const settings = React.useMemo(() => {
        if (implementation == null)
            return {};
        const s = _.cloneDeep(implementation.DefaultDataSetSettings ?? {});
        let custom = props.Connection.Settings;

        for (const [k] of Object.entries(implementation?.DefaultDataSetSettings ?? {})) {
            if (custom.hasOwnProperty(k))
                s[k] = _.cloneDeep(custom[k]);
        }
        return s;
    }, [implementation, props.Connection.Settings]);

    // Ensure that source settings are valid
    const eventSource = React.useMemo(() => {
        if (implementation == null)
            return props.EventDataSource;
        const src = _.cloneDeep(props.EventDataSource);
        const sourceSettings = _.cloneDeep(implementation.DefaultSourceSettings ?? {});
        let custom = props.EventDataSource.Settings;
        for (const [k] of Object.entries(sourceSettings)) {
            if (custom.hasOwnProperty(k))
                sourceSettings[k] = _.cloneDeep(custom[k]);
        }
        src.Settings = sourceSettings;
        return src;

    }, [props.EventDataSource]);

    return (
        <div className={"tab-pane container active"}>
            {implementation != null ? <implementation.DataSetUI
                EventSource={eventSource}
                DataSet={props.DataSet}
                SetErrors={props.SetErrors}
                Settings={settings}
                SetSettings={(s) => props.SetConnection({ ...props.Connection, Settings: s })} /> : <></>}
        </div>
    );
}

export default EventDataSourceWrapper;