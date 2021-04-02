//******************************************************************************************************
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
import { TrenDAP, Redux } from '../../global';
import { Input, CheckBox, Select } from '@gpa-gemstone/react-forms';
import { useDispatch, useSelector } from 'react-redux';
import { SelectDataSetsForUser, SelectDataSetsAllPublicNotUser, SelectDataSetsStatus, FetchDataSets } from '../DataSets/DataSetsSlice';


const WorkSpace: React.FunctionComponent<{ Record: TrenDAP.iWorkSpace, SetWorkSpace: (ws: TrenDAP.iWorkSpace) => void }> = (props) => {
    const dispatch = useDispatch();
    const usersDataSets = useSelector((state: Redux.StoreState) => SelectDataSetsForUser(state, userName));
    const publicDataSets = useSelector((state: Redux.StoreState) => SelectDataSetsAllPublicNotUser(state, userName));
    const dsStatus = useSelector(SelectDataSetsStatus);

    React.useEffect(() => {
        if (dsStatus != 'unitiated' && dsStatus != 'changed') return;
        dispatch(FetchDataSets());

        return function () {
        }
    }, [dispatch, dsStatus]);


    function valid(field: keyof (TrenDAP.iWorkSpace)): boolean {
        if (field == 'Name')
            return props.Record.Name != null && props.Record.Name.length > 0 && props.Record.Name.length <= 200;
        else 
            return true;
    }

    return (
           <form>
                <Input<TrenDAP.iWorkSpace> Record={props.Record} Field="Name" Setter={(record) => props.SetWorkSpace(record)} Valid={valid} />
                <Select<TrenDAP.iWorkSpace> Record={props.Record} Field="DataSetID" Label="Data Set" Options={[...usersDataSets, ...publicDataSets].map(ds => ({ Label: ds.Name, Value: ds.ID.toString() }))} EmptyOption={true} Setter={(record) => props.SetWorkSpace(record)} />
                <Select<TrenDAP.iWorkSpace> Record={props.Record} Field="Type" Options={[{ Label: 'Regular' as TrenDAP.WorkSpaceType, Value: 'Regular' }, { Label: 'Templatable ' as TrenDAP.WorkSpaceType, Value: 'Templatable' }] } EmptyOption={true} Setter={(record) => props.SetWorkSpace(record)} />

                <CheckBox<TrenDAP.iWorkSpace> Record={props.Record} Field="Public" Label='Global' Setter={(record) => props.SetWorkSpace(record)}/>
           </form>
    );
}

export default WorkSpace;