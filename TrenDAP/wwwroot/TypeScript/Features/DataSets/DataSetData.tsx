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
import { TrenDAP } from '../../global';
import { useDispatch } from 'react-redux';
import { FetchDataSetData, UpdateDataSetDataFlag } from './DataSetsSlice'
import {  Spinner, Warning, CrossMark, HeavyCheckMark } from '../../Constants'
import styles from '../../../Styles/spinner.scss';
import LoadingSpinner from '../../LoadingSpinner';

const DataSetData = (props: TrenDAP.iDataSet) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (props.ID === undefined) return;
        if(props.Data === undefined)
            dispatch(UpdateDataSetDataFlag(props));
    },[props]);

     if (props.Data?.Status === 'loading')
        return <span title="Loading Data." style={{ marginLeft: 25 }}><LoadingSpinner Height={25} Width={25} Color="black" Background="white" /></span>;
    else if (props.Data?.Status === 'error')
        return <button className='btn btn-link' onClick={() => dispatch(FetchDataSetData(props))} title={`Error loading data: ${props.Data.Error}. Click to reload.`}>{CrossMark}</button>;
    else if (props.Data?.Status === 'idle')
        return <button className='btn btn-link' onClick={() => dispatch(FetchDataSetData(props))} title='Data loaded into TrenDAP. Click to reload.' >{HeavyCheckMark}</button>;
     else
         return <button className='btn btn-link' onClick={() => dispatch(FetchDataSetData(props))} title='Click to load data into TrenDAP'>{Warning}</button>;

}

export default DataSetData;