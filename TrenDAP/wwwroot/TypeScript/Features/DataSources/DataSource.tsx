//******************************************************************************************************
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
import { DataSourceTypes, Redux } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Input, Select, CheckBox, DatePicker } from '@gpa-gemstone/react-forms';
import { AllSources, DataSourceWrapper } from './DataSourceWrapper';
import { SelectDataSourcesStatus, SelectDataSourcesAllPublicNotUser, SelectDataSourcesForUser, FetchDataSources } from './DataSourcesSlice';

const DataSource: React.FunctionComponent<{ DataSource: DataSourceTypes.IDataSourceView, SetDataSource: (ds: DataSourceTypes.IDataSourceView) => void, SetErrors: (e: string[]) => void }> = (props) => {
    const dispatch = useAppDispatch();
    const dataSources = useAppSelector((state: Redux.StoreState) => SelectDataSourcesForUser(state, userName)) as DataSourceTypes.IDataSourceView[];
    const publicDataSources = useAppSelector((state: Redux.StoreState) => SelectDataSourcesAllPublicNotUser(state, userName)) as DataSourceTypes.IDataSourceView[];
    const dsStatus = useAppSelector(SelectDataSourcesStatus);
    const dataSourceTypes: DataSourceTypes.IDataSourceType[] = useAppSelector(SelectDataSourceTypes);
    const [useExpiredField, setUseExpiredField] = React.useState<boolean>(props.DataSource.Expires != null);
    const [wrapperErrors, setWrapperErrors] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (dsStatus === 'unitiated' || dsStatus === 'changed') dispatch(FetchDataSources());
    }, [dsStatus]);

    React.useEffect(() => {
        const errors: string[] = [];
        if (!valid('Name')) errors.push("Name between 0 and 200 characters is required.");
        else if (dataSources.filter(ds => ds.ID !== props.DataSource.ID).map(ds => ds.Name.toLowerCase()).includes(props.DataSource.Name.toLowerCase()))
            errors.push("A datasource with this name already exists.")
        else if (dataSources.filter(ds => ds.ID !== props.DataSource.ID).concat(publicDataSources).map(ds => ds.Name.toLowerCase()).includes(props.DataSource.Name.toLowerCase()))
            errors.push("A shared datasource with this name was already created by another user.");

        props.SetErrors(wrapperErrors.concat(errors));
    }, [props.DataSource, wrapperErrors]);

    function valid(field: keyof (DataSourceTypes.IDataSourceView)): boolean {
        if (field == 'Name')
            return props.DataSource.Name != null && props.DataSource.Name.length > 0 && props.DataSource.Name.length <= 200;
        return false;
    }

    return (
        <form>
            <Input<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="Name" Setter={props.SetDataSource} Valid={valid} />
            <Select<DataSourceTypes.IDataSourceView> Record={props.DataSource} Label="Type" Field="Type" Setter={props.SetDataSource}
                Options={AllSources.map((type) => ({ Value: type.Name, Label: type.Name }))} />
            <Input<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="URL" Setter={props.SetDataSource} Valid={() => true} />
            <Input<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="RegistrationKey" Label={'Registration Key'} Setter={props.SetDataSource} Valid={() => true} />
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
            <DataSourceWrapper ComponentType='sourceConfig' DataSource={props.DataSource} SetDataSource={props.SetDataSource} SetErrors={setWrapperErrors} />
        </form>
    );
}

export default DataSource;