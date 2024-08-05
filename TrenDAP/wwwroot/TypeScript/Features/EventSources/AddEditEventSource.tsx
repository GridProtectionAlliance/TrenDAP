//******************************************************************************************************
//  AddEditEventSource.tsx - Gbtc
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
import { useAppDispatch } from '../../hooks';
import { UpdateEventSource, AddEventSource } from './Slices/EventSourcesSlice';
import EventSource from './EventSource';
import { EventSourceTypes } from './Interface';
import { Modal } from '@gpa-gemstone/react-interactive';
import { CrossMark } from '@gpa-gemstone/gpa-symbols';

interface IProps {
    EventSource: EventSourceTypes.IEventSourceView,
    Show: boolean,
    SetShow: (shw: boolean) => void
}

const AddEditEventSource: React.FunctionComponent<IProps> = (props: IProps) => {
    const dispatch = useAppDispatch();
    const [eventSource, setEventSource] = React.useState<EventSourceTypes.IEventSourceView>(props.EventSource);
    const [errors, setErrors] = React.useState<string[]>([]);

    React.useEffect(() => { setEventSource(props.EventSource); }, [props.EventSource])

    if (eventSource == null) return <></>;
    return (
        <Modal
            ConfirmBtnClass={"btn btn-primary pull-right"}
            DisableConfirm={errors.length > 0}
            Show={props.Show}
            ShowCancel={false}
            ShowX={true}
            ConfirmText={'Save'}
            ConfirmShowToolTip={errors.length > 0}
            ConfirmToolTipContent={errors.map((e, i) => <p key={2 * i + 1}>{CrossMark} {e} </p>)}
            Title={`${eventSource.ID > -1 ? 'Edit' : 'Add New'} Event Data Source`}
            CallBack={conf => {
                if (conf) {
                    if (eventSource.ID > -1) dispatch(UpdateEventSource(eventSource));
                    else dispatch(AddEventSource(eventSource));
                }
                props.SetShow(false);
            }}
        >
            <EventSource EventSource={eventSource} SetEventSource={setEventSource} SetErrors={setErrors} />
        </Modal>
    );
}

export default AddEditEventSource;