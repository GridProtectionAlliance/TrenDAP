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
import { TrenDAP, Redux, DataSourceTypes } from '../../../global';
import { Input, CheckBox, EnumCheckBoxes } from '@gpa-gemstone/react-forms';
import { Plus } from '../../../Constants';
import { SelectDataSourcesStatus, SelectDataSourcesAllPublicNotUser, SelectDataSourcesForUser, FetchDataSources } from '../../DataSources/DataSourcesSlice';
import { AddDataSourceDataSet } from '../../DataSources/DataSourceDataSetSlice';
import { GetReactDataSource } from '../../DataSources/DataSourceWrapper';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { SelectDataSourceTypes, SelectDataSourceTypesStatus, FetchDataSourceTypes } from '../../DataSourceTypes/DataSourceTypesSlice';
import { SelectDataSets } from './../DataSetsSlice';
import { ComputeValidDays, ComputeValidWeeks } from '../HelperFunctions';

interface IProps {
    DataSet: TrenDAP.iDataSet,
    SetDataSet: (ws: TrenDAP.iDataSet) => void,
    Connections: DataSourceTypes.IDataSourceDataSet[],
    SetConnections: (arg: DataSourceTypes.IDataSourceDataSet[]) => void
}

const DataSetGlobalSettings: React.FunctionComponent<IProps> = (props: IProps) => {
    const dispatch = useAppDispatch();
    const dataSources = useAppSelector((state: Redux.StoreState) => SelectDataSourcesForUser(state, userName)) as DataSourceTypes.IDataSourceView[];
    const publicDataSources = useAppSelector((state: Redux.StoreState) => SelectDataSourcesAllPublicNotUser(state, userName)) as DataSourceTypes.IDataSourceView[];
    const dsStatus = useAppSelector(SelectDataSourcesStatus);
    const dataSourceTypes = useAppSelector(SelectDataSourceTypes) as DataSourceTypes.IDataSourceType[];
    const dstStatus = useAppSelector(SelectDataSourceTypesStatus);
    const allDataSets = useAppSelector(SelectDataSets);

    React.useEffect(() => {
        if (dsStatus != 'unitiated' && dsStatus != 'changed') return;
        dispatch(FetchDataSources());

        return function () {
        }
    }, [dispatch, dsStatus]);

    React.useEffect(() => {
        if (dstStatus != 'unitiated') return;

        dispatch(FetchDataSourceTypes());
        return function () {
        }
    }, [dispatch, dstStatus]);


    function valid(field: keyof (TrenDAP.iDataSet)): boolean {
        if (field == 'Name')
            return props.DataSet.Name != null && props.DataSet.Name.trim().length > 0 &&
                props.DataSet.Name.length <= 200 && allDataSets.find(ws => ws.Name.toLowerCase() == props.DataSet.Name.toLowerCase() && ws.ID != props.DataSet.ID) == null
        else
            return true;
    }

    function AddDS(dataSource: DataSourceTypes.IDataSourceView) {
        const dataSourceReact = GetReactDataSource(dataSource, dataSourceTypes);
        const newConns = [...props.Connections];
        newConns.push({ ID: -1, DataSourceID: dataSource.ID, DataSetID: props.DataSet.ID, Settings: JSON.stringify(dataSourceReact.DefaultDataSetSettings) })
        props.SetConnections(newConns);
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
        <div className="d-flex flex-column h-100">
            <form className="d-flex flex-column h-100">
                <Input<TrenDAP.iDataSet> Record={props.DataSet} Field="Name" Setter={(record) => props.SetDataSet(record)} Valid={valid} Feedback={"A Unique Name has to be specified"} />
                <RelativeDateRangePicker Record={props.DataSet} Setter={(record) => props.SetDataSet(record)} />
                <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.DataSet} Field="Hours" Label="Hour of Day" Setter={(record) => props.SetDataSet(record)} Enum={Array.from({ length: 24 }, (_, i) => i.toString())} />
                <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.DataSet} Field="Days" Label="Day of Week" Setter={(record) => props.SetDataSet(record)} Enum={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} IsDisabled={validDay} />
                <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.DataSet} Field="Weeks" Label="Week of Year" Setter={(record) => props.SetDataSet(record)} Enum={Array.from({ length: 53 }, (_, i) => i.toString())} IsDisabled={validWeek} />
                <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.DataSet} Field="Months" Label="Month of Year" Setter={(record) => props.SetDataSet(record)} Enum={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
                <CheckBox<TrenDAP.iDataSet> Record={props.DataSet} Field="Public" Label='Shared' Setter={(record) => props.SetDataSet(record)} />
                <div className="form-group">
                    <div className="dropup">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {Plus} DataSource
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-header">Your DataSources</div>
                            {dataSources.map(ds => <a key={ds.ID} className="dropdown-item" onClick={() => AddDS(ds)}>{ds.Name} ({dataSourceTypes.find(dst => dst.ID === ds.DataSourceTypeID)?.Name})</a>)}
                            <div className="dropdown-header">Shared DataSources</div>
                            {publicDataSources.map(ds => <a key={ds.ID} className="dropdown-item" onClick={() => AddDS(ds)}>{ds.Name} ({dataSourceTypes.find(dst => dst.ID === ds.DataSourceTypeID)?.Name})</a>)}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default DataSetGlobalSettings;

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
