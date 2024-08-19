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
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using TrenDAP.Controllers;
using GSF.Data.Model;
using TrenDAP.Attributes;

namespace TrenDAP.Model
{
    public class EventSourceDataSet
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int EventSourceID { get; set; }
        [ParentKey(typeof(DataSet))]
        public int DataSetID { get; set; }
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
    }

    [CustomView(@"
        SELECT
            EventSourceDataSet.ID,
            EventSourceDataSet.EventSourceID,
            EventSourceDataSet.DataSetID,
            EventSourceDataSet.SettingsString,
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

    }
}
