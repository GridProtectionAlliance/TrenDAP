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


import { OpenXDATypes as OpenXDA } from '@gpa-gemstone/application-typings';
import * as React from 'react';
import { TrenDAP } from '../../../../../global';
import { Histogram, Stats, Table, Trend, Widget, XvsY } from '../../Implementations';
import { useDispatch, useSelector } from 'react-redux';
import { FetchOpenXDA, SelectOpenXDA, SelectOpenXDAStatus } from '../../../../OpenXDA/OpenXDASlice';

export default function TemplateSelect(props: { Widget: Widget<TrenDAP.WidgetClass>, DataSourceID: number, Callback: () => void, Axis?: 'x' | 'y' }) {
    const [dataSource, setDataSource] = React.useState<TrenDAP.iDataSetReturn>(undefined)
    const [selected, setSelected] = React.useState<TrenDAP.iXDAReturnData>({ ID: 0 } as TrenDAP.iXDAReturnData);
    const [measurementType, setMeasurementType] = React.useState<OpenXDA.MeasurementTypeName>('Voltage');
    const [measurementCharacteristic, setMeasurementCharacteristic] = React.useState<OpenXDA.MeasurementCharacteristicName>('RMS');
    const [phase, setPhase] = React.useState<OpenXDA.PhaseName>('AN');


    const [delimeter, setDelimeter] = React.useState<string>('');

    const dispatch = useDispatch();

    const measurementTypes:OpenXDA.MeasurementType[] = useSelector((state) => SelectOpenXDA(state, props.DataSourceID, 'MeasurementType'));
    const mtStatus = useSelector((state) => SelectOpenXDAStatus(state, props.DataSourceID, 'MeasurementType'));

    const measurementCharacteristics: OpenXDA.MeasurementCharacteristic[] = useSelector((state) => SelectOpenXDA(state, props.DataSourceID, 'MeasurementCharacteristic'));
    const mcStatus = useSelector((state) => SelectOpenXDAStatus(state, props.DataSourceID, 'MeasurementCharacteristic'));

    const phases: OpenXDA.Phase[] = useSelector((state) => SelectOpenXDA(state, props.DataSourceID, 'Phase'));
    const phStatus = useSelector((state) => SelectOpenXDAStatus(state, props.DataSourceID, 'Phase'));


    React.useEffect(() => {
        const dataSource = props.Widget.Data.find(d => d.DataSource.ID === props.DataSourceID);
        if (dataSource != undefined) {
            setDataSource(dataSource);
        }
    }, [props.Widget.Data]);

    React.useEffect(() => {
        if (mtStatus != 'unitiated' && mtStatus != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.DataSourceID, table: 'MeasurementType'}));

        return function () {
        }
    }, [mtStatus]);

    React.useEffect(() => {
        if (mcStatus != 'unitiated' && mcStatus != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.DataSourceID, table: 'MeasurementCharacteristic' }));

        return function () {
        }
    }, [mcStatus]);
    React.useEffect(() => {
        if (phStatus != 'unitiated' && phStatus != 'changed') return;
        dispatch(FetchOpenXDA({ dataSourceID: props.DataSourceID, table: 'Phase' }));

        return function () {
        }
    }, [phStatus]);

    return (
        <div className="input-group">
            <select className="form-control" value={measurementType} onChange={(evt) => setMeasurementType(evt.target.value as any)}>
                {measurementTypes.sort((a, b) => {
                    if (a.Name > b.Name) return 1;
                    else if (a.Name == b.Name) return 0;
                    else -1;
                }).map(mts => <option key={mts.ID} value={mts.Name}>{mts.Name}</option>)}
            </select>
            <select className="form-control" value={measurementCharacteristic} onChange={(evt) => setMeasurementCharacteristic(evt.target.value as any)}>
                {measurementCharacteristics.sort((a, b) => {
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

