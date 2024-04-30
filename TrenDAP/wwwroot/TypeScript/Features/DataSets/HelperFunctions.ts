//******************************************************************************************************
//  HelperFunctions.ts - Gbtc
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
//  02/06/2022 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import { TrenDAP } from "../../global";
import moment from "moment";

const DateFormat = 'YYYY-MM-DD';

const ComputeValidDays = (ds: TrenDAP.iDataSet) => {
    if (ds.Context == 'Relative')
        return 127;

    const from = moment(ds.From);
    from.startOf("d")

    const to = moment(ds.To);
    to.startOf("d");

    const diff = to.diff(from, 'd');

    if (diff >= 7)
        return 127;

    //If less than 1 Day Nothing is Valid
    if (diff < 1)
        return 0;

    let result = 0;
    for (let i = 0; i < 7; i = i + 1) {
        if (i >= from.day() &&  (i - from.day()) < diff)
            result = result + Math.pow(2, i);
        if (i < from.day() && (from.day() - i) > (7 - diff))
            result = result + Math.pow(2, i);
    }

    return result;

}

const ComputeValidWeeks = (ds: TrenDAP.iDataSet) => {
    if (ds.Context == 'Relative')
        return Math.pow(2,53) - 1;

    const from = moment(ds.From);
    from.startOf("week")

    const to = moment(ds.To);
    to.startOf("week");

    const diff = to.diff(from, 'week');

    if (diff >= 52)
        return Math.pow(2, 53) - 1;

    let result = 0;
    for (let i = 1; i < 54; i = i + 1) {
        if (i >= from.week() && (i - from.week()) < diff)
            result = result + Math.pow(2, i-1);
        if (i < from.week() && (from.week() - i) > (53 - diff))
            result = result + Math.pow(2, i-1);
    }

    return result;

}

const ComputeTime = (ds: TrenDAP.iDataSet) => {
    let startTime = moment.utc(ds.From, DateFormat);
    let endTime = moment.utc(ds.To, DateFormat);
    if (ds.Context == "Relative") {
        endTime = moment.utc(moment().format(DateFormat), DateFormat);
        if (ds.RelativeWindow == "Day")
            startTime = endTime.add(-ds.RelativeValue, "day");
        else if (ds.RelativeWindow == "Week")
            startTime = endTime.add(-ds.RelativeValue * 7, "day");
        else if (ds.RelativeWindow == "Month")
            startTime = endTime.add(-ds.RelativeValue, "month");
        else
            startTime = endTime.add(ds.RelativeValue, "year");
    }
    return { Start: startTime.valueOf(), End: endTime.valueOf() };
}

const ComputeDuration = (ds: TrenDAP.iDataSet) => {
    const result = ComputeTime(ds);
    return result.End - result.Start;
}

const ComputeStartTime = (ds: TrenDAP.iDataSet) => {
    return ComputeTime(ds).Start;
}

const ComputeEndTime = (ds: TrenDAP.iDataSet) => {
    return ComputeTime(ds).End;
}

export { DateFormat, ComputeDuration, ComputeTime, ComputeStartTime, ComputeEndTime, ComputeValidDays, ComputeValidWeeks }