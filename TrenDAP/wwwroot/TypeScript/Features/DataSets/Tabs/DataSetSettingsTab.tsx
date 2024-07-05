//******************************************************************************************************
//  DataSetGlobalSettings.tsx - Gbtc
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
//  08/27/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, DataSourceTypes } from '../../../global';
import { Input, CheckBox, EnumCheckBoxes } from '@gpa-gemstone/react-forms';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { SelectDataSets, SelectDataSetsStatus, FetchDataSets } from './../DataSetsSlice';
import { ComputeValidDays, ComputeValidWeeks } from '../HelperFunctions';
import { EventSourceTypes } from '../../EventSources/Interface';

interface IProps {
    DataSet: TrenDAP.iDataSet,
    SetDataSet: (ws: TrenDAP.iDataSet) => void,
    DataConnections: DataSourceTypes.IDataSourceDataSet[],
    SetDataConnections: (arg: DataSourceTypes.IDataSourceDataSet[]) => void,
    EventConnections: EventSourceTypes.IEventSourceDataSet[],
    SetEventConnections: (arg: EventSourceTypes.IEventSourceDataSet[]) => void
}

const DataSetSettingsTab: React.FunctionComponent<IProps> = (props: IProps) => {
    const [nameFeedback, setNameFeedback] = React.useState<string>("A Data Set with this name already exists.");
    const dispatch = useAppDispatch();
    const dataSets = useAppSelector(SelectDataSets);
    const dataSetStatus = useAppSelector(SelectDataSetsStatus);

    React.useEffect(() => {
        if (dataSetStatus != 'unitiated' && dataSetStatus != 'changed') return;
        dispatch(FetchDataSets());
    }, [dataSetStatus]);

    function valid(field: keyof (TrenDAP.iDataSet)): boolean {
        if (field == 'Name') {
            if (props.DataSet.Name == null || props.DataSet.Name.trim().length == 0 || props.DataSet.Name.length > 200) {
                setNameFeedback("Name less than 200 Characters is required.")
                return false;
            }
            else if (dataSets.findIndex(ds => (ds.Public || ds.User === userName) && ds.ID !== props.DataSet.ID && ds.Name.toLowerCase() == props.DataSet.Name.toLowerCase()) > -1) {
                setNameFeedback("A Data Set with this name already exists.")
                return false;
            }
            else if (props.DataSet.Public && dataSets.findIndex(ds => ds.ID !== props.DataSet.ID && ds.Name.toLowerCase() == props.DataSet.Name.toLowerCase()) > -1) {
                setNameFeedback("A Data Set with this name was already created by another user.");
                return false;
            } else return true;
        }
        else
            return true;
    }

    function validDay(d: string) {

        const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const i = dayOfWeek.findIndex(day => day == d);

        return (ComputeValidDays(props.DataSet) & Math.pow(2,i)) == 0
    }

    function validWeek(h: string) {
        const i = parseInt(h);
        let x = ComputeValidWeeks(props.DataSet);
        return Math.floor(ComputeValidWeeks(props.DataSet)/ Math.pow(2, i))%2 == 0
    }

    return (
        <>
            <Input<TrenDAP.iDataSet> Record={props.DataSet} Field="Name" Setter={(record) => props.SetDataSet(record)} Valid={valid} Feedback={nameFeedback} />
            <RelativeDateRangePicker Record={props.DataSet} Setter={(record) => props.SetDataSet(record)} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.DataSet} Field="Hours" Label="Hour of Day" Setter={(record) => props.SetDataSet(record)} Enum={Array.from({ length: 24 }, (_, i) => i.toString())} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.DataSet} Field="Days" Label="Day of Week" Setter={(record) => props.SetDataSet(record)} Enum={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} IsDisabled={validDay} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.DataSet} Field="Weeks" Label="Week of Year" Setter={(record) => props.SetDataSet(record)} Enum={Array.from({ length: 53 }, (_, i) => i.toString())} IsDisabled={validWeek} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.DataSet} Field="Months" Label="Month of Year" Setter={(record) => props.SetDataSet(record)} Enum={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
            <CheckBox<TrenDAP.iDataSet> Record={props.DataSet} Field="Public" Label='Shared' Setter={(record) => props.SetDataSet(record)} />
        </>
    );

}

export default DataSetSettingsTab;

const RelativeDateRangePicker = (props: { Record: TrenDAP.iDataSet, Setter: (record: TrenDAP.iDataSet) => void }) => {
    const [context, setContext] = React.useState<'Relative' | 'Fixed Dates'>(props.Record.Context);
    const [relativeValue, setRelativeValue] = React.useState<number>(props.Record.RelativeValue);
    const [relativeWindow, setRelativeWindow] = React.useState<'Day' | 'Week' | 'Month' | 'Year'>(props.Record.RelativeWindow)
    const [startDate, setStartDate] = React.useState<string>(props.Record.From);
    const [endDate, setEndDate] = React.useState<string>(props.Record.To);

    React.useEffect(() => {
        if (context !== props.Record.Context) setContext(props.Record.Context);
        if (relativeValue !== props.Record.RelativeValue) setRelativeValue(props.Record.RelativeValue);
        if (relativeWindow !== props.Record.RelativeWindow) setRelativeWindow(props.Record.RelativeWindow);
        if (startDate !== props.Record.From) setStartDate(props.Record.From);
        if (endDate !== props.Record.To) setEndDate(props.Record.To);
    }, [props.Record]);

    React.useEffect(() => {
        if (context !== props.Record.Context) {
            const newRecord = { ...props.Record };
            newRecord.Context = context;
            props.Setter(newRecord);
        }
    }, [context]);

    React.useEffect(() => {
        if (relativeValue !== props.Record.RelativeValue) {
            const newRecord = { ...props.Record };
            newRecord.RelativeValue = relativeValue;
            props.Setter(newRecord);
        }
    }, [relativeValue]);

    React.useEffect(() => {
        if (relativeWindow !== props.Record.RelativeWindow) {
            const newRecord = { ...props.Record };
            newRecord.RelativeWindow = relativeWindow;
            props.Setter(newRecord);
        }
    }, [relativeWindow]);

    React.useEffect(() => {
        if (startDate !== props.Record.From) {
            const newRecord = { ...props.Record };
            newRecord.From = startDate;
            props.Setter(newRecord);
        }
    }, [startDate]);

    React.useEffect(() => {
        if (endDate !== props.Record.To) {
            const newRecord = { ...props.Record };
            newRecord.To = endDate;
            props.Setter(newRecord);
        }
    }, [endDate]);


    const ShowContent = () => {
        if (context == 'Relative')
            return ShowRelative();
        else return ShowFixed();
    }

    const ShowRelative = () => {
        return (
            <>
                <div className='col'>
                    <label>Time Window Size</label>
                    <input value={relativeValue} type='number' className='form-control' onChange={(evt) => setRelativeValue(parseFloat(evt.target.value))} />
                </div>
                <div className='col'>
                    <label>Time Window Units</label>
                    <select className='form-control' value={relativeWindow} onChange={(evt) => setRelativeWindow(evt.target.value as any)}>
                        <option value='Day'>Day(s)</option>
                        <option value='Week'>Week(s)</option>
                        <option value='Month'>Month(s)</option>
                        <option value='Year'>Year(s)</option>
                    </select>
                </div>
            </>
        );
    }
    const ShowFixed = () => {
        return (
            <>
                <div className='col'>
                    <label>Start Date</label>
                    <input value={startDate} type='date' className='form-control' onChange={(evt) => setStartDate(evt.target.value)} />
                </div>
                <div className='col'>
                    <label>End Date</label>
                    <input value={endDate} type='date' className='form-control' onChange={(evt) => setEndDate(evt.target.value)} />
                </div>
            </>
        );
    }


    return (
        <div className='row'>
            <div className='col'>
                <label>Time Context</label>
                <select className='form-control' value={context} onChange={(evt) => setContext(evt.target.value as any)}>
                    <option value='Relative'>Relative</option>
                    <option value='Fixed Dates'>Fixed Dates</option>
                </select>
            </div>
            {ShowContent()}
        </div>
    );
}
