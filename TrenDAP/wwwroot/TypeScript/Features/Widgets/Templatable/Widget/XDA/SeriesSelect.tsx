//******************************************************************************************************
//  SeriesSelect.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  03/10/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { OpenXDA } from '@gpa-gemstone/application-typings';
import * as React from 'react';
import { Redux, TrenDAP, OpenXDAExt } from '../../../../../global';
import { Histogram, Stats, Table, Trend, Widget, XvsY } from './../../Implementations';
import { useDispatch, useSelector } from 'react-redux';
import { FetchOpenXDA, SelectOpenXDA, SelectOpenXDAStatus } from '../../../../OpenXDA/OpenXDASlice';

export default function SeriesSelect(props: { Widget: Widget<TrenDAP.WidgetClass>, DataSourceID: number, Callback: () => void, Axis?: 'X' | 'Y' }) {
    const [dataSource, setDataSource] = React.useState<TrenDAP.iDataSetReturn>(undefined)
    const [phase, setPhase] = React.useState<OpenXDA.Types.PhaseName>('AN');
    const [phases, setPhases] = React.useState<OpenXDA.Types.PhaseName[]>(OpenXDA.Lists.Phases);
    const channelGroupsTypes: Redux.OpenXDATableSlice = useSelector((state: Redux.StoreState) => SelectOpenXDA(state, props.DataSourceID, 'ChannelGroupDetails'));
    const [channelGroupType, setChannelGroupType] = React.useState<OpenXDAExt.ChannelGroupDetails>(undefined);
    const [reducedChannelGroupTypes, setReducedChannelGroupTypes] = React.useState<OpenXDAExt.ChannelGroupDetails[]>([]);

    const dispatch = useDispatch();

    React.useEffect(() => {
        if (channelGroupsTypes === undefined || channelGroupsTypes?.Status === 'unitiated' || channelGroupsTypes?.Status === 'changed')
            dispatch(FetchOpenXDA({ dataSourceID: props.DataSourceID, table: 'ChannelGroupDetails' }));
        else if (channelGroupsTypes?.Status === 'idle')
        {
            if ((props.Widget?.Data ?? []).length === 0)
                setReducedChannelGroupTypes(channelGroupsTypes.Data);
            else {
                let channels = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID).Data;
                let reduced = channelGroupsTypes.Data.filter(d => channels.find((c: TrenDAP.iXDAReturnData) => c.Type === d.MeasurementType && c.Characteristic === d.MeasurementCharacteristic) != undefined)
                setReducedChannelGroupTypes(reduced);
            }
        }
        return function () {
        }
    }, [dispatch, channelGroupsTypes?.Status]);

    React.useEffect(() => {
        const dataSource = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID);
        if (dataSource != undefined) {
            setDataSource(dataSource);
            let ph = phases.filter(p => dataSource.Data.find(d => d.Phase === p));
            setPhases(ph);
        }
    }, [props.Widget.Data]);

      return (
        <div className="input-group">
              <select className="form-control" value={channelGroupType?.DisplayName ?? ''} onChange={(evt) => setChannelGroupType(channelGroupsTypes.Data.find(c => c.DisplayName === evt.target.value))}>
                  {reducedChannelGroupTypes.map(mts => <option key={mts.DisplayName} value={mts.DisplayName}>{mts.DisplayName}</option>)}
            </select>
            <select className="form-control" value={phase} onChange={(evt) => setPhase(evt.target.value as any)}>
                  {phases.sort((a, b) => {
                    if (a > b) return 1;
                    else if (a == b) return 0;
                    else -1;
                }).map(mts => <option key={mts} value={mts}>{mts}</option>)}
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={() => {
                    if (props.Widget.Type === 'Histogram')
                        (props.Widget as Histogram).AddSeriesXDA(props.DataSourceID, phase, channelGroupType.MeasurementType,  channelGroupType.MeasurementCharacteristic)
                    else if (props.Widget.Type === 'Trend')
                        (props.Widget as Trend).AddSeriesXDA(props.DataSourceID, phase, channelGroupType.MeasurementType, channelGroupType.MeasurementCharacteristic)
                    else if (props.Widget.Type === 'Stats')
                        (props.Widget as Stats).SetSeriesXDA(props.DataSourceID, phase, channelGroupType.MeasurementType, channelGroupType.MeasurementCharacteristic)
                    else if (props.Widget.Type === 'Table')
                        (props.Widget as Table).SetSeriesXDA(props.DataSourceID, phase, channelGroupType.MeasurementType, channelGroupType.MeasurementCharacteristic)
                    else if (props.Widget.Type === 'XvsY')
                        (props.Widget as XvsY).SetSeriesXDA(props.Axis, props.DataSourceID, phase, channelGroupType.MeasurementType, channelGroupType.MeasurementCharacteristic)

                    props.Callback();
                }}>Select</button >
            </div>
        </div>
    );

}

