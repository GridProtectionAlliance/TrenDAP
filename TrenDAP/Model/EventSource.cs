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
using System.Net;
using System.Net.Http;
using TrenDAP.Controllers;
using PrimaryKeyAttribute = Gemstone.Data.Model.PrimaryKeyAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace TrenDAP.Model
{
    public class EventSource: Source
    {
        public int EventSourceTypeID { get; set; }
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
                    SourceHelper<EventSource> helper = new SourceHelper<EventSource>(eventSource);
                    HttpResponseMessage rsp = helper.GetResponseTask($"api/TestAuth").Result;
                    switch (rsp.StatusCode)
                    {
                        default:
                        case HttpStatusCode.Unauthorized:
                            return Ok("Failed to authorize with eventsource credentials.");
                        case HttpStatusCode.NotFound:
                            return Ok("Unable to find eventsource.");
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

    public class EventSourceType
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Name { get; set; }
    }


    public class EventSourceTypeController : ModelController<EventSourceType>
    {
        public EventSourceTypeController(IConfiguration configuration) : base(configuration) {}
    }

}
