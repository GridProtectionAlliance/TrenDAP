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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Net.Http;
using System.Runtime.Serialization.Formatters.Binary;
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
        const ulong ValidHours = 16777215; // Math.Pow(2, 24) - 1
        const ulong ValidDays = 127; //  (int)(Math.Pow(2, 7) - 1);
        const ulong ValidWeeks = 9007199254740991; // (int)(Math.Pow(2, 53) - 1);
        const ulong ValidMonths = 4095;//  (int)(Math.Pow(2, 12) - 1);

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
            public List<int> Chans { get; set; }
            public string Aggregate { get; set; }
        }

        //ToDO: Move all to new post
        public class HIDSPostLegacy
        {
            public DateTime StartTime { get; set; }
            public DateTime EndTime { get; set; }
            public string By { get; set; }
            public string Aggregate { get; set; }
            public List<int> IDs { get; set; }
            public List<int> Phases { get; set; }
            public List<int> Groups { get; set; }
            public List<int> Types { get; set; }
            public ulong Hours { get; set; }
            public ulong Days { get; set; }
            public ulong Weeks { get; set; }
            public ulong Months { get; set; }
        }

        public class HIDSPost
        {
            public DateTime StartTime { get; set; }
            public DateTime StopTime { get; set; }
            public string AggregateDuration { get; set; }
            public List<int> Channels { get; set; }
            public List<TimeFilter> TimeFilters { get; set; }
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
        [HttpGet, Route("{dataSourceID:int}/{table?}")]
        public virtual ActionResult Get(int dataSourceID, string table = "")
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {

                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    string type = connection.ExecuteScalar<string>("SELECT Name FROM DataSourceType WHERE ID = {0}", dataSource.DataSourceTypeID);

                    if (type == "TrenDAPDB")
                        return GetOpenXDA(dataSource, table);
                    else if (type == "OpenHistorian")
                        return GetOpenHistorian(dataSource, table);
                    else return StatusCode(StatusCodes.Status400BadRequest, "Datasource type not supported");
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        [HttpPost, Route("Channel/GetTrendChannels/{dataSourceID:int}")]
        public virtual ActionResult Post(int dataSourceID, [FromBody] JObject filter)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    DataSourceHelper helper = new DataSourceHelper(dataSource);
                    string type = connection.ExecuteScalar<string>("SELECT Name FROM DataSourceType WHERE ID = {0}", dataSource.DataSourceTypeID);
                    Task<string> rsp;

                    if (type == "TrenDAPDB")
                    {
                        rsp = helper.PostAsync("api/Channel/GetTrendSearchData", new StringContent(filter.ToString(), Encoding.UTF8, "application/json"));
                    }
                    else return StatusCode(StatusCodes.Status400BadRequest, "Datasource type not supported");

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
                DataSourceHelper helper = new DataSourceHelper(dataSource);
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

        private ActionResult GetOpenHistorian(DataSource dataSource, string table)
        {
            try
            {
                DataSourceHelper helper = new DataSourceHelper(dataSource);
                Task<string> rsp = helper.GetAsync($"api/trendap/{table}");
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
                    DataSourceHelper helper = new DataSourceHelper(dataSource);
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
        public static Task<HttpResponseMessage> QueryHIDS(int dataSourceID, DataSet dataSet, XDADataSetData data,IConfiguration configuration, CancellationToken cancellationToken) 
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                DataSourceHelper helper = new DataSourceHelper(dataSource);
                HIDSPostLegacy post = CreateLegacyPost(dataSet, data);
                JObject jObj = (JObject) JToken.FromObject(post);
                return helper.GetResponseTask("api/HIDS", new StringContent(jObj.ToString(), Encoding.UTF8, "application/json"));
            }
        }
        public static Task<HttpResponseMessage> QueryHids(int dataSourceID, HIDSPostLegacy post, IConfiguration configuration, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                DataSourceHelper helper = new DataSourceHelper(dataSource);
                JObject jObj = (JObject)JToken.FromObject(post);
                return helper.GetResponseTask("api/HIDS/QueryPoints", new StringContent(jObj.ToString(), Encoding.UTF8, "application/json"));
            }
        }


        public static DataTable GetDataTable(int dataSourceID, HIDSPostLegacy post, IConfiguration configuration, CancellationToken cancellationToken) {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                DataSourceHelper helper = new DataSourceHelper(dataSource);
                Task<Stream> rsp = helper.GetStreamAsync($"api/HIDS/Table");
                BinaryFormatter formatter = new BinaryFormatter();
                DataTable table = (DataTable)formatter.Deserialize(rsp.Result);
                return table;
            }
        }

        public static Task<string> GetEvents(int dataSourceID, HIDSPostLegacy post, IConfiguration configuration, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                DataSourceHelper helper = new DataSourceHelper(dataSource);
                return helper.GetAsync($"api/Event/TrenDAP");
            }
        }

        public static async Task<string> GetAlarms(int dataSourceID, HIDSPostLegacy post, IConfiguration configuration, CancellationToken cancellationToken)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                DataSourceHelper helper = new DataSourceHelper(dataSource);
                return await helper.GetAsync($"api/AlarmLimits").ConfigureAwait(false);
            }
        }

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
                Channels = data.Chans,
                AggregateDuration = data.Aggregate,
                TimeFilters = timeFilters
            };
        }

        // Todo: Remove this, replace with non-legacy
        public static HIDSPostLegacy CreateLegacyPost(DataSet dataSet, XDADataSetData data)
        {
            DateTime startTime = dataSet.From;
            DateTime endTime = dataSet.To;
            if(dataSet.Context == "Relative")
            {
                endTime = DateTime.Now;
                if(dataSet.RelativeWindow == "Day")
                    startTime = endTime.AddDays(-dataSet.RelativeValue);
                else if(dataSet.RelativeWindow == "Week")
                    startTime = endTime.AddDays(-dataSet.RelativeValue*7);
                else if(dataSet.RelativeWindow == "Month")
                    startTime = endTime.AddMonths(-int.Parse(dataSet.RelativeValue.ToString()));
                else
                    startTime = endTime.AddYears(-int.Parse(dataSet.RelativeValue.ToString()));
            }

            return new HIDSPostLegacy()
            {
                By = data.By,
                IDs = data.IDs,
                Phases = data.Phases,
                Groups = data.Groups,
                Types = data.Chans,
                StartTime = startTime,
                EndTime = endTime,
                Hours = (ulong)dataSet.Hours,
                Days = (ulong)dataSet.Days,
                Weeks = (ulong)dataSet.Weeks,
                Months = (ulong)dataSet.Months,
                Aggregate = data.Aggregate
            };


        }

        public static string GetHIDSSettings(int dataSourceID, IConfiguration configuration)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    DataSourceHelper helper = new DataSourceHelper(dataSource);
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
                    DataSourceHelper helper = new DataSourceHelper(dataSource);
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
