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
import { BrowserRouter as Router, Route } from 'react-router-dom';

import queryString from "querystring";
import { createBrowserHistory } from "history"

const TrenDAP: React.FunctionComponent = (props: {}) => {
    return (
        <div style={{ width: window.innerWidth, height: window.innerHeight }}>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3" style={{ height: 75 }}>
                <div className="container-fluid">
                    <a className="col-sm-3 col-md-2 mr-0" style={{ textAlign: 'center' }} href="https://www.gridprotectionalliance.org" target="_blank"><img style={{ width: 190, margin: 0 }} src={`${homePath}Image/trendaplogo.png`} /></a>
                    <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    </div>
                </div>
            </nav>
            <div className="container-fluid" style={{ top: 75, position: 'absolute', width: '100%', height: 'calc(100% - 75px)', overflow: 'hidden' }}>
                <div className="row" style={{ height: '100%' }}>
                    <div className="col" style={{ width: '100%', height: 'inherit', padding: '0 0 0 0', overflow: 'hidden' }}>
                    </div>

                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<TrenDAP />, document.getElementById('window'));
