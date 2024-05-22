//******************************************************************************************************
//  Axis.tsx - Gbtc
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
//  02/17/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../../../global';
import { Input } from '@gpa-gemstone/react-forms';
import { CrossMark } from '@gpa-gemstone/gpa-symbols';
import { UpdateAxis, /*CalculateAxisRange,*/ RemoveAxis, IProps } from './Trend';
import { WidgetTypes } from '../../Interfaces'


export default function Axis(props: { Index: number, Axis: TrenDAP.iYAxis, Widget: WidgetTypes.ISettingsProps<IProps>, Callback: (widget: WidgetTypes.ISettingsProps<IProps>) => void }){
    const firstRender = React.useRef(true);

    React.useEffect(() => {
        firstRender.current = false;
    }, []);

    //const [bins, setBins] = React.useState<number>(props.Series?.BinCount ?? 10);
    const [units, setUnits] = React.useState<string>(props.Axis.Units);
    const [position, setPosition] = React.useState<'left' | 'right'>(props.Axis.Position);
    const [min, setMin] = React.useState<number>(props.Axis.Min);
    const [max, setMax] = React.useState<number>(props.Axis.Max);

    React.useEffect(() => {
        if (!firstRender.current) {
           let newWidget = UpdateAxis(props.Widget, props.Index, "Units", units);
            props.Callback(newWidget);
        }
    }, [units]);
    React.useEffect(() => {
        if (!firstRender.current) {
            let newWidget = UpdateAxis(props.Widget, props.Index, "Position", position);
            props.Callback(newWidget);
        }
    }, [position]);
    React.useEffect(() => {
        if (!firstRender.current) {
            let newWidget = UpdateAxis(props.Widget, props.Index, "Max", max);
            props.Callback(newWidget);

        }
    }, [max]);
    React.useEffect(() => {
        if (!firstRender.current) {
            let newWidget = UpdateAxis(props.Widget, props.Index, "Min", min);
            props.Callback(newWidget);
        }
    }, [min]);

    return (
        <div className='row'>
            <div className="col-2">
                { /*this needs to be gemstone*/}
                <label>Position</label>
                <select className="form-control" value={position} onChange={(evt) => setPosition(evt.target.value as ('left' | 'right'))}>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div className="col">
                <Input<TrenDAP.iYAxis> Field='Units' Record={props.Axis} Type='text' Setter={(r) => setUnits(r.Units)} Valid={(field) => true} />
            </div>
            <div className="col-2">
                <Input<TrenDAP.iYAxis> Field='Min' Label='Min' Record={props.Axis} Type='number' Setter={(r) => setMin(r.Min)} Valid={(field) => true} />
            </div>
            <div className="col-2">
                <Input<TrenDAP.iYAxis> Field='Max' Record={props.Axis} Type='number' Setter={(r) => setMax(r.Max)} Valid={(field) => true} />
            </div>
            <div className="col-2" style={{ position: 'relative' }}>
                <button className="btn btn-outline-secondary" style={{ position: 'absolute', bottom: 16 }} type="button" onClick={() => { 
                    //let newWidget = CalculateAxisRange(props.Widget, 'y', props.Index)
                    //props.Callback(newWidget);
                }}>Use Data</button>
            </div>

            <div className="col-1">
                <button className="btn btn-link" style={{ top: 30 }} onClick={() => {
                    let newWidget = RemoveAxis(props.Widget, props.Index)
                    props.Callback(newWidget);
                }}>{CrossMark}</button>
            </div>

        </div>
    );
}
