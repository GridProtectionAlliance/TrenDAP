//******************************************************************************************************
//  Row.tsx - Gbtc
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
//  03/12/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, Redux } from '../../../global';
import styles from '../../../../Styles/app.scss';
import { CrossMark, UpArrow, DownArrow } from '@gpa-gemstone/gpa-symbols';
import Histogram from '../../Widgets/Regular/Histogram';
import Profile from '../../Widgets/Regular/Profile';
import Stats from '../../Widgets/Regular/Stats';
import Table from '../../Widgets/Regular/Table';
import Text from '../../Widgets/Regular/Text';
import Trend from '../../Widgets/Regular/Trend/Trend';
import XvsY from '../../Widgets/Regular/XvsY';
import { CreateWidget } from '../../Widgets/Regular/Implementations';
const NavMargin = 85;
const NavWidth = 200;

export default function Row(props: TrenDAP.iRow) {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [height, setHeight] = React.useState<number>(props.Height);

    function HandleAddObject(type: TrenDAP.WidgetType) {
        let row = { ...props, Update: undefined, WorkSpace: undefined, RemoveRow: undefined } as TrenDAP.iRow;
        row.Widgets.push(CreateWidget(type, 100, (window.innerWidth - NavWidth) / 2))
        props.Update(row);
    }

    return (
        <div className="card" style={{ height: props.Height, display: 'grid' }}>
            <div className="card-body" style={{ padding: 0, zIndex: 0 }}>
                <div className={`${styles.triangle}`}>
                    <div className={`${styles["row-controls"]}`}>
                        <div className="btn-group">
                            <button className="btn" title='Add Object' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i className="fa fa-plus" ></i></button>
                            <div className="dropdown-menu" >
                                <button className="dropdown-item" onClick={() => HandleAddObject('Histogram')}>Histogram</button>
                                {/*<button className="dropdown-item" onClick={() => HandleAddObject('Profile')}>Profile</button>*/}
                                <button className="dropdown-item" onClick={() => HandleAddObject('Stats')}>Stats</button>
                                <button className="dropdown-item" onClick={() => HandleAddObject('Table')}>Table</button>
                                <button className="dropdown-item" onClick={() => HandleAddObject('Text')}>Text</button>
                                <button className="dropdown-item" onClick={() => HandleAddObject('Trend')}>Trend</button>
                                <button className="dropdown-item" onClick={() => HandleAddObject('XvsY')}>X vs Y</button>
                            </div>
                        </div>
                        <button className="btn" title='Remove Row' onClick={() => props.RemoveRow()}><i className="fa fa-minus"></i></button>
                        <button className="btn" title='Row Settings' onClick={() => setToggle(true)}><i className="fa fa-cog"></i></button>
                    </div>
                </div>
                <div className='grid-container' style={{ display: 'inline-flex' }}>
                    {(props.Widgets as any[]).map((widget, index) => <Widget {...{
                        ...widget,
                        Height: props.Height,
                        WorkSpace: props.WorkSpace,
                        Data: props.Data,
                        Update: (newRecord) => {
                            let row = { ...props };
                            let widget = { ...newRecord };
                            widget.WorkSpace = undefined;
                            widget.Data = undefined;
                            row.Widgets[index] = widget;
                            props.Update(row);
                        },
                        Remove: () => {
                            let row = { ...props };
                            row.Widgets.splice(index, 1);
                            props.Update(row);
                        }
                    }} key={index} />)}
                </div>
            </div>
            <div className="modal" role="dialog" style={{ display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <div className="modal-dialog" role="document" style={{ maxWidth: 525 }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Row Settings</h5>
                            <button type="button" className="close" onClick={() => setToggle(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label>Height</label>
                            <div className="input-group">
                                <input type="number" className="form-control" value={height != null ? height : 0} onChange={(evt) => setHeight(parseInt(evt.target.value))} />
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setHeight(window.innerHeight - NavMargin)}>Full Height</button>
                                </div>

                            </div>
                            <label>Widgets (Max Width : {window.innerWidth - 200} px, Width Used: {(props.Widgets.length == 0 ? 0 : (props.Widgets as any[]).map(w => w.Width).reduce((a, b) => a + b))}px)</label>
                            <ul className='list-group'>
                                {(props.Widgets as any[]).map((widget, i) =>
                                    <li className='list-group-item' key={i}>{widget.Label} -
                                        <div className='pull-right'>
                                            <label>Width:</label>
                                            <input value={widget.Width} type='number' onChange={(evt) => {
                                                let row = { ...props };
                                                row.Widgets[i].Width = parseInt(evt.target.value);
                                                props.Update(row);
                                            }} />
                                            <button className='btn btn-link' disabled={i <= 0} onClick={() => {
                                                let row = { ...props };
                                                if (i <= 0) return;
                                                const newIndex = i - 1;
                                                const a = row.Widgets[newIndex];
                                                const b = row.Widgets[i];
                                                row.Widgets[newIndex] = b;
                                                row.Widgets[i] = a;
                                                props.Update(row);
                                            }}>{UpArrow}</button>
                                            <button className='btn btn-link' disabled={i >= props.Widgets.length - 1} onClick={() => {
                                                let row = { ...props };
                                                if (i >= row.Widgets.length - 1) return;
                                                const newIndex = i + 1;
                                                const a = row.Widgets[newIndex];
                                                const b = row.Widgets[i];
                                                row.Widgets[newIndex] = b;
                                                row.Widgets[i] = a;
                                                props.Update(row);
                                            }}>{DownArrow}</button>
                                            <button className='btn btn-link' onClick={() => {
                                                let row = { ...props };
                                                row.Widgets.splice(i, 1);
                                                props.Update(row);
                                            }}>{CrossMark}</button>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                props.MoveUp();
                                setToggle(false);
                            }}>Move Row Up</button><button type="button" className="btn btn-primary" onClick={() => {
                                props.MoveDown();
                                setToggle(false);
                            }}>Move Row Down</button>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                props.Update({ ...props, Height: height });
                                setToggle(false);
                            }}>Save changes</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setToggle(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Widget: React.FunctionComponent<TrenDAP.iWidget> = (props) => {
    if (props.Type == 'Histogram')
        return <Histogram {...props} />;
    else if (props.Type == 'Profile')
        return <Profile {...props} />;
    else if (props.Type == 'Stats')
        return <Stats {...props} />;
    else if (props.Type == 'Table')
        return <Table {...props} />;
    else if (props.Type == 'Text')
        return <Text {...props} />;
    else if (props.Type == 'Trend')
        return <Trend {...props} />;
    else if (props.Type == 'XvsY')
        return <XvsY {...props} />;
    else
        return <span>Not a widget.</span>;
}


