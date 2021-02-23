//******************************************************************************************************
//  Widget.tsx - Gbtc
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
import ReactDOM from 'react-dom';
import { Widget, Histogram, Trend, Stats, Table, XvsY } from '../../Implementations';

interface Props extends TrenDAP.iWidget {
    children: JSX.Element | JSX.Element[],
    Record: TrenDAP.iWidget,
    Toggle: boolean,
    SetToggle: (boolean) => void
}
export default function Widgit(props: Props) {

    return ReactDOM.createPortal(
            <div className="modal" role="dialog" style={{ display: props.Toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <div className="modal-dialog mw-100 w-75" role="document">
                    <div className="modal-content mx-auto">
                        <div className={"modal-header"}>
                            <h5 className="modal-title">{props.Label} Settings</h5>
                            <button type="button" className={"close"} onClick={() => props.SetToggle(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {props.children}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                props.Update(props.Record);
                                props.SetToggle(false);
                            }}>Save changes</button>
                            <button type="button" className="btn btn-danger" onClick={() => {
                                props.Remove();
                                props.SetToggle(false)
                            }}>Delete Widgit</button>
                            <button type="button" className="btn btn-secondary" onClick={() => props.SetToggle(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
    , document.getElementById("window"));
}

export function SeriesSelect(props: { Widget: Widget<TrenDAP.WidgetClass>, DataSourceID: number, Callback: () => void, Axis?: 'x' | 'y' }) {
    const [dataSource, setDataSource] = React.useState<TrenDAP.iDataSetReturn>(undefined)
    const [selected, setSelected] = React.useState<TrenDAP.iDataSetReturnType>({ ID: 0 } as TrenDAP.iDataSetReturnType);
    const [type, setType] = React.useState<'Meter' | 'Asset'>('Meter');
    const [delimeter, setDelimeter] = React.useState<string>('');

    React.useEffect(() => {
        const dataSource = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID);
        if (dataSource != undefined) {
            setDataSource(dataSource);
            //setSelected((dataSource?.Data ?? [undefined])[0]);
        }
    }, [props.Widget.Data]);


    if (dataSource?.DataSource.Type === 'TrenDAPDB')
        return (
            <div className="input-group">
                <select className="form-control" value={type} onChange={(evt) => setType(evt.target.value as any)}>
                    <option value='Meter'>Meter</option>
                    <option value='Asset'>Asset</option>
                </select>
                <select className="form-control" value={delimeter} onChange={(evt) => setDelimeter(evt.target.value)}>
                    <option value=''></option>
                    {(dataSource?.Data ?? []).map(d => d[type]).filter((x, i, a) => a.indexOf(x) === i).map((d, i) => <option key={i} value={d}>{d}</option>)}
                </select>

                <select className="form-control" value={selected?.ID ?? '0'} onChange={(evt) => setSelected(dataSource.Data.find(datum => datum.ID === parseInt(evt.target.value)))}>
                    <option value='0'></option>
                    {(dataSource?.Data ?? []).filter(datum => datum[type].indexOf(delimeter) >= 0).map((datum, index) => <option key={index} value={datum.ID}>{datum.Name}</option>)}
                </select>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" id={"dropdownMenuButton"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby={"dropdownMenuButton"}>
                        <div className="dropdown-item">Meter: {selected?.Meter}</div>
                        <div className="dropdown-item">Asset: {selected?.Asset}</div>
                        <div className="dropdown-item">Characteristic: {selected?.Characteristic}</div>
                        <div className="dropdown-item">Type: {selected?.Type}</div>
                        <div className="dropdown-item">Station: {selected?.Station}</div>
                        <div className="dropdown-item">Phase: {selected?.Phase}</div>
                        <div className="dropdown-item">Harmonic: {selected?.Harmonic}</div>

                    </div>
                    <button className="btn btn-outline-secondary" type="button" onClick={() => {
                        if(props.Widget.Type === 'Histogram')
                            (props.Widget as Histogram).AddSeries(selected.ID, props.DataSourceID, selected.Type + ' ' + selected.Phase)
                        else if (props.Widget.Type === 'Trend') {
                            let label = '';
                            if (selected.Characteristic === 'Frequency')
                                label = 'Freq - ' + selected.Meter;
                            else if (selected.Type === 'Voltage'&& selected.Characteristic === 'RMS')
                                label = `V${selected.Phase} - ${selected.Meter}`;
                            else if (selected.Type === 'Voltage')
                                label = `V${selected.Phase} ${selected.Characteristic} - ${selected.Meter}`;
                            else if (selected.Type === 'Current' && selected.Characteristic === 'RMS')
                                label = `I${selected.Phase} - ${selected.Meter}`;
                            else if (selected.Type === 'Current')
                                label = `I${selected.Phase} ${selected.Characteristic} - ${selected.Meter}`;
                            else label = selected.Name;
                            (props.Widget as Trend).AddSeries(selected.ID, props.DataSourceID, label)
                        }
                        else if (props.Widget.Type === 'Stats')
                            (props.Widget as Stats).SetSeries(selected.ID, props.DataSourceID);
                        else if (props.Widget.Type === 'Table')
                            (props.Widget as Table).SetSeries(selected.ID, props.DataSourceID);
                        else if (props.Widget.Type === 'XvsY')
                            (props.Widget as XvsY).SetSeries(props.Axis, selected.ID, props.DataSourceID)

                        props.Callback();
                    }}>Select</button >
                </div>
            </div>
        );
    else
        return null;
}

export function AdditionalInfo (props: { Index: number, Data: any }){
    return (
        <div className="dropdown">
            <button className="form-control dropdown-toggle" type="button" id={"dropdownMenuButton" + props.Index} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Addition Info
                                                                        </button>
            <div className="dropdown-menu" aria-labelledby={"dropdownMenuButton" + props.Index}>
                <div className="dropdown-item">Meter: {props.Data?.Meter}</div>
                <div className="dropdown-item">Asset: {props.Data?.Asset}</div>
                <div className="dropdown-item">Characteristic: {props.Data?.Characteristic}</div>
                <div className="dropdown-item">Type: {props.Data?.Type}</div>
                <div className="dropdown-item">Station: {props.Data?.Station}</div>
                <div className="dropdown-item">Phase: {props.Data?.Phase}</div>
                <div className="dropdown-item">Harmonic: {props.Data?.Harmonic}</div>

            </div>
        </div>

    );
}
