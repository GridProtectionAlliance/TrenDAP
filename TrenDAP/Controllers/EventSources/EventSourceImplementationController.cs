//******************************************************************************************************
//  EventSourceImplementationController.cs - Gbtc
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

using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Threading;
using TrenDAP.Model;
using AdoDataConnection = Gemstone.Data.AdoDataConnection;

namespace TrenDAP.Controllers
{
    [ApiController]
    public abstract class EventSourceImplementationController : ControllerBase
    {
        protected virtual string typeName { get; }
        protected IConfiguration Configuration { get; }

        public EventSourceImplementationController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        [HttpGet, Route("TestAuth/{eventSourceID:int}")]
        public ActionResult TestAuth(int eventSourceID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    EventSource eventSource = new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", eventSourceID);
                    if (eventSource.Type != typeName) return StatusCode(StatusCodes.Status400BadRequest, $"Only ${typeName} eventsources are supported by this endpoint.");
                    return Ok(TestAuthentication(eventSource));
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        [HttpGet, Route("Query/{eventSourceDataSetID:int}")]
        public IActionResult GetEvents(int eventSourceDataSetID, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    EventSourceDataSet sourceSet = new TableOperations<EventSourceDataSet>(connection).QueryRecordWhere("ID = {0}", eventSourceDataSetID);
                    if (sourceSet == null) return StatusCode(StatusCodes.Status400BadRequest, $"Could not find source set relationship with ID {eventSourceDataSetID}");
                    DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", sourceSet.DataSetID);
                    EventSource eventSource = new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", sourceSet.EventSourceID);
                    if (eventSource.Type != typeName) return StatusCode(StatusCodes.Status400BadRequest, $"Only ${typeName} eventsources are supported by this endpoint.");
                    return QueryEvents(dataSet, eventSource, sourceSet.Settings, cancellationToken);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        protected abstract string TestAuthentication(EventSource eventSource);
        protected abstract IActionResult QueryEvents(DataSet dataset, EventSource eventSource, JObject eventSourceDataSetSettings, CancellationToken cancellationToken);
    }
}
