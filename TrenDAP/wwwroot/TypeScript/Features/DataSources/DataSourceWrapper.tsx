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
import * as _ from 'lodash';
import { ServerErrorIcon } from '@gpa-gemstone/react-interactive';
import { DataSourceTypes, TrenDAP } from '../../global';
import { IDataSource, EnsureTypeSafety } from './Interface';
import { AllSources } from './DataSources';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface IProps {
    DataSource: DataSourceTypes.IDataSourceView,
    SetErrors: (e: string[]) => void,
    DataSet: TrenDAP.iDataSet,
    Connection: DataSourceTypes.IDataSourceDataSet,
    SetConnection: (arg: DataSourceTypes.IDataSourceDataSet) => void
}

const DataSourceWrapper: React.FC<IProps> = (props: IProps) => {
    const implementation: IDataSource<any, any> | null =
        React.useMemo(() => AllSources.find(t => t.Name == props.DataSource?.Type), [props.DataSource?.Type]);

    const DataSetSettings = React.useMemo(() => {
        if (props.DataSource == null) return;
        if (props.Connection?.Settings == null)
            return implementation?.DefaultDataSetSettings ?? {};
        return EnsureTypeSafety(props.Connection.Settings, implementation?.DefaultDataSetSettings ?? {});
    }, [implementation, props.Connection?.Settings]);

    // Ensure that source settings are valid
    const dataSource = React.useMemo(() => {
        if (implementation == null)
            return props.DataSource;
        const src = _.cloneDeep(props.DataSource);
        const sourceSettings = _.cloneDeep(implementation.DefaultSourceSettings ?? {});
        const custom = props.DataSource.Settings;
        for (const [k] of Object.entries(sourceSettings)) {
            if (custom.hasOwnProperty(k))
                sourceSettings[k] = _.cloneDeep(custom[k]);
        }
        src.Settings = sourceSettings;
        return src;
    }, [props.DataSource]);

    return <>{implementation == null ? <div className="card">
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
            <implementation.DataSetUI
                DataSet={props.DataSet}
                DataSource={dataSource}
                DataSetSettings={DataSetSettings}
                SetDataSetSettings={(s) => props.SetConnection({ ...props.Connection, Settings: s })}
                SetErrors={props.SetErrors}
            />
        </ErrorBoundary>}
    </>
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
        console.error(error);
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

export default DataSourceWrapper;