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

import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../Styles/app.scss';
import { SelectWorkSpaceByID, UpdateWorkSpace, SelectWorkSpacesStatus, FetchWorkSpaces } from './WorkSpacesSlice';
import { SelectDataSets, FetchDataSets, SelectDataSetsStatus, GetDataSetDataFromIDB, SelectDataSetByID } from '../DataSets/DataSetsSlice';
import DataSetData from '../DataSets/DataSetData';

import { CreateWidget as CreateRegularWidget } from './../Widgets/Regular/Implementations';
import { CreateWidget as CreateTemplatableWidget } from './../Widgets/Templatable/Implementations';

import RegularEditor from './Regular/Editor';
import TemplatableEditor from './Templatable/Editor';

const NavMargin = 85;
const NavWidth = 200;

const WorkSpaceEditor: React.FunctionComponent<{}> = (props) => {
    const [data, setData] = React.useState<TrenDAP.iDataSetReturn[]>([]);
    const dispatch = useDispatch();
    const { id } = useParams<{ id }>();
    const workSpace = useSelector((state: Redux.StoreState) => SelectWorkSpaceByID(state, parseInt(id)));
    const dataSet = useSelector((state: Redux.StoreState) => SelectDataSetByID(state, workSpace?.DataSetID ?? 0));
    const wsStatus = useSelector(SelectWorkSpacesStatus);
    const dsStatus = useSelector(SelectDataSetsStatus);
    const [workSpaceJSON, setWorkSpaceJSON] = React.useState<TrenDAP.WorkSpaceJSON>({ Rows: [], By: 'Meter' });
    const [toggle, setToggle] = React.useState<boolean>(false);


    React.useEffect(() => {
        if (workSpace === undefined) return;

        let json = JSON.parse(workSpace.JSONString) as TrenDAP.WorkSpaceJSON;
        setWorkSpaceJSON(json);

        GetDataSetDataFromIDB(workSpace.DataSetID).then(d => {
            setData(d);
        });

    }, [workSpace]);

    React.useEffect(() => {
        if (wsStatus == 'unitiated' || wsStatus == 'changed')
            dispatch(FetchWorkSpaces());

        return function () {
        }
    }, [dispatch, wsStatus]);

    React.useEffect(() => {
        if (dsStatus == 'unitiated'  || dsStatus === 'changed')
            dispatch(FetchDataSets());

        return function () {
        }
    }, [dispatch, dsStatus]);

    function HandleAddObject(type: TrenDAP.WidgetType | 'Row') {
        if (type === 'Row') {
            dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify({ ...workSpaceJSON, Rows: [...workSpaceJSON.Rows, { Height: 500, Widgets: [] }] }) }))
        }
        else {

            dispatch(UpdateWorkSpace({
                ...workSpace, JSONString: JSON.stringify({
                    ...workSpaceJSON, Rows: [...workSpaceJSON.Rows, {
                        Height: window.innerHeight - NavMargin,
                        Widgets: [workSpace.Type === 'Regular' ? CreateRegularWidget(type, window.innerHeight - NavMargin, window.innerWidth - NavWidth) : CreateTemplatableWidget(type, workSpaceJSON.By, workSpaceJSON.Type, window.innerHeight - NavMargin, window.innerWidth - NavWidth)]
                    }]
                }) }))
        }

    }
    if (workSpace == undefined) return null;
    return (
        <>
            <div style={{ height: 42 }}>

                <div className={styles.navbarbuttons}>

                    <span style={{ padding: '6px 12px', position: 'relative' }}>Data Set: <Link to={`${homePath}EditDataSet/${dataSet?.ID}`}>{dataSet?.Name}</Link><DataSetData {...dataSet} /></span>
                    <div className="btn-group">
                        <button className="btn" title='Add Object' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i className="fa fa-plus" ></i></button>
                        <div className="dropdown-menu" >
                            <button className="dropdown-item" onClick={(e) => HandleAddObject('Row')}>Row</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" onClick={() => HandleAddObject('Histogram')}>Histogram</button>
                            {/*<button className="dropdown-item" onClick={() => HandleAddObject('Profile')}>Profile</button>*/}
                            <button className="dropdown-item" onClick={() => HandleAddObject('Stats')}>Stats</button>
                            <button className="dropdown-item" onClick={() => HandleAddObject('Table')}>Table</button>
                            <button className="dropdown-item" onClick={() => HandleAddObject('Text')}>Text</button>
                            <button className="dropdown-item" onClick={() => HandleAddObject('Trend')}>Trend</button>
                            <button className="dropdown-item" onClick={() => HandleAddObject('XvsY')}>X vs Y</button>
                        </div>
                    </div>

                    <div className="btn-group">
                        <button className="btn" title='Export Current Data Set' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i className="fa fa-download" ></i></button>
                        <div className="dropdown-menu" >
                            <a className="dropdown-item" href="#">PDF</a>
                            <a className="dropdown-item" href="#">CSV</a>
                        </div>
                    </div>
                    <button className="btn" title='Save current workspace...' onClick={(e) => {
                        e.preventDefault();
                        dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(workSpaceJSON) }));
                    }}><i className="fa fa-save"></i></button>
                    <button className="btn" title='Workspace Settings' onClick={() => setToggle(true) }><i className="fa fa-cog"></i></button>

                </div>
                <div style={{padding: '6px 12px'}}>Workspace: {workSpace?.Name ?? ''}</div>
            </div>
            { workSpace.Type === 'Regular' ?
                <RegularEditor WorkSpace={workSpace} Data={data} /> : 
                <TemplatableEditor WorkSpace={workSpace} Data={data} />
            }

            <div className="modal" role="dialog" style={{ display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <div className="modal-dialog" role="document" style={{ maxWidth: 525 }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Workspace Settings</h5>
                            <button type="button" className="close" onClick={() => setToggle(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {workSpace.Type === 'Templatable' ? 
                                <>

                                    <label>Template Type</label>
                                    <select className='form-control' value={workSpaceJSON.Type} onChange={(evt) => setWorkSpaceJSON({ ...workSpaceJSON, Type: evt.target.value as TrenDAP.DataSourceType })}>
                                        <option value=''> </option>
                                        <option value='TrenDAPDB'>TrenDAPDB</option>
                                        <option value='OpenHistorian'>OpenHistorian</option>
                                    </select>


                                    <label>Template By</label>
                                    <select className='form-control' value={workSpaceJSON.By} onChange={(evt) => setWorkSpaceJSON({ ...workSpaceJSON, By: evt.target.value as TrenDAP.TemplateBy })}>
                                        <option value=''> </option>
                                        <option value='Meter' hidden={workSpaceJSON.Type !== 'TrenDAPDB' }>Meter</option>
                                        <option value='Asset' hidden={workSpaceJSON.Type !== 'TrenDAPDB'}>Asset</option>
                                        <option value='Device' hidden={workSpaceJSON.Type !== 'OpenHistorian'}>Device</option>
                                    </select>
                            </>: null
                        }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(workSpaceJSON) }));
                                setToggle(false);
                            }}>Save changes</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setToggle(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default WorkSpaceEditor;