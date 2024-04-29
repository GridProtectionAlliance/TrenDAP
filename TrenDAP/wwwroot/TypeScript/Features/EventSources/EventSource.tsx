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
import { EventSourceTypes } from '../../global';
import { useAppSelector } from '../../hooks';
import { Input, Select, CheckBox, DatePicker } from '@gpa-gemstone/react-forms';
import { SelectEventSourceTypes, SelectEventSourceTypesStatus, FetchEventSourceTypes } from './Slices/EventSourceTypesSlice';
import { useAppDispatch } from '../../hooks';

interface IProps {
    EventSource: EventSourceTypes.IEventSourceView,
    SetEventSource: (ds: EventSourceTypes.IEventSourceView) => void,
    SetErrors: (e: string[]) => void
}

const EventSource: React.FunctionComponent<IProps> = (props: IProps) => {
    const dispatch = useAppDispatch();
    const evtTypeStatus = useAppSelector(SelectEventSourceTypesStatus);
    const eventSourceTypes = useAppSelector(SelectEventSourceTypes);
    const [useExpiredField, setUseExpiredField] = React.useState<boolean>(props.EventSource.Expires != null);

    React.useEffect(() => {
        if (evtTypeStatus === 'unitiated' || evtTypeStatus === 'changed')
            dispatch(FetchEventSourceTypes());
    }, [evtTypeStatus]);

    React.useEffect(() => {
        const errors: string[] = [];
        if (!valid('Name')) errors.push("Name between 0 and 200 characters is required.");
        props.SetErrors(errors);
    }, [props.EventSource])

    function valid(field: keyof (EventSourceTypes.IEventSourceView)): boolean {
        if (field == 'Name')
            return props.EventSource.Name != null && props.EventSource.Name.length > 0 && props.EventSource.Name.length <= 200;
        return false;
    }

    return (
        <form>
            <Input<EventSourceTypes.IEventSourceView> Record={props.EventSource} Field="Name" Setter={props.SetEventSource} Valid={valid} />
            <Select<EventSourceTypes.IEventSourceView> Record={props.EventSource} Label="EventSource Type" Field="EventSourceTypeID" Setter={item => {
                const newRecord = { ...props.EventSource, EventSourceTypeID: Number(item.EventSourceTypeID) }
                props.SetEventSource(newRecord);
            }} Options={eventSourceTypes.map(x => ({ Value: x.ID.toString(), Label: x.Name }))} />
            <Input<EventSourceTypes.IEventSourceView> Record={props.EventSource} Field="URL" Setter={props.SetEventSource} Valid={() => true} />
            <Input<EventSourceTypes.IEventSourceView> Record={props.EventSource} Field="RegistrationKey" Label={'Registration Key'} Setter={props.SetEventSource} Valid={() => true} />
            <CheckBox<{ expires: boolean }> Record={{ expires: useExpiredField }} Field="expires" Label='Expires' Setter={item => {
                if(!item.expires)
                    props.SetEventSource({ ...props.EventSource, Expires: null });
                else if (props.EventSource.Expires == null)
                    props.SetEventSource({ ...props.EventSource, Expires: new Date().toISOString() })
                setUseExpiredField(item.expires)
            }} />
            {useExpiredField ? 
                <DatePicker<EventSourceTypes.IEventSourceView> Record={props.EventSource} Field={"Expires"} Type={'datetime-local'} Valid={() => true} Label={"Expiration Date"} Setter={props.SetEventSource} Feedback={"Date can not expire today."} />
                : null
            }
            <div className="row">
                <div className='col'>
                    <CheckBox<EventSourceTypes.IEventSourceView> Record={props.EventSource} Field="Public" Label='Shared' Setter={props.SetEventSource} />
                </div>
            </div>
        </form>
    );
}

export default EventSource;