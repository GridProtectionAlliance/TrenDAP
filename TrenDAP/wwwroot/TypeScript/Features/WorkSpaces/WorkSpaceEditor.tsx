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
import { CrossMark, UpArrow, DownArrow } from '@gpa-gemstone/gpa-symbols';

import { useParams, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../Styles/app.scss';
import { SelectWorkSpacesForUser, SelectWorkSpacesAllPublicNotUser, OpenCloseWorkSpace, UpdateWorkSpace, SelectWorkSpacesStatus, FetchWorkSpaces } from './WorkSpacesSlice';
import * as d3 from 'd3';
import Histogram from '../Widgets/Histogram';
import Profile from '../Widgets/Profile';
import Stats from '../Widgets/Stats';
import Table from '../Widgets/Table';
import Text from '../Widgets/Text';
import Trend from '../Widgets/Trend/Trend';
import XvsY from '../Widgets/XvsY';
import { Update, SelectDataSetByID, SelectDataSets, FetchDataSets, SelectDataSetsStatus, SelectDataSetData, GetDataSetDataFromIDB } from '../DataSets/DataSetsSlice';
import DataSetData from '../DataSets/DataSetData';
import { CreateWidget } from '../../Implementations';

const NavMargin = 85;
const NavWidth = 200;

const WorkSpaceEditor: React.FunctionComponent<{}> = (props) => {
    const [data, setData] = React.useState<TrenDAP.iDataSetReturn[]>([]);
    const dispatch = useDispatch();
    const { id } = useParams<{ id }>();
    const history = useHistory();
    const [tab, setTab] = React.useState<number>(id);
    const usersWorkSpaces: TrenDAP.iWorkSpace[] = useSelector((state: Redux.StoreState) => SelectWorkSpacesForUser(state, userName));
    const publicWorkSpaces: TrenDAP.iWorkSpace[] = useSelector((state: Redux.StoreState) => SelectWorkSpacesAllPublicNotUser(state, userName));
    const dataSets = useSelector(SelectDataSets);
    const wsStatus = useSelector(SelectWorkSpacesStatus);
    const dsStatus = useSelector(SelectDataSetsStatus);
    const [workSpaceJSON, setWorkSpaceJSON] = React.useState<TrenDAP.WorkSpaceJSON>({ Rows: [] });
    const [workSpace, setWorkSpace] = React.useState<TrenDAP.iWorkSpace>([...usersWorkSpaces, ...publicWorkSpaces].find(ws => ws.ID == tab));
    const [dataSet, setDataSet] = React.useState<TrenDAP.iDataSet>({} as any);

    React.useEffect(() => {
        if (id != tab) {
            history.push(`/WorkSpaceEditor/${tab}`); 
            const ws = [...usersWorkSpaces, ...publicWorkSpaces].find(ws => ws.ID == tab)
            setWorkSpace(ws);
            const ds = dataSets.find(ds => ds.ID === workSpace.DataSetID);
            if (ds != undefined)
                setDataSet(ds);
        }
    }, [tab]);

    React.useEffect(() => {
        if (workSpace === undefined) return;
        //setDataSet(dataSets.find(ds => ds.ID === workSpace.DataSetID));
        if (!workSpace?.Open)
            dispatch(OpenCloseWorkSpace({ workSpace: workSpace, open: true }));

        let json = JSON.parse(workSpace.JSONString) as TrenDAP.WorkSpaceJSON;
        setWorkSpaceJSON(json);

        GetDataSetDataFromIDB(workSpace.DataSetID).then(d => {
            setData(d);
        });

    }, [workSpace, dataSets]);

    React.useEffect(() => {
        if (wsStatus === 'idle') {
            const ws = [...usersWorkSpaces, ...publicWorkSpaces].find(ws => ws.ID == tab)
            setWorkSpace(ws);
            const ds = dataSets.find(ds => ds.ID === workSpace.DataSetID);
            if (ds != undefined)
                setDataSet(ds);
        }
        else if (wsStatus == 'unitiated' || wsStatus == 'changed')
            dispatch(FetchWorkSpaces());


        return function () {
        }
    }, [dispatch, wsStatus]);

    React.useEffect(() => {
        if (dsStatus === 'idle') {
            if (workSpace != undefined) {
                const ds = dataSets.find(ds => ds.ID === workSpace.DataSetID);
                if (ds != undefined)
                    setDataSet(ds);
                }
        }
        else if (dsStatus == 'unitiated'  || dsStatus === 'changed')
            dispatch(FetchDataSets());

        return function () {
        }
    }, [dispatch, dsStatus]);

    function HandleAddObject(type: TrenDAP.WidgetType | 'Row') {
        if (type === 'Row')
            setWorkSpaceJSON({ ...workSpaceJSON, Rows: [...workSpaceJSON.Rows, { Height: 500, Widgets: [] }] });
        else
            setWorkSpaceJSON({
                ...workSpaceJSON, Rows: [...workSpaceJSON.Rows, {
                    Height: window.innerHeight - NavMargin,
                    Widgets: [CreateWidget(type, window.innerHeight - NavMargin, window.innerWidth - NavWidth)]
                }]
            });


    }
    return (
        <>
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
                <button className="btn" title='Workspace Settings'><i className="fa fa-cog"></i></button>

            </div>
            <ul className="nav nav-tabs">
                {[...usersWorkSpaces, ...publicWorkSpaces].filter(ws => ws.Open).map(ws =>
                    <li key={ws.ID} className={"nav-item " + styles.workspacetab} >
                        <a className={"nav-link" + (tab == ws.ID ? ' active' : '')} href='#' onClick={(evt) => setTab(ws.ID)} >{ws.Name}</a>
                        <span onClick={() => dispatch(OpenCloseWorkSpace({ workSpace: ws, open: false }))}>X</span>
                    </li>)}
            </ul>
            <div className={styles["tab-content"]}>
                {
                    workSpaceJSON.Rows.map((row, index) =>
                        <Row key={index} WorkSpace={workSpace} Data={data} Widgets={row.Widgets} Height={row.Height}
                            Update={(record) => {
                                let json = { ...workSpaceJSON };
                                json.Rows[index].Height = record.Height;
                                json.Rows[index].Widgets = record.Widgets;
                                json.Rows[index].WorkSpace = undefined;
                                json.Rows[index].Data = undefined;
                                dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json) }));
                            }}
                            RemoveRow={() => {
                                let json = { ...workSpaceJSON };
                                json.Rows.splice(index,1);
                                dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json) }));
                            }}
                            MoveUp={() => {
                                if (index <= 0) return;
                                const newIndex = index - 1
                                let json = { ...workSpaceJSON };
                                const a = json.Rows[newIndex];
                                const b = json.Rows[index];
                                json.Rows[newIndex] = b;
                                json.Rows[index] = a;
                                dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json) }));
                            }}
                            MoveDown={() => {
                                let json = { ...workSpaceJSON };
                                if (index >= json.Rows.length) return;
                                const newIndex = index + 1
                                const a = json.Rows[newIndex];
                                const b = json.Rows[index];
                                json.Rows[newIndex] = b;
                                json.Rows[index] = a;
                                dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json) }));

                            }}

                        />   
                    )
                }
            </div>
        </>
    );
}

const Row: React.FunctionComponent<TrenDAP.iRow> = (props) => {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [height, setHeight] = React.useState<number>(props.Height);

    function HandleAddObject(type: TrenDAP.WidgetType) {
        let row = { ...props, Update: undefined, WorkSpace: undefined, RemoveRow: undefined } as TrenDAP.iRow; 
        row.Widgets.push( CreateWidget( type, 100, (window.innerWidth - NavWidth)/2))
        props.Update(row);
    }

    return(   
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
                        <button className="btn" title='Row Settings' onClick={() => setToggle(true) }><i className="fa fa-cog"></i></button>
                    </div>
                </div>
                <div className='grid-container' style={{ display: 'inline-flex' }}>
                {props.Widgets.map((widget, index) => <Widget {...{
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
                <div className="modal-dialog" role="document" style={{maxWidth: 525}}>
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
                                    <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setHeight(window.innerHeight - NavMargin) }>Full Height</button>
                                </div>
                               
                            </div>
                            <label>Widgets (Max Width : {window.innerWidth - 200} px, Width Used: { (props.Widgets.length == 0 ? 0 : props.Widgets.map(w => w.Width).reduce((a,b)=> a+b ))}px)</label>
                            <ul className='list-group'>
                                {props.Widgets.map((widget, i) =>
                                    <li className='list-group-item' key={i}>{widget.Label} - 
                                        <div className='pull-right'>
                                            <label>Width:</label>
                                            <input value={widget.Width} type='number' onChange={(evt) => {
                                                let row = {...props};
                                                row.Widgets[i].Width = parseInt(evt.target.value);
                                                props.Update(row);
                                            } }/>
                                            <button className='btn btn-link' disabled={i <= 0} onClick={() => {
                                                let row = { ...props };
                                                if (i <= 0) return;
                                                const newIndex = i - 1;
                                                const a = row.Widgets[newIndex];
                                                const b = row.Widgets[i];
                                                row.Widgets[newIndex] = b;
                                                row.Widgets[i] = a;
                                                props.Update(row);
                                            } }>{UpArrow}</button>
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
                                props.Update({...props, Height: height});
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

export default WorkSpaceEditor;