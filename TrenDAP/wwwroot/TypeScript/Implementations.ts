//******************************************************************************************************
//  Implementations.ts - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/27/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import { TrenDAP } from './global';
import { CreateGuid, RandomColor } from '@gpa-gemstone/helper-functions';
import stats from 'stats-lite';
import { random } from 'lodash';

export class Widget<T extends TrenDAP.WidgetClass> implements TrenDAP.iWidget<T>{
    JSON: T;
    Height: number;
    Width: number;
    Type: TrenDAP.WidgetType;
    Label: string;
    Data: TrenDAP.iDataSetReturn[];
    constructor(props: TrenDAP.iWidget<T>) {
        this.Height = props.Height;
        this.Width = props.Width;
        this.Type = props.Type;
        this.Label = props.Label;
        this.JSON = props.JSON;
        if (props.Data == undefined) this.Data = [];
        else this.Data = props.Data;
    }

    public SetLabel = (label: string) => {
        this.Label = label;
    } 
    public SetHeight = (height: number) => this.Height = height;
    public SetWidth = (width: number) => this.Width = width;
    public SetJSON = (json: T) => this.JSON = json;
    public AvailableSeries = () => this.Data.map(dd => ({ ...dd, DataSourceID: dd.DataSource.ID, DataSource: dd.DataSource }).Data.map(ddd => ({ ...ddd, Data: [], DataSource: dd.DataSource.Name, DataSourceID: dd.DataSource.ID } as TrenDAP.iXDAReturnWithDataSource))).reduce((acc, val) => acc.concat(val), []);

    public UpdateJSON = <K extends keyof T>(field: K, value: T[K]) => {
        this.JSON[field] = value;
        return this;

    }

}

export class Histogram extends Widget<TrenDAP.iHistogram> {
    constructor(props: TrenDAP.iWidget<TrenDAP.iHistogram> ) {
        super(props);
        this.Type = "Histogram";
        if (this.JSON === undefined)
            this.JSON = { Min: 0, Max: 10, Units: '', Series: [] };
    }

    public AddSeries = (id: number, dataSourceID: number) => {
        this.JSON.Series.push({ ID: id, DataSourceID: dataSourceID, BinCount: 10, Field: "Average", Color: RandomColor(), Profile: false, ProfileColor: RandomColor() });
        return new Histogram(this);
    }

    public RemoveSeries = (index: number) => {
        this.JSON.Series.splice(index, 1);
        return new Histogram(this);
    }

    public UpdateSeries = (index: keyof TrenDAP.iHistogramSeries[], field: keyof TrenDAP.iHistogramSeries, value: TrenDAP.iHistogramSeries[keyof TrenDAP.iHistogramSeries]) => {
        this.JSON.Series[index][field] = value;
        return new Histogram(this);

    }

    public CalculateAxisRange = () => {
        let dd: TrenDAP.iXDAReturnData[] = [].concat(...this.Data.map(d => d.Data));
        let ss = this.JSON.Series.map(series => dd.find(d => d.ID === series.ID).Data.map(d => d[series.Field]));
        let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
        this.JSON.Max = Math.max(...[].concat(...mm));
        this.JSON.Min = Math.min(...[].concat(...mm));
        let buffer = (this.JSON.Max - this.JSON.Min) * .10;
        this.JSON.Max = this.JSON.Max + buffer;
        this.JSON.Min = this.JSON.Min - buffer;

        return new Histogram(this);
    };


}

export class Trend extends Widget<TrenDAP.iTrend> {
    constructor(props: TrenDAP.iWidget<TrenDAP.iTrend>) {
        super(props);
        this.Type = "Trend";

        if (this.JSON === undefined)
            this.JSON = { Min: 0, Max: 10,  Split: false, YAxis: [{ Max: 10, Min: 0, Position: 'left', Units: '' }], Series: []  };
    }

    public AddAxis = () => this.JSON.YAxis.push({ Max: 10, Min: 0, Position: 'left', Units: '' });
    public RemoveAxis = (index: number) => this.JSON.YAxis.splice(index, 1);
    public UpdateAxis = (index: keyof TrenDAP.iYAxis[], field: keyof TrenDAP.iYAxis, value: TrenDAP.iYAxis[keyof TrenDAP.iYAxis]) => { this.JSON.YAxis[index][field] = value; };

    public CalculateAxisRange = (type: 'x' | 'y', index: keyof TrenDAP.iYAxis[]) => {
        let dd: TrenDAP.iXDAReturnData[] = [].concat(...this.Data.map(d => d.Data));
        if (type === 'x')
        {
            let ss = this.JSON.Series.map(series => dd.find(d => d.ID === series.ID).Data.map(d => new Date(d.Timestamp).getTime()));
            let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
            this.JSON.Max = Math.max(...[].concat(...mm));
            this.JSON.Min = Math.min(...[].concat(...mm));
        }
        else {

            let ss = this.JSON.Series.filter(series => series.Axis === index).map(series => dd.find(d => d.ID === series.ID).Data.map(d => d[series.Field]));
            let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
            this.JSON.YAxis[index]['Max'] = Math.max(...[].concat(...mm));
            this.JSON.YAxis[index]['Min'] = Math.min(...[].concat(...mm));
            let buffer = (this.JSON.YAxis[index]['Max'] - this.JSON.YAxis[index]['Min']) * .10;
            this.JSON.YAxis[index]['Max'] = this.JSON.YAxis[index]['Max'] + buffer;
            this.JSON.YAxis[index]['Min'] = this.JSON.YAxis[index]['Min'] - buffer;
        }

    };

    public AddSeries = (id: number, dataSourceID: number) => this.JSON.Series.push({ ID: id, DataSourceID: dataSourceID, Axis: 0, Field: "Average", Color: RandomColor() });
    public RemoveSeries = (index: number) => this.JSON.Series.splice(index, 1);
    public UpdateSeries = (index: keyof TrenDAP.iTrendSeries[], field: keyof TrenDAP.iTrendSeries, value: TrenDAP.iTrendSeries[keyof TrenDAP.iTrendSeries]) => { this.JSON.Series[index][field] = value; };


}

//export class Profile extends Widget<TrenDAP.iProfile> {
//    constructor(height: number, width: number, json?: TrenDAP.iTrend) {
//        super("Profile", height, width, json);
//        if (json === undefined)
//            this.JSON = {  };
//    }

//}

export class Stats extends Widget<TrenDAP.iStats> {
    constructor(props: TrenDAP.iWidget<TrenDAP.iStats>) {
        super(props);
        this.Type = "Stats";
        if (this.JSON === undefined)
            this.JSON = {Series: null, Precision: 3};
    }
    public SetSeries = (id: number, dsID: number) => this.JSON.Series = { ID: id, DataSourceID: dsID, Field: 'Average' };
    public SetSeriesField = (field: TrenDAP.iXDATrendDataPointField) => {
        this.JSON.Series.Field = field;
        return new Stats(this);
    };
    public SetPrecsision = (value: number) => {
        this.JSON.Precision = value;
        return new Stats(this);
    };

    public Stats = () => {
        const series = this.JSON.Series;

        if (series == null) return {
            Mean: '',
            Median:'',
            //Mode: '',
            Variance: '',
            StdDev:'',
            Percentile: {
                10: '',
                25:'',
                50: '',
                75: '',
                90:'',
            }
        }


        const dataSourceData = this.Data.find(ds => ds.DataSource.ID === series.DataSourceID)?.Data ?? [];
        const dataSeries = dataSourceData.find(d => d.ID === series.ID)?.Data ?? [];
        const data = dataSeries.map(d =>d[series.Field]);


        if (data.length == 0) return {
            Mean: '',
            Median: '',
            //Mode: '',
            Variance: '',
            StdDev: '',
            Percentile: {
                10: '',
                25: '',
                50: '',
                75: '',
                90: '',
            }
        }

        return {
            Mean: stats.mean(data).toFixed(this.JSON.Precision),
            Median: stats.median(data).toFixed(this.JSON.Precision),
            //Mode: stats.mode(data)/*.toPrecision(this.JSON.Precision)*/,
            Variance: stats.variance(data).toFixed(this.JSON.Precision),
            StdDev: stats.stdev(data).toFixed(this.JSON.Precision),
            Percentile: {
                10: stats.percentile(data, 0.10).toFixed(this.JSON.Precision),
                25: stats.percentile(data, 0.25).toFixed(this.JSON.Precision),
                50: stats.percentile(data, 0.50).toFixed(this.JSON.Precision),
                75: stats.percentile(data, 0.75).toFixed(this.JSON.Precision),
                90: stats.percentile(data, 0.90).toFixed(this.JSON.Precision),
            }
        }
    }

}

export class Table extends Widget<TrenDAP.iTable> {
    constructor(props: TrenDAP.iWidget<TrenDAP.iStats>) {
        super(props);
        if (this.JSON === undefined)
            this.JSON = { Series: null, Precision: 3 };
    }
    public SetSeries = (id: number, dsID: number) => this.JSON.Series = { ID: id, DataSourceID: dsID, Field: 'Average' };
    public SetSeriesField = (field: TrenDAP.iXDATrendDataPointField) => {
        this.JSON.Series.Field = field;
        return new Stats(this);
    };
    public SetPrecsision = (value: number) => {
        this.JSON.Precision = value;
        return new Stats(this);
    };


}

export class Text extends Widget<TrenDAP.iText> {
    constructor(props: TrenDAP.iWidget<TrenDAP.iText>) {
        super(props);
        if (this.JSON === undefined)
            this.JSON = {Text: ''};
    }

}

export class XvsY extends Widget<TrenDAP.iXvsY> {
    constructor(props: TrenDAP.iWidget<TrenDAP.iXvsY>) {
        super(props);
        if (this.JSON === undefined)
            this.JSON = {
                Y: { Min: 0, Max: 100, Units: '', Series: null },
                X: { Min: 0, Max: 100, Units: '', Series: null },
                TimeMin: null, TimeMax: null, RegressionLine: false
            };

        if (this.JSON.X == undefined)
            this.JSON.X = { Min: 0, Max: 100, Units: '', Series: null };

        if (this.JSON.Y == undefined)
            this.JSON.Y = { Min: 0, Max: 100, Units: '', Series: null };

    }


    public CalculateRange = (type: 'x' | 'y' | 'time') => {
        
        if (type === 'x') {
            let dd = this.Data.find(ds => ds.DataSource.ID === this.JSON.X.Series.DataSourceID)?.Data ?? [];
            let ss = dd.find(d => d.ID === this.JSON.X.Series.ID).Data.map(d => d[this.JSON.X.Series.Field]);
            this.JSON.X.Max = Math.max(...ss);
            this.JSON.X.Min = Math.min(...ss);
            let buffer = (this.JSON.X.Max - this.JSON.X.Min) * .10;
            this.JSON.X.Max = this.JSON.X.Max + buffer;
            this.JSON.X.Min = this.JSON.X.Min - buffer;


        }
        else if (type === 'y') {
            let dd = this.Data.find(ds => ds.DataSource.ID === this.JSON.Y.Series.DataSourceID)?.Data ?? [];
            let ss = dd.find(d => d.ID === this.JSON.Y.Series.ID).Data.map(d => d[this.JSON.Y.Series.Field]);
            this.JSON.Y.Max = Math.max(...ss);
            this.JSON.Y.Min = Math.min(...ss);
            let buffer = (this.JSON.Y.Max - this.JSON.Y.Min) * .10;
            this.JSON.Y.Max = this.JSON.Y.Max + buffer;
            this.JSON.Y.Min = this.JSON.Y.Min - buffer;

        }
        else {
            let dd = this.Data.find(ds => ds.DataSource.ID === this.JSON.X.Series.DataSourceID)?.Data ?? [];

            let ss = dd.find(d => d.ID === this.JSON.X.Series.ID).Data.map(d => new Date(d.Timestamp).getTime());
            this.JSON.TimeMax = Math.max(...ss);
            this.JSON.TimeMin = Math.min(...ss);

        }

        return new XvsY(this);
    };


    public SetAxis = (axis: 'x' | 'y', field: keyof TrenDAP.iAxis, value: TrenDAP.iAxis[keyof TrenDAP.iAxis]) => {
        if (axis === 'x')
            (this.JSON.X[field] as any) = value;
        else
            (this.JSON.Y[field] as any) = value;

        return new XvsY(this);
    }


    public SetSeries = (axis: 'x' | 'y', id: number, dsID: number) => {
        if(axis === 'x')
            this.JSON.X.Series = { ID: id, DataSourceID: dsID, Field: 'Average' };
        else
            this.JSON.Y.Series = { ID: id, DataSourceID: dsID, Field: 'Average' };

        return new XvsY(this);
    }

    public UpdateSeries = (axis: 'x' | 'y', field: keyof TrenDAP.iSeries, value: TrenDAP.iSeries[keyof TrenDAP.iSeries]) => {
        if (axis === 'x')
            (this.JSON.X.Series[field] as any) = value;
        else
            (this.JSON.Y.Series[field] as any) = value;

        return new XvsY(this);

    }

    public RemoveSeries = (axis: 'x' | 'y') => {
        if (axis === 'x')
            this.JSON.X.Series = null;
        else
            this.JSON.Y.Series = null;

        return new XvsY(this);

    }


}

export function CreateWidget(type: TrenDAP.WidgetType, height: number, width: number) {
    if (type == 'Histogram')
        return new Histogram({Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    //else if (type == 'Profile')
    //    return new Profile(height, width);
    else if (type == 'Stats')
        return new Stats({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    else if (type == 'Table')
        return new Table({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    else if (type == 'Text')
        return new Text({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    else if (type == 'Trend')
        return new Trend({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    if (type == 'XvsY')
        return new XvsY({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
}

