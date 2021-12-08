//******************************************************************************************************
//  SapphireController.cs - Gbtc
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
//  12/03/2021 - Billy Ernest
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
using System.Xml;
using TrenDAP.Model;
using DataSet = TrenDAP.Model.DataSet;
namespace TrenDAP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SapphireController : ControllerBase
    {


        #region [Members ]
        private List<Tuple<int, string, string>> Phases = new List<Tuple<int, string, string>>()
        {
            new Tuple<int, string, string>(1, "UV1N", "VAN"),
            new Tuple<int, string, string>(2, "UV2N", "VBN"),
            new Tuple<int, string, string>(3, "UV3N", "VCN"),
            new Tuple<int, string, string>(4, "UVN", "VNG"),
            new Tuple<int, string, string>(5, "UV1G", "VAG"),
            new Tuple<int, string, string>(6, "UV2G", "VBG"),
            new Tuple<int, string, string>(7, "UV3G", "VCG"),
            new Tuple<int, string, string>(8, "UV12", "VAB"),
            new Tuple<int, string, string>(9, "UV23", "VBC"),
            new Tuple<int, string, string>(10, "UV31", "VCA"),
            new Tuple<int, string, string>(11, "UVDC", "VDC"),
            new Tuple<int, string, string>(12, "UVLEAK", "Vleak"),
            new Tuple<int, string, string>(13, "UV123", "VABC"),
            new Tuple<int, string, string>(14, "UI1", "IA"),
            new Tuple<int, string, string>(15, "UI2", "IB"),
            new Tuple<int, string, string>(16, "UI3", "IC"),
            new Tuple<int, string, string>(17, "UIN", "IN"),
            new Tuple<int, string, string>(18, "UIG", "IG"),
            new Tuple<int, string, string>(19, "UI12", "IAB"),
            new Tuple<int, string, string>(20, "UI23", "IBC"),
            new Tuple<int, string, string>(21, "UI31", "ICA"),
            new Tuple<int, string, string>(22, "UILEAK", "Ileak"),
            new Tuple<int, string, string>(23, "UI123", "UI123"),
            new Tuple<int, string, string>(24, "UP1", "PA"),
            new Tuple<int, string, string>(25, "UP2", "PB"),
            new Tuple<int, string, string>(26, "UP3", "PC"),
            new Tuple<int, string, string>(27, "UP12", "PAB"),
            new Tuple<int, string, string>(28, "UP23", "PBC"),
            new Tuple<int, string, string>(29, "UP31", "PCA"),
            new Tuple<int, string, string>(30, "UP123", "Ptot"),
            new Tuple<int, string, string>(31, "UFREQUENCY", "FREQ"),


        };

        private List<Tuple<string, string>> ChannelGroupTypes = new List<Tuple<string, string>>()
        {
            new Tuple< string, string>("CRESTF", "Crest Factor"),
            new Tuple< string, string>("FREQBYPHASE", "Frequency By Phase"),
            new Tuple< string, string>("HRMS", "Harmonics Amplitude"),
            new Tuple< string, string>("KF", "K Factor"),
            new Tuple< string, string>("OVERDEV", "Over Deviation"),
            new Tuple< string, string>("PEAKF", "Fundamental Peak"),
            new Tuple< string, string>("PHASORANG", "Phasor Angle"),
            new Tuple< string, string>("PLT", "PLT"),
            new Tuple< string, string>("PST", "PST"),
            new Tuple< string, string>("RELAY", "Relay"),
            new Tuple< string, string>("RMS", "RMS"),
            new Tuple< string, string>("RMSFUND", "RMS - Fundamental"),
            new Tuple< string, string>("RMSNONFUND", "RMS - non- Fundamental"),
            new Tuple< string, string>("THD", "Total Harmonic Distortion"),
            new Tuple< string, string>("THDEVEN", "THD - Even Harmonics"),
            new Tuple< string, string>("THDODD", "THD - Odd Harmonics"),
            new Tuple< string, string>("TOLERANCE", "Tolerance"),
            new Tuple< string, string>("UNDERDEV", "Under Deviation"),
            new Tuple< string, string>("ACTPWR", "Active Power"),
            new Tuple< string, string>("ACTPWRF", "Active Power - Fundamental"),
            new Tuple< string, string>("ACTPWRH", "Active Power - Harmonics Aggregation"),
            new Tuple< string, string>("APPPWR", "Apparent Power"),
            new Tuple< string, string>("APPPWRF", "Apparent Power - Fundamental"),
            new Tuple< string, string>("APPPWRH", "Apparent Power - Harmonics Aggregation"),
            new Tuple< string, string>("ENERGYAPP", "Apparent Energy"),
            new Tuple< string, string>("ENERGYINACT", "Active Energy Consumption (In)"),
            new Tuple< string, string>("ENERGYINREA", "Reactive Energy Consumption (In)"),
            new Tuple< string, string>("ENERGYOUTACT", "Active Energy Production (Out)"),
            new Tuple< string, string>("ENERGYOUTREA", "Reactive Energy Production (Out)"),
            new Tuple< string, string>("FREQ", "Frequency Main"),
            new Tuple< string, string>("NSEQ", "Negative Sequence (U2)"),
            new Tuple< string, string>("PF", "Power Factor"),
            new Tuple<string, string>("PFF", "Power Factor - Fundamental"),
            new Tuple<string, string>("PFFSOURCE", "Power Factor Source - Fundamental"),
            new Tuple<string, string>("PFH", "Power Factor - Harmonics Aggregation"),
            new Tuple<string, string>("PFHSOURCE", "Power Factor Source - Harmonics Aggregation"),
            new Tuple<string, string>("PFSOURCE", "Power Factor Source"),
            new Tuple<string, string>("PSEQ", "Positive Sequence (U1)"),
            new Tuple<string, string>("R", "Resistance"),
            new Tuple<string, string>("REAPWR", "Reactive Power"),
            new Tuple<string, string>("REAPWRF", "Reactive Power - Fundamental"),
            new Tuple<string, string>("REAPWRH", "Reactive Power - Harmonics Aggregation"),
            new Tuple<string, string>("RF", "Resistance - Fundamental"),
            new Tuple<string, string>("RH", "Resistance - Harmonics Aggregation"),
            new Tuple<string, string>("UNBAL", "Negative Sequence Unbalance (U2/U1)"),
            new Tuple<string, string>("ZSEQ", "Zero Sequence (U0)"),
            new Tuple<string, string>("ZUNBAL", "Zero Sequence Unbalance (U0/U1)"),
            new Tuple<string, string>("HRMSANG", "CBC harmonic angle (relative to H1)"),
            new Tuple<string, string>("HRMSINCYC", "Harmonics Amplitude"),
            new Tuple<string, string>("HRMSPER", "Harmonics Amplitude (%)"),
            new Tuple<string, string>("HRMSPERG", "Percentage Harmonics RMS Group"),
            new Tuple<string, string>("HRMSPERINCYC", "Harmonics Amplitude (%)"),
            new Tuple<string, string>("IHRMS", "Inter-Harmonics"),
            new Tuple<string, string>("IHRMSA", "Spectrum Angle Relative to Fundamental"),
            new Tuple<string, string>("IHRMSB ", "Spectrum Amplitude - per Harmonic"),
            new Tuple<string, string>("PWRHRMSACT", "Active Power - per Harmonic"),
            new Tuple<string, string>("PWRHRMSANG", "Apparent Power - per Harmonic"),
            new Tuple<string, string>("PWRHRMSPF", "Power Factor - per Harmonic"),
            new Tuple<string, string>("PWRHRMSPFSOURCE", "Power Factor Source - per Harmonic"),
            new Tuple<string, string>("PWRHRMSREACT", "Reactive Power - per Harmonic"),
            new Tuple<string, string>("TDD15", "TDD 15 Min"),
            new Tuple<string, string>("TDD30", "TDD 30 Min"),
            new Tuple<string, string>("TIF", "TIF"),
            new Tuple<string, string>("TOTALRMS", "Total RMS")
        };

        const string DateTimeFormat = "yyyy-M-dTH:m:s.fffffff00Z";
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

        public class SapphireDataSetData
        {
            public List<int> IDs { get; set; }
            public List<int> Phases { get; set; }
            public List<int> Types { get; set; }
            public string Aggregate { get; set; }
        }

        public class SapphirePost
        {
            public DateTime StartTime { get; set; }
            public DateTime EndTime { get; set; }
            public string Aggregate { get; set; }
            public List<int> IDs { get; set; }
            public List<int> Phases { get; set; }
            public List<int> Types { get; set; }
            public ulong Hours { get; set; }
            public ulong Days { get; set; }
            public ulong Weeks { get; set; }
            public ulong Months { get; set; }

        }

        [Serializable]
        public class SapphireAggregatePoint
        {
            public string Tag { get; set; }
            public string Timestamp { get; set; }
            public double Minimum { get; set; }
            public double Average { get; set; }
            public double Maximum { get; set; }
            public ulong QualityFlags { get; set; }

        }


        #endregion

        #region [ Constructor ]
        public SapphireController(IConfiguration configuration)
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

            try
            {
                if (table == "Phase") return Ok(Phases.Select(x => new { ID = x.Item1, Name = x.Item3, Description = x.Item2 }).ToList());
                else if (table == "ChannelGroupType") return Ok(ChannelGroupTypes.Select((x, i) => new { ID = i, DisplayName = x.Item1 + " - " + x.Item2, Description = x.Item1 }).ToList());
                else if (table == "Meter") return GetMeters(dataSourceID);
                return GetOpenXDA(dataSourceID, table);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }

        }

        private ActionResult GetMeters(int dataSourceID)
        {
            using (HttpClient client = new HttpClient())
            {

                try
                {
                    DataSource dataSource = GetDataSource(dataSourceID);
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), $"api/Meter/Sapphire");

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

        private string GetSapphireID(int dataSourceID, int meterID)
        {
            using (HttpClient client = new HttpClient())
            {

                DataSource dataSource = GetDataSource(dataSourceID);
                HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), $"api/Meter/Sapphire/{meterID}");

                if (!response.IsSuccessStatusCode)
                    throw new Exception(response.ReasonPhrase);

                Task<string> rsp = response.Content.ReadAsStringAsync();
                return rsp.Result;
            }

        }

        private ActionResult GetOpenXDA(int dataSourceID, string table) {
            using (HttpClient client = new HttpClient())
            {

                try
                {
                    DataSource dataSource = GetDataSource(dataSourceID);
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

        private DataSource GetDataSource(int id)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                return new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", id);
            }
        }

        private string OpenSession(string url, string username, string password) {
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "xml");
                string xml = $@"
                <?xml version=""1.0"" encoding=""utf-8""?>
                <Req>
                  <ID>cf0bdf8d015a43b6bbb91fda8a915a34</ID>
                  <Priority>MEDIUM</Priority>
                  <Record>
                    <Type>OPERATION_REQ</Type>
                    <Data>
                      <OperationType>OPEN_SESSION</OperationType>
                      <Parameters>
                        <NumOfParameters>3</NumOfParameters>
                        <Item>
                          <Name>STD_IS_DATA_ENCRYPTED</Name>
                          <NumOfValues>1</NumOfValues>
                          <Values>False</Values>
                        </Item>
                        <Item>
                          <Name>STD_USER_NAME</Name>
                          <NumOfValues>1</NumOfValues>
                          <Values>${username}</Values>
                        </Item>
                        <Item>
                          <Name>STD_PASSWORD</Name>
                          <NumOfValues>1</NumOfValues>
                          <Values>${password}</Values>
                        </Item> 
                      </Parameters>
                    </Data>
                  </Record>
                </Req>
                ";
                HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post,url+ "/rpqz/xml");
                request.Content = new StringContent(xml, Encoding.UTF8);
                string response = client.SendAsync(request).Result.Content.ReadAsStringAsync().Result;
                //client.BaseAddress = new Uri(url);
                //byte[] bytes = Encoding.UTF8.GetBytes(xml);

                //string response = client.PostAsync("rpqz/xml", new ByteArrayContent(bytes)).Result.Content.ReadAsStringAsync().Result;
                XmlDocument respxml = new XmlDocument();
                respxml.LoadXml(response);
                return respxml["Resp"].SelectSingleNode("Record").SelectSingleNode("Data").SelectSingleNode("Parameters").SelectSingleNode("Item").SelectSingleNode("Values").InnerText;
            }
        }

        private string CloseSession(string url, string sessionID)
        {
            using (HttpClient client = new HttpClient())
            {
                string xml = $@"
                <?xml version=""1.0"" encoding=""utf-8""?>
                <Req>
                  <ID>d6caa3e30d324e4a9a129160ba2b87be</ID>
                  <SessionID>${sessionID}</SessionID>
                  <Priority>MEDIUM</Priority>
                  <Record>
                    <Type>OPERATION_REQ</Type>
                    <Data>
                      <OperationType>CLOSE_SESSION</OperationType>
                      <Parameters>
                        <NumOfParameters>1</NumOfParameters>
                        <Item>
                          <Name>STD_SESSION_ID</Name>
                          <NumOfValues>1</NumOfValues>
                          <Values>${sessionID}</Values>
                        </Item>
                      </Parameters>
                    </Data>
                  </Record>
                </Req>
                ";

                client.BaseAddress = new Uri(url);
                return client.PostAsync("rpqz/xml", new ByteArrayContent(Encoding.UTF8.GetBytes(xml))).Result.Content.ReadAsStringAsync().Result;

            }
        }

        private string QueryData(string url, string sessionID, string componentID, DateTime startTime, DateTime endTime, IEnumerable<string> channels)
        {
            using (HttpClient client = new HttpClient())
            {
                string xml = $@"
                <?xml version=""1.0"" encoding=""utf-8""?>
                <Req>
                    <ID>d6caa3e30d324e4a9a129160ba2b87be</ID>
                    <SessionID>${sessionID}</SessionID>
                    <Priority>MEDIUM</Priority>
                    <Record>
                    <Type>GET_BASE_DATA</Type>
                    <ObjectID>${componentID}</ObjectID>
                    <Data>
                        <StartTime>${startTime.ToString(DateTimeFormat)}</StartTime>
                        <EndTime>${endTime.ToString(DateTimeFormat)}</EndTime>
                        <CalculationType>AUTOMATIC</CalculationType>
                        <TimeZoneID>135</TimeZoneID>
                        <FlaggingApproach>PolyPhase</FlaggingApproach>
                        <Parameters>
                            <NumOfParameters>1</NumOfParameters>
                            <Item>
                            <Names>${string.Join(",", channels)}
                            </Names>
                            </Item>
                        </Parameters>
                    </Data>
                    </Record>
                </Req>
                ";

                client.BaseAddress = new Uri(url);
                return client.PostAsync("rpqz/xml", new ByteArrayContent(Encoding.UTF8.GetBytes(xml))).Result.Content.ReadAsStringAsync().Result;

            }
        }

        private IEnumerable<string> CreateChannels(SapphirePost post) {
            return new List<string>() {
                "STD_RMS_IS10MIN_BAUTO_QMIN_UV1N_FEEDER_1",
                "STD_RMS_IS10MIN_BAUTO_QMAX_UV1N_FEEDER_1",
                "STD_RMS_IS10MIN_BAUTO_QAVG_UV1N_FEEDER_1"
            };
        }

        public async void Query(int dataSourceID, SapphirePost post,CancellationToken cancellationToken)
        {
            string json = GetSapphireSettings(dataSourceID, Configuration);
            List<Setting> settings = JsonConvert.DeserializeObject<IEnumerable<Setting>>(json).ToList();
            string url = settings.Find(setting => setting.Name == "Sapphire.Url")?.Value ?? "";
            string credential = settings.Find(setting => setting.Name == "Sapphire.Credential")?.Value ?? "";
            string password = settings.Find(setting => setting.Name == "Sapphire.Password")?.Value ?? "";

            IEnumerable<TimeFilter> hours = Enumerable.Range(0, 24).Where(index => (~post.Hours & (1Lu << index)) > 0).Select(h => TimeFilter.Hour00 + h);
            IEnumerable<TimeFilter> days = Enumerable.Range(0, 7).Where(index => (~post.Days & (1Lu << index)) > 0).Select(h => TimeFilter.Sunday + h);
            IEnumerable<TimeFilter> weeks = Enumerable.Range(0, 53).Where(index => (~post.Weeks & (1Lu << index)) > 0).Select(h => TimeFilter.Week00 + h);
            IEnumerable<TimeFilter> months = Enumerable.Range(0, 12).Where(index => (~post.Months & (1Lu << index)) > 0).Select(h => TimeFilter.January + h);

            IEnumerable<SapphireAggregatePoint> results = null;

            foreach (int meter in post.IDs)
            {

                string componentID = GetSapphireID(dataSourceID, meter);
                string sessionID = OpenSession(url, credential, password);
                string xml = QueryData(url, sessionID, componentID, post.StartTime, post.EndTime, CreateChannels(post));
                string words = CloseSession(url, sessionID);

            }
            //return results;
        }

        #endregion

        #region [ Static ]


        public class Setting { 
            public int ID { get; set; }
            public string Name { get; set; }
            public string Value { get; set; }
            public string DefaultValue { get; set; }

        }

        public static Task<string> GetEvents(int dataSourceID, SapphirePost post, IConfiguration configuration, CancellationToken cancellationToken)
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

        public static SapphirePost CreatePost(DataSet dataSet, SapphireDataSetData data)
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

            return new SapphirePost()
            {
                IDs = data.IDs,
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

        public static string GetSapphireSettings(int dataSourceID, IConfiguration configuration)
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
                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), "api/Setting/Category/Sapphire");

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
