//******************************************************************************************************
//  EditDataSource.tsx - Gbtc
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
import { DataSourceTypes } from '../../global';
import { useAppDispatch } from '../../hooks';
import { UpdateDataSource } from './DataSourcesSlice'
import DataSource from './DataSource';
import { Modal } from '@gpa-gemstone/react-interactive';
import { CrossMark, Pencil } from '@gpa-gemstone/gpa-symbols';

const EditDataSource: React.FunctionComponent<{ DataSource: DataSourceTypes.IDataSourceView }> = (props) => {
    const dispatch = useAppDispatch();

    const [dataSource, setDataSource] = React.useState<DataSourceTypes.IDataSourceView>(props.DataSource);
    const [show, setShow] = React.useState<boolean>(false);
    const [errors, setErrors] = React.useState<string[]>([]);

    return (
        <>
            <button className="btn" onClick={() => setShow(true)}>{Pencil}</button>
            <Modal
                ConfirmBtnClass={"btn btn-success mr-auto"}
                DisableConfirm={errors.length > 0}
                Show={show}
                ShowX={true}
                ConfirmText={'Save'}
                ConfirmShowToolTip={errors.length > 0}
                ConfirmToolTipContent={errors.map((e, i) => <p key={2 * i + 1}>{CrossMark} {e} </p>)}
                Title={'Edit Data Source'}
                CallBack={conf => {
                    if (conf)
                        dispatch(UpdateDataSource(dataSource));
                    setShow(false);
                }}
            >
                <DataSource DataSource={dataSource} SetDataSource={setDataSource} SetErrors={setErrors} />
            </Modal>
        </>
    );
}

export default EditDataSource;