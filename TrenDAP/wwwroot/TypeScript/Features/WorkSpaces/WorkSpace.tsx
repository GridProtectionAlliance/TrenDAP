﻿//******************************************************************************************************
//  WorkSpace.tsx - Gbtc
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
//  09/25/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../global';
import { Input, CheckBox } from '@gpa-gemstone/react-forms';


const WorkSpace: React.FunctionComponent<{ Record: TrenDAP.iWorkSpace, SetWorkSpace: (ws: TrenDAP.iWorkSpace) => void }> = (props) => {
    function valid(field: keyof (TrenDAP.iWorkSpace)): boolean {
        if (field == 'Name')
            return props.Record.Name != null && props.Record.Name.length > 0 && props.Record.Name.length <= 200;
        else 
            return true;
    }

    return (
           <form>
                <Input<TrenDAP.iWorkSpace> Record={props.Record} Field="Name" Setter={(record) => props.SetWorkSpace(record)} Valid={valid} />
                <CheckBox<TrenDAP.iWorkSpace> Record={props.Record} Field="Public" Setter={(record) => props.SetWorkSpace(record)}/>
           </form>
    );
}

export default WorkSpace;