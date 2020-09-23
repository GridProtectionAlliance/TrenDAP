//******************************************************************************************************
//  WorkspaceSlice.ts - Gbtc
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
import { createSlice } from '@reduxjs/toolkit';

export const WorkspacesSlice = createSlice({
    name: 'Workspaces',
    initialState: [],
    reducers: {
        Add: (state, action) => {
            state.push(action.payload);
        },
        AddRange: (state, action) => {
            state = action.payload;
        },
        Remove: state => {

        }
    }

});

export const { Add, Remove } = WorkspacesSlice.actions;
export default WorkspacesSlice.reducer;