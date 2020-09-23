//******************************************************************************************************
//  global.d.ts - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  09/08/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
export { };
declare module '*.scss';

declare global {
    var homePath: string;
    var controllerViewPath: string;

    interface String {
        countOccurrences: (chars: string) => number
    }

    namespace moment {
        function utc(timestamp: string): any;
    }

    function moment(inp?: any, format?: any, strict?: boolean): any;
    function moment(inp?: any, format?: any, language?: string, strict?: boolean): any;

}

export namespace TrenDAP{
    type DataSourceType = 'OpenXDA';
    interface iDataSouce { ID: number, Name: string, Type: DataSourceType, URL: string, Credential: string, Password: string }    
}