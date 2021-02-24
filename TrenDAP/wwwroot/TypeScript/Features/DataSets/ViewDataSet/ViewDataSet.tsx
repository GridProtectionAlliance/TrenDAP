//******************************************************************************************************
//  ViewDataSet.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  02/17/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../../global';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateDataSetData, SelectDataSetsStatus, FetchDataSets, SelectRecord, SetRecordByID, GetDataSetDataFromIDB, UpdateDataSetDataFlag } from '../DataSetsSlice'
import {  useParams } from 'react-router-dom';

import PagedTable from './PagedTable';
import Chart from './Chart';
import Histogram from './Histogram';
import { InputNumbers } from '@gpa-gemstone/gpa-symbols';
import { Plus } from '../../../Constants';

export default function ViewDataSet() {
    const dispatch = useDispatch();
    const { id } = useParams<{id}>();
    const dataSet = useSelector(SelectRecord)
    const wsStatus = useSelector(SelectDataSetsStatus);
    const [data, setData] = React.useState<TrenDAP.iDataSetReturn[]>([]);
    const [dataSourceID, setDataSourceID] = React.useState<number>(0);
    const [channelID, setChannelID] = React.useState<number>(0);
    const [selectedData, setSelectedData] = React.useState<TrenDAP.iXDATrendDataPoint[]>([]);
    const [flag, setFlag] = React.useReducer((s,_) => s + 1, 0);
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [criteria, setCriteria] = React.useState<{ Field: any, Condition: any, Value: number, AndOr }[]>([{ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' }]);
    const [showFlagged, setShowFlagged] = React.useState<boolean>(false);
    const [selectedPoint, setSelectedPoint] = React.useState<TrenDAP.iXDATrendDataPoint>(null);
    const [selectedChannels, setSelectedChannels] = React.useState<TrenDAP.iDataSetReturn>({} as TrenDAP.iDataSetReturn );

    React.useEffect(() => {
        setCriteria([{ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' }]);
    }, [toggle]);


    React.useEffect(() => {
        if (wsStatus === 'unitiated' || wsStatus === 'changed') {
            dispatch(FetchDataSets());
        }

        dispatch(SetRecordByID(parseInt(id)));
    }, [dispatch, wsStatus]);

    React.useEffect(() => {
        if(dataSourceID === 0)
            setDataSourceID(data[0]?.DataSource.ID ?? 0);
        if(channelID === 0)
            setChannelID((data[0]?.Data ?? [{ ID: 0 }])[0].ID);

        const d = (data.find(ds => ds.DataSource.ID === dataSourceID)?.Data ?? []).find(dd => dd.ID === channelID)?.Data ?? [];
        setSelectedData(d);
    }, [data]);


    React.useEffect(() => {
        GetDataSetDataFromIDB(id).then(d => {
            setData(d);
        });
    }, [flag]);

    React.useEffect(() => {
        const d = (data.find(ds => ds.DataSource.ID === dataSourceID)?.Data ?? []).find(dd => dd.ID === channelID)?.Data ?? [];
        setSelectedData(d);
        
    }, [channelID]);

    React.useEffect(() => {
        const dataSource = data.find(d => d.DataSource.ID === dataSourceID);
        if (dataSource == undefined) return;
        else if (dataSource.Data == undefined) return;
        if (dataSource.DataSource.Type === 'TrenDAPDB') {
            dataSource.Data.sort((a, b) => {
                if (a.Meter + ' - ' + a.Name > b.Meter + ' - ' + b.Name) return 1;
                else if (a.Meter + ' - ' + a.Name == b.Meter + ' - ' + b.Name) return 0;
                else return -1;
            })
        }
        setChannelID(dataSource.Data[0].ID);
        setSelectedChannels(dataSource);

    }, [dataSourceID]);

    function FlagData(record: TrenDAP.iXDATrendDataPoint | TrenDAP.iXDATrendDataPoint[]) {
        UpdateDataSetData(dataSet, dataSourceID, channelID, record).then(() => setFlag(1));
    }

    return (
        <div style={{padding:10}}>
            <h3>{dataSet.Name}</h3>
            <hr />
            <div className='row'>
                <div className='col'>
                    <label>Data Source</label>
                    <select className='form-control' value={dataSourceID} onChange={(evt) => setDataSourceID(parseInt(evt.target.value)) }>
                        {data.map(d => <option key={d.DataSource.ID} value={d.DataSource.ID}>{d.DataSource.Name}</option>) }
                    </select>
                </div>
                <div className='col'>
                    <label>Channel</label>
                    <select className='form-control' value={channelID} onChange={(evt) => setChannelID(parseInt(evt.target.value))}>
                        {Options(selectedChannels) }
                    </select>

                </div>
                <div className='col-2'>
                    <button className='btn btn-primary' style={{ position: 'relative', top: 30, marginRight: 5 }} onClick={() => { }}>Add Virtual</button>
                    <button className='btn btn-primary' style={{ position: 'relative', top: 30 }} onClick={() => { /*setRecord(item); ;*/ setToggle(true)}}>Flag Data</button>
                </div>

            </div>
            <div className='row'>
                <div className='col'>
                    <div className="form-check" style={{position: 'relative', top: 5, left: 5}}>
                        <input type="checkbox" className="form-check-input" value={showFlagged.toString()} checked={showFlagged} onChange={(evt) => setShowFlagged(evt.target.checked) }/>
                        <label className="form-check-label">Show Flagged</label>
                    </div>
                    <Chart Data={(showFlagged ? selectedData : selectedData.filter(sd => sd.QualityFlags == 0))} SetSelected={setSelectedPoint} />
                    <Histogram Data={(showFlagged ? selectedData : selectedData.filter(sd => sd.QualityFlags == 0))} />

                </div>
                <div className='col'>
                    <PagedTable Data={selectedData} SetFlag={FlagData} Selected={selectedPoint }/>
                </div>

            </div>

            <div className="modal" role="dialog" style={{ display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content mx-auto">
                        <div className="modal-header">
                            <h5 className="modal-title">Mark As Flagged</h5>
                            <button type="button" className={"close"} onClick={() => setToggle(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label>Criteria</label>
                            <ul style={{ listStyle: 'none'}}>
                                {criteria.map((c, Index) => <FlagCriteria key={Index} {...c} Update={(record) => {
                                    let newCrits = [...criteria];
                                    newCrits[Index] = record;
                                    setCriteria(newCrits);
                                }} Add={() => {
                                    let newCrits = [ ...criteria];
                                    newCrits[Index].AndOr = 'And';
                                    newCrits.push({ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' });
                                    setCriteria(newCrits);
                                }} />)
                                }
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary pull-left" onClick={() => {
                                let points = selectedData.filter(f => (f.QualityFlags/Math.pow(2,4) & 1) !== 0);
                                points.forEach(p => p.QualityFlags = p.QualityFlags- Math.pow(2, 4));
                                FlagData(points);
                                setToggle(false);
                            }}>Unflag All</button>

                            <button type="button" className="btn btn-primary" onClick={() => {
                                let points = selectedData.filter(f => {

                                    let pre = criteria.map(c => {
                                        if (c.Condition == '<')
                                            return { Value: f[c.Field] < c.Value, AndOr: c.AndOr };
                                        else if (c.Condition == '<=')
                                            return { Value: f[c.Field] <= c.Value, AndOr: c.AndOr };
                                        else if (c.Condition == '>=')
                                            return { Value: f[c.Field] >= c.Value, AndOr: c.AndOr };
                                        else if (c.Condition == '>')
                                            return { Value: f[c.Field] > c.Value, AndOr: c.AndOr };
                                        else
                                            return { Value: f[c.Field] == c.Value, AndOr: c.AndOr };

                                    });
                                    return pre.reduce((a, b, i, source) => {
                                        if (i == 0) return b.Value;
                                        else if (source[i-1].AndOr == 'Or') return a || b.Value;
                                        else return a && b.Value;
                                    },undefined);
                                });
                                points.forEach(p => p.QualityFlags = p.QualityFlags + Math.pow(2, 4));
                                FlagData(points);
                                setToggle(false);
                            }}>Process</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setToggle(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

const Options = (dataSource: TrenDAP.iDataSetReturn) => {
    if (dataSource == undefined) return null;
    else if (dataSource.Data == undefined) return null;
    if (dataSource.DataSource.Type === 'TrenDAPDB') {
        dataSource.Data.sort((a, b) => {
            if (a.Meter + ' - ' + a.Name > b.Meter + ' - ' + b.Name) return 1;
            else if (a.Meter + ' - ' + a.Name == b.Meter + ' - ' + b.Name) return 0;
            else return -1;
        })
        return dataSource.Data.map(channel => <TrenDAPDBChannel key={channel.ID} channel={channel} />);
    }
    else
        return dataSource.Data.map(channel => <OtherChannel key={channel.ID} channel={channel} />);
}

const TrenDAPDBChannel = (props: { channel: TrenDAP.iXDAReturnData }) => {
    return <option value={props.channel.ID}>{props.channel.Meter + ' - ' + props.channel.Name}</option>
}

const OtherChannel = (props: { channel: TrenDAP.iXDAReturnData }) => {
    return <option value={props.channel.ID}>{props.channel.Name}</option>
}

const FlagCriteria = (props: {Field, Condition, Value, AndOr, Update: (record) => void, Add: () => void}) => {
    const [field, setField] = React.useState<'Maximum' | 'Minimum' | 'Average'>(props.Field);
    const [condition, setCondition] = React.useState<'<' | '<=' | '==' | '>=' | '>'>(props.Condition);
    const [value, setValue] = React.useState<number>(props.Value);
    const [andOr, setAndOr] = React.useState<'And' | 'Or' | 'None'>(props.AndOr);

    React.useEffect(() => {
        props.Update({ Field: field, Condition: condition, Value: value, AndOr: andOr });
    }, [field, condition, value, andOr]);

    React.useEffect(() => {
        setAndOr(props.AndOr);
    }, [props.AndOr]);

    React.useEffect(() => {
        setField(props.Field);
    }, [props.Field]);

    React.useEffect(() => {
        setCondition(props.Condition);
    }, [props.Condition]);

    React.useEffect(() => {
        setValue(props.Value);
    }, [props.Value]);

    return (
        <li>
            <div className='row'>
                <div className='col'>
                    <select className='form-control' value={field} onChange={(evt) => setField(evt.target.value as any)} >
                        <option value='Maximum'>Max</option>
                        <option value='Average'>Avg</option>
                        <option value='Minimum'>Min</option>
                    </select>
                </div>
                <div className='col'>
                    <select className='form-control' value={condition} onChange={(evt) => setCondition(evt.target.value as any)} >
                        <option value={'<'}>{'<'}</option>
                        <option value={'<='}>{'<='}</option>
                        <option value={'=='}>{'=='}</option>
                        <option value={'>='}>{'>='}</option>
                        <option value={'>'}>{'>'}</option>
                    </select>
                </div>
                <div className='col'><input className='form-control' type='number' value={value} onChange={(evt) => setValue(parseFloat(evt.target.value))} /></div>      
                <div className='col'>{
                    props.AndOr == 'None' ?
                        <button className='btn btn-link' onClick={() => props.Add() }>{Plus}</button>:
                        <select className='form-control' value={andOr} onChange={(evt) => setAndOr(evt.target.value as any)} >
                            <option value='And'>And</option>
                            <option value='Or'>Or</option>
                        </select>
                }</div>
            </div>
        </li>
    )
}