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
    // The following are how datasources are stored in DB
    type DataSourceType = 'TrenDAPDB' | 'OpenHistorian' | 'None' | 'Sapphire';
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
            [key: string]: [...number[]][]
        }
    }
}

export namespace TrenDAP {
    type Status = 'loading' | 'idle' | 'error' | 'changed' | 'unitiated';
    type WidgetType = 'Histogram' | 'Profile' | 'Stats' | 'Table' | 'Text' | 'Trend' | 'XvsY';
    type TemplateSeries = iTemplateSeriesXDA | iTemplateSeriesOpenHistorian;
    type iDataSetReturnType = iXDAReturnData | iOpenHistorianReturn | iSapphireReturnData;
    type ChartAction = 'Click' | 'Pan' | 'ZoomX' | 'ZoomY' | 'ZoomXY';
    type TemplateBy = 'Meter' | 'Asset' | 'Device';
    type iTrendDataPoint = iXDATrendDataPoint | iOpenHistorianAggregationPoint | iSapphireTrendDataPoint;
    // TrenDAP     
    interface iWorkSpace { ID: number, Name: string, User: string, JSON: string, JSONString: string, Public: boolean, UpdatedOn: string }
    interface iDataSet { ID: number, Name: string, Context: 'Relative' | 'Fixed Dates', RelativeValue: number, RelativeWindow: 'Day' | 'Week' | 'Month' | 'Year', From: string, To: string, Hours: number, Days: number, Weeks: number, Months: number, User: string, Public: boolean, UpdatedOn: string, Data?: { Status: Status, Error?: string } }
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
        Description: string
    }

    // XDA
    interface iXDADataSet { By: 'Asset' | 'Meter', IDs: number[], Phases: number[], Groups: number[], ChannelIDs: number[], Aggregate: '' | '1h' | '1d' | '1w' }
    interface iXDADataSource { PQBrowserUrl: string }
    interface iXDAReturn { ID: number, Meter: string, Name: string, Station: string, Phase: OpenXDA.Types.PhaseName, Type: OpenXDA.Types.MeasurementTypeName, Harmonic: number, Latitude: number, Longitude: number, Asset: string, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Unit: string }
    interface iXDAReturnWithDataSource extends iXDAReturnData { DataSourceID: number, DataSource: string }
    interface iXDAReturnData extends iXDAReturn { Data: iXDATrendDataPoint[], Events: { ID: number, ChannelID: number, StartTime: string }[] }
    interface iXDATrendDataPoint { Tag: string, Minimum: number, Maximum: number, Average: number, Timestamp: string, QualityFlags: number }
    type iXDATrendDataPointField = 'Minimum' | 'Maximum' | 'Average';

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
    type iSapphireTrendDataPointField = iXDATrendDataPointField;

    // Widget JSON interfaces
    interface WorkSpaceJSON { Rows: IRow[] }

    // Workspace
    interface IRow {
        AllChannels: DataSetTypes.IDataSetMetaData[],
        ChannelMap: IChannelMap,
        ParentMap: React.MutableRefObject<Map<string, number>>,
        Label: string,
        Height: number,
        Widgets: IWidgetModel[],
        ShowHeader: boolean,
        UpdateRow?: (row: iRow) => void,
        RemoveRow?: () => void,
        MoveRowUp?: () => void,
        MoveRowDown?: () => void,
        AddChannelToMap: (channelKey: TrenDAP.IChannelKey, channel: DataSetTypes.IDataSetMetaData) => void
    }

    interface iSeries { DataSourceID: number, ID: string, Field: iXDATrendDataPointField }
    interface iTemplateSeries { DataSourceID: number, Field: iXDATrendDataPointField }
    interface iTemplateSeriesXDA extends iTemplateSeries { Phase: OpenXDA.Types.PhaseName, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Type: OpenXDA.Types.MeasurementTypeName }
    interface iTemplateSeriesSapphire extends iTemplateSeries { Phase: string, Measurement: string, Harmonic: number }

    interface iTemplateSeriesOpenHistorian extends iTemplateSeries { Phase: OpenHistorian.Types.Phase, Type: OpenHistorian.Types.SignalType }
    interface iAxis { Min: number, Max: number, Units: string }
    interface iYAxis extends iAxis { Position: 'left' | 'right' }

    // Histogram Specific
    interface iHistogramSeries extends iSeries { Color: string, Profile: boolean, ProfileColor: string }
    interface iTemplatableHistogramSeries extends iTemplateSeries { Color: string, Profile: boolean, ProfileColor: string }
    interface iTemplatableHistogramSeriesSapphire extends iTemplatableHistogramSeries { Phase: string, Measurement: string, Harmonic: number }
    interface iTemplatableHistogramSeriesXDA extends iTemplatableHistogramSeries { Phase: OpenXDA.Types.PhaseName, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Type: OpenXDA.Types.MeasurementTypeName }
    interface iTemplatableHistogramSeriesOpenHistorian extends iTemplatableHistogramSeries { Phase: OpenHistorian.Types.Phase, Type: OpenHistorian.Types.SignalType }



    // Trend
    interface iTrendSeries extends iSeries { Color: string, Axis: number, Label: string, ShowEvents: boolean }
    interface iTrendTemplateSeries extends iTemplateSeries { Color: string, Axis: number, Label: string }
    interface iTrendTemplateSeriesXDA extends iTrendTemplateSeries { Phase: OpenXDA.Types.PhaseName, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Type: OpenXDA.Types.MeasurementTypeName, ShowEvents: boolean }
    interface iTrendTemplateSeriesSapphire extends iTrendTemplateSeries { Phase: string, Measurement: string, ShowEvents: boolean, Harmonic: number }
    interface iTrendTemplateSeriesOpenHistorian extends iTrendTemplateSeries { Phase: OpenHistorian.Types.Phase, Type: OpenHistorian.Types.SignalType }

    interface GeneralSettings { EditMode: boolean }

    //Model for Workspace logic
    interface IWidgetModel {
        Width: number, //percentage 
        Label: string,
        Type: string,
        ShowHeader: boolean,
        Settings: any,
        Channels: IWidgetChannels<any>[]
    }

    //might be better in widgettypes namespace..
    interface IWidgetChannels<T> {
        Key: TrenDAP.IChannelKey,
        ChannelSettings: any
    }

    interface IChannelKey {
        Parent: number,
        Phase: string,
        Type: string,
        Harmonic?: number,
    }

    interface IChannelMap {
        Map: React.MutableRefObject<HashTable<TrenDAP.IChannelKey, string>>,
        Version: number
    }

}
