//******************************************************************************************************
//  SideNavBar.tsx - Gbtc
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
//  09/25/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



import * as React from 'react';
import styles from '../Styles/app.scss';
import { useSelector, useDispatch } from 'react-redux';

import { Link, useLocation, NavLink } from 'react-router-dom';
import AddNewDataSet from './Features/DataSets/AddNewDataSet';
import AddNewDataSource from './Features/DataSources/AddNewDataSource';
import AddNewWorkSpace from './Features/WorkSpaces/AddNewWorkSpace';
import { SelectWorkSpacesForUser, SelectWorkSpacesStatus, FetchWorkSpaces } from './Features/WorkSpaces/WorkSpacesSlice';
import CirclePlusSVG from './CirclePlusSVG';

const SideNavBar: React.FunctionComponent = (props: {}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const workSpaces = useSelector(state => SelectWorkSpacesForUser(state, userName));
    const wsStatus = useSelector(SelectWorkSpacesStatus);

    React.useEffect(() => {
        if (wsStatus != 'unitiated' && wsStatus != 'changed') return;
        let promise = dispatch(FetchWorkSpaces());

        return function () {
            if (wsStatus === 'loading')
                promise.abort();
        }
    }, [dispatch, wsStatus]);


    return (
            <nav className={"bg-light " + styles.sidebar}>
                <div className={styles["sidebar-sticky"]}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                        <Link className="nav-link" to={`${homePath}WorkSpaces`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                Workspaces <span className="sr-only">(current)</span>
                        </Link>
                        {location.pathname === `${homePath}WorkSpaces` ? <AddNewWorkSpace /> : null}

                        </li>
                        <li className="nav-item" style={{position: 'relative'}}>
                            <Link className="nav-link" to={ `${homePath}DataSources`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file">
                                <path d="M 3,4.5 a 9,4.5 0,0,0 18 3 a 9,4.5 0,0,0 -18 0 l 0,11 a 9,4.5 0,0,0 18 0 l 0,-11" />
                            </svg>
                            <span>Data Sources</span>

                            </Link>
                            {location.pathname === `${homePath}DataSources` ? <AddNewDataSource /> : null}
                        </li>
                        <li className="nav-item" style={{ position: 'relative' }}>
                            <Link className="nav-link" to={`${homePath}DataSets`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file">
                                    <rect x="1" y="8" width="15" height="15" />
                                    <rect x="6" y="3" width="15" height="15" />
                                    <line x1="1" x2="6" y1="8" y2="3" />
                                    <line x1="16" x2="21" y1="8" y2="3" />
                                    <line x1="16" x2="21" y1="23" y2="18" />
                                    <line x1="1" x2="6" y1="23" y2="18" />
                                </svg>
                                <span>Data Sets</span>

                            </Link>
                            {location.pathname === `${homePath}DataSets` ? <NavLink style={{position: 'absolute', top: 10, right: 10}}to={`${homePath}AddNewDataSet`}>{CirclePlusSVG() }</NavLink>: null}
                        </li>
                    </ul>
                    <h6 className={styles["sidebar-heading"] + " d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"}>
                        <span>Recent Workspaces</span>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                              Current month
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                              Last quarter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                              Social engagement
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                              Year-end sale
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default SideNavBar;
