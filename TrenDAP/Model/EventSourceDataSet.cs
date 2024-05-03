//******************************************************************************************************
//  EventSourceDataSet.cs - Gbtc
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
using System;
using System.Text;
using TrenDAP.Controllers;
using System.Threading;
using Gemstone.Data;
using GSF.Data.Model;

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
                catch { return new JObject(); }
            } 
        }
    }

    [CustomView(@"
        SELECT
            EventSourceDataSet.ID,
            EventSourceDataSet.EventSourceID,
            EventSourceDataSet.DataSetID,
            EventSourceDataSet.SettingsBin,
            EventSource.Name as EventSourceName,
            DataSet.Name as DataSetName
        From 
            EventSourceDataSet LEFT JOIN
            EventSource ON EventSourceDataSet.EventSourceID = EventSource.ID LEFT JOIN
            DataSet ON EventSourceDataSet.DataSetID = DataSet.ID
    ")]
    public class EvenSourceDataSetView : EventSourceDataSet
    {
        public string EventSourceName { get; set; }
        public string DataSetName { get; set; }
    }
    public class EventSourceDataSetController : ModelController<EvenSourceDataSetView>
    {
        public EventSourceDataSetController(IConfiguration configuration) : base(configuration) { }

        [HttpGet, Route("Query/{eventSourceDataSetID:int}")]
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
