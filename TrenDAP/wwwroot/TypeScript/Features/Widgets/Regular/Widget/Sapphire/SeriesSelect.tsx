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

export default function SeriesSelect(props: { Widget: Widget<TrenDAP.WidgetClass, TrenDAP.iSapphireReturnData>, DataSourceID: number, Callback: () => void, Axis?: 'x' | 'y' }) {
    const [dataSource, setDataSource] = React.useState<TrenDAP.iDataSetReturn<TrenDAP.iSapphireReturnData>>(undefined)
    const [selected, setSelected] = React.useState<TrenDAP.iSapphireReturnData>({ ID: -1} as TrenDAP.iSapphireReturnData);
    const [delimeter, setDelimeter] = React.useState<string>('');

    React.useEffect(() => {
        const dataSource = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID);
        if (dataSource != undefined) {
            setDataSource(dataSource);
        }
    }, [props.Widget.Data]);


    return (
        <div className="input-group">
            <select className="form-control" value={delimeter} onChange={(evt) => setDelimeter(evt.target.value)}>
                <option value=''></option>
                {(dataSource?.Data ?? []).map(d => d.Meter).filter((x, i, a) => a.indexOf(x) === i).map((d, i) => <option key={i} value={d}>{d}</option>)}
            </select>

            <select className="form-control" value={selected?.ID ?? '0'} onChange={(evt) => setSelected(dataSource.Data.find((datum) => datum.ID === parseInt(evt.target.value)))}>
                <option value='-1'></option>
                {(dataSource?.Data ?? []).filter(datum => datum.Meter.indexOf(delimeter) >= 0).map((datum, index) => <option key={index} value={datum.ID}>{datum.Name}</option>)}
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id={"dropdownMenuButton"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby={"dropdownMenuButton"}>
                    <div className="dropdown-item">Meter: {selected?.Meter}</div>
                    <div className="dropdown-item">Asset: {selected?.Asset}</div>
                    <div className="dropdown-item">Characteristic: {selected?.Characteristic}</div>
                    <div className="dropdown-item">Type: {selected?.Type}</div>
                    <div className="dropdown-item">Station: {selected?.Station}</div>
                    <div className="dropdown-item">Phase: {selected?.Phase}</div>
                    <div className="dropdown-item">Harmonic: {selected?.Harmonic}</div>

                </div>
                <button className="btn btn-outline-secondary" type="button" onClick={() => {
                    if (props.Widget.Type === 'Histogram')
                        (props.Widget as Histogram).AddSeries(selected.ID, props.DataSourceID, selected .Type + ' ' + selected.Phase)
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

