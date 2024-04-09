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
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TrenDAP.Controllers;
using HIDSPoint = HIDS.Point;
using TrenDAP.Controllers.Sapphire;
using SapphirePoint = TrenDAP.Controllers.Sapphire.Point;
using System.IO;
using System.Net.Http;

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
        public string Context { get; set; }
        [UseEscapedName]
        public double RelativeValue { get; set; }
        [UseEscapedName]
        public string RelativeWindow { get; set; }
        [UseEscapedName]
        public int Hours { get; set; }
        [UseEscapedName]
        public int Days { get; set; }
        [UseEscapedName]
        public long Weeks { get; set; }
        [UseEscapedName]
        public int Months { get; set; }
        [UseEscapedName]
        public string User { get; set; }
        [UseEscapedName]
        public bool Public { get; set; }
        public DateTime UpdatedOn { get; set; }
    }

    public class DataSetController : ModelController<DataSet>
    {
        #region [ Properties ]
        private IConfiguration Configuration { get; }
        #endregion

        public DataSetController(IConfiguration configuration) : base(configuration)
        {
            Configuration = configuration;
        }

        public override ActionResult Post([FromBody] JObject record)
        {
            record["User"] = Request.HttpContext.User.Identity.Name;
            record["JSON"] = Encoding.UTF8.GetBytes(record["JSONString"].ToString());
            return base.Post(record);
        }
        public override ActionResult Patch([FromBody] JObject record)
        {
            record["JSON"] = Encoding.UTF8.GetBytes(record["JSONString"].ToString());
            return base.Patch(record);
        }

        [HttpGet, Route("Query/{dataSetID:int}")]
        public async Task<ActionResult> GetData(int dataSetID, CancellationToken cancellationToken)
        {
            try
            {
                using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
                {
                    List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                    DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", dataSetID);
                    if (dataSet == null) return BadRequest();
                    IEnumerable<DataSourceDataSet> sourceSets = new TableOperations<DataSourceDataSet>(connection).QueryRecordsWhere("DataSetID = {0}", dataSetID);
                    TableOperations<DataSource> sourceTable = new TableOperations<DataSource>(connection);

                    IEnumerable<Task<JObject>> tasks = sourceSets.Select(sourceSet => {
                        DataSource source = sourceTable.QueryRecordWhere("ID = {0}", sourceSet.DataSourceID);
                        JObject data = JObject.Parse(sourceSet.Settings);
                        return Query(dataSet, source, data, cancellationToken);
                    });
                    JObject[] result = await Task.WhenAll(tasks);
                    return Ok(result);

                }
            }
            catch (AggregateException ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }

        private Task<JObject> Query(DataSet dataset, DataSource dataSource, JObject json, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                string type = dataSourceTypes.Find(dst => dst.ID == dataSource.DataSourceTypeID).Name;

                JObject jObject = new JObject();
                jObject["DataSource"] = new JObject();
                jObject["DataSource"]["ID"] = dataSource.ID;
                jObject["DataSource"]["Name"] = dataSource.Name;
                jObject["DataSource"]["Type"] = type;

                if (type == "TrenDAPDB")
                {
                    jObject["DataSource"]["OpenSEE"] = TrenDAPDBController.GetOpenSEEURL(dataSource.ID, Configuration).Result;
                    return QueryTrenDAPDB(jObject, dataset, dataSource, json, cancellationToken);
                }
                else if (type == "OpenHistorian")
                    return QueryOpenHistorian(jObject, dataset, dataSource, json, cancellationToken);
                else if (type == "Sapphire")
                {
                    jObject["DataSource"]["OpenSEE"] = TrenDAPDBController.GetOpenSEEURL(dataSource.ID, Configuration).Result;
                    return QuerySapphire(jObject, dataset, dataSource, json, cancellationToken);
                }
                else
                    return Task.FromResult(jObject);
            }
        }

        private Task<JObject> QueryTrenDAPDB(JObject jObject, DataSet dataset, DataSource source, JObject data, CancellationToken cancellationToken)
        {
            return Task.Run(async () =>
            {                    
                TrenDAPDBController.XDADataSetData setData = data.ToObject<TrenDAPDBController.XDADataSetData>();
                TrenDAPDBController.HIDSPost post = TrenDAPDBController.CreatePost(dataset, setData);

                jObject["Context"] = dataset.Context;
                jObject["From"] = post.StartTime.ToString("MM/dd/yyyy");
                jObject["To"] = post.EndTime.ToString("MM/dd/yyyy");

                DataTable table = TrenDAPDBController.GetDataTable(source.ID, post, Configuration, cancellationToken);

                if (table.Rows.Count > 0) {
                    Task<string> eventsTask = TrenDAPDBController.GetEvents(source.ID, post, Configuration, cancellationToken);
                    Task<string> alarmsTask = TrenDAPDBController.GetAlarms(source.ID, post, Configuration, cancellationToken);

                    Task<HttpResponseMessage> rsp = TrenDAPDBController.QueryHids(source.ID, post, Configuration, cancellationToken);
                    IEnumerable<HIDSPoint> points = ParsePoints(rsp, cancellationToken);
                    IEnumerable<JObject> tableJson = JArray.FromObject(table).Select(row => JObject.FromObject(row));

                    string eventsString = await eventsTask;
                    JArray events = JArray.Parse(eventsString);
                    string alarmsString = await alarmsTask;
                    var groupjoin = tableJson.GroupJoin(points.ToArray(), row => int.Parse(row["ID"].ToString()), result => int.Parse(result.Tag, System.Globalization.NumberStyles.HexNumber), (row, resultcollection) =>
                    {
                        row["Events"] = JArray.FromObject(events.Where(token => int.Parse(token["ChannelID"].ToString()) == int.Parse(row["ID"].ToString())));
                        row["Data"] = JArray.FromObject(resultcollection);
                        return row;
                    });

                    jObject["Data"] = JArray.FromObject(groupjoin);
                }
                else
                    jObject["Data"] = JArray.FromObject(new List<int> () { });

                jObject["Data"] = JArray.FromObject(((JArray)jObject["Data"]).Where((row, index) => row["Data"].Count() > 0));

                return jObject;
            });

        }

        private Task<JObject> QueryOpenHistorian(JObject jObject, DataSet dataset, DataSource source, JObject data, CancellationToken cancellationToken)
        {
            return Task.Run(() =>
            {

                OpenHistorianController.OpenHistorianDataSet setData = data.ToObject<OpenHistorianController.OpenHistorianDataSet>();

                OpenHistorianController.Post post = OpenHistorianController.CreatePost(dataset, setData);

                jObject["Context"] = dataset.Context;
                jObject["From"] = post.StartTime.ToString("MM/dd/yyyy");
                jObject["To"] = post.EndTime.ToString("MM/dd/yyyy");

                DataTable table = OpenHistorianController.GetDataTable(source.ID, post, Configuration, cancellationToken);

                if (table.Rows.Count > 0)
                {

                    Task<HttpResponseMessage> rsp = OpenHistorianController.Query(source.ID, post, Configuration, cancellationToken);
                    IEnumerable<HIDSPoint> points = ParsePoints(rsp, cancellationToken);
                    IEnumerable<JObject> tableJson = JArray.FromObject(table).Select(row => JObject.FromObject(row));

                    var groupjoin = tableJson.GroupJoin(points, row => row["ID"].ToString(), result => result.Tag, (row, resultcollection) =>
                    {
                        row["Data"] = JArray.FromObject(resultcollection);
                        return row;
                    });

                    jObject["Data"] = JArray.FromObject(groupjoin);
                }
                else
                    jObject["Data"] = JArray.FromObject(new List<string>() { });

                return jObject;
                
            });

        }

        private Task<JObject> QuerySapphire(JObject jObject, DataSet dataset, DataSource source, JObject data, CancellationToken cancellationToken)
        {
            return Task.Run(() =>
            {

                SapphireDataSetData setData = data.ToObject<SapphireDataSetData>();

                SapphirePost post = SapphireController.CreatePost(dataset, setData);

                jObject["Context"] = dataset.Context;
                jObject["From"] = post.StartTime.ToString("MM/dd/yyyy");
                jObject["To"] = post.EndTime.ToString("MM/dd/yyyy");

                SapphireController sapphireController = new SapphireController(Configuration);
                List<SapphireChannelRow> results =  sapphireController.Query(source.ID, post, cancellationToken);
                jObject["Data"] = JArray.FromObject(results);

                return jObject;

            }, cancellationToken);

        }
        public static IEnumerable<HIDSPoint> ParsePoints(Task<HttpResponseMessage> hidsTask, CancellationToken cancellationToken)
        {
            HttpResponseMessage responseMessage = hidsTask.Result;
            List<HIDSPoint> points = new List<HIDSPoint>();
            using (Stream stream = responseMessage.Content.ReadAsStreamAsync().Result)
            using (TextReader reader = new StreamReader(stream))
            {
                while (true)
                {
                    string line = reader.ReadLine();

                    if (line == null)
                        break;

                    if (line == string.Empty)
                        continue;

                    JObject jPoint = JObject.Parse(line);
                    HIDSPoint point = jPoint.ToObject<HIDSPoint>();
                    points.Add(point);
                }
            }
            return points;
        }
    }

}
