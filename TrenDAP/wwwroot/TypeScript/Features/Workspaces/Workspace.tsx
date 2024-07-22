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
import { TrenDAP, Redux, DataSetTypes } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SelectWorkSpaceByID, UpdateWorkSpace, SelectWorkSpacesStatus, FetchWorkSpaces } from './WorkspacesSlice';
import { SetEditMode, SelectEditMode } from '../../Store/GeneralSettingsSlice';

import { AllWidgets } from '../Widgets/WidgetWrapper';

import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ToggleSwitch } from '@gpa-gemstone/react-forms';
import { ToolTip, BtnDropdown, Modal } from '@gpa-gemstone/react-interactive';
import Row from './Row';
import HashTable from './HashTable';

import * as _ from 'lodash';
import DataSetSelector from './DataSetSelector';
import WorkspaceSettings from './WorkspaceSettings';
import { CreateWidget, isVirtual } from '../Widgets/HelperFunctions';
import { useParams } from 'react-router-dom';
import VirtualChannels from './VirtualChannels';

type Hover = ('Share' | 'Save' | 'Settings' | 'Add' | 'SaveIcon' | 'None' | 'ShareDisabled')

const Workspace: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const { dataSetID, workspaceId } = useParams();
    const workSpace: TrenDAP.iWorkSpace | undefined = useAppSelector((state: Redux.StoreState) => SelectWorkSpaceByID(state, parseInt(workspaceId ?? '-1')));
    const workspaceStatus = useAppSelector(SelectWorkSpacesStatus);
    const editMode = useAppSelector(SelectEditMode);

    /* Maps */
    const channelMapping = React.useRef<HashTable<TrenDAP.IChannelKey, string>>(new HashTable<TrenDAP.IChannelKey, string>((k) => `${k?.Phase ?? ''}~${k?.Type ?? ''}~${k?.Parent ?? ''}~${k?.Harmonic ?? -1}`));
    const parentMapping = React.useRef<Map<string, number>>(new Map<string, number>());
    const eventMapping = React.useRef<Map<number, number>>(new Map<number, number>());
    const [mapVersion, setMapVersion] = React.useState<number>(0);
    const [eventMapVersion, setEventMapVersion] = React.useState<number>(0);

    const [workSpaceJSON, setWorkSpaceJSON] = React.useState<TrenDAP.WorkSpaceJSON>({ Rows: [], VirtualChannels: [] });
    const [workspaceLink, setWorkspaceLink] = React.useState<string | null>(null);
    const [showWorkspaceLink, setShowWorkspaceLink] = React.useState<boolean>(false);

    const [showCopiedTooltip, setShowCopiedTooltip] = React.useState<boolean>(false);
    const [hover, setHover] = React.useState<Hover>('None');
    const [showSettingsModal, setShowSettingsModal] = React.useState<boolean>(false);
    const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>([]);
    const [allEvents, setAllEvents] = React.useState<TrenDAP.IEventSourceMetaData[]>([]);
    const [showShowDataSetModal, setShowDataSetModal] = React.useState<boolean>(true);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [dataSet, setDataset] = React.useState<TrenDAP.iDataSet | null>(null)
    const [isLinkShareable, setIsLinkShareable] = React.useState<{ DisabledMessage: string, Shareable: boolean }>({ Shareable: false, DisabledMessage: '' });

    const [showVirtual, setShowVirtual] = React.useState<boolean>(false);
    const [loadedVirtuals, setLoadedVirtuals] = React.useState<TrenDAP.IVirtualChannelLoaded[]>([]);

    //Effect to update isLinkShareable
    React.useEffect(() => {
        if (workSpace == null || workSpace?.JSONString == null) {
            setIsLinkShareable({ Shareable: false, DisabledMessage: '' });
            return;
        }

        const isWorkspaceSaved = _.isEqual(workSpaceJSON, JSON.parse(workSpace.JSONString));
        const shareable = (dataSet?.Public ?? false) && (workSpace?.Public ?? false) && isWorkspaceSaved;

        if (!dataSet?.Public || !workSpace?.Public) {
            setIsLinkShareable({ Shareable: false, DisabledMessage: `Workspace and dataset must be public${!isWorkspaceSaved ? ' and workspace must be saved' : ''}` });
            return;
        }

        if (!isWorkspaceSaved) {
            setIsLinkShareable({ Shareable: false, DisabledMessage: 'Workspace must be saved' });
            return;
        }

        setIsLinkShareable({ Shareable: shareable, DisabledMessage: '' });
    }, [workSpace, dataSet, workSpaceJSON]);


    //Effect to set the workspace link
    React.useEffect(() => {
        if (!showWorkspaceLink) {
            setWorkspaceLink(null)
            return;
        }

        const channelMap = workSpaceJSON.Rows
            .flatMap(row => row.Widgets.flatMap(widget => widget.Channels.filter(channel => !isVirtual(channel.Key)).map(channel => [channel.Key, channelMapping.current.get(channel.Key as TrenDAP.IChannelKey)])));
        const chans = new HashTable<TrenDAP.IChannelKey, string>((k) => `${k?.Phase ?? ''}~${k?.Type ?? ''}~${k?.Parent ?? ''}~${k?.Harmonic ?? -1}`, channelMap as [TrenDAP.IChannelKey, string][]).serialize();

        let pathName = _.cloneDeep(window.location.pathname)
        const origin = _.cloneDeep(window.location.origin)
        pathName = `/Workspaces/${workspaceId}/DataSet/${dataSetID}/Channels/${chans}`
        setWorkspaceLink(origin + pathName)
    }, [showWorkspaceLink]);

    React.useEffect(() => {
        if (workSpace === undefined) return;
        const json = JSON.parse(workSpace.JSONString) as TrenDAP.WorkSpaceJSON;
        setWorkSpaceJSON(json);
    }, [workSpace]);

    // Effect to set workSpace
    React.useEffect(() => {
        if (workspaceStatus == 'unitiated' || workspaceStatus == 'changed')
            dispatch(FetchWorkSpaces());
    }, [dispatch, workspaceStatus]);

    function GenerateMapping(channelMap: [TrenDAP.IChannelKey, string][], parentMap: [string, number][], eventMap: [number, number][], dataset: TrenDAP.iDataSet, loadHandle: Promise<any>) {
        setLoading(true);
        loadHandle.then(() => setLoading(false));

        setDataset(dataset);
        channelMapping.current = new HashTable<TrenDAP.IChannelKey, string>((k) => `${k?.Phase ?? ''}~${k?.Type ?? ''}~${k?.Parent ?? ''}~${k?.Harmonic ?? -1}`, channelMap);
        parentMapping.current = new Map<string, number>(parentMap);
        eventMapping.current = new Map<number, number>(eventMap);
        setEventMapVersion(version => version + 1);
        setMapVersion(version => version + 1);
    }

    const HandleChangeVirtuals = React.useCallback((newVirtuals: TrenDAP.IVirtualChannelLoaded[]) => {
        setLoadedVirtuals(newVirtuals);
        setWorkSpaceJSON(wsJSON => ({
            Rows: [...wsJSON.Rows],
            VirtualChannels: newVirtuals.map(item => ({
                ID: item.ID,
                Name: item.Name,
                ParentKey: item?.ParentKey,
                ComponentChannels: item.ComponentChannels,
                Calculation: item.Calculation
            }))
        }));
    }, []);

    function HandleAddObject(type: string | 'Row') {
        if (type === 'Row')
            setWorkSpaceJSON({ Rows: [...workSpaceJSON.Rows, { Height: 50, Widgets: [], Label: "", ShowHeader: true }], VirtualChannels: [...workSpaceJSON.VirtualChannels] })
        else
            setWorkSpaceJSON({ Rows: [...workSpaceJSON.Rows, { Height: 50, Widgets: [CreateWidget(type, 100)], Label: "", ShowHeader: true }], VirtualChannels: [...workSpaceJSON.VirtualChannels] })
    }

    if (workSpace == undefined) return null;
    return (
        <div className={`container-fluid d-flex h-100 flex-column ${loading ? 'align-items-center justify-content-center' : ''}`} style={{ overflowY: 'auto', overflowX: 'hidden' }}>
            {loading ? <div className="d-flex"><ReactIcons.SpiningIcon Size={100} /></div> :
                <>
                    <div className="row" style={{ backgroundColor: '#4e545a' }}>
                        <div className="col-6 d-flex flex-row justify-content-start">
                            <ul className="navbar-nav navbar-expand p-2">
                                <li className="nav-item" style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', paddingLeft: '30px', paddingRight: '30px' }}>
                                    <div style={{ textAlign: 'center', color: 'white' }}>Workspace:</div>
                                    <div style={{ textAlign: 'center', color: 'white' }}> {workSpace?.Name}</div>
                                </li>
                                <li className="nav-item" style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', paddingLeft: '30px', paddingRight: '30px' }}>
                                    <div style={{ textAlign: 'center', color: 'white' }}>Timeframe:</div>
                                    <div style={{ textAlign: 'center', color: 'white' }}>{dataSet?.From} - {dataSet?.To}</div>
                                </li>
                                <li className="nav-item" style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', paddingLeft: '30px', paddingRight: '30px' }}>
                                    <div style={{ textAlign: 'center', color: 'white' }}>Data Set:</div>
                                    <button className='btn btn-primary' onClick={() => setShowDataSetModal(true)}>{dataSet?.Name ?? 'Select a Data Set'}</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 d-flex flex-row align-items-center justify-content-end pr-1" style={{ zIndex: 9986 }}>
                            <BtnDropdown Label={'Row'}
                                Options={
                                    AllWidgets.map(widget => ({ Label: widget.Name, Callback: () => HandleAddObject(widget.Name), Group: 0 }))
                                        .concat([{ Label: 'Row', Callback: () => HandleAddObject('Row'), Group: 1 }, { Label: 'Virtual Channel', Callback: () => setShowVirtual(true), Group: 2 }])}
                                Callback={() => HandleAddObject('Row')} ShowToolTip={true} TooltipContent={<p>Add Row or Widget</p>} TooltipLocation={'bottom'} />

                            <div className="btn-group align-items-center pl-1">
                                <ToggleSwitch Record={{ editMode }} Field="editMode" Label={'Edit'} Setter={(item) => dispatch(SetEditMode(item.editMode))} Help="Toggles editing of rows and widgets"
                                    Style={{ color: 'white', display: 'flex', alignItems: 'center' }} />

                            </div>
                            <div className="btn-group">
                                <button className="btn" onMouseEnter={() => setHover('Save')} onMouseLeave={() => setHover('None')} data-tooltip="save-btn" onClick={() => {
                                    dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(workSpaceJSON) }));
                                }}>
                                    <ReactIcons.FloppyDisk Color="white" />
                                    <ReactIcons.CircleCheckMark Color={_.isEqual(workSpaceJSON, (JSON.parse(workSpace.JSONString))) ? "green" : "red"} Size={16} Style={{ marginTop: 16, marginLeft: -10 }} />
                                </button>

                                <div data-tooltip="wrkspace-disabled-div" onMouseEnter={() => setHover('ShareDisabled')} onMouseLeave={() => setHover('None')}>
                                    <button className="btn" data-tooltip="wrkspace-share-btn" onMouseEnter={() => setHover('Share')} onMouseLeave={() => setHover('None')}
                                        onClick={() => setShowWorkspaceLink(true)} disabled={!isLinkShareable.Shareable}>
                                        <ReactIcons.ShareNetwork Style={{ marginLeft: -12 }} Color="white" />
                                    </button>
                                </div>
                            </div>

                            <button className="btn" data-tooltip="wrkspace-settings-btn" onMouseEnter={() => setHover("Settings")} onMouseLeave={() => setHover('None')} onClick={() => setShowSettingsModal(true)}>
                                <ReactIcons.Settings Color="white" />
                            </button>

                            <WorkspaceSettings New={false} Workspace={{ ...workSpace, JSONString: JSON.stringify(workSpaceJSON) }} Show={showSettingsModal} SetShow={setShowSettingsModal} />
                            <ToolTip Show={hover === "Save"} Position="bottom" Target="save-btn" Zindex={9991}>
                                Save Workspace {_.isEqual(workSpaceJSON, (JSON.parse(workSpace.JSONString))) ? `(Up to date)` : `(Unsaved changes)`}
                            </ToolTip>
                            <ToolTip Show={hover === "Settings"} Position="bottom" Target="wrkspace-settings-btn" Zindex={9991}>Workspace Settings</ToolTip>
                            <ToolTip Show={hover === "Share"} Position="bottom" Target="wrkspace-share-btn" Zindex={9991}>Share Workspace</ToolTip>
                            <ToolTip Show={hover === "ShareDisabled" && !isLinkShareable.Shareable} Position="bottom" Target="wrkspace-disabled-div" Zindex={9991}>{isLinkShareable.DisabledMessage}</ToolTip>

                            <ToolTip Show={showCopiedTooltip} Position="bottom" Target="wrkspace-link" Zindex={9991}>Copied to clipboard</ToolTip>

                            <Modal
                                Show={showWorkspaceLink}
                                Title="Workspace Link"
                                ShowCancel={false}
                                ConfirmText="Copy to Clipboard"
                                ShowX={true}
                                CallBack={confBtn => {
                                    if (confBtn && workspaceLink != null) {
                                        navigator.clipboard.writeText(workspaceLink).then(() => {
                                            setShowCopiedTooltip(true);
                                            setTimeout(() => {
                                                setShowCopiedTooltip(false);
                                            }, 2500);
                                        });
                                    }
                                    else
                                        setShowWorkspaceLink(false)
                                }}
                            >
                                <div data-tooltip="wrkspace-link" style={{ wordWrap: 'break-word' }}>{workspaceLink}</div>
                            </Modal>
                        </div>
                    </div>
                    {dataSet == null ? <div className="d-flex">Select a dataset to continue</div> :
                        <div className="row flex-grow-1 d-flex flex-column" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                            <div className="col-12 h-100 p-0">
                                {workSpaceJSON.Rows.map((row, index) => <Row
                                    key={index}
                                    ChannelMap={{ Map: channelMapping, Version: mapVersion }}
                                    SetChannelMapVersion={setMapVersion}
                                    ParentMap={parentMapping}
                                    EventMap={eventMapping}
                                    EventMapVersion={eventMapVersion}
                                    SetEventMapVersion={setEventMapVersion}
                                    AllChannels={allChannels}
                                    AllVirtualChannels={loadedVirtuals}
                                    AllEventSources={allEvents}
                                    Label={row?.Label}
                                    Widgets={row.Widgets}
                                    Height={row.Height}
                                    ShowHeader={row.ShowHeader}
                                    UpdateRow={(record) => {
                                        const json = { ...workSpaceJSON };
                                        json.Rows[index] = record;
                                        setWorkSpaceJSON(json)
                                    }}
                                    RemoveRow={() => {
                                        const json = { ...workSpaceJSON };
                                        json.Rows.splice(index, 1);
                                        setWorkSpaceJSON(json)
                                    }}
                                    MoveRowUp={() => {
                                        if (index <= 0) return;
                                        const newIndex = index - 1
                                        const json = { ...workSpaceJSON };
                                        const a = json.Rows[newIndex];
                                        const b = json.Rows[index];
                                        json.Rows[newIndex] = b;
                                        json.Rows[index] = a;
                                        setWorkSpaceJSON(json)
                                    }}
                                    MoveRowDown={() => {
                                        const json = { ...workSpaceJSON };
                                        if (index >= json.Rows.length) return;
                                        const newIndex = index + 1
                                        const a = json.Rows[newIndex];
                                        const b = json.Rows[index];
                                        json.Rows[newIndex] = b;
                                        json.Rows[index] = a;
                                        setWorkSpaceJSON(json)
                                    }}
                                />)}
                            </div>
                        </div>
                    }
                </>}
            <DataSetSelector key={workspaceId} IsModalOpen={showShowDataSetModal}
                SetIsModalOpen={setShowDataSetModal} WorkSpaceJSON={workSpaceJSON}
                GenerateMapping={GenerateMapping}
                AllChannels={allChannels} SetAllChannels={setAllChannels} SetAllEventSources={setAllEvents} />
            <VirtualChannels VirtualChannels={loadedVirtuals} SetVirtualChannels={HandleChangeVirtuals} AllChannels={allChannels}
                ShowModal={showVirtual} SetShowModal={setShowVirtual}
                ParentMap={parentMapping} ChannelMap={channelMapping} ChannelMapVersion={mapVersion} SetChannelMapVersion={setMapVersion} />
        </div>
    );
}

export const AddChannelToMap = (chanKey: TrenDAP.IChannelKey, channel: DataSetTypes.IDataSetMetaData, parentMap: Map<string, number>, channelMap: HashTable<TrenDAP.IChannelKey, string>) => {
    let maxValue = -1;

    for (let value of parentMap.values()) {
        if (value > maxValue)
            maxValue = value;
    }

    if (!parentMap.has(channel.ParentID))
        parentMap.set(channel.ParentID, maxValue + 1);

    let parent = parentMap.get(channel.ParentID);
    channelMap.set({ ...chanKey, Parent: parent }, channel.ID);
    return parent;
}

export const WorkspaceWrapper = (props: {}) => {
    const { workspaceId } = props['useParams'];

    return (
        <Workspace key={workspaceId} />
    );
};

export default WorkspaceWrapper;
