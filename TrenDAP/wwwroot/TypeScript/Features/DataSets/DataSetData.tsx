//******************************************************************************************************
//  DataSetData.tsx - Gbtc
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
//  01/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import * as React from 'react';
import { Redux, TrenDAP } from '../../global';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataSetData, FetchDataSets, SelectDataSetByID, SelectDataSetsStatus, UpdateDataSetDataFlag } from './DataSetsSlice'
import {  Spinner, Warning, CrossMark, HeavyCheckMark } from '../../Constants'
import styles from '../../../Styles/spinner.scss';
import LoadingSpinner from '../../LoadingSpinner';
import moment from 'moment';

const DataSetData = (props: { ID: number }) => {
    const dispatch = useDispatch();
    const dataSet = useSelector((state: Redux.StoreState) => SelectDataSetByID(state, props.ID));
    const dsStatus = useSelector(SelectDataSetsStatus);

    React.useEffect(() => {
        if (dsStatus === 'idle') {
        }
        else if (dsStatus == 'unitiated' || dsStatus === 'changed')
            dispatch(FetchDataSets());

        return function () {
        }
    }, [dsStatus]);
    React.useEffect(() => {
        if (dataSet == undefined) return;
        else if (dataSet.Data.Status === 'unitiated')
            dispatch(UpdateDataSetDataFlag(dataSet));
    }, [dataSet?.ID]);


    if (dataSet == undefined) return null;
    else if (dataSet.Data?.Status === 'unitiated')
        return <button className='btn btn-primary' onClick={() => dispatch(FetchDataSetData(dataSet))} title={`Click to load data.`}>Load</button>;
    else if (dataSet.Data?.Status === 'loading')
        return <span title="Loading Data." style={{ marginLeft: 25 }}><LoadingSpinner Height={25} Width={25} Color="black" Background="white" /></span>;
    else if (dataSet.Data?.Status === 'error')
        return <button className='btn btn-link' onClick={() => dispatch(FetchDataSetData(dataSet))} title={`Error loading data: ${dataSet.Data.Error}. Click to attempt a reload.`}>{CrossMark}</button>;
    else if (dataSet.Data?.Status === 'idle') {
        if (moment(dataSet.Data.Error, "MM/DD/YYYY HH:mm").valueOf() < moment(dataSet.UpdatedOn).valueOf())
            return <button className='btn btn-link' onClick={() => dispatch(FetchDataSetData(dataSet))} title='Data outdated.  Click to load data into TrenDAP'>{Warning}</button>;
        else
            return <button className='btn btn-link' onClick={() => dispatch(FetchDataSetData(dataSet))} title='Data loaded into TrenDAP. Click to reload.' >{HeavyCheckMark}</button>;
    }
     else
        return <button className='btn btn-link' onClick={() => dispatch(FetchDataSetData(dataSet))} title='Click to load data into TrenDAP'>{Warning}</button>;

}

export default DataSetData;