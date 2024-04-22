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
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TrenDAP.Controllers;
using HIDSPoint = HIDS.Point;
using TrenDAP.Controllers.Sapphire;
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
            return base.Post(record);
        }

        [HttpPost, Route("NewWithConnections")]
        public ActionResult PostConnections([FromBody] JObject record)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                DataSet dataSetRecord = record.GetValue("DataSet").ToObject<DataSet>();
                dataSetRecord.User = Request.HttpContext.User.Identity.Name;
                int result = new TableOperations<DataSet>(connection).AddNewRecord(dataSetRecord);
                int dataSetId = connection.ExecuteScalar<int>("SELECT @@IDENTITY");
                JArray connections = (JArray)record.GetValue("Connections");
                foreach (JObject conn in connections)
                {
                    DataSourceDataSet connRecord = conn.ToObject<DataSourceDataSet>();
                    connRecord.DataSetID = dataSetId;
                    connRecord.SettingsBin = Encoding.UTF8.GetBytes(conn["Settings"].ToString());
                    result += new TableOperations<DataSourceDataSet>(connection).AddNewRecord(connRecord);
                }
                return Ok(result);
            }
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
