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
//******************************************************************************************************

import * as React from 'react';
import { Input, Select } from '@gpa-gemstone/react-forms';
import stats from 'stats-lite';
import { ReactTable } from '@gpa-gemstone/react-table';
import _ from 'lodash';
import { WidgetTypes } from '../Interfaces'
import { TrenDAP } from '../../../global';


interface IStatData {
    Category: string,
    Statistic: string | number
}

interface IProps {
    Field: TrenDAP.SeriesField,
    Precision: number
}

export const StatsWidget: WidgetTypes.IWidget<IProps, any> = {
    DefaultSettings: { Field: 'Average', Precision: 3 },
    DefaultChannelSettings: null,
    Name: "Stats",
    WidgetUI: (props) => {
        const [data, setData] = React.useState<IStatData[]>([])

        React.useEffect(() => {
            setData(getStats(props));
        }, [props.Data])

        const getStats = (oldstats: WidgetTypes.IWidgetProps<IProps, any>): IStatData[] => {

            let newStats = { ...oldstats }
            let statData: number[] = []

            newStats.Data.forEach(data => {
                let seriesData = data.SeriesData;
                if (seriesData != null && Object.keys(seriesData).length !== 0) {
                    let filteredData = seriesData[props.Settings.Field]?.map(min => min[1])

                    if (filteredData != null)
                        statData.push(...filteredData);
                }
            })

            statData = statData.filter(d => d != null)
            if (statData == null || statData.length == 0) return []

            return [
                { Category: "Mean", Statistic: stats.mean(statData).toFixed(newStats.Settings.Precision) },
                { Category: "Median", Statistic: stats.median(statData).toFixed(newStats.Settings.Precision) },
                { Category: "Variance", Statistic: stats.variance(statData).toFixed(newStats.Settings.Precision) },
                { Category: "StdDev", Statistic: stats.stdev(statData).toFixed(newStats.Settings.Precision) },
                { Category: "10th Percentile", Statistic: stats.percentile(statData, 0.10).toFixed(newStats.Settings.Precision) },
                { Category: "25th Percentile", Statistic: stats.percentile(statData, 0.25).toFixed(newStats.Settings.Precision) },
                { Category: "50th Percentile", Statistic: stats.percentile(statData, 0.50).toFixed(newStats.Settings.Precision) },
                { Category: "75th Percentile", Statistic: stats.percentile(statData, 0.75).toFixed(newStats.Settings.Precision) },
                { Category: "90th Percentile", Statistic: stats.percentile(statData, 0.90).toFixed(newStats.Settings.Precision) },
            ]
        }

        return (
            <>
                <ReactTable.Table<IStatData>
                    TableClass={"table table-hover"}
                    TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }}
                    TbodyStyle={{ display: 'block', overflow: 'hidden', width: '100%' }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    SortKey={"Category"}
                    OnClick={() => { }}
                    OnSort={() => { }}
                    Data={data}
                    Ascending={true}
                    KeySelector={(item) => item.Category}
                >
                    <ReactTable.Column<IStatData>
                        Key={'Category'}
                        AllowSort={true}
                        Field={'Category'}
                    >
                        Category
                    </ReactTable.Column>
                    <ReactTable.Column<IStatData>
                        Key={'Statistic'}
                        AllowSort={true}
                        Field={'Statistic'}
                    >
                        Statistic
                    </ReactTable.Column>
                </ReactTable.Table>
            </>
        );
    },
    SettingsUI: (props) => {
        return <>
            <Select<IProps> Label={'Series Data Field'} Record={props.Settings} Setter={(item) => props.SetSettings(item)}
                Options={[{ Label: 'Average', Value: 'Average' }, { Label: 'Minimum', Value: 'Minimum' }, { Label: 'Maximum', Value: 'Maximum' }]} Field={'Field'} />
            <Input<IProps> Record={props.Settings} Field={'Precision'} Setter={(item) => props.SetSettings(item)} Valid={() => true} AllowNull={true} />
        </>
    },
}
