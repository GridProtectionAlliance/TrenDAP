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
import {
    SelectDataSources, FetchDataSources, SelectDataSourcesStatus,
    SelectPublicDataSources, FetchPublicDataSources, SelectPublicDataSourcesStatus
} from '../DataSources/DataSourcesSlice';
import { SelectEventSources, FetchEventSources, SelectEventSourcesStatus, SelectPublicEventSources, SelectPublicEventSourcesStatus, FetchPublicEventSources } from '../EventSources/Slices/EventSourcesSlice';

import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { Modal, ToolTip } from '@gpa-gemstone/react-interactive';
import { ReactTable } from '@gpa-gemstone/react-table';
import { Select } from '@gpa-gemstone/react-forms';
import { Application } from '@gpa-gemstone/application-typings';

import TrenDAPDB from '../DataSets/TrenDAPDB';
import { IDataSource } from '../DataSources/Interface';
import { AllSources } from '../DataSources/DataSources';
import { IEventSource } from '../EventSources/Interface';
import { EventDataSources } from '../EventSources/ByEventSources';
import { EventSourceTypes } from '../EventSources/Interface';
import { useNavigate, useParams } from 'react-router-dom';

import * as _ from 'lodash';
import { isVirtual } from '../Widgets/HelperFunctions';
/* eslint-disable @typescript-eslint/no-explicit-any */

type MatchStatus = ('Match' | 'MultipleMatches' | 'NoMatch')
type ChannelHover = ('Match' | 'MultipleMatches' | 'NoMatch' | 'None')

interface IParentMatch {
    Key: number,
    Name: string,
    Status: MatchStatus,
    ParentID: string | null
}

interface IEventMatch {
    Key: number,
    Match: MatchStatus,
    ID?: number
}

interface IChannelHover {
    Hover: ChannelHover,
    Index: number
}

interface IChannelMatch {
    Key: TrenDAP.IChannelKey,
    ChannelID: string | null,
    Status: MatchStatus
}

interface IndexedChannelMatch extends IChannelMatch {
    Index: number
}

const dataSetStep = 0;
const parentStep = 1;
const eventStep = 2;
const firstStep = dataSetStep;
const lastStep = eventStep;

interface IProps {
    IsModalOpen: boolean,
    SetIsModalOpen: (open: boolean) => void,
    WorkSpaceJSON: TrenDAP.WorkSpaceJSON,
    AllChannels: DataSetTypes.IDataSetMetaData[],
    SetAllChannels: (chans: DataSetTypes.IDataSetMetaData[]) => void,
    SetAllEventSources: (evtSrc: TrenDAP.IEventSourceMetaData[]) => void,
    GenerateMapping: (
        channelMap: [TrenDAP.IChannelKey, string][],
        parentMap: [string, number][],
        eventMap: [number, number][],
        parents: { ID: string, Name: string }[],
        dataSet: TrenDAP.iDataSet,
        loadHandle: Promise<unknown>) => void
}

const DataSetSelector: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { workspaceId, dataSetID, channels } = useParams();
    const dataSourceViews = useAppSelector(SelectDataSources);
    const publicDataSourceViews = useAppSelector(SelectPublicDataSources);
    const dataSetsForUser = useAppSelector((state: Redux.StoreState) => SelectDataSetsForUser(state, userName));
    const publicDataSets = useAppSelector((state: Redux.StoreState) => SelectDataSetsAllPublicNotUser(state, userName));
    const dataSetSortField = useAppSelector(SelectDataSetsSortField);
    const dataSetAscending = useAppSelector(SelectDataSetsAscending);
    const dataSourceStatus = useAppSelector(SelectDataSourcesStatus);
    const publicDataSourceStatus = useAppSelector(SelectPublicDataSourcesStatus);
    const dataSetStatus = useAppSelector(SelectDataSetsStatus);

    const eventSourceViews = useAppSelector(SelectEventSources);
    const eventSourceStatus = useAppSelector(SelectEventSourcesStatus);
    const publicEventSourceViews = useAppSelector(SelectPublicEventSources);
    const publicEventSourceStatus = useAppSelector(SelectPublicEventSourcesStatus);

    const [selectedDataSet, setSelectedDataSet] = React.useState<TrenDAP.iDataSet | null>(null);
    const [channelHover, setChannelHover] = React.useState<IChannelHover>({ Hover: 'None', Index: -1 });
    const [datasources, setDatasources] = React.useState<DataSourceTypes.IDataSourceDataSet[]>([]);
    const [selectedParentKey, setSelectedParentKey] = React.useState<number | null>(null);

    const [evtStatus, setEvtStatus] = React.useState<Application.Types.Status>('unintiated')
    const [eventSources, setEventSources] = React.useState<EventSourceTypes.IEventSourceDataSet[]>([]);
    const [eventSourceMetas, setEventSourceMetas] = React.useState<TrenDAP.IEventSourceMetaData[]>([]);

    const [channelErrors, setChannelErrors] = React.useState<string[]>([]);
    const [eventErrors, setEventErrors] = React.useState<string[]>([]);
    const [allParents, setAllParents] = React.useState<{ ID: string, Name: string }[]>([]);

    const [parentMatches, setParentMatches] = React.useState<IParentMatch[]>([]);
    const [channelMatches, setChannelMatches] = React.useState<IChannelMatch[]>([]);
    const [eventMatches, setEventMatches] = React.useState<IEventMatch[]>([]);

    const [step, setStep] = React.useState<number>(firstStep);

    const parentChannelMatches = React.useMemo(() => channelMatches.map((c, i) => ({ ...c, Index: i })).filter((c) => c.Key.Parent === selectedParentKey), [channelMatches, selectedParentKey])

    const channelOptions = React.useMemo(() => {
        const selectedParent = parentMatches.find(p => p.Key === selectedParentKey)
        if (selectedParent?.ParentID == null || selectedParentKey == null) return [{ Label: '', Value: '' }];

        const availableChans = props.AllChannels.filter(chan => chan.ParentID === selectedParent.ParentID)
        return availableChans.map(p => ({ Value: p.ID, Label: p.Name }))
    }, [parentMatches, selectedParentKey])

    //Effect to setSelectedDataSet when dataSetID queryParam is set
    React.useEffect(() => {
        if (dataSetID == null) return;
        const dataSet = dataSetsForUser.concat(publicDataSets).find(ds => ds.ID === parseInt(dataSetID))
        if (dataSet != null) {
            setSelectedDataSet(dataSet)
            if(channels != null) props.SetIsModalOpen(false);
        }

    }, [dataSetID, workspaceId, dataSetsForUser.length, publicDataSets.length])

    //Effect to set errors based on match status
    React.useEffect(() => {
        if (channels != null || parentMatches.length === 0) return;
        const errors: string[] = [];

        channelMatches.forEach(channel => {
            if (channel.Status === 'NoMatch') {
                const parent = parentMatches.find(parent => parent.Key === channel.Key.Parent)
                errors.push(`${parent?.Name} has no match for channel ${channel.Key.Type ?? ''} ${channel.Key.Phase ?? ''}`)
            }
            if (channel.Status === 'MultipleMatches') {
                const parent = parentMatches.find(parent => parent.Key === channel.Key.Parent)
                errors.push(`${parent?.Name} has multiple matches for channel ${channel.Key.Type ?? ''} ${channel.Key.Phase ?? ''}`)
            }
        });

        if (!_.isEqual(channelErrors, errors))
            setChannelErrors(errors)
    }, [parentMatches, channelMatches, props.IsModalOpen])

    //Effect to set event errors based on match status
    React.useEffect(() => {
        const errors: string[] = [];
        eventMatches.forEach(match => {
            if (match.Match === 'NoMatch') errors.push(`Event Source ${match.Key + 1} has no match.`);
        });

        if (!_.isEqual(eventErrors, errors)) setEventErrors(errors);
    }, [eventMatches]);

    //Effect to load all datasources for the selected dataset
    React.useEffect(() => {
        if (dataSourceStatus === 'unitiated' || dataSourceStatus === 'changed')
            dispatch(FetchDataSources());
    }, [dataSourceStatus]);

    React.useEffect(() => {
        if (publicDataSourceStatus === 'unitiated' || publicDataSourceStatus === 'changed')
            dispatch(FetchPublicDataSources());
    }, [publicDataSourceStatus]);

    React.useEffect(() => {
        if (eventSourceStatus === 'unitiated' || eventSourceStatus === 'changed')
            dispatch(FetchEventSources());
    }, [eventSourceStatus]);

    React.useEffect(() => {
        if (publicEventSourceStatus === 'unitiated' || publicEventSourceStatus === 'changed')
            dispatch(FetchPublicEventSources());
    }, [publicEventSourceStatus]);

    React.useEffect(() => {
        if (dataSetStatus === 'unitiated' || dataSetStatus === 'changed')
            dispatch(FetchDataSets());
    }, [dataSetStatus]);

    React.useEffect(() => {
        if (selectedDataSet == null)
            return;

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
    }, [selectedDataSet]);

    React.useEffect(() => {
        if (selectedDataSet == null) return;

        setEvtStatus('loading');
        const eventConnectionHandle = $.ajax({
            type: "GET",
            url: `${homePath}api/EventSourceDataSet/${selectedDataSet.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: EventSourceTypes.IEventSourceDataSet[]) => {
            setEvtStatus('idle');
            setEventSources(data);
        });

        return () => { if (eventConnectionHandle != null && eventConnectionHandle.abort != null) eventConnectionHandle.abort() }
    }, [selectedDataSet]);

    //Effect to load all parents and channels from the selected dataset
    React.useEffect(() => {
        if (datasources.length == 0 || evtStatus !== 'idle')
            return;

        const channelHandlers = datasources.map((ds) => {
            let dataSourceView = dataSourceViews.find((d) => d.ID === ds.DataSourceID);
            if (dataSourceView == null) publicDataSourceViews.find(d => d.ID === ds.DataSourceID); 
            const implementation: IDataSource<any, any, any> | undefined = AllSources.find(t => t.Name == dataSourceView?.Type);
            if (implementation == null || dataSourceView == null)
                return Promise.resolve([]);
            return implementation.LoadDataSetMeta(dataSourceView as DataSourceTypes.IDataSourceView, selectedDataSet as TrenDAP.iDataSet, ds)
        })

        Promise.all(channelHandlers).then(d => {
            const allChannels: DataSetTypes.IDataSetMetaData[] = d.flat()
            props.SetAllChannels(allChannels);
            const allParents = _.uniqBy(allChannels.map(c => ({ ID: c.ParentID, Name: c.ParentName })), (m) => m.ID);
            setAllParents(allParents);

            //Generate mapping if channels query param is set..
            if (channels != null) {
                const chanMap: [TrenDAP.IChannelKey, string][] = JSON.parse(window.atob(channels));

                const parentKeys = _.uniq(chanMap.map(chan => chan[0].Parent))
                const parentMap: [string, number][] = parentKeys.map((key) => {
                    const chanID = chanMap.find(chan => chan[0].Parent === key)[1]
                    return [allChannels.find(chan => chan.ID === chanID).ParentID, key]
                });

                // ToDo: Add event source to url params
                props.GenerateMapping(chanMap, parentMap, [], allParents, selectedDataSet as TrenDAP.iDataSet, loadData());
                //Remove Channels param from queryParams, since we dont update this param 
                navigate(`${homePath}Workspaces/${workspaceId}/DataSet/${dataSetID}`)
            }
        })
    }, [datasources, evtStatus]);
    
    React.useEffect(() => {
        if (evtStatus !== 'idle' || eventSourceStatus !== 'idle') {
            return;
        }

        setEventSourceMetas(eventSources.map(ds => {
            let eventSourceView = eventSourceViews.find(d => d.ID === ds.EventSourceID);
            if (eventSourceView == null) publicEventSourceViews.find(d => d.ID === ds.EventSourceID); 
            const implementation: IEventSource<any, any, any> | undefined = EventDataSources.find(t => t.Name == eventSourceView?.Type);
            if (implementation == null || eventSourceView == null)
                return undefined;
            const logoString = implementation?.GetLogo != null ? implementation.GetLogo(eventSourceView) : undefined;
            return { ID: ds.ID, SourceType: eventSourceView.Type, Name: eventSourceView.Name, Logo: logoString };
        }).filter(meta => meta != null));

        }, [eventSources, eventSourceStatus]);

    // Effect to initialize parent matches
    React.useEffect(() => {
        const rowIDs = props.WorkSpaceJSON.Rows.map(r => r.Widgets.map(w => w.Channels.filter(c => !isVirtual(c.Key)).map(c => c.Key['Parent'])).flat()).flat();
        const virtualIDs = props.WorkSpaceJSON.VirtualChannels.flatMap(channel => channel.ComponentChannels.map(key => key.Key.Parent));
        const parentID = _.uniq(rowIDs.concat(virtualIDs)).sort((a, b) => a - b);
        if (allParents.length === 0) {
            setSelectedParentKey(parentID.length > 0 ? parentID[0] : null)
            setParentMatches(parentID.map(p => ({
                Key: p,
                Name: 'Parent ' + p,
                Status: 'NoMatch',
                ParentID: null
            })));
        }
        else {
            const parents = allParents.filter(p => p.ID != "")
            const newParentMatches: IParentMatch[] = parentID.map((parent, idx) => {
                const allParentIndex = idx % allParents.length;
                return {
                    Key: parent,
                    Name: 'Parent ' + parent,
                    Status: 'Match',
                    ParentID: parents[allParentIndex].ID
                };
            });

            setSelectedParentKey(newParentMatches.length > 0 ? newParentMatches[0].Key : null)
            setParentMatches(newParentMatches);
        }
    }, [allParents, props.WorkSpaceJSON, props.IsModalOpen]);

    //Effect to intialize event matches
    React.useEffect(() => {
        let loadedEventSourceIndex = 0;
        if (eventSourceMetas.length === 0) return;
        const eventKeys = _.uniqWith(props.WorkSpaceJSON.Rows.map(r => r.Widgets.map(w => w.EventSources).flat()).flat().map(eventSrc => eventSrc.Key), _.isEqual);
        setEventMatches(eventKeys.map(c => {
            const autoMatched = loadedEventSourceIndex < eventSourceMetas.length;
            const newMatch: IEventMatch = {
                Key: c,
                Match: autoMatched ? 'Match' : 'NoMatch',
                ID: autoMatched ? eventSourceMetas[loadedEventSourceIndex].ID : undefined
            }
            loadedEventSourceIndex++;
            return newMatch;
        }));
    }, [props.WorkSpaceJSON.Rows, eventSourceMetas]);

    //Effect to intialize channel matches
    React.useEffect(() => {
        const rowKeys = props.WorkSpaceJSON.Rows.map(r => r.Widgets.map(w => w.Channels).flat()).flat().map(chan => chan.Key).filter(key => !isVirtual(key));
        const virtualKeys = props.WorkSpaceJSON.VirtualChannels.flatMap(channel => channel.ComponentChannels.map(component => component.Key));
        const channelKeys = _.uniqWith(rowKeys.concat(virtualKeys), _.isEqual);
        setChannelMatches(channelKeys.map(c => ({
            Key: c as TrenDAP.IChannelKey,
            Status: 'NoMatch',
            ChannelID: null,
        })));
    }, [props.AllChannels, props.WorkSpaceJSON]);

    //Effect to auto match channels
    React.useEffect(() => {
        if (props.AllChannels.length == 0 || channels != null) return;

        parentMatches.forEach(parentMatch => {
            if (parentMatch.ParentID == null) return;

            const availableChans = props.AllChannels.filter(chan => chan.ParentID === parentMatch.ParentID)

            channelMatches.filter(chan => chan.Status === 'NoMatch' && chan.Key.Parent === parentMatch.Key).forEach(chan => {
                const matchedChans = availableChans.filter(available => chan.Key.Phase === available.Phase && chan.Key.Type === available.Type && chan.Key.Harmonic === available.Harmonic)
                if (matchedChans.length === 1)
                    setChannelMatches(prev => [...prev.map(match => _.isEqual(match.Key, chan.Key) ? ({ ...match, ChannelID: matchedChans[0].ID, Status: 'SingleMatch' as MatchStatus }) : match)])
                else if (matchedChans.length > 1)
                    setChannelMatches(prev => [...prev.map(match => _.isEqual(match.Key, chan.Key) ? ({ ...match, Status: 'MultipleMatches' as MatchStatus, ChannelID: null }) : match)])
                else if (matchedChans.length === 0)
                    setChannelMatches(prev => [...prev.map(match => _.isEqual(match.Key, chan.Key) ? ({ ...match, Status: 'NoMatch' as MatchStatus, ChannelID: null }) : match)])
            })
        })

    }, [parentMatches])

    const loadData = () => {
        if (selectedDataSet == null) {
            throw new TypeError("Data set selected is null");
        }

        const db = new TrenDAPDB();
        props.SetAllEventSources(eventSourceMetas.map(d => ({ ID: d.ID, Name: d.Name, SourceType: d.SourceType, Logo: d?.Logo })));

        return db.ClearTables(['Channel', 'Event', 'Virtual']).then(() =>
            Promise.all(eventSources.map(conn => 
                new Promise<{Events: TrenDAP.IEvent[], EventMeta: TrenDAP.IEventSourceMetaData}>((resolve, reject) => {
                    let view = eventSourceViews.find(eventView => eventView.ID === conn.EventSourceID);
                    if (view == null) publicEventSourceViews.find(d => d.ID === conn.EventSourceID); 
                    const implementation: IEventSource<any, any, any> | undefined = EventDataSources.find(evtSrc => evtSrc.Name === view?.Type);
                    const meta = eventSourceMetas.find(evtMeta => evtMeta.ID === conn.ID);
                    if (view == null || meta == null || implementation == null)
                        resolve({Events: [], EventMeta: meta as TrenDAP.IEventSourceMetaData});
                    else
                        implementation.Load(view, selectedDataSet as TrenDAP.iDataSet, conn).then(d =>
                            resolve({ EventMeta: meta as  TrenDAP.IEventSourceMetaData, Events: d}),
                        (arg) => reject(arg));
                })
            ))
        ).then((metasWithEvents) => 
            new Promise<TrenDAP.IEvent[] | undefined>((resolve, reject) => {
                if (metasWithEvents.length === 0) {
                    resolve(undefined);
                    return;
                }
                db.AddMultipleEvents(metasWithEvents.map(evt => ({ID: evt.EventMeta.ID, Data: evt.Events}))).then(() => {
                    // Assumption that 0 is user error, meant to be null.
                    // Not neccessarily true, but the use case of a 0 window is pretty narrow...
                    resolve((selectedDataSet.EventWindowSize != null && selectedDataSet.EventWindowSize !== 0) ?
                        metasWithEvents.flatMap(d => d.Events) : undefined);
                }, (arg) => reject(arg));
        })).then((allEvents) =>
            Promise.all(datasources.map((ds) => {
                let dataSourceView = dataSourceViews.find((d) => d.ID === ds.DataSourceID);
                if (dataSourceView == null) publicDataSourceViews.find(d => d.ID === ds.DataSourceID);
                const implementation: IDataSource<any, any, any> | undefined = AllSources.find(t => t.Name == dataSourceView?.Type);
                if (implementation == null || dataSourceView == null)
                    return Promise.resolve([] as DataSetTypes.IDataSetData[]);
                return implementation.LoadDataSet(dataSourceView as DataSourceTypes.IDataSourceView, selectedDataSet as TrenDAP.iDataSet, ds, allEvents);
            }))
        ).then(d => db.AddMultiple(d.flat()));;
    }

    const disallowStep = React.useCallback(() => {
        switch (step) {
            case dataSetStep: return selectedDataSet == null;
            case parentStep: return channelErrors?.length > 0;
            case eventStep: return false;
        }
    }, [selectedDataSet, channelErrors, eventErrors, step]);

    const isStepSkipped = React.useCallback((checkedStep: number) => {
        switch(checkedStep) {
            default: return false;
            case parentStep: return parentMatches.length === 0 && datasources.length !== 0;
            case eventStep: return eventMatches.length === 0 && evtStatus === 'idle';
        }
    }, [parentMatches, datasources, eventMatches, evtStatus]);

    const getToolTipContent = React.useCallback(() => {
        switch (step) {
            case dataSetStep: return selectedDataSet == null ?
                ["Select a Data Set to continue"] : [];
            case parentStep: return channelErrors;
            case eventStep: return eventErrors;
        }
    }, [selectedDataSet, channelErrors, eventErrors, step]);

    return (
        <>
            <Modal
                ConfirmBtnClass={`btn-${step === lastStep ? 'primary' : 'success'} mr-auto pull-left`}
                CancelBtnClass={"btn-danger pull-right"}
                Show={props.IsModalOpen}
                ShowX={true}
                ConfirmText={step === lastStep ? 'Apply' : 'Next'}
                CancelText={'Previous'}
                ShowCancel={step !== firstStep}
                Title={'Select a Data Set'}
                CallBack={(conf, isButton) => {
                    if (conf) {
                        if (step >= lastStep) {
                            props.GenerateMapping(
                                channelMatches.map(match => [match.Key, match.ChannelID] as [TrenDAP.IChannelKey, string]),
                                parentMatches.map(match => [match.ParentID, match.Key] as [string, number]),
                                eventMatches.map(match => [match.Key, match.ID] as [number, number]),
                                allParents,
                                selectedDataSet as TrenDAP.iDataSet,
                                loadData()
                            );
                            setStep(firstStep);
                            props.SetIsModalOpen(false);
                        }
                        else
                            setStep(s => {
                                let newStep = s;
                                do {
                                    newStep++;
                                } while (isStepSkipped(newStep));
                                if (newStep > lastStep) {
                                    props.GenerateMapping(
                                        channelMatches.map(match => [match.Key, match.ChannelID] as [TrenDAP.IChannelKey, string]),
                                        parentMatches.map(match => [match.ParentID, match.Key] as [string, number]),
                                        eventMatches.map(match => [match.Key, match.ID] as [number, number]),
                                        allParents,
                                        selectedDataSet as TrenDAP.iDataSet,
                                        loadData()
                                    );
                                    props.SetIsModalOpen(false);
                                    return firstStep;
                                }
                                return newStep;
                            });
                    } else if (isButton) {
                        if (step <= firstStep) {
                            setStep(firstStep);
                            props.SetIsModalOpen(false);
                        } else
                            setStep(s => {
                                let newStep = s;
                                do {
                                    newStep--;
                                } while (isStepSkipped(newStep));
                                if (newStep <= firstStep) return firstStep;
                                return newStep;
                            });
                    }
                    else {
                        setStep(firstStep);
                        props.SetIsModalOpen(false);
                    }

                }}
                Size="lg"
                DisableConfirm={disallowStep()}
                ConfirmShowToolTip={getToolTipContent().length > 0}
                ConfirmToolTipContent={getToolTipContent().map((e, i) => <p key={2 * i + 1}><ReactIcons.CrossMark Color='red' /> {e} </p>)}
            >
                <div className="container-fluid d-flex flex-column p-0" style={{ height: 'calc(-210px + 100vh - 2rem)' }}>
                    <div className="row h-100">
                        {
                            step === dataSetStep ?
                                <div className="col-12 h-100">
                                    <div className="d-flex flex-column h-100">
                                        Data Set
                                        <ReactTable.Table<TrenDAP.iDataSet>
                                            TableClass="table table-hover"
                                            TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            SortKey={dataSetSortField === "UpdatedOn" ? "Name" : dataSetSortField}
                                            OnClick={data => { setSelectedDataSet(data.row); navigate(`${homePath}Workspaces/${workspaceId}/DataSet/${data.row.ID}`) }}
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
                                </div> : <></>
                        }
                                {step === parentStep ?
                                    <div className="col-12 h-100">
                                        <div className="d-flex flex-column h-50">
                                            Meters or Assets
                                            <>
                                                <ReactTable.Table<IParentMatch>
                                                    TableClass={"table table-hover"}
                                                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                                    TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                                                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                                    OnClick={({ row }) => setSelectedParentKey(row.Key)}
                                                    OnSort={() => { }}
                                                    SortKey={''}
                                                    Data={parentMatches}
                                                    Ascending={false}
                                                    KeySelector={(row, index) => index as number}
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
                                                            const allMatched = channelMatches.filter(chan => chan.Key.Parent === item.Key && (chan.Status === 'NoMatch' || chan.Status === 'MultipleMatches'))
                                                            if (allMatched.length === 0)
                                                                return <ReactIcons.CheckMark Color="green" />
                                                            else
                                                                return <ReactIcons.CrossMark Color="red" />
                                                        }}>
                                                        {'\u200B'}
                                                    </ReactTable.Column>
                                                </ReactTable.Table>
                                            </>
                                        </div>
                                        <div className="d-flex flex-column h-50">
                                            {parentChannelMatches.length > 0 ?
                                                <>
                                                    Channels
                                                    <ReactTable.Table<IndexedChannelMatch>
                                                        TableClass={"table table-hover"}
                                                        TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                                        TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                                        TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                                                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                                        OnClick={() => { }}
                                                        OnSort={() => { }}
                                                        SortKey={''}
                                                        Data={parentChannelMatches}
                                                        Ascending={dataSetAscending}
                                                        KeySelector={(row, index) => `${row.Key.Phase ?? ''}~${row.Key.Type ?? ''}~${row.Key.Parent ?? ''}~${row.Key.Harmonic ?? -1}~${index}`}
                                                    >
                                                        <ReactTable.Column<IndexedChannelMatch>
                                                            Key={'Key'}
                                                            Field={'Key'}
                                                            Content={({ item }) =>
                                                                <p>{`${item.Key.Type ?? ''} ${item.Key.Phase ?? ''}`}</p>
                                                            }>
                                                            {'\u200B'}
                                                        </ReactTable.Column>
                                                        <ReactTable.Column<IndexedChannelMatch>
                                                            Key={'Channel'}
                                                            Field={'ChannelID'}
                                                            Content={(row) => <Select<IChannelMatch> key={row.index} EmptyOption={true} Record={row.item}
                                                                Options={channelOptions} Label={''} Field={'ChannelID'} Setter={(item) => setChannelMatches(channels => {
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
                                                : <p>Select a Meter or Asset</p>}
                                        </div>
                                    </div>

                            : <></>
                        }
                        {
                            step === eventStep ?
                                <div className="col-12 h-100">
                                    <div className="d-flex flex-column h-100">
                                        Event Sources
                                        <ReactTable.Table<IEventMatch>
                                            TableClass={"table table-hover"}
                                            TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            OnClick={() => { }}
                                            OnSort={() => { }}
                                            SortKey={''}
                                            Data={eventMatches}
                                            Ascending={false}
                                            KeySelector={(_, index) => index}
                                            Selected={() => false}
                                        >
                                            <ReactTable.Column<IEventMatch>
                                                Key={'Name'}
                                                Field={'ID'}
                                                Content={(row) => `Event Source ${row.index + 1}` }
                                            >Event Sources</ReactTable.Column>
                                            <ReactTable.Column<IEventMatch>
                                                Key={'Key'}
                                                Field={'Key'}
                                                Content={(row) => <Select<IEventMatch> key={row.index} EmptyOption={true} Record={row.item}
                                                    Options={eventSourceMetas.map(p => ({ Value: p.ID.toString(), Label: p.Name }))}
                                                    Label={''} Field={'ID'} Setter={(newRecord) => setEventMatches(matches => {
                                                        const clonedMatches = _.cloneDeep(matches);
                                                        const index = clonedMatches.findIndex(match => match.Key === row.item.Key);
                                                        if (newRecord?.ID == null) {
                                                            clonedMatches[index] = { ...newRecord, ID: undefined, Match: 'NoMatch' };
                                                        } else {
                                                            const newID = _.toInteger(newRecord.ID);
                                                            const multiMatch = clonedMatches.filter(match => match?.ID === newID).length > 0;
                                                            clonedMatches[index] = { ...newRecord, ID: newID, Match: multiMatch ? 'MultipleMatches' : 'Match' };
                                                        }
                                                        return clonedMatches;
                                                    })} />}
                                            >
                                                {'\u200B'}
                                            </ReactTable.Column>
                                            <ReactTable.Column<IEventMatch>
                                                Key={'ID'}
                                                Field={'ID'}
                                                Content={({ item }) => {
                                                    switch (item.Match) {
                                                        case 'NoMatch':
                                                            return <ReactIcons.CrossMark Color="red" />
                                                        case 'MultipleMatches':
                                                            return <ReactIcons.Warning Color="black" />
                                                        case 'Match':
                                                            return <ReactIcons.CheckMark Color="green" />
                                                    }
                                                }}>
                                                {'\u200B'}
                                            </ReactTable.Column>
                                        </ReactTable.Table>
                                    </div>
                                </div> : <></>
                        }
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default DataSetSelector;