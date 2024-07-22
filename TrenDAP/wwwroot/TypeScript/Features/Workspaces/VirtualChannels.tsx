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
import { Modal } from '@gpa-gemstone/react-interactive';
import { Input, TextArea } from '@gpa-gemstone/react-forms';
import { ReactTable } from '@gpa-gemstone/react-table';
import * as _ from 'lodash';
import { AddChannelToMap } from './Workspace';
import { keyReadableName } from '../Widgets/HelperFunctions';

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

interface IVirtualChannelEditable extends TrenDAP.IVirtualChannelLoaded {
    Channels: DataSetTypes.IDataSetMetaData[]
}

const VirtualChannels: React.FC<IProps> = (props) => {
    const [allVirtualChannels, setAllVirtualChannels] = React.useState<IVirtualChannelEditable[]>([]);
    const [virtualAscending, setVirtualAscending] = React.useState<boolean>(true);
    const [virtualSortField, setVirtualSortField] = React.useState<keyof IVirtualChannelEditable>('Name');
    const [selectedVirtual, setSelectedVirtual] = React.useState<string>(undefined);

    const selectedVirtualChannel = React.useMemo(() => allVirtualChannels.find(channel => channel.ID === selectedVirtual), [selectedVirtual, allVirtualChannels]);
    const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>([]);
    const [channelAscending, setChannelAscending] = React.useState<boolean>(true);
    const [channelSortField, setChannelSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Name');

    React.useEffect(() => {
        if (allVirtualChannels.length === 0) return;
        setAllVirtualChannels(_.orderBy(allVirtualChannels, [virtualSortField], [virtualAscending ? 'asc' : 'desc']));
    }, [virtualSortField, virtualAscending]);

    React.useEffect(() => {
        if (props.VirtualChannels == null) return;
        const ediableVirtuals: IVirtualChannelEditable[] = props.VirtualChannels.map(chan => {
            const channels = chan.ComponentChannels.map(key => {
                const id = props.ChannelMap.current.get(key);
                if (id == null) {
                    console.error(`Key expected not found in channel map: ${key}`);
                    return;
                }
                const channel = props.AllChannels.find(chan => chan.ID === id);
                if (channel == null) console.error(`Channel expected not found in all channels with ID: ${id}`);
                return channel;

            });
            return { ...chan, Channels: channels }
        });

        setAllVirtualChannels(_.orderBy(ediableVirtuals, [virtualSortField], [virtualAscending ? 'asc' : 'desc']));
    }, [props.VirtualChannels]);

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

    return (
        <>
            <Modal
                ConfirmBtnClass={"btn btn-success mr-auto"}
                Show={props.ShowModal}
                ShowX={true}
                ConfirmText={'Apply'}
                CancelText={'Exit'}
                Title={'Add/Edit Virtual Channels'}
                CallBack={conf => {
                    const newVirtualChannels: TrenDAP.IVirtualChannelLoaded[] = _.orderBy(allVirtualChannels, ['Name'], ['desc']).map(virtualChannel => {
                        const channelKeys = virtualChannel.Channels.map((realChannel) => {
                            const parentKey = props.ParentMap.current.get(realChannel.ParentID);
                            const channelKey = {
                                Parent: parentKey,
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
                            return channelKey;
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
                            Calculation: virtualChannel.Calculation
                        }
                    });
                    if (conf && !_.isEqual(props.VirtualChannels, newVirtualChannels)) props.SetVirtualChannels(newVirtualChannels);
                    props.SetShowModal(false);
                }}
                Size="xlg"
                DisableConfirm={false}
                BodyStyle={{ height: 'calc(-210px + 100vh)' }}
                ConfirmShowToolTip={true}
                ConfirmToolTipContent="Save Changes"
                ShowCancel={true}
            >
                <div className="container-fluid d-flex flex-column p-0 h-100">
                    <div className="row h-100">
                        <div className="col-4 h-100">
                            <button className="btn btn-primary pull-right" onClick={() => {
                                const newVirtualChannels = [...allVirtualChannels];
                                newVirtualChannels.push({
                                    ID: `Virtual-${allVirtualChannels.length}`,
                                    Name: `Virtual-${allVirtualChannels.length}`,
                                    ComponentChannels: [],
                                    Calculation: '',
                                    Channels: []
                                })
                                setAllVirtualChannels(_.orderBy(newVirtualChannels, [channelSortField], [channelAscending ? 'asc' : 'desc']));;
                            }}>
                                Add New
                            </button>
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
                        <div className="col-8 h-100">
                            <div className="row h-50 p-0">
                                {
                                    selectedVirtual == null ? <></> :
                                        <div className="col">
                                            <Input<IVirtualChannelEditable> Record={selectedVirtualChannel} Field='Name' Valid={() => true} Setter={handleChange} />
                                            <TextArea<IVirtualChannelEditable> Rows={8} Record={selectedVirtualChannel} Field='Calculation' Valid={() => true} Setter={handleChange} />
                                        </div>
                                }
                            </div>
                            <div className="row h-50 p-0">
                                {
                                    selectedVirtual == null ? <></> :
                                        <ReactTable.Table<DataSetTypes.IDataSetMetaData>
                                            TableClass="table table-hover"
                                            TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                            TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            SortKey={channelSortField}
                                            OnClick={(item) => {
                                                if (selectedVirtualChannel == null) return;

                                                // Find where the change is
                                                const newSelected = { ...selectedVirtualChannel };
                                                const splicedChannelId = newSelected.Channels.findIndex(chan => chan.ID === item.row.ID);

                                                // Edit channel ID array
                                                if (splicedChannelId === -1) newSelected.Channels.push(item.row);
                                                else newSelected.Channels.splice(splicedChannelId, 1);

                                                // Figure out what the parent id and Name is
                                                let parentID = newSelected.Channels.length > 0 ? newSelected.Channels[0].ParentID : undefined;
                                                let parentName = undefined;

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
                                            Selected={(row) => selectedVirtualChannel.Channels.find(c => c.ID === row.ID) != null}
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
                                            <ReactTable.Column<DataSetTypes.IDataSetMetaData>
                                                Key={'Key'}
                                                AllowSort={true}
                                                Field={'ID'}
                                                Content={row => keyReadableName({
                                                        Parent: props.ParentMap.current.get(row.item.ParentID) as number,
                                                        Phase: row.item.Phase,
                                                        Type: row.item.Type,
                                                        Harmonic: row.item.Harmonic
                                                    })
                                                }
                                            >
                                                Reference Name
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