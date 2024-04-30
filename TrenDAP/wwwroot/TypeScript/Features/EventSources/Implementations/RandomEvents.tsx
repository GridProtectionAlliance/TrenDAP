//******************************************************************************************************
//  RandomEvents.tsx - Gbtc
//
//  Copyright © 2024, Grid Protection Alliance.  All Rights Reserved.
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
import { EventSourceTypes, IEventSource } from '../Interface';
import { TrenDAP } from '../../../global';
import { Input } from '@gpa-gemstone/react-forms';
import { ComputeDuration, ComputeStartTime } from '../../DataSets/HelperFunctions'

interface ISetting { Title: string }
interface IDatasetSetting { Number: number }

const RandomEvents: IEventSource<ISetting, IDatasetSetting> = {
    DataSetUI: (props) => <Input<IDatasetSetting> Record={props.Settings} Field="Number" Setter={props.SetSettings} Valid={() => true} />,
    ConfigUI: (props) => <Input<ISetting> Record={props.Settings} Field="Title" Setter={props.SetSettings} Valid={() => true} />,
    Load: (eventSource: EventSourceTypes.IEventSourceView, dataSet: TrenDAP.iDataSet, dataConn: EventSourceTypes.IEventSourceDataSet) => {
        const t = ComputeDuration(dataSet) / dataConn.Settings.Number;
        const result: TrenDAP.IEvent[] = [];
        let n = 0;
        while (n < dataConn.Settings.Number) {
            result.push( {
                Time: n*t + ComputeStartTime(dataSet),
                Description: 'Test',
                Title: eventSource.Settings.Title,
                Duration: 0.5*t
            } ) 
            n = n + 1;
        }
        return  Promise.resolve(result) 
    },
    TestAuth: () => Promise.resolve(true),
    DefaultSourceSettings: { Title: 'test' },
    DefaultDataSetSettings: { Number: 1 },
    Name: 'Random',
}
export default RandomEvents;