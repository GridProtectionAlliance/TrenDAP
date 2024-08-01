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
using TrenDAP.Attributes;
using GSF.Data.Model;
using System.Reflection;

namespace TrenDAP.Model
{
    public class DataSourceDataSet
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int DataSourceID { get; set; }
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
            DataSourceDataSet.ID,
            DataSourceDataSet.DataSourceID,
            DataSourceDataSet.DataSetID,
            DataSourceDataSet.SettingsString,
            DataSource.Name as DataSourceName,
            DataSet.Name as DataSetName
        From 
            DataSourceDataSet LEFT JOIN
            DataSource ON DataSourceDataSet.DataSourceID = DataSource.ID LEFT JOIN
            DataSet ON DataSourceDataSet.DataSetID = DataSet.ID
    ")]
    public class DataSourceDataSetView : DataSourceDataSet
    {
        public string DataSourceName { get; set; }
        public string DataSetName { get; set; }
    }
    
    public class DataSourceDataSetController : ModelController<DataSourceDataSetView>
    {
        public DataSourceDataSetController(IConfiguration configuration) : base(configuration) { }
        
        [HttpGet, Route("Query/{dataSourceDataSetID:int}")]
        public IActionResult GetData(int dataSourceDataSetID, CancellationToken cancellationToken)
        {
            if (!string.IsNullOrEmpty(GetRoles) && !User.IsInRole(GetRoles)) return Unauthorized();
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                DataSourceDataSet sourceSet = new TableOperations<DataSourceDataSet>(connection).QueryRecordWhere("ID = {0}", dataSourceDataSetID);
                if (sourceSet == null) return BadRequest($"Could not find source set relationship with ID {dataSourceDataSetID}");
                DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", sourceSet.DataSetID);
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", sourceSet.DataSourceID);
                if (dataSet is null || dataSource is null) return BadRequest("Failure loading data source or data set.");
                return Query(dataSet, dataSource, sourceSet.Settings, cancellationToken);
            }
        }

        [HttpPost, Route("Query/ByEvents/{dataSourceDataSetID:int}")]
        public IActionResult GetDataByEvents(int dataSourceDataSetID, [FromBody] JArray events, CancellationToken cancellationToken)
        {
            if (!string.IsNullOrEmpty(PostRoles) && !User.IsInRole(PostRoles)) return Unauthorized();
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                DataSourceDataSet sourceSet = new TableOperations<DataSourceDataSet>(connection).QueryRecordWhere("ID = {0}", dataSourceDataSetID);
                if (sourceSet == null) return BadRequest($"Could not find source set relationship with ID {dataSourceDataSetID}");
                DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", sourceSet.DataSetID);
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", sourceSet.DataSourceID);
                if (dataSet is null || dataSource is null) return BadRequest("Failure loading data source or data set.");
                return Query(dataSet, dataSource, sourceSet.Settings, events.ToObject<List<Event>>(), cancellationToken);
            }
        }

        private IActionResult Query(DataSet dataset, DataSource dataSource, JObject json, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                DataSourceHelper helper = new DataSourceHelper(dataSource);

                if (dataSource.Type == "TrenDAPDB")
                {
                    HIDSPost postData = TrenDAPDBController.CreatePost(dataset, json.ToObject<XDADataSetData>());
                    JObject jObj = (JObject)JToken.FromObject(postData);
                    return helper.GetActionResult("api/HIDS/QueryPoints", new StringContent(jObj.ToString(), Encoding.UTF8, "application/json"));
                }
                // ToDo: Add other types, see funcs in dataset.cs
                /* else if (type == "OpenHistorian")
                    return QueryOpenHistorian(jObject, dataset, dataSource, json, cancellationToken);
                else if (type == "Sapphire")
                {
                    jObject["DataSource"]["OpenSEE"] = TrenDAPDBController.GetOpenSEEURL(dataSource.ID, Configuration).Result;
                    return QuerySapphire(jObject, dataset, dataSource, json, cancellationToken);
                } */
                else
                    throw new ArgumentException("Only datasources type of TrenDAPDB supported by this method.");
            }
        }

        private IActionResult Query(DataSet dataset, DataSource dataSource, JObject json, List<Event> events, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                DataSourceHelper helper = new DataSourceHelper(dataSource);

                if (dataSource.Type == "TrenDAPDB")
                {
                    HIDSPostTimeSpans postData = TrenDAPDBController.CreatePostTimeSpans(dataset, json.ToObject<XDADataSetData>(), events);
                    JObject jObj = (JObject)JToken.FromObject(postData);
                    return helper.GetActionResult("api/HIDS/QueryPointsByTimeSpans", new StringContent(jObj.ToString(), Encoding.UTF8, "application/json"));
                }
                // ToDo: Add other types, see funcs in dataset.cs
                /* else if (type == "OpenHistorian")
                    return QueryOpenHistorian(jObject, dataset, dataSource, json, cancellationToken);
                else if (type == "Sapphire")
                {
                    jObject["DataSource"]["OpenSEE"] = TrenDAPDBController.GetOpenSEEURL(dataSource.ID, Configuration).Result;
                    return QuerySapphire(jObject, dataset, dataSource, json, cancellationToken);
                } */
                else
                    throw new ArgumentException("Only datasources of type TrenDAPDB are supported by this endpoint.");
            }
        }
    }
}
