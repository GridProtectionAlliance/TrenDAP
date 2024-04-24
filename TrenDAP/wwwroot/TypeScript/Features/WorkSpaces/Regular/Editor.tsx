//******************************************************************************************************
//  Editor.tsx - Gbtc
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
//  03/12/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import * as React from 'react';
import { TrenDAP, Redux } from '../../../global';
import styles from '../../../../Styles/app.scss';
import Row from './Row';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { UpdateWorkSpace } from './../WorkSpacesSlice';

export default function Editor(props: { WorkSpace: TrenDAP.iWorkSpace, Data: TrenDAP.iDataSetReturn[] }) {
    const dispatch = useAppDispatch();
    const workSpaceJSON = JSON.parse(props.WorkSpace.JSONString);
    return (
        <div className={styles["tab-content"]}>
            {
                workSpaceJSON.Rows.map((row, index) =>
                    <Row key={index} WorkSpace={props.WorkSpace} Data={props.Data} Widgets={row.Widgets} Height={row.Height}
                        Update={(record) => {
                            let json = { ...workSpaceJSON };
                            json.Rows[index].Height = record.Height;
                            json.Rows[index].Widgets = record.Widgets;
                            json.Rows[index].WorkSpace = undefined;
                            json.Rows[index].Data = undefined;
                            dispatch(UpdateWorkSpace({ ...props.WorkSpace, JSONString: JSON.stringify(json) }));
                        }}
                        RemoveRow={() => {
                            let json = { ...workSpaceJSON };
                            json.Rows.splice(index, 1);
                            dispatch(UpdateWorkSpace({ ...props.WorkSpace, JSONString: JSON.stringify(json) }));
                        }}
                        MoveUp={() => {
                            if (index <= 0) return;
                            const newIndex = index - 1
                            let json = { ...workSpaceJSON };
                            const a = json.Rows[newIndex];
                            const b = json.Rows[index];
                            json.Rows[newIndex] = b;
                            json.Rows[index] = a;
                            dispatch(UpdateWorkSpace({ ...props.WorkSpace, JSONString: JSON.stringify(json) }));
                        }}
                        MoveDown={() => {
                            let json = { ...workSpaceJSON };
                            if (index >= json.Rows.length) return;
                            const newIndex = index + 1
                            const a = json.Rows[newIndex];
                            const b = json.Rows[index];
                            json.Rows[newIndex] = b;
                            json.Rows[index] = a;
                            dispatch(UpdateWorkSpace({ ...props.WorkSpace, JSONString: JSON.stringify(json) }));

                        }}

                    />
                )
            }
        </div>
    )
}
