﻿//******************************************************************************************************
//  DataSources.tsx - Gbtc
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
//  09/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../global';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Select, CheckBox } from '@gpa-gemstone/react-forms';

import { SelectDataSourceTypes, SelectDataSourceTypesStatus, FetchDataSourceTypes } from '../DataSourceTypes/DataSourceTypesSlice';

const DataSource: React.FunctionComponent<{ DataSource: TrenDAP.iDataSource, SetDataSource: (ds: TrenDAP.iDataSource) => void }> = (props) => {
    const dataSourceTypes: TrenDAP.iDataSourceType[] = useSelector(SelectDataSourceTypes);
    const dstStatus = useSelector(SelectDataSourceTypesStatus);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (dstStatus != 'unitiated') return;

        dispatch(FetchDataSourceTypes());
        return function () {
        }
    }, [dispatch]);

    function valid(field: keyof(TrenDAP.iDataSource)): boolean {
        if (field == 'Name')
            return props.DataSource.Name != null && props.DataSource.Name.length > 0 && props.DataSource.Name.length <= 200;
        else if (field == 'URL')
            return true;
        else if (field == 'Credential')
            return true;
        else if (field == 'Password')
            return true;
        return false;
    }

    return (
        <form>
            <Input<TrenDAP.iDataSource> Record={props.DataSource} Field="Name" Setter={props.SetDataSource} Valid={valid} />
            <Select<TrenDAP.iDataSource> Record={props.DataSource} Label="DataSource Type" Field="DataSourceTypeID" Setter={props.SetDataSource} Options={dataSourceTypes.map(x => ({Value: x.ID.toString(), Label: x.Name })) } />
            <Input<TrenDAP.iDataSource> Record={props.DataSource} Field="URL" Setter={props.SetDataSource} Valid={valid} />
            <Input<TrenDAP.iDataSource> Record={props.DataSource} Field="Credential" Setter={props.SetDataSource} Valid={valid} />
            <Input<TrenDAP.iDataSource> Record={props.DataSource} Field="Password" Type="password" Setter={props.SetDataSource} Valid={valid} />

            <div className="row">
                <div className='col'>
                    <CheckBox<TrenDAP.iDataSource> Record={props.DataSource} Field="Public" Label='Shared' Setter={props.SetDataSource} />
                </div>
                <div className='col'>

                <CheckBox<TrenDAP.iDataSource> Record={props.DataSource} Field="OIDC" Label='XDA OIDC Credential' Setter={props.SetDataSource} />
                </div>

            </div>
        </form>
    );
}

export default DataSource;