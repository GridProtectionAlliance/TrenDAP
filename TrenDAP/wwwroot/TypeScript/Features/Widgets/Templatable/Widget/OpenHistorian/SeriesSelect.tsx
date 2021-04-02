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

import { OpenHistorianTypes as OpenHistorian, OpenHistorianSignalTypes as SignalTypes, OpenHistorianPhases as Phases } from '@gpa-gemstone/application-typings';
import * as React from 'react';
import { TrenDAP } from '../../../../../global';

import { Histogram, Stats, Table, Trend, Widget, XvsY } from './../../Implementations';
import AdditionalInfo from './AdditionalInfo';

export default function SeriesSelect(props: { Widget: Widget<TrenDAP.WidgetClass>, DataSourceID: number, Callback: () => void, Axis?: 'X' | 'Y' }) {
    const [dataSource, setDataSource] = React.useState<TrenDAP.iDataSetReturn>(undefined)
    const [selected, setSelected] = React.useState<TrenDAP.iOpenHistorianReturn>({ ID: '0' } as unknown as TrenDAP.iOpenHistorianReturn);
    const [delimeter, setDelimeter] = React.useState<string>('');
    const [type, setType] = React.useState<OpenHistorian.SignalType>('VPHM');
    const [phase, setPhase] = React.useState<OpenHistorian.Phase>('A');

    React.useEffect(() => {
        const dataSource = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID);
        if (dataSource != undefined) {
            setDataSource(dataSource);
        }
    }, [props.Widget.Data]);


    return (
        <div className="input-group">
            <div className="input-group">
                <select className="form-control" value={type} onChange={(evt) => setType(evt.target.value as any)}>
                    {SignalTypes.map((a,i) => <option key={i} value={a}>{a}</option>)}
                </select>
                <select className="form-control" value={phase} onChange={(evt) => setPhase(evt.target.value as any)}>
                    {Phases.map((a, i) => <option key={i} value={a}>{a}</option>)}
                </select>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => {

                        if (props.Widget.Type === 'Histogram')
                            (props.Widget as Histogram).AddSeriesOH(props.DataSourceID, phase, type)
                        else if (props.Widget.Type === 'Trend')
                            (props.Widget as Trend).AddSeriesOH(props.DataSourceID, phase, type)
                        else if (props.Widget.Type === 'Stats')
                            (props.Widget as Stats).SetSeriesOH(props.DataSourceID, phase, type)
                        else if (props.Widget.Type === 'Table')
                            (props.Widget as Table).SetSeriesOH(props.DataSourceID, phase, type)
                        else if (props.Widget.Type === 'XvsY')
                            (props.Widget as XvsY).SetSeriesOH(props.Axis, props.DataSourceID, phase, type)

                        props.Callback();
                    }}>Select</button >
                </div>
            </div>
        </div>
    );

}

