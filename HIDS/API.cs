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
using System.Threading;
using System.Threading.Tasks;
using InfluxDB.Client;
using InfluxDB.Client.Api.Domain;
using InfluxDB.Client.Core;
using InfluxDB.Client.Core.Flux.Domain;
using InfluxDB.Client.Writes;
using Newtonsoft.Json;

namespace HIDS
{
    public class API : IDisposable
    {
        public static string DefaultPointBucket = "point_bucket";
        public static string DefaultOrganizationID = "gpa";

        private InfluxDBClient? m_client;
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
            InfluxDBClientOptions options = InfluxDBClientOptions.Builder.CreateNew()
                .Url(influxDBHost)
                .AuthenticateToken(m_token)
                .TimeOut(Timeout.InfiniteTimeSpan)
                .Build();

            m_client = InfluxDBClientFactory.Create(options);
        }

        public void Disconnect()
        {
            m_client?.Dispose();
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

        public async Task WritePointsAsync(IEnumerable<Point> points)
        {
            if (m_client is null)
                throw new InvalidOperationException("Cannot write points: not connected to InfluxDB.");

            TaskCreationOptions runContinuationsAsynchronously = TaskCreationOptions.RunContinuationsAsynchronously;
            TaskCompletionSource<object?> taskCompletionSource = new TaskCompletionSource<object?>(runContinuationsAsynchronously);

            using WriteApi writeApi = m_client.GetWriteApi();

            writeApi.EventHandler += (sender, args) =>
            {
                if (args is WriteErrorEvent errorEvent)
                    taskCompletionSource.TrySetException(errorEvent.Exception);

                if (args is WriteRuntimeExceptionEvent exceptionEvent)
                    taskCompletionSource.TrySetException(exceptionEvent.Exception);
            };

            foreach (Point point in points)
            {
                if (taskCompletionSource.Task.IsFaulted)
                    break;

                writeApi.WriteMeasurement(PointBucket, OrganizationID, WritePrecision.Ns, point);
            }

            writeApi.Dispose();
            taskCompletionSource.TrySetResult(null);
            await taskCompletionSource.Task;
        }

        public IAsyncEnumerable<Point> ReadPointsAsync(IEnumerable<string> tags, DateTime startTime, DateTime stopTime, CancellationToken cancellationToken = default) =>
            ReadPointsAsync(tags, FormatTimestamp(startTime), FormatTimestamp(stopTime), cancellationToken);

        public IAsyncEnumerable<Point> ReadPointsAsync(IEnumerable<string> tags, DateTime startTime, CancellationToken cancellationToken = default) =>
            ReadPointsAsync(tags, FormatTimestamp(startTime), cancellationToken: cancellationToken);

        public IAsyncEnumerable<Point> ReadPointsAsync(IEnumerable<string> tags, string start, string stop = "-0s", CancellationToken cancellationToken = default)
        {
            void ConfigureQuery(IQueryBuilder queryBuilder) => queryBuilder
                .Range(start, stop)
                .FilterTags(tags)
                .TestQuality(~0u);

            return ReadPointsAsync(ConfigureQuery, cancellationToken);
        }

        public IAsyncEnumerable<Point> ReadPointsAsync(Action<IQueryBuilder> configureQuery, CancellationToken cancellationToken = default)
        {
            QueryBuilder queryBuilder = new QueryBuilder(PointBucket);
            configureQuery(queryBuilder);

            string query = queryBuilder.BuildPointQuery();
            return ReadPointsAsync(query, cancellationToken);
        }

        public IAsyncEnumerable<PointCount> ReadPointCountAsync(Action<IQueryBuilder> configureQuery, CancellationToken cancellationToken = default)
        {
            QueryBuilder queryBuilder = new QueryBuilder(PointBucket);
            configureQuery(queryBuilder);

            string query = queryBuilder.BuildCountQuery();
            return ReadPointCountAsync(query, cancellationToken);
        }

        public IAsyncEnumerable<Point> ReadPointsAsync(string fluxQuery, CancellationToken cancellationToken = default)
        {
            IAsyncEnumerable<FluxRecord> fluxRecords = ReadFluxRecordsAsync(fluxQuery, cancellationToken);

            return fluxRecords.Select(record => new Point()
            {
                Tag = record.GetValueByKey("tag")?.ToString(),
                Timestamp = StripTimeZone(record.GetTimeInDateTime().GetValueOrDefault()),
                QualityFlags = Convert.ToUInt32(record.GetValueByKey("flags") ?? 0u),
                Minimum = Convert.ToDouble(record.GetValueByKey("min") ?? double.NaN),
                Maximum = Convert.ToDouble(record.GetValueByKey("max") ?? double.NaN),
                Average = Convert.ToDouble(record.GetValueByKey("avg") ?? double.NaN)
            });
        }

        public IAsyncEnumerable<PointCount> ReadPointCountAsync(string fluxQuery, CancellationToken cancellationToken = default)
        {
            IAsyncEnumerable<FluxRecord> fluxRecords = ReadFluxRecordsAsync(fluxQuery, cancellationToken);

            return fluxRecords.Select(record => new PointCount()
            {
                Tag = record.GetValueByKey("tag")?.ToString(),
                Timestamp = StripTimeZone(record.GetTimeInDateTime().GetValueOrDefault()),
                Count = Convert.ToUInt64(record.GetValue())
            });
        }

        private async IAsyncEnumerable<FluxRecord> ReadFluxRecordsAsync(string fluxQuery, [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            if (m_client is null)
                throw new InvalidOperationException("Cannot read points: not connected to InfluxDB.");

            TaskCreationOptions taskCreationOptions = TaskCreationOptions.RunContinuationsAsynchronously;
            TaskCompletionSource<TaskCompletionSource<FluxRecord>> readyTaskSource = new TaskCompletionSource<TaskCompletionSource<FluxRecord>>(taskCreationOptions);

            void HandleRecord(ICancellable cancellable, FluxRecord record)
            {
                Task<TaskCompletionSource<FluxRecord>> readyTask = readyTaskSource.Task;
                TaskCompletionSource<FluxRecord> recordTaskSource = readyTask.GetAwaiter().GetResult();

                cancellationToken.ThrowIfCancellationRequested();

                // Order of events is important here; control cannot be returned
                // to the main loop until the new readyTaskSource is created
                readyTaskSource = new TaskCompletionSource<TaskCompletionSource<FluxRecord>>(taskCreationOptions);
                recordTaskSource.SetResult(record);
            }

            void HandleException(Exception ex)
            {
                Task<TaskCompletionSource<FluxRecord>> readyTask = readyTaskSource.Task;
                TaskCompletionSource<FluxRecord> recordTaskSource = readyTask.GetAwaiter().GetResult();
                recordTaskSource.SetException(ex);
            }

            void HandleComplete()
            {
                Task<TaskCompletionSource<FluxRecord>> readyTask = readyTaskSource.Task;
                TaskCompletionSource<FluxRecord> recordTaskSource = readyTask.GetAwaiter().GetResult();
                recordTaskSource.SetCanceled();
            }

            QueryApi queryAPI = m_client.GetQueryApi();

            // Do not await the query! HandleComplete will tell us when the query is finished
            _ = queryAPI.QueryAsync(fluxQuery, OrganizationID, HandleRecord, HandleException, HandleComplete);

            while (true)
            {
                TaskCompletionSource<FluxRecord> recordTaskSource = new TaskCompletionSource<FluxRecord>(taskCreationOptions);
                readyTaskSource.SetResult(recordTaskSource);

                FluxRecord record;
                try { record = await recordTaskSource.Task.ConfigureAwait(false); }
                catch (TaskCanceledException) { break; }

                yield return record;
            }
        }

        public static string FormatTimestamp(DateTime timestamp) =>
            JsonConvert.ToString(ForceUTC(timestamp)).Trim('"');

        // InfluxDB only accepts UTC timestamps,
        // and properly converting to UTC would change semantics for daily aggregation
        internal static DateTime ForceUTC(DateTime timestamp) =>
            DateTime.SpecifyKind(timestamp, DateTimeKind.Utc);

        // Time zone of timestamp read from InfluxDB cannot be determined
        internal static DateTime StripTimeZone(DateTime timestamp) =>
            DateTime.SpecifyKind(timestamp, DateTimeKind.Unspecified);
    }
}
