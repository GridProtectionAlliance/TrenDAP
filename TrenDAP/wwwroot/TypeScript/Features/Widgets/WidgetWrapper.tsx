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
import { isPercent } from './HelperFunctions';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const AllWidgets: WidgetTypes.IWidget<any, any, any>[] = [TextWidget, TableWidget, StatsWidget, HistogramWidget, XvsYWidget, ProfileWidget, TrendWidget, Map];

interface IProps {
    Widget: TrenDAP.IWidgetModel,
    RemoveWidget: () => void,
    UpdateWidget: (widget: TrenDAP.IWidgetModel) => void,
    AllChannels: DataSetTypes.IDataSetMetaData[],
    AllEventSources: TrenDAP.IEventSourceMetaData[],
    ChannelMap: TrenDAP.IChannelMap,
    SetChannelMapVersion: (version: number) => void,
    EventMapVersion: number,
    SetEventMapVersion: (version: number) => void
    ParentMap: React.MutableRefObject<Map<string, number>>,
    EventMap: React.MutableRefObject<Map<number, number>>,
}

const WidgetWrapper: React.FC<IProps> = (props) => {
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
        if (props.Widget.Channels.length === 0 || props.Widget.Channels == null || props.AllChannels.length == 0) {
            setLocalChannels([])
            return
        }
        const channels: WidgetTypes.ISelectedChannels<any>[] = props.Widget.Channels.map(chan => ({ ...chan, MetaData: props.AllChannels.find(c => c.ID === props.ChannelMap.Map.current.get(chan.Key)) as DataSetTypes.IDataSetMetaData }))
        setLocalChannels(channels)
    }, [props.Widget.Channels, props.AllChannels, props.ChannelMap.Version, showSettingsModal])

    React.useEffect(() => {
        if (Implementation == null || props.Widget.EventSources == null || props.AllEventSources == null || props.AllEventSources.length == 0) {
            setLocalEventSources([]);
            return;
        }
        const eventSources: WidgetTypes.ISelectedEvents<any>[] = props.AllEventSources.map(evtSrc => {
            let eventSourceKey = props.EventMap.current.get(evtSrc.ID);
            if (eventSourceKey == null) {
                eventSourceKey = props.EventMap.current.size;
                props.EventMap.current.set(evtSrc.ID, eventSourceKey);
                props.SetEventMapVersion(props.EventMapVersion + 1);
            }
            const widgetSettings: TrenDAP.IWidgetEventSources<any> = props.Widget.EventSources.find(src => src.Key === eventSourceKey) ??
                { Key: eventSourceKey, Enabled: false, EventSettings: Implementation.DefaultEventSourceSettings };
            return { ...evtSrc, ...widgetSettings };
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
        if (props.Widget.Channels.length === 0 || props.Widget.Channels == null) {
            setData([]);
            return;
        }

        const channels = props.Widget.Channels.map(channel => ({ ChannelSettings: channel.ChannelSettings, ID: props.ChannelMap.Map.current.get(channel.Key), ChannelKey: channel.Key }));
        const db = new TrenDAPDB();

        db.ReadMany(channels).then(data => {
            const allData = data.map(item => ({
                ...item.Data.Data,
                ChannelSettings: item.ChannelSettings,
                ChannelKey: item.ChannelKey
            }));
            setData(allData);
        });

    }, [props.Widget.Channels, props.ChannelMap.Version]);

    React.useEffect(() => {
        if (props.Widget.EventSources == null || props.Widget.EventSources.length === 0) {
            setEvents([]);
            return;
        }

        const eventSources: WidgetTypes.ISelectedEvents<any>[] = props.Widget.EventSources
            .filter(evtSrc => evtSrc.Enabled)
            .map(evtSrc => ({ ...evtSrc, ...props.AllEventSources.find(src => props.EventMap.current.get(src.ID) === evtSrc.Key) }));

        const db = new TrenDAPDB();
        db.ReadManyEvents(eventSources).then(eventData => setEvents(eventData));
    }, [props.Widget.EventSources, props.EventMapVersion]);

    React.useEffect(() => {
        if (!props.Widget.ShowHeader && editMode)
            setHeaderOpacity(0.5)
        else setHeaderOpacity(1)
    }, [props.Widget.ShowHeader, editMode]);

    function handleChangeEventSource(newSource: WidgetTypes.IWidgetEvents<any>) {
        const evtSrcs = [...localEventSources];
        const ind = localEventSources.findIndex(src => src.Key === newSource.Key);
        evtSrcs[ind] = newSource;
        setLocalEventSources(evtSrcs);
    }

    function handleAddChannel(channelID: string, defaultSetting: any) {
        const channel = props.AllChannels.find(channel => channel.ID === channelID) as DataSetTypes.IDataSetMetaData;
        let uniqParent = localChannels.reduce((max, chan) => {
            return chan.Key.Parent > max ? chan.Key.Parent : max;
        }, 0);

        uniqParent = localChannels.length === 0 ? 0 : uniqParent + 1;
        const key = { Phase: channel.Phase, Type: channel.Type, Harmonic: channel.Harmonic, Parent: uniqParent }
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
            const updatedChannels = [...localChannels];
            const hasChannelsChanged = !_.isEqual(localChannels.map(chan => ({ Key: chan.Key, ChannelSettings: chan.ChannelSettings })), props.Widget.Channels)
            if (hasChannelsChanged)
                updatedChannels.forEach(channel => {
                    AddChannelToMap(channel.Key, channel.MetaData)
                    const updatedKey = { ...channel.Key, Parent: props.ParentMap.current.get(channel.MetaData.ParentID) } as TrenDAP.IChannelKey
                    channel.Key = updatedKey
                });

            props.UpdateWidget({
                ...props.Widget,
                Settings: localSetting,
                Width: localCommonSettings.Width,
                Label: localCommonSettings.Label,
                ShowHeader: localCommonSettings.ShowHeader,
                Channels: hasChannelsChanged ? updatedChannels.map(chan => ({ ChannelSettings: chan.ChannelSettings, Key: chan.Key })) : props.Widget.Channels,
                EventSources: localEventSources.map(src => ({Key: src.Key, EventSettings: src.EventSettings, Enabled: src.Enabled}))
            })
            setShowSettingsModal(false)
        }
        else if (!confBtn && deleteBtn)
            setShowWarning(true);
        else if (!confBtn && !deleteBtn)
            setShowSettingsModal(false);
    }

    const AddChannelToMap = (chanKey: TrenDAP.IChannelKey, channel: DataSetTypes.IDataSetMetaData) => {
        let maxValue = -1

        for (const value of props.ParentMap.current.values()) {
            if (value > maxValue)
                maxValue = value
        }

        if (!props.ParentMap.current.has(channel.ParentID))
            props.ParentMap.current.set(channel.ParentID, maxValue + 1)

        const parent = props.ParentMap.current.get(channel.ParentID)
        props.ChannelMap.Map.current.set({ ...chanKey, Parent: parent }, channel.ID)
        props.SetChannelMapVersion(props.ChannelMap.Version + 1)
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
                    ConfirmBtnClass="btn btn-success mr-auto"
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
                >
                    <div className="container-fluid d-flex h-100 flex-column">
                        <div className="row h-100" style={{ overflow: 'hidden' }}>
                            <div className="col-4">
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
                            <div className="col-8">
                                <TabSelector CurrentTab={tab} SetTab={setTab} Tabs={
                                    [{ Id: 'channel', Label: 'Channels' },
                                        { Id: 'evtSrc', Label: 'Event Sources' }]} />
                                {tab === 'channel' ?
                                    Implementation?.ChannelSelectionUI != null ?
                                        <Implementation.ChannelSelectionUI
                                            AddChannel={(channelID, defaultSetting) => handleAddChannel(channelID, defaultSetting)}
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
                                            AllChannels={props.AllChannels}
                                            SelectedChannels={localChannels}
                                            SetSettings={setLocalSetting}
                                            Settings={localSetting}
                                        /> : <ChannelSelector
                                            AddChannel={(channelID, defaultSetting) => handleAddChannel(channelID, defaultSetting)}
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
                                            AllChannels={props.AllChannels}
                                            SelectedChannels={localChannels}
                                            SetSettings={setLocalSetting}
                                            Settings={localSetting}
                                        />
                                : <></>}
                                {tab === 'evtSrc' ?
                                    Implementation?.EventSourceSelectionUI !== undefined ?
                                        <Implementation.EventSourceSelectionUI SetSource={handleChangeEventSource} SelectedSources={localEventSources} /> :
                                        <EventSelector SetSource={handleChangeEventSource} SelectedSources={localEventSources} />
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
