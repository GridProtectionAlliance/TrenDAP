//******************************************************************************************************
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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import styles from '../Styles/app.scss';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import SideNavBar from './SideNavBar';

const TrenDAP: React.FunctionComponent = (props: {}) => {
    const DataSources = React.lazy(() => import(/* webpackChunkName: "DataSources" */ './Features/DataSources/DataSources'));
    const WorkSpaces = React.lazy(() => import(/* webpackChunkName: "WorkSpaces" */ './Features/WorkSpaces/WorkSpaces'));

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
            <div className={"container-fluid " + styles['main-window']}>
                <div className="row" style={{ height: '100%' }}>
                    <div className="col" style={{ width: '100%', height: 'inherit', padding: '0 0 0 0', overflow: 'hidden' }}>
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    <Route exact path={`${homePath}`}><WorkSpaces /></Route>
                                    <Route path={`${homePath}DataSources`}><DataSources /></Route>
                                    <Redirect to={homePath} />
                                </Switch>
                            </React.Suspense>
                    </div>

                </div>
            </div>
            </div>
        </Router>
    );
}

ReactDOM.render(<Provider store={store}><TrenDAP/></Provider>, document.getElementById('window'));
