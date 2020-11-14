//******************************************************************************************************
//  QueryBuilder.cs - Gbtc
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
//  11/12/2020 - Stephen C. Wills
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Linq;

namespace HIDS
{
    internal class QueryBuilder : IQueryBuilder
    {
        private string FromClause { get; }
        private string RangeClause { get; set; } = string.Empty;
        private IEnumerable<string> IncludedTags { get; set; } = Enumerable.Empty<string>();
        private uint InvalidFlags { get; set; }
        private string AggregationDuration { get; set; } = string.Empty;

        public QueryBuilder(string bucket) =>
            FromClause = $"from(bucket: \"{bucket}\")";

        public IQueryBuilder Range(DateTime startTime) =>
            Range(API.FormatTimestamp(startTime));

        public IQueryBuilder Range(DateTime startTime, DateTime stopTime) =>
            Range(API.FormatTimestamp(startTime), API.FormatTimestamp(stopTime));

        public IQueryBuilder Range(string start)
        {
            RangeClause = $"range(start: {start})";
            return this;
        }

        public IQueryBuilder Range(string start, string stop)
        {
            RangeClause = $"range(start: {start}, stop: {stop})";
            return this;
        }

        public IQueryBuilder FilterTags(IEnumerable<string> includedTags)
        {
            IncludedTags = includedTags;
            return this;
        }

        public IQueryBuilder TestQuality(uint invalidFlags = ~0u)
        {
            InvalidFlags = invalidFlags;
            return this;
        }

        public IQueryBuilder Aggregate(string duration)
        {
            AggregationDuration = duration;
            return this;
        }

        public string Build()
        {
            List<string> clauses = new List<string>(16);

            clauses.Add(FromClause);
            clauses.Add(RangeClause);
            clauses.Add($"filter(fn: (r) => r._measurement == \"point\")");

            IEnumerable<string> tagConditionals = IncludedTags.Select(tag => $"r.tag == \"{tag}\"");
            string tagExpression = string.Join(" or ", tagConditionals);

            if (tagExpression.Length > 0)
                clauses.Add($"filter(fn: (r) => {tagExpression})");

            clauses.Add("pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\")");

            if (InvalidFlags == ~0u)
            {
                clauses.Add("filter(fn: (r) => r.flags == 0)");
            }
            else if (InvalidFlags != 0u)
            {
                IEnumerable<string> flagConditionals = Enumerable
                    .Range(0, 32)
                    .Where(exp => (InvalidFlags & (1u << exp)) > 0)
                    .Select(exp => $"(((r.flags / (2 ^ {exp})) % 2) == 0)");

                string flagExpression = string.Join(" and ", flagConditionals);
                clauses.Add($"filter(fn: (r) => {flagExpression})");
            }

            if (!string.IsNullOrEmpty(AggregationDuration))
            {
                const string ReduceClause =
                    "reduce(identity: { max: 0.0, min: 0.0, avg: 0.0, maxset: false, minset: false, total: 0.0, count: 0 }, fn: (r, accumulator) => ({ " +
                    "  max: if accumulator.maxset and accumulator.max >= r.max then accumulator.max else r.max, " +
                    "  min: if accumulator.minset and accumulator.min <= r.min then accumulator.min else r.min, " +
                    "  avg: (accumulator.total + r.avg) / float(v: accumulator.count + 1), " +
                    "  maxset: true, " +
                    "  minset: true, " +
                    "  total: accumulator.total + r.avg, " +
                    "  count: accumulator.count + 1 " +
                    "}))";

                clauses.Add($"window(every: {AggregationDuration})");
                clauses.Add(ReduceClause);
                clauses.Add("duplicate(column: \"_start\", as: \"_time\")");
                clauses.Add("window(every: inf)");
                clauses.Add("drop(columns: [\"_measurement\", \"_start\", \"_stop\", \"maxset\", \"minset\", \"total\", \"count\"])");
            }

            return string.Join("\n  |> ", clauses);
        }

        public string Count()
        {
            List<string> clauses = new List<string>(16);

            clauses.Add(FromClause);
            clauses.Add(RangeClause);
            clauses.Add($"filter(fn: (r) => r._measurement == \"point\")");
            clauses.Add($"filter(fn: (r) => r._field == \"flags\")");

            IEnumerable<string> tagConditionals = IncludedTags.Select(tag => $"r.tag == \"{tag}\"");
            string tagExpression = string.Join(" or ", tagConditionals);

            if (tagExpression.Length > 0)
                clauses.Add($"filter(fn: (r) => {tagExpression})");

            if (InvalidFlags == ~0u)
            {
                clauses.Add("filter(fn: (r) => r._value == 0)");
            }
            else if (InvalidFlags != 0u)
            {
                IEnumerable<string> flagConditionals = Enumerable
                    .Range(0, 32)
                    .Where(exp => (InvalidFlags & (1u << exp)) > 0)
                    .Select(exp => $"(((r._value / (2 ^ {exp})) % 2) == 0)");

                string flagExpression = string.Join(" and ", flagConditionals);
                clauses.Add($"filter(fn: (r) => {flagExpression})");
            }

            if (!string.IsNullOrEmpty(AggregationDuration))
            {
                clauses.Add($"window(every: {AggregationDuration}, createEmpty: true)");
                clauses.Add("count()");
                clauses.Add("duplicate(column: \"_start\", as: \"_time\")");
                clauses.Add("window(every: inf, createEmpty: true)");
                clauses.Add("drop(columns: [\"_measurement\", \"_field\", \"_start\", \"_stop\"])");
            }

            return string.Join("\n  |> ", clauses);
        }
    }
}
