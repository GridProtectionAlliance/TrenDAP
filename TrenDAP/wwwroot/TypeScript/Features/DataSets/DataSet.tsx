﻿//******************************************************************************************************
//  DataSet.tsx - Gbtc
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
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, DataSourceTypes } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SelectDataSources, SelectDataSourcesStatus, FetchDataSources } from '../DataSources/DataSourcesSlice';

import DataSetGlobalSettings from './Types/DataSetGlobalSettings';
import DataSourceWrapper from '../DataSources/DataSourceWrapper';

interface IProps {
    DataSet: TrenDAP.iDataSet,
    SetDataSet: (ws: TrenDAP.iDataSet) => void,
    Connections: DataSourceTypes.IDataSourceDataSet[],
    SetConnections: (arg: DataSourceTypes.IDataSourceDataSet[]) => void,
    Tab: string
}

const DataSet: React.FunctionComponent<IProps> = (props: IProps) => {
    const dispatch = useAppDispatch();
    const dataSources = useAppSelector(SelectDataSources) as DataSourceTypes.IDataSourceView[];
    const dsStatus = useAppSelector(SelectDataSourcesStatus);
    const [tab, setTab] = React.useState<string>('settings');

    React.useEffect(() => {
        if (dsStatus === 'unitiated' || dsStatus === 'changed') dispatch(FetchDataSources());
    }, [dsStatus]);

    const changeConn = React.useCallback((index: number, conn: DataSourceTypes.IDataSourceDataSet) => {
        const newConns = [...props.Connections];
        if (index < 0 || index >= newConns.length) {
            console.error(`Could not find connection ${index} in connection array.`);
            return;
        }
        newConns.splice(index, 1, conn);
        props.SetConnections(newConns);
    }, [props.Connections, props.SetConnections]);

    const deleteConn = React.useCallback((index: number) => {
        const newConns = [...props.Connections];
        if (index < 0 || index >= newConns.length) {
            console.error(`Could not find connection ${index} in connection array.`);
            return;
        }
        newConns.splice(index, 1);
        props.SetConnections(newConns);
    }, [props.Connections, props.SetConnections]);
   
    return (
        <>
        <div className="tab-content" style={{height: '100%', width: '100%'}}>
                <div className={"tab-pane container " + (tab === "settings" ? 'active' : 'fade')}>
                    <DataSetGlobalSettings DataSet={props.DataSet} SetDataSet={props.SetDataSet} Connections={props.Connections} SetConnections={props.SetConnections} />
                </div>
                {
                    props.Connections.map((conn, index) => (
                        <div className={"tab-pane container " + (tab === index.toString() ? 'active' : 'fade')} id={index.toString()} key={index}>
                            <DataSourceWrapper DataSource={dataSources.find(ds => ds.ID === conn.DataSourceID)}
                                ComponentType='datasetConfig' DataSet={props.DataSet}
                                DataSetConn={conn} SetDataSetConn={newConn => changeConn(index, newConn)} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default DataSet;