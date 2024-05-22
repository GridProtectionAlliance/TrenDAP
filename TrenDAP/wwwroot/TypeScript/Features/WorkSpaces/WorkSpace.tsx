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
import { SelectWorkSpaceByID, UpdateWorkSpace, SelectWorkSpacesStatus, FetchWorkSpaces } from './WorkSpacesSlice';
import { SetEditMode, SelectEditMode } from '../../Store/GeneralSettingsSlice';

import { CreateWidget, AllWidgets } from '../Widgets/WidgetWrapper';

import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ToggleSwitch } from '@gpa-gemstone/react-forms';
import { ToolTip, BtnDropdown } from '@gpa-gemstone/react-interactive';
import Row from './Row';
import HashTable from './HashTable';

import * as _ from 'lodash';
import DataSetSelector from './DataSetSelector';
import WorkspaceSettings from './WorkspaceSettings';

type Hover = ('Export' | 'Save' | 'None' | 'Settings' | 'Add')


const WorkSpace: React.FunctionComponent<{}> = (props) => {
    const dispatch = useAppDispatch();

    const workSpace: TrenDAP.iWorkSpace = useAppSelector((state: Redux.StoreState) => SelectWorkSpaceByID(state, parseInt(props['useParams']?.id ?? -1))); //this needs a type..
    const editMode = useAppSelector(SelectEditMode);
    const workspaceStatus = useAppSelector(SelectWorkSpacesStatus);

    /* Mapping */
    const channelMapping = React.useRef<HashTable<TrenDAP.IChannelKey, string>>(new HashTable<TrenDAP.IChannelKey, string>((k) => `${k?.Phase ?? ''}~${k?.Type ?? ''}~${k?.Parent ?? ''}~${k?.Harmonic ?? -1}`));
    const parentMapping = React.useRef<Map<string, number>>(new Map<string, number>()); //parentID => to number we already generate this in datastseletor


    const [mapVersion, setMapVersion] = React.useState<number>(0);

    const rowContainer = React.useRef<HTMLDivElement>(null);

    const [workSpaceJSON, setWorkSpaceJSON] = React.useState<TrenDAP.WorkSpaceJSON>({ Rows: [] });
    const [showSettingsModal, setShowSettingsModal] = React.useState<boolean>(false);
    const [hover, setHover] = React.useState<Hover>('None');
    const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>([])
    const [rowContainerWidth, setRowContainerWidth] = React.useState<number>(0);

    //think of future in the sense that someone can send a link with dataset pre selected
    const [showShowDataSetModal, setShowDataSetModal] = React.useState<boolean>(true)
    const [loading, setLoading] = React.useState<boolean>(false); //need to utilize this state

    const [dataSet, setDataset] = React.useState<TrenDAP.iDataSet>(null)

    React.useLayoutEffect(() => {
        if (rowContainer.current != null) {
            if (rowContainerWidth !== rowContainer.current.offsetWidth)
                setRowContainerWidth(rowContainer.current.offsetWidth)
        }
    })

    React.useEffect(() => {
        if (workSpace === undefined) return;
        let json = JSON.parse(workSpace.JSONString, reviver) as TrenDAP.WorkSpaceJSON;
        setWorkSpaceJSON(json);
    }, [workSpace]);

    React.useEffect(() => {
        if (workspaceStatus == 'unitiated' || workspaceStatus == 'changed')
            dispatch(FetchWorkSpaces());

    }, [dispatch, workspaceStatus]);

    //udpate to handle parentMapping as well
    function GenerateMapping(channelMap: [TrenDAP.IChannelKey, string][], parentMap: [string, number][], allChannels: DataSetTypes.IDataSetMetaData[], dataset: TrenDAP.iDataSet, loadHandle: Promise<any>) {
        setLoading(true);
        loadHandle.then(() => setLoading(false));

        setDataset(dataset);
        setAllChannels(allChannels);
        channelMapping.current = new HashTable<TrenDAP.IChannelKey, string>((k) => `${k?.Phase ?? ''}~${k?.Type ?? ''}~${k?.Parent ?? ''}~${k?.Harmonic ?? -1}`, channelMap);
        parentMapping.current = new Map<string, number>(parentMap)
        setMapVersion(version => version + 1)
    }


    function HandleAddObject(type: string | 'Row') {
        if (type === 'Row')
            dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify({ ...workSpaceJSON, Rows: [...workSpaceJSON.Rows, { Height: 500, Widgets: [], Label: "", ShowHeader: true }] }, replacer) }))
        else {
            dispatch(UpdateWorkSpace({
                ...workSpace, JSONString: JSON.stringify({
                    ...workSpaceJSON, Rows: [...workSpaceJSON.Rows, {
                        Height: 500,
                        Widgets: [CreateWidget(type, 100)]
                    }]
                }, replacer)
            }))
        }
    }

    const AddChannelToMap = (chanKey: TrenDAP.IChannelKey, channel: DataSetTypes.IDataSetMetaData) => {
        let maxValue = -1

        for (let value of parentMapping.current.values()) {
            if (value > maxValue)
                maxValue = value
        }

        if (!parentMapping.current.has(channel.ParentID))
            parentMapping.current.set(channel.ParentID, maxValue + 1)

        let parent = parentMapping.current.get(channel.ParentID)
        channelMapping.current.set({ ...chanKey, Parent: parent }, channel.ID)
    }

    if (workSpace == undefined) return null;
    return (
        <>
            <div className="container-fluid d-flex h-100 flex-column" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <DataSetSelector IsModalOpen={showShowDataSetModal} SetIsModalOpen={setShowDataSetModal} WorkSpaceJSON={workSpaceJSON} GenerateMapping={GenerateMapping} />
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
                    <div className="col-6 d-flex flex-row align-items-center justify-content-end pr-1">
                        <BtnDropdown Label={'Row'} Options={AllWidgets.map(widget => ({ Label: widget.Name, Callback: () => HandleAddObject(widget.Name), Group: 0 })).concat({ Label: 'Row', Callback: () => HandleAddObject('Row'), Group: 1 })}
                            Callback={() => HandleAddObject('Row')} ShowToolTip={true} TooltipContent={<p>Add Object</p>} />

                        <div className="btn-group align-items-center pl-1">
                            <ToggleSwitch Record={{ editMode }} Field="editMode" Label={'Edit'} Setter={(item) => dispatch(SetEditMode(item.editMode))} Help="This enables/disables editing of rows/widgets"
                                Style={{ color: 'white', display: 'flex', alignItems: 'center' }} />
                            <button className="btn" data-tooltip="export-btn" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' onMouseEnter={() => setHover('Export')} onMouseLeave={() => setHover('None')}>
                                <ReactIcons.Download Color="white" />
                            </button>
                            <ToolTip Show={hover === "Export"} Position="top" Target="export-btn">Export Current Data Set</ToolTip>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">PDF</a>
                                <a className="dropdown-item" href="#">CSV</a>
                            </div>
                        </div>

                        <button className="btn" onMouseEnter={() => setHover('Save')} onMouseLeave={() => setHover('None')} data-tooltip="save-btn" onClick={(e) => {
                            e.preventDefault();
                            dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(workSpaceJSON, replacer) }));
                        }}><ReactIcons.FloppyDisk Color="white" /></button>
                        <ToolTip Show={hover === "Save"} Position="left" Target="save-btn">Save Current Workspace</ToolTip>

                        <button className="btn" data-tooltip="wrkspace-settings-btn" onMouseEnter={() => setHover("Settings")} onMouseLeave={() => setHover('None')} onClick={() => setShowSettingsModal(true)}>
                            <ReactIcons.Settings Color="white" />
                        </button>
                        <ToolTip Show={hover === "Settings"} Position="left" Target="wrkspace-settings-btn">Workspace Settings</ToolTip>
                        <WorkspaceSettings New={false} Workspace={workSpace} Show={showSettingsModal} SetShow={setShowSettingsModal} />

                    </div>
                </div>
                <div className="flex-grow-1 d-flex flex-column" style={{ overflowY: 'auto', overflowX: 'hidden' }} ref={rowContainer}>
                    <div className="row">
                        <div className="col-12">
                            {workSpaceJSON.Rows.map((row, index) => <Row
                                key={index}
                                ChannelMap={{ Map: channelMapping, Version: mapVersion }}
                                ParentMap={parentMapping}
                                AllChannels={allChannels}
                                Label={row?.Label}
                                Widgets={row.Widgets}
                                Height={row.Height}
                                ShowHeader={row.ShowHeader}
                                AddChannelToMap={AddChannelToMap}
                                UpdateRow={(record) => {
                                    let json: TrenDAP.WorkSpaceJSON = JSON.parse(workSpace.JSONString, reviver);
                                    json.Rows[index].Height = record.Height;
                                    json.Rows[index].Label = record.Label;
                                    json.Rows[index].ShowHeader = record.ShowHeader;
                                    json.Rows[index].Widgets = record.Widgets;
                                    dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json, replacer) }));
                                }}
                                RemoveRow={() => {
                                    let json = JSON.parse(workSpace.JSONString, reviver);
                                    json.Rows.splice(index, 1);
                                    dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json, replacer) }));
                                }}
                                MoveRowUp={() => {
                                    if (index <= 0) return;
                                    const newIndex = index - 1
                                    let json = JSON.parse(workSpace.JSONString, reviver);
                                    const a = json.Rows[newIndex];
                                    const b = json.Rows[index];
                                    json.Rows[newIndex] = b;
                                    json.Rows[index] = a;
                                    dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json, replacer) }));
                                }}
                                MoveRowDown={() => {
                                    let json = JSON.parse(workSpace.JSONString, reviver);
                                    if (index >= json.Rows.length) return;
                                    const newIndex = index + 1
                                    const a = json.Rows[newIndex];
                                    const b = json.Rows[index];
                                    json.Rows[newIndex] = b;
                                    json.Rows[index] = a;
                                    dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json, replacer) }));
                                }}
                            />)}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default WorkSpace;


export const replacer = (key, value) => {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()),
        };
    } else if (value instanceof HashTable) {
        return {
            dataType: 'HashTable',
            value: Array.from(value.entries()), 
        };
    } else {
        return value;
    }
}

export const reviver = (key, value) => {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        } else if (value.dataType === 'HashTable') {
             return new HashTable<TrenDAP.IChannelKey, any>((k) => `${k?.Phase ?? ''}~${k?.Type ?? ''}~${k?.Parent ?? ''}~${k?.Harmonic ?? -1}`, value.value); 
        }
    }
    return value;
}
