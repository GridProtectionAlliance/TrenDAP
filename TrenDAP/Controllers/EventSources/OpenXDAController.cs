//******************************************************************************************************
//  TrenDAPDBController.cs - Gbtc
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
//  10/07/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data.Model;
using HIDS;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using openXDA.APIAuthentication;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TrenDAP.Model;
using AdoDataConnection = Gemstone.Data.AdoDataConnection;
using DataSet = TrenDAP.Model.DataSet;
namespace TrenDAP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpenXDAController : EventSourceImplementationController
    {
        protected override string typeName { get { return "openXDA"; } }
        public OpenXDAController(IConfiguration configuration) : base(configuration) { }

        private class EventSourceHelper : XDAAPIHelper
        {
            private EventSource m_eventSource;

            public EventSourceHelper(IConfiguration config, int dataSourceId)
            {
                using (AdoDataConnection connection = new AdoDataConnection(config["SystemSettings:ConnectionString"], config["SystemSettings:DataProviderString"]))
                {
                    m_eventSource = new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", dataSourceId);
                }
            }

            public EventSourceHelper(EventSource source)
            {
                m_eventSource = source;
            }

            protected override string Token
            {
                get
                {
                    return m_eventSource.APIToken;
                }

            }
            protected override string Key
            {
                get
                {
                    return m_eventSource.RegistrationKey;
                }

            }
            protected override string Host
            {
                get
                {
                    return m_eventSource.URL;
                }
            }

            public IActionResult GetActionResult(string requestURI, HttpContent content = null)
            {
                Task<HttpResponseMessage> rsp = GetResponseTask(requestURI, content);
                return new RspConverter(rsp);
            }
        }

        protected override IActionResult QueryEvents(DataSet dataset, EventSource eventSource, JObject eventSourceDataSetSettings, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                EventSourceHelper helper = new EventSourceHelper(eventSource);
                if (eventSource.Type == typeName)
                {
                    Tuple<DateTime, DateTime> timeEnds = dataset.ComputeTimeEnds();
                    eventSourceDataSetSettings.Add("StartTime", timeEnds.Item1);
                    eventSourceDataSetSettings.Add("EndTime", timeEnds.Item2);
                    IEnumerable<TimeFilter> timeFilters = dataset.GetTimeFilters();
                    eventSourceDataSetSettings.Add("TimeFilters", new JArray(timeFilters));
                    return helper.GetActionResult("api/Event/TrenDAP", new StringContent(eventSourceDataSetSettings.ToString(), Encoding.UTF8, "application/json"));
                }
                else
                    throw new ArgumentException($"Type of {eventSource.Type} not supported.");
            }
        }

        protected override string TestAuthentication(EventSource eventSource)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                EventSourceHelper helper = new EventSourceHelper(eventSource);
                HttpResponseMessage rsp = helper.GetResponseTask($"api/TestAuth").Result;
                switch (rsp.StatusCode)
                {
                    default:
                    case HttpStatusCode.Unauthorized:
                        return "Failed to authorize with datasource credentials.";
                    case HttpStatusCode.NotFound:
                        return "Unable to find datasource.";
                    case HttpStatusCode.OK:
                        return "1";
                }
            }
        }

        [HttpGet, Route("{sourceID:int}/{table}")]
        public virtual ActionResult GetTable(int sourceID, string table)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    EventSource eventSource = new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", sourceID);
                    if (eventSource.Type == typeName) return GetOpenXDA(eventSource, table);
                    else return StatusCode(StatusCodes.Status500InternalServerError, "Only openXDA eventsources are supported by this endpoint.");
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        [HttpPost, Route("{sourceID:int}/{table}")]
        public virtual ActionResult PostTable(int sourceID, string table, [FromBody] JObject filter)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    EventSource eventSource = new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", sourceID);
                    if (eventSource.Type == typeName) return GetOpenXDA(eventSource, table, filter);
                    else return StatusCode(StatusCodes.Status500InternalServerError, "Only openXDA eventsources are supported by this endpoint.");
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        private ActionResult GetOpenXDA(EventSource eventSource, string table, JObject filter = null)
        {
            try
            {
                EventSourceHelper helper = new EventSourceHelper(eventSource);
                Task<string> rsp;
                if (filter is null) rsp = helper.GetAsync($"api/{table}");
                else rsp = helper.PostAsync($"api/{table}/SearchableList", new StringContent(filter.ToString(), Encoding.UTF8, "application/json"));
                return Ok(rsp.Result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }
    }
}
