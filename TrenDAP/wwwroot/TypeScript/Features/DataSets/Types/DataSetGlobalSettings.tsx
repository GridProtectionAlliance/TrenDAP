//******************************************************************************************************
//  DataSetGlobalSettings.tsx - Gbtc
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
//  08/27/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, Redux } from '../../../global';
import { Input, CheckBox, EnumCheckBoxes, Select } from '@gpa-gemstone/react-forms';
import { Plus } from '../../../Constants';
import { SelectDataSourcesStatus, SelectDataSourcesAllPublicNotUser, SelectDataSourcesForUser, FetchDataSources } from '../../DataSources/DataSourcesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SelectDataSourceTypes, SelectDataSourceTypesStatus, FetchDataSourceTypes } from '../../DataSourceTypes/DataSourceTypesSlice';
import { SelectDataSets, SelectNewXDADataSet } from './../DataSetsSlice';
import { SelectNewOpenHistorianDataSet } from '../../OpenHistorian/OpenHistorianSlice';
import { NewSapphireDataSet } from '../../Sapphire/SapphireSlice';
import moment from 'moment';
import { SelectWorkSpaces } from '../../WorkSpaces/WorkSpacesSlice';
import { ComputeValidDays, ComputeValidWeeks } from '../HelperFunctions';

const DataSetGlobalSettings: React.FunctionComponent<{ Record: TrenDAP.iDataSet, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dispatch = useDispatch();
    const dataSources = useSelector((state: Redux.StoreState) => SelectDataSourcesForUser(state, userName)) as TrenDAP.iDataSource[];
    const publicDataSources = useSelector((state: Redux.StoreState) => SelectDataSourcesAllPublicNotUser(state, userName)) as TrenDAP.iDataSource[];
    const dsStatus = useSelector(SelectDataSourcesStatus);
    const dataSourceTypes = useSelector(SelectDataSourceTypes) as TrenDAP.iDataSourceType[];
    const dstStatus = useSelector(SelectDataSourceTypesStatus);
    const allDataSets = useSelector(SelectDataSets);

    React.useEffect(() => {
        if (dsStatus != 'unitiated' && dsStatus != 'changed') return;
        dispatch(FetchDataSources());

        return function () {
        }
    }, [dispatch, dsStatus]);

    React.useEffect(() => {
        if (dstStatus != 'unitiated') return;

        dispatch(FetchDataSourceTypes());
        return function () {
        }
    }, [dispatch, dstStatus]);


    function valid(field: keyof (TrenDAP.iDataSet)): boolean {
        if (field == 'Name')
            return props.Record.Name != null && props.Record.Name.trim().length > 0 &&
                props.Record.Name.length <= 200 && allDataSets.find(ws => ws.Name.toLowerCase() == props.Record.Name.toLowerCase() && ws.ID != props.Record.ID) == null
        else
            return true;
    }

    function AddDS(dataSource: TrenDAP.iDataSource) {
        let json = JSON.parse(props.Record.JSONString);
        json.push({ DataSource: dataSource, Data: GetDS(dataSource) });
        props.SetDataSet({ ...props.Record, JSONString: JSON.stringify(json) });
    }

    function GetDS(dataSource: TrenDAP.iDataSource) {
        if (dataSourceTypes.find(dst => dst.ID === dataSource.DataSourceTypeID).Name === "TrenDAPDB")
            return SelectNewXDADataSet();
        if (dataSourceTypes.find(dst => dst.ID === dataSource.DataSourceTypeID).Name === "Sapphire")
            return NewSapphireDataSet();
        if (dataSourceTypes.find(dst => dst.ID === dataSource.DataSourceTypeID).Name === "OpenHistorian")
            return SelectNewOpenHistorianDataSet();
        else
            return {};
    }

    function validDay(d: string) {

        const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const i = dayOfWeek.findIndex(day => day == d);

        return (ComputeValidDays(props.Record) & Math.pow(2,i)) == 0
    }

    function validWeek(h: string) {
        const i = parseInt(h);
        let x = ComputeValidWeeks(props.Record);
        return Math.floor(ComputeValidWeeks(props.Record)/ Math.pow(2, i))%2 == 0
    }

    const ShowRelative = <>
        <div className='col'>
            <Input<TrenDAP.iDataSet> Record={props.Record} Field="RelativeWindow" Label="Time Window Size" Setter={(record) => props.SetDataSet(record)} Valid={(field) => { return true } } />
        </div>
        <div className='col'>
            <Select<TrenDAP.iDataSet> Record={props.Record} Field="RelativeWindow" Label="Time Window Units" Setter={(record) => props.SetDataSet(record)}
                Options={[{ Value: "Day", Label: "Day(s)" }, { Value: "Week", Label: "Week(s)" }, { Value: "Month", Label: "Month(s)" }, { Value: "Year", Label: "Year(s)" }]} />
        </div>
    </>

    const ShowFixed = <>
        <div className='col'>
            <Input<TrenDAP.iDataSet> Record={props.Record} Field="From" Label="Start Date" Setter={(record) => props.SetDataSet(record)} Valid={(field) => { return true }} />
        </div>
        <div className='col'>
            <Input<TrenDAP.iDataSet> Record={props.Record} Field="To" Label="End Date" Setter={(record) => props.SetDataSet(record)} Valid={(field) => { return true }} />
        </div>
    </>

    return (
        <form>
            <Input<TrenDAP.iDataSet> Record={props.Record} Field="Name" Setter={(record) => props.SetDataSet(record)} Valid={valid} Feedback={"A unique name must be specified"} />
            <div className='row'>
                <div className='col'>
                    <Select<TrenDAP.iDataSet> Record={props.Record} Field="Context" Setter={(record) => props.SetDataSet(record)} Label="Time Context" Options={[{ Value: "Relative", Label: "Relative" }, { Value: "Fixed Dates", Label: "Fixed Dates" }]} />
                </div>
                {props.Record.Context == 'Relative' ? ShowRelative : ShowFixed}
            </div>
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.Record} Field="Hours" Label="Hour of Day" Setter={(record) => props.SetDataSet(record)} Enum={Array.from({ length: 24 }, (_, i) => i.toString())} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.Record} Field="Days" Label="Day of Week" Setter={(record) => props.SetDataSet(record)} Enum={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} IsDisabled={validDay} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.Record} Field="Weeks" Label="Week of Year" Setter={(record) => props.SetDataSet(record)} Enum={Array.from({ length: 53 }, (_, i) => i.toString())} IsDisabled={validWeek} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.Record} Field="Months" Label="Month of Year" Setter={(record) => props.SetDataSet(record)} Enum={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
            <CheckBox<TrenDAP.iDataSet> Record={props.Record} Field="Public" Label='Shared' Setter={(record) => props.SetDataSet(record)} />
            <div className="form-group">
                <div className="dropup">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {Plus} DataSource
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="dropdown-header">Your DataSources</div>
                        {dataSources.map(ds => <a key={ds.ID} className="dropdown-item" onClick={() => AddDS(ds)}>{ds.Name} ({dataSourceTypes.find(dst => dst.ID === ds.DataSourceTypeID)?.Name})</a>)}
                        <div className="dropdown-header">Shared DataSources</div>
                        {publicDataSources.map(ds => <a key={ds.ID} className="dropdown-item" onClick={() => AddDS(ds)}>{ds.Name} ({dataSourceTypes.find(dst => dst.ID === ds.DataSourceTypeID)?.Name})</a>)}
                    </div>
                </div>
            </div>
        </form>
    );

}

export default DataSetGlobalSettings;