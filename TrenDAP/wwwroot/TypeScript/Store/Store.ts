﻿//******************************************************************************************************
//  Store.ts - Gbtc
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
//  09/09/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { configureStore } from '@reduxjs/toolkit';
import DataSourcesReducuer from '../Features/DataSources/DataSourcesSlice';
import EventSourcesReducuer from '../Features/EventSources/Slices/EventSourcesSlice';
import WorkSpaceReducer from '../Features/Workspaces/WorkspacesSlice';
import DataSetReducer from '../Features/DataSets/DataSetsSlice';
import OpenXDAReducer from '../Features/OpenXDA/OpenXDASlice';
import OpenHistorianReducer from '../Features/OpenHistorian/OpenHistorianSlice';
import SapphireReducer from '../Features/Sapphire/SapphireSlice';
import GeneralSettingsReducer from './GeneralSettingsSlice';

//Dispatch and Selector Typed
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
const reducer = {
    DataSets: DataSetReducer,
    WorkSpaces: WorkSpaceReducer,
    DataSources: DataSourcesReducuer,
    OpenXDA: OpenXDAReducer,
    OpenHistorian: OpenHistorianReducer,
    Sapphire: SapphireReducer,
    EventSources: EventSourcesReducuer,
    GeneralSettings: GeneralSettingsReducer
}

const store = configureStore({ reducer });
export default store;
