//******************************************************************************************************
//  Table.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../../global';
import styles from '../../../../Styles/app.scss';
import TableForm from '@gpa-gemstone/react-table';
import { Table } from './Implementations';
import Widget, { SeriesSelect } from './Widget/Widget';
import AdditionalInfoXDA from './Widget/XDA/AdditionalInfo';
import AdditionalInfoOpenHistorian from './Widget/OpenHistorian/AdditionalInfo';
import AdditionalInfoSapphire from './Widget/Sapphire/AdditionalInfo';

import { Input } from '@gpa-gemstone/react-forms';
import _ from 'lodash';

export default function TableJSX(props: TrenDAP.iTemplatableWidget<TrenDAP.iTemplatableTable>) {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [record, setRecord] = React.useState<Table>(new Table(props));
    const [sortField, setSortField] = React.useState<keyof TrenDAP.iXDATrendDataPoint>('Timestamp');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [data, setData] = React.useState<TrenDAP.iXDATrendDataPoint[]>([]);
    const [info, setInfo] = React.useState<TrenDAP.iDataSetReturnType>({} as TrenDAP.iDataSetReturnType);

    React.useEffect(() => {
        setRecord(new Table(props));
    }, [props.Data, props.Device]);

    React.useEffect(() => {
        const dataSource = record.Data.find(dd => dd.DataSource.ID === record.JSON.Series?.DataSourceID ?? 0)
        const data = dataSource?.Data ?? [];
        let datum;
        if (dataSource?.DataSource.Type === 'OpenHistorian') {
            let s = record.JSON.Series as TrenDAP.iTemplateSeriesOpenHistorian;
            datum = data.find((dd: TrenDAP.iOpenHistorianReturn) => dd[props.By] === props.Device && dd.SignalType === s.Type && dd.Phase === s.Phase);
        }
        else if (dataSource?.DataSource.Type === 'TrenDAPDB') {
            let s = record.JSON.Series as TrenDAP.iTemplateSeriesXDA;
            datum = data.find((dd: TrenDAP.iXDAReturnData) => dd[props.By] === props.Device && dd.Type === s.Type && dd.Phase === s.Phase && dd.Characteristic === s.Characteristic);
        }
        else if (dataSource?.DataSource.Type === 'Sapphire') {
            let s = record.JSON.Series as TrenDAP.iTemplateSeriesSapphire;
            datum = data.find((dd: TrenDAP.iSapphireReturnData) => dd[props.By] === props.Device && dd.Phase === s.Phase && dd.Characteristic === s.Measurement);
        }
        else
            datum = {Data:[]};

        if (datum == undefined) setInfo({} as TrenDAP.iDataSetReturnType );
        else setInfo(datum as TrenDAP.iDataSetReturnType);
    }, [record]);

    React.useEffect(() => {

        const ordered = _.orderBy(info?.Data ?? [], [sortField], [ascending ? 'asc' : 'desc'])
        setData(ordered);
    }, [ascending,sortField,info])


    return (
        <div className="card" style={{ width: props.Width, height: props.Height, maxHeight: props.Height, overflowY: 'auto' }}>
            <div className="card-body" style={{ padding: 0 }}>
                <div className={styles["widgit-label"]}>
                    <span>{props.Label}
                        <button className={"btn " + styles["widgit-controls"]} title='Widget Settings' onClick={() => setToggle(true)}><i className="fa fa-cog"></i></button>
                    </span>
                </div>
                <TableForm<TrenDAP.iXDATrendDataPoint> tableClass='table' cols={[
                    { key: 'Timestamp', field: 'Timestamp', label: 'Timestamp' },
                    { key: 'Minimum', field: 'Minimum', label: 'Min', content: (item,key, style) => item.Minimum.toFixed(record.JSON.Precision)},
                    { key: 'Average', field: 'Average', label: 'Avg', content: (item, key, style) => item.Average.toFixed(record.JSON.Precision)},
                    { key: 'Maximum', field: 'Maximum', label: 'Max', content: (item, key, style) => item.Maximum.toFixed(record.JSON.Precision)},
                ]} data={data} sortKey={sortField} onClick={(data) => { }} ascending={ascending} onSort={(data) => {
                    if (data.colField === sortField)
                        setAscending(!ascending)
                    else {
                        setSortField(data.colField)
                        setAscending(true)
                    }
                }} />
            </div>

            <Widget {...props} Record={record} Toggle={toggle} SetToggle={(bool) => setToggle(bool)}>
                <div className="col">
                    <Input<TrenDAP.iTemplatableWidget<TrenDAP.iTemplatableTable>> Field='Label' Record={record} Type='text' Setter={(r) => setRecord(new Table(r))} Valid={(field) => true} />

                    <label>Width</label>
                    <div className="input-group">
                        <input type="number" className="form-control" value={record?.Width} onChange={(evt) => setRecord(new Table({ ...record, Width: parseInt(evt.target.value) }))} />
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setRecord(new Table({ ...record, Width: window.innerWidth - 200 }))}>Full Width</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <h6>Series</h6>
                    <hr />
                    <div id="accordion" style={{ overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 }}>
                        {record.Data.map((d, i) =>
                            <React.Fragment key={i}>
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href={"#collapse" + i}>{d.DataSource.Name}</a>
                                </div>
                                <div id={"collapse" + i} className="collapse show" data-parent="#accordion">
                                    <div className="card-body">
                                        <SeriesSelect Widget={record} DataSourceID={d.DataSource.ID} Callback={() => setRecord(new Table(record))}   />
                                        <ul className="list-group">
                                            {d.DataSource.Type === 'TrenDAPDB' && record.JSON.Series != undefined ?
                                                <li key={i} className="list-group-item">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <label>{(info as TrenDAP.iXDAReturnData)?.Name ?? ''}</label>
                                                            <AdditionalInfoXDA Index={i} Data={(info as TrenDAP.iXDAReturnData)} />
                                                        </div>
                                                        <div className="col">
                                                            <label className="form-label">Precision</label>
                                                            <input className="form-control" type="number" value={record.JSON.Precision} onChange={(evt) => setRecord(record.SetPrecsision(parseInt(evt.target.value)))} />
                                                        </div>

                                                    </div>
                                                </li>
                                                : null}
                                            {d.DataSource.Type === 'Sapphire' && record.JSON.Series != undefined ?
                                                <li key={i} className="list-group-item">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <label>{(info as TrenDAP.iSapphireReturnData)?.Name ?? ''}</label>
                                                            <AdditionalInfoSapphire Index={i} Data={(info as TrenDAP.iSapphireReturnData)} />
                                                        </div>
                                                        <div className="col">
                                                            <label className="form-label">Precision</label>
                                                            <input className="form-control" type="number" value={record.JSON.Precision} onChange={(evt) => setRecord(record.SetPrecsision(parseInt(evt.target.value)))} />
                                                        </div>

                                                    </div>
                                                </li>
                                                : null}


                                            {d.DataSource.Type === 'OpenHistorian' && record.JSON.Series != undefined ?
                                                <li key={i} className="list-group-item">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <label>{(info as TrenDAP.iOpenHistorianReturn)?.Description ?? ''}</label>
                                                            <AdditionalInfoOpenHistorian Data={(info as TrenDAP.iOpenHistorianReturn)} />
                                                        </div>
                                                        <div className="col">
                                                            <label className="form-label">Precision</label>
                                                            <input className="form-control" type="number" value={record.JSON.Precision} onChange={(evt) => setRecord(record.SetPrecsision(parseInt(evt.target.value)))} />
                                                        </div>

                                                    </div>
                                                </li>
                                                : null}

                                        </ul>

                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </Widget>
        </div>

    );
}