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
        private IEnumerable<TimeFilter> ExcludedTimes { get; set; } = Enumerable.Empty<TimeFilter>();
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

        public IQueryBuilder FilterTags(params string[] includedTags) =>
            FilterTags(includedTags.AsEnumerable());

        public IQueryBuilder FilterTags(IEnumerable<string> includedTags)
        {
            IncludedTags = includedTags;
            return this;
        }

        public IQueryBuilder FilterTime(params TimeFilter[] excludedTimes) =>
            FilterTime(excludedTimes.AsEnumerable());

        public IQueryBuilder FilterTime(IEnumerable<TimeFilter> excludedTimes)
        {
            ExcludedTimes = excludedTimes;
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

        public string BuildPointQuery()
        {
            List<string> imports = new List<string>(4);
            List<string> clauses = new List<string>(16);

            clauses.Add(FromClause);
            clauses.Add(RangeClause);
            clauses.Add($"filter(fn: (r) => r._measurement == \"point\")");

            IEnumerable<string> tagConditionals = IncludedTags.Select(tag => $"r.tag == \"{tag}\"");
            string tagExpression = string.Join(" or ", tagConditionals);

            if (tagExpression.Length > 0)
                clauses.Add($"filter(fn: (r) => {tagExpression})");

            IEnumerable<string> timeConditionals = ExcludedTimes
                .Select(ToConditional)
                .Where(conditional => !string.IsNullOrEmpty(conditional));

            string timeExpression = string.Join(" and ", timeConditionals);

            if (timeExpression.Length > 0)
            {
                imports.Add("import \"date\"");
                clauses.Add($"filter(fn: (r) => {timeExpression})");
            }

            clauses.Add("pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\")");

            if (InvalidFlags == ~0u)
            {
                clauses.Add("filter(fn: (r) => r.flags == 0)");
            }
            else if (InvalidFlags != 0u)
            {
                IEnumerable<string> flagConditionals = Enumerable
                    .Range(0, 32)
                    .Select(exp => InvalidFlags & (1u << exp))
                    .Where(flag => flag > 0)
                    .Select(flag => $"(((r.flags / uint(v: {flag})) % uint(v: 2)) == 0)");

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

            string importSection = string.Join("\n", imports);
            string querySection = string.Join("\n  |> ", clauses);
            return $"{importSection}\n{querySection}".Trim();
        }

        public string BuildCountQuery()
        {
            List<string> imports = new List<string>(4);
            List<string> clauses = new List<string>(16);

            clauses.Add(FromClause);
            clauses.Add(RangeClause);
            clauses.Add($"filter(fn: (r) => r._measurement == \"point\")");
            clauses.Add($"filter(fn: (r) => r._field == \"flags\")");

            IEnumerable<string> tagConditionals = IncludedTags.Select(tag => $"r.tag == \"{tag}\"");
            string tagExpression = string.Join(" or ", tagConditionals);

            if (tagExpression.Length > 0)
                clauses.Add($"filter(fn: (r) => {tagExpression})");

            IEnumerable<string> timeConditionals = ExcludedTimes
                .Select(ToConditional)
                .Where(conditional => !string.IsNullOrEmpty(conditional));

            string timeExpression = string.Join(" and ", timeConditionals);

            if (timeExpression.Length > 0)
            {
                imports.Add("import \"date\"");
                clauses.Add($"filter(fn: (r) => {timeExpression})");
            }

            if (InvalidFlags == ~0u)
            {
                clauses.Add("filter(fn: (r) => r._value == 0)");
            }
            else if (InvalidFlags != 0u)
            {
                IEnumerable<string> flagConditionals = Enumerable
                    .Range(0, 32)
                    .Select(exp => InvalidFlags & (1u << exp))
                    .Where(flag => flag > 0)
                    .Select(flag => $"(((r._value / uint(v: {flag})) % uint(v: 2)) == 0)");

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

            string importSection = string.Join("\n", imports);
            string querySection = string.Join("\n  |> ", clauses);
            return $"{importSection}\n{querySection}".Trim();
        }

        private string ToConditional(TimeFilter filter)
        {
            switch (filter)
            {
                case TimeFilter.Hour00: case TimeFilter.Hour01: case TimeFilter.Hour02:
                case TimeFilter.Hour03: case TimeFilter.Hour04: case TimeFilter.Hour05:
                case TimeFilter.Hour06: case TimeFilter.Hour07: case TimeFilter.Hour08:
                case TimeFilter.Hour09: case TimeFilter.Hour10: case TimeFilter.Hour11:
                case TimeFilter.Hour12: case TimeFilter.Hour13: case TimeFilter.Hour14:
                case TimeFilter.Hour15: case TimeFilter.Hour16: case TimeFilter.Hour17:
                case TimeFilter.Hour18: case TimeFilter.Hour19: case TimeFilter.Hour20:
                case TimeFilter.Hour21: case TimeFilter.Hour22: case TimeFilter.Hour23:
                    int hour = filter - TimeFilter.Hour00;
                    return $"date.hour(t: r._time) != {hour}";

                case TimeFilter.Sunday:
                case TimeFilter.Monday:
                case TimeFilter.Tuesday:
                case TimeFilter.Wednesday:
                case TimeFilter.Thursday:
                case TimeFilter.Friday:
                case TimeFilter.Saturday:
                    return $"date.weekDay(t: r._time) != date.{filter}";

                case TimeFilter.Week00: case TimeFilter.Week01: case TimeFilter.Week02:
                case TimeFilter.Week03: case TimeFilter.Week04: case TimeFilter.Week05:
                case TimeFilter.Week06: case TimeFilter.Week07: case TimeFilter.Week08:
                case TimeFilter.Week09: case TimeFilter.Week10: case TimeFilter.Week11:
                case TimeFilter.Week12: case TimeFilter.Week13: case TimeFilter.Week14:
                case TimeFilter.Week15: case TimeFilter.Week16: case TimeFilter.Week17:
                case TimeFilter.Week18: case TimeFilter.Week19: case TimeFilter.Week20:
                case TimeFilter.Week21: case TimeFilter.Week22: case TimeFilter.Week23:
                case TimeFilter.Week24: case TimeFilter.Week25: case TimeFilter.Week26:
                case TimeFilter.Week27: case TimeFilter.Week28: case TimeFilter.Week29:
                case TimeFilter.Week30: case TimeFilter.Week31: case TimeFilter.Week32:
                case TimeFilter.Week33: case TimeFilter.Week34: case TimeFilter.Week35:
                case TimeFilter.Week36: case TimeFilter.Week37: case TimeFilter.Week38:
                case TimeFilter.Week39: case TimeFilter.Week40: case TimeFilter.Week41:
                case TimeFilter.Week42: case TimeFilter.Week43: case TimeFilter.Week44:
                case TimeFilter.Week45: case TimeFilter.Week46: case TimeFilter.Week47:
                case TimeFilter.Week48: case TimeFilter.Week49: case TimeFilter.Week50:
                case TimeFilter.Week51: case TimeFilter.Week52:
                    int week = filter - TimeFilter.Week00 + 1;
                    return $"date.week(t: r._time) != {week}";

                case TimeFilter.January:
                case TimeFilter.February:
                case TimeFilter.March:
                case TimeFilter.April:
                case TimeFilter.May:
                case TimeFilter.June:
                case TimeFilter.July:
                case TimeFilter.August:
                case TimeFilter.September:
                case TimeFilter.October:
                case TimeFilter.November:
                case TimeFilter.December:
                    return $"date.month(t: r._time) != date.{filter}";

                default:
                    return string.Empty;
            }
        }
    }
}
