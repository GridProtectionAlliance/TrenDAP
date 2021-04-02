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


import { TrenDAP } from '../../../global';
import { CreateGuid, RandomColor } from '@gpa-gemstone/helper-functions';
import stats from 'stats-lite';
import moment from 'moment';
import { OpenHistorianTypes as OpenHistorian, OpenXDATypes as OpenXDA } from '@gpa-gemstone/application-typings';

export class Widget<T extends TrenDAP.TemplatableWidgetClass> implements TrenDAP.iTemplatableWidget<T>{
    JSON: T;
    Height: number;
    Width: number;
    Type: TrenDAP.WidgetType;
    Label: string;
    Data: TrenDAP.iDataSetReturn[];
    By: TrenDAP.TemplateBy;
    Device: string;
    constructor(props: TrenDAP.iTemplatableWidget<T>) {
        this.Height = props.Height;
        this.Width = props.Width;
        this.Type = props.Type;
        this.Label = props.Label;
        this.JSON = props.JSON;
        this.By = props.By;
        this.Device = props.Device;
        if (props.Data == undefined) this.Data = [];
        else this.Data = props.Data;
    }

    public SetLabel = (label: string) => {
        this.Label = label;
    } 
    public SetHeight = (height: number) => this.Height = height;
    public SetWidth = (width: number) => this.Width = width;
    public SetJSON = (json: T) => this.JSON = json;
    //public AvailableSeries = () => this.Data.map(dd => ({ ...dd, DataSourceID: dd.DataSource.ID, DataSource: dd.DataSource }).Data.map(ddd => ({ ...ddd, Data: [], DataSource: dd.DataSource.Name, DataSourceID: dd.DataSource.ID } as TrenDAP.iXDAReturnWithDataSource))).reduce((acc, val) => acc.concat(val), []);

    public UpdateJSON = <K extends keyof T>(field: K, value: T[K]) => {
        this.JSON[field] = value;
        return this;

    }

}

export class Histogram extends Widget<TrenDAP.iTemplatableHistogram> {
    constructor(props: TrenDAP.iTemplatableWidget<TrenDAP.iTemplatableHistogram> ) {
        super(props);
        this.Type = "Histogram";
        if (this.JSON === undefined)
            this.JSON = { Min: 0, Max: 10, Units: '', Series: [], BinCount: 10 };
    }

    public AddSeriesXDA = (dataSourceID: number, phase: OpenXDA.PhaseName, type: OpenXDA.MeasurementTypeName, characteristic: OpenXDA.MeasurementCharacteristicName) => {
        let label = `${type} ${phase} ${characteristic}`;

        let series = {
            Phase: phase, 
            Type: type,
            Characteristic: characteristic,
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor(),
            Profile: false,
            ProfileColor: GetColor(label)
        } as TrenDAP.iTemplatableHistogramSeriesXDA

        (this.JSON.Series as TrenDAP.iTemplatableHistogramSeriesXDA[]).push(series);
        return new Histogram(this);
    }

    public AddSeriesOH = (dataSourceID: number, phase: OpenHistorian.Phase, type: OpenHistorian.SignalType) => {
        let label = `${type} ${phase}`;

        let series = {
            Phase: phase,
            Type: type,
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor(),
            Profile: false,
            ProfileColor: GetColor(label)
        } as TrenDAP.iTemplatableHistogramSeriesOpenHistorian


        (this.JSON.Series as TrenDAP.iTemplatableHistogramSeriesOpenHistorian[]).push(series);
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
        let ds = this.Data.find(ds => ds.DataSource.ID === this.JSON.Series[0].DataSourceID)

        if (ds.DataSource.Type === 'TrenDAPDB') {
            let dd: TrenDAP.iXDAReturnData[] = [].concat(...this.Data.map(d => d.Data));
            let ss = (this.JSON.Series as TrenDAP.iTemplatableHistogramSeriesXDA[]).map((series: TrenDAP.iTemplateSeriesXDA) => (dd.find(d => d[this.By] === this.Device && d.Phase === series.Phase && d.Characteristic === series.Characteristic && d.Type === series.Type)?.Data ?? []).map(d => d[series.Field]));
            let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
            this.JSON.Max = Math.max(...[].concat(...mm));
            this.JSON.Min = Math.min(...[].concat(...mm));
            let buffer = (this.JSON.Max - this.JSON.Min) * .10;
            this.JSON.Max = this.JSON.Max + buffer;
            this.JSON.Min = this.JSON.Min - buffer;
        }
        else if (ds.DataSource.Type === 'OpenHistorian') {
            let dd: TrenDAP.iOpenHistorianReturn[] = [].concat(...this.Data.map(d => d.Data));
            let ss = (this.JSON.Series as TrenDAP.iTemplatableHistogramSeriesOpenHistorian[]).map((series: TrenDAP.iTemplateSeriesOpenHistorian) => (dd.find(d => d[this.By] === this.Device && d.Phase === series.Phase && d.SignalType === series.Type)?.Data ?? []).map(d => d[series.Field]));
            let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
            this.JSON.Max = Math.max(...[].concat(...mm));
            this.JSON.Min = Math.min(...[].concat(...mm));
            let buffer = (this.JSON.Max - this.JSON.Min) * .10;
            this.JSON.Max = this.JSON.Max + buffer;
            this.JSON.Min = this.JSON.Min - buffer;
        }
        else { }
        return new Histogram(this);
    };
}

export class Trend extends Widget<TrenDAP.iTemplatableTrend> {
    constructor(props: TrenDAP.iTemplatableWidget<TrenDAP.iTemplatableTrend>) {
        super(props);
        this.Type = "Trend";

        if (this.JSON === undefined)
            this.JSON = { Min: 0, Max: 10, Legend: false, Split: false, SplitType: 'Axis', YAxis: [{ Max: 10, Min: 0, Position: 'left', Units: '' }], Series: []  };
    }

    public AddAxis = () => this.JSON.YAxis.push({ Max: 10, Min: 0, Position: 'left', Units: '' });
    public RemoveAxis = (index: number) => {
        if (this.JSON.YAxis.length == 1) return;

        this.JSON.YAxis.splice(index, 1)
        this.JSON.Series.forEach(series => {
            if (series.Axis >= index)
                series.Axis = (index > 0 ? series.Axis - 1 : 0);    
        });
    };
    public UpdateAxis = (index: keyof TrenDAP.iYAxis[], field: keyof TrenDAP.iYAxis, value: TrenDAP.iYAxis[keyof TrenDAP.iYAxis]) => { this.JSON.YAxis[index][field] = value; };

    public CalculateAxisRange = (type: 'x' | 'y', index?: number) => {
        if (this.JSON.Series.length == 0) return;

        let ds = this.Data.find(ds => ds.DataSource.ID === this.JSON.Series[0].DataSourceID)
        let dd: any[] = [].concat(...this.Data.map(d => d.Data));
        if (type === 'x')
        {
            let ss;
            if (ds.DataSource.Type === 'TrenDAPDB') {
                let phases = this.JSON.Series.map((s: TrenDAP.iTrendTemplateSeriesXDA) => s.Phase)
                let types = this.JSON.Series.map((s: TrenDAP.iTrendTemplateSeriesXDA) => s.Type)
                let characteristics = this.JSON.Series.map((s: TrenDAP.iTrendTemplateSeriesXDA) => s.Characteristic)

                ss = (dd.find((d: TrenDAP.iXDAReturnData) => d[this.By] === this.Device && phases.indexOf(d.Phase) >= 0 && characteristics.indexOf(d.Characteristic) >= 0 && types.indexOf(d.Type) >= 0)?.Data ?? []).map(d => new Date(d.Timestamp).getTime());
            }
            else if (ds.DataSource.Type === 'OpenHistorian') {
                let phases = this.JSON.Series.map((s: TrenDAP.iTrendTemplateSeriesOpenHistorian) => s.Phase)
                let types = this.JSON.Series.map((s: TrenDAP.iTrendTemplateSeriesOpenHistorian) => s.Type)

                ss = (dd.find((d: TrenDAP.iOpenHistorianReturn) => d[this.By] === this.Device && phases.indexOf(d.Phase) >= 0 && types.indexOf(d.SignalType) >= 0)?.Data ?? []).map(d => new Date(d.Timestamp).getTime());
            }
            else
                ss = [];
            let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
            this.JSON.Max = Math.max(...[].concat(...mm));
            this.JSON.Min = Math.min(...[].concat(...mm));
        }
        else {
            if (index == undefined) {
                for (let index = 0; index < this.JSON.YAxis.length; index++) {
                    let ss;

                    if (ds.DataSource.Type === 'TrenDAPDB')
                        ss = (this.JSON.Series as TrenDAP.iTrendTemplateSeriesXDA[]).filter(series => series.Axis === index).map(series => (dd.find(d => d[this.By] === this.Device && d.Phase === series.Phase && d.Characteristic === series.Characteristic && d.Type === series.Type)?.Data ?? []).map(d => d[series.Field]));
                    if (ds.DataSource.Type === 'OpenHistorian')
                        ss = (this.JSON.Series as TrenDAP.iTrendTemplateSeriesOpenHistorian[]).filter(series => series.Axis === index).map(series => (dd.find(d => d[this.By] === this.Device && d.Phase === series.Phase && d.SignalType === series.Type)?.Data ?? []).map(d => d[series.Field]));
                    else
                        ss = [];

                    let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
                    this.JSON.YAxis[index]['Max'] = Math.max(...[].concat(...mm));
                    this.JSON.YAxis[index]['Min'] = Math.min(...[].concat(...mm));
                    let buffer = (this.JSON.YAxis[index]['Max'] - this.JSON.YAxis[index]['Min']) * .10;
                    this.JSON.YAxis[index]['Max'] = this.JSON.YAxis[index]['Max'] + buffer;
                    this.JSON.YAxis[index]['Min'] = this.JSON.YAxis[index]['Min'] - buffer;

                }
            }
            else {
                let ss;
                if (ds.DataSource.Type === 'TrenDAPDB')
                    ss = (this.JSON.Series as TrenDAP.iTrendTemplateSeriesXDA[]).filter(series => series.Axis === index).map(series => (dd.find(d => d[this.By] === this.Device && d.Phase === series.Phase && d.Characteristic === series.Characteristic && d.Type === series.Type)?.Data ?? []).map(d => d[series.Field]));
                if (ds.DataSource.Type === 'OpenHistorian')
                    ss = (this.JSON.Series as TrenDAP.iTrendTemplateSeriesOpenHistorian[]).filter(series => series.Axis === index).map(series => (dd.find(d => d[this.By] === this.Device && d.Phase === series.Phase && d.SignalType === series.Type)?.Data ?? []).map(d => d[series.Field]));
                else
                    ss = [];
                let mm = ss.map(s => [Math.min(...s), Math.max(...s)]);
                this.JSON.YAxis[index]['Max'] = Math.max(...[].concat(...mm));
                this.JSON.YAxis[index]['Min'] = Math.min(...[].concat(...mm));
                let buffer = (this.JSON.YAxis[index]['Max'] - this.JSON.YAxis[index]['Min']) * .10;
                this.JSON.YAxis[index]['Max'] = this.JSON.YAxis[index]['Max'] + buffer;
                this.JSON.YAxis[index]['Min'] = this.JSON.YAxis[index]['Min'] - buffer;
            }
        }

        return new Trend(this);
    };


    public AddSeriesXDA = (dataSourceID: number, phase: OpenXDA.PhaseName, type: OpenXDA.MeasurementTypeName, characteristic: OpenXDA.MeasurementCharacteristicName) => {
        let label = '';
        if (characteristic === 'Frequency')
            label = 'Frequency';
        else if (type === 'Voltage' && characteristic === 'RMS')
            label = `V${phase}`;
        else if (type === 'Voltage')
            label = `V${phase} ${characteristic}`;
        else if (type === 'Current' && characteristic === 'RMS')
            label = `I${phase}`;
        else if (type === 'Current')
            label = `I${phase} ${characteristic}`;
        else label = `${type} ${phase} ${characteristic}`;

        let series = {
            Phase: phase,
            Type: type,
            Characteristic: characteristic,
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor(label),
            Axis: 0,
            ShowEvents: false
        } as TrenDAP.iTrendTemplateSeriesXDA

        this.JSON.Series.push(series as any);
        this.CalculateAxisRange('x');
        this.CalculateAxisRange('y');
        return new Trend(this);
    }

    public AddSeriesOH = (dataSourceID: number, phase: OpenHistorian.Phase, type: OpenHistorian.SignalType) => {
        let label = `${type} ${phase}`;

        let series = {
            Phase: phase,
            Type: type,
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor(label),
            Axis: 0
        } as TrenDAP.iTrendTemplateSeriesOpenHistorian


        this.JSON.Series.push(series as any);
        this.CalculateAxisRange('x');
        this.CalculateAxisRange('y');
        return new Trend(this);
    }

    public QuickAddVoltageRMS = (dataSourceID: number) => {
        let axis = this.JSON.YAxis.findIndex(axis => axis.Units === 'Volts')
        if (axis < 0) {
            axis = this.JSON.YAxis.push({Units: 'Volts', Position: 'left', Min: 0, Max: 100}) - 1
        }

        let series = [{
            Phase: 'AN',
            Type: 'Voltage',
            Characteristic: 'RMS',
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor('VAN RMS'),
            Axis: 0,
            Label: 'VAN RMS',
            ShowEvents: false
        }, {
                Phase: 'BN',
                Type: 'Voltage',
                Characteristic: 'RMS',
                DataSourceID: dataSourceID,
                Field: "Average",
                Color: GetColor('VBN RMS'),
                Axis: 0,
                Label: 'VBN RMS',
                ShowEvents: false
            }, {
                Phase: 'CN',
                Type: 'Voltage',
                Characteristic: 'RMS',
                DataSourceID: dataSourceID,
                Field: "Average",
                Color: GetColor('VCN RMS'),
                Axis: 0,
                Label: 'VCN RMS',
                ShowEvents: false
            }, {
                Phase: 'AB',
                Type: 'Voltage',
                Characteristic: 'RMS',
                DataSourceID: dataSourceID,
                Field: "Average",
                Color: GetColor('VAB RMS'),
                Axis: 0,
                Label: 'VAB RMS',
                ShowEvents: false
            }, {
                Phase: 'BC',
                Type: 'Voltage',
                Characteristic: 'RMS',
                DataSourceID: dataSourceID,
                Field: "Average",
                Color: GetColor('VBC RMS'),
                Axis: 0,
                Label: 'VBC RMS',
                ShowEvents: false
            }, {
                Phase: 'CA',
                Type: 'Voltage',
                Characteristic: 'RMS',
                DataSourceID: dataSourceID,
                Field: "Average",
                Color: GetColor('VCA RMS'),
                Axis: 0,
                Label: 'VCA RMS',
                ShowEvents: false
            }] as TrenDAP.iTrendTemplateSeriesXDA[]

        (this.JSON.Series as TrenDAP.iTrendTemplateSeriesXDA[]).concat(series);
        this.CalculateAxisRange('x');
        this.CalculateAxisRange('y');
        return new Trend(this);
    }

    public QuickAddCurrentRMS = (dataSourceID: number) => {
        let axis = this.JSON.YAxis.findIndex(axis => axis.Units === 'Amps')
        if (axis < 0) {
            axis = this.JSON.YAxis.push({ Units: 'Amps', Position: 'left', Min: 0, Max: 100 }) - 1
        }

        let series = [{
            Phase: 'AN',
            Type: 'Current',
            Characteristic: 'RMS',
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor('IAN RMS'),
            Axis: 0,
            Label: 'IAN RMS',
            ShowEvents: false
        }, {
            Phase: 'BN',
            Type: 'Current',
            Characteristic: 'RMS',
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor('IBN RMS'),
            Axis: 0,
            Label: 'IBN RMS',
            ShowEvents: false
        }, {
            Phase: 'CN',
            Type: 'Current',
            Characteristic: 'RMS',
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor('ICN RMS'),
            Axis: 0,
            Label: 'ICN RMS',
            ShowEvents: false
        }, {
            Phase: 'NG',
            Type: 'Current',
            Characteristic: 'RMS',
            DataSourceID: dataSourceID,
            Field: "Average",
            Color: GetColor('ING RMS'),
            Axis: 0,
            Label: 'ING RMS',
            ShowEvents: false
            }] as TrenDAP.iTrendTemplateSeriesXDA[]

        (this.JSON.Series as TrenDAP.iTrendTemplateSeriesXDA[]).concat(series);
        this.CalculateAxisRange('x');
        this.CalculateAxisRange('y');
        return new Trend(this);
    }

    public RemoveSeries = (index: number) => this.JSON.Series.splice(index, 1);
    public RemoveAll = (dataSourceID: number) => {
        this.JSON.Series = [];
        return new Trend(this);
    }

    public UpdateSeries = (index: keyof TrenDAP.iTrendSeries[], field: keyof TrenDAP.iTrendSeries, value: TrenDAP.iTrendSeries[keyof TrenDAP.iTrendSeries]) => { this.JSON.Series[index][field] = value; };

    public Pan = (value: number) => {
        this.JSON.Max = this.JSON.Max + value;
        this.JSON.Min = this.JSON.Min + value;
        return new Trend(this);
    };

}

//export class Profile extends Widget<TrenDAP.iProfile> {
//    constructor(height: number, width: number, json?: TrenDAP.iTrend) {
//        super("Profile", height, width, json);
//        if (json === undefined)
//            this.JSON = {  };
//    }

//}

export class Stats extends Widget<TrenDAP.iTemplatableStats> {
    constructor(props: TrenDAP.iTemplatableWidget<TrenDAP.iTemplatableStats>) {
        super(props);
        this.Type = "Stats";
        if (this.JSON === undefined)
            this.JSON = {Series: null, Precision: 3};
    }
    public SetSeriesXDA = (dataSourceID: number, phase: OpenXDA.PhaseName, type: OpenXDA.MeasurementTypeName, characteristic: OpenXDA.MeasurementCharacteristicName) => this.JSON.Series = { DataSourceID: dataSourceID, Phase: phase, Type: type, Characteristic: characteristic, Field: 'Average' };
    public SetSeriesOH = (dataSourceID: number, phase: OpenHistorian.Phase, type: OpenHistorian.SignalType) => this.JSON.Series = { DataSourceID: dataSourceID, Phase: phase, Type: type, Field: 'Average' };

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


        const dataSourceData = this.Data.find(ds => ds.DataSource.ID === series.DataSourceID);
//?.Data ?? [];
        
        let dataSeries;
        
        if (dataSourceData?.DataSource.Type === 'TrenDAPDB')
            dataSeries = (dataSourceData?.Data ?? []).find((d: TrenDAP.iXDAReturnData) => d[this.By] === this.Device && d.Phase === series.Phase && d.Type === series.Type && series.Characteristic === d.Characteristic)?.Data ?? [];
        else if (dataSourceData?.DataSource.Type === 'OpenHistorian')
            dataSeries = (dataSourceData?.Data ?? []).find((d: TrenDAP.iOpenHistorianReturn) => d[this.By] === this.Device && d.Phase === series.Phase && d.SignalType === series.Type)?.Data ?? [];
        else
            dataSeries = [];

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

export class Table extends Widget<TrenDAP.iTemplatableTable> {
    constructor(props: TrenDAP.iTemplatableWidget<TrenDAP.iTemplatableTable>) {
        super(props);
        if (this.JSON === undefined)
            this.JSON = { Series: null, Precision: 3 };
    }
    public SetSeriesXDA = (dataSourceID: number, phase: OpenXDA.PhaseName, type: OpenXDA.MeasurementTypeName, characteristic: OpenXDA.MeasurementCharacteristicName) => this.JSON.Series = { DataSourceID: dataSourceID, Phase: phase, Type: type, Characteristic: characteristic, Field: 'Average' };
    public SetSeriesOH = (dataSourceID: number, phase: OpenHistorian.Phase, type: OpenHistorian.SignalType) => this.JSON.Series = { DataSourceID: dataSourceID, Phase: phase, Type: type, Field: 'Average' };

    public SetSeriesField = (field: TrenDAP.iXDATrendDataPointField) => {
        this.JSON.Series.Field = field;
        return new Stats(this);
    };
    public SetPrecsision = (value: number) => {
        this.JSON.Precision = value;
        return new Stats(this);
    };


}

export class Text extends Widget<TrenDAP.iTemplatableText> {
    constructor(props: TrenDAP.iTemplatableWidget<TrenDAP.iTemplatableText>) {
        super(props);
        if (this.JSON === undefined)
            this.JSON = {Text: ''};
    }

}

export class XvsY extends Widget<TrenDAP.iTemplatableXvsY> {
    constructor(props: TrenDAP.iTemplatableWidget<TrenDAP.iTemplatableXvsY>) {
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


    public CalculateRange = (type: 'X' | 'Y' | 'time') => {
        let ds = this.Data.find(ds => ds.DataSource.ID === this.JSON.X.Series.DataSourceID)
        let dd = ds?.Data ?? [];
        let ss;

        if (type === 'time') {
            if (ds.DataSource.Type === 'TrenDAPDB')
                ss = dd.find((d: TrenDAP.iXDAReturnData) => d[this.By] === this.Device && d.Phase === this.JSON[type].Series.Phase && d.Characteristic === (this.JSON[type].Series as TrenDAP.iTemplateSeriesXDA).Characteristic && d.Type === this.JSON[type].Series.Type).Data.map(d => new Date(d.Timestamp).getTime());
            else if (ds.DataSource.Type === 'OpenHistorian')
                ss = dd.find((d: TrenDAP.iOpenHistorianReturn) => d[this.By] === this.Device && d.Phase === this.JSON[type].Series.Phase && d.SignalType === this.JSON[type].Series.Type).Data.map(d => new Date(d.Timestamp).getTime());
            else
                ss = [];
            this.JSON.TimeMax = Math.max(...ss);
            this.JSON.TimeMin = Math.min(...ss);

        }
        else {
            if (ds.DataSource.Type === 'TrenDAPDB')
                ss = dd.find((d: TrenDAP.iXDAReturnData) => d[this.By] === this.Device && d.Phase === this.JSON[type].Series.Phase && d.Characteristic === (this.JSON[type].Series as TrenDAP.iTemplateSeriesXDA).Characteristic && d.Type === this.JSON[type].Series.Type).Data.map(d => d[this.JSON[type].Series.Field]);
            else if (ds.DataSource.Type === 'OpenHistorian')
                ss = dd.find((d: TrenDAP.iOpenHistorianReturn) => d[this.By] === this.Device && d.Phase === this.JSON[type].Series.Phase && d.SignalType === this.JSON[type].Series.Type).Data.map(d => d[this.JSON[type].Series.Field]);
            else
                ss = [];

            this.JSON[type].Max = Math.max(...ss);
            this.JSON[type].Min = Math.min(...ss);
            let buffer = (this.JSON[type].Max - this.JSON[type].Min) * .10;
            this.JSON[type].Max = this.JSON[type].Max + buffer;
            this.JSON[type].Min = this.JSON[type].Min - buffer;

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

    public SetSeriesXDA = (axis: 'X' | 'Y', dataSourceID: number, phase: OpenXDA.PhaseName, type: OpenXDA.MeasurementTypeName, characteristic: OpenXDA.MeasurementCharacteristicName) => {
        this.JSON[axis].Series = { DataSourceID: dataSourceID, Phase: phase, Type: type, Characteristic: characteristic, Field: 'Average' }
        return new XvsY(this);
    };
    public SetSeriesOH = (axis: 'X' | 'Y', dataSourceID: number, phase: OpenHistorian.Phase, type: OpenHistorian.SignalType) => {
        this.JSON[axis].Series = { DataSourceID: dataSourceID, Phase: phase, Type: type, Field: 'Average' }
        return new XvsY(this);
    };


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

export function CreateWidget(type: TrenDAP.WidgetType, by: TrenDAP.TemplateBy, device: string, height: number, width: number) {
    if (type == 'Histogram')
        return new Histogram({Height: height, Width: width, By: by, Device: device, Label: type, Type: type, JSON: undefined });
    //else if (type == 'Profile')
    //    return new Profile(height, width);
    else if (type == 'Stats')
        return new Stats({ Height: height, Width: width, By: by, Device: device,Label: type, Type: type, JSON: undefined });
    else if (type == 'Table')
        return new Table({ Height: height, Width: width, By: by, Device: device,Label: type, Type: type, JSON: undefined });
    else if (type == 'Text')
        return new Text({ Height: height, Width: width, By: by, Device: device,Label: type, Type: type, JSON: undefined });
    else if (type == 'Trend')
        return new Trend({ Height: height, Width: width, By: by, Device: device,Label: type, Type: type, JSON: undefined });
    if (type == 'XvsY')
        return new XvsY({ Height: height, Width: width, By: by, Device: device, Label: type, Type: type, JSON: undefined });
}

function GetColor(label?: string) {
    if (label == undefined) return RandomColor();
    else if (label.indexOf('Voltage A') >= 0) return '#A30000';
    else if (label.indexOf('Voltage B') >= 0) return '#0029A3';
    else if (label.indexOf('Voltage C') >= 0) return '#007A29';
    else if (label.indexOf('Voltage N') >= 0) return '#c3c3c3';
    else if (label.indexOf('Current A') >= 0) return '#FF0000';
    else if (label.indexOf('Current B') >= 0) return '#0066CC';
    else if (label.indexOf('Current C') >= 0) return '#33CC33';
    else if (label.indexOf('AN') >= 0) return '#FF0000';
    else if (label.indexOf('BN') >= 0) return '#0066CC';
    else if (label.indexOf('CN') >= 0) return '#33CC33';
    else if (label.indexOf('NG') >= 0) return '#c3c3c3';
    else if (label.indexOf('RES') >= 0) return '#ffc107';
    else if (label.indexOf('Average') >= 0) return '#9A52A4';
    else if (label.indexOf('Total') >= 0) return '#9A52A4';
    else if (label.indexOf('S0') >= 0) return '#A30000';
    else if (label.indexOf('S2') >= 0) return '#007A29';
    else if (label.indexOf('S1') >= 0) return '#0029A3';
    else return RandomColor();
}
