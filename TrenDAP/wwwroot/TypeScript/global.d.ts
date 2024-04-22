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
import {OpenXDA, OpenHistorian } from '@gpa-gemstone/application-typings';

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
        DataSourceDataSets: State<DataSourceTypes.IDataSourceDataSet>, 
        DataSourceTypes: State<DataSourceTypes.IDataSourceType>,
        WorkSpaces: State<TrenDAP.iWorkSpace>,
        OpenHistorian: { ID: number, State: OpenHistorianState }[],
        Sapphire: { [instance: number]: { [table: string]: Redux.SapphireTableSlice } },
        OpenXDA: { [instance: number]: { [table: string]: Redux.OpenXDATableSlice } },
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
        Error: string,
        Data: any[]
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
    interface IDataSourceType { ID: number, Name: DataSourceType }
    interface IDataSourceView {
        ID: number,
        Name: string,
        DataSourceTypeID: number,
        URL: string,
        RegistrationKey: string,
        Expires: string,
        Public: boolean,
        User: string,
        Settings: string
    }

    interface IDataSourceDataSet {
        ID: number,
        DataSourceID: number,
        DataSetID: number,
        Settings: string
    }

    // Datasource as tsx needs them
    interface IDataSetProps<T, U> {
        // Data Source from DB
        DataSource: IDataSourceView,
        // Data Set From DB
        DataSet: TrenDAP.iDataSet,
        // Additional Source Settings parsed form source view
        DataSourceSettings: T,
        // Additional DataSet Settings parsed from dataset
        DataSetSettings: U,
        SetDataSetSettings: (newDataSetSettings: U) => void,
        SetErrors: (errors: string[]) => void
    }

    interface IConfigProps<T> {
        Settings: T,
        SetSettings: (settings: T) => void,
        SetErrors: (errors: string[]) => void
    }

    // Datasource coding interface, uses props to get the datasource
    interface IDataSource<T, U> {
        DataSetUI: React.FC<IDataSetProps<T, U>>,
        ConfigUI: React.FC<IConfigProps<T>>,
        LoadDataSet: (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, dataConn: DataSourceTypes.IDataSourceDataSet) => Promise<DataSetTypes.IDataSetData[]>,
        QuickViewDataSet?: (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, dataConn: DataSourceTypes.IDataSourceDataSet) => string,
        TestAuth: (dataSource: IDataSourceView) => Promise<boolean>,
        DefaultSourceSettings: T,
        DefaultDataSetSettings: U,
        Name: string,
    }
}

export namespace DataSetTypes {
    interface IDataSetData {
        ID: string,
        Name: string,
        ParentID: string,
        ParentName: string,
        Phase: string,
        Type: string,
        SeriesData: Map<string, [...number[]][]>,
        Longitude?: number,
        Latitude?: number,
        Harmonic?: number,
        Unit?: string
    }
}

export namespace TrenDAP{
    type Status = 'loading' | 'idle' | 'error' | 'changed' | 'unitiated';
    type WidgetType = 'Histogram' | 'Profile' | 'Stats' | 'Table' | 'Text' | 'Trend' | 'XvsY';
    type WidgetClass = iHistogram | iTrend | iProfile | iStats | iTable | iText | iXvsY;
    type TemplatableWidgetClass = iTemplatableHistogram | iTemplatableTrend | iTemplatableProfile | iTemplatableStats | iTemplatableTable | iTemplatableText | iTemplatableXvsY;
    type TemplateSeries = iTemplateSeriesXDA | iTemplateSeriesOpenHistorian;
    type iDataSetReturnType = iXDAReturnData | iOpenHistorianReturn | iSapphireReturnData;
    type ChartAction = 'Click' | 'Pan' | 'ZoomX' | 'ZoomY' | 'ZoomXY';
    type WorkSpaceType = 'Regular' | 'Templatable';
    type TemplateBy = 'Meter' | 'Asset' | 'Device';
    type iTrendDataPoint = iXDATrendDataPoint | iOpenHistorianAggregationPoint | iSapphireTrendDataPoint;
    // TrenDAP     
    interface iWorkSpace { ID: number, Type: WorkSpaceType, Name: string, User: string, DataSetID: number, JSON: string, JSONString: string, Public: boolean, UpdatedOn: string, Open: boolean }    
    interface iDataSet { ID: number, Name: string, Context: 'Relative' | 'Fixed Dates', RelativeValue: number, RelativeWindow: 'Day' | 'Week' | 'Month' | 'Year',From: string, To: string, Hours: number, Days: number, Weeks: number, Months: number, User: string, Public: boolean, UpdatedOn: string, Data?: { Status: Status, Error?: string } }    
    interface iDataSetSource { ID: number, Name: string, DataSourceTypeID: number, JSON: object }
    interface iDataSetReturn<T extends iDataSetReturnType = iDataSetReturnType> { Data: T[], DataSource: { ID: number, Name: string, Type: DataSourceType, OpenSEE?: string}, From: string, To: string }

    // XDA
    interface iXDADataSet { By: 'Asset' | 'Meter', IDs: number[], Phases: number[], Groups: number[], Chans: number[], Aggregate: '' | '1h' | '1d' | '1w' }
    interface iXDADataSource { PQBrowserUrl: string }
    interface iXDAReturn { ID: number, Meter: string, Name: string, Station: string, Phase: OpenXDA.Types.PhaseName, Type: OpenXDA.Types.MeasurementTypeName, Harmonic: number, Latitude: number, Longitude: number, Asset: string, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Unit: string }
    interface iXDAReturnWithDataSource extends iXDAReturnData { DataSourceID: number, DataSource: string }
    interface iXDAReturnData extends iXDAReturn { Data: iXDATrendDataPoint[], Events: {ID: number, ChannelID: number, StartTime: string}[] }
    interface iXDATrendDataPoint { Tag: string, Minimum: number, Maximum: number, Average: number, Timestamp: string, QualityFlags: number}
    type iXDATrendDataPointField = 'Minimum' | 'Maximum' | 'Average';

    // openHistorian
    interface iOpenHistorianDataSet { Devices: string[], Phases: string[], Types: string[], Instance: string, Aggregate: '1s' | '1m' | '1h' | '1d' | '1w' }
    interface iOpenHistorianReturn extends OpenHistorian.Types.iActiveMeasurement { Data: iOpenHistorianAggregationPoint[] }
    interface iOpenHistorianAggregationPoint extends iXDATrendDataPoint { }

    // Sapphire
    interface iSapphireDataSet { IDs: number[], Phases: number[], Types: number[], Aggregate: string, Harmonics: string}
    interface iSapphireReturn { ID: number, Meter: string, Name: string, Station: string, Phase: string, Type: string, Harmonic: number, Latitude: number, Longitude: number, Asset: string, Characteristic: string, Unit: string }
    interface iSapphireReturnWithDataSource extends iSapphireReturnData { DataSourceID: number, DataSource: string }
    interface iSapphireReturnData extends iSapphireReturn { Data: iSapphireTrendDataPoint[], Events: { ID: number, ChannelID: number, StartTime: string }[] }
    interface iSapphireTrendDataPoint extends iXDATrendDataPoint { }
    type iSapphireTrendDataPointField = iXDATrendDataPointField ;

    // Widget JSON interfaces
    interface WorkSpaceJSON { Rows: iRow[] | iTemplatableRow[], By?: TemplateBy, Type?: DataSourceType }
    interface WorkSpaceJSONTrenDAPDB extends WorkSpaceJSON { By: 'Meter' | 'Asset' , Type: 'TrenDAPDB'}
    interface WorkSpaceJSONOpenHistorian extends WorkSpaceJSON { By: 'Device', Type: 'OpenHistorian' }

    // Workspace
    interface iRow { WorkSpace?: iWorkSpace, Height: number, Data?: iDataSetReturn[], Widgets: iWidget[], Update?: (row: iRow) => void, RemoveRow?: () => void, MoveUp?: () => void, MoveDown?: () => void }
    interface iTemplatableRow extends iRow { By: TrenDAP.TemplateBy, Device: string, Widgets: iTemplatableWidget[] }

    // Generic Widget
    interface iWidget<T extends WidgetClass = any,  U extends TrenDAP.iDataSetReturnType = TrenDAP.iDataSetReturnType> { WorkSpace?: iWorkSpace, Data?: iDataSetReturn<U>[], Height: number, Width: number, Type: WidgetType, Label: string, JSON: T, Update?: (widget: iWidget) => void, Remove?: () => void, AddSeries?: (id: number, dataSourceID: number, label?: string) => void }
    interface iTemplatableWidget<T extends TemplatableWidgetClass = any, U extends TrenDAP.iDataSetReturnType = TrenDAP.iDataSetReturnType> { WorkSpace?: iWorkSpace, By: TemplateBy, Device: string, Data?: iDataSetReturn<U>[], Height: number, Width: number, Type: WidgetType, Label: string, JSON: T, Update?: (widget: iTemplatableWidget) => void, Remove?: () => void }

    interface iSeries { DataSourceID: number, ID: string, Field: iXDATrendDataPointField }
    interface iTemplateSeries { DataSourceID: number, Field: iXDATrendDataPointField }
    interface iTemplateSeriesXDA extends iTemplateSeries { Phase: OpenXDA.Types.PhaseName, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Type: OpenXDA.Types.MeasurementTypeName }
    interface iTemplateSeriesSapphire extends iTemplateSeries { Phase: string, Measurement: string, Harmonic: number}

    interface iTemplateSeriesOpenHistorian extends iTemplateSeries { Phase: OpenHistorian.Types.Phase, Type: OpenHistorian.Types.SignalType }
    interface iAxis { Min: number, Max: number, Units: string }
    interface iYAxis extends iAxis { Position: 'left' | 'right' }

    // Histogram Specific
    interface iHistogram { Min: number, Max: number, Units: string, BinCount: number, Series: iHistogramSeries[] }   
    interface iHistogramSeries extends iSeries { Color: string, Profile: boolean, ProfileColor: string }
    interface iTemplatableHistogram { Min: number, Max: number, Units: string, BinCount: number, Series: iTemplatableHistogramSeriesXDA[] | iTemplatableHistogramSeriesOpenHistorian[] | iTemplatableHistogramSeriesSapphire[]}
    interface iTemplatableHistogramSeries extends iTemplateSeries { Color: string, Profile: boolean, ProfileColor: string }
    interface iTemplatableHistogramSeriesSapphire extends iTemplatableHistogramSeries { Phase: string, Measurement: string, Harmonic: number }
    interface iTemplatableHistogramSeriesXDA extends iTemplatableHistogramSeries { Phase: OpenXDA.Types.PhaseName, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Type: OpenXDA.Types.MeasurementTypeName }
    interface iTemplatableHistogramSeriesOpenHistorian extends iTemplatableHistogramSeries { Phase: OpenHistorian.Types.Phase, Type: OpenHistorian.Types.SignalType }

    // Profile
    interface iProfile { }
    interface iTemplatableProfile { }

    // Stats
    interface iStats { Series: iSeries, Precision: number }
    interface iTemplatableStats { Series: iTemplateSeriesXDA | iTemplateSeriesOpenHistorian | iTemplateSeriesSapphire, Precision: number }

    // Table
    interface iTable { Series: iSeries, Precision: number }
    interface iTemplatableTable { Series: iTemplateSeriesXDA | iTemplateSeriesOpenHistorian | iTemplateSeriesSapphire, Precision: number }

    // Text
    interface iText {Text: string }
    interface iTemplatableText { Text: string }

    // Trend
    interface iTrend {
        Min: number, Max: number, YAxis: iYAxis[], Legend: boolean, Split: boolean, SplitType: 'Axis' | 'Series', Series: iTrendSeries[]
    }

    interface iTemplatableTrend {
        Min: number, Max: number, YAxis: iYAxis[], Legend: boolean, Split: boolean, SplitType: 'Axis' | 'Series', Series: iTrendTemplateSeries[]
    }

    interface iTrendSeries extends iSeries { Color: string, Axis: number, Label: string, ShowEvents: boolean }
    interface iTrendTemplateSeries extends iTemplateSeries { Color: string, Axis: number, Label: string }
    interface iTrendTemplateSeriesXDA extends iTrendTemplateSeries { Phase: OpenXDA.Types.PhaseName, Characteristic: OpenXDA.Types.MeasurementCharacteristicName, Type: OpenXDA.Types.MeasurementTypeName, ShowEvents: boolean }
    interface iTrendTemplateSeriesSapphire extends iTrendTemplateSeries { Phase: string, Measurement: string, ShowEvents: boolean, Harmonic: number }

    interface iTrendTemplateSeriesOpenHistorian extends iTrendTemplateSeries { Phase: OpenHistorian.Types.Phase, Type: OpenHistorian.Types.SignalType }

    // XvsY
    interface iXvsY { Y: { Series: iSeries, Min: number, Max: number, Units: string }, X: { Series: iSeries, Min: number, Max: number, Units: string }, TimeMin: number, TimeMax: number, RegressionLine: boolean }
    interface iTemplatableXvsY { Y: { Series: iTemplateSeriesXDA | iTemplateSeriesOpenHistorian | iTemplateSeriesSapphire, Min: number, Max: number, Units: string }, X: { Series: iTemplateSeriesXDA | iTemplateSeriesOpenHistorian | iTemplateSeriesSapphire, Min: number, Max: number, Units: string }, TimeMin: number, TimeMax: number, RegressionLine: boolean }

}