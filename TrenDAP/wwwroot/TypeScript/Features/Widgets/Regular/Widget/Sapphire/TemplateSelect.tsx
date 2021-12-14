//******************************************************************************************************
//  TemplateSelect.tsx - Gbtc
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
//  03/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import { OpenXDA } from '@gpa-gemstone/application-typings';
import * as React from 'react';
import { TrenDAP } from '../../../../../global';
import { Histogram, Stats, Table, Trend, Widget, XvsY } from '../../Implementations';
import { useDispatch, useSelector } from 'react-redux';
import { FetchSapphire, SelectSapphire, SelectSapphireStatus } from '../../../../Sapphire/SapphireSlice';

export default function TemplateSelect(props: { Widget: Widget<TrenDAP.WidgetClass, TrenDAP.iSapphireReturnData>, DataSourceID: number, Callback: () => void, Axis?: 'x' | 'y' }) {
    const [dataSource, setDataSource] = React.useState<TrenDAP.iDataSetReturn>(undefined)
    const [selected, setSelected] = React.useState<TrenDAP.iSapphireReturnData>({ ID: 0 } as TrenDAP.iSapphireReturnData);
    const [measurement, setMeasurement] = React.useState<string>('');
    const [phase, setPhase] = React.useState<string>('');

    const dispatch = useDispatch();

    const measurements: OpenXDA.Types.MeasurementType[] = useSelector((state) => SelectSapphire(state, props.DataSourceID, 'ChannelGroupType'));
    const mtStatus = useSelector((state) => SelectSapphireStatus(state, props.DataSourceID, 'ChannelGroupType'));

    const phases: OpenXDA.Types.Phase[] = useSelector((state) => SelectSapphire(state, props.DataSourceID, 'Phase'));
    const phStatus = useSelector((state) => SelectSapphireStatus(state, props.DataSourceID, 'Phase'));


    React.useEffect(() => {
        const dataSource = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID);
        if (dataSource != undefined) {
            setDataSource(dataSource);
        }
    }, [props.Widget.Data]);

    React.useEffect(() => {
        if (mtStatus != 'unitiated' && mtStatus != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.DataSourceID, table: 'ChannelGroupType'}));

        return function () {
        }
    }, [mtStatus]);

    React.useEffect(() => {
        if (phStatus != 'unitiated' && phStatus != 'changed') return;
        dispatch(FetchSapphire({ dataSourceID: props.DataSourceID, table: 'Phase' }));

        return function () {
        }
    }, [phStatus]);

    return (
        <div className="input-group">
            <select className="form-control" value={measurement} onChange={(evt) => setMeasurement(evt.target.value as any)}>
                {measurements.sort((a, b) => {
                    if (a.Name > b.Name) return 1;
                    else if (a.Name == b.Name) return 0;
                    else -1;
                }).map(mts => <option key={mts.ID} value={mts.Name}>{mts.Name}</option>)}
            </select>
            <select className="form-control" value={phase} onChange={(evt) => setPhase(evt.target.value as any)}>
                {phases.sort((a, b) => {
                    if (a.Name > b.Name) return 1;
                    else if (a.Name == b.Name) return 0;
                    else -1;
                }).map(mts => <option key={mts.ID} value={mts.Name}>{mts.Name}</option>)}
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={() => {
                    if (props.Widget.Type === 'Histogram')
                        (props.Widget as Histogram).AddSeries(selected.ID, props.DataSourceID, selected.Type + ' ' + selected.Phase)
                    else if (props.Widget.Type === 'Trend') {
                        let label = '';
                        if (selected.Characteristic === 'Frequency')
                            label = 'Freq - ' + selected.Meter;
                        else if (selected.Characteristic === 'RMS')
                            label = `${selected.Phase} - ${selected.Meter}`;
                        else label = `${selected.Phase} ${selected.Characteristic} - ${selected.Meter}`;
                        (props.Widget as Trend).AddSeries(selected.ID, props.DataSourceID, label)
                    }
                    else if (props.Widget.Type === 'Stats')
                        (props.Widget as Stats).SetSeries(selected.ID, props.DataSourceID);
                    else if (props.Widget.Type === 'Table')
                        (props.Widget as Table).SetSeries(selected.ID, props.DataSourceID);
                    else if (props.Widget.Type === 'XvsY')
                        (props.Widget as XvsY).SetSeries(props.Axis, selected.ID, props.DataSourceID)

                    props.Callback();
                }}>Select</button >
            </div>
        </div>
    );

}

