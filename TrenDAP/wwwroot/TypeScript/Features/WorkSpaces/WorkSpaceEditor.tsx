//******************************************************************************************************
//  WorkSpaceEditor.tsx - Gbtc
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
//  11/10/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



import * as React from 'react';
import { TrenDAP, Redux } from '../../global';
import { Input, CheckBox } from '@gpa-gemstone/react-forms';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../Styles/app.scss';
import { SelectWorkSpacesForUser, SelectWorkSpacesAllPublicNotUser, OpenWorkSpace, CloseWorkSpace } from './WorkSpacesSlice';
import { style } from 'd3';

interface Widget { Width: number, Type: any, JSON: any }
interface Row { Height: number, Wigets: Widget[] }
interface WorkSpaceJSON { Rows: Row[]}
const WorkSpaceEditor: React.FunctionComponent<{}> = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [tab, setTab] = React.useState<number>(id);
    const usersWorkSpaces: TrenDAP.iWorkSpace[] = useSelector((state: Redux.StoreState) => SelectWorkSpacesForUser(state, userName));
    const publicWorkSpaces: TrenDAP.iWorkSpace[] = useSelector((state: Redux.StoreState) => SelectWorkSpacesAllPublicNotUser(state, userName));
    const [workSpaceJSON, setWorkSpaceJSON] = React.useState<WorkSpaceJSON>({ Rows: [] });
    const [toggle, setToggle] = React.useState<boolean>(false);
    React.useEffect(() => {
        const ws = [...usersWorkSpaces, ...publicWorkSpaces].find(ws => ws.ID == tab);
        if (!ws.Open)
            dispatch(OpenWorkSpace(tab));
        setWorkSpaceJSON(JSON.parse(ws.JSONString) as WorkSpaceJSON);
    }, [tab]);

    return (
        <>
            <div className={styles.navbarbuttons}>
                <div className="btn-group">
                    <button className="btn" title='Export current data...' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i className="fa fa-plus" ></i></button>
                    <div className="dropdown-menu" >
                        <a className="dropdown-item" href="#">Row</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Histogram</a>
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Stats</a>
                        <a className="dropdown-item" href="#">Table</a>
                        <a className="dropdown-item" href="#">Text</a>
                        <a className="dropdown-item" href="#">Trend</a>
                        <a className="dropdown-item" href="#">X vs Y</a>
                    </div>
                </div>

                <div className="btn-group">
                    <button className="btn" title='Export current data...' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i className="fa fa-download" ></i></button>
                    <div className="dropdown-menu" >
                        <a className="dropdown-item" href="#">PDF</a>
                        <a className="dropdown-item" href="#">CSV</a>
                    </div>
                </div>
                <button className="btn" title='Save current workspace...'><i className="fa fa-save"></i></button>
                <button className="btn" title='Settings'><i className="fa fa-cog"></i></button>

            </div>
            <ul className="nav nav-tabs">
                {[...usersWorkSpaces, ...publicWorkSpaces].filter(ws => ws.Open).map(ws =>
                    <li key={ws.ID} className={"nav-item " + styles.workspacetab} >
                        <a className={"nav-link" + (tab == ws.ID ? ' active' : '')} href='#' onClick={(evt) => setTab(ws.ID)} >{ws.Name}</a>
                        <span  onClick={() => dispatch(CloseWorkSpace(ws.ID))}>X</span>
                    </li>)}
            </ul>
            <div className="tab-content" style={{ position: 'relative', width: '100%', height: 'calc(100% - 50px)' }}>
                {
                    workSpaceJSON.Rows.map((row, index) =>
                        <div className="card" key={index} style={{ height: row.Height }}>
                            <div className="card-body"></div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default WorkSpaceEditor;