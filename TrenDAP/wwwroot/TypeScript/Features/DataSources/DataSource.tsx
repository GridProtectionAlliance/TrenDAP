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
import * as _ from 'lodash';
import { DataSourceTypes, Redux } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Input, Select, CheckBox } from '@gpa-gemstone/react-forms';
import { IDataSource } from './Interface';
import { AllSources } from './DataSources';
import {
    SelectDataSourcesStatus, FetchDataSources, SelectDataSources,
    SelectPublicDataSourcesStatus, SelectPublicDataSources, FetchPublicDataSources
} from './DataSourcesSlice';

const DataSource: React.FunctionComponent<{ DataSource: DataSourceTypes.IDataSourceView, SetDataSource: (ds: DataSourceTypes.IDataSourceView) => void, SetErrors: (e: string[]) => void }> = (props) => {
    const dispatch = useAppDispatch();
    const dataSources = useAppSelector(SelectDataSources);
    const dataSourceStatus = useAppSelector(SelectDataSourcesStatus);
    const publicDataSources = useAppSelector(SelectPublicDataSources);
    const publicDataSourceStatus = useAppSelector(SelectPublicDataSourcesStatus);
    const [configErrors, setConfigErrors] = React.useState<string[]>([]);
    const [privateErrors, setPrivateErrors] = React.useState<string[]>([]);
    const implementation: IDataSource<any, any, any> | null = React.useMemo(() =>
        AllSources.find(t => t.Name == props.DataSource.Type), [props.DataSource.Type]);

    const settings = React.useMemo(() => {
        if (implementation == null)
            return {};
        const s = _.cloneDeep(implementation.DefaultSourceSettings ?? {});
        const custom = props.DataSource.Settings;

        for (const [k] of Object.entries(implementation?.DefaultSourceSettings ?? {})) {
            if (custom.hasOwnProperty(k))
                s[k] = _.cloneDeep(custom[k]);
        }
        return s;
    }, [implementation, props.DataSource.Settings]);

    const privateSettings = React.useMemo(() => {
        if (implementation == null)
            return {};
        const s = _.cloneDeep(implementation.DefaultPrivateSourceSettings ?? {});
        const custom = props.DataSource.PrivateSettings;

        for (const [k] of Object.entries(implementation?.DefaultPrivateSourceSettings ?? {})) {
            if (custom.hasOwnProperty(k))
                s[k] = _.cloneDeep(custom[k]);
        }
        return s;
    }, [implementation, props.DataSource.PrivateSettings]);

    React.useEffect(() => {
        if (dataSourceStatus === 'unitiated' || dataSourceStatus === 'changed')
            dispatch(FetchDataSources());
    }, [dataSourceStatus]);

    React.useEffect(() => {
        if (publicDataSourceStatus === 'unitiated' || publicDataSourceStatus === 'changed')
            dispatch(FetchPublicDataSources());
    }, [publicDataSourceStatus]);

    React.useEffect(() => {
        const errors: string[] = [];
        if (!valid('Name')) errors.push("Name between 0 and 200 characters is required.");
        else if (dataSources.filter(ds => ds.ID !== props.DataSource.ID).map(ds => ds.Name.toLowerCase()).includes(props.DataSource.Name.toLowerCase()))
            errors.push("A datasource with this name already exists.")
        else if (dataSources.filter(ds => ds.ID !== props.DataSource.ID).concat(publicDataSources.filter(ds => ds.User !== userName)).map(ds => ds.Name.toLowerCase()).includes(props.DataSource.Name.toLowerCase()))
            errors.push("A shared datasource with this name was already created by another user.");

        props.SetErrors(errors.concat(configErrors).concat(privateErrors));
    }, [props.DataSource, configErrors, privateErrors]);

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
            <div className="row">
                <div className='col'>
                    <CheckBox<DataSourceTypes.IDataSourceView> Record={props.DataSource} Field="Public" Label='Shared' Setter={props.SetDataSource} />
                </div>
            </div>
            {implementation?.PrivateConfigUI != null ?
                <>
                    <hr />
                    <implementation.PrivateConfigUI SetErrors={setPrivateErrors} Settings={privateSettings}
                        SetSettings={(s) => props.SetDataSource({ ...props.DataSource, PrivateSettings: s })} />
                </>: <></>
            }
            {implementation?.ConfigUI != null ?
                <>
                    <hr />
                    <implementation.ConfigUI SetErrors={setConfigErrors} Settings={settings}
                        SetSettings={(s) => props.SetDataSource({ ...props.DataSource, Settings: s })} />
                </> : <></>
            }
        </form>
    );
}

export default DataSource;