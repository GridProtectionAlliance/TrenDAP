//******************************************************************************************************
//  Interface.tsx - Gbtc
//
//  Copyright © 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  04/29/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************
import { TrenDAP, DataSourceTypes, DataSetTypes } from '../../global'

// The intrefaces for Trend Datasources
// Interfaces = connection points to other pieces in the architecture

/*
 Interface that needs to be implemented by an DataSource
 {T} => Settings Associated with this Datasource
 {U} => Settings associated with the speicific Datasource and Dataset
*/
export interface IDataSource<T, U> {
    DataSetUI: React.FC<DataSourceTypes.IDataSourceDataSetProps<T, U>>,
    ConfigUI: React.FC<TrenDAP.ISourceConfig<T>>,
    LoadDataSetMeta: (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, dataConn: DataSourceTypes.IDataSourceDataSet)
        => Promise<DataSetTypes.IDataSetMetaData[]>,
    LoadDataSet: (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, dataConn: DataSourceTypes.IDataSourceDataSet)
        => Promise<DataSetTypes.IDataSetData[]>,
    QuickViewDataSet?: (dataSource: DataSourceTypes.IDataSourceView, dataSet: TrenDAP.iDataSet, dataConn: DataSourceTypes.IDataSourceDataSet)
        => string,
    TestAuth: (dataSource: DataSourceTypes.IDataSourceView)
        => Promise<boolean>,
    DefaultSourceSettings: T,
    DefaultDataSetSettings: U,
    Name: string,
}