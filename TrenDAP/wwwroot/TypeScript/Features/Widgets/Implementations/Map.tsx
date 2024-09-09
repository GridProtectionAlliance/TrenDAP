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
import { HsvToHex } from '@gpa-gemstone/helper-functions';
import moment from 'moment';

require("leaflet_css");

interface IProps {
    CenterLat: number,
    CenterLong: number,
    Zoom: number,
    UseZoomControls: boolean,
    Type: ('HeatMap' | 'Static' | 'Static-Color' | 'Static-Size'),
    PopupHeader: ('Parent' | 'Channel' | 'Both'),
    Animated: boolean,
    AnimationTime: number
}

interface IChannelSettings {
    Color: string,
    Size: number,
    Field: TrenDAP.SeriesField
}

// in ms, maybe be settable sometime?
const animationStep = 500;

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
        Zoom: 6,
        Type: 'Static-Color',
        UseZoomControls: true,
        PopupHeader: ('Channel'),
        Animated: true,
        AnimationTime: 20
    },
    DefaultChannelSettings: {
        Color: 'red',
        Size: 10,
        Field: 'Average'
    },
    DefaultEventSourceSettings: null,
    WidgetUI: (props) => {
        const divRef = React.useRef<HTMLDivElement>(null);
        const map = React.useRef<leaflet.Map>(null);
        const mapSize = React.useRef<{ Height: number, Width: number }>();
        const circleLayers = React.useRef<leaflet.LayerGroup>(null);
        const circles = React.useRef<leaflet.CircleMarker[]>([]);
        const animationTimeout = React.useRef<{ timeout?: NodeJS.Timeout, animationTime: number, cleanup?: () => void }>({ animationTime: 0 });

        const grouppedData = React.useMemo(() => {
            const validData = props.Data.filter(datum => datum.Latitude != null && datum.Longitude != null);
            // We are groupping all longitudes together, then doing another group within those groups for latitudes
            const longitudeGroup = _.groupBy(validData, 'Longitude');
            const latitudeGroup = Object.keys(longitudeGroup).map(key => _.groupBy(longitudeGroup[key], 'Latitude'));
            // Unpacking the groups into a array of arrays
            return latitudeGroup.flatMap((innerGroup) =>
                Object.keys(innerGroup).map(groupKey =>
                    innerGroup[groupKey]
                )
            );
        }, [props.Data]);

        const isAnimated = React.useMemo(() => (
            props.Settings.Animated && (props.Settings.Type === 'Static-Color' || props.Settings.Type === 'Static-Size')
        ), [props.Settings.Type, props.Settings.Animated])

        const limitValues = React.useMemo(() => {
            const compareToAll = props.Settings.Animated && (props.Settings.Type === 'Static-Color' || props.Settings.Type === 'Static-Size');
            const validData = props.Data.filter(channelData => channelData.Latitude != null && channelData.Longitude != null);
            // We're looking for time when everything starts to have data
            const startTime = Math.max(...validData
                .map(channelData => channelData.SeriesData[channelData.ChannelSettings.Field]?.[0]?.[0])
                .filter(datum => datum != undefined)
            );
            const endTime = Math.min(...validData
                .map(channelData => channelData.SeriesData[channelData.ChannelSettings.Field]?.[channelData.SeriesData[channelData.ChannelSettings.Field].length - 1]?.[0])
                .filter(datum => datum != undefined)
            );
            const maxValue = (compareToAll ?
                Math.max(...validData
                    .flatMap(channelData => channelData.SeriesData[channelData.ChannelSettings.Field]
                        ?.map(datum => datum[1])
                    ).filter(datum => datum != undefined)
                ) :
                Math.max(...validData
                    .map(channelData => channelData.SeriesData[channelData.ChannelSettings.Field]?.[0]?.[1])
                    .filter(datum => datum != undefined)
                )
            );
            const minValue = (compareToAll ?
                Math.min(...validData
                    .flatMap(channelData => channelData.SeriesData[channelData.ChannelSettings.Field]
                        ?.map(datum => datum[1])
                    ).filter(datum => datum != undefined)
                ) :
                Math.min(...validData
                    .map(channelData => channelData.SeriesData[channelData.ChannelSettings.Field]?.[0]?.[1])
                    .filter(datum => datum != undefined)
                )
            );
            return { min: minValue, max: maxValue, start: startTime, end: endTime };
        }, [props.Data, props.Settings.Type, props.Settings.Animated]);

        const getHeaderTitle = React.useCallback((channelSettings: WidgetTypes.IWidgetData<IChannelSettings>) => {
            switch (props.Settings.PopupHeader) {
                case "Parent":
                    return channelSettings.ParentName;
                case "Channel":
                    return channelSettings.Name;
                case "Both":
                    return `${channelSettings.ParentName} - ${channelSettings.Name}`
            }
        }, [props.Settings.PopupHeader]);

        const updateCircles = React.useCallback((animationTimeStamp: number, firstAnimation: boolean) => {
            if (map.current == null || circleLayers.current == null) return;

            const retrieveValue = (channel: WidgetTypes.IWidgetData<IChannelSettings>, datumIndex: number) => channel.SeriesData[channel.ChannelSettings.Field]?.[datumIndex]?.[1];
            const calculatePercentage = (channel: WidgetTypes.IWidgetData<IChannelSettings>, datumIndex: number) => (retrieveValue(channel, datumIndex) - limitValues.min) / (limitValues.max - limitValues.min);

            let control;
            if (isAnimated) {
                const controlText = `<div>${moment.utc(animationTimeStamp).format("ddd MMM Do, YYYY HH:mm")}</div>`;
                if (firstAnimation) {
                    const text = leaflet.DomUtil.create('div');
                    const textbox = leaflet.Control.extend({
                        onAdd: () => {
                            text.id = "animationInfo";
                            text.innerHTML = controlText;
                            text.style.border = "solid";
                            text.style.width = "13em";
                            text.style.textAlign = "center";
                            text.style.fontSize = "2em";
                            text.style.background = "white";
                            return text;
                        },
                        onRemove: () => {
                            if (text != null) leaflet.DomUtil.remove(text);
                        }
                    });
                    control = new textbox({ position: 'topright' });
                    control.addTo(map.current)
                } else {
                    const text = leaflet.DomUtil.get("animationInfo");
                    text.innerHTML = controlText;
                }
            }

            grouppedData.forEach((group, groupIndex) => {
                const groupIndices = group.map(channel => channel.SeriesData[channel.ChannelSettings.Field]
                    ?.findIndex(datum => datum[0] >= animationTimeStamp));

                const maxGroupChannel = group.reduce((prevMax: { channel: WidgetTypes.IWidgetData<IChannelSettings>, datumIndex: number }, channel, index) => {
                    if (retrieveValue(channel, groupIndices[index]) > retrieveValue(prevMax.channel, prevMax.datumIndex))
                        return { channel: channel, datumIndex: groupIndices[index] };
                    else return prevMax;
                }, { channel: group[0], datumIndex: groupIndices[0] });
                let groupColor = maxGroupChannel.channel.ChannelSettings.Color;
                const colorStatic = props.Settings.Type === 'Static' || props.Settings.Type === 'Static-Color';
                if (!colorStatic)
                    groupColor = HsvToHex(0, 1, calculatePercentage(maxGroupChannel.channel, maxGroupChannel.datumIndex));
                let groupSize = Math.max(...group.map(channel => channel.ChannelSettings.Size));
                if (props.Settings.Type !== 'Static-Size' && props.Settings.Type !== 'Static')
                    groupSize = 5 + calculatePercentage(maxGroupChannel.channel, maxGroupChannel.datumIndex) * 10;

                const popupString = group.map((d, index) =>
                    `<b><span style="color: ${(colorStatic ? d.ChannelSettings.Color : HsvToHex(0, 1, calculatePercentage(d, groupIndices[index])))}">• </span>${getHeaderTitle(d)}</b>
                    <br>Value: ${retrieveValue(d, groupIndices[index])} (${d?.Unit})`).join('<br>');

                const circleOptions: leaflet.CircleMarkerOptions = {
                    color: groupColor,
                    fillColor: groupColor,
                    radius: groupSize * 1000
                }

                if (firstAnimation) {
                    const circle = leaflet.circle([group[0].Latitude, group[0].Longitude], circleOptions);
                    circle.bindPopup(popupString);
                    circles.current.push(circle);
                    circleLayers.current.addLayer(circle);
                } else {
                    const circle = circles.current?.[groupIndex];
                    if (circle != null) {
                        circle.setPopupContent(popupString);
                        circle.setStyle(circleOptions);
                        circle.setRadius(circleOptions.radius);
                    }
                }
            });

            return () => {
                if (circleLayers.current != null) circleLayers.current.clearLayers();
                if (control != null) control.remove();
                if (circles.current != null && circles.current.length !== 0) circles.current = [];
            };
        }, [grouppedData, getHeaderTitle, limitValues, props.Settings.Type, isAnimated]);

        React.useLayoutEffect(() => {
            if (divRef.current != null && map.current != null) {
                let newSize = { Height: divRef.current.offsetHeight, Width: divRef.current.offsetWidth }
                if (!_.isEqual(newSize, mapSize.current)) {
                    mapSize.current = newSize;
                    map.current.invalidateSize();
                }
            }
        });

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
            if (props.Settings.Type !== 'HeatMap') return;
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
        }, [props.Data, props.Settings.Type]);

        React.useEffect(() => {
            // Clear and reset animation
            clearInterval(animationTimeout.current.timeout);
            animationTimeout.current.animationTime = 0;

            if (map.current == null || props.Settings.Type === 'HeatMap') return;

            // Only need to set the interval if we need to animate
            if (isAnimated) {
                animationTimeout.current.timeout = setInterval(() => {
                    animationTimeout.current.animationTime = (animationTimeout.current.animationTime + animationStep / 1000) % props.Settings.AnimationTime;
                    const animationTimeStamp = (animationTimeout.current.animationTime / props.Settings.AnimationTime) * (limitValues.end - limitValues.start) + limitValues.start;
                    updateCircles(animationTimeStamp, false);
                }, animationStep);
            }
            return updateCircles(0, true);
        }, [updateCircles, props.Settings.Type, isAnimated, props.Settings.AnimationTime]);

        return (
            <div className="d-flex h-100 flex-column" ref={divRef} />
        )
    },
    SettingsUI: (props) => {
        const valid = (field: keyof IProps) => {
            if (field === 'AnimationTime') return (props.Settings.Type === 'Static' || props.Settings.Type === 'HeatMap' || !props.Settings.Animated || props.Settings.AnimationTime > 0);
            return true;
        }

        React.useEffect(() => {
            const errors: string[] = [];
            if (!valid('AnimationTime')) errors.push("Animation time must be positive");
            props.SetErrors(errors);
        }, [props.Settings]);

        return <>
            <div className="row">
                <div className="col-12">
                    <Input<IProps> Field='CenterLat' Record={props.Settings} Type='number' Label='Latitude' Setter={(r) => props.SetSettings(r)} Valid={(field) => true} Help={"The latitude for the map's initial center position."} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Input<IProps> Field='CenterLong' Record={props.Settings} Type='number' Label='Longitude' Setter={(r) => props.SetSettings(r)} Valid={(field) => true} Help={"The longitude for the map's initial center position."} />
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
                    <RadioButtons<IProps> Field='Type' Record={props.Settings} Setter={(r) => props.SetSettings(r)} Label="Map Type" Position="vertical"
                        Options={[
                            { Label: 'Static Circle Markers', Value: 'Static' },
                            { Label: 'Dynamic Size Circle Markers', Value: 'Static-Color' },
                            { Label: 'Dynamic Color Circle Markers', Value: 'Static-Size' },
                            { Label: 'Heat Map', Value: 'HeatMap' }
                        ]} />
                </div>
                <div className="col-6">
                    <RadioButtons<IProps> Field='PopupHeader' Record={props.Settings} Setter={(r) => props.SetSettings(r)} Label="Popup Header" Help="Header used when a circle marker is clicked." Position="vertical"
                        Options={[
                            { Label: 'Parent Name', Value: 'Parent', Disabled: props.Settings.Type === "HeatMap" },
                            { Label: 'Channel Name', Value: 'Channel', Disabled: props.Settings.Type === "HeatMap" },
                            { Label: 'Both', Value: 'Both', Disabled: props.Settings.Type === "HeatMap" }
                        ]} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Input<IProps> Field='AnimationTime' Record={props.Settings} Type='number' Setter={(r) => props.SetSettings(r)} Valid={valid} Label="Animation Time (s)"
                        Help={"Ammount of time animation takes, in seconds"} Feedback="Animation time must be a positive value"
                        Disabled={props.Settings.Type === 'Static' || props.Settings.Type === 'HeatMap' || !props.Settings.Animated} />
                </div>
                <div className="col-6">
                    <label style={{ display: 'block' }}>&nbsp;</label>
                    <ToggleSwitch<IProps> Field='Animated' Record={props.Settings} Setter={(r) => props.SetSettings(r)} Label="Animate Dynamic Markers"
                        Disabled={props.Settings.Type === 'Static' || props.Settings.Type === 'HeatMap'} />
                </div>
            </div>
        </>
    },
    ChannelSelectionUI: (props) => {
        const [allChannels, setAllChannels] = React.useState<DataSetTypes.IDataSetMetaData[]>(props.AllChannels);
        const [ascending, setAscending] = React.useState<boolean>(false);
        const [sortField, setSortField] = React.useState<keyof DataSetTypes.IDataSetMetaData>('Phase');

        const valid = React.useCallback((record: IChannelSettings, field: keyof IChannelSettings) => {
            if (record == null) return true;
            if (field === 'Size') return record.Size > 0;
            return true;
        }, []);

        React.useEffect(() => {
            const errors: string[] = [];
            if (props.SelectedChannels.some(channel => !valid(channel.ChannelSettings, 'Size'))) errors.push("All channel size variables must be positive");
            props.SetErrors(errors);
        }, [props.SelectedChannels]);

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
                                Style={{ backgroundColor: row.item.ChannelSettings.Color, borderColor: row.item.ChannelSettings.Color }} Disabled={props.Settings.Type !== 'Static-Color' && props.Settings.Type !== 'Static'} />
                        }
                    >
                        Color
                    </ReactTable.Column>
                    <ReactTable.Column<WidgetTypes.ISelectedChannels<IChannelSettings>>
                        Key={'Size'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={(row) =>
                            <Input<IChannelSettings> Record={row.item?.ChannelSettings} Label="" Field="Size" Setter={(item) => props.SetChannelSettings(row.item.Key, item)}
                                Disabled={props.Settings.Type !== 'Static-Size' && props.Settings.Type !== 'Static'} Valid={field => valid(row.item?.ChannelSettings, field)} />
                        }
                    >
                        Size
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
