//******************************************************************************************************
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
import { SelectDataSourceTypes, SelectDataSourceTypesStatus, FetchDataSourceTypes } from '../DataSourceTypes/DataSourceTypesSlice';
import styles from '../../../Styles/app.scss';
import DataSetOpenHistorian from '../OpenHistorian/DataSetOpenHistorian';
import DataSetOpenXDA from '../OpenXDA/DataSetOpenXDA';
import DataSetGlobalSettings from './Types/DataSetGlobalSettings';
import DataSetSapphire from '../Sapphire/DataSetSapphire';


const DataSet: React.FunctionComponent<{ Record: TrenDAP.iDataSet, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dataSourceTypes = useAppSelector(SelectDataSourceTypes) as DataSourceTypes.IDataSourceType[];
    const dstStatus = useAppSelector(SelectDataSourceTypesStatus);
    const dispatch = useAppDispatch();


    React.useEffect(() => {
        if (dstStatus != 'unitiated') return;

        dispatch(FetchDataSourceTypes());
        return function () {
        }
    }, [dispatch, dstStatus]);

    const [tab, setTab] = React.useState<string>('settings');
    const dataSources = JSON.parse(props.Record.JSONString);

   
    return (
        <>
            <ul className="nav nav-tabs" style={{padding:10}}>
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" onClick={() => setTab('settings') }>Settings</a>
                </li>
                {
                    dataSources.map((ds, index) => (
                        <li className={"nav-item " + styles.workspacetab}  key={index}>
                            <a className="nav-link" data-toggle="tab" onClick={() => setTab(index.toString())}>{ds.DataSource.Name}</a>
                            <span onClick={() => {
                                let json = JSON.parse(props.Record.JSONString);
                                json.splice(index, 1);
                                props.SetDataSet({ ...props.Record, JSONString: JSON.stringify(json) });
                            }}>X</span>
                        </li>
                    ))
                }
            </ul>
            <div className="tab-content">
                <div className={"tab-pane container "+ (tab === "settings" ? 'active' : 'fade')}>
                    <DataSetGlobalSettings {...props} />
                </div>
                {
                    dataSources.map((ds, index) => (
                        <div className={"tab-pane container " + (tab === index.toString() ? 'active' : 'fade')} id={index} key={index}>
                            {
                                (dataSourceTypes.find(dst => dst.ID === ds.DataSource.DataSourceTypeID)?.Name === "TrenDAPDB" ? <DataSetOpenXDA {...props} Data={ds} Index={index}/>: null )
                            }
                            {
                                (dataSourceTypes.find(dst => dst.ID === ds.DataSource.DataSourceTypeID)?.Name === "Sapphire" ? <DataSetSapphire {...props} Data={ds} Index={index} /> : null)
                            }
                            {
                                (dataSourceTypes.find(dst => dst.ID === ds.DataSource.DataSourceTypeID)?.Name === "OpenHistorian" ? <DataSetOpenHistorian {...props} Data={ds} Index={index} /> : null)
                            }
                        </div>
                    ))

                }
            </div>

        </>
    );
}

export default DataSet;