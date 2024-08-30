//******************************************************************************************************
//  SOEController.cs - Gbtc
//
//  Copyright © 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  08/06/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using TrenDAP.Model;
using AdoDataConnection = Gemstone.Data.AdoDataConnection;

namespace TrenDAP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SOEController : EventSourceImplementationController
    {
        protected override string typeName { get { return "SOE DB"; } }
        public SOEController(IConfiguration configuration) : base(configuration) { }

        protected override IActionResult QueryEvents(DataSet dataset, EventSource eventSource, JObject eventSourceDataSetSettings, CancellationToken cancellationToken)
        {
            JObject sourceSettings = eventSource.PrivateSettings;
            Tuple<DateTime, DateTime> timeEnds = dataset.ComputeTimeEnds();
            string timeFilter = dataset.GetTimeFiltersQuery("AlarmDateTime");

            IEnumerable<string> filters = eventSourceDataSetSettings["FilterOut"]
                .ToObject<IEnumerable<JToken>>()
                .Select((filterToken) => filterToken.ToObject<string>());
            // Time filter takes the first two args
            string filterString = string.Join(", ", filters.Select((_, index) => $"{{{index + 2}}}"));

            object[] args = (new object[] { timeEnds.Item1, timeEnds.Item2 }).Concat(filters).ToArray();


            using (AdoDataConnection connection = new AdoDataConnection(sourceSettings["ConnectionString"].ToString(), sourceSettings["DataProviderString"].ToString()))
            {
                string sql = $@"
                    SELECT
                        AlarmDateTime, 
                        StationName, 
                        AlarmPoint,
                        AlarmStatus 
                    FROM SOEAlarmDetails
                    WHERE 
                        AlarmDateTime between {{0}} and {{1}}
                        {(string.IsNullOrEmpty(timeFilter) ? "" : $" AND {timeFilter}")}
                        {(!filters.Any() ? "" : $" AND AlarmStatus not in ({filterString})")}";
                System.Data.DataTable table = connection.RetrieveData(sql, args);
                return Ok(table);
            }
        }

        protected override string TestAuthentication(EventSource eventSource)
        {
            JObject sourceSettings = eventSource.Settings;
            using (AdoDataConnection connection = new AdoDataConnection(sourceSettings["ConnectionString"].ToString(), sourceSettings["DataProviderString"].ToString()))
                return "1";
        }
    }
}
