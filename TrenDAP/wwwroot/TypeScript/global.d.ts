//******************************************************************************************************
//  global.d.ts - Gbtc
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
//  09/08/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import { OpenXDA, OpenHistorian } from '@gpa-gemstone/application-typings';

export { };
declare module '*.scss';

declare global {
    var homePath: string;
    var controllerViewPath: string;
    var userName: string;

    interface String {
        countOccurrences: (chars: string) => number
    }
}

export namespace Redux {
    interface StoreState {
        DataSets: State<TrenDAP.iDataSet>,
        DataSources: State<DataSourceTypes.IDataSourceView>,
        EventSources: State<EventSourceTypes.IEventSourceView>,
        WorkSpaces: State<TrenDAP.iWorkSpace>,
        OpenHistorian: { ID: number, State: OpenHistorianState }[],
        Sapphire: { [instance: number]: { [table: string]: Redux.SapphireTableSlice } },
        OpenXDA: { [instance: number]: { [table: string]: Redux.OpenXDATableSlice } },
        GeneralSettings: TrenDAP.GeneralSettings
    }
    interface State<T> {
        Status: TrenDAP.Status,
        Data: T[],
        Error: null | string,
        SortField: keyof T,
        Ascending: boolean,
        Record?: T
    }

    interface OpenHistorianState {
        Instances: OpenHistorian.Types.iHistorian[],
        Measurements: OpenHistorian.Types.iActiveMeasurement[],
        Status: TrenDAP.Status,
        Error: string
    }

    interface OpenXDATableSlice {
        Status: TrenDAP.Status,
        Data: any[],
        SearchStatus: TrenDAP.Status,
        SearchData: any[]
    }

    interface SapphireTableSlice {
        Status: TrenDAP.Status,
        Error: string,
        Data: any[]
    }

}

export namespace OpenXDAExt {
    interface ChannelGroupDetails {
        ID: number, ChannelGroup: string, MeasurementType: OpenXDA.Types.MeasurementTypeName,
        MeasurementCharacteristic: OpenXDA.Types.MeasurementCharacteristicName,
        DisplayName: string, Unit: string
    }
}

export namespace DataSourceTypes {
    type DataSourceType = 'TrenDAPDB' | 'openHistorian' | 'None' | 'Sapphire';
    interface IDataSourceView {
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

    interface IDataSourceDataSet {
        ID: number,
        DataSourceName: string,
        DataSourceID: number,
        DataSetName: string,
        DataSetID: number,
        Settings: any
    }

    // Datasource as tsx needs them
    interface IDataSourceDataSetProps<T, U> {
        // Data Source from DB
        DataSource: IDataSourceView,
        // Data Set From DB
        DataSet: TrenDAP.iDataSet,
        // Additional DataSet Settings parsed from dataset
        DataSetSettings: U,
        SetDataSetSettings: (newDataSetSettings: U) => void,
        SetErrors: (errors: string[]) => void
    }
}

export namespace DataSetTypes {
    interface IDataSetMetaData {
        ID: string,
        Name: string,
        ParentID: string,
        ParentName: string,
        Phase: string,
        Type: string,
        Longitude?: number,
        Latitude?: number,
        Harmonic?: number,
        Unit?: string
    }
    interface IDataSetData extends IDataSetMetaData {
        SeriesData: {
            Minimum: [...number[]][],
            Average: [...number[]][],
            Maximum: [...number[]][],
        }
    }
}

export namespace TrenDAP {
    type Status = 'loading' | 'idle' | 'error' | 'changed' | 'unitiated';
    type iDataSetReturnType = iXDAReturnData | iOpenHistorianReturn | iSapphireReturnData;
    type ChartAction = 'Click' | 'Pan' | 'ZoomX' ;
    type iTrendDataPoint = iXDATrendDataPoint | iOpenHistorianAggregationPoint | iSapphireTrendDataPoint;

    // TrenDAP
    interface iWorkSpace { ID: number, Name: string, User: string, JSON: string, JSONString: string, Public: boolean, UpdatedOn: string }
    interface iDataSet {
        ID: number,
        Name: string,
        Context: 'Relative' | 'Fixed Dates',
        RelativeValue?: number,
        RelativeWindow: 'Day' | 'Week' | 'Month' | 'Year',
        From: string,
        To: string,
        Hours: number,
        Days: number,
        Weeks: number,
        Months: number,
        User: string,
        Public: boolean,
        UpdatedOn: string,
        EventWindowSize?: number,
        EventWindowUnit: 'Hour' | 'Day' | 'Week',
        Data?: { Status: Status, Error?: string }
    }
    interface iDataSetSource { ID: number, Name: string, DataSourceTypeID: number, JSON: object }
    interface iDataSetReturn<T extends iDataSetReturnType = iDataSetReturnType> { Data: T[], DataSource: { ID: number, Name: string, Type: DataSourceType, OpenSEE?: string }, From: string, To: string }

    // Sources
    interface ISourceConfig<T> {
        Settings: T,
        SetSettings: (settings: T) => void,
        SetErrors: (errors: string[]) => void
    }

    // Events
    interface IEvent {
        Title: string,
        Time: number,
        Duration: number,
        Description: string,
        Link?: string
    }

    // XDA
    interface iXDADataSet { By: 'Asset' | 'Meter', IDs: number[], Phases: number[], Groups: number[], ChannelIDs: number[], Aggregate: '' | '1h' | '1d' | '1w' }
    interface iXDADataSource { PQBrowserUrl: string }
    interface iXDAReturn { ID: number, Meter: string, Name: string, Station: string, Phase: OpenXDA.Types.PhaseName, Type: OpenXDA.Types.MeasurementTypeName, Harmonic: number, Latitude: number, Longitude: number, Asset: string, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Unit: string }
    interface iXDAReturnWithDataSource extends iXDAReturnData { DataSourceID: number, DataSource: string }
    interface iXDAReturnData extends iXDAReturn { Data: iXDATrendDataPoint[], Events: { ID: number, ChannelID: number, StartTime: string }[] }
    interface iXDATrendDataPoint { Tag: string, Minimum: number, Maximum: number, Average: number, Timestamp: string, QualityFlags: number }
    type SeriesField = 'Minimum' | 'Maximum' | 'Average';

    // openHistorian
    interface iOpenHistorianDataSet { Devices: string[], Phases: string[], Types: string[], Instance: string, Aggregate: '1s' | '1m' | '1h' | '1d' | '1w' }
    interface iOpenHistorianReturn extends OpenHistorian.Types.iActiveMeasurement { Data: iOpenHistorianAggregationPoint[] }
    interface iOpenHistorianAggregationPoint extends iXDATrendDataPoint { }

    // Sapphire
    interface iSapphireDataSet { IDs: number[], Phases: number[], Types: number[], Aggregate: string, Harmonics: string }
    interface iSapphireReturn { ID: number, Meter: string, Name: string, Station: string, Phase: string, Type: string, Harmonic: number, Latitude: number, Longitude: number, Asset: string, Characteristic: string, Unit: string }
    interface iSapphireReturnWithDataSource extends iSapphireReturnData { DataSourceID: number, DataSource: string }
    interface iSapphireReturnData extends iSapphireReturn { Data: iSapphireTrendDataPoint[], Events: { ID: number, ChannelID: number, StartTime: string }[] }
    interface iSapphireTrendDataPoint extends iXDATrendDataPoint { }
    type iSapphireTrendDataPointField = SeriesField;

    interface GeneralSettings {
        EditMode: boolean
    }

    // Widget JSON interfaces
    interface WorkSpaceJSON {
        Rows: IRowModel[]
        VirtualChannels: IVirtualChannelModel[]
    }

    interface IYAxis {
        ID: number,
        Min: number,
        Max: number,
        Type: string,
        Label: string,
        Position: 'left' | 'right',
        AutoMinScale: boolean,
        AutoMaxScale: boolean
    }

    interface IRowModel {
        Label: string,
        Height: number,
        Widgets: IWidgetModel[],
        ShowHeader: boolean,
    }

    interface IVirtualChannelModel {
        ID: string,
        Name: string,
        ParentKey?: number,
        ComponentChannels: { Key: TrenDAP.IChannelKey, Name: string }[],
        Calculation: string,
        Threshold: number
    }

    interface IVirtualChannelLoaded extends IVirtualChannelModel {
        ParentID?: string;
        ParentName?: string
    }

    //Model for Workspace logic
    interface IWidgetModel {
        Width: number, //percentage 
        Label: string,
        Type: string,
        ShowHeader: boolean,
        Settings: any,
        Channels: IWidgetChannels<any>[],
        EventSources: IWidgetEventSources<any>[]
    }

    //might be better in widgettypes namespace..
    interface IWidgetChannels<T> {
        Key: TrenDAP.IChannelKey | string,
        ChannelSettings: T
    }

    interface IEventSourceMetaData {
        ID: number,
        Name: string,
        SourceType: string,
        Logo?: string
    }

    interface IWidgetEventSources<T> {
        Key: number,
        Enabled: boolean,
        EventSettings: T
    }

    interface IChannelKey {
        Parent: number,
        Phase: string,
        Type: string,
        Harmonic?: number
    }

    interface IChannelMap {
        Map: React.MutableRefObject<HashTable<TrenDAP.IChannelKey, string>>,
        Version: number
    }

    interface IEventMap {
        Map: React.MutableRefObject<Map<number, number>>,
        Version: number
    }

}
