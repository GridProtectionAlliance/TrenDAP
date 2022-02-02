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
//  12/14/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import { OpenXDA } from '@gpa-gemstone/application-typings';
import * as React from 'react';
import { Redux, TrenDAP } from '../../../../../global';
import { Histogram, Stats, Table, Trend, Widget, XvsY } from '../../Implementations';
import { useDispatch, useSelector } from 'react-redux';
import { FetchSapphire, SelectSapphire, SelectSapphireStatus } from '../../../../Sapphire/SapphireSlice';

export default function TemplateSelect(props: { Widget: Widget<TrenDAP.WidgetClass, TrenDAP.iSapphireReturnData>, DataSourceID: number, Callback: () => void, Axis?: 'X' | 'Y' }) {
    const [measurement, setMeasurement] = React.useState<string>('');
    const [phase, setPhase] = React.useState<string>('');

    const dispatch = useDispatch();

    const measurements: any[] = useSelector((state: Redux.StoreState) => SelectSapphire(state, props.DataSourceID, 'ChannelGroupType'));
    const mtStatus = useSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.DataSourceID, 'ChannelGroupType'));

    const phases: any[] = useSelector((state: Redux.StoreState) => SelectSapphire(state, props.DataSourceID, 'Phase'));
    const phStatus = useSelector((state: Redux.StoreState) => SelectSapphireStatus(state, props.DataSourceID, 'Phase'));

    const [harmonic, setHarmonic] = React.useState<number>(0);

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
                <option value=''></option>
                {measurements.map(mts => <option key={mts.ID} value={mts.Description}>{mts.DisplayName}</option>)}
            </select>
            <select className="form-control" value={phase} onChange={(evt) => setPhase(evt.target.value as any)}>
                <option value=''></option>
                {phases.map(mts => <option key={mts.ID} value={mts.Name}>{mts.Name}</option>)}
            </select>
            <input className='form-control' value={harmonic} type='number' onChange={(evt) => setHarmonic(parseInt(evt.target.value)) } placeholder='harmonic'/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={() => {
                    if (props.Widget.Type === 'Histogram')
                        (props.Widget as Histogram).AddSeriesSapphire(props.DataSourceID, phase, measurement, harmonic)
                    else if (props.Widget.Type === 'Trend') 
                        (props.Widget as Trend).AddSeriesSapphire(props.DataSourceID, phase, measurement, harmonic)
                    else if (props.Widget.Type === 'Stats')
                        (props.Widget as Stats).SetSeriesSapphire(props.DataSourceID, phase, measurement, harmonic);
                    else if (props.Widget.Type === 'Table')
                        (props.Widget as Table).SetSeriesSapphire(props.DataSourceID, phase, measurement, harmonic);
                    else if (props.Widget.Type === 'XvsY')
                        (props.Widget as XvsY).SetSeriesSapphire(props.Axis, props.DataSourceID, phase, measurement, harmonic)

                    props.Callback();
                }}>Select</button >
            </div>
        </div>
    );

}

