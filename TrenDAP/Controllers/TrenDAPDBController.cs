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
            public List<int> Types { get; set; }
            public string Aggregate { get; set; }
        }

        public class HIDSPost
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

        private ActionResult GetOpenXDA(DataSource dataSource, string table) {
            using (HttpClient client = new HttpClient())
            {

                try
                {
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), $"api/{table}");

                    if (!response.IsSuccessStatusCode)
                        return StatusCode((int)response.StatusCode, response.ReasonPhrase);

                    Task<string> rsp = response.Content.ReadAsStringAsync();
                    return Ok(rsp.Result);
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

        private ActionResult GetOpenHistorian(DataSource dataSource, string table)
        {
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


        [HttpGet, Route("HIDS/{dataSourceID:int}/{dataSetID:int}")]
        public ActionResult Get(int dataSourceID, int dataSetID, CancellationToken cancellationToken)
        {
            string token = GenerateAntiForgeryToken(dataSourceID, Configuration);
            JsonContent content = JsonContent.Create("");

            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            using (HttpClientHandler handler = new HttpClientHandler() { UseCookies = true })
            using (HttpClient client = new HttpClient(handler))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", dataSetID);

                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), $"api/HIDS", content, token, cancellationToken);

                    if (!response.IsSuccessStatusCode)
                        return StatusCode((int)response.StatusCode, response.ReasonPhrase);

                    Task<string> rsp = response.Content.ReadAsStringAsync();
                    return Ok(rsp.Result);
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

        #endregion

        #region [ Static ]

        public static IEnumerable<Point> QueryHIDS(int dataSourceID, DataSet dataSet, XDADataSetData data,IConfiguration configuration, CancellationToken cancellationToken) 
        {
            string token = GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                HIDSPost post = CreatePost(dataSet, data);
                JsonContent content = JsonContent.Create(post);

                using (HttpClient client = new HttpClient()
                {
                    Timeout = TimeSpan.FromMinutes(10)
                }) {
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/octet-stream"), $"api/HIDS", content, token, cancellationToken);

                    try
                    {
                        if (!response.IsSuccessStatusCode)
                            throw new Exception($"{(int)response.StatusCode} - {response.ReasonPhrase}");

                        var stream = response.Content.ReadAsStreamAsync().Result;
                        IFormatter formatter = new BinaryFormatter();
                        return (IEnumerable<Point>)formatter.Deserialize(stream);
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }

                }

            }
        }

        public class Setting { 
            public int ID { get; set; }
            public string Name { get; set; }
            public string Value { get; set; }
            public string DefaultValue { get; set; }

        }
        public static IAsyncEnumerable<Point> QueryHIDSDirectly(DataTable table, int dataSourceID, HIDSPost post, IConfiguration configuration, CancellationToken cancellationToken)
        {
            string json = GetHIDSSettings(dataSourceID, configuration);
            List<Setting> hidsSettings = JsonConvert.DeserializeObject<IEnumerable<Setting>>(json).ToList();
            IAsyncEnumerable<Point> results = QueryInfluxDB(hidsSettings, table.Select().Select(x => int.Parse(x["ID"].ToString())).ToList(),post, cancellationToken);
            return results;
        }

        public async static IAsyncEnumerable<Point> QueryInfluxDB(List<Setting> settings, List<int> channelIDs,HIDSPost post, CancellationToken cancellationToken)
        {
            IEnumerable<TimeFilter> hours = Enumerable.Range(0, 24).Where(index => (~post.Hours & (1Lu << index)) > 0).Select(h => TimeFilter.Hour00 + h);
            IEnumerable<TimeFilter> days = Enumerable.Range(0, 7).Where(index => (~post.Days & (1Lu << index)) > 0).Select(h => TimeFilter.Sunday + h);
            IEnumerable<TimeFilter> weeks = Enumerable.Range(0, 53).Where(index => (~post.Weeks & (1Lu << index)) > 0).Select(h => TimeFilter.Week00 + h);
            IEnumerable<TimeFilter> months = Enumerable.Range(0, 12).Where(index => (~post.Months & (1Lu << index)) > 0).Select(h => TimeFilter.January + h);
            
            using (API hids = new API())
            {
                string host = settings.Find(setting => setting.Name == "HIDS.Host")?.Value ?? "http://localhost";
                string tokenID = settings.Find(setting => setting.Name == "HIDS.TokenID")?.Value ?? "";
                string pointBucket = settings.Find(setting => setting.Name == "HIDS.PointBucket")?.Value ?? "point_bucket";
                string orgID = settings.Find(setting => setting.Name == "HIDS.OrganizationID")?.Value ?? "gpa";


                hids.TokenID = tokenID;
                hids.PointBucket = pointBucket;
                hids.OrganizationID = orgID;
                hids.Connect(host);

                await foreach (var point in hids.ReadPointsAsync((t) =>
                {
                    t.FilterTags(channelIDs.Select(cid => cid.ToString("x8")));
                    t.Range(post.StartTime, post.EndTime);
                    t.FilterTime(hours.Concat(days).Concat(weeks).Concat(months));
                    if (post.Aggregate != null && post.Aggregate != string.Empty) t.Aggregate(post.Aggregate);

                }, cancellationToken))
                    yield return point;
            }
        }


        public static DataTable GetDataTable(int dataSourceID, HIDSPost post, IConfiguration configuration, CancellationToken cancellationToken) {
            string token = GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);

                using (HttpClient client = new HttpClient()
                {
                    Timeout = TimeSpan.FromMinutes(10)
                })
                {
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/octet-stream"), $"api/HIDS/Table", JsonContent.Create(post), token, cancellationToken);


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

        public static Task<string> GetEvents(int dataSourceID, HIDSPost post, IConfiguration configuration, CancellationToken cancellationToken)
        {
            string token = GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);

                using (HttpClient client = new HttpClient()
                {
                    Timeout = TimeSpan.FromMinutes(10)
                })
                {
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/octet-stream"), $"api/Event/TrenDAP", JsonContent.Create(post), token, cancellationToken);

                    try
                    {

                        if (!response.IsSuccessStatusCode)
                            throw new Exception($"{(int)response.StatusCode} - {response.ReasonPhrase}");
                        return response.Content.ReadAsStringAsync();
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }

                }

            }

        }

        public static async Task<string> GetAlarms(int dataSourceID, HIDSPost post, IConfiguration configuration, CancellationToken cancellationToken)
        {
            string token = GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);

                using (HttpClient client = new HttpClient()
                {
                    Timeout = TimeSpan.FromMinutes(10)
                })
                {
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/octet-stream"), "api/AlarmLimits", JsonContent.Create(post), token);

                    try
                    {

                        if (!response.IsSuccessStatusCode)
                            throw new Exception($"{(int)response.StatusCode} - {response.ReasonPhrase}");
                        return await response.Content.ReadAsStringAsync();
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }

                }

            }

        }



        public static HIDSPost CreatePost(DataSet dataSet, XDADataSetData data)
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

            return new HIDSPost()
            {
                By = data.By,
                IDs = data.IDs,
                Phases = data.Phases,
                Groups = data.Groups,
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

        public static string GenerateAntiForgeryToken(int dataSourceID, IConfiguration configuration)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            using (HttpClientHandler handler = new HttpClientHandler())
            using (HttpClient client = new HttpClient(handler))
            {


                try
                {
                    handler.ServerCertificateCustomValidationCallback = ServerCertificateCustomValidation;

                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), "api/rvht");

                    if (!response.IsSuccessStatusCode)
                        return "";

                    Task<string> rsp = response.Content.ReadAsStringAsync();
                    return response.Content.ReadAsStringAsync().Result;
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }

            }
        }

        public static string GetHIDSSettings(int dataSourceID, IConfiguration configuration)
        {
            string token = GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            using (HttpClientHandler handler = new HttpClientHandler())
            using (HttpClient client = new HttpClient(handler))
            {


                try
                {
                    handler.ServerCertificateCustomValidationCallback = ServerCertificateCustomValidation;

                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), "api/Setting/Category/HIDS");

                    if (!response.IsSuccessStatusCode)
                        return "";

                    Task<string> rsp = response.Content.ReadAsStringAsync();
                    return response.Content.ReadAsStringAsync().Result;
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }

            }
        }

        public static async Task<string> GetOpenSEEURL(int dataSourceID, IConfiguration configuration)
        {
            string token = GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            using (HttpClientHandler handler = new HttpClientHandler())
            using (HttpClient client = new HttpClient(handler))
            {


                try
                {
                    handler.ServerCertificateCustomValidationCallback = ServerCertificateCustomValidation;

                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), "api/Setting/OpenSEE.URL");

                    if (!response.IsSuccessStatusCode)
                        throw new Exception(response.ReasonPhrase);

                    string url = await response.Content.ReadAsStringAsync();
                    return url;
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }

            }
        }

        private static HttpResponseMessage SetHeaders(HttpClient client, DataSource dataSource, MediaTypeWithQualityHeaderValue mtwqhv, string path, JsonContent post = null, string token = null, CancellationToken cancellationToken = new CancellationToken()) {
            client.BaseAddress = new Uri(dataSource.URL);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(mtwqhv);

            if (!dataSource.OIDC)
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));
            else
                path += $"?code={dataSource.Password}";

            if (post != null)
            {
                client.DefaultRequestHeaders.Add("X-GSF-Verify", token);
                return client.PostAsync(path, post, cancellationToken).Result;
            }
            else
                return client.GetAsync(path, cancellationToken).Result;

        }

        private static bool ServerCertificateCustomValidation(HttpRequestMessage requestMessage, X509Certificate2 certificate, X509Chain chain, SslPolicyErrors sslErrors)
        {
            // It is possible inpect the certificate provided by server
            Console.WriteLine($"Requested URI: {requestMessage.RequestUri}");
            Console.WriteLine($"Effective date: {certificate.GetEffectiveDateString()}");
            Console.WriteLine($"Exp date: {certificate.GetExpirationDateString()}");
            Console.WriteLine($"Issuer: {certificate.Issuer}");
            Console.WriteLine($"Subject: {certificate.Subject}");

            // Based on the custom logic it is possible to decide whether the client considers certificate valid or not
            Console.WriteLine($"Errors: {sslErrors}");
            return sslErrors == SslPolicyErrors.None;
        }


        #endregion


    }
}
