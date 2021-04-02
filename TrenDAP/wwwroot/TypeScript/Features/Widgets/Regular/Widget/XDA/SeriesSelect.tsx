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

import * as React from 'react';
import { TrenDAP } from '../../../../../global';
import { Histogram, Stats, Table, Trend, Widget, XvsY } from '../../Implementations';

export default function SeriesSelect(props: { Widget: Widget<TrenDAP.WidgetClass>, DataSourceID: number, Callback: () => void, Axis?: 'x' | 'y' }) {
    const [dataSource, setDataSource] = React.useState<TrenDAP.iDataSetReturn>(undefined)
    const [selected, setSelected] = React.useState<TrenDAP.iXDAReturnData>({ ID: 0 } as TrenDAP.iXDAReturnData);
    const [type, setType] = React.useState<'Meter' | 'Asset'>('Meter');
    const [delimeter, setDelimeter] = React.useState<string>('');

    React.useEffect(() => {
        const dataSource = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID);
        if (dataSource != undefined) {
            setDataSource(dataSource);
        }
    }, [props.Widget.Data]);


    return (
        <div className="input-group">
            <select className="form-control" value={type} onChange={(evt) => setType(evt.target.value as any)}>
                <option value='Meter'>Meter</option>
                <option value='Asset'>Asset</option>
            </select>
            <select className="form-control" value={delimeter} onChange={(evt) => setDelimeter(evt.target.value)}>
                <option value=''></option>
                {(dataSource?.Data ?? []).map(d => d[type]).filter((x, i, a) => a.indexOf(x) === i).map((d, i) => <option key={i} value={d}>{d}</option>)}
            </select>

            <select className="form-control" value={selected?.ID ?? '0'} onChange={(evt) => setSelected(dataSource.Data.find((datum: TrenDAP.iXDAReturnData) => datum.ID === parseInt(evt.target.value)) as TrenDAP.iXDAReturnData)}>
                <option value='0'></option>
                {(dataSource?.Data ?? []).filter(datum => datum[type].indexOf(delimeter) >= 0).map((datum: TrenDAP.iXDAReturnData, index) => <option key={index} value={datum.ID}>{datum.Name}</option>)}
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id={"dropdownMenuButton"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby={"dropdownMenuButton"}>
                    <div className="dropdown-item">Meter: {(selected as TrenDAP.iXDAReturnData)?.Meter}</div>
                    <div className="dropdown-item">Asset: {(selected as TrenDAP.iXDAReturnData)?.Asset}</div>
                    <div className="dropdown-item">Characteristic: {(selected as TrenDAP.iXDAReturnData)?.Characteristic}</div>
                    <div className="dropdown-item">Type: {(selected as TrenDAP.iXDAReturnData)?.Type}</div>
                    <div className="dropdown-item">Station: {(selected as TrenDAP.iXDAReturnData)?.Station}</div>
                    <div className="dropdown-item">Phase: {(selected as TrenDAP.iXDAReturnData)?.Phase}</div>
                    <div className="dropdown-item">Harmonic: {(selected as TrenDAP.iXDAReturnData)?.Harmonic}</div>

                </div>
                <button className="btn btn-outline-secondary" type="button" onClick={() => {
                    if (props.Widget.Type === 'Histogram')
                        (props.Widget as Histogram).AddSeries((selected as TrenDAP.iXDAReturnData).ID, props.DataSourceID, (selected as TrenDAP.iXDAReturnData).Type + ' ' + selected.Phase)
                    else if (props.Widget.Type === 'Trend') {
                        let label = '';
                        if ((selected as TrenDAP.iXDAReturnData).Characteristic === 'Frequency')
                            label = 'Freq - ' + (selected as TrenDAP.iXDAReturnData).Meter;
                        else if ((selected as TrenDAP.iXDAReturnData).Type === 'Voltage' && (selected as TrenDAP.iXDAReturnData).Characteristic === 'RMS')
                            label = `V${(selected as TrenDAP.iXDAReturnData).Phase} - ${(selected as TrenDAP.iXDAReturnData).Meter}`;
                        else if ((selected as TrenDAP.iXDAReturnData).Type === 'Voltage')
                            label = `V${(selected as TrenDAP.iXDAReturnData).Phase} ${(selected as TrenDAP.iXDAReturnData).Characteristic} - ${(selected as TrenDAP.iXDAReturnData).Meter}`;
                        else if ((selected as TrenDAP.iXDAReturnData).Type === 'Current' && (selected as TrenDAP.iXDAReturnData).Characteristic === 'RMS')
                            label = `I${selected.Phase} - ${(selected as TrenDAP.iXDAReturnData).Meter}`;
                        else if ((selected as TrenDAP.iXDAReturnData).Type === 'Current')
                            label = `I${(selected as TrenDAP.iXDAReturnData).Phase} ${(selected as TrenDAP.iXDAReturnData).Characteristic} - ${(selected as TrenDAP.iXDAReturnData).Meter}`;
                        else label = (selected as TrenDAP.iXDAReturnData).Name;
                        (props.Widget as Trend).AddSeries((selected as TrenDAP.iXDAReturnData).ID, props.DataSourceID, label)
                    }
                    else if (props.Widget.Type === 'Stats')
                        (props.Widget as Stats).SetSeries((selected as TrenDAP.iXDAReturnData).ID, props.DataSourceID);
                    else if (props.Widget.Type === 'Table')
                        (props.Widget as Table).SetSeries((selected as TrenDAP.iXDAReturnData).ID, props.DataSourceID);
                    else if (props.Widget.Type === 'XvsY')
                        (props.Widget as XvsY).SetSeries(props.Axis, (selected as TrenDAP.iXDAReturnData).ID, props.DataSourceID)

                    props.Callback();
                }}>Select</button >
            </div>
        </div>
    );

}

