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
using System.Threading;
using System.Threading.Tasks;
using TrenDAP.Controllers;
using HIDSPoint = HIDS.Point;
using TrenDAP.Controllers.Sapphire;
using System.IO;
using System.Net.Http;
using HIDS;

namespace TrenDAP.Model
{

    public class DataSet
    {
        #region [ Fields ]
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
        public double? EventWindowSize { get; set; }
        public string EventWindowUnit { get; set; }
        #endregion

        #region [ Methods ]
        public Tuple<DateTime, DateTime> ComputeTimeEnds()
        {
            DateTime startTime = From;
            DateTime endTime = To;
            if (Context == "Relative")
            {
                endTime = DateTime.Now;
                if (RelativeWindow == "Day")
                    startTime = endTime.AddDays(-RelativeValue);
                else if (RelativeWindow == "Week")
                    startTime = endTime.AddDays(-RelativeValue * 7);
                else if (RelativeWindow == "Month")
                    startTime = endTime.AddMonths(-int.Parse(RelativeValue.ToString()));
                else
                    startTime = endTime.AddYears(-int.Parse(RelativeValue.ToString()));
            }
            return new Tuple<DateTime, DateTime>(startTime, endTime);
        }

        public IEnumerable<TimeFilter> GetTimeFilters()
        {
            IEnumerable<TimeFilter> ReadTimeFilters(ulong flags, TimeFilter baseFilter, int size) => Enumerable
                .Range(0, size)
                .Where(index => (~flags & (1Lu << index)) > 0)
                .Select(index => baseFilter + index);

            return Enumerable.Empty<TimeFilter>()
                .Concat(ReadTimeFilters((ulong)Hours, TimeFilter.Hour00, 24))
                .Concat(ReadTimeFilters((ulong)Days, TimeFilter.Sunday, 7))
                .Concat(ReadTimeFilters((ulong)Weeks, TimeFilter.Week00, 53))
                .Concat(ReadTimeFilters((ulong)Months, TimeFilter.January, 12));
        }
        #endregion
    }

    public class DataSetController : ModelController<DataSet>
    {
        public DataSetController(IConfiguration configuration) : base(configuration) {}

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
                JArray dataConnections = (JArray)record.GetValue("DataConnections");
                foreach (JObject conn in dataConnections)
                {
                    conn["SettingsString"] = conn["Settings"].ToString();
                    conn["DataSetID"] = dataSetId;
                    DataSourceDataSet connRecord = conn.ToObject<DataSourceDataSet>();
                    result += new TableOperations<DataSourceDataSet>(connection).AddNewRecord(connRecord);
                }
                JArray eventConnections = (JArray)record.GetValue("EventConnections");
                foreach (JObject conn in eventConnections)
                {
                    conn["SettingsString"] = conn["Settings"].ToString();
                    conn["DataSetID"] = dataSetId;
                    EventSourceDataSet connRecord = conn.ToObject<EventSourceDataSet>();
                    result += new TableOperations<EventSourceDataSet>(connection).AddNewRecord(connRecord);
                }
                return Ok(result);
            }
        }

        [HttpPost, Route("UpdateWithConnections")]
        public ActionResult PostByDataSet([FromBody] JObject postData)
        {
            DataSet dataSet = postData["DataSet"].ToObject<DataSet>();
            JArray dataConenctions = (JArray)postData["DataConnections"];
            IEnumerable<DataSourceDataSet> newDataRecords = dataConenctions.Select(recordToken =>
            {
                JObject record = (JObject)recordToken;
                record["SettingsString"] = record["Settings"].ToString();
                DataSourceDataSet recordObj = record.ToObject<DataSourceDataSet>();
                return recordObj;
            });
            JArray eventConenctions = (JArray)postData["EventConnections"];
            IEnumerable<EventSourceDataSet> newEventRecords = eventConenctions.Select(recordToken =>
            {
                JObject record = (JObject)recordToken;
                record["SettingsString"] = record["Settings"].ToString();
                EventSourceDataSet recordObj = record.ToObject<EventSourceDataSet>();
                return recordObj;
            });
            using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
            {
                // Handle Data Set Changes
                int result = new TableOperations<DataSet>(connection).UpdateRecord(dataSet);
                // Handle Data Records
                TableOperations<DataSourceDataSet> dataTbl = new TableOperations<DataSourceDataSet>(connection);
                IEnumerable<DataSourceDataSet> currentDataRecords = dataTbl.QueryRecordsWhere("DataSetID = {0}", dataSet.ID);
                foreach (DataSourceDataSet newRecord in newDataRecords)
                {
                    if (newRecord.ID >= 0)
                    {
                        currentDataRecords = currentDataRecords.Where(rec => rec.ID != newRecord.ID);
                        result += dataTbl.UpdateRecord(newRecord);
                    }
                    else
                        result += dataTbl.AddNewRecord(newRecord);
                }
                foreach (DataSourceDataSet removedRecord in currentDataRecords)
                    result += dataTbl.DeleteRecord(removedRecord);
                // Handle Event Records
                TableOperations<EventSourceDataSet> eventTbl = new TableOperations<EventSourceDataSet>(connection);
                IEnumerable<EventSourceDataSet> currentEventRecords = eventTbl.QueryRecordsWhere("DataSetID = {0}", dataSet.ID);
                foreach (EventSourceDataSet newRecord in newEventRecords)
                {
                    if (newRecord.ID >= 0)
                    {
                        currentEventRecords = currentEventRecords.Where(rec => rec.ID != newRecord.ID);
                        result += eventTbl.UpdateRecord(newRecord);
                    }
                    else
                        result += eventTbl.AddNewRecord(newRecord);
                }
                foreach (EventSourceDataSet removedRecord in currentEventRecords)
                    result += eventTbl.DeleteRecord(removedRecord);
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
