//******************************************************************************************************
//  DataSourceWrapper.tsx - Gbtc
//
//  Copyright (c) 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  04/10/2024 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { ServerErrorIcon, Modal, ToolTip, Warning, TabSelector } from '@gpa-gemstone/react-interactive';
import { CreateGuid } from '@gpa-gemstone/helper-functions';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ErrorBoundary } from '@gpa-gemstone/common-pages';
import { Input, CheckBox } from '@gpa-gemstone/react-forms';

import { TrenDAP, DataSetTypes } from '../../global';
import { useAppSelector } from '../../hooks';

import { TextWidget } from './Implementations/Text';
import { TableWidget } from './Implementations/Table';
import { StatsWidget } from './Implementations/Stats';
import { HistogramWidget } from './Implementations/Histogram';
import { XvsYWidget } from './Implementations/XvsY';
import { ProfileWidget } from './Implementations/Profile';
import { TrendWidget } from './Implementations/Trend';
import { Map } from './Implementations/Map';

import { SelectEditMode } from '../../Store/GeneralSettingsSlice';

import TrenDAPDB from '../DataSets/TrenDAPDB';
import { WidgetTypes } from './Interfaces'
import _ from 'lodash';
import ChannelSelector from './ChannelSelector';
import EventSelector from './EventSelector';
import { isPercent, isVirtual } from './HelperFunctions';
import { AddChannelToMap } from '../Workspaces/Workspace';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const AllWidgets: WidgetTypes.IWidget<any, any, any>[] = [TextWidget, TableWidget, StatsWidget, HistogramWidget, XvsYWidget, ProfileWidget, TrendWidget, Map];

interface IProps {
    Widget: TrenDAP.IWidgetModel,
    RemoveWidget: () => void,
    UpdateWidget: (widget: TrenDAP.IWidgetModel) => void,
    AllChannels: DataSetTypes.IDataSetMetaData[],
    AllVirtualChannels: TrenDAP.IVirtualChannelLoaded[],
    AllEventSources: TrenDAP.IEventSourceMetaData[],
    ChannelMap: TrenDAP.IChannelMap,
    SetChannelMapVersion: (version: number) => void,
    EventMapVersion: number,
    SetEventMapVersion: (version: number) => void
    ParentMap: React.MutableRefObject<Map<string, number>>,
    EventMap: React.MutableRefObject<Map<number, number>>,
}

export const WidgetWrapper: React.FC<IProps> = (props) => {
    const Implementation: WidgetTypes.IWidget<any, any, any> | undefined = React.useMemo(() => AllWidgets.find(item => item.Name === props.Widget.Type), [props.Widget.Type]);
    const guid = React.useRef<string>(CreateGuid());

    const editMode = useAppSelector(SelectEditMode);
    
    const [headerOpacity, setHeaderOpacity] = React.useState<number>(1);
    const [showSettingsModal, setShowSettingsModal] = React.useState<boolean>(false);
    const [headerHover, setHeaderHover] = React.useState<boolean>(false);
    const [settingHover, setSettingHover] = React.useState<boolean>(false);

    const [data, setData] = React.useState<WidgetTypes.IWidgetData<any>[]>([]);
    const [events, setEvents] = React.useState<WidgetTypes.IWidgetEvents<any>[]>([]);

    const [tab, setTab] = React.useState<string>('channel');

    const [allSelectableChannels, setAllSelectableChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>([]);
    const [localChannels, setLocalChannels] = React.useState<WidgetTypes.ISelectedChannels<any>[]>([]);
    const [localEventSources, setLocalEventSources] = React.useState<WidgetTypes.ISelectedEvents<any>[]>([]);
    const [localSetting, setLocalSetting] = React.useState<any | null>(null);
    const [localCommonSettings, setCommonLocalSettings] = React.useState<WidgetTypes.ICommonSettings>({ Width: props.Widget.Width, Label: props.Widget.Label, ShowHeader: props.Widget.ShowHeader });
    const [showWarning, setShowWarning] = React.useState<boolean>(false);

    const Settings: any = React.useMemo(() => {
        if (props.Widget.Settings == null)
            return Implementation?.DefaultSettings ?? {};
        const settings = _.cloneDeep(Implementation?.DefaultSettings ?? {});
        let custom = {};
        if (props.Widget.Settings != null)
            custom = props.Widget.Settings;

        for (const [k] of Object.entries(Implementation?.DefaultSettings ?? {})) {
            if (Object.prototype.hasOwnProperty.call(custom, k) != null)
                settings[k] = _.cloneDeep(custom[k]);
        }

        return settings;
    }, [Implementation, props.Widget.Settings, showSettingsModal]);

    React.useEffect(() => {
        // Todo: Should we load in a phase similar to how we do for parent name?
        setAllSelectableChannels(props.AllChannels.concat(props.AllVirtualChannels.map(virtualChannel => ({
                ID: virtualChannel.ID,
                Name: virtualChannel.Name,
                ParentID: virtualChannel.ParentID ?? 'N/A',
                ParentName: virtualChannel.ParentName ?? 'N/A',
                Phase: 'virtual',
                Type: 'virtual'
        }))));
    }, [props.AllChannels, props.AllVirtualChannels]);


    React.useEffect(() => {
        if (props.Widget.Channels == null || props.Widget.Channels.length === 0 || allSelectableChannels.length === 0) {
            setLocalChannels([])
            return
        }
        const channels: WidgetTypes.ISelectedChannels<any>[] = props.Widget.Channels.map(chan => {
            let channelId: string;
            if (isVirtual(chan.Key)) channelId = chan.Key as string;
            else channelId = props.ChannelMap.Map.current.get(chan.Key);

            const metaData = allSelectableChannels.find(channel => channel.ID === channelId);
            return { ...chan, MetaData: metaData };
        });
        setLocalChannels(channels)
    }, [props.Widget.Channels, allSelectableChannels, props.ChannelMap.Version, showSettingsModal])

    React.useEffect(() => {
        if (Implementation == null || props.Widget.EventSources == null || props.AllEventSources == null || props.AllEventSources.length == 0) {
            setLocalEventSources([]);
            return;
        }
        const eventSources: WidgetTypes.ISelectedEvents<any>[] = props.Widget.EventSources.map(widgetEventSource => {
            const id = props.EventMap.current.get(widgetEventSource.Key);
            const sourceMetaData: TrenDAP.IEventSourceMetaData = props.AllEventSources.find(source => source.ID === id);
            return { ...widgetEventSource, ...sourceMetaData };
        });

        setLocalEventSources(eventSources);
    }, [props.Widget?.EventSources, props.AllEventSources, showSettingsModal, Implementation])

    React.useEffect(() => {
        setCommonLocalSettings({ Width: props.Widget.Width, Label: props.Widget.Label, ShowHeader: props.Widget.ShowHeader })
    }, [props.Widget.Width, props.Widget.Label, props.Widget.ShowHeader, showSettingsModal])

    React.useEffect(() => {
        setLocalSetting(Settings)
    }, [Settings, showSettingsModal])

    React.useEffect(() => {
        if (props.Widget.Channels.length === 0 || props.Widget.Channels == null || allSelectableChannels.length === 0) {
            setData([]);
            return;
        }

        const db = new TrenDAPDB();

        const channels = props.Widget.Channels
            .filter(channel => !isVirtual(channel.Key)).map(channel =>
            ({
                ChannelSettings: channel.ChannelSettings,
                ID: props.ChannelMap.Map.current.get(channel.Key),
                ChannelKey: channel.Key as TrenDAP.IChannelKey
            })
        );
        const readRealPromise: Promise<WidgetTypes.IWidgetData<any>[]> = db.ReadMany(channels).then(data => {
            return Promise.resolve(data.map(item => ({
                ...item.Data.Data,
                ChannelSettings: item.ChannelSettings,
                ChannelKey: item.ChannelKey
            })));
        });

        const virtualChannels = props.Widget.Channels
            .filter(channel => isVirtual(channel.Key)).map(channel => {
                const virtualChannel = props.AllVirtualChannels.find(chan => chan.ID === channel.Key);
                const virtualChannelMeta = allSelectableChannels.find(chan => chan.ID === channel.Key);
                return {
                    Info: virtualChannelMeta as DataSetTypes.IDataSetMetaData,
                    VirtualInfo: virtualChannel as TrenDAP.IVirtualChannelLoaded,
                    ChannelKey: channel.Key as string,
                    ChannelSettings: channel.ChannelSettings
                };
            }
        );
        const readVirtualPromise: Promise<WidgetTypes.IWidgetData<any>[]> = db.ReadManyVirtual(virtualChannels, props.ChannelMap.Map.current).then(data => {
            return Promise.resolve(data.map(item => ({
                ...item.Data,
                ChannelSettings: item.ChannelSettings,
                ChannelKey: item.ChannelKey
            })));
        });

        Promise.all([readRealPromise, readVirtualPromise]).then((allData) => setData(allData.flat()));

    }, [props.Widget.Channels, props.ChannelMap.Version, allSelectableChannels]);

    React.useEffect(() => {
        if (props.Widget.EventSources == null || props.Widget.EventSources.length === 0) {
            setEvents([]);
            return;
        }

        const eventSources: WidgetTypes.ISelectedEvents<any>[] = props.Widget.EventSources
            .map(evtSrc => ({ ...evtSrc, ...props.AllEventSources.find(src => props.EventMap.current.get(evtSrc.Key) === src.ID) }));

        const db = new TrenDAPDB();
        db.ReadManyEvents(eventSources).then(eventData => setEvents(eventData));
    }, [props.Widget.EventSources, props.EventMapVersion]);

    React.useEffect(() => {
        if (!props.Widget.ShowHeader && editMode)
            setHeaderOpacity(0.5)
        else setHeaderOpacity(1)
    }, [props.Widget.ShowHeader, editMode]);

    const addOrChangeEventSource = React.useCallback((newSource: WidgetTypes.ISelectedEvents<any>) => {
        setLocalEventSources(currentLocal => {
            const evtSrcs = [...currentLocal];
            const ind = evtSrcs.findIndex(evtSrc => evtSrc.Key === newSource.Key);
            if (ind === -1) evtSrcs.push(newSource);
            else evtSrcs[ind] = newSource;
            return evtSrcs;
        });
    }, []);

    const removeEventSource = React.useCallback((newSource: WidgetTypes.ISelectedEvents<any>) => {
        setLocalEventSources(currentLocal => {
            const evtSrcs = [...currentLocal];
            const ind = currentLocal.findIndex(src => src.Key === newSource.Key);
            if (ind !== -1) evtSrcs.splice(ind, 1);
            else console.error("Could not find current local event source with key " + newSource.Key);
            return evtSrcs;
        });
    }, []);

    function handleAddChannel(channelID: string, defaultSetting: any) {
        const channel = allSelectableChannels.find(channel => channel.ID === channelID) as DataSetTypes.IDataSetMetaData;
        const isReal = props.AllChannels.findIndex(channel => channel.ID === channelID) !== -1;
        let key: TrenDAP.IChannelKey | string;
        if (isReal) {
            // Parent of key becomes overwritten when saved, parent is just temp for now
            key = { Phase: channel.Phase, Type: channel.Type, Harmonic: channel.Harmonic, Parent: -1 }
        } else key = channel.ID;

        const newChannel = {
            MetaData: channel,
            ChannelSettings: defaultSetting,
            Key: key,
        };

        setLocalChannels(prevLocalChannels => {
            return [...prevLocalChannels, newChannel];
        });
    }

    const handleUpdateWidget = (confBtn: boolean, deleteBtn: boolean) => {
        if (confBtn) {
            let mapChanged = false;
            const updatedChannels = localChannels.map(channel => {
                // Channels in virtual should already be a part of the map
                if (isVirtual(channel.Key)) return { ChannelSettings: channel.ChannelSettings, Key: channel.Key };

                // Checking if channel exists in map
                const key = { ...(channel.Key as TrenDAP.IChannelKey) };
                if (!props.ChannelMap.Map.current.has(key)) {
                    // Need to add channel to map, and update key
                    mapChanged = true;
                    const parentKey = AddChannelToMap(key, channel.MetaData, props.ParentMap.current, props.ChannelMap.Map.current);
                    key.Parent = parentKey;
                }
                return { ChannelSettings: channel.ChannelSettings, Key: key }
            });
            if (mapChanged) props.SetChannelMapVersion(props.ChannelMap.Version + 1);

            let eventMapChanged = false;
            let newKey: null | number = null;
            const updatedEventSources = localEventSources.map(src => {
                // Checking if channel exists in map
                if (props.EventMap.current.has(src.Key)) return { Key: src.Key, EventSettings: src.EventSettings };
                else {
                    const foundKey = [...props.EventMap.current.keys()].find(key => props.EventMap.current.get(key) === src.ID);
                    if (foundKey != null) return { Key: foundKey, EventSettings: src.EventSettings };
                    // Need to add channel to map, and update key
                    eventMapChanged = true;
                    if (newKey == null) newKey = Math.max(-1, ...props.EventMap.current.keys());
                    newKey++;
                    props.EventMap.current.set(newKey, src.ID);
                    return { Key: newKey, EventSettings: src.EventSettings };
                }
            });
            if (eventMapChanged) props.SetEventMapVersion(props.EventMapVersion + 1);


            props.UpdateWidget({
                ...props.Widget,
                Settings: localSetting,
                Width: localCommonSettings.Width,
                Label: localCommonSettings.Label,
                ShowHeader: localCommonSettings.ShowHeader,
                Channels: updatedChannels,
                EventSources: updatedEventSources
            });
            setShowSettingsModal(false);
        }
        else if (!confBtn && deleteBtn)
            setShowWarning(true);
        else if (!confBtn && !deleteBtn)
            setShowSettingsModal(false);
    }

    return <>
        {Implementation == null ? <div className="card">
            <div className="card-header">
                {props.Widget.Label} - Error
            </div>
            <div className="card-body">
                <ServerErrorIcon Show={true} Label={`Widget ${props.Widget.Label} is not available. Please contact your system administrator.`} Size={150} />
            </div>
        </div>
            : <ErrorBoundary HeaderErrorMessage={`${props.Widget.Label} - Error`} BodyErrorMessage={`Widget ${props.Widget.Label} has encoutered an error.`} Width={`${props.Widget.Width}%`} Height={'100%'}>
                <div className="card" style={{ width: `${props.Widget.Width}%`, height: '100%', overflowY: 'hidden' }}>
                    {props.Widget.ShowHeader || editMode ?
                        <div className="card-header" style={{ opacity: headerOpacity }} onMouseEnter={() => setHeaderHover(true)} onMouseLeave={() => setHeaderHover(false)}>
                            <div className="row">
                                <div className="d-flex col-6 justify-content-start">
                                    <span>{props.Widget.Label}</span>
                                </div>
                                <div className="d-flex col-6 justify-content-end mt-auto">
                                    <>
                                        <button className={"btn"} data-tooltip={'widget-setting-btn' + guid.current} style={{ padding: 0, visibility: editMode && headerHover ? 'visible' : 'hidden' }}
                                            onClick={() => setShowSettingsModal(true)}
                                            onMouseEnter={() => setSettingHover(true)} onMouseLeave={() => setSettingHover(false)}>
                                            <ReactIcons.Settings />
                                        </button>
                                        <ToolTip Show={settingHover} Target={'widget-setting-btn' + guid.current} Position="bottom">Widget Settings</ToolTip>
                                    </>
                                </div>
                            </div>
                        </div> : null}
                    <div className="card-body">
                        <Implementation.WidgetUI
                            Events={events}
                            Data={data}
                            Settings={Settings}
                        />
                    </div>
                </div>
                <Modal
                    ConfirmBtnClass="btn btn-primary mr-auto"
                    Show={showSettingsModal}
                    ShowX={true}
                    ConfirmText='Save'
                    Title={`${props.Widget.Label} Settings`}
                    CallBack={(conf, deleteBtn) => handleUpdateWidget(conf, deleteBtn)}
                    CancelText={"Delete Widget"}
                    DisableConfirm={!isPercent(localCommonSettings.Width)}
                    ConfirmShowToolTip={!isPercent(localCommonSettings.Width)}
                    ConfirmToolTipContent={<span>Enter a valid width</span>}
                    Size="xlg"
                    BodyStyle={{ height: 'calc(-210px + 100vh)' }}
                >
                    <div className="container-fluid d-flex flex-column p-0 h-100">
                        <div className="row h-100">
                            <div className="col-4 h-100" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div className="row">
                                    <div className="col-12">
                                        <Input<WidgetTypes.ICommonSettings> Field='Label' Record={localCommonSettings} Type='text' Setter={(r) => setCommonLocalSettings(r)} Valid={() => true} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <Input<WidgetTypes.ICommonSettings> Label="Width (%)" Field='Width' Record={localCommonSettings} Type='integer' Setter={(r) => setCommonLocalSettings(r)}
                                            Valid={(item) => isPercent(localCommonSettings[item] as number)} Feedback='Width must be a valid percent and greater than 5' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <CheckBox<WidgetTypes.ICommonSettings> Field='ShowHeader' Record={localCommonSettings} Setter={r => setCommonLocalSettings(r)} Label="Show Widget Header" />
                                    </div>
                                </div>
                                {Implementation?.SettingsUI === undefined ? <></> : <Implementation.SettingsUI
                                    Settings={localSetting ?? Settings}
                                    SetSettings={setLocalSetting}
                                    ChannelSettings={localChannels.map(chan => chan.ChannelSettings)}
                                />}
                            </div>
                            <div className="col-8 h-100" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <TabSelector CurrentTab={tab} SetTab={setTab} Tabs={
                                    [{ Id: 'channel', Label: 'Channels' },
                                        { Id: 'evtSrc', Label: 'Event Sources' }]} />
                                {tab === 'channel' ?
                                    Implementation?.ChannelSelectionUI != null ?
                                        <Implementation.ChannelSelectionUI
                                            AddChannel={handleAddChannel}
                                            SetChannelSettings={(channelKey, settings) => {
                                                setLocalChannels(prevChannels => {
                                                    const updatedChans = prevChannels.map(chan =>
                                                        _.isEqual(chan.Key, channelKey) ? { ...chan, ChannelSettings: settings } : chan
                                                    );

                                                    return _.isEqual(updatedChans, prevChannels) ? prevChannels : updatedChans;
                                                });
                                            }}
                                            RemoveChannel={channel => setLocalChannels(channels => {
                                                const updatedChannels = [...channels];
                                                const index = updatedChannels.findIndex(chan => chan.MetaData.ID === channel);
                                                index !== -1 ? updatedChannels.splice(index, 1) : null;
                                                return updatedChannels;
                                            })}
                                            AllChannels={allSelectableChannels}
                                            SelectedChannels={localChannels}
                                            SetSettings={setLocalSetting}
                                            Settings={localSetting}
                                        /> : <ChannelSelector
                                            AddChannel={handleAddChannel}
                                            SetChannelSettings={(channelKey, settings) => {
                                                setLocalChannels(prevChannels => {
                                                    const updatedChans = prevChannels.map(chan =>
                                                        _.isEqual(chan.Key, channelKey) ? { ...chan, ChannelSettings: settings } : chan
                                                    );

                                                    return _.isEqual(updatedChans, prevChannels) ? prevChannels : updatedChans;
                                                });
                                            }}
                                            RemoveChannel={channel => setLocalChannels(channels => {
                                                const updatedChannels = [...channels];
                                                const index = updatedChannels.findIndex(chan => chan.MetaData.ID === channel);
                                                index !== -1 ? updatedChannels.splice(index, 1) : null;
                                                return updatedChannels;
                                            })}
                                            AllChannels={allSelectableChannels}
                                            SelectedChannels={localChannels}
                                            SetSettings={setLocalSetting}
                                            Settings={localSetting}
                                        />
                                : <></>}
                                {tab === 'evtSrc' ?
                                    Implementation?.EventSourceSelectionUI !== undefined ?
                                        <Implementation.EventSourceSelectionUI AddOrEditSource={addOrChangeEventSource} RemoveSource={removeEventSource}
                                            AllEventSources={props.AllEventSources} SelectedSources={localEventSources} /> :
                                        <EventSelector AddOrEditSource={addOrChangeEventSource} RemoveSource={removeEventSource}
                                            AllEventSources={props.AllEventSources} SelectedSources={localEventSources} DefaultSettings={Implementation.DefaultEventSourceSettings} />
                                : <></>}
                            </div>
                        </div>
                    </div>
                </Modal>
                <Warning Title="Delete Widget" Show={showWarning} Message={"Are you sure you want to delete this widget?"} CallBack={(confirmed) => {
                    if (confirmed) {
                        props.RemoveWidget();
                        setShowSettingsModal(false);
                    }
                    setShowWarning(false);
                }} />
            </ErrorBoundary>
        }
    </>
}

export default WidgetWrapper;