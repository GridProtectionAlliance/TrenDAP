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
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
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
    public class OpenXDAController : ControllerBase 
    {
        public OpenXDAController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }

        [HttpGet, Route("{sourceID:int}/{table?}")]
        public virtual ActionResult GetTable(int sourceID, string table = "")
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    EventSource eventSource = new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", sourceID);
                    if (eventSource.Type == "OpenXDA") return GetOpenXDA(eventSource, table);
                    else return StatusCode(StatusCodes.Status500InternalServerError, "Only OpenXDA eventsources are supported by this endpoint.");
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
