﻿//******************************************************************************************************
//  TrenDAP.tsx - Gbtc
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
//  09/08/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import styles from '../Styles/app.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import { Navigate, Routes } from 'react-router';

const TrenDAP: React.FunctionComponent = (props: {}) => {

    const DataSources = React.lazy(() => import(/* webpackChunkName: "DataSources" */ './Features/DataSources/DataSources'));
    const DataSets = React.lazy(() => import(/* webpackChunkName: "DataSets" */ './Features/DataSets/DataSets'));
    const WorkSpaces = React.lazy(() => import(/* webpackChunkName: "WorkSpaces" */ './Features/WorkSpaces/WorkSpaces'));
    const EditDataSet = React.lazy(() => import(/* webpackChunkName: "EditDataSet" */ './Features/DataSets/EditDataSet'));
    const AddNewDataSet = React.lazy(() => import(/* webpackChunkName: "AddNewDataSet" */ './Features/DataSets/AddNewDataSet'));
    const WorkSpaceEditor = React.lazy(() => import(/* webpackChunkName: "WorkSpaceEditor" */ './Features/WorkSpaces/WorkSpaceEditor'));
    const ViewDataSet = React.lazy(() => import(/* webpackChunkName: "ViewDataSet" */ './Features/DataSets/ViewDataSet/ViewDataSet'));
    const QuickViewOpenXDA = React.lazy(() => import(/* webpackChunkName: "QuickViewXDA" */ './Features/OpenXDA/QuickViewOpenXDA'));


    const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0); // integer state for resize renders

    React.useEffect(() => {
        window.addEventListener('resize', (evt) => forceUpdate());

        return () => {
            window.removeEventListener('resize', (evt) => { });
        }
    }, [])

    return (
        <Router>

        <div style={{ width: window.innerWidth, height: window.innerHeight, position: "absolute" }}>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href={homePath}>TrenDAP</a>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                        </li>
                    </ul>
            </nav>
            <SideNavBar />
            <div className={styles['main-window']}>
                <React.Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path={`${homePath}`} >
                                <Route index element={<Navigate to={`${homePath}WorkSpaces`} />} />
                                <Route path={`${homePath}WorkSpaces`} element={<WorkSpaces />} />
                                <Route path={`${homePath}DataSources`} element={<DataSources />} />
                                <Route path={`${homePath}DataSets`} element={<DataSets />} />
                                <Route path={`${homePath}AddNewDataSet`} element={<AddNewDataSet />} />
                                <Route path={`${homePath}EditDataSet/:id`} element={<EditDataSet />} />
                                <Route path={`${homePath}WorkSpaceEditor/:id`} element={<WorkSpaceEditor />} />
                                <Route path={`${homePath}ViewDataSet/:id`} element={<ViewDataSet />} />
                                <Route path={`${homePath}QuickViewOpenXDA`} element={<QuickViewOpenXDA />} />
                            </Route>
                    </Routes >
                </React.Suspense>
            </div>
            </div>
        </Router>
    );
}

ReactDOM.render(<Provider store={store}><TrenDAP/></Provider>, document.getElementById('window'));
