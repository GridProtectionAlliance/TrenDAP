//******************************************************************************************************
//  AddNewDataSource.tsx - Gbtc
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
import { DataSourceTypes, Redux } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AddDataSource } from './DataSourcesSlice'
import DataSource from './DataSource';
import { Modal } from '@gpa-gemstone/react-interactive';
import { CrossMark } from '@gpa-gemstone/gpa-symbols';
import { SelectDataSourcesStatus, SelectDataSourcesAllPublicNotUser, SelectDataSourcesForUser, FetchDataSources } from './DataSourcesSlice';

const AddNewDataSource: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const dataSources = useAppSelector((state: Redux.StoreState) => SelectDataSourcesForUser(state, userName)) as DataSourceTypes.IDataSourceView[];
    const publicDataSources = useAppSelector((state: Redux.StoreState) => SelectDataSourcesAllPublicNotUser(state, userName)) as DataSourceTypes.IDataSourceView[];
    const dsStatus = useAppSelector(SelectDataSourcesStatus);

    const [dataSource, setDataSource] = React.useState<DataSourceTypes.IDataSourceView>({ ID: -1, Name: "", DataSourceTypeID: 1, URL: '', RegistrationKey: '', Expires: null, Public: false, User: '', Settings: '{}' });
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [errors, setErrors] = React.useState<string[]>([]);

    React.useEffect(() => {
        const e = [];
        if (dataSource.Name == null || dataSource.Name.trim().length == 0) {
            e.push("A Name has to be entered.")
            setErrors(e);
            return;
        }

        if (dataSources.map(ds => ds.Name.toLowerCase()).includes(dataSource.Name.toLowerCase()))
            e.push("A datasource with this name already exists.")
        else if (dataSources.concat(publicDataSources).map(ds => ds.Name.toLowerCase()).includes(dataSource.Name.toLowerCase()))
            e.push("A shared datasource with this name was already created by another user.");

        setErrors(e);
    }, [dataSource]);

    React.useEffect(() => {
        if (dsStatus != 'unitiated' && dsStatus != 'changed') return;
        dispatch(FetchDataSources());

    }, [dsStatus]);

    return (
        <>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add New</button>
            <Modal
                ConfirmBtnClass={"btn btn-success mr-auto"}
                DisableConfirm={errors.length > 0}
                Show={showModal}
                ShowX={true}
                ConfirmText={'Save'}
                ConfirmShowToolTip={errors.length > 0}
                ConfirmToolTipContent={errors.map((e, i) => <p key={2 * i + 1}>{CrossMark} {e} </p>)}
                Title={'Add New DataSource'}
                CallBack={conf => {
                    if (conf)
                        dispatch(AddDataSource(dataSource));
                    setShowModal(false);
                }}
            >
                <DataSource DataSource={dataSource} SetDataSource={setDataSource} SetErrors={setErrors} />
            </Modal>
        </>
    );
}

export default AddNewDataSource;