//******************************************************************************************************
//  DataSourceDataSet.cs - Gbtc
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
//  04/02/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Net.Http;
using System;
using System.Text;
using TrenDAP.Controllers;
using static TrenDAP.Controllers.TrenDAPDBController;
using System.Threading;
using Gemstone.Data;
using System.Linq;
using System.Diagnostics.Tracing;

namespace TrenDAP.Model
{
    public class EventSourceDataSet
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int EventSourceID { get; set; }
        public int DataSetID { get; set; }
        public byte[] SettingsBin { get; set; }
        [NonRecordField]
        public JObject Settings
        {
            get
            {
                try { return JObject.Parse(Encoding.UTF8.GetString(SettingsBin)); }
                catch { return JObject.Parse(Encoding.ASCII.GetString(SettingsBin)); }
            } 
        }
    }

    public class EventSourceDataSetController : ModelController<EventSourceDataSet>
    {
        public EventSourceDataSetController(IConfiguration configuration) : base(configuration) { }

        public override ActionResult Post([FromBody] JObject record)
        {
            record["SettingsBin"] = Encoding.UTF8.GetBytes(record["Settings"].ToString());
            return base.Post(record);
        }
        public override ActionResult Patch([FromBody] JObject record)
        {
            record["SettingsBin"] = Encoding.UTF8.GetBytes(record["Settings"].ToString());
            return base.Patch(record);
        }

        [HttpGet, Route("Query/{dataSourceDataSetID:int}")]
        public IActionResult GetData(int eventSourceDataSetID, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                EventSourceDataSet sourceSet = new TableOperations<EventSourceDataSet>(connection).QueryRecordWhere("ID = {0}", eventSourceDataSetID);
                if (sourceSet == null) return BadRequest($"Could not find source set relationship with ID {eventSourceDataSetID}");
                DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", sourceSet.DataSetID);
                EventSource eventSource = new TableOperations<EventSource>(connection).QueryRecordWhere("ID = {0}", sourceSet.EventSourceID);
                if (dataSet is null || eventSource is null) return BadRequest("Failure loading event source or data set.");
                return Query(dataSet, eventSource, sourceSet.Settings, cancellationToken);
            }
        }

        private IActionResult Query(DataSet dataset, EventSource eventSource, JObject json, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                SourceHelper<EventSource> helper = new SourceHelper<EventSource>(eventSource);

                if (eventSource.Type == "OpenXDA")
                {
                    // ToDo: Add implementation
                    throw new ArgumentException($"Type of {eventSource.Type} not supported.");
                }
                else
                    throw new ArgumentException($"Type of {eventSource.Type} not supported.");
            }
        }
    }
}
