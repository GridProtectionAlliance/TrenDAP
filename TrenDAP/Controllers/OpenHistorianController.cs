//******************************************************************************************************
//  OpenHistorianController.cs - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  03/08/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data;
using Gemstone.Data.Model;
using Gemstone.Reflection.MemberInfoExtensions;
using HIDS;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Serilog;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Net.Security;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TrenDAP.Model;
using DataSet = TrenDAP.Model.DataSet;

namespace TrenDAP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpenHistorianController : ControllerBase 
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

        public class OpenHistorianDataSet
        {
            public string Instance { get; set; }
            public string[] Devices { get; set; }
            public string[] Phases { get; set; }
            public string[] Types { get; set; }
            public string Aggregate { get; set; }
        }

        [Serializable]
        public class HistorianAggregatePoint
        { 
            public string Tag { get; set; }
            public string Timestamp { get; set; }
            public double Minimum { get; set; }
            public double Average { get; set; }
            public double Maximum { get; set; }
            public ulong QualityFlags { get; set; }

        }
        /// <summary>
        /// Body of post queries from TrenDAP
        /// </summary>
        public class Post
        {
            /// <summary>
            /// The acronym of the historian instance to query from
            /// </summary>
            public string Instance { get; set; }
            /// <summary>
            /// How the result is aggregated 1s,1m,1d,1w
            /// </summary>
            public string Aggregate { get; set; }
            /// <summary>
            /// List of device names to include in query results
            /// </summary>
            public string[] Devices { get; set; }
            /// <summary>
            /// List of Phases to include in query results
            /// </summary>
            public string[] Phases { get; set; }
            /// <summary>
            /// List of SignalTypes to include in query results
            /// </summary>
            public string[] Types { get; set; }
            /// <summary>
            /// Bit flag of valid Hours of the day to include in query results
            /// </summary>
            public ulong Hours { get; set; }
            /// <summary>
            /// Bit flag of valid Days of the week to include in query results
            /// </summary>
            public ulong Days { get; set; }
            /// <summary>
            /// Bit flag of valid Weeks of the year to include in query results
            /// </summary>
            public ulong Weeks { get; set; }
            /// <summary>
            /// Bit flag of valid Months of the year to include in query results
            /// </summary>
            public ulong Months { get; set; }
            /// <summary>
            /// Start time of query results
            /// </summary>
            public DateTime StartTime { get; set; }
            /// <summary>
            /// End time of query results
            /// </summary>
            public DateTime EndTime { get; set; }

        }



        #endregion

        #region [ Constructor ]
        public OpenHistorianController(IConfiguration configuration)
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

                    using (HttpClient client = new HttpClient())
                    {

                        try
                        {
                            client.BaseAddress = new Uri(dataSource.URL);
                            client.DefaultRequestHeaders.Accept.Clear();
                            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));
                            HttpResponseMessage response = client.GetAsync($"api/trendap/{table}").Result;

                            if (!response.IsSuccessStatusCode)
                                return StatusCode((int)response.StatusCode, response.ReasonPhrase);

                            string rsp = response.Content.ReadAsStringAsync().Result;
                            return Ok(rsp);
                        }
                        catch (InvalidOperationException ex)
                        {
                            return StatusCode(StatusCodes.Status500InternalServerError, ex);

                        }
                        catch (Exception ex)
                        {
                            return StatusCode(StatusCodes.Status500InternalServerError, ex);
                        }
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }

        }


        [HttpGet, Route("Data/{dataSourceID:int}/{dataSetID:int}")]
        public IEnumerable<HistorianAggregatePoint> Query(int dataSourceID, Post post, CancellationToken cancellationToken)
        {
            string token = ControllerHelpers.GenerateAntiForgeryToken(dataSourceID, Configuration);
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            using (HttpClientHandler handler = new HttpClientHandler() { UseCookies = true })
            using (HttpClient client = new HttpClient(handler))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    client.BaseAddress = new Uri(dataSource.URL);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Add("X-GSF-Verify", token);
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));
                    HttpResponseMessage response = client.PostAsync($"api/HIDS", JsonContent.Create(post), cancellationToken).Result;

                    Task<string> rsp = response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<IEnumerable<HistorianAggregatePoint>>(rsp.Result);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        #endregion

        #region [ Static ]

        public static IEnumerable<HistorianAggregatePoint> Query(int dataSourceID, Post post, IConfiguration configuration, CancellationToken cancellationToken)
        {
            string token = ControllerHelpers.GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            using (HttpClientHandler handler = new HttpClientHandler() { UseCookies = true })
            using (HttpClient client = new HttpClient(handler) { Timeout = TimeSpan.FromMinutes(10)})
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    client.BaseAddress = new Uri(dataSource.URL);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/octet-stream"));
                    client.DefaultRequestHeaders.Add("X-GSF-Verify", token);
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));
                    HttpResponseMessage response = client.PostAsync($"api/trendap/query", JsonContent.Create(post), cancellationToken).Result;


                    if (!response.IsSuccessStatusCode)
                        throw new Exception($"{(int)response.StatusCode} - {response.ReasonPhrase}");
                    //var stream = response.Content.ReadAsStreamAsync().Result;
                    //BinaryFormatter formatter = new BinaryFormatter();
                    //IEnumerable<HistorianAggregatePoint> result = (IEnumerable<HistorianAggregatePoint>)formatter.Deserialize(stream);
                    var json = response.Content.ReadAsStringAsync().Result;
                    IEnumerable<HistorianAggregatePoint> result = JsonConvert.DeserializeObject<IEnumerable<HistorianAggregatePoint>>(json);
                    return result;
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }


        public static DataTable GetDataTable(int dataSourceID, Post post, IConfiguration configuration, CancellationToken cancellationToken) {
            string token = ControllerHelpers.GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);

                using (HttpClient client = new HttpClient()
                {
                    Timeout = TimeSpan.FromMinutes(10)
                })
                {
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/octet-stream"));
                    client.DefaultRequestHeaders.Add("X-GSF-Verify", token);
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));


                    var response = client.PostAsync(dataSource.URL + "/api/trendap/querymetadata", JsonContent.Create(post), cancellationToken).Result;
                   

                    try
                    {

                        if (!response.IsSuccessStatusCode)
                            throw new Exception($"{(int)response.StatusCode} - {response.ReasonPhrase}");
                        var stream = response.Content.ReadAsStreamAsync().Result;
                        BinaryFormatter formatter = new BinaryFormatter();
                        DataTable table =  (DataTable)formatter.Deserialize(stream);
                        return table;
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }

                }

            }

        }

        public static Post CreatePost(DataSet dataSet, OpenHistorianDataSet data)
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

            return new Post()
            {
                Instance = data.Instance,
                Devices = data.Devices,
                Phases = data.Phases,
                Types = data.Types,
                StartTime = startTime,
                EndTime = endTime,
                Hours = (ulong)dataSet.Hours,
                Days = (ulong)dataSet.Days,
                Weeks = (ulong)dataSet.Weeks,
                Months = (ulong)dataSet.Months,
                Aggregate = data.Aggregate
            };


        }




        #endregion


    }
}
