//******************************************************************************************************
//  Text.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../../global';
import styles from '../../../../Styles/app.scss';
import { Text } from './Implementations';
import Widget from './Widget/Widget';
import { Input, TextArea } from '@gpa-gemstone/react-forms';

export default function TextJSX(props: TrenDAP.iWidget<TrenDAP.iText>) {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [record, setRecord] = React.useState<Text>(new Text(props));

    return (
        <div className="card" style={{ width: props.Width, height: props.Height }}>
            <div className="card-body" style={{ padding: 0 }}>
                <div className={styles["widgit-label"]}>
                    <span>{props.Label}
                        <button className={"btn " + styles["widgit-controls"]} title='Widget Settings' onClick={() => setToggle(true)}><i className="fa fa-cog"></i></button>
                    </span>
                </div>
                <p style={{position: 'relative', top: 30}}>{props.JSON.Text }</p>
            </div>

            <Widget {...props} Record={record} Toggle={toggle} SetToggle={(bool) => setToggle(bool)}>
                <div className="col">
                    <Input<TrenDAP.iWidget<TrenDAP.iText>> Field='Label' Record={record} Type='text' Setter={(r) => setRecord(new Text(r))} Valid={(field) => true} />

                    <label>Width</label>
                    <div className="input-group">
                        <input type="number" className="form-control" value={record?.Width} onChange={(evt) => setRecord(new Text({ ...record, Width: parseInt(evt.target.value) }))} />
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={(evt) => setRecord(new Text({ ...record, Width: window.innerWidth - 200 }))}>Full Width</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <TextArea<TrenDAP.iText> Record={record.JSON} Field="Text" Rows={10} Setter={(r) => setRecord(new Text({ ...record, JSON: { ...r } }))} Valid={(field) => true} />
                </div>
            </Widget>
        </div>

    );
}