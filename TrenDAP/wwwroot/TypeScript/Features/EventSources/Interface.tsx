﻿//******************************************************************************************************
//  Interface.tsx - Gbtc
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
import { cloneDeep } from 'lodash';
import { TrenDAP } from '../../global'
// The intrefaces for Event Datasources
// Interfaces = connection points to other pieces in the architecture

/* eslint-disable */

export namespace EventSourceTypes {
    // The following are how event sources are stored in DB
    export interface IEventSourceView {
        ID: number,
        Name: string,
        Type: string,
        Public: boolean,
        User: string,
        PrivateSettings: any,
        Settings: any
    }

    export interface IEventSourceDataSet {
        ID: number,
        EventSourceName: string,
        EventSourceID: number,
        DataSetName: string,
        DataSetID: number,
        Settings: any
    }

    // Eventsource as tsx needs them
    export interface IEventSourceDataSetProps<T, U> {
        // Event Source from DB
        EventSource: IEventSourceView,
        // Data Set From DB
        DataSet: TrenDAP.iDataSet,
        // Additional DataSet Settings parsed from dataset connection
        Settings: U,
        SetSettings: (newDataSetSettings: U) => void,
        SetErrors: (errors: string[]) => void
    }
}

/* Helper Function to ensure type safety on settings objects
 {T} => Default Settings Objects, Unintiated Fields Match this Default
*/
export function EnsureTypeSafety<T>(settingsObj: any, defaultSettings: T): T {
    const s = cloneDeep(defaultSettings);
    for (const [k] of Object.entries(defaultSettings)) {
        if (settingsObj.hasOwnProperty(k))
            s[k] = cloneDeep(settingsObj[k]);
    }
    return s;
}

/*
 Interface that needs to be implemented by an EventSource
 {T} => Secret Settings Associated with this Eventsource
 {U} => Settings Associated with this Eventsource
 {V} => Settings associated with the speicific Eventsource and Dataset
*/
export interface IEventSource<T, U, V> {
    PrivateConfigUI?: React.FC<TrenDAP.ISourceConfig<T>>,
    ConfigUI?: React.FC<TrenDAP.ISourceConfig<U>>,
    DataSetUI: React.FC<EventSourceTypes.IEventSourceDataSetProps<U, V>>,
    Load: (eventSource: EventSourceTypes.IEventSourceView, dataSet: TrenDAP.iDataSet, dataConn: EventSourceTypes.IEventSourceDataSet) => Promise<TrenDAP.IEvent[]>,
    QuickView?: (eventSource: EventSourceTypes.IEventSourceView, dataSet: TrenDAP.iDataSet, dataConn: EventSourceTypes.IEventSourceDataSet) => string,
    GetLogo?: (eventSource: EventSourceTypes.IEventSourceView) => string,
    TestAuth: (eventSource: EventSourceTypes.IEventSourceView) => Promise<boolean>,
    DefaultPrivateSourceSettings: T,
    DefaultSourceSettings: U,
    DefaultDataSetSettings: V,
    Name: string,
}