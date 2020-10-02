//******************************************************************************************************
//  DataSources.tsx - Gbtc
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
//  09/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../global';
import { useSelector, useDispatch } from 'react-redux';
import { Add, AddRange, SelectDataSources } from './DataSourcesSlice'
import Table from '@gpa-gemstone/react-table';

const DataSources: React.FunctionComponent = (props: {}) => {

    React.useEffect(() => {
        const dataSources = useSelector(SelectDataSources);
        const dispatch = useDispatch();

        let handle = GetDataSources();
        handle.done((data) => {
            dispatch(AddRange(data))
        });

        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }, []);

    function GetDataSources(): JQuery.jqXHR<TrenDAP.iDataSouce[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/DataSource`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    return <Table />;
}

export default DataSources;