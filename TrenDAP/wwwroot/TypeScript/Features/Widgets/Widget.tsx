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
import { Widget } from '../../Implementations';

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

export function SeriesSelect(props: { Data: TrenDAP.iXDAReturnWithDataSource[], AddSeries: (id: number, dataSourceID: number) => void }) {
    const [selected, setSelected] = React.useState<TrenDAP.iXDAReturnWithDataSource>({ ID: 0 } as TrenDAP.iXDAReturnWithDataSource);
    React.useEffect(() => {
        setSelected(props.Data[0]);
    }, [props.Data]);

    return (
        <div className="input-group">
            <select className="form-control" value={selected?.ID ?? ''} onChange={(evt) => setSelected(props.Data.find(datum => datum.ID === parseInt(evt.target.value)))}>
                {props.Data.map((datum, index) => <option key={index} value={datum.ID}>{datum.Name}</option>)}
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id={"dropdownMenuButton"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Additional Info</button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby={"dropdownMenuButton"}>
                    <div className="dropdown-item">Meter: {selected?.Meter}</div>
                    <div className="dropdown-item">Asset: {selected?.Asset}</div>
                    <div className="dropdown-item">Characteristic: {selected?.Characteristic}</div>
                    <div className="dropdown-item">Type: {selected?.Type}</div>
                    <div className="dropdown-item">Station: {selected?.Station}</div>
                    <div className="dropdown-item">Phase: {selected?.Phase}</div>
                    <div className="dropdown-item">Harmonic: {selected?.Harmonic}</div>

                </div>
                <button className="btn btn-outline-secondary" type="button" onClick={() => props.AddSeries(selected.ID,selected.DataSourceID)}>Select</button>
            </div>
        </div>
    );
}

export function AdditionalInfo (props: { Index: number, Data: any }){
    return (
        <div className="dropdown">
            <button className="form-control dropdown-toggle" type="button" id={"dropdownMenuButton" + props.Index} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Addition Info
                                                                        </button>
            <div className="dropdown-menu" aria-labelledby={"dropdownMenuButton" + props.Index}>
                <div className="dropdown-item">Meter: {props.Data.Meter}</div>
                <div className="dropdown-item">Asset: {props.Data.Asset}</div>
                <div className="dropdown-item">Characteristic: {props.Data.Characteristic}</div>
                <div className="dropdown-item">Type: {props.Data.Type}</div>
                <div className="dropdown-item">Station: {props.Data.Station}</div>
                <div className="dropdown-item">Phase: {props.Data.Phase}</div>
                <div className="dropdown-item">Harmonic: {props.Data.Harmonic}</div>

            </div>
        </div>

    );
}
