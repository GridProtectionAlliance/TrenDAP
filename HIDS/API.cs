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
        [Column("min")] public double Minimum { get; set; }
        [Column("max")] public double Maximum { get; set; }
        [Column("avg")] public double Average { get; set; }
        [Column("flags")] public uint QualityFlags { get; set; }
        [Column(IsTimestamp = true)] public DateTime Timestamp { get; set; }
    }

    public class API : IDisposable
    {
        public static string DefaultPointBucket = "point_bucket";
        public static string DefaultOrganizationID = "gpa";

        private InfluxDBClient m_client;
        private char[] m_token = Array.Empty<char>();
        private bool m_disposed;

        public string PointBucket { get; set; } = DefaultPointBucket;

        public string OrganizationID { get; set; } = DefaultOrganizationID;

        public string TokenID
        {
            get => new string(m_token);
            set => m_token = value.ToCharArray();
        }

        public void Connect(string influxDBHost)
        {
            m_client = InfluxDBClientFactory.Create(influxDBHost, m_token);
        }

        public void Disconnect()
        {
            m_client.Dispose();
            m_client = null;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (m_disposed)
                return;

            try
            {
                if (disposing)
                {
                    Disconnect();
                }
            }
            finally
            {
                m_disposed = true;
            }
        }

        public void WritePoints(IEnumerable<Point> points)
        {
            if (m_client is null)
                throw new InvalidOperationException("Cannot write points: not connected to InfluxDB.");

            using WriteApi writeApi = m_client.GetWriteApi();

            foreach (Point point in points)
                writeApi.WriteMeasurement(PointBucket, OrganizationID, WritePrecision.Ns, point);
        }

        public IAsyncEnumerable<Point> ReadPoints(IEnumerable<string> tags, DateTime startTime, DateTime stopTime) =>
            ReadPoints(tags, FormatTimestamp(startTime), FormatTimestamp(stopTime));

        public IAsyncEnumerable<Point> ReadPoints(IEnumerable<string> tags, string start, string stop = null)
        {
            StringBuilder fluxQuery = new StringBuilder();

            fluxQuery.Append($"|> range(start:{start}");

            if (!string.IsNullOrWhiteSpace(stop))
                fluxQuery.Append($", stop:{stop}");

            fluxQuery.Append(") ");

            fluxQuery.Append($"|> filter(fn: (r) => {string.Join(" or ", tags.Select(tag => $"r.tag==\"{tag}\")"))}");

            return ReadPoints(fluxQuery.ToString());
        }

        public async IAsyncEnumerable<Point> ReadPoints(string fluxQuery)
        {
            if (m_client is null)
                throw new InvalidOperationException("Cannot read points: not connected to InfluxDB.");

            QueryApi queryAPI = m_client.GetQueryApi();
            List<Point> points = await queryAPI.QueryAsync<Point>($"from(bucket:\"{PointBucket}\"){fluxQuery}", OrganizationID);

            foreach (Point point in points)
                yield return point;
        }

        public static string FormatTimestamp(DateTime timestamp) => timestamp.ToString("yyyy-MM-ddTHH:mm:ss.fffZ");
    }
}
