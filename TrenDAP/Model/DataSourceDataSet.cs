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

namespace TrenDAP.Model
{
    public class DataSourceDataSet
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int DataSourceID { get; set; }
        public int DataSetID { get; set; }
        public string SettingsString { get; set; }
        [NonRecordField]
        public JObject Settings
        {
            get
            {
                return JObject.Parse(SettingsString);
            }
        }
    }

    public class DataSourceDataSetController : ModelController<DataSourceDataSet>
    {
        public DataSourceDataSetController(IConfiguration configuration) : base(configuration) { }

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
        
        [HttpGet, Route("Query/{dataSourceDataSetID:int}")]
        public IActionResult GetData(int dataSourceDataSetID, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                DataSourceDataSet sourceSet = new TableOperations<DataSourceDataSet>(connection).QueryRecordWhere("ID = {0}", dataSourceDataSetID);
                if (sourceSet == null) return BadRequest($"Could not find source set relationship with ID {dataSourceDataSetID}");
                DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", sourceSet.DataSetID);
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", sourceSet.DataSourceID);
                if (dataSet is null || dataSource is null) return BadRequest("Failure loading data source or data set.");
                return Query(dataSet, dataSource, sourceSet.Settings, cancellationToken);
            }
        }

        private IActionResult Query(DataSet dataset, DataSource dataSource, JObject json, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                string type = dataSourceTypes.Find(dst => dst.ID == dataSource.DataSourceTypeID).Name;
                DataSourceHelper helper = new DataSourceHelper(dataSource);

                if (type == "TrenDAPDB")
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
    }
}
