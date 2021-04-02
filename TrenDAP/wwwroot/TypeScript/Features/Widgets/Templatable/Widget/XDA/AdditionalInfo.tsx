//******************************************************************************************************
//  AdditionalInfo.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  03/10/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { TrenDAP } from "../../../../../global";
import * as React from 'react';

export default function AdditionalInfo(props: { Index: number, Data: TrenDAP.iXDAReturnData }) {
    return (
        <div className="dropdown">
            <button className="form-control dropdown-toggle" type="button" id={"dropdownMenuButton" + props.Index} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Addition Info
                                                                        </button>
            <div className="dropdown-menu" aria-labelledby={"dropdownMenuButton" + props.Index}>
                <div className="dropdown-item">Meter: {props.Data?.Meter}</div>
                <div className="dropdown-item">Asset: {props.Data?.Asset}</div>
                <div className="dropdown-item">Characteristic: {props.Data?.Characteristic}</div>
                <div className="dropdown-item">Type: {props.Data?.Type}</div>
                <div className="dropdown-item">Station: {props.Data?.Station}</div>
                <div className="dropdown-item">Phase: {props.Data?.Phase}</div>
                <div className="dropdown-item">Harmonic: {props.Data?.Harmonic}</div>

            </div>
        </div>

    );
}
