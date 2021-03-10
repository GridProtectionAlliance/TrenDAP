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
        DataSources: State<TrenDAP.iDataSource>,
        DataSourceTypes: State<TrenDAP.iDataSourceType>,
        WorkSpaces: State<TrenDAP.iWorkSpace>,
        OpenHistorian: { ID: number, State: OpenHistorianState }[]
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
        Instances: OpenHistorian.iHistorian[],
        Measurements: OpenHistorian.iActiveMeasurement[],
        Status: TrenDAP.Status,
        Error: string
    }


}

export namespace TrenDAP{
    type Status = 'loading' | 'idle' | 'error' | 'changed' | 'unitiated';
    type WidgetType = 'Histogram' | 'Profile' | 'Stats' | 'Table' | 'Text' | 'Trend' | 'XvsY';
    type WidgetClass = iHistogram | iTrend | iProfile | iStats | iTable | iText | iXvsY;
    type DataSourceType = 'TrenDAPDB' | 'OpenHistorian' |'None';
    type iDataSetReturnType = iXDAReturnData | iOpenHistorianReturn;
    type ChartAction = 'Click' | 'Pan' | 'ZoomX' | 'ZoomY' | 'ZoomXY';

    // TrenDAP 
    interface iDataSourceType { ID: number, Name: DataSourceType }
    interface iDataSource { ID: number, Name: string, DataSourceTypeID: number, URL: string, Credential: string, Password: string, Public: boolean, User: string }    
    interface iWorkSpace { ID: number, Name: string, User: string, DataSetID: number, JSON: string, JSONString: string, Public: boolean, UpdatedOn: string, Open: boolean }    
    interface iDataSet { ID: number, Name: string, Context: 'Relative' | 'Fixed Dates', RelativeValue: number, RelativeWindow: 'Day' | 'Week' | 'Month' | 'Year',From: string, To: string, Hours: number, Days: number, Weeks: number, Months: number, User: string, JSON: string, JSONString: string, Public: boolean, UpdatedOn: string, Data?: { Status: Status, Error?: string } }    
    interface iDataSetSource { ID: number, Name: string, DataSourceTypeID: number, JSON: object }
    interface iDataSetReturn { Data: iDataSetReturnType[], DataSource: { ID: number, Name: string, Type: DataSourceType, OpenSEE?: string}, From: string, To: string }

    // XDA
    interface iXDADataSet { By: 'Asset' | 'Meter', IDs: number[], Phases: number[], Groups: number[], Types: number[], Aggregate: '' | '1h' | '1d' | '1w' }
    interface iXDAReturn { ID: number, Meter: string, Name: string, Station: string, Phase: string, Type: string, Harmonic: number, Latitude: number, Longitude: number, Asset: string, Characteristic: string }
    interface iXDAReturnWithDataSource extends iXDAReturnData { DataSourceID: number, DataSource: string }
    interface iXDAReturnData extends iXDAReturn { Data: iXDATrendDataPoint[], Events: {ID: number, ChannelID: number, StartTime: string}[] }
    interface iXDATrendDataPoint { Tag: string, Minimum: number, Maximum: number, Average: number, Timestamp: string, QualityFlags: number}
    type iXDATrendDataPointField = 'Minimum' | 'Maximum' | 'Average';

    // openHistorian
    interface iOpenHistorianDataSet { Devices: string[], Phases: string[], Types: string[], Instance: string, Aggregate: '1s' | '1m' | '1h' | '1d' | '1w' }
    interface iOpenHistorianReturn extends OpenHistorian.iActiveMeasurement { Data: iOpenHistorianAggregationPoint[] }
    interface iOpenHistorianAggregationPoint extends iXDATrendDataPoint { }

    // Widget JSON interfaces
    interface WorkSpaceJSON { Rows: iRow[] }
    interface iRow { WorkSpace?: iWorkSpace, Height: number, Data?: iDataSetReturn[], Widgets: iWidget[], Update?: (row: iRow) => void, RemoveRow?: () => void, MoveUp?: () => void, MoveDown?: () => void }
    interface iWidget<T = any> { WorkSpace?: iWorkSpace, Data?: iDataSetReturn[], Height: number, Width: number, Type: WidgetType, Label: string, JSON: T, Update?: (widget: iWidget) => void, Remove?: () => void, AddSeries?: (id: number, dataSourceID:number, label?: string) => void }

    interface iHistogram { Min: number, Max: number, Units: string, BinCount: number, Series: iHistogramSeries[] }
    interface iSeries { DataSourceID: number, ID: string, Field: iXDATrendDataPointField }
    interface iHistogramSeries extends iSeries { Color: string, Profile: boolean, ProfileColor: string  }
    interface iProfile { }
    interface iStats { Series: iSeries, Precision: number }
    interface iTable { Series: iSeries, Precision: number}
    interface iText {Text: string }
    interface iTrend {
        Min: number, Max: number, YAxis: iYAxis[], Legend: boolean, Split: boolean, SplitType: 'Axis' | 'Series', Series: iTrendSeries[]
    }
    interface iAxis { Min: number, Max: number, Units: string }
    interface iYAxis extends iAxis { Position: 'left' | 'right' }
    interface iTrendSeries extends iSeries { Color: string, Axis:  number, Label: string, ShowEvents: boolean }
    interface iXvsY { Y: { Series: iSeries, Min: number, Max: number, Units: string }, X: { Series: iSeries, Min: number, Max: number, Units: string }, TimeMin: number, TimeMax: number, RegressionLine: boolean }
}

export namespace OpenHistorian {
    interface iHistorian {
        NodeID: string, ID: string, Acronym: string, Name: string,
        AssemblyName: string, TypeName: string, ConnectionString: string, IsLocal: boolean, MeasurementReportingInterval: number, Description: string,
        LoadOrder: number, Enabled: boolean, CreatedOn: string, CreatedBy: string, UpdatedOn: string, UpdatedBy: string
    }
    interface iActiveMeasurement {
        NodeID: string, SourceNodeID: string, ID: string, SignalID: string, PointTag: string, AlternateTag: string,
        SignalReference: string, Internal: boolean, Subscribed: boolean, Device: string, DeviceID: number, FramesPerSecond: number,
        Protocol: string, SignalType: SignalType, EngineeringUnits: string, PhasorID: number, PhasorType: string, Phase: Phase,
        Adder: number, Multiplier: number, Company: string, Longitude: number, Latitude: number, Description: string,
        UpdatedOn: string
    }

    type SignalType = 'IPHM' | 'IPHA' | 'VPHM' | 'VPHA' | 'FREQ' | 'DFDT' | 'ALOG' | 'FLAG' | 'DIGI' | 'CALC' | 'STAT' | 'ALARM' | 'QUAL'
    type Phase = 'A' | 'B' | 'C' | '+' | '-' | '0' | 'None'
}