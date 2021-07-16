//******************************************************************************************************
//  Point.cs - Gbtc
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
//  07/23/2020 - J. Ritchie Carroll
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using InfluxDB.Client.Core;

namespace HIDS
{
    [Serializable]
    [Measurement("point")]
    public class Point
    {
        [Column("tag", IsTag = true)] public string? Tag { get; set; }
        [Column("min")] public double Minimum { get; set; }
        [Column("max")] public double Maximum { get; set; }
        [Column("avg")] public double Average { get; set; }
        [Column("flags")] public uint QualityFlags { get; set; }

        [Column(IsTimestamp = true)]
        public DateTime Timestamp
        {
            get => _Timestamp;
            set => _Timestamp = API.ForceUTC(value);
        }

        private DateTime _Timestamp { get; set; }
    }
}
