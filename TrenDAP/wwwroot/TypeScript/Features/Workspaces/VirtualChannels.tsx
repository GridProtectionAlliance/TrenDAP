//******************************************************************************************************
//  VirtualChannels.tsx - Gbtc
//
//  Copyright © 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  7/5/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, DataSetTypes } from '../../global';
import HashTable from './HashTable';
import { Modal, Warning } from '@gpa-gemstone/react-interactive';
import { Input, TextArea } from '@gpa-gemstone/react-forms';
import { ReactTable } from '@gpa-gemstone/react-table';
import * as _ from 'lodash';
import { AddChannelToMap } from './Workspace';
import { createVirtualFunc } from '../Widgets/HelperFunctions';

interface IProps {
    VirtualChannels: TrenDAP.IVirtualChannelLoaded[],
    SetVirtualChannels: (newChannels: TrenDAP.IVirtualChannelLoaded[]) => void,
    AllChannels: DataSetTypes.IDataSetMetaData[],
    ShowModal: boolean,
    SetShowModal: (bool: boolean) => void,
    ChannelMap: React.MutableRefObject<HashTable<TrenDAP.IChannelKey, string>>,
    ChannelMapVersion: number,
    SetChannelMapVersion: (ver: number) => void,
    ParentMap: React.MutableRefObject<Map<string, number>>
}

interface IMetaDataVariableName extends DataSetTypes.IDataSetMetaData {
    VariableName: string
}

interface IVirtualChannelEditable extends TrenDAP.IVirtualChannelLoaded {
    Channels: IMetaDataVariableName[]
}

const generateQuickName = (existingChannels: IMetaDataVariableName[]) => {
    let currentName: string = "A";
    let currentAttemptIndex = existingChannels.length;
    while (currentName === 'T' || existingChannels.some(chan => chan.VariableName === currentName)) {
        currentName = findQuickName(currentAttemptIndex);
        currentAttemptIndex++;
    }
    return currentName;
};

const findQuickName = (index: number) => {
    const quotient = Math.floor(index / 26);
    let digit = String.fromCharCode(65 + (index % 26));
    if (quotient > 0) digit = findQuickName(quotient - 1) + digit;
    return digit;
};

const VirtualChannels: React.FC<IProps> = (props) => {
    const [allVirtualChannels, setAllVirtualChannels] = React.useState<IVirtualChannelEditable[]>([]);
    const [virtualAscending, setVirtualAscending] = React.useState<boolean>(true);
    const [virtualSortField, setVirtualSortField] = React.useState<keyof IVirtualChannelEditable>('Name');
    const [selectedVirtual, setSelectedVirtual] = React.useState<string|undefined>(undefined);

    const selectedVirtualChannel = React.useMemo(() => allVirtualChannels.find(channel => channel.ID === selectedVirtual), [selectedVirtual, allVirtualChannels]);
    const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>([]);
    const [channelAscending, setChannelAscending] = React.useState<boolean>(true);
    const [channelSortField, setChannelSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Name');

    const [warningIndex, setWarningIndex] = React.useState<number>(-1);

    React.useEffect(() => {
        if (allVirtualChannels.length === 0) return;
        setAllVirtualChannels(_.orderBy(allVirtualChannels, [virtualSortField], [virtualAscending ? 'asc' : 'desc']));
    }, [virtualSortField, virtualAscending]);

    React.useEffect(() => {
        if (props.VirtualChannels == null || !props.ShowModal) return;
        const ediableVirtuals: IVirtualChannelEditable[] = props.VirtualChannels.map(chan => {
            const channels = chan.ComponentChannels.map(existingChan => {
                const id = props.ChannelMap.current.get(existingChan.Key);
                if (id == null) {
                    console.error(`Key expected not found in channel map: ${existingChan.Key}`);
                    return undefined;
                }
                const channel = props.AllChannels.find(chan => chan.ID === id);
                if (channel == null) {
                    console.error(`Channel expected not found in all channels with ID: ${id}`);
                    return undefined;
                }
                return {...channel, VariableName: existingChan.Name};

            }).filter(chan => chan != null);
            return { ...chan, Channels: channels }
        });

        setAllVirtualChannels(_.orderBy(ediableVirtuals, [virtualSortField], [virtualAscending ? 'asc' : 'desc']));
    }, [props.VirtualChannels, props.ShowModal]);

    React.useEffect(() => {
        if (allChannels.length === 0) return;
        setAllChannels(_.orderBy(allChannels, [channelSortField], [channelAscending ? 'asc' : 'desc']));
    }, [channelSortField, channelAscending]);

    React.useEffect(() => {
        if (props.AllChannels == null) return;
        setAllChannels(_.orderBy(props.AllChannels, [channelSortField], [channelAscending ? 'asc' : 'desc']));
    }, [props.AllChannels]);

    const handleChange = React.useCallback((newSelected: IVirtualChannelEditable) => {
        // Save Change into virtual array
        const newAllVirtual = [...allVirtualChannels];
        const index = newAllVirtual.findIndex(chan => chan.ID === selectedVirtual);
        newAllVirtual[index] = newSelected;
        setAllVirtualChannels(newAllVirtual);
    }, [selectedVirtualChannel]);

    const findBadVirtualIndex = React.useCallback((virtuals: TrenDAP.IVirtualChannelLoaded[]) => {
        for(let index = 0; index < virtuals.length; index++) {
            try {
                const userFunc = createVirtualFunc(virtuals[index].ComponentChannels, virtuals[index].Calculation);
                userFunc(Math.random(), ...virtuals[index].ComponentChannels.map(() => Math.random()));
            } catch {
                return index;
            }
        }
        return -1;
    }, []);

    return (
        <>
            <Warning Title={'Failure to Parse User Function'} CallBack={() => setWarningIndex(-1)} ShowCancel={false} 
                Show={props.ShowModal && (warningIndex >= 0)} Message={`Could not Parse User Function on Virtual Channel ${warningIndex >= 0 ? allVirtualChannels[warningIndex].Name : ''}`} />
            <Modal
                ConfirmBtnClass={"btn btn-primary mr-auto"}
                Show={props.ShowModal && (warningIndex < 0)}
                ShowX={true}
                ConfirmText={'Apply'}
                ShowCancel={false}
                Title={'Add/Edit Virtual Channels'}
                CallBack={conf => {
                    if (conf) {
                        let newVirtualChannels: TrenDAP.IVirtualChannelLoaded[] = allVirtualChannels.map(virtualChannel => {
                            const channelKeys = virtualChannel.Channels.map((realChannel) => {
                                const parentKey = props.ParentMap.current.get(realChannel.ParentID);
                                const channelKey = {
                                    Parent: parentKey as number,
                                    Phase: realChannel.Phase,
                                    Type: realChannel.Type,
                                    Harmonic: realChannel.Harmonic
                                }
                                const channelID = props.ChannelMap.current.get(channelKey);
                                if (channelID == null) {
                                    const newParent = AddChannelToMap(channelKey, realChannel, props.ParentMap.current, props.ChannelMap.current);
                                    channelKey.Parent = newParent;
                                } else if (channelID !== realChannel.ID) {
                                    console.warn(`Unexpected mismatch between mapped channel ID (${channelID}) and actual channel ID ${realChannel.ID}`);
                                    console.warn(channelKey)
                                }
                                return { Key: channelKey, Name: realChannel.VariableName};
                            });
    
                            // If a parent ID exists, it shoulld be in the map since we added channels to the channel map
                            const parentKey = props.ParentMap.current.get(virtualChannel?.ParentID);
                            return {
                                ID: virtualChannel.ID,
                                Name: virtualChannel.Name,
                                ParentName: virtualChannel?.ParentName,
                                ParentID: virtualChannel?.ParentID,
                                ParentKey: parentKey,
                                ComponentChannels: channelKeys,
                                Calculation: virtualChannel.Calculation,
                                Threshold: virtualChannel.Threshold
                            }
                        });
                        const badVirtualIndex = findBadVirtualIndex(newVirtualChannels);
                        if (badVirtualIndex >= 0) {
                            setWarningIndex(badVirtualIndex);
                            return;
                        }
                        newVirtualChannels = _.orderBy(newVirtualChannels, ['Name'], ['desc']);
                        if (!_.isEqual(props.VirtualChannels, newVirtualChannels)) props.SetVirtualChannels(newVirtualChannels);
                    }
                    props.SetShowModal(false);
                }}
                Size="xlg"
                DisableConfirm={false}
                BodyStyle={{ height: 'calc(-210px + 100vh)' }}
                ConfirmShowToolTip={true}
                ConfirmToolTipContent="Save Changes"
            >
                <div className="container-fluid d-flex flex-column p-0 h-100">
                    <div className="row h-100">
                        <div className="col-4 h-100" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-info pull-right" onClick={() => {
                                        const newVirtualChannels = [...allVirtualChannels];
                                        newVirtualChannels.push({
                                            ID: `Virtual-${allVirtualChannels.length}`,
                                            Name: `Virtual-${allVirtualChannels.length}`,
                                            ComponentChannels: [],
                                            Calculation: '',
                                            Channels: [],
                                            Threshold: 0
                                        })
                                        setAllVirtualChannels(_.orderBy(newVirtualChannels, [channelSortField], [channelAscending ? 'asc' : 'desc']));
                                    }}>
                                        Add New
                                    </button>
                                </div>
                            </div>
                            <ReactTable.Table<IVirtualChannelEditable>
                                TableClass="table table-hover"
                                TableStyle={{ width: 'calc(100%)', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                                RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                SortKey={virtualSortField}
                                OnClick={(item) => setSelectedVirtual(item.row.ID)}
                                OnSort={sort => {
                                    if (sort.colField === virtualSortField) setVirtualAscending(a => !a);
                                    else {
                                        setVirtualAscending(true);
                                        setVirtualSortField(sort.colField);
                                    }
                                }}
                                Data={allVirtualChannels}
                                Ascending={virtualAscending}
                                KeySelector={(row) => row.ID}
                                Selected={(row) => row.ID === selectedVirtual}
                            >
                                <ReactTable.Column<IVirtualChannelEditable>
                                    Key={'ParentName'}
                                    AllowSort={true}
                                    Field={'ParentName'}
                                    Content={(row) => row.item?.ParentName ?? 'N/A'}
                                >
                                    Parent
                                </ReactTable.Column>
                                <ReactTable.Column<IVirtualChannelEditable>
                                    Key={'Name'}
                                    AllowSort={true}
                                    Field={'Name'}
                                >
                                    Name
                                </ReactTable.Column>
                                <ReactTable.Column<IVirtualChannelEditable>
                                    Key={'ChannelIDs'}
                                    AllowSort={false}
                                    Field={'Channels'}
                                    Content={(row) => row.item.Channels.length}
                                >
                                    Number of Channels
                                </ReactTable.Column>
                            </ReactTable.Table>
                        </div>
                        <div className="col-8 h-100" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div className="row">
                                {
                                    selectedVirtualChannel == null ? <></> :
                                        <div className="col">
                                            <div className='row'>
                                                <div className="col">
                                                    <Input<IVirtualChannelEditable> Record={selectedVirtualChannel} Field='Name' Valid={() => true} Setter={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <Input<IVirtualChannelEditable> Record={selectedVirtualChannel} Field='Threshold' Label='Threshold (ms)' 
                                                        Help='The number entered determines the maximum time difference (ms) to match datapoints when two or more channels have incompatible data intervals or timestamps.'
                                                        Valid={() => true} Setter={handleChange} />
                                                </div>
                                            </div>
                                            <TextArea<IVirtualChannelEditable> Rows={8} Record={selectedVirtualChannel} 
                                                Help="This field represents a formula by which the virtual channel is calculated. Refer to data from component channels by their variable name. Timestamp arguement is allowed as T (ms since UNIX epoch)"
                                                Field='Calculation' Valid={() => true} Setter={handleChange} />
                                            <div className='alert alert-primary' role='alert'>
                                                Min, Avg, and Max calculated is based on the Min, Avg, and Max of the calculated channels and may not reflect the full range of possible computed values
                                            </div>
                                        </div>
                                }
                            </div>
                            <div className="row" style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                {
                                    selectedVirtual == null ? <></> :
                                        <ReactTable.Table<DataSetTypes.IDataSetMetaData>
                                            TableClass="table table-hover"
                                            TableStyle={{ width: 'calc(100%)', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            SortKey={channelSortField}
                                            OnClick={(item) => {
                                                if (selectedVirtualChannel == null) return;

                                                // Find where the change is
                                                const newSelected = { ...selectedVirtualChannel };
                                                const splicedChannelId = newSelected.Channels.findIndex(chan => chan.ID === item.row.ID);

                                                // Edit channel array
                                                if (splicedChannelId === -1) newSelected.Channels.push({...item.row, VariableName: generateQuickName(newSelected.Channels)});
                                                else newSelected.Channels.splice(splicedChannelId, 1);

                                                // Figure out what the parent id and Name is
                                                let parentID = newSelected.Channels.length > 0 ? newSelected.Channels[0].ParentID : undefined;
                                                let parentName: string|undefined = undefined;

                                                if (parentID != null) {
                                                    if (newSelected.Channels.some(chan => chan.ParentID !== parentID)) parentID = undefined;
                                                    else parentName = newSelected.Channels[0].ParentName;
                                                }

                                                newSelected.ParentID = parentID;
                                                newSelected.ParentName = parentName

                                                // Save Change into virtual array
                                                const newAllVirtual = [...allVirtualChannels];
                                                const index = newAllVirtual.findIndex(chan => chan.ID === selectedVirtual);
                                                newAllVirtual[index] = newSelected;
                                                setAllVirtualChannels(newAllVirtual);
                                            }}
                                            OnSort={sort => {
                                                if (sort.colField === channelSortField) setChannelAscending(a => !a);
                                                else {
                                                    setChannelAscending(true);
                                                    setChannelSortField(sort.colField);
                                                }
                                            }}
                                            Data={allChannels}
                                            Ascending={channelAscending}
                                            KeySelector={(row) => row.ID}
                                            Selected={(row) => selectedVirtualChannel?.Channels.find(c => c.ID === row.ID) != null}
                                        >
                                            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                                                Key={'ParentName'}
                                                AllowSort={true}
                                                Field={'ParentName'}
                                            >
                                                Parent
                                            </ReactTable.Column>
                                            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                                                Key={'Name'}
                                                AllowSort={true}
                                                Field={'Name'}
                                            >
                                                Name
                                            </ReactTable.Column>
                                            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                                                Key={'Type'}
                                                AllowSort={true}
                                                Field={'Type'}
                                            >
                                                Type
                                            </ReactTable.Column>
                                            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                                                Key={'Phase'}
                                                AllowSort={true}
                                                Field={'Phase'}
                                            >
                                                Phase
                                            </ReactTable.Column>
                                            <ReactTable.Column<IMetaDataVariableName>
                                                Key={'VariableName'}
                                                AllowSort={true}
                                                Field={'VariableName'}
                                                Content={row => {
                                                    const recordIndex = selectedVirtualChannel?.Channels?.findIndex(item => row.item.ID === item.ID) ?? -1;
                                                    const record = selectedVirtualChannel?.Channels[recordIndex] ?? {...row.item, VariableName: 'N/A'};
                                                    return (
                                                        <div onClick={e => e.stopPropagation()}>
                                                            <Input<IMetaDataVariableName> Record={record} Field='VariableName' Disabled={recordIndex === -1}
                                                                Setter={newRecord => {
                                                                    if (recordIndex === -1) return;

                                                                    const newSelected = { ...selectedVirtualChannel } as IVirtualChannelEditable;
                                                                    newSelected.Channels.splice(recordIndex, 1, newRecord);

                                                                    // Save Change into virtual array
                                                                    const newAllVirtual = [...allVirtualChannels];
                                                                    const index = newAllVirtual.findIndex(chan => chan.ID === selectedVirtual);
                                                                    newAllVirtual[index] = newSelected;
                                                                    setAllVirtualChannels(newAllVirtual);
                    
                                                                    // Edit channel array
                                                                }} Feedback="Variable name must be unique" Label=""
                                                                Valid={() => recordIndex === -1 || selectedVirtualChannel == null || (
                                                                    record.VariableName !== 'T' &&
                                                                    !selectedVirtualChannel.Channels.some(chan => chan.VariableName === record.VariableName && record.ID !== chan.ID)
                                                                )} 
                                                            />
                                                        </div>);

                                                }}
                                            >
                                                Variable Name
                                            </ReactTable.Column>
                                        </ReactTable.Table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default VirtualChannels;