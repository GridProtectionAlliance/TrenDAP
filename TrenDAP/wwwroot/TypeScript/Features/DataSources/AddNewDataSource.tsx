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
import { TrenDAP } from '../../global';
import { useSelector, useDispatch } from 'react-redux';
import { AddDataSource, SelectNewDataSource } from './DataSourcesSlice'
import DataSource from './DataSource';

interface IProps {
    show: boolean;
    setShow: (evt: boolean) => void;
    onComplete?: (evt: TrenDAP.iDataSource) => void;
    onCancel?: () => void;
}

const AddNewDataSource = (props : IProps) => {
    const dispatch = useDispatch();
    const [dataSource, setDataSource]= React.useState<TrenDAP.iDataSource>( useSelector(SelectNewDataSource) as TrenDAP.iDataSource);

    return (
        <div className="modal" style={{display: props.show ? 'block' : null, backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">DataSource</h4>
                        <button type="button" className="close" onClick={() => {
                            if (props.onCancel !== undefined && props.onCancel !== null) props.onCancel();
                            props.setShow(false)
                        }}>&times;</button>
                    </div>

                    <div className="modal-body">
                        <DataSource DataSource={dataSource} SetDataSource={setDataSource}/>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            if (props.onComplete !== undefined && props.onComplete !== null) props.onComplete(dataSource);
                            dispatch(AddDataSource(dataSource));
                            props.setShow(false);
                        }}>Save</button>
                        <button type="button" className="btn btn-danger" onClick={() => {
                            if (props.onCancel !== undefined && props.onCancel !== null) props.onCancel();
                            props.setShow(false)
                        }}>Close</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddNewDataSource;