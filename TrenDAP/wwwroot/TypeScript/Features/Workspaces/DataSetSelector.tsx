//******************************************************************************************************
//  WorkSpaceEditor.tsx - Gbtc
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
//  11/10/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as $ from 'jquery';
import { TrenDAP, Redux, DataSourceTypes, DataSetTypes } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UpdateWorkSpace } from './WorkSpacesSlice';
import { SelectDataSetsForUser, SelectDataSetsAllPublicNotUser, Sort, SelectDataSetsSortField, SelectDataSetsAscending, FetchDataSets, SelectDataSetsStatus } from '../DataSets/DataSetsSlice';
import { SelectDataSources, FetchDataSources, SelectDataSourcesStatus } from '../DataSources/DataSourcesSlice';

import { ReactIcons } from '@gpa-gemstone/gpa-symbols'
import { Modal, ToolTip } from '@gpa-gemstone/react-interactive';
import { ReactTable } from '@gpa-gemstone/react-table'
import { Select } from '@gpa-gemstone/react-forms';

import TrenDAPDB from '../DataSets/TrenDAPDB';
import { IDataSource } from '../DataSources/Interface';
import { AllSources } from '../DataSources/DataSources';
import moment from 'moment';

import * as _ from 'lodash';

type MatchStatus = ('Match' | 'MultipleMatches' | 'NoMatch')
type ChannelHover = ('Match' | 'MultipleMatches' | 'NoMatch' | 'None')

interface Hover {
    Hover: ChannelHover,
    ID: number
}

interface IParentMatch {
    Key: number,
    Name: string
    Status: MatchStatus
    ParentID: string
}

interface IChannelMatch {
    Key: TrenDAP.IChannelKey,
    ChannelID: string,
    Status: MatchStatus
}

interface IndexedChannelMatch extends IChannelMatch {
    Index: number
}

interface IProps {
    IsModalOpen: boolean,
    SetIsModalOpen: (open: boolean) => void,
    WorkSpaceJSON: TrenDAP.WorkSpaceJSON,
    GenerateMapping: (
        channelMap: [TrenDAP.IChannelKey, string][],
        parentMap: [string, number][],
        channels: DataSetTypes.IDataSetMetaData[],
        dataSet: TrenDAP.iDataSet,
        loadHandle: Promise<any>) => void
}

const DataSetSelector: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch();

    const dataSourceViews = useAppSelector(SelectDataSources);
    const dataSetsForUser = useAppSelector((state: Redux.StoreState) => SelectDataSetsForUser(state, userName));
    const publicDataSets = useAppSelector((state: Redux.StoreState) => SelectDataSetsAllPublicNotUser(state, userName));
    const dataSetSortField = useAppSelector(SelectDataSetsSortField);
    const dataSetAscending = useAppSelector(SelectDataSetsAscending);
    const dataSourceStatus = useAppSelector(SelectDataSourcesStatus);
    const dataSetStatus = useAppSelector(SelectDataSetsStatus);


    const [selectedDataSet, setSelectedDataSet] = React.useState<TrenDAP.iDataSet | null>(null);

    const [channelHover, setChannelHover] = React.useState<Hover>({ Hover: 'None', ID: -1 });

    const [datasources, setDatasources] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [selectedParentKey, setSelectedParentKey] = React.useState<number>(null);
    const [selectedParentID, setSelectedParentID] = React.useState<string>(null);

    const [errors, setErrors] = React.useState<string[]>([]);

    const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>([]);
    const [allParents, setAllParents] = React.useState<{ ID: string, Name: string }[]>([]);

    const [parentMatches, setParentMatches] = React.useState<IParentMatch[]>([]);
    const [channelMatches, setChannelMatches] = React.useState<IChannelMatch[]>([]);
    const parentChannelMatches = React.useMemo(() => channelMatches.map((c, i) => ({ ...c, Index: i })).filter((c) => c.Key.Parent === selectedParentKey), [channelMatches, selectedParentKey])


    React.useEffect(() => {
        let errors = []

        channelMatches.forEach(channel => {
            if (channel.Status === 'NoMatch') {
                let parent = parentMatches.find(parent => parent.Key === channel.Key.Parent)
                errors.push(`${parent.Name} has no match for channel ${channel.Key.Phase ?? ''}~${channel.Key.Type ?? ''}~${channel.Key.Parent ?? ''}~${channel.Key.Harmonic ?? -1}`)
            }
            if (channel.Status === 'MultipleMatches') {
                let parent = parentMatches.find(parent => parent.Key === channel.Key.Parent)
                errors.push(`${parent.Name} has multiple matches for channel ${channel.Key.Phase ?? ''}~${channel.Key.Type ?? ''}~${channel.Key.Parent ?? ''}~${channel.Key.Harmonic ?? -1}`)
            }

        })
        setErrors(errors)
    }, [parentMatches, channelMatches])

    React.useEffect(() => {
        if (dataSourceStatus === 'unitiated' || dataSourceStatus === 'changed')
            dispatch(FetchDataSources());
    }, [dataSourceStatus]);

    React.useEffect(() => {
        if (dataSetStatus === 'unitiated' || dataSetStatus === 'changed')
            dispatch(FetchDataSets());
    }, [dataSetStatus]);

    React.useEffect(() => {
        if (selectedDataSet == null) {
            setDatasources([]);
            return;
        }

        const dataConnectionHandle = $.ajax({
            type: "GET",
            url: `${homePath}api/DataSourceDataSet/${selectedDataSet.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: DataSourceTypes.IDataSourceDataSet[]) => {
            setDatasources(data);
        });

        return () => { dataConnectionHandle.abort() }
    }, [selectedDataSet])

    React.useEffect(() => {

        if (datasources.length == 0) {
            setAllChannels([]);
            return;
        }

        // ToDo Clean up naming and Add Cancelation Logic  for every channel Handler
        const channelHandlers = datasources.map((ds) => {
            const dataSourceView = dataSourceViews.find((d) => d.ID === ds.DataSourceID);
            const implementation: IDataSource<any, any> | null = AllSources.find(t => t.Name == dataSourceView.Type);
            if (implementation === null)
                return Promise.resolve([]);
            return implementation.LoadDataSetMeta(dataSourceView, selectedDataSet, ds)
        })

        Promise.all(channelHandlers).then(d => {
            setAllChannels(d.flat())
            setAllParents(_.uniqBy(d.flat().map(c => ({ ID: c.ParentID, Name: c.ParentName })), (m) => m.ID))

        })

        return () => { }
    }, [datasources])

    React.useEffect(() => {
        const parentID = _.sortedUniq(props.WorkSpaceJSON.Rows.map(r => r.Widgets.map(w => w.Channels.map(c => c.Key.Parent)).flat()).flat());
        setParentMatches(parentID.map(p => ({
            Key: p,
            Name: 'Parent ' + p,
            Status: 'NoMatch',
            ParentID: null
        })));
    }, [allParents, props.WorkSpaceJSON.Rows]);

    React.useEffect(() => {
        const channels = props.WorkSpaceJSON.Rows.map(r => r.Widgets.map(w => w.Channels).flat()).flat();
        setChannelMatches(channels.map(c => ({
            Key: c.Key,
            Status: 'NoMatch',
            ChannelID: null
        })));
    }, [allChannels, props.WorkSpaceJSON.Rows]);

    function loadData() {
        const dataHandlers = datasources.map((ds) => {
            const dataSourceView = dataSourceViews.find((d) => d.ID === ds.DataSourceID);
            const implementation: IDataSource<any, any> | null = AllSources.find(t => t.Name == dataSourceView.Type);
            if (implementation === null)
                return Promise.resolve([] as DataSetTypes.IDataSetData[]);
            return implementation.LoadDataSet(dataSourceView, selectedDataSet, ds)
        })

        const loaded = Promise.all(dataHandlers).then(d => {
            const db = new TrenDAPDB();
            db.AddMultiple(d.flat())
        })

        return loaded;
    }

    return (
        <>
            <Modal
                ConfirmBtnClass={"btn btn-success mr-auto"}
                Show={props.IsModalOpen}
                ShowX={true}
                ConfirmText={'Apply'}
                Title={'Select a Data Set'}
                CallBack={conf => {
                    if (conf) 
                        props.GenerateMapping(channelMatches.map(match => [match.Key, match.ChannelID]), parentMatches.map((match, index) => [match.ParentID, index]), allChannels, selectedDataSet, loadData());
                    
                    props.SetIsModalOpen(false);
                }}
                Size="lg"
                DisableConfirm={errors?.length > 0 || selectedDataSet == null}
                ConfirmShowToolTip={errors?.length > 0 || selectedDataSet == null}
                ConfirmToolTipContent={selectedDataSet == null ? <p>Select a Data Set to continue</p> : errors.length > 0 ? errors.map((e, i) => <p key={2 * i + 1}><ReactIcons.CrossMark Color='red' /> {e} </p>) : null}
                ShowCancel={false}
            >
                <div className={'row'}>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                Data Set
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ReactTable.Table<TrenDAP.iDataSet>
                                    TableClass={"table table-hover"}
                                    TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                                    TbodyStyle={{ display: 'block', overflowY: 'scroll', width: '100%' }}
                                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                    SortKey={dataSetSortField}
                                    OnClick={data => setSelectedDataSet(data.row)}
                                    OnSort={data => dispatch(Sort({ SortField: data.colField, Ascending: data.ascending }))}
                                    Data={dataSetsForUser.concat(publicDataSets)}
                                    Ascending={dataSetAscending}
                                    KeySelector={(row) => row.ID}
                                    Selected={(row) => row?.ID === selectedDataSet?.ID}
                                >
                                    <ReactTable.Column<TrenDAP.iDataSet>
                                        Key={'Name'}
                                        AllowSort={true}
                                        Field={'Name'}
                                    >
                                        Name
                                    </ReactTable.Column>
                                    <ReactTable.Column<TrenDAP.iDataSet>
                                        Key={'From'}
                                        AllowSort={true}
                                        Field={'From'}
                                    >
                                        From
                                    </ReactTable.Column>
                                    <ReactTable.Column<TrenDAP.iDataSet>
                                        Key={'To'}
                                        AllowSort={true}
                                        Field={'To'}
                                    >
                                        To
                                    </ReactTable.Column>
                                </ReactTable.Table>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                Meters or Assets
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {parentMatches.length > 0 ?
                                    <>
                                        <ReactTable.Table<IParentMatch>
                                            TableClass={"table table-hover"}
                                            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                                            TbodyStyle={{ display: 'block', overflowY: 'scroll', width: '100%' }}
                                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            OnClick={({ row }) => { setSelectedParentKey(row.Key); setSelectedParentID(row.ParentID) }}
                                            OnSort={data => { }}
                                            SortKey={'Key'}
                                            Data={parentMatches}
                                            Ascending={false}
                                            KeySelector={(row) => row.Key}
                                            Selected={(row) => row.Key === selectedParentKey}
                                        >
                                            <ReactTable.Column<IParentMatch>
                                                Key={'Status'}
                                                Field={'Status'}
                                                Content={({ item }) =>
                                                    item.Status === 'NoMatch' ? (<ReactIcons.CrossMark Color='red' />)
                                                        : item.Status === 'MultipleMatches' ? (
                                                            <ReactIcons.Warning Color='yellow' />) : (
                                                            <ReactIcons.CheckMark Color='green' />)
                                                }>
                                                {'\u200B'}
                                            </ReactTable.Column>
                                            <ReactTable.Column<IParentMatch>
                                                Key={'Key'}
                                                Field={'Name'}
                                            >
                                                {'\u200B'}
                                            </ReactTable.Column>
                                            <ReactTable.Column<IParentMatch>
                                                Key={'ParentID'}
                                                Field={'ParentID'}
                                                Content={(row) => <Select<IParentMatch> key={row.index} EmptyOption={true} Record={row.item}
                                                    Options={allParents.map(p => ({ Value: p.ID, Label: p.Name }))}
                                                    Label={''} Field={'ParentID'} Setter={(r) => setParentMatches(d => {
                                                        const u = _.cloneDeep(d);
                                                        u[row.index] = { ...r, Status: 'Match' };
                                                        return u;
                                                    })} />}
                                            >
                                                {'\u200B'}
                                            </ReactTable.Column>
                                        </ReactTable.Table>
                                    </>
                                    : <p> Please Select a Data Set</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                Channels
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {parentChannelMatches.length > 0 ?
                                    <>
                                        <ReactTable.Table<IndexedChannelMatch>
                                            TableClass={"table table-hover"}
                                            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                                            TbodyStyle={{ display: 'block', overflowY: 'scroll', width: '100%' }}
                                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            OnClick={data => { }}
                                            OnSort={data => { }}
                                            SortKey={'Status'}
                                            Data={parentChannelMatches}
                                            Ascending={dataSetAscending}
                                            KeySelector={(row) => `${row.Key.Phase ?? ''}~${row.Key.Type ?? ''}~${row.Key.Parent ?? ''}~${row.Key.Harmonic ?? -1}`}
                                        >
                                            <ReactTable.Column<IndexedChannelMatch>
                                                Key={'Status'}
                                                Field={'Status'}
                                                Content={({ item }) =>
                                                    item.Status === 'NoMatch' ? (<ReactIcons.CrossMark Color='red' />) : item.Status === 'MultipleMatches' ? (
                                                        <ReactIcons.Warning Color='yellow' />) : (
                                                        <ReactIcons.CheckMark Color='green' />)
                                                }>
                                                {'\u200B'}
                                            </ReactTable.Column>
                                            <ReactTable.Column<IndexedChannelMatch>
                                                Key={'Key'}
                                                Field={'Key'}
                                                Content={({ item }) =>
                                                    <p>{`${item.Key.Phase ?? ''}~${item.Key.Type ?? ''}~${item.Key.Parent ?? ''}~${item.Key.Harmonic ?? -1}`}</p>
                                                }>
                                                {'\u200B'}
                                            </ReactTable.Column>
                                            <ReactTable.Column<IndexedChannelMatch>
                                                Key={'Channel'}
                                                Field={'ChannelID'}
                                                Content={(row) => <Select<IChannelMatch> key={row.index} EmptyOption={true} Record={row.item}
                                                    Options={allChannels.filter(chan =>
                                                        chan.ParentID === selectedParentID/*not sure how to handle duplicate ParentIDS in this case as the map is completely empty unless we create a temporary buffer map...*/)
                                                        .map(p => ({ Value: p.ID, Label: p.Name })) /*filter for selectedParent.*/}

                                                    Label={''} Field={'ChannelID'} Setter={(item) => setChannelMatches(channels => {
                                                        const clonedChannels = _.cloneDeep(channels);
                                                        clonedChannels[row.item.Index] = { ...item, Status: 'Match' };
                                                        return clonedChannels;
                                                    })} />}
                                            >
                                                {'\u200B'}
                                            </ReactTable.Column>
                                        </ReactTable.Table>
                                    </>
                                    : <p> Please Select a Data Set and Meter or Asset</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default DataSetSelector;