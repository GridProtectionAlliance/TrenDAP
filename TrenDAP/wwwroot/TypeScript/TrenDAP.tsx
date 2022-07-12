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
//  07/12/2022 - Gabriel Santos
//       Updated to use GPA-Gemstone version of the code
//
//******************************************************************************************************
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import store from './Store/Store';
import { Application as App, Page } from '@gpa-gemstone/react-interactive';
import { SVGIcons } from '@gpa-gemstone/gpa-symbols';
import DataSets from './Features/DataSets/DataSets';
import DataSources from './Features/DataSources/DataSources';
import WorkSpaces from './Features/WorkSpaces/WorkSpaces';

declare var homePath;

const TrenDAPMainPage = (props: {}) => {
    const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0); // integer state for resize renders

    React.useEffect(() => {
        window.addEventListener('resize', (evt) => forceUpdate());

        return () => {
            window.removeEventListener('resize', (evt) => { });
        }
    }, [])


    return (
        <App
            DefaultPath={'WorkSpaces'}
            HomePath={homePath}
            Logo={homePath + 'Images/TrenDAP.png'}
            AllowCollapsed={true}>
            <Page Name='DataSources' Label='Data Sources' Icon={SVGIcons.DataContainer} > <DataSources /> </Page>
            <Page Name='DataSets' Label='Data Sets' Icon={SVGIcons.Cube} > <DataSets /> </Page>
            <Page Name='Workspaces' Label='Workspaces' Icon={SVGIcons.House} > <WorkSpaces /> </Page>
        </App>
    );
}

ReactDOM.render(<Provider store={store}><TrenDAPMainPage /></Provider>, document.getElementById('window'));
