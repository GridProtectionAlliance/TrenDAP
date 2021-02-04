//******************************************************************************************************
//  DataSet.tsx - Gbtc
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
import { Input, CheckBox, EnumCheckBoxes, DateRangePicker, Select, ArrayCheckBoxes, ArrayMultiSelect } from '@gpa-gemstone/react-forms';
import { Plus } from '../../Constants';
import { SelectDataSourcesStatus, SelectDataSourcesAllPublicNotUser, SelectDataSourcesForUser, FetchDataSources } from '../DataSources/DataSourcesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SelectDataSourceTypes, SelectDataSourceTypesStatus, FetchDataSourceTypes } from '../DataSourceTypes/DataSourceTypesSlice';
import { SelectNewXDADataSet } from './DataSetsSlice';
import { SelectOpenXDA, FetchOpenXDA } from '../OpenXDA/OpenXDASlice';


const DataSet: React.FunctionComponent<{ Record: TrenDAP.iDataSet, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dataSourceTypes = useSelector(SelectDataSourceTypes) as TrenDAP.iDataSourceType[];
    const dstStatus = useSelector(SelectDataSourceTypesStatus);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (dstStatus != 'unitiated') return;

        dispatch(FetchDataSourceTypes());
        return function () {
        }
    }, [dispatch, dstStatus]);

    const [tab, setTab] = React.useState<string>('settings');
    const dataSources = JSON.parse(props.Record.JSONString);
    return (
        <>
            <ul className="nav nav-tabs" style={{padding:10}}>
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" onClick={() => setTab('settings') }>Settings</a>
                </li>
                {
                    dataSources.map((ds, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link" data-toggle="tab" onClick={() => setTab(index.toString())}>{ds.DataSource.Name }</a>
                        </li>
                    ))
                }
            </ul>
            <div className="tab-content">
                <div className={"tab-pane container "+ (tab === "settings" ? 'active' : 'fade')}>
                    <DataSetGlobalSettings {...props} />
                </div>
                {
                    dataSources.map((ds, index) => (
                        <div className={"tab-pane container " + (tab === index.toString() ? 'active' : 'fade')} id={index} key={index}>
                            {
                                (dataSourceTypes.find(dst => dst.ID === ds.DataSource.DataSourceTypeID)?.Name === "OpenXDA" ? <DataSetOpenXDA {...props} Data={ds} Index={index}/>: null )
                            }
                        </div>
                    ))

                }
            </div>

        </>
    );
}

const DataSetGlobalSettings: React.FunctionComponent<{ Record: TrenDAP.iDataSet, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dispatch = useDispatch();
    const dataSources = useSelector((state: Redux.StoreState) => SelectDataSourcesForUser(state, userName)) as TrenDAP.iDataSource[];
    const publicDataSources = useSelector((state: Redux.StoreState) => SelectDataSourcesAllPublicNotUser(state, userName)) as TrenDAP.iDataSource[];
    const dsStatus = useSelector(SelectDataSourcesStatus);
    const dataSourceTypes = useSelector(SelectDataSourceTypes) as TrenDAP.iDataSourceType[];
    const dstStatus = useSelector(SelectDataSourceTypesStatus);


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
            return props.Record.Name != null && props.Record.Name.length > 0 && props.Record.Name.length <= 200;
        else
            return true;
    }

    function AddDS(dataSource: TrenDAP.iDataSource) {
        let json = JSON.parse(props.Record.JSONString);
        json.push({ DataSource: dataSource, Data: GetDS(dataSource) });
        props.SetDataSet({ ...props.Record, JSONString: JSON.stringify(json) });
    }

    function GetDS(dataSource: TrenDAP.iDataSource) {
        if (dataSourceTypes.find(dst => dst.ID === dataSource.DataSourceTypeID).Name === "OpenXDA")
            return SelectNewXDADataSet();
        else
            return {};
    }

    return (
        <form>
            <Input<TrenDAP.iDataSet> Record={props.Record} Field="Name" Setter={(record) => props.SetDataSet(record)} Valid={valid} />
            <DateRangePicker<TrenDAP.iDataSet> Record={props.Record} FromField="From" ToField="To" Setter={props.SetDataSet} Label="Date Range" />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.Record} Field="Hours" Label="Hour of Day" Setter={(record) => props.SetDataSet(record)} Enum={Array.from({ length: 24 }, (_, i) => i.toString())} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.Record} Field="Days" Label="Day of Week" Setter={(record) => props.SetDataSet(record)} Enum={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.Record} Field="Weeks" Label="Week of Year" Setter={(record) => props.SetDataSet(record)} Enum={Array.from({ length: 53 }, (_, i) => i.toString())} />
            <EnumCheckBoxes<TrenDAP.iDataSet> Record={props.Record} Field="Months" Label="Month of Year" Setter={(record) => props.SetDataSet(record)} Enum={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
            <CheckBox<TrenDAP.iDataSet> Record={props.Record} Field="Public" Setter={(record) => props.SetDataSet(record)} />
            <div className="form-group">
            <div className="dropup">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {Plus} DataSource
              </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown-header">Your DataSources</div>
                        {dataSources.map(ds => <a key={ds.ID} className="dropdown-item" onClick={() => AddDS(ds) }>{ds.Name} ({dataSourceTypes.find(dst => dst.ID === ds.DataSourceTypeID)?.Name  })</a>)}
                    <div className="dropdown-header">Public DataSources</div>
                        {publicDataSources.map(ds => <a key={ds.ID} className="dropdown-item" onClick={() => AddDS(ds)}>{ds.Name} ({dataSourceTypes.find(dst => dst.ID === ds.DataSourceTypeID)?.Name})</a>)}
                </div>
            </div>
            </div>
        </form>
    );

}

const DataSetOpenXDA: React.FunctionComponent<{ Record: TrenDAP.iDataSet, Data: {DataSource: TrenDAP.iDataSource, Data: TrenDAP.iXDADataSet}, Index: number, SetDataSet: (ws: TrenDAP.iDataSet) => void }> = (props) => {
    const dispatch = useDispatch();
    const phases = useSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'Phase'));
    const meters = useSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'Meter'));
    const assets = useSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'Asset'));
    const channelGroups = useSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'ChannelGroup'));
    const channelTypes = useSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.Data.DataSource.ID, 'ChannelGroupType'));

    function UpdateDS(...params: { field: keyof TrenDAP.iXDADataSet, value: any }[] ) {
        let json = JSON.parse(props.Record.JSONString);
        json[props.Index].Data = { ...props.Data.Data};
        for (var index in params)
            json[props.Index].Data[params[index].field] = params[index].value;
        props.SetDataSet({ ...props.Record, JSONString: JSON.stringify(json) });
    }

    React.useEffect(() => {
        if (phases != undefined && phases?.Status != 'unitiated' && phases?.Status != 'changed') return;
        dispatch(FetchOpenXDA({dataSourceID: props.Data.DataSource.ID, table: 'Phase'}));

        return function () {
        }
    }, [dispatch, phases?.Status ]);

    React.useEffect(() => {
        if (meters != undefined && meters?.Status != 'unitiated' && meters?.Status != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'Meter' }));

        return function () {
        }
    }, [dispatch, meters?.Status]);

    React.useEffect(() => {
        if (assets != undefined && assets?.Status != 'unitiated' && assets?.Status != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'Asset' }));

        return function () {
        }
    }, [dispatch, assets?.Status]);

    React.useEffect(() => {
        if (channelGroups != undefined && channelGroups?.Status != 'unitiated' && channelGroups?.Status != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroup' }));

        return function () {
        }
    }, [dispatch, channelGroups?.Status]);

    React.useEffect(() => {
        if (channelTypes != undefined && channelTypes?.Status != 'unitiated' && channelTypes?.Status != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroupType' }));

        return function () {
        }
    }, [dispatch, channelTypes?.Status]);

    return (
        <form>
            <div className="row">
                <div className="col">
                    <Select<TrenDAP.iXDADataSet> Record={props.Data.Data} Field="Aggregate" Options={[{ Value: '', Label: 'None' },{ Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, {Value: '1w', Label: 'Week'}]} Setter={(record) => UpdateDS({ field: 'Aggregate', value: record.Aggregate })} />
                    <Select<TrenDAP.iXDADataSet> Record={props.Data.Data} Field="By" Options={[{ Value: 'Meter', Label: 'Meter' }, { Value: 'Asset', Label: 'Asset' }]} Setter={(record) => UpdateDS({ field: 'By', value: record.By }, { field: 'IDs', value: [] } )} />
                    <ArrayMultiSelect<TrenDAP.iXDADataSet> Style={{ height: window.innerHeight - 510 }} Record={props.Data.Data} Options={(props.Data.Data.By == 'Meter' ? meters?.Data.map(m => ({ Value: m.ID, Label: m.Name })) : assets?.Data.map(m => ({ Value: m.ID, Label: m.AssetName }))) ?? []} Field="IDs" Setter={(record) => UpdateDS({ field: 'IDs', value: record.IDs })} />
                </div>
                <div className="col">
                    <ArrayCheckBoxes<TrenDAP.iXDADataSet> Record={props.Data.Data} Checkboxes={phases?.Data.map(m => ({ ID: m.ID, Label: m.Name })) ?? []} Field="Phases" Setter={(record) => UpdateDS({ field: 'Phases', value: record.Phases })} />
                    <ArrayCheckBoxes<TrenDAP.iXDADataSet> Label="Quick Selection" Record={props.Data.Data} Checkboxes={channelGroups?.Data.map(m => ({ ID: m.ID, Label: m.Name })) ?? []} Field="Groups" Setter={(record) => {
                        const oldGroups = props.Data.Data.Groups;
                        if (oldGroups.length > record.Groups.length) { // something was taken out
                            let a = oldGroups.map(x => record.Groups.indexOf(x));
                            let i = a.indexOf(-1);
                            let channelGroupID = oldGroups[i];
                            let newa = props.Data.Data.Types.map(t => channelTypes.Data.find(ct => ct.ID === t)).filter(t => t.ChannelGroupID !== oldGroups[i]).map(t => t.ID);
                            UpdateDS({ field: 'Groups', value: record.Groups }, { field: 'Types', value: newa });
                        }
                        else if (oldGroups.length < record.Groups.length) { // something was put in
                            let a = record.Groups.map(x => oldGroups.indexOf(x));
                            let i = a.indexOf(-1);
                            let channelGroupID = record.Groups[i];
                            let newa = [...props.Data.Data.Types, ...channelTypes.Data.filter(t => t.ChannelGroupID === channelGroupID).map(t => t.ID)];
                            UpdateDS({ field: 'Groups', value: record.Groups }, { field: 'Types', value: newa });
                        }
                        else {  // this probably can't happen, but means nothing changed

                        }
                        

                    }} />
                    <ArrayMultiSelect<TrenDAP.iXDADataSet> Style={{ height: window.innerHeight - 520 }} Record={props.Data.Data} Options={channelTypes?.Data.map(m => ({ Value: m.ID, Label: m.DisplayName })) ?? []} Field="Types" Setter={(record) => UpdateDS({ field: 'Types', value: record.Types })} />
                </div>
            </div>
        </form>
    );

}

export default DataSet;