﻿//******************************************************************************************************
//  TemplatePicker.tsx - Gbtc
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
//  03/16/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import * as React from 'react';
import { TrenDAP, DataSourceTypes } from '../../../../global';
import { CheckBox } from '@gpa-gemstone/react-forms';
import { WidgetTypes } from '../../Interfaces'

import { CrossMark } from '@gpa-gemstone/gpa-symbols';
import "react-datetime/css/react-datetime.css";
import { /*UpdateSeries, CalculateAxisRange, RemoveSeries*/ IProps as TrendProps } from './Trend';

interface IProps {
    Index: number,
    Type: DataSourceTypes.DataSourceType
    Series: TrenDAP.iTrendTemplateSeriesXDA,
    Data: TrenDAP.iDataSetReturnType,
    Widget: WidgetTypes.IWidgetProps<TrendProps, any>,
    Callback: (widget: WidgetTypes.IWidgetProps<TrendProps, any>) => void
}

export default function TemplatePicker(props: IProps) {
    const [axis, setAxis] = React.useState<number>(props.Series.Axis);
    const [color, setColor] = React.useState<string>(props.Series.Color);
    const [type, setType] = React.useState<TrenDAP.iXDATrendDataPointField>(props.Series.Field);
    const [showEvents, setShowEvents] = React.useState<boolean>(props.Series.ShowEvents);
    /*
    React.useEffect(() => {
        let newWidget = UpdateSeries(props.Widget, props.Index, "Color", color);
        props.Callback(newWidget);
    }, [color]);

    React.useEffect(() => {
        let newWidget = UpdateSeries(props.Widget, props.Index, "Field", type);
        props.Callback(newWidget);
    }, [type]);

    React.useEffect(() => {
        let newWidget = UpdateSeries(props.Widget, props.Index, "ShowEvents", showEvents);
        props.Callback(newWidget);
    }, [showEvents]);

    React.useEffect(() => {
        let newWidget = UpdateSeries(props.Widget, props.Index, "Axis", axis);
        newWidget = CalculateAxisRange(newWidget, 'y');
        newWidget = CalculateAxisRange(newWidget, 'x');
        props.Callback(newWidget);
    }, [axis]);
    */

    return (
        <>
            <div className='row'>
                <div className="col-3">
                    <label>{props.Series.Label}</label>
                </div>

                <div className="col">
                    <label className="form-label">Field</label>
                    <select className="form-control" value={type} onChange={(evt) => setType(evt.target.value as TrenDAP.iXDATrendDataPointField)}>
                        <option value="Average">Avg</option>
                        <option value="Minimum">Min</option>
                        <option value="Maximum">Max</option>
                    </select>
                </div>
                <div className="col">
                    <label className="form-label">YAxis</label>
                    <select className="form-control" value={axis} onChange={(evt) => setAxis(parseInt(evt.target.value))}>
                        {props.Widget.Settings.YAxis.map((axis, index) => <option value={index} key={index}>{axis.Units}</option>)}
                    </select>
                </div>
                <div className="col">
                    <label className="form-label">Color</label>
                    <input type="color" className="form-control" value={color} onChange={(evt) => setColor(evt.target.value)} />
                </div>
                <div className="col-1">
                    <button className="btn btn-link" onClick={() => {
                        //let newWidget = RemoveSeries(props.Widget, props.Index);
                        //props.Callback(newWidget);
                    }}>{CrossMark}</button>
                </div>
            </div>
            {(props.Type === 'TrenDAPDB' && (props.Data as TrenDAP.iXDAReturnData).Events.length > 0 ?
                <div className='row'>
                    <div className='col'>
                        <CheckBox<TrenDAP.iTrendTemplateSeriesXDA> Record={props.Series} Field='ShowEvents' Label='Show Events' Setter={(r) => setShowEvents(!showEvents)} />
                    </div>
                </div>
                : null)
            }
        </>

    );
}