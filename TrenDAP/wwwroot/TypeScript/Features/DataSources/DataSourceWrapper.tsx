//******************************************************************************************************
//  DataSourceWrapper.tsx - Gbtc
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
//  04/01/2024 - G. Santos
//       Generated original version of source code.
//
//******************************************************************************************************
import * as React from 'react';
import { ServerErrorIcon } from '@gpa-gemstone/react-interactive';
import { cloneDeep } from 'lodash';
import { DataSourceTypes, TrenDAP } from '../../global';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SelectDataSourceTypes, SelectDataSourceTypesStatus, FetchDataSourceTypes } from '../DataSourceTypes/DataSourceTypesSlice';

const AllSources: DataSourceTypes.IDataSource<any>[] = [];

interface IPropsCommon {
    DataSource: DataSourceTypes.IDataSourceView
}

interface IPropsDataset extends IPropsCommon {
    ComponentType: 'dataset',
}

interface IPropsSetting extends IPropsCommon {
    ComponentType: 'setting',
    SetDataSource?: (newSource: DataSourceTypes.IDataSourceView) => void
}

const DataSourceWrapper: React.FC<IPropsDataset | IPropsSetting> = (props: IPropsDataset | IPropsSetting) => {
    const dispatch = useAppDispatch();
    const dstStatus = useAppSelector(SelectDataSourceTypesStatus);
    const dataSourceTypes = useAppSelector(SelectDataSourceTypes);

    React.useEffect(() => {
        if (dstStatus === 'unitiated' || dstStatus === 'changed') dispatch(FetchDataSourceTypes());
    }, [dstStatus]);

    const dataSource = React.useMemo(() => GetReactDataSource(props.DataSource, dataSourceTypes), [props.DataSource.DataSourceTypeID, dstStatus]);

    const Settings = React.useMemo(() => {
        if (props.DataSource.OtherSettings == null)
            return dataSource?.DefaultSettings ?? {};
        const s = cloneDeep(dataSource?.DefaultSettings ?? {});
        let custom = {};
        if (props.DataSource.OtherSettings.length > 2) {
            try {
                custom = JSON.parse(props.DataSource.OtherSettings);
            } catch {
                custom = {};
                console.warn(`Widget ${props.DataSource.Name} does not have a valid settings string`);
            }
        }

        for (const [k] of Object.entries(dataSource?.DefaultSettings ?? {})) {
            if (custom.hasOwnProperty(k))
                s[k] = cloneDeep(custom[k]);
        }
        return s;
    }, [dataSource, props.DataSource.OtherSettings]);

    const SetSettings = React.useCallback(newSetting => {
        if (props.ComponentType !== 'setting') return;
        const newDataSource = { ...props.DataSource };
        newDataSource.OtherSettings = JSON.stringify(newSetting);
        props.SetDataSource(newDataSource);
    }, [props.DataSource, props['SetDataSource']]);

    return <>{dataSource == null ? <div className="card">
        <div className="card-header">
            {props.DataSource.Name} - Error
        </div>
        <div className="card-body">
            <ServerErrorIcon Show={true}
                Label={`Datasource ${props.DataSource.Name} is not available. Please contact your system administrator.`}
                Size={150} />
        </div>
    </div>
        : <ErrorBoundary Name={props.DataSource.Name}>
            {props.ComponentType === 'dataset' ?
                <dataSource.DataSetUI
                    DataSource={props.DataSource}
                    Settings={Settings}
                /> :
                <dataSource.ConfigUI
                    Settings={Settings}
                    SetSettings={SetSettings}
                />
            }
        </ErrorBoundary>}
    </>
}

// Function finds react datasource definition given a list of dataSourceTypes
function GetReactDataSource(dataSource: DataSourceTypes.IDataSourceView, dataSourceTypes: DataSourceTypes.IDataSourceType[]) {
    // Find Type
    const dataSourceType = dataSourceTypes.find(type => type.ID === dataSource.DataSourceTypeID);
    if (dataSourceType === undefined) return undefined;

    return AllSources.find(item => item.Name === dataSourceType.Name);
}

interface IError {
    name: string,
    message: string
}

class ErrorBoundary extends React.Component<{ Name: string }, IError> {
    constructor(props) {
        super(props);
        this.state = { name: "", message: "" };
    }

    componentDidCatch(error) {
        this.setState({
            name: error.name,
            message: error.message
        });
        console.log(error);
    }

    render() {
        if (this.state.name.length > 0) {
            return (
                <div className="card">
                    <div className="card-header">
                        {this.props.Name} - Error
                    </div>
                    <div className="card-body">
                        <ServerErrorIcon Show={true}
                            Label={`DataSource ${this.props.Name} has encoutered an error.`}
                            Size={150} />
                    </div>
                </div>
            );
        } else {
            return <>{this.props.children}</>;
        }
    }
}

export { AllSources, DataSourceWrapper, GetReactDataSource }
export default DataSourceWrapper;