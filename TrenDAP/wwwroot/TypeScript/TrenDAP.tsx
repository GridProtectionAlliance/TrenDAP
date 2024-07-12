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

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import { Application, Page, Section } from '@gpa-gemstone/react-interactive';
import { SVGIcons } from '@gpa-gemstone/gpa-symbols';
import { Redux } from './global';
import { useAppSelector } from './hooks';
import { SelectWorkSpacesForUser } from './Features/Workspaces/WorkspacesSlice';

const DataSources = React.lazy(() => import(/* webpackChunkName: "DataSources" */ './Features/DataSources/DataSources'));
const ByEventSources = React.lazy(() => import(/* webpackChunkName: "EventSources" */ './Features/EventSources/ByEventSources'));
const DataSets = React.lazy(() => import(/* webpackChunkName: "DataSets" */ './Features/DataSets/DataSets'));
const Workspaces = React.lazy(() => import(/* webpackChunkName: "WorkSpaces" */ './Features/Workspaces/Workspaces'));
const EditDataSet = React.lazy(() => import(/* webpackChunkName: "EditDataSet" */ './Features/DataSets/EditDataSet'));
const WorkspaceWrapper = React.lazy(() => import(/* webpackChunkName: "Workspace" */ './Features/Workspaces/Workspace'));
const ViewDataSet = React.lazy(() => import(/* webpackChunkName: "ViewDataSet" */ './Features/DataSets/ViewDataSet/ViewDataSet'));

const TrenDAP: React.FunctionComponent = () => {
    const workSpaces = useAppSelector((state: Redux.StoreState) => SelectWorkSpacesForUser(state, userName));

    return (
        <>
            <Application
                HomePath={homePath} DefaultPath={"Workspaces"}
                Logo={homePath + "Images/trendaplogo.png"}
                OnSignOut={() => { window.location.href = `/@GSF/Web/Security/Views/Login.cshtml?logout=yes`; }}> { /*need to make sure this page exists on the backend..*/}
                <Page Name={'DataSources'} Label={'Data Sources'} Icon={SVGIcons.DataContainer}>
                    <DataSources />
                </Page>
                <Page Name={'EventSources'} Label={'Event Sources'} Icon={SVGIcons.Alert}>
                    <ByEventSources />
                </Page>
                <Page Name={'DataSets'} Label={'Data Sets'} Icon={SVGIcons.Cube}>
                    <DataSets />
                </Page>
                <Page Name={'DataSets/EditDataSet/:id'}>
                    <EditDataSet />
                </Page>
                <Page Name={'DataSets/ViewDataSet/:id'}>
                    <ViewDataSet />
                </Page>
                <Page Name={'Workspaces'} Label={'Workspaces'} Icon={SVGIcons.House}>
                    <Workspaces />
                </Page>
                <Page Name={'Workspaces/:workspaceId'} Paths={['/DataSet/:dataSetID', '/DataSet/:dataSetID/Channels/:channels']}>
                    <WorkspaceWrapper />
                </Page>
                <Section Label={"Recent Workspaces"}>
                    {workSpaces.map((item, i) =>
                        <Page key={i} Name={`Workspaces/${item.ID}`} Icon={SVGIcons.Document} Label={item.Name} />
                    )}
                </Section>
            </Application>
        </>
    );
}

ReactDOM.render(<Provider store={store}><TrenDAP/></Provider>, document.getElementById('window'));
