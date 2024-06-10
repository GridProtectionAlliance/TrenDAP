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
import { SelectDataSetsForUser, SelectDataSetsAllPublicNotUser, Sort, SelectDataSetsSortField, SelectDataSetsAscending, FetchDataSets, SelectDataSetsStatus } from '../DataSets/DataSetsSlice';
import { SelectDataSources, FetchDataSources, SelectDataSourcesStatus } from '../DataSources/DataSourcesSlice';

import { ReactIcons } from '@gpa-gemstone/gpa-symbols'
import { Modal, ToolTip } from '@gpa-gemstone/react-interactive';
import { ReactTable } from '@gpa-gemstone/react-table'
import { Select } from '@gpa-gemstone/react-forms';

import TrenDAPDB from '../DataSets/TrenDAPDB';
import { IDataSource } from '../DataSources/Interface';
import { AllSources } from '../DataSources/DataSources';
import { useNavigate, useParams } from 'react-router-dom';

import * as _ from 'lodash';

type MatchStatus = ('Match' | 'MultipleMatches' | 'NoMatch')
type ChannelHover = ('Match' | 'MultipleMatches' | 'NoMatch' | 'None')

interface IParentMatch {
    Key: number,
    Name: string
    Status: MatchStatus
    ParentID: string
}

interface IChannelHover {
    Hover: ChannelHover,
    Index: number
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

    const [channelHover, setChannelHover] = React.useState<IChannelHover>({ Hover: 'None', Index: -1 });

    const [datasources, setDatasources] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [selectedParentKey, setSelectedParentKey] = React.useState<number>(null);

    const [channelErrors, setChannelErrors] = React.useState<string[]>([]);

    const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>([]);
    const [allParents, setAllParents] = React.useState<{ ID: string, Name: string }[]>([]);

    const [parentMatches, setParentMatches] = React.useState<IParentMatch[]>([]);
    const [channelMatches, setChannelMatches] = React.useState<IChannelMatch[]>([]);
    const parentChannelMatches = React.useMemo(() => channelMatches.map((c, i) => ({ ...c, Index: i })).filter((c) => c.Key.Parent === selectedParentKey), [channelMatches, selectedParentKey])

    const channelOptions = React.useMemo(() => {
        let parent = parentMatches.find(p => p.Key === selectedParentKey)
        if (parent?.ParentID == null || selectedParentKey == null) return [{ Label: '', Value: '' }];

        let availableChans = allChannels.filter(chan => chan.ParentID === parent.ParentID)
        return availableChans.map(p => ({ Value: p.ID, Label: p.Name }))
    }, [parentMatches, selectedParentKey])

    //Effect to setSelectedDataSet when dataSetID queryParam is set
    React.useEffect(() => {
        if (dataSetID == null) return;
        let dataSet = dataSetsForUser.concat(publicDataSets).find(ds => ds.ID === parseInt(dataSetID))
        if (dataSet != null) {
            setSelectedDataSet(dataSet)
            if(channels != null) props.SetIsModalOpen(false);
        }

    }, [dataSetID, workspaceId, dataSetsForUser.length, publicDataSets.length])

    //Effect to set errors based on match status
    React.useEffect(() => {
        if (channels != null) return;
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

        if (!_.isEqual(channelErrors, errors))
            setChannelErrors(errors)
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
            setSelectedParentKey(null);
        });

        return () => { dataConnectionHandle.abort() }
    }, [selectedDataSet])

    React.useEffect(() => {

        if (datasources.length == 0) {
            setAllChannels([]);
            return;
        }

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

            //Generate mapping if channels query param is set..
            if (channels != null) {
                let chanMap: [TrenDAP.IChannelKey, string][] = JSON.parse(window.atob(channels));
                let parentKeys = _.uniq(chanMap.map(chan => chan[0].Parent))

                let parentMap: [string, number][] = parentKeys.map((key, index) => {
                    let chanID = chanMap.find(chan => chan[0].Parent === key)[1]
                    return [d.flat().find(chan => chan.ID = chanID).ParentID, index]
        })

                props.GenerateMapping(chanMap, parentMap, selectedDataSet, loadData());
                //Remove Channels param from queryParams, since we dont update this param 
                navigate(`${homePath}Workspace/${workspaceId}/DataSet/${dataSetID}`)
            }

        })

    }, [datasources])

    React.useEffect(() => {
        const parentID = _.uniq(props.WorkSpaceJSON.Rows.map(r => r.Widgets.map(w => w.Channels.map(c => c.Key.Parent)).flat()).flat()).sort((a, b) => a - b);
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
            ChannelID: null,
        })));
    }, [allChannels, props.WorkSpaceJSON.Rows]);

    React.useEffect(() => {
        let parent = parentMatches.find(p => p.Key === selectedParentKey)
        if (parent?.ParentID == null || selectedParentKey == null) return;

        let availableChans = allChannels.filter(chan => chan.ParentID === parent.ParentID)
        parentChannelMatches.filter(chan => chan.Key.Parent === selectedParentKey && chan.Status === 'NoMatch').forEach(chan => {
            let matchedChans = availableChans.filter(available => chan.Key.Phase === available.Phase && chan.Key.Type === available.Type && chan.Key.Harmonic === available.Harmonic)
            if (matchedChans.length === 1)
                setChannelMatches(prev => [...prev.map(match => _.isEqual(match.Key, chan.Key) ? ({ ...match, ChannelID: matchedChans[0].ID, Status: 'SingleMatch' as MatchStatus }) : match)])
            else if (matchedChans.length > 1)
                setChannelMatches(prev => [...prev.map(match => _.isEqual(match.Key, chan.Key) ? ({ ...match, Status: 'MultipleMatches' as MatchStatus, ChannelID: null }) : match)])
            else if (matchedChans.length === 0)
                setChannelMatches(prev => [...prev.map(match => _.isEqual(match.Key, chan.Key) ? ({ ...match, Status: 'NoMatch' as MatchStatus, ChannelID: null }) : match)])
        })

    }, [parentMatches])

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
                DisableConfirm={channelErrors?.length > 0 || selectedDataSet == null}
                ConfirmShowToolTip={channelErrors?.length > 0 || selectedDataSet == null}
                ConfirmToolTipContent={selectedDataSet == null ? <p>Select a Data Set to continue</p> : channelErrors.length > 0 ? channelErrors.map((e, i) => <p key={2 * i + 1}><ReactIcons.CrossMark Color='red' /> {e} </p>) : null}
                ShowCancel={false}
            >
                <div className="container-fluid d-flex flex-column p-0" style={{ height: '80vh' }}>
                    <div className="row h-100">
                        <div className="col-6 h-100">
                            <div className="d-flex flex-column h-100">
                                Data Set
                                <ReactTable.Table<TrenDAP.iDataSet>
                                    TableClass="table table-hover"
                                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                    TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                    SortKey={dataSetSortField}
                                    OnClick={data => { setSelectedDataSet(data.row); navigate(`${homePath}Workspace/${workspaceId}/DataSet/${data.row.ID}`) }}
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
                        <div className="col-6 h-100">
                            <div className="d-flex flex-column h-50">
                                Meters or Assets
                                {parentMatches.length > 0 ?
                                    <>
                                        <ReactTable.Table<IParentMatch>
                                            TableClass={"table table-hover"}
                                            TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                            TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            OnClick={({ row }) => setSelectedParentKey(row.Key)}
                                            OnSort={data => { }}
                                            SortKey={'Key'}
                                            Data={parentMatches}
                                            Ascending={false}
                                            KeySelector={(row, index) => index}
                                            Selected={(row) => row.Key === selectedParentKey}
                                        >
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
                                                    Label={''} Field={'ParentID'} Setter={(r) => {
                                                        //Need to set all the parentChannelMatches to noMatch before setting the parentID in case they pick a new parent
                                                        setChannelMatches(channelMatches.map(chan => chan.Key.Parent === selectedParentKey ? ({ ...chan, Status: 'NoMatch' }) : chan))
                                                        setParentMatches(d => {
                                                            const u = _.cloneDeep(d);
                                                            u[row.index] = { ...r, Status: 'Match' };
                                                            return u;
                                                        })

                                                    }} />}
                                            >
                                                {'\u200B'}
                                            </ReactTable.Column>
                                            <ReactTable.Column<IParentMatch>
                                                Key={'Status'}
                                                Field={'Status'}
                                                Content={({ item }) => {
                                                    let allMatched = channelMatches.filter(chan => chan.Key.Parent === item.Key && chan.Status === 'NoMatch')
                                                    if (allMatched.length === 0)
                                                        return <ReactIcons.CheckMark Color="green" />
                                                    else
                                                        return <ReactIcons.CrossMark Color="red" />
                                                }}>
                                                {'\u200B'}
                                            </ReactTable.Column>
                                        </ReactTable.Table>
                                    </>
                                    : <p> Please Select a Data Set</p>}
                            </div>
                            <div className="d-flex flex-column h-50">
                                Channels
                                {parentChannelMatches.length > 0 ?
                                    <>
                                        <ReactTable.Table<IndexedChannelMatch>
                                            TableClass={"table table-hover"}
                                            TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                            TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            OnClick={data => { }}
                                            OnSort={data => { }}
                                            SortKey={'Key'}
                                            Data={parentChannelMatches}
                                            Ascending={dataSetAscending}
                                            KeySelector={(row, index) => `${row.Key.Phase ?? ''}~${row.Key.Type ?? ''}~${row.Key.Parent ?? ''}~${row.Key.Harmonic ?? -1}~${index}`}
                                        >
                                            <ReactTable.Column<IndexedChannelMatch>
                                                Key={'Key'}
                                                Field={'Key'}
                                                Content={({ item }) =>
                                                    <p>{`${item.Key.Phase ?? ''}-${item.Key.Type ?? ''}`}</p>
                                                }>
                                                {'\u200B'}
                                            </ReactTable.Column>
                                            <ReactTable.Column<IndexedChannelMatch>
                                                Key={'Channel'}
                                                Field={'ChannelID'}
                                                Content={(row) => <Select<IChannelMatch> key={row.index} EmptyOption={true} Record={row.item}
                                                    Options={channelOptions}
                                                    Label={''} Field={'ChannelID'} Setter={(item) => setChannelMatches(channels => {
                                                        const clonedChannels = _.cloneDeep(channels);
                                                        clonedChannels[row.item.Index] = { ...item, Status: 'Match' };
                                                        return clonedChannels;
                                                    })} />}
                                            >
                                                {'\u200B'}
                                            </ReactTable.Column>
                                            <ReactTable.Column<IndexedChannelMatch>
                                                Key={'Status'}
                                                Field={'Status'}
                                                AllowSort={false}
                                                Content={({ item, index }) => {
                                                    if (item.Status === 'NoMatch')
                                                        return (
                                                            <>
                                                                <button className="btn" data-tooltip={`NoMatch-${index}`} onMouseEnter={() => setChannelHover({ Hover: 'NoMatch', Index: index })}
                                                                    onMouseLeave={() => setChannelHover({ Hover: 'None', Index: -1 })}>
                                                                    < ReactIcons.CrossMark Color='red' />
                                                                </button>
                                                                <ToolTip Show={channelHover.Hover === 'NoMatch' && channelHover.Index === index} Target={`NoMatch-${index}`} Zindex={9991}>No Match found.</ToolTip>
                                                            </>
                                                        )
                                                    else if (item.Status === 'MultipleMatches')
                                                        return (
                                                            <>
                                                                <button className="btn" data-tooltip={`MultipleMatches-${index}`} onMouseEnter={() => setChannelHover({ Hover: 'MultipleMatches', Index: index })}
                                                                    onMouseLeave={() => setChannelHover({ Hover: 'None', Index: -1 })}>
                                                                    <ReactIcons.Warning Color='yellow' />
                                                                </button>
                                                                <ToolTip Show={channelHover.Hover === 'MultipleMatches' && channelHover.Index === index} Target={`MultipleMatches-${index}`} Zindex={9991}>Multiple Matches found.</ToolTip>
                                                            </>
                                                        )
                                                    else
                                                        return (
                                                            <>
                                                                <button className="btn" data-tooltip={`Match-${index}`} onMouseEnter={() => setChannelHover({ Hover: 'Match', Index: index })}
                                                                    onMouseLeave={() => setChannelHover({ Hover: 'None', Index: -1 })}>
                                                                    < ReactIcons.CheckMark Color='green' />
                                                                </button>
                                                                <ToolTip Show={channelHover.Hover === 'Match' && channelHover.Index === index} Target={`Match-${index}`} Zindex={9991}>Match found.</ToolTip>
                                                            </>
                                                        )
                                                }}>
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