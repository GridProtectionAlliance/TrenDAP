//******************************************************************************************************
//  AddNewDataSet.tsx - Gbtc
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
//  09/25/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../global';
import { useDispatch, useSelector } from 'react-redux';
import { AddDataSet, SelectRecord, New, Update, SelectDataSets } from './DataSetsSlice'
import DataSet from './DataSet';
import { useNavigate } from 'react-router-dom';
import { ToolTip } from '@gpa-gemstone/react-interactive';
import { Warning } from '@gpa-gemstone/gpa-symbols';
import moment from 'moment';
import { CrossMark } from '../../Constants';

const AddNewDataSet: React.FunctionComponent<{}> = (props) => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const dataSet = useSelector(SelectRecord);
    const allDataSets = useSelector(SelectDataSets);

    const [warnings, setWarning] = React.useState<string[]>([]);
    const [errors, setErrors] = React.useState<string[]>([]);
    const [hover, setHover] = React.useState<boolean>(false);
    //React.useEffect(() => {
    //    dispatch(New);
    //});

    React.useEffect(() => {
        const w = [];
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Day' && dataSet.RelativeValue < 7)
            w.push("With the current Time Context and Day of Week Filter it is possible for the dataset to be empty at times.")
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Week' && dataSet.RelativeValue < 53)
            w.push("With the current Time Context and Week of Year Filter it is possible for the dataset to be empty at times.")
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Day' && dataSet.RelativeValue < 366)
            w.push("With the current Time Context and Week of Year Filter it is possible for the dataset to be empty at times.")
        setWarning(w);
    }, [dataSet])

    React.useEffect(() => {
        const e = [];

        if (dataSet.Name == null || dataSet.Name.trim().length == 0)
            e.push("A Name has to be entered.")
        if (dataSet.Name != null && dataSet.Name.length > 200)
            e.push("Name has to be less than 200 characters.");
        if (dataSet.Name != null && allDataSets.findIndex(ds => ds.ID !== dataSet.ID && ds.Name.toLowerCase() == dataSet.Name.toLowerCase()) > -1)
            e.push("A DataSet with this name already exists.");
        if (dataSet.Context == 'Fixed Dates' && moment(dataSet.From).isAfter(moment(dataSet.To)))
            e.push("A valid Timeframe has to be selected.")
        if (dataSet.Hours == 0)
            e.push("At least 1 Hour has to be selected.")
        if (dataSet.Days == 0)
            e.push("At least 1 Day has to be selected.")
        if (dataSet.Months == 0)
            e.push("At least 1 Month has to be selected.")
        if (dataSet.Weeks == 0)
            e.push("At least 1 Week has to be selected.")
        if (JSON.parse(dataSet.JSONString).length == 0)
            e.push("At least 1 DataSource needs to be added.");
        setErrors(e);
    }, [dataSet])

   
    return (
        <>
        <div className="row" style={{margin: 10}}>
            <div className="card" style={{ width: '100%', height: window.innerHeight - 60 }}>
                    <div className="card-header">
                        New Data Set {dataSet.Name !== null && dataSet.Name.trim().length > 0 ? ('(' + dataSet.Name + ')') : ''}
                </div>
                <div className="card-body" style={{ overflowY: 'auto' }}>
                    <DataSet Record={dataSet} SetDataSet={(record) => dispatch(Update(record))} />
                </div>
                <div className="card-footer">
                    <div className="btn-group mr-2">
                            <button type="button" data-tooltip="newBtn"
                                className={"btn btn-primary" + (errors.length > 0 ? ' disabled' : '')}
                                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                                onClick={() => {
                                    if (errors.length > 0)
                                        return;
                                    dispatch(AddDataSet(dataSet));
                                    navigate(`${homePath}DataSets`);
                                }}
                            > Save</button>
                        </div>
                        <ToolTip Target="newBtn" Show={hover && (warnings.length > 0 || errors.length > 0)} Position={'top'}>
                            {warnings.map((w,i) => <p key={2*i}>{Warning} {w} </p>)}
                            {errors.map((e,i) => <p key={2*i+1}>{CrossMark} {e} </p>)}
                        </ToolTip>
                </div>
               
            </div>
        </div>
           
            </>
    );
}

export default AddNewDataSet;