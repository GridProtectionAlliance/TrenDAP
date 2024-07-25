//******************************************************************************************************
//  HelperFunctions.tsx - Gbtc
//
//  Copyright (c) 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  06/04/2024 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************

import { TrenDAP, DataSetTypes } from '../../global';
import _ from 'lodash';

export const CreateWidget = (type: string, width: number): TrenDAP.IWidgetModel => {
    return {
        Width: width,
        Label: `${type}`,
        Type: type,
        ShowHeader: true,
        Settings: null,
        Channels: [],
        EventSources: []
    }
}

export const isPercent = (percent: number) => {
    if (percent > 100 || percent < 5)
        return false;
    return true
}

export const isVirtual = (channelKey: TrenDAP.IChannelKey | string) => {
    return !channelKey.hasOwnProperty('Parent');
}

export const createVirtualFunc = (componentChannels: {Key: TrenDAP.IChannelKey, Name: string}[], evalExpression: string) => {
    return eval?.(
        `"use strict";
        (T, ${componentChannels.map(compChannel => compChannel.Name).join(', ')}) => ${evalExpression}`
    );
} 

export const sort = (newField: keyof DataSetTypes.IDataSetMetaData, currentSortField: keyof DataSetTypes.IDataSetMetaData, setSortField: (sort: keyof DataSetTypes.IDataSetMetaData) => void, newAscend: boolean, setAscend: (asc: boolean) => void, currentAsc: boolean, channels: DataSetTypes.IDataSetMetaData[], setChannels: (chans: DataSetTypes.IDataSetMetaData[]) => void) => {
    const updatedAscend = currentSortField === newField ? !currentAsc : newAscend
    if (newField === currentSortField)
        setAscend(updatedAscend);
    else
        setSortField(newField);

    setChannels(_.orderBy(channels, newField, [updatedAscend ? "asc" : "desc"]))
}
