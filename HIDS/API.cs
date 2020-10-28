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
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using InfluxDB.Client;
using InfluxDB.Client.Api.Domain;
using InfluxDB.Client.Core;
using InfluxDB.Client.Core.Flux.Domain;

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

        public IAsyncEnumerable<Point> ReadPointsAsync(IEnumerable<string> tags, DateTime startTime, DateTime stopTime, CancellationToken cancellationToken = default) =>
            ReadPointsAsync(tags, FormatTimestamp(startTime), FormatTimestamp(stopTime), cancellationToken);

        public IAsyncEnumerable<Point> ReadPointsAsync(IEnumerable<string> tags, string start, string stop = "-0s", CancellationToken cancellationToken = default)
        {
            IEnumerable<string> tagConditions = tags.Select(tag => $"r.tag==\"{tag}\"");
            string tagFilter = string.Join(" or ", tagConditions);

            string fluxQuery =
                $"|> range(start: {start}, stop: {stop}) " +
                $"|> filter(fn: (r) => {tagFilter})";

            return ReadPointsAsync(fluxQuery.ToString(), cancellationToken);
        }

        public IAsyncEnumerable<Point> ReadPointsAsync(string fluxQuery, CancellationToken cancellationToken = default)
        {
            if (m_client is null)
                throw new InvalidOperationException("Cannot read points: not connected to InfluxDB.");

            IAsyncEnumerable<FluxRecord> fluxRecords = ReadFluxRecordsAsync(fluxQuery, cancellationToken);

            return fluxRecords
                .GroupBy(record => new
                {
                    Tag = record.GetValueByKey("tag").ToString(),
                    Time = record.GetTimeInDateTime().GetValueOrDefault()
                })
                .SelectAwaitWithCancellation(async (grouping, token) => new Point()
                {
                    Tag = grouping.Key.Tag,
                    Timestamp = grouping.Key.Time,

                    QualityFlags = await grouping
                        .Where(record => record.GetField() == "flags")
                        .Select(record => Convert.ToUInt32(record.GetValue()))
                        .FirstOrDefaultAsync(token),

                    Minimum = await grouping
                        .Where(record => record.GetField() == "min")
                        .Select(record => Convert.ToDouble(record.GetValue()))
                        .FirstOrDefaultAsync(token),

                    Maximum = await grouping
                        .Where(record => record.GetField() == "max")
                        .Select(record => Convert.ToDouble(record.GetValue()))
                        .FirstOrDefaultAsync(token),

                    Average = await grouping
                        .Where(record => record.GetField() == "avg")
                        .Select(record => Convert.ToDouble(record.GetValue()))
                        .FirstOrDefaultAsync(token)
                });
        }

        private async IAsyncEnumerable<FluxRecord> ReadFluxRecordsAsync(string fluxQuery, [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            TaskCompletionSource<TaskCompletionSource<FluxRecord>> readyTaskSource = new TaskCompletionSource<TaskCompletionSource<FluxRecord>>();

            void HandleRecord(ICancellable cancellable, FluxRecord record)
            {
                TaskCompletionSource<FluxRecord> recordTaskSource = readyTaskSource.Task.Result;

                if (cancellationToken.IsCancellationRequested)
                {
                    recordTaskSource.SetCanceled();
                    cancellable.Cancel();
                    return;
                }

                // Order of events is important here; control cannot be returned
                // to the main loop until the new readyTaskSource is created
                readyTaskSource = new TaskCompletionSource<TaskCompletionSource<FluxRecord>>();
                recordTaskSource.SetResult(record);
            }

            void HandleException(Exception ex)
            {
                TaskCompletionSource<FluxRecord> recordTaskSource = readyTaskSource.Task.Result;
                recordTaskSource.SetException(ex);
            }

            void HandleComplete()
            {
                TaskCompletionSource<FluxRecord> recordTaskSource = readyTaskSource.Task.Result;
                recordTaskSource.SetCanceled();
            }

            QueryApi queryAPI = m_client.GetQueryApi();

            // Do not await the query! HandleComplete will tell us when the query is finished
            _ = queryAPI.QueryAsync($"from(bucket:\"{PointBucket}\") {fluxQuery}", OrganizationID, HandleRecord, HandleException, HandleComplete);

            while (true)
            {
                TaskCompletionSource<FluxRecord> recordTaskSource = new TaskCompletionSource<FluxRecord>();
                readyTaskSource.SetResult(recordTaskSource);

                FluxRecord record;
                try { record = await recordTaskSource.Task; }
                catch (TaskCanceledException) { break; }

                yield return record;
            }
        }

        public static string FormatTimestamp(DateTime timestamp) => timestamp.ToString("yyyy-MM-ddTHH:mm:ss.fffZ");
    }
}
