//******************************************************************************************************
//  Interfaces.tsx - Gbtc
//
//  Copyright (c) 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  05/01/2024 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import { DataSetTypes, TrenDAP } from '../../global';
import { ISelectedChannels } from './WidgetWrapper';
export { };
declare module '*.scss';

export namespace WidgetTypes {
    interface ISettingsProps<T, U> {
        SetSettings: (settings: T) => void,
        Settings: T,
        ChannelSettings: U[]
    }

    interface IWidgetProps<T, U> {
        Data: IWidgetData<U>[]
        Settings: T,
        Width: number,
    }

    interface IWidgetData<T> extends DataSetTypes.IDataSetData {
        ChannelSettings: T,
    }

    interface ICommonSettings {
        Width: number, //percentage
        Label: string,
        ShowHeader: boolean
    }

    interface ISelectedChannels<T> extends TrenDAP.IWidgetChannels<T> {
        MetaData: DataSetTypes.IDataSetMetaData, IsNew: boolean
    }

    interface IChannelSelectionProps<S, U> {
        Settings: S,
        SetSettings: (settings: S) => void,
        AllChannels: DataSetTypes.IDataSetMetaData[],
        AddChannel: (channelID: string, channelSettings: U) => void,
        RemoveChannel: (channelID: string) => void,
        SelectedChannels: ISelectedChannels<U>[],
        SetChannelSettings: (channelKey: TrenDAP.IChannelKey, channelSettings: U) => void,
    }

    /*
     S => General Settings Object associated with the Widget
    */
    /*
    U => Channel Settings Object associated with each Channel 
    */
    interface IWidget<S, U> {
        WidgetUI: React.FC<IWidgetProps<S, U>>,
        SettingsUI?: React.FC<ISettingsProps<S, U>>,
        ChannelSelectionUI?: React.FC<IChannelSelectionProps<S, U>>,
        DefaultSettings: S,
        DefaultChannelSettings: U,
        Name: string
    }
}
