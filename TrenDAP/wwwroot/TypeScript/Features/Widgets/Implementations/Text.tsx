//******************************************************************************************************
//  Text.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { WidgetTypes } from '../Interfaces';
import { Select, TextArea } from '@gpa-gemstone/react-forms';

interface IProps { Text: string, Mode: Mode }
type Mode = ('text' | 'h1' | 'h2' | 'h3' | 'bold')

export const TextWidget: WidgetTypes.IWidget<IProps, null, null> = {
    DefaultSettings: { Text: "", Mode: 'text' },
    DefaultChannelSettings: null,
    DefaultEventSourceSettings: null,
    Name: "Text",
    WidgetUI: (props) => {

        if (props.Settings?.Mode === 'text')
            return (
            <p style={{ position: 'relative' }}>{props.Settings?.Text}</p>
            );
        if (props.Settings?.Mode === 'h1')
            return (
                <h1 style={{ position: 'relative' }}>{props.Settings?.Text}</h1>
            );
        if (props.Settings?.Mode === 'h2')
            return (
                <h3 style={{ position: 'relative' }}>{props.Settings?.Text}</h3>
            );
        if (props.Settings?.Mode === 'h3')
            return (
                <h5 style={{ position: 'relative' }}>{props.Settings?.Text}</h5>
            );
        if (props.Settings?.Mode === 'bold')
            return (
                <p style={{ position: 'relative', fontWeight: 'bold' }}>{props.Settings?.Text}</p>
            );

    },
    SettingsUI: (props) => {
        return <>
            <Select<IProps>
                Label={'Mode'}
                Record={props.Settings}
                Setter={(item) => props.SetSettings(item)}
                Options={[
                    { Label: 'Text', Value: 'text' },
                    { Label: 'Heading 1', Value: 'h1' },
                    { Label: 'Heading 2', Value: 'h2' },
                    { Label: 'Heading 3', Value: 'h3' },
                    { Label: 'Bold Text', Value: 'bold' }
                ]}
                Field={'Mode'} />
            <TextArea<IProps> Record={props.Settings} Field="Text" Rows={10} Setter={r => props.SetSettings(r)} Valid={() => true} />
        </>
    },
    ChannelSelectionUI: () => {
        return <></>
    }
}