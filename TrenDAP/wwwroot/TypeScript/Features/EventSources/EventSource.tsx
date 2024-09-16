//******************************************************************************************************
//  EventSources.tsx - Gbtc
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
import * as _ from 'lodash';
import { EventSourceTypes, IEventSource } from './Interface';
import { EventDataSources } from './ByEventSources';
import { Input, Select, CheckBox } from '@gpa-gemstone/react-forms';

interface IProps {
    EventSource: EventSourceTypes.IEventSourceView,
    SetEventSource: (ds: EventSourceTypes.IEventSourceView) => void,
    SetErrors: (e: string[]) => void
}

const EventSource: React.FunctionComponent<IProps> = (props: IProps) => {
    const [configErrors, setConfigErrors] = React.useState<string[]>([]);
    const [privateErrors, setPrivateErrors] = React.useState<string[]>([]);
    const implementation: IEventSource<any, any, any> | null = React.useMemo(() => {
        setConfigErrors([]);
        setPrivateErrors([]);
        return EventDataSources.find(t => t.Name == props.EventSource.Type)
    }            , [props.EventSource.Type])
    const settings = React.useMemo(() => {
        if (implementation == null)
            return {};
        const s = _.cloneDeep(implementation.DefaultSourceSettings ?? {});
        const custom = props.EventSource.Settings;

        for (const [k] of Object.entries(implementation?.DefaultSourceSettings ?? {})) {
            if (custom.hasOwnProperty(k))
                s[k] = _.cloneDeep(custom[k]);
        }
        return s;
    }, [implementation, props.EventSource.Settings]);

    const privateSettings = React.useMemo(() => {
        if (implementation == null)
            return {};
        const s = _.cloneDeep(implementation.DefaultPrivateSourceSettings ?? {});
        const custom = props.EventSource.PrivateSettings;

        for (const [k] of Object.entries(implementation?.DefaultPrivateSourceSettings ?? {})) {
            if (custom.hasOwnProperty(k))
                s[k] = _.cloneDeep(custom[k]);
        }
        return s;
    }, [implementation, props.EventSource.PrivateSettings]);


    React.useEffect(() => {
        const errors: string[] = [];
        if (!valid('Name')) errors.push("Name between 0 and 200 characters is required.");
        props.SetErrors([...errors, ...configErrors, ...privateErrors]);
    }, [props.EventSource.Name, configErrors, privateErrors])

    function valid(field: keyof (EventSourceTypes.IEventSourceView)): boolean {
        if (field == 'Name')
            return props.EventSource.Name != null && props.EventSource.Name.length > 0 && props.EventSource.Name.length <= 200;
        return false;
    }

    return (
        <form>
            <Input<EventSourceTypes.IEventSourceView> Record={props.EventSource} Field="Name" Setter={props.SetEventSource} Valid={valid} />
            <Select<EventSourceTypes.IEventSourceView> Record={props.EventSource} Label="Type" Field="Type" Setter={props.SetEventSource}
                Options={EventDataSources.map((type) => ({ Value: type.Name, Label: type.Name }))} />
            <CheckBox<EventSourceTypes.IEventSourceView> Record={props.EventSource} Field="Public" Label='Shared' Setter={props.SetEventSource} />
            {implementation?.PrivateConfigUI != null ?
                <>
                    <hr />
                    <implementation.PrivateConfigUI SetErrors={setPrivateErrors} Settings={privateSettings} SetSettings={(s) => props.SetEventSource({ ...props.EventSource, PrivateSettings: s })} />
                </> : <></>}
            {implementation?.ConfigUI != null ?
                <>
                    <hr />
                    <implementation.ConfigUI SetErrors={setConfigErrors} Settings={settings} SetSettings={(s) => props.SetEventSource({ ...props.EventSource, Settings: s })} />
                </> : <></>}
        </form>
    );
}

export default EventSource;