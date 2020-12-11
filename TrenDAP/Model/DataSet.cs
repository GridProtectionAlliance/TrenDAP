//******************************************************************************************************
//  DataSet.cs - Gbtc
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
//  10/05/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



using Gemstone.Data;
using Gemstone.Data.Model;
using HIDS;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TrenDAP.Controllers;
using static TrenDAP.Controllers.OpenXDAController;

namespace TrenDAP.Model
{

    public class DataSet
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        [UseEscapedName]
        public string Name { get; set; }
        [UseEscapedName]
        public DateTime From { get; set; }
        [UseEscapedName]
        public DateTime To { get; set; }
        [UseEscapedName]
        public int Hours { get; set; }
        [UseEscapedName]
        public int Days { get; set; }
        [UseEscapedName]
        public long Weeks { get; set; }
        [UseEscapedName]
        public int Months  { get; set; }

        [UseEscapedName]
        public string User { get; set; }
        [UseEscapedName]
        public byte[] JSON { get; set; }
        [NonRecordField]
        public string JSONString => Encoding.ASCII.GetString(JSON);

        [UseEscapedName]
        public bool Public { get; set; }

        public DateTime UpdatedOn { get; set; }
    }

    public class DataSetJson { 
        public DataSource DataSource { get; set; }
        public JObject Data { get; set; }

       
    }

    public class DataSetController : ModelController<DataSet>
    {
        #region [ Properties ]
        private IConfiguration Configuration { get; }
        #endregion

        public DataSetController(IConfiguration configuration) : base(configuration){
            Configuration = configuration;
        }

        public override ActionResult Post([FromBody] JObject record)
        {
            record["User"] = Request.HttpContext.User.Identity.Name;
            record["JSON"] = Encoding.ASCII.GetBytes(record["JSONString"].ToString());
            return base.Post(record);
        }
        public override ActionResult Patch([FromBody] JObject record)
        {
            record["JSON"] = Encoding.ASCII.GetBytes(record["JSONString"].ToString());
            return base.Patch(record);
        }

        [HttpGet, Route("Query/{dataSetID:int}")]
        public async Task<ActionResult> GetData(int dataSetID, CancellationToken cancellationToken) {
            try
            {
                using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
                {
                    List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                    DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", dataSetID);
                    if (dataSet == null) return BadRequest();
                    List<DataSetJson> json = JsonConvert.DeserializeObject<List<DataSetJson>>(dataSet.JSONString);
                    IEnumerable<Task<JObject>> tasks = json.Select(ds => Query(dataSet, ds, dataSourceTypes.Find(dst => dst.ID == ds.DataSource.DataSourceTypeID).Name, cancellationToken));
                    JObject[] result = Task.WhenAll(tasks).Result;
                    JObject returnjson = new JObject();

                    return Ok(result);

                }
            }
            catch (AggregateException ex) {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }

        private Task<JObject> Query(DataSet dataset, DataSetJson json, string type, CancellationToken cancellationToken)
        {
            if(type == "OpenXDA")
                return QueryXDA(dataset, json, cancellationToken);
            else
                return Task.FromResult(new JObject());
        }

        private async Task<JObject> QueryXDA(DataSet dataset, DataSetJson json, CancellationToken cancellationToken) {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", json.DataSource.ID);

                XDADataSetData setData = json.Data.ToObject<XDADataSetData>();
                DataTable table = GetDataTable(json.DataSource.ID, dataset, setData, Configuration, cancellationToken);
                IEnumerable<Point> points = QueryHIDS(json.DataSource.ID, dataset, setData, Configuration, cancellationToken);

                JObject jObject = new JObject();
                jObject["DataSource"] = new JObject();
                jObject["DataSource"]["Name"] = dataSource.Name;
                jObject["DataSource"]["Type"] = dataSourceTypes.Find(dst => dst.ID == dataSource.DataSourceTypeID).Name;
                jObject["From"] = dataset.From;
                jObject["To"] = dataset.To;
                IEnumerable<JObject> tableJson = JArray.FromObject(table).Select(row => JObject.FromObject(row));
                var groupjoin = tableJson.GroupJoin(points, row => int.Parse(row["ID"].ToString()), result => int.Parse(result.Tag, System.Globalization.NumberStyles.HexNumber), (row, resultcollection) =>
                {
                    row["Data"] = JArray.FromObject(resultcollection);
                    return row;
                });

                jObject["Data"] = JArray.FromObject(groupjoin);

                return jObject;
            }
        }

    }

}
