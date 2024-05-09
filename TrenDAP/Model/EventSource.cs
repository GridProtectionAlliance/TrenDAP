//******************************************************************************************************
//  EventSource.cs - Gbtc
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
//  04/23/2020 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data;
using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Net;
using TrenDAP.Controllers;
using PrimaryKeyAttribute = Gemstone.Data.Model.PrimaryKeyAttribute;
using openXDA.APIAuthentication;
using System.Threading.Tasks;

namespace TrenDAP.Model
{
    public class EventSource
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string URL { get; set; }
        // Todo: maybe we want to break source from api auth? two tables where a source is linked to an auth row?
        public string RegistrationKey { get; set; }
        public string APIToken { get; set; }
        [UseEscapedName]
        public bool Public { get; set; }
        [UseEscapedName]
        public string User { get; set; }
        public string SettingsString { get; set; }
        [NonRecordField]
        public JObject Settings
        {
            get
            {
                try { return JObject.Parse(SettingsString); }
                catch { return new JObject(); }
            }
        }
        public static EventSource GetEventSource(IConfiguration configuration, int id)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                return new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", id);
            }
        }
    }

    public class EventSourceHelper : XDAAPIHelper
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

    public class EventSourceController: ModelController<EventSource>
    {
        public EventSourceController(IConfiguration configuration) : base(configuration){ }

        public override ActionResult Post([FromBody] JObject record)
        {
            record["SettingsString"] = record["Settings"].ToString();
            return base.Post(record);
        }
        public override ActionResult Patch([FromBody] JObject record)
        {
            record["SettingsString"] = record["Settings"].ToString();
            return base.Patch(record);
        }

        [HttpGet, Route("TestAuth/{eventSourceID:int}")]
        public ActionResult TestAuth(int eventSourceID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    EventSource eventSource = new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", eventSourceID);
                    EventSourceHelper helper = new EventSourceHelper(eventSource);
                    HttpResponseMessage rsp = helper.GetResponseTask($"api/TestAuth").Result;
                    switch (rsp.StatusCode)
                    {
                        default:
                        case HttpStatusCode.Unauthorized:
                            return Ok("Failed to authorize with datasource credentials.");
                        case HttpStatusCode.NotFound:
                            return Ok("Unable to find datasource.");
                        case HttpStatusCode.OK:
                            return Ok("1");
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }
    }
}
