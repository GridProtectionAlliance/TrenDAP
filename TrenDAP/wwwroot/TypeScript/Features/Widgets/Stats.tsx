//******************************************************************************************************
//  Stats.tsx - Gbtc
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
import { TrenDAP } from '../../global';
import styles from '../../../Styles/app.scss';
import { Stats } from '../../Implementations';
import Widget, { SeriesSelect, AdditionalInfo } from './Widget';
import { Input } from '@gpa-gemstone/react-forms';

export default function StatsJSX(props: TrenDAP.iWidget<TrenDAP.iStats>) {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [record, setRecord] = React.useState<Stats>(new Stats(props));

    React.useEffect(() => {
        setRecord(new Stats({ ...record, Data: props.Data }));
    }, [props.Data]);


    const stats = record.Stats();
    const dataSource = record.Data.find(dd => dd.DataSource.ID === record.JSON.Series?.DataSourceID ?? 0)?.Data ?? [];
    const datum = dataSource.find(dd => dd.ID === record.JSON.Series?.ID ?? 0);
    return (
        <div className="card" style={{ width: props.Width, height: props.Height, maxHeight: props.Height, overflowY: 'auto' }}>
            <div className="card-body" style={{ padding: 0 }}>
                <div className={styles["widgit-label"]}>
                    <span>{props.Label}
                        <button className={"btn " + styles["widgit-controls"]} title='Widget Settings' onClick={() => setToggle(true)}><i className="fa fa-cog"></i></button>
                    </span>
                </div>
                <table className='table'>
                    <thead>
                        <tr><th>Category</th><th>Statistic</th></tr>
                    </thead>
                    <tbody>
                        {Object.keys(stats).map((key) => {
                            if (key !== 'Percentile')
                                return <tr key={key}><td>{key}</td><td>{stats[key]}</td></tr>
                            else
                                return Object.keys(stats.Percentile).map(pkey => {
                                    return <tr key={key+pkey}><td>{pkey}th Percentile</td><td>{stats.Percentile[pkey]}</td></tr>
                                });
                        })}
                    </tbody>
                </table>
            </div>

            <Widget {...props} Record={record} Toggle={toggle} SetToggle={(bool) => setToggle(bool)}>
                <div className="col">
                    <Input<TrenDAP.iWidget<TrenDAP.iStats>> Field='Label' Record={record} Type='text' Setter={(r) => setRecord(new Stats(r))} Valid={(field) => true} />

                    <label>Width</label>
                    <div className="input-group">
                        <input type="number" className="form-control" value={record?.Width} onChange={(evt) => setRecord(new Stats({ ...record, Width: parseInt(evt.target.value) }))} />
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setRecord(new Stats({ ...record, Width: window.innerWidth - 200 }))}>Full Width</button>
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
                                        <SeriesSelect Widget={record} DataSourceID={d.DataSource.ID} Callback={() => setRecord(new Stats(record))} />
                                        <ul className="list-group">
                                            {d.DataSource.Type === 'TrenDAPDB' && record.JSON.Series != undefined ? 
                                                    <li key={record.JSON.Series.ID} className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <label>{datum?.Name}</label>
                                                                <AdditionalInfo Index={i} Data={datum} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-label">Field</label>
                                                                <select className="form-control" value={record.JSON.Series.Field} onChange={(evt) => setRecord(record.SetSeriesField(evt.target.value as TrenDAP.iXDATrendDataPointField))}>
                                                                    <option value="Average">Avg</option>
                                                                    <option value="Minimum">Min</option>
                                                                    <option value="Maximum">Max</option>
                                                                </select>
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