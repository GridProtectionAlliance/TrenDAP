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

import { TrenDAP } from "../../../../global";
import * as React from 'react';
import _ from "lodash";

export default function AdditionalInfo(props: { Data: TrenDAP.iOpenHistorianReturn }) {
    const id = _.uniqueId('dropdown-');
    return (
        <div className="dropdown">
            <button className="form-control dropdown-toggle" type="button" id={id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
            <div className="dropdown-menu" aria-labelledby={id}>
                <div className="dropdown-item">Device: {props.Data?.Device}</div>
                <div className="dropdown-item">Signal Reference: {props.Data?.SignalReference}</div>
                <div className="dropdown-item">Signal Type: {props.Data?.SignalType}</div>
                <div className="dropdown-item">Engineering Units: {props.Data?.EngineeringUnits}</div>
                <div className="dropdown-item">Phase: {props.Data?.Phase}</div>
                <div className="dropdown-item">Phasor Type: {props.Data?.PhasorType}</div>
                <div className="dropdown-item">Description: {props.Data?.Description}</div>
            </div>
        </div>

    );
}
