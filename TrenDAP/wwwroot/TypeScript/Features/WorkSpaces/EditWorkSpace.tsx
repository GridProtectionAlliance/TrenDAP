﻿//******************************************************************************************************
//  EditWorkSpace.tsx - Gbtc
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
import { useDispatch } from 'react-redux';
import { UpdateWorkSpace } from './WorkSpacesSlice'
import WorkSpace from './WorkSpace';
import { Pencil } from './../../Constants'
const EditWorkSpace: React.FunctionComponent<{ WorkSpace: TrenDAP.iWorkSpace}> = (props) => {
    const dispatch = useDispatch();
    const [ws, setWorkSpace] = React.useState<TrenDAP.iWorkSpace>({ ...props.WorkSpace });
    const [show, setShow] = React.useState<boolean>(false);

    function Cancel() {
        setWorkSpace(props.WorkSpace);
        setShow(false);
    }
    return (
        <>
            <button className="btn" onClick={(evt) => {
                evt.preventDefault();
                setShow(true)
            }}>{Pencil}</button>
            <div className="modal" style={{display: show ? 'block' : null, backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                            <h4 className="modal-title">Workspace</h4>
                            <button type="button" className="close" onClick={Cancel}>&times;</button>
                        </div>

                      <div className="modal-body">
                            <WorkSpace Record={ws} SetWorkSpace={setWorkSpace} Edit={true } />
                      </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                    dispatch(UpdateWorkSpace(ws));
                                setShow(false);
                            }}>Save</button>

                            <button type="button" className="btn btn-danger" onClick={Cancel}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditWorkSpace;