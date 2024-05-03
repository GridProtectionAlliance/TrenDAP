//******************************************************************************************************
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
import { TrenDAP } from '../../global'
// The intrefaces for Event Datasources
// Interfaces = connection points to other pieces in the architecture

export namespace EventSourceTypes {
    // The following are how event sources are stored in DB
    export interface IEventSourceView {
        ID: number,
        Name: string,
        Type: string,
        URL: string,
        RegistrationKey: string,
        APIToken: string,
        Public: boolean,
        User: string,
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

/*
 Interface that needs to be implemented by an EventSource
 {T} => Settings Associated with this Eventsource
 {U} => Settings associated with the speicific Eventsource and Dataset
*/
export interface IEventSource<T, U> {
    DataSetUI: React.FC<EventSourceTypes.IEventSourceDataSetProps<T, U>>,
    ConfigUI: React.FC<TrenDAP.ISourceConfig<T>>,
    Load: (eventSource: EventSourceTypes.IEventSourceView, dataSet: TrenDAP.iDataSet, dataConn: EventSourceTypes.IEventSourceDataSet) => Promise<TrenDAP.IEvent[]>,
    QuickView?: (eventSource: EventSourceTypes.IEventSourceView, dataSet: TrenDAP.iDataSet, dataConn: EventSourceTypes.IEventSourceDataSet) => void,
    TestAuth: (eventSource: EventSourceTypes.IEventSourceView) => Promise<boolean>,
    DefaultSourceSettings: T,
    DefaultDataSetSettings: U,
    Name: string,
}