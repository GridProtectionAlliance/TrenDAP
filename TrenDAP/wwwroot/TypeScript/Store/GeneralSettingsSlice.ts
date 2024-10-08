//******************************************************************************************************
//  GeneralSettingsSlice.ts - Gbtc
//
//  Copyright © 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  06/07/2024 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrenDAP, Redux } from '../global';

// #region [ Thunks ]
// #endregion

// #region [ Slice ]
export const GeneralSettingsSlice = createSlice({
    name: 'WorkSpaces',
    initialState: {
        EditMode: true,
    } as TrenDAP.GeneralSettings,
    reducers: {
        SetEditMode: (state, action: PayloadAction<boolean>) => {
            state.EditMode = action.payload;
        }
    },
    extraReducers: () => {}
});
// #endregion

// #region [ Selectors ]
export default GeneralSettingsSlice.reducer;
export const { SetEditMode } = GeneralSettingsSlice.actions;
export const SelectEditMode = (state: Redux.StoreState) => state.GeneralSettings.EditMode;
// #endregion
