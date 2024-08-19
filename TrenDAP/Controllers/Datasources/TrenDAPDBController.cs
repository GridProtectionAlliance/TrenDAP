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
using System.Net;
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
    public class TrenDAPDBController : ControllerBase 
    {
        #region [Members ]

        public class Search
        {
            public string FieldName { get; set; }
            public string SearchText { get; set; }
            public string Operator { get; set; }
            public string Type { get; set; }

        }

        public class PostData
        {
            public IEnumerable<Search> Searches { get; set; }
            public string OrderBy { get; set; }
            public bool Ascending { get; set; }
        }
        public class XDADataSetData
        {
            public string By { get; set; }
            public List<int> IDs { get; set; }
            public List<int> Phases { get; set; }
            public List<int> Groups { get; set; }
            public List<int> ChannelIDs { get; set; }
            public string Aggregate { get; set; }
        }

        public class HIDSPost
        {
            public DateTime StartTime { get; set; }
            public DateTime StopTime { get; set; }
            public string AggregateDuration { get; set; }
            public List<int> Channels { get; set; }
            public List<TimeFilter> TimeFilters { get; set; }
        }

        public class HIDSPostTimeSpans
        {
            public IEnumerable<DateTime[]> TimeSpans { get; set; }
            public string AggregateDuration { get; set; }
            public IEnumerable<int> Channels { get; set; }
        }

    #endregion

    #region [ Constructor ]
    public TrenDAPDBController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        #endregion

        #region [ Properties ]
        private IConfiguration Configuration { get; }
        #endregion

        #region [ Http Methods ]
        // Todo: Create base implementation controller
        [HttpGet, Route("TestAuth/{dataSourceID:int}")]
        public ActionResult TestAuth(int dataSourceID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    TrenDAPXDAHelper helper = new TrenDAPXDAHelper(dataSource.PrivateSettings);
                    HttpResponseMessage rsp = helper.GetResponseTask($"api/TestAuth").Result;
                    switch (rsp.StatusCode)
                    {
                        default:
                        case HttpStatusCode.Unauthorized:
                            return Ok("Failed to authorize with datasource credentials.");
                        case HttpStatusCode.NotFound:
                            return Ok("Unable to find datasource.");
                        case HttpStatusCode.OK:
                            return Ok("1");
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        [HttpGet, Route("Query/{dataSourceDataSetID:int}")]
        public IActionResult GetData(int dataSourceDataSetID, CancellationToken cancellationToken)
        {
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
                TrenDAPXDAHelper helper = new TrenDAPXDAHelper(dataSource.PrivateSettings);

                if (dataSource.Type == "TrenDAPDB")
                {
                    HIDSPost postData = TrenDAPDBController.CreatePost(dataset, json.ToObject<XDADataSetData>());
                    JObject jObj = (JObject)JToken.FromObject(postData);
                    return helper.GetActionResult("api/HIDS/QueryPoints", new StringContent(jObj.ToString(), Encoding.UTF8, "application/json"));
                }
                // ToDo: Add other types, see funcs in dataset.cs
                /* else if (type == "openHistorian")
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
                TrenDAPXDAHelper helper = new TrenDAPXDAHelper(dataSource.PrivateSettings);

                if (dataSource.Type == "TrenDAPDB")
                {
                    HIDSPostTimeSpans postData = TrenDAPDBController.CreatePostTimeSpans(dataset, json.ToObject<XDADataSetData>(), events);
                    JObject jObj = (JObject)JToken.FromObject(postData);
                    return helper.GetActionResult("api/HIDS/QueryPointsByTimeSpans", new StringContent(jObj.ToString(), Encoding.UTF8, "application/json"));
                }
                // ToDo: Add other types, see funcs in dataset.cs
                /* else if (type == "openHistorian")
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

        [HttpGet, Route("{sourceID:int}/{table}")]
        public virtual ActionResult GetTable(int sourceID, string table)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", sourceID);
                    if (dataSource.Type == "TrenDAPDB") return GetOpenXDA(dataSource, table);
                    else return StatusCode(StatusCodes.Status500InternalServerError, "Only TrenDAPDB datasources are supported by this endpoint.");
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        [HttpPost, Route("{sourceID:int}/{table}")]
        public virtual ActionResult PostTable(int sourceID, string table, [FromBody] JObject filter)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", sourceID);
                    if (dataSource.Type == "TrenDAPDB") return GetOpenXDA(dataSource, table, filter);
                    else return StatusCode(StatusCodes.Status500InternalServerError, "Only TrenDAPDB datasources are supported by this endpoint.");
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        [HttpPost, Route("Channel/GetTrendChannels/{dataSourceID:int}")]
        public virtual ActionResult GetChannels(int dataSourceID, [FromBody] JObject filter)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    TrenDAPXDAHelper helper = new TrenDAPXDAHelper(dataSource.PrivateSettings);
                    Task<string> rsp;

                    if (dataSource.Type == "TrenDAPDB")
                    {
                        rsp = helper.PostAsync("api/Channel/TrenDAP", new StringContent(filter.ToString(), Encoding.UTF8, "application/json"));
                    }
                    else return StatusCode(StatusCodes.Status500InternalServerError, "Only TrenDAPDB datasources supported by this endpoint.");

                    return Ok(rsp.Result);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        private ActionResult GetOpenXDA(DataSource dataSource, string table, JObject filter = null)
        {
            try
            {
                TrenDAPXDAHelper helper = new TrenDAPXDAHelper(dataSource.PrivateSettings);
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


        [HttpGet, Route("HIDS/{dataSourceID:int}/{dataSetID:int}")]
        public ActionResult Get(int dataSourceID, int dataSetID, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    TrenDAPXDAHelper helper = new TrenDAPXDAHelper(dataSource.PrivateSettings);
                    Task<string> rsp = helper.GetAsync($"api/HIDS");
                    return Ok(rsp.Result);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        #endregion

        #region [ Static ]
        public static HIDSPost CreatePost(DataSet dataSet, XDADataSetData data)
        {
            DateTime startTime = dataSet.From;
            DateTime endTime = dataSet.To;
            if (dataSet.Context == "Relative")
            {
                endTime = DateTime.Now;
                if (dataSet.RelativeWindow == "Day")
                    startTime = endTime.AddDays(-dataSet.RelativeValue);
                else if (dataSet.RelativeWindow == "Week")
                    startTime = endTime.AddDays(-dataSet.RelativeValue * 7);
                else if (dataSet.RelativeWindow == "Month")
                    startTime = endTime.AddMonths(-int.Parse(dataSet.RelativeValue.ToString()));
                else
                    startTime = endTime.AddYears(-int.Parse(dataSet.RelativeValue.ToString()));
            }

            IEnumerable<TimeFilter> ReadTimeFilters(ulong flags, TimeFilter baseFilter, int size) => Enumerable
                .Range(0, size)
                .Where(index => (~flags & (1Lu << index)) > 0)
                .Select(index => baseFilter + index);

            List<TimeFilter> timeFilters = Enumerable.Empty<TimeFilter>()
                .Concat(ReadTimeFilters((ulong)dataSet.Hours, TimeFilter.Hour00, 24))
                .Concat(ReadTimeFilters((ulong)dataSet.Days, TimeFilter.Sunday, 7))
                .Concat(ReadTimeFilters((ulong)dataSet.Weeks, TimeFilter.Week00, 53))
                .Concat(ReadTimeFilters((ulong)dataSet.Months, TimeFilter.January, 12)).ToList();

            return new HIDSPost
            {
                StartTime = startTime,
                StopTime = endTime,
                Channels = data.ChannelIDs,
                AggregateDuration = data.Aggregate,
                TimeFilters = timeFilters
            };
        }
        public static HIDSPostTimeSpans CreatePostTimeSpans(DataSet dataSet, XDADataSetData data, List<Event> events)
        {
            if (events.Count() == 0) throw new ArgumentException("Post message could not be correctly formed, no events specified.");

            double addition;

            switch (dataSet.EventWindowUnit.ToLower())
            {
                case "week":
                    addition = (dataSet.EventWindowSize ?? 0) * 168;
                    break;
                case "day":
                    addition = (dataSet.EventWindowSize ?? 0) * 24;
                    break;
                case "hour":
                    addition = (dataSet.EventWindowSize ?? 0);
                    break;
                default:
                    throw new ArgumentException("Event window units for timespan must be one of the following: hour, day, week");
            }

            IEnumerable<DateTime[]> spans = events
                .Select(evt =>
                {
                    DateTime evtStartTime = DateTime.UnixEpoch.AddMilliseconds(evt.Time);
                    return new DateTime[] { evtStartTime.AddHours(-addition), evtStartTime.AddMilliseconds(evt.Duration).AddHours(addition) };
                });

            return new HIDSPostTimeSpans
            {
                TimeSpans = spans,
                Channels = data.ChannelIDs,
                AggregateDuration = data.Aggregate
            };
        }

        public static string GetHIDSSettings(int dataSourceID, IConfiguration configuration)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    TrenDAPXDAHelper helper = new TrenDAPXDAHelper(dataSource.PrivateSettings);
                    return helper.GetAsync($"api/Setting/Category/HIDS").Result;
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }
            }
        }

        public static async Task<string> GetOpenSEEURL(int dataSourceID, IConfiguration configuration)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    TrenDAPXDAHelper helper = new TrenDAPXDAHelper(dataSource.PrivateSettings);
                    return await helper.GetAsync($"api/Setting/OpenSEE.URL").ConfigureAwait(false);
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }
            }
        }
        #endregion
    }
}
