//******************************************************************************************************
//  Text.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//  5/16/2024 - Preston Crawford
//       Refactored Widget to new IWidget interface
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP, DataSetTypes } from '../../../global';
import { Input, Select, ColorPicker, CheckBox } from '@gpa-gemstone/react-forms';
import { ReactTable } from '@gpa-gemstone/react-table';
import { WidgetTypes } from '../Interfaces';
import { sort } from '../HelperFunctions';

import _ from 'lodash';
import * as d3 from 'd3';

interface IProps {
    XAxisLabel: string,
    YAxisLabel: string,
    BinCount: number,
}

interface IChannelSettings {
    Color: string,
    Field: TrenDAP.SeriesField,
    Profile: boolean,
}

export const HistogramWidget: WidgetTypes.IWidget<IProps, IChannelSettings, any> = {
    Name: "Histogram",
    DefaultSettings: { XAxisLabel: 'Value', YAxisLabel: 'Count', BinCount: 15 },
    DefaultChannelSettings: { Color: 'Red', Field: 'Average', Profile: false },
    DefaultEventSourceSettings: null,
    WidgetUI: (props) => {
        const plotRef = React.useRef<HTMLDivElement>(null);
        const [plotSize, setPlotSize] = React.useState<{ Height: number, Width: number }>()

        React.useLayoutEffect(() => {
            if (plotRef.current != null) {
                const newSize = { Height: plotRef.current.offsetHeight, Width: plotRef.current.offsetWidth }
                if (!_.isEqual(newSize, plotSize))
                    setPlotSize(newSize)
            }
        })

        React.useEffect(() => {
            Initialize();
        }, [props.Data, props.Settings, plotSize])

        function Initialize() {
            if(plotRef.current == null || props.Data.length === 0) return;
            const hasProfile = props.Data.some(data => data.ChannelSettings.Profile);
            const margin = { bottom: 50, left: 50, top: 25, right: (hasProfile ? 50 : 10) };

            // Remove old plot
            d3.select(plotRef.current).selectAll('svg').remove();

            // Create new svg
            const svg = d3.select(plotRef.current)
                .append('svg')
                .attr('width', plotRef.current.offsetWidth)
                .attr('height', plotRef.current.offsetHeight)

            if (props.Data == null || props.Data.length == 0)
                return;

            const allData = props.Data.map(data => ({
                Settings: data.ChannelSettings,
                data: data.SeriesData[data.ChannelSettings.Field].map(d => d[1])
            }));

            const binsAndProfiles = allData.map(data => {
                const bins = d3.bin<number, number>()
                    .thresholds(props.Settings.BinCount)
                    .value(d => d)(data.data);

                const profile = data.Settings.Profile ? bins.map((bin, i) => ({
                    Bin: bin.x0,
                    Value: bins.slice(0, i + 1).reduce((acc, cur) => acc + cur.length, 0)
                })) : null;

                return { bins, profile, settings: data.Settings };
            });

            const allBins = binsAndProfiles.flatMap(({ bins, settings }) => bins.map(bin => ({ bin, settings })));
            const profiles = binsAndProfiles.map(({ profile, settings }) => profile != null ? { Color: settings.Color, Profile: profile } : null).filter(p => p != null);

            //Make sure to use min and max from bins instead of from the data itself or scaling issues will occur..
            const xMax = d3.max(allBins, d => d.bin.x1);
            const xMin = d3.min(allBins, d => d.bin.x0);
            const yMax = d3.max(allBins, d => d.bin.length);
            const pyMax = Math.max(...profiles.flatMap(p => p.Profile.map(prof => prof.Value)));

            // Create X scale
            const xScale = d3.scaleLinear()
                .domain([xMin as number, xMax as number])
                .range([margin.left, plotRef.current.offsetWidth - margin.right]);

            // Create Y scale
            const yScale = d3.scaleLinear()
                .domain([0, yMax as number])
                .range([plotRef.current.offsetHeight - margin.bottom, margin.top]);

            // Create X scale
            const profileYScale = d3.scaleLinear()
                .domain([0, pyMax])
                .range([plotRef.current.offsetHeight - margin.bottom, margin.top]);

            // Create x axis
            svg.append("g")
                .attr("transform", `translate(0, ${plotRef.current.offsetHeight - margin.bottom})`)
                .call(d3.axisBottom(xScale));

            //create y axis
            svg.append("g")
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(yScale));

            // Add X axis label
            svg.append("text")
                .style("text-anchor", "middle")
                .attr("transform", `translate(${(plotRef.current.offsetWidth / 2)},${(plotRef.current.offsetHeight - margin.bottom / 3)})`)
                .text(props.Settings.XAxisLabel);

            // Add Y axis label
            svg.append("text")
                .attr("transform", `rotate(-90) translate(-${plotRef.current.offsetHeight / 2}, ${margin.left / 3})`)
                .style("text-anchor", "middle")
                .text(props.Settings.YAxisLabel);

            const lineFunc = d3.line<{ Bin: number, Value: number }>().x(dd => xScale(dd.Bin)).y(dd => profileYScale(dd.Value));

            // Plot data
            svg.append("g")
                .attr("class", "histogram")
                .selectAll("rect")
                .data(allBins)
                .enter()
                .append("rect")
                .attr("fill", d => d.settings.Color)
                .attr("opacity", 0.5)
                .attr("x", d => xScale(d.bin.x0 as number) + 1)
                .attr("y", d => yScale(d.bin.length))
                .attr("width", d => xScale(d.bin.x1 as number) - xScale(d.bin.x0 as number) - 1)
                .attr("height", d => yScale(0) - yScale(d.bin.length));

            // Plot profile lines
            if (profiles.length > 0) {

                //create profile axis
                svg.append("g")
                    .attr("transform", `translate(${plotRef.current.offsetWidth - margin.right},0)`)
                    .call(d3.axisRight(profileYScale));

                //create profile label
                svg.append("text")
                    .attr("transform", `rotate(-90) translate(-${plotRef.current.offsetHeight / 2}, ${(plotRef.current.offsetWidth - margin.right / 3) + 10})`)
                    .style("text-anchor", "middle")
                    .text("Profile")

                //create profile line
                svg.append("g")
                    .attr("class", "line")
                    .selectAll("path")
                    .data(profiles)
                    .enter()
                    .append("path")
                    .attr("fill", "none")
                    .attr("stroke-width", 1.5)
                    .attr("stroke", d => d?.Color as string)
                    .attr("d", d => lineFunc(d.Profile));
            }

        }

        return (
            <div className="d-flex h-100 flex-column" ref={plotRef}></div>
        )
    },
    SettingsUI: (props) => {
        return <>
            <Input<IProps> Field='XAxisLabel' Label="X Axis Label" Record={props.Settings} Type='text' Setter={(r) => props.SetSettings(r)} Valid={() => true} />
            <Input<IProps> Field='BinCount' Label='Bins' Record={props.Settings} Type='number' Setter={(r) => props.SetSettings(r)} Valid={() => true} />
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
                        const isSelected = props.SelectedChannels?.find(c => c.MetaData.ID === item.row.ID) != null;
                        if (isSelected)
                            props.RemoveChannel(item.row.ID);
                        else
                            props.AddChannel(item.row.ID, HistogramWidget.DefaultChannelSettings);
                    }}
                    OnSort={data => sort(data.colField as keyof DataSetTypes.IDataSetMetaData, sortField, setSortField, data.ascending, setAscending, ascending, allChannels, setAllChannels)}
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
                    KeySelector={(row, idx) => idx as number}
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
                                Style={{ backgroundColor: row.item.ChannelSettings.Color, borderColor: row.item.ChannelSettings.Color }} />
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
                    <ReactTable.Column<TrenDAP.IWidgetChannels<IChannelSettings>>
                        Key={'Profile'}
                        AllowSort={true}
                        Field={'ChannelSettings'}
                        Content={(row) => <CheckBox<IChannelSettings> Record={row.item?.ChannelSettings} Field="Profile" Setter={(item) => props.SetChannelSettings(row.item.Key, item)} />}
                    >
                        Profile
                    </ReactTable.Column>
                </ReactTable.Table>
            </div>
        </>
    }
}
