//******************************************************************************************************
//  WorkSpaceSettings.tsx - Gbtc
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
import { useAppDispatch } from '../../hooks';
import { AddWorkSpace, UpdateWorkSpace } from './WorkspacesSlice'
import { Modal } from '@gpa-gemstone/react-interactive';
import { Input, CheckBox } from '@gpa-gemstone/react-forms';

interface IProps {
    New: boolean,
    Workspace: TrenDAP.iWorkSpace,
    Show: boolean,
    SetShow: (show: boolean) => void
}

const WorkspaceSettings: React.FunctionComponent<IProps> = (props) => {
    const dispatch = useAppDispatch();
    const [workspace, setWorkspace] = React.useState<TrenDAP.iWorkSpace>(props.Workspace);

    function isNameValid(field: keyof (TrenDAP.iWorkSpace)): boolean {
        if (field == 'Name')
            return workspace != null && workspace?.Name?.length > 0 && workspace?.Name?.length <= 200;
        else
            return true;
    }

    return (
        <>
            <Modal
                ConfirmBtnClass={"btn btn-success mr-auto"}
                Show={props.Show}
                ShowX={true}
                ConfirmText={'Save'}
                Title={props.New ? 'Add Workspace' : 'Edit Workspace'}
                CallBack={conf => {
                    if (conf && props.New)
                        dispatch(AddWorkSpace({ ...workspace, JSONString: props.Workspace.JSONString }));
                    else if (conf && !props.New)
                        dispatch(UpdateWorkSpace({ ...workspace, JSONString: props.Workspace.JSONString }));
                    props.SetShow(false);
                }}
            >
                <Input<TrenDAP.iWorkSpace> Record={workspace} Field="Name" Setter={record => setWorkspace(record)} Valid={isNameValid} />
                <CheckBox<TrenDAP.iWorkSpace> Record={workspace} Field="Public" Label='Shared' Setter={record => setWorkspace(record)} />
            </Modal>
        </>
    );
}

export default WorkspaceSettings;