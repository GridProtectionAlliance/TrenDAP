//******************************************************************************************************
//  API.cs - Gbtc
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
using System.Collections.Generic;
using System.Linq;
using System.Text;
using InfluxDB.Client;
using InfluxDB.Client.Api.Domain;
using InfluxDB.Client.Core;

namespace HIDS
{
    [Measurement("point")]
    public class Point
    {
        [Column("tag", IsTag = true)] public string Tag { get; set; }
        [Column(IsTimestamp = true)] public DateTime Timestamp;
        [Column("min")] public double Minimum { get; set; }
        [Column("max")] public double Maximum { get; set; }
        [Column("avg")] public double Average { get; set; }
        [Column("flags")] public uint QualityFlags { get; set; }
    }

    public class API
    {
        private static readonly char[] s_token = "".ToCharArray();

        public static string PointBucket = "point_bucket";
        public static string OrganizationID = "gpa";

        public static void WritePoints(string influxDBHost, IEnumerable<Point> points)
        {
            using InfluxDBClient influxDBClient = InfluxDBClientFactory.Create(influxDBHost, s_token);
            using WriteApi writeApi = influxDBClient.GetWriteApi();

            foreach (Point point in points)
                writeApi.WriteMeasurement(PointBucket, OrganizationID, WritePrecision.Ns, point);
        }

        public static IAsyncEnumerable<Point> ReadPoints(string influxDBHost, IEnumerable<string> tags, DateTime startTime, DateTime stopTime)
        {
            return ReadPoints(influxDBHost, tags, FormatTimestamp(startTime), FormatTimestamp(stopTime));
        }

        public static IAsyncEnumerable<Point> ReadPoints(string influxDBHost, IEnumerable<string> tags, string start, string stop = "now")
        {
            StringBuilder fluxQuery = new StringBuilder();

            fluxQuery.Append($"|> range(start:{start}, stop:{stop})");
            fluxQuery.Append($"|> filter(fn: (r) => {string.Join(" or ", tags.Select(tag => $"r.tag==\"{tag}\")"))}");

            return ReadPoints(influxDBHost, fluxQuery.ToString());
        }

        public static async IAsyncEnumerable<Point> ReadPoints(string influxDBHost, string fluxQuery)
        {
            using InfluxDBClient influxDBClient = InfluxDBClientFactory.Create(influxDBHost, s_token);
            QueryApi queryAPI = influxDBClient.GetQueryApi();

            List<Point> points = await queryAPI.QueryAsync<Point>($"from(bucket:\"{PointBucket}\"){fluxQuery}", OrganizationID);

            foreach (Point point in points)
                yield return point;
        }

        public static string FormatTimestamp(DateTime timestamp) => timestamp.ToString("yyyy-MM-ddTHH:mm:ss.fffZ");
    }
}
