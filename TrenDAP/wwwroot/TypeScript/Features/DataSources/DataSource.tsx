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
import { DataSourceTypes } from '../../global';
import { useAppSelector } from '../../hooks';
import { Input, Select, CheckBox, DatePicker } from '@gpa-gemstone/react-forms';

import { SelectDataSourceTypes } from '../DataSourceTypes/DataSourceTypesSlice';

const DataSource: React.FunctionComponent<{ DataSource: DataSourceTypes.IDataSourceView, SetDataSource: (ds: DataSourceTypes.IDataSourceView) => void }> = (props) => {
    const dataSourceTypes: DataSourceTypes.IDataSourceType[] = useAppSelector(SelectDataSourceTypes);
    const [useExpiredField, setUseExpiredField] = React.useState<boolean>(props.DataSource.Expires != null);

    function valid(field: keyof (DataSourceTypes.IDataSourceView)): boolean {
        if (field == 'Name')
            return props.DataSource.Name != null && props.DataSource.Name.length > 0 && props.DataSource.Name.length <= 200;
        return false;
    }

    return (
        <form>
            <Input<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="Name" Setter={props.SetDataSource} Valid={valid} />
            <Select<DataSourceTypes.IDataSourceView> Record={props.DataSource} Label="DataSource Type" Field="DataSourceTypeID" Setter={props.SetDataSource} Options={dataSourceTypes.map(x => ({ Value: x.ID.toString(), Label: x.Name }))} />
            <Input<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="URL" Setter={props.SetDataSource} Valid={() => true} />
            <Input<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="RegistrationKey" Label={'Registration Key'} Setter={props.SetDataSource} Valid={() => true} />
            <Input<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="Settings" Label={'Settings'} Setter={props.SetDataSource} Valid={() => true} />
            <CheckBox<{ expires: boolean }> Record={{ expires: useExpiredField }} Field="expires" Label='Expires' Setter={item => {
                if(!item.expires)
                    props.SetDataSource({ ...props.DataSource, Expires: null });
                else if (props.DataSource.Expires == null)
                    props.SetDataSource({ ...props.DataSource, Expires: new Date().toISOString() })
                setUseExpiredField(item.expires)
            }} />
            {useExpiredField ? 
                    <DatePicker<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field={"Expires"} Type={'datetime-local'} Valid={() => true} Label={"Expiration Date"} Setter={props.SetDataSource} Feedback={"Date can not expire today."} />
                : null
            }
            <div className="row">
                <div className='col'>
                    <CheckBox<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="Public" Label='Shared' Setter={props.SetDataSource} />
                </div>
            </div>
        </form>
    );
}

export default DataSource;