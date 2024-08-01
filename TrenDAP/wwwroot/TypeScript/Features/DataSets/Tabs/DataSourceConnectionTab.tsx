//******************************************************************************************************
//  DataSourceCOnnectionTab.tsx - Gbtc
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
//  05/01/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { ReactTable } from '@gpa-gemstone/react-table';
import { DataSourceTypes, TrenDAP } from '../../../global';
import { FetchDataSources, SelectDataSources, SelectDataSourcesStatus } from '../../DataSources/DataSourcesSlice';
import { Pencil, Plus, TrashCan } from '@gpa-gemstone/gpa-symbols';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import DataSourceWrapper from '../../DataSources/DataSourceWrapper';

interface IProps {
    DataSourceConnections: DataSourceTypes.IDataSourceDataSet[],
    SetDataSourceConnections: (newConns: DataSourceTypes.IDataSourceDataSet[]) => void,
    DataSet: TrenDAP.iDataSet,
    SetErrors: (e: string[]) => void
}

const DataSourceConnectionTab: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch();
    const dataSources = useAppSelector(SelectDataSources);
    const dataSourceStatus = useAppSelector(SelectDataSourcesStatus);
    const errors = React.useRef<Array<string[]>>(new Array<string[]>().fill(null));
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    React.useEffect(() => {
        if (dataSourceStatus === 'unitiated' || dataSourceStatus === 'changed')
            dispatch(FetchDataSources());
    }, [dataSourceStatus]);

    React.useEffect(() => {
        props.SetErrors([]);
        errors.current = new Array<string[]>().fill(null);
    }, [props.DataSet.ID]);

    const dataSource = React.useMemo(() => {
        const srcId = props.DataSourceConnections[currentIndex]?.DataSourceID;
        if (srcId == undefined) return undefined;
        return dataSources.find(src => srcId === src.ID);
    }, [dataSourceStatus, currentIndex, props.DataSourceConnections]);

    const AddDS = React.useCallback((dataSource: DataSourceTypes.IDataSourceView) => {
        const newConns = [...props.DataSourceConnections];
        newConns.push({ ID: -1, DataSourceID: dataSource.ID, DataSourceName: dataSource.Name, DataSetID: props.DataSet.ID, DataSetName: props.DataSet.Name, Settings: {} });
        setCurrentIndex(newConns.length - 1);
        props.SetDataSourceConnections(newConns);
    }, [props.DataSourceConnections, props.SetDataSourceConnections, props.DataSet, currentIndex, dataSourceStatus]);

    const pushErrors = React.useCallback(() => {
        let e: string[] = [];
        errors.current.forEach(errorList => {
            if (errorList != null) e = e.concat(errorList);
        })
        props.SetErrors(e);
    }, [props.SetErrors]);

    const addWrapperErrors = React.useCallback((e: string[]) => {
        if (e.length === 0) errors.current[currentIndex] = null;
        else errors.current[currentIndex] = [`Errors from ${props.DataSourceConnections[currentIndex]?.DataSourceName}:`].concat(e);
        pushErrors();
    }, [pushErrors, currentIndex, props.DataSourceConnections]);

    return (
        <div className="row" style={{ flex: 1, overflow: 'hidden' }}>
            <div className="col-4 d-none d-xl-flex" style={{
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="row">
                    <div className="col-7">
                        <h4>Trend Connections</h4>
                    </div>
                    <div className="col-5">
                        <div className="dropdown">
                            <button className="btn btn-info pull-right dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {Plus} Add New
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-header">Your Data Sources</div>
                                {dataSources.filter(src => src.User === userName).map(ds => <a key={ds.ID} className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => AddDS(ds)}>{ds.Name} ({ds.Type})</a>)}
                                <div className="dropdown-header">Shared Data Sources</div>
                                {dataSources.filter(src => src.Public && src.User !== userName).map(ds => <a key={ds.ID} className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => AddDS(ds)}>{ds.Name} ({ds.Type})</a>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ flex: 1, overflow: 'hidden' }}>
                    <div className="col" style={{
                        height: '100%', overflow: 'hidden',
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <ReactTable.Table<DataSourceTypes.IDataSourceDataSet>
                            TableClass="table table-hover"
                            Data={props.DataSourceConnections}
                            SortKey={null}
                            Ascending={null}
                            OnSort={() => { }}
                            TableStyle={{
                                padding: 0, width: '100%', height: '100%',
                                tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column'
                            }}
                            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                            RowStyle={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
                            Selected={(_item, index) => currentIndex === index}
                            KeySelector={(_item, index) => index}
                            OnClick={(item) => { setCurrentIndex(item.index); }}
                        >
                            <ReactTable.Column<DataSourceTypes.IDataSourceDataSet>
                                Key={'DataSourceName'}
                                AllowSort={true}
                                Field={'DataSourceName'}
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                            > DataSource
                            </ReactTable.Column>
                            <ReactTable.Column<DataSourceTypes.IDataSourceDataSet>
                                Key={'ID'}
                                AllowSort={false}
                                Field={'ID'}
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={row =>
                                    <span>
                                        <button className="btn pull-right" onClick={(evt) => {
                                            evt.preventDefault();
                                            evt.stopPropagation();
                                            const newConns = [...props.DataSourceConnections];
                                            newConns.splice(row.index, 1);
                                            errors.current.splice(row.index, 1);
                                            props.SetDataSourceConnections(newConns);
                                            pushErrors();
                                            if (currentIndex === row.index) setCurrentIndex(0);
                                        }}>{TrashCan}</button>
                                    </span>}
                            ><></></ReactTable.Column>
                        </ReactTable.Table>
                    </div>
                </div>
            </div>
            <div className="col-8 d-none d-xl-flex" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                {props.DataSourceConnections[currentIndex] != null ?
                    <DataSourceWrapper DataSource={dataSource} Connection={props.DataSourceConnections[currentIndex]}
                        DataSet={props.DataSet} SetErrors={addWrapperErrors}
                        SetConnection={newConn => {
                            const newConns = [...props.DataSourceConnections];
                            newConns.splice(currentIndex, 1, newConn)
                            props.SetDataSourceConnections(newConns);
                        }} /> : <></>}
            </div>
        </div>
    );

}

export default DataSourceConnectionTab;