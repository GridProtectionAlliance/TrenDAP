//******************************************************************************************************
//  Map.tsx - Gbtc
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
//  6/07/2024 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, DataSetTypes } from '../../../global';
import { Input, Select, ColorPicker, RadioButtons, ToggleSwitch } from '@gpa-gemstone/react-forms';
import { ReactTable } from '@gpa-gemstone/react-table';
import { WidgetTypes } from '../Interfaces';
import { sort } from '../HelperFunctions';
import HeatMap from 'leaflet-heatmap'
import leaflet from 'leaflet';
import _ from 'lodash';
import { channel } from 'diagnostics_channel';

require("leaflet_css");

interface IProps {
    CenterLat: number,
    CenterLong: number,
    Zoom: number,
    UseZoomControls: boolean,
    Type: ('HeatMap' | 'Map'),
    PopupHeader: ('Parent' | 'Channel' | 'Both'),
}

interface IChannelSettings {
    Color: string,
    Field: TrenDAP.SeriesField
}

const mapServer = {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <br>' +
        '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd'
}

export const Map: WidgetTypes.IWidget<IProps, IChannelSettings, null> = {
    Name: "Map",
    DefaultSettings: {
        CenterLat: 35.045631,
        CenterLong: -85.309677,
        Zoom: 5,
        Type: 'Map',
        UseZoomControls: true,
        PopupHeader: ('Channel')
    },
    DefaultChannelSettings: {
        Color: 'red',
        Field: 'Average'
    },
    DefaultEventSourceSettings: null,
    WidgetUI: (props) => {
        const divRef = React.useRef<HTMLDivElement>(null);
        const map = React.useRef<leaflet.Map>(null);
        const mapSize = React.useRef<{ Height: number, Width: number }>()
        const circleLayers = React.useRef<leaflet.LayerGroup>(null);

        React.useLayoutEffect(() => {
            if (divRef.current != null && map.current != null) {
                let newSize = { Height: divRef.current.offsetHeight, Width: divRef.current.offsetWidth }
                if (!_.isEqual(newSize, mapSize.current)) {
                    mapSize.current = newSize;
                    map.current.invalidateSize();
                }
            }
        })

        React.useEffect(() => {
            if (divRef == null) return;

            map.current = leaflet.map(divRef.current,
                {
                    center: [props.Settings.CenterLat, props.Settings.CenterLong],
                    zoom: props.Settings.Zoom,
                    zoomControl: props.Settings.UseZoomControls
                });

            leaflet.tileLayer(mapServer.url, {
                maxZoom: 19,
                minZoom: 0,
                subdomains: mapServer.subdomains,
                detectRetina: true,
                attribution: mapServer.attribution,
            }).addTo(map.current);

            circleLayers.current = leaflet.layerGroup().addTo(map.current);
        }, []);

        React.useEffect(() => {
            if (map.current != null) {
                map.current.setZoom(props.Settings.Zoom);
                map.current.setView([props.Settings.CenterLat, props.Settings.CenterLong]);

                if (props.Settings.UseZoomControls)
                    map.current.zoomControl.addTo(map.current);
                else
                    map.current.zoomControl.remove();
            }

        }, [props.Settings])

        React.useEffect(() => {
            if (map.current == null) return;
            if (props.Settings.Type === 'HeatMap') {
                const cfg = {
                    radius: 2,
                    maxOpacity: .8,
                    scaleRadius: true,
                    useLocalExtrema: true,
                    latField: 'Lat',
                    lngField: 'Long',
                    valueField: 'Frequency'
                };

                const heatmapLayer = new HeatMap(cfg);
                heatmapLayer.setData({
                    data: props.Data
                    .filter(d => d.Latitude != null && d.Longitude != null)
                    .map(d => ({ Name: d.Name, Frequency: d.SeriesData[d.ChannelSettings.Field]?.[0]?.[1], Lat: d.Latitude, Long: d.Longitude })) 
                });
                heatmapLayer.addTo(map.current);

                return () => { map.current.removeLayer(heatmapLayer); }
            }

            const circleCleanup = updateCircles();
            return circleCleanup;

        }, [props.Data, props.Settings.Type, props.Settings.PopupHeader])

        const updateCircles = () => {
            if (map.current == null || circleLayers.current == null) return;


            const validData = props.Data.filter(datum => datum.Latitude != null && datum.Longitude != null);
            // We are groupping all longitudes together, then doing another group within those groups for latitudes
            const longitudeGroup = _.groupBy(validData, 'Longitude');
            const latitudeGroup = Object.keys(longitudeGroup).map(key => _.groupBy(longitudeGroup[key], 'Latitude'));
            // Unpacking the groups into a array of arrays
            const grouppedData = latitudeGroup.flatMap((innerGroup) =>
                Object.keys(innerGroup).map(groupKey =>
                    innerGroup[groupKey]
                )
            );

            function getHeaderTitle(channelSettings: WidgetTypes.IWidgetData<IChannelSettings>) {
                switch (props.Settings.PopupHeader) {
                    case "Parent":
                        return channelSettings.ParentName;
                    case "Channel":
                        return channelSettings.Name;
                    case "Both":
                        return `${channelSettings.ParentName} - ${channelSettings.Name}`
                }
            };

            grouppedData.forEach(group => {
                let circle = leaflet.circle([group[0].Latitude, group[0].Longitude], {
                    color: group[0].ChannelSettings.Color,
                    fillColor: group[0].ChannelSettings.Color,
                    radius: 3.5
                });

                circle.bindPopup(group.map(d =>
                    `<b><span style="color: ${d.ChannelSettings.Color}">• </span>${getHeaderTitle(d)}</b>
                    <br>Value: ${d.SeriesData[d.ChannelSettings.Field]?.[0]?.[1]} (${d?.Unit})`).join('<br>'));

                circleLayers.current.addLayer(circle);
            });

            return () => {
                if (circleLayers.current != null)
                    circleLayers.current.clearLayers();
            };
        }


        return (
            <div className="d-flex h-100 flex-column" ref={divRef} />
        )
    },
    SettingsUI: (props) => {
        return <>
            <div className="row">
                <div className="col-12">
                    <Input<IProps> Field='CenterLat' Record={props.Settings} Type='number' Setter={(r) => props.SetSettings(r)} Valid={(field) => true} Help={"The latitude for the map's initial center position."} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Input<IProps> Field='CenterLong' Record={props.Settings} Type='number' Setter={(r) => props.SetSettings(r)} Valid={(field) => true} Help={"The longitude for the map's initial center position."} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Input<IProps> Field='Zoom' Record={props.Settings} Type='number' Setter={(r) => props.SetSettings(r)} Valid={(field) => true} Help={"The initial zoom level of the map."} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ToggleSwitch<IProps> Field='UseZoomControls' Record={props.Settings} Setter={(r) => props.SetSettings(r)} Label="Zoom Controls" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <RadioButtons<IProps> Field='Type' Record={props.Settings} Setter={(r) => props.SetSettings(r)} Label="Map Type" Options={[{ Label: 'Circle Markers', Value: 'Map' }, { Label: 'Heat Map', Value: 'HeatMap' }]} />
                </div>
                <div className="col-6">
                    <RadioButtons<IProps> Field='PopupHeader' Record={props.Settings} Setter={(r) => props.SetSettings(r)} Label="Popup Header" Help="Header used when a circle marker is clicked."
                        Options={[
                            { Label: 'Parent Name', Value: 'Parent', Disabled: props.Settings.Type === "HeatMap" },
                            { Label: 'Channel Name', Value: 'Channel', Disabled: props.Settings.Type === "HeatMap" },
                            { Label: 'Both', Value: 'Both', Disabled: props.Settings.Type === "HeatMap" }
                        ]} />
                </div>
            </div>
        </>
    },
    ChannelSelectionUI: (props) => {
        const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>(props.AllChannels);
        const [ascending, setAscending] = React.useState<boolean>(false);
        const [sortField, setSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Phase');

        return <>
            <div className="h-50 p-0 row">
                <ReactTable.Table<DataSetTypes.IDataSetMetaData>
                    TableClass="table table-hover"
                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    SortKey={sortField}
                    OnClick={(item) => {
                        const isSelected = props.SelectedChannels?.find(c => c.MetaData.ID === item.row.ID);
                        if (isSelected ?? false)
                            props.RemoveChannel(item.row.ID);
                        else
                            props.AddChannel(item.row.ID, Map.DefaultChannelSettings);
                    }}
                    OnSort={data => sort(data.colField, sortField, setSortField, data.ascending, setAscending, ascending, allChannels, setAllChannels)}
                    Data={allChannels}
                    Ascending={ascending}
                    KeySelector={(row) => row.ID}
                    Selected={(row) => props.SelectedChannels?.find(c => c.MetaData.ID === row.ID) != null ? true : false}
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
                </ReactTable.Table>
            </div>
            <div className="row" style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 0 }}>
                <ReactTable.Table<WidgetTypes.ISelectedChannels<IChannelSettings>>
                    TableClass="table table-hover"
                    TableStyle={{ width: 'calc(100%)', height: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    SortKey={"ChannelKey"}
                    OnSort={() => { }}
                    Data={props.SelectedChannels}
                    Ascending={ascending}
                    KeySelector={(row, idx) => idx}
                >
                    <ReactTable.Column<WidgetTypes.ISelectedChannels<IChannelSettings>>
                        Key={'Parent'}
                        AllowSort={true}
                        Field={'MetaData'}
                        Content={(row) => <p>{row.item.MetaData.ParentName}</p>}
                    >
                        Parent
                    </ReactTable.Column>
                    <ReactTable.Column<WidgetTypes.ISelectedChannels<IChannelSettings>>
                        Key={'Name'}
                        AllowSort={true}
                        Field={'MetaData'}
                        Content={(row) => <p>{row.item.MetaData.Name}</p>}
                    >
                        Channel
                    </ReactTable.Column>

                    <ReactTable.Column<WidgetTypes.ISelectedChannels<IChannelSettings>>
                        Key={'Type'}
                        AllowSort={true}
                        Field={'MetaData'}
                        Content={(row) => <p>{row.item.MetaData.Type}</p>}
                    >
                        Type
                    </ReactTable.Column>
                    <ReactTable.Column<WidgetTypes.ISelectedChannels<IChannelSettings>>
                        Key={'Phase'}
                        AllowSort={true}
                        Field={'MetaData'}
                        Content={(row) => <p>{row.item.MetaData.Phase}</p>}
                    >
                        Phase
                    </ReactTable.Column>
                    <ReactTable.Column<WidgetTypes.ISelectedChannels<IChannelSettings>>
                        Key={'Color'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={(row) =>
                            <ColorPicker<IChannelSettings> Record={row.item?.ChannelSettings} Label="Color" Field="Color" Setter={(item) => props.SetChannelSettings(row.item.Key, item)}
                                Style={{ backgroundColor: row.item.ChannelSettings.Color, borderColor: row.item.ChannelSettings.Color }} Disabled={props.Settings.Type == "HeatMap"} />
                        }
                    >
                        Color
                    </ReactTable.Column>
                    <ReactTable.Column<TrenDAP.IWidgetChannels<IChannelSettings>>
                        Key={'SeriesField'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={(row) =>
                            <Select<IChannelSettings> Record={row.item?.ChannelSettings} Label="" Field="Field" Setter={(item) => props.SetChannelSettings(row.item.Key, item)}
                                Options={[{ Label: 'Average', Value: 'Average' }, { Label: 'Minimum', Value: 'Minimum' }, { Label: 'Maximum', Value: 'Maximum' }]} />
                        }
                    >
                        Field
                    </ReactTable.Column>
                </ReactTable.Table>
            </div>
        </>
    }
}
