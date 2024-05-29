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
import { ServerErrorIcon, Modal, ToolTip, Warning } from '@gpa-gemstone/react-interactive';
import { RandomColor, CreateGuid } from '@gpa-gemstone/helper-functions';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ErrorBoundary } from '@gpa-gemstone/common-pages';
import { Input, CheckBox, InputWithButton } from '@gpa-gemstone/react-forms';

import { TrenDAP, DataSetTypes } from '../../global';
import { useAppSelector, useAppDispatch } from '../../hooks';

import { TextWidget } from './Implementations/Text'
import { TableWidget } from './Implementations/Table';
import { StatsWidget } from './Implementations/Stats';
import { HistogramWidget } from './Implementations/Histogram';
import { XvsYWidget } from './Implementations/XvsY';
import { ProfileWidget } from './Implementations/Profile';
import { TrendWidget } from './Implementations/Trend';
import { SelectEditMode } from '../../Store/GeneralSettingsSlice';

import TrenDAPDB from '../DataSets/TrenDAPDB';
import { WidgetTypes } from './Interfaces'
import _ from 'lodash';
import ChannelSelector from './ChannelSelector';

export const AllWidgets: WidgetTypes.IWidget<any, any>[] = [TextWidget, TableWidget, StatsWidget, HistogramWidget, XvsYWidget, ProfileWidget, TrendWidget];

interface IProps {
    Widget: TrenDAP.IWidgetModel,
    RemoveWidget: () => void,
    UpdateWidget: (widget: TrenDAP.IWidgetModel) => void,
    AllChannels: DataSetTypes.IDataSetMetaData[],
    ChannelMap: TrenDAP.IChannelMap,
    ParentMap: React.MutableRefObject<Map<string, number>>,
    Height: number,
    AddChannelToMap: (channelKey: TrenDAP.IChannelKey, channel: DataSetTypes.IDataSetMetaData) => void
}

interface ICommonSettings {
    Width: number, //percentage
    Label: string,
    ShowHeader: boolean
}

export interface ISelectedChannels extends TrenDAP.IWidgetChannels<any> {
    MetaData: DataSetTypes.IDataSetMetaData, IsNew: boolean
}

const WidgetWrapper: React.FC<IProps> = (props) => {
    const Implementation: WidgetTypes.IWidget<any, any> | null = React.useMemo(() => AllWidgets.find(item => item.Name === props.Widget.Type), [props.Widget.Type]);
    const guid = React.useRef<string>(CreateGuid());

    const editMode = useAppSelector(SelectEditMode);

    const [headerOpacity, setHeaderOpacity] = React.useState<number>(1);
    const [showSettingsModal, setShowSettingsModal] = React.useState<boolean>(false);
    const [headerHover, setHeaderHover] = React.useState<boolean>(false);
    const [settingHover, setSettingHover] = React.useState<boolean>(false);

    const [data, setData] = React.useState<WidgetTypes.IWidgetData<any>[]>([]);

    const [localChannels, setLocalChannels] = React.useState<ISelectedChannels[]>([]);
    const [localSetting, setLocalSetting] = React.useState<any | null>(null);
    const [localCommonSettings, setCommonLocalSettings] = React.useState<ICommonSettings>({ Width: props.Widget.Width, Label: props.Widget.Label, ShowHeader: props.Widget.ShowHeader });

    const [showWarning, setShowWarning] = React.useState<boolean>(false);

    const Settings: any = React.useMemo(() => {
        if (props.Widget.Settings == null)
            return Implementation?.DefaultSettings ?? {};
        const s = _.cloneDeep(Implementation?.DefaultSettings ?? {});
        let custom = {};
        if (props.Widget.Settings != null)
            custom = props.Widget.Settings;

        for (const [k, v] of Object.entries(Implementation?.DefaultSettings ?? {})) {
            if (custom.hasOwnProperty(k))
                s[k] = _.cloneDeep(custom[k]);
        }
        return s;
    }, [Implementation, props.Widget.Settings, showSettingsModal]);

    React.useEffect(() => {
        if (props.Widget.Channels.length === 0 || props.Widget.Channels == null) {
            setLocalChannels([])
            return
        }

        let channels = props.Widget.Channels.map(chan => ({ ...chan, MetaData: props.AllChannels.find(c => c.ID === props.ChannelMap.Map.current.get(chan.Key)), IsNew: false }))
        setLocalChannels(channels)
    }, [props.Widget.Channels, props.AllChannels, props.ChannelMap.Version, showSettingsModal])

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

        const promises = channels.map(chan =>
            db.Read(chan.ID).then(data => ({ ...data.Data, ChannelSettings: chan.ChannelSettings, ChannelKey: chan.ChannelKey }))
        );

        Promise.all(promises).then(allData => {
            setData(allData);
        });
        /**********/
        //Once i get all the channel specific settings out of the way, rework ReadMany so it works as well.

    }, [props.Widget.Channels, props.ChannelMap.Version]);


    React.useEffect(() => {
        if (!props.Widget.ShowHeader && editMode)
            setHeaderOpacity(0.5)
        else setHeaderOpacity(1)
    }, [props.Widget.ShowHeader, editMode])

    function handleAddChannel(channelID: string, defaultSetting: any, updatedKey?: TrenDAP.IChannelKey) {
        let channel = props.AllChannels.find(channel => channel.ID === channelID);
        let maxParent = localChannels.reduce((max, chan) => {
            return chan.Key.Parent > max ? chan.Key.Parent : max;
        }, 0);

        maxParent = localChannels.length === 0 ? 0 : maxParent + 1;
        let key = updatedKey ?? { Phase: channel.Phase, Type: channel.Type, Harmonic: channel.Harmonic, Parent: maxParent }
        let newChannel = {
            MetaData: channel,
            ChannelSettings: defaultSetting,
            Key: key,
            IsNew: true
        };

        setLocalChannels(prevLocalChannels => {
            return [...prevLocalChannels, newChannel];
        });
    }

    const handleUpdateWidget = (confBtn: boolean, deleteBtn: boolean) => {
        if (confBtn) {
            let updatedChannels = [...localChannels];

            //If its a new channel update map first then update the key to the correct map
            updatedChannels.forEach(channel => {
                if (channel.IsNew) {
                    props.AddChannelToMap(channel.Key, channel.MetaData)
                    const updatedKey = { ...channel.Key, Parent: props.ParentMap.current.get(channel.MetaData.ParentID) }
                    //This should probably be done in XvsY but not sure of a 'better' way to do this. Without returning {oldKey, newKey} from this func and passing it into the widgets 
                    if (localSetting?.Pairs != null) {
                        let pairs = [...localSetting.Pairs] as { Keys: [TrenDAP.IChannelKey, TrenDAP.IChannelKey], Index: number}[]
                        pairs.forEach((pair, pairIndex) => {
                            let chanIndex = pair.Keys.findIndex(p => _.isEqual(p, channel.Key))
                            if (chanIndex !== -1)
                                pairs[pairIndex].Keys[chanIndex] = updatedKey
                        })
                        setLocalSetting({ ...localSetting, Pairs: pairs })
                    }

                    channel.Key = updatedKey
                }
            })

            props.UpdateWidget({
                ...props.Widget,
                Settings: localSetting,
                Width: localCommonSettings.Width,
                Label: localCommonSettings.Label,
                ShowHeader: localCommonSettings.ShowHeader,
                Channels: updatedChannels
            })
            setShowSettingsModal(false)
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
                <div className="card" style={{ width: `${props.Widget.Width}%`, height: '100%', overflowY: 'auto' }}>
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
                                        <ToolTip Show={settingHover} Target={'widget-setting-btn' + guid.current} Position="left">Widget Settings</ToolTip>
                                    </>
                                </div>
                            </div>
                        </div> : null}
                    <div className="card-body" style={{ maxHeight: props.Height }}>
                        <Implementation.WidgetUI
                            Data={data}
                            Width={props.Widget.Width}
                            SetSettings={(s) => props.UpdateWidget({ ...props.Widget, Settings: s })}
                            Settings={props.Widget.Settings}
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
                    Size="xlg"
                >
                    <div className="container-fluid h-100 d-flex flex-column p-0">
                        <div className="row">
                            <div className="col-4 d-flex flex-column" style={{ maxHeight: 'calc(-230px + 100vh)' }}>
                                <div className="container-fluid d-flex flex-column p-0 flex-shrink-0">
                                    <Input<ICommonSettings> Field='Label' Record={localCommonSettings} Type='text' Setter={(r) => setCommonLocalSettings(r)} Valid={(field) => true} />
                                    <Input<ICommonSettings> Label="Width (%)" Field='Width' Record={localCommonSettings} Type='integer' Setter={(r) => setCommonLocalSettings(r)}
                                        Valid={(item) => isPercent(localCommonSettings[item] as number)} Feedback='Width must be a valid percent and greater than 5' />
                                    <CheckBox<ICommonSettings> Field='ShowHeader' Record={localCommonSettings} Setter={r => setCommonLocalSettings(r)} Label="Show Widget Header" />
                                </div>
                                <div className="container-fluid d-flex flex-column p-0 flex-grow-1">
                                    {Implementation?.SettingsUI === undefined ? <></> : <Implementation.SettingsUI
                                        Settings={localSetting ?? Settings}
                                        SetSettings={setLocalSetting}
                                        ChannelSettings={localChannels.map(chan => chan.ChannelSettings)}
                                    />}
                                </div>
                            </div>
                            <div className="col-8" style={{ maxHeight: 'calc(-230px + 100vh)' }}>
                                {Implementation?.ChannelSelectionUI !== undefined ?
                                    <Implementation.ChannelSelectionUI
                                        AddChannel={(channelID, defaultSetting, updatedKey) => handleAddChannel(channelID, defaultSetting, updatedKey)}
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
                                        AddChannel={(channelID, defaultSetting, channelIDs) => handleAddChannel(channelID, defaultSetting, channelIDs)}
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
                                    />}
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
            </ErrorBoundary>}
    </>
}


//Helper Functions
export const CreateWidget = (type: string, width: number): TrenDAP.IWidgetModel => {
    return {
        Width: width,
        Label: `${type}`,
        Type: type,
        ShowHeader: true,
        Settings: null,
        Channels: []
    }
}

//probably a better place for the functions below.. GetColor maybe could be standarized ing emstone
export const isPercent = (percent: number) => {
    if (percent > 100 || percent < 5)
        return false;
    return true
}

export default WidgetWrapper;
