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
import { TrenDAP } from '../../../../global';
import { Histogram, Stats, Table, Trend, Widget, XvsY } from '../../../../Implementations';
import AdditionalInfo from './AdditionalInfo';

export default function SeriesSelect(props: { Widget: Widget<TrenDAP.WidgetClass>, DataSourceID: number, Callback: () => void, Axis?: 'x' | 'y' }) {
    const [dataSource, setDataSource] = React.useState<TrenDAP.iDataSetReturn>(undefined)
    const [selected, setSelected] = React.useState<TrenDAP.iOpenHistorianReturn>({ ID: '0' } as TrenDAP.iOpenHistorianReturn);
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
                {(dataSource?.Data ?? []).map((d: TrenDAP.iOpenHistorianReturn) => d.Device).filter((x, i, a) => a.indexOf(x) === i).map((d, i) => <option key={i} value={d}>{d}</option>)}
            </select>

            <select className="form-control" value={selected?.ID ?? '0'} onChange={(evt) => setSelected(dataSource.Data.find((datum: TrenDAP.iOpenHistorianReturn) => datum.ID === evt.target.value) as TrenDAP.iOpenHistorianReturn)}>
                <option value='0'></option>
                {(dataSource?.Data ?? []).filter((d: TrenDAP.iOpenHistorianReturn) => d.Device.indexOf(delimeter) >= 0).map((datum: TrenDAP.iOpenHistorianReturn, index) => <option key={index} value={datum.ID}>{datum.Description}</option>)}
            </select>
            <div className="input-group-append">
                <AdditionalInfo Data={selected}/>
                <button className="btn btn-outline-secondary" type="button" onClick={() => {
                    const label = selected.Description;

                    if (props.Widget.Type === 'Histogram')
                        (props.Widget as Histogram).AddSeries((selected).ID, props.DataSourceID, label)
                    else if (props.Widget.Type === 'Trend')
                        (props.Widget as Trend).AddSeries((selected).ID, props.DataSourceID, label)
                    else if (props.Widget.Type === 'Stats')
                        (props.Widget as Stats).SetSeries((selected).ID, props.DataSourceID);
                    else if (props.Widget.Type === 'Table')
                        (props.Widget as Table).SetSeries((selected).ID, props.DataSourceID);
                    else if (props.Widget.Type === 'XvsY')
                        (props.Widget as XvsY).SetSeries(props.Axis, (selected).ID, props.DataSourceID)

                    props.Callback();
                }}>Select</button >
            </div>
        </div>
    );

}

