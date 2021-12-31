//******************************************************************************************************
//  SeriesPicker.tsx - Gbtc
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
import { CheckBox } from '@gpa-gemstone/react-forms';

import AdditionalInfoXDA from '../Widget/XDA/AdditionalInfo';
import AdditionalInfoOpenHistorian from '../Widget/OpenHistorian/AdditionalInfo';
import AdditionalInfoSapphire from '../Widget/Sapphire/AdditionalInfo';

import { CrossMark } from '@gpa-gemstone/gpa-symbols';
import { Trend } from '../Implementations';
import "react-datetime/css/react-datetime.css";
import AdditionalInfo from '../Widget/OpenHistorian/AdditionalInfo';

export default function SeriesPicker(props: { Index: number, Type: TrenDAP.DataSourceType, Series: TrenDAP.iTrendSeries, Data: TrenDAP.iDataSetReturnType, Widget: Trend, Callback: () => void }){
    const [axis, setAxis] = React.useState<number>(props.Series.Axis);
    const [color, setColor] = React.useState<string>(props.Series.Color);
    const [type, setType] = React.useState<TrenDAP.iXDATrendDataPointField>(props.Series.Field);
    const [showEvents, setShowEvents] = React.useState<boolean>(props.Series.ShowEvents);
    React.useEffect(() => {
        props.Widget.UpdateSeries(props.Index, "Color", color);
        props.Callback();
    }, [color]);
    React.useEffect(() => {
        props.Widget.UpdateSeries(props.Index, "Field", type);
        props.Callback();
    }, [type]);
    React.useEffect(() => {
        props.Widget.UpdateSeries(props.Index, "ShowEvents", showEvents);
        props.Callback();
    }, [showEvents]);

    React.useEffect(() => {
        props.Widget.UpdateSeries(props.Index, "Axis", axis);
        props.Widget.CalculateAxisRange('y');
        props.Widget.CalculateAxisRange('x');
        props.Callback();
    }, [axis]);


    function ShowAdditionInfo() {
        if (props.Type === 'TrenDAPDB')
            return <AdditionalInfoXDA Index={props.Index} Data={props.Data as TrenDAP.iXDAReturnData} />;
        else if (props.Type === 'Sapphire')
            return <AdditionalInfoSapphire Index={props.Index} Data={props.Data as TrenDAP.iXDAReturnData} />;
        else if (props.Type === 'OpenHistorian')
            return <AdditionalInfoOpenHistorian Data={props.Data as TrenDAP.iOpenHistorianReturn} />;
        return null;
    }
    return (
        <>
            <div className='row'>
                <div className="col-3">
                    <label>{props.Series.Label}</label>
                    {ShowAdditionInfo()}
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
                        {props.Widget.JSON.YAxis.map((axis, index) => <option value={index} key={index}>{axis.Units}</option>)}
                    </select>
                </div>
                <div className="col">
                    <label className="form-label">Color</label>
                    <input type="color" className="form-control" value={color} onChange={(evt) => setColor(evt.target.value)} />
                </div>
                <div className="col-1">
                    <button className="btn btn-link" onClick={() => {
                        props.Widget.RemoveSeries(props.Index);
                        props.Callback();
                    }}>{CrossMark}</button>
                </div>
            </div>
            {(props.Type === 'TrenDAPDB' && (props.Data as TrenDAP.iXDAReturnData).Events.length > 0 ?
                <div className='row'>
                    <div className='col'>
                        <CheckBox<TrenDAP.iTrendSeries> Record={props.Series} Field='ShowEvents' Label='Show Events' Setter={(r) => setShowEvents(!showEvents)} />
                    </div>
                </div>
                : null)
            }
        </>

    );
}
