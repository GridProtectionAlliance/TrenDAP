//******************************************************************************************************
//  OpenXDAController.cs - Gbtc
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
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
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
    public class OpenXDAController : ControllerBase 
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
            public long Hours { get; set; }
            public long Days { get; set; }
            public long Weeks { get; set; }
            public long Months { get; set; }

        }



        #endregion

        #region [ Constructor ]
        public OpenXDAController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        #endregion

        #region [ Properties ]
        private IConfiguration Configuration { get; }
        #endregion

        #region [ Http Methods ]
        [HttpGet, Route("{dataSourceID:int}/{table}")]
        public virtual ActionResult Get(int dataSourceID, string table)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            using (HttpClient client = new HttpClient())
            {

                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);

                    client.BaseAddress = new Uri(dataSource.URL);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));



                    HttpResponseMessage response = client.GetAsync($"api/{table}").Result;

                    if (!response.IsSuccessStatusCode)
                        return StatusCode((int)response.StatusCode, response.ReasonPhrase);

                    Task<string> rsp = response.Content.ReadAsStringAsync();
                    return Ok(rsp.Result);
                }
                catch (InvalidOperationException ex) {
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
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            using (HttpClientHandler handler = new HttpClientHandler() { UseCookies = true })
            using (HttpClient client = new HttpClient(handler))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    DataSet dataSet = new TableOperations<DataSet>(connection).QueryRecordWhere("ID = {0}", dataSetID);

                    client.BaseAddress = new Uri(dataSource.URL);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Add("X-GSF-Verify", token);
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));

                    HttpContent content = JsonContent.Create("");
                    HttpResponseMessage response = client.PostAsync($"api/HIDS", content, cancellationToken).Result;

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

                using (HttpClient client = new HttpClient()
                {
                    Timeout = TimeSpan.FromMinutes(10)
                }) {
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/octet-stream"));
                    client.DefaultRequestHeaders.Add("X-GSF-Verify", token);
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));
                    var response = client.PostAsync(dataSource.URL + "/api/HIDS", JsonContent.Create(post), cancellationToken).Result;

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

        public static DataTable GetDataTable(int dataSourceID, DataSet dataSet, XDADataSetData data, IConfiguration configuration, CancellationToken cancellationToken) {
            string token = GenerateAntiForgeryToken(dataSourceID, configuration);
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                List<DataSourceType> dataSourceTypes = new TableOperations<DataSourceType>(connection).QueryRecords().ToList();
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                HIDSPost post = CreatePost(dataSet, data);

                using (HttpClient client = new HttpClient()
                {
                    Timeout = TimeSpan.FromMinutes(10)
                })
                {
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/octet-stream"));
                    client.DefaultRequestHeaders.Add("X-GSF-Verify", token);
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));


                    var response = client.PostAsync(dataSource.URL + "/api/HIDS/Table", JsonContent.Create(post), cancellationToken).Result;
                   

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

        private static HIDSPost CreatePost(DataSet dataSet, XDADataSetData data)
        {
            return new HIDSPost()
            {
                By = data.By,
                IDs = data.IDs,
                Phases = data.Phases,
                Groups = data.Groups,
                Types = data.Types,
                StartTime = dataSet.From,
                EndTime = dataSet.To,
                Hours = dataSet.Hours,
                Days = dataSet.Days,
                Weeks = dataSet.Weeks,
                Months = dataSet.Months,
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

                    client.BaseAddress = new Uri(dataSource.URL);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));



                    HttpResponseMessage response = client.GetAsync($"api/rvht").Result;

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
