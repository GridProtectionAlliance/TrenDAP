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
import { TrenDAP } from '../../../../global';
import ReactDOM from 'react-dom';
import { Widget } from '../Implementations';
import SeriesSelectXDA from './XDA/SeriesSelect';
import SeriesSelectOpenHistorian from './OpenHistorian/SeriesSelect';


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

    React.useEffect(() => {
        const dataSource = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID);
        if (dataSource != undefined) {
            setDataSource(dataSource);
            //setSelected((dataSource?.Data ?? [undefined])[0]);
        }
    }, [props.Widget.Data]);


    if (dataSource?.DataSource.Type === 'TrenDAPDB')
        return <SeriesSelectXDA {...props} />;

    else if (dataSource?.DataSource.Type === 'OpenHistorian')
        return <SeriesSelectOpenHistorian {...props} />;
    else
        return null;
}

