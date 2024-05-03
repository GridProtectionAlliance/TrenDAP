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
import XDADataSource from './ReactDataSources/XDADataSource';
import SapphireDataSource from './ReactDataSources/SapphireDataSource';
import OpenHistorianDataSource from './ReactDataSources/OpenHistorianDataSource';

const AllSources: DataSourceTypes.IDataSource<any, any>[] = [XDADataSource, SapphireDataSource, OpenHistorianDataSource];

interface IPropsCommon {
    DataSource: DataSourceTypes.IDataSourceView,
    SetErrors: (e: string[]) => void
}

interface IPropsDataset extends IPropsCommon {
    ComponentType: 'datasetConfig',
    DataSet: TrenDAP.iDataSet,
    DataSetConn: DataSourceTypes.IDataSourceDataSet,
    SetDataSetConn: (arg: DataSourceTypes.IDataSourceDataSet) => void
}

interface IPropsSetting extends IPropsCommon {
    ComponentType: 'sourceConfig',
    SetDataSource: (newSource: DataSourceTypes.IDataSourceView) => void
}

const DataSourceWrapper: React.FC<IPropsDataset | IPropsSetting> = (props: IPropsDataset | IPropsSetting) => {
    const dispatch = useAppDispatch();
    const dstStatus = useAppSelector(SelectDataSourceTypesStatus);
    const dataSourceTypes = useAppSelector(SelectDataSourceTypes);
    const [dataSource, setDataSource] = React.useState<DataSourceTypes.IDataSource<any, any>>(undefined);

    React.useEffect(() => {
        if (dstStatus === 'unitiated' || dstStatus === 'changed') dispatch(FetchDataSourceTypes());
    }, [dstStatus]);

    React.useEffect(() => {
        if (props.DataSource == null) return;
        setDataSource(GetReactDataSource(props.DataSource, dataSourceTypes));
    }, [props.DataSource?.DataSourceTypeID, dstStatus]);

    const SourceSettings = React.useMemo(() => {
        if (props.DataSource?.Settings == null)
            return dataSource?.DefaultSourceSettings ?? {};
        return TypeCorrectSettings(props.DataSource.Settings, dataSource?.DefaultSourceSettings ?? {});
    }, [dataSource, props.DataSource?.Settings]);

    const SetSourceSettings = React.useCallback(newSetting => {
        if (props.DataSource == null || props.ComponentType !== 'sourceConfig') return;
        const newDataSource = { ...props.DataSource };
        newDataSource.Settings = newSetting;
        props.SetDataSource(newDataSource);
    }, [props.DataSource, props['SetDataSource']]);

    const DataSetSettings = React.useMemo(() => {
        if (props.DataSource == null || props.ComponentType !== 'datasetConfig') return;
        if (props.DataSetConn?.Settings == null)
            return dataSource?.DefaultDataSetSettings ?? {};
        return TypeCorrectSettings(props.DataSetConn.Settings, dataSource?.DefaultDataSetSettings ?? {});
    }, [dataSource, props['DataSetConn']?.Settings]);

    const SetDataSetSettings = React.useCallback(newSetting => {
        if (props.DataSource == null || props.ComponentType !== 'datasetConfig') return;
        const newConn = { ...props.DataSetConn };
        newConn.Settings = newSetting;
        props.SetDataSetConn(newConn);
    }, [props['DataSetConn'], props['SetDataSetConn']]);

    return <>{dataSource == null ? <div className="card">
        <div className="card-header">
            {props.DataSource?.Name} - Error
        </div>
        <div className="card-body">
            <ServerErrorIcon Show={true}
                Label={`Datasource ${props.DataSource?.Name} is not available. Please contact your system administrator.`}
                Size={150} />
        </div>
    </div>
        : <ErrorBoundary Name={props.DataSource.Name}>
            {props.ComponentType === 'datasetConfig' ?
                <dataSource.DataSetUI
                    DataSet={props.DataSet}
                    DataSource={props.DataSource}
                    DataSourceSettings={SourceSettings}
                    DataSetSettings={DataSetSettings}
                    SetDataSetSettings={SetDataSetSettings}
                    SetErrors={props.SetErrors}
                /> :
                <dataSource.ConfigUI
                    Settings={SourceSettings}
                    SetSettings={SetSourceSettings}
                    SetErrors={props.SetErrors}
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

// Function to parse DataSourceDataSet Settings
function TypeCorrectSettings<T>(settingsObj: any, defaultSettings: T): T {
    const s = cloneDeep(defaultSettings);
    for (const [k] of Object.entries(defaultSettings)) {
        if (settingsObj.hasOwnProperty(k))
            s[k] = cloneDeep(settingsObj[k]);
    }
    return s;
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

export { AllSources, DataSourceWrapper, GetReactDataSource, TypeCorrectSettings }
export default DataSourceWrapper;