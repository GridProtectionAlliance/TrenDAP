//******************************************************************************************************
//  AddEditDataSet.tsx - Gbtc
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
//       Generated original version of source code. (AddNewDataSet.tsx)
//  07/11/2022 - Gabriel Santos
//       Combined this and EditDataSet to make component that handles both, since they are similar
//          actions with similar error checking needs.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../global';
import { useDispatch, useSelector } from 'react-redux';
import { AddDataSet, SelectRecord, New, Update, SelectDataSets, SetRecordByID, SelectDataSetsStatus, FetchDataSets, UpdateDataSet } from './DataSetsSlice'
import DataSet from './DataSet';
import { useNavigate, useParams } from 'react-router-dom';
import { ToolTip } from '@gpa-gemstone/react-interactive';
import { Warning } from '@gpa-gemstone/gpa-symbols';
import moment from 'moment';
import { CrossMark } from '../../Constants';
import { IsNumber } from '@gpa-gemstone/helper-functions';

interface IProps {
    show: boolean;
    setShow: (evt: boolean) => void;
    id: number;
    onComplete?: (evt: TrenDAP.iDataSet) => void;
    onCancel?: () => void;
}

const AddEditDataSet = (props: IProps) => {
    const dispatch = useDispatch();

    const wsStatus = useSelector(SelectDataSetsStatus);

    const dataSet = useSelector(SelectRecord);
    const allDataSets = useSelector(SelectDataSets);

    const [warnings, setWarning] = React.useState<string[]>([]);
    const [errors, setErrors] = React.useState<string[]>([]);
    const [hover, setHover] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (wsStatus === 'unitiated' || wsStatus === 'changed') {
            dispatch(FetchDataSets());
            return function () {
            }
        }

        if (props.id > 0)
            dispatch(SetRecordByID(props.id));
        else
            dispatch(New({}));

    }, [dispatch, wsStatus, props.id]);

    React.useEffect(() => {
        const w = [];
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Day' && dataSet.RelativeValue < 7)
            w.push("With the current Time Context and Day of Week Filter it is possible for the dataset to be empty at times.")
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Week' && dataSet.RelativeValue < 53)
            w.push("With the current Time Context and Week of Year Filter it is possible for the dataset to be empty at times.")
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Month' && dataSet.RelativeValue < 12)
            w.push("With the current Time Context and Month of Year Filter it is possible for the dataset to be empty at times.")
        if (dataSet.Context == 'Relative' && dataSet.RelativeWindow == 'Year' && dataSet.RelativeValue < 366)
            w.push("With the current Time Context and Year Filter it is possible for the dataset to be empty at times.")
        setWarning(w);
    }, [dataSet])

    React.useEffect(() => {
        const e = [];

        if (dataSet.Name == null || dataSet.Name.trim().length == 0)
            e.push("A name must be entered.")
        if (dataSet.Name != null && dataSet.Name.length > 200)
            e.push("Name must be less than 200 characters.");
        if (dataSet.Name != null && allDataSets.findIndex(ds => ds.ID !== dataSet.ID && ds.Name.toLowerCase() == dataSet.Name.toLowerCase()) > -1)
            e.push("A DataSet with this name already exists.");
        if (dataSet.Context == 'Fixed Dates' && moment(dataSet.From).isAfter(moment(dataSet.To)))
            e.push("A valid Timeframe has to be selected.")
        if (dataSet.RelativeValue == null || !IsNumber(dataSet.RelativeValue))
            e.push("A valid number must be entered for relative value.")
        if (dataSet.From == '')
            e.push("A valid start date is required.")
        if (dataSet.To == '')
            e.push("A valid end date is required.")
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
        <div className="modal" style={{ display: props.show ? 'block' : null, backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <div className="modal-dialog-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{dataSet.Name !== null && dataSet.Name.trim().length > 0 ? ('Edit Data Set (' + dataSet.Name + ')') : 'New Data Set'}</h4>
                        <button type="button" className="close" onClick={() => {
                            if (props.onCancel !== undefined && props.onCancel !== null) props.onCancel();
                            props.setShow(false)
                        }}>&times;</button>
                    </div>
                        
                    <div className="modal-body">
                        <DataSet Record={dataSet} SetDataSet={(record) => dispatch(Update(record))} />
                    </div>

                    <div className="modal-footer">
                        <div className="btn-group mr-2">
                            <button type="button" data-tooltip="newBtn"
                                className={"btn btn-primary" + (errors.length > 0 ? ' disabled' : '')}
                                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                                onClick={() => {
                                    if (props.onComplete !== undefined && props.onComplete !== null) props.onComplete(dataSet);
                                    props.setShow(false);
                                    if (errors.length > 0)
                                        return;
                                    if (dataSet.ID > 0)
                                        dispatch(UpdateDataSet(dataSet));
                                    else
                                        dispatch(AddDataSet(dataSet));
                                }}
                            > Save</button>
                        </div>
                        <ToolTip Target="newBtn" Show={hover && (warnings.length > 0 || errors.length > 0)} Position={'top'}>
                            {warnings.map((w,i) => <p key={2*i}>{Warning} {w} </p>)}
                            {errors.map((e,i) => <p key={2*i+1}>{CrossMark} {e} </p>)}
                        </ToolTip>
                        <button type="button" className="btn btn-danger" onClick={() => {
                            if (props.onCancel !== undefined && props.onCancel !== null) props.onCancel();
                            props.setShow(false)
                        }}>Close</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddEditDataSet;