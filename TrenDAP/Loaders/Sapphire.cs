////******************************************************************************************************
////  Sapphire.cs - Gbtc
////
////  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
////
////  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
////  the NOTICE file distributed with this work for additional information regarding copyright ownership.
////  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
////  file except in compliance with the License. You may obtain a copy of the License at:
////
////      http://opensource.org/licenses/MIT
////
////  Unless agreed to in writing, the subject software distributed under the License is distributed on an
////  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
////  License for the specific language governing permissions and limitations.
////
////  Code Modification History:
////  ----------------------------------------------------------------------------------------------------
////  12/07/2021 - Billy Ernest
////       Generated original version of source code.
////
////******************************************************************************************************

//using Gemstone.Data;
//using Gemstone.Data.Model;
//using Microsoft.Extensions.Configuration;
//using Newtonsoft.Json;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net.Http;
//using System.Net.Http.Headers;
//using System.Text;
//using System.Threading;
//using System.Threading.Tasks;
//using TrenDAP.Model;

//namespace TrenDAP.WebApp.Loaders
//{
//    public class Sapphire
//    {

//        public class Setting
//        {
//            public int ID { get; set; }
//            public string Name { get; set; }
//            public string Value { get; set; }
//            public string DefaultValue { get; set; }

//        }

//        public class SapphireDataSetData
//        {
//            public List<int> IDs { get; set; }
//            public List<int> Phases { get; set; }
//            public List<int> Types { get; set; }
//            public string Aggregate { get; set; }
//        }



//        public class SapphirePost
//        {
//            public DateTime StartTime { get; set; }
//            public DateTime EndTime { get; set; }
//            public string Aggregate { get; set; }
//            public List<int> IDs { get; set; }
//            public List<int> Phases { get; set; }
//            public List<int> Types { get; set; }
//            public ulong Hours { get; set; }
//            public ulong Days { get; set; }
//            public ulong Weeks { get; set; }
//            public ulong Months { get; set; }

//        }

//        [Serializable]
//        public class SapphirePoint
//        {
//            public string Tag { get; set; }
//            public string Timestamp { get; set; }
//            public double Minimum { get; set; }
//            public double Average { get; set; }
//            public double Maximum { get; set; }
//            public ulong QualityFlags { get; set; }

//        }

//        const string DateTimeFormat = "yyyy-M-dTH:m:s.fffffffffZ";
//        const ulong ValidHours = 16777215; // Math.Pow(2, 24) - 1
//        const ulong ValidDays = 127; //  (int)(Math.Pow(2, 7) - 1);
//        const ulong ValidWeeks = 9007199254740991; // (int)(Math.Pow(2, 53) - 1);
//        const ulong ValidMonths = 4095;//  (int)(Math.Pow(2, 12) - 1);

//        public static SapphirePost CreatePost(DataSet dataSet, SapphireDataSetData data)
//        {
//            DateTime startTime = dataSet.From;
//            DateTime endTime = dataSet.To;
//            if (dataSet.Context == "Relative")
//            {
//                endTime = DateTime.Now;
//                if (dataSet.RelativeWindow == "Day")
//                    startTime = endTime.AddDays(-dataSet.RelativeValue);
//                else if (dataSet.RelativeWindow == "Week")
//                    startTime = endTime.AddDays(-dataSet.RelativeValue * 7);
//                else if (dataSet.RelativeWindow == "Month")
//                    startTime = endTime.AddMonths(-int.Parse(dataSet.RelativeValue.ToString()));
//                else
//                    startTime = endTime.AddYears(-int.Parse(dataSet.RelativeValue.ToString()));
//            }

//            return new SapphirePost()
//            {
//                IDs = data.IDs,
//                Phases = data.Phases,
//                Types = data.Types,
//                StartTime = startTime,
//                EndTime = endTime,
//                Hours = (ulong)dataSet.Hours,
//                Days = (ulong)dataSet.Days,
//                Weeks = (ulong)dataSet.Weeks,
//                Months = (ulong)dataSet.Months,
//                Aggregate = data.Aggregate
//            };


//        }


//        public IEnumerable<SapphirePoint> Query(int dataSourceID, SapphirePost post, IConfiguration configuration, CancellationToken cancellationToken)
//        {
//            string json = GetSapphireSettings(dataSourceID, configuration);
//            List<Setting> settings = JsonConvert.DeserializeObject<IEnumerable<Setting>>(json).ToList();
//            string url = settings.Find(setting => setting.Name == "Sapphire.Url")?.Value ?? "";
//            string credential = settings.Find(setting => setting.Name == "Sapphire.Credential")?.Value ?? "";
//            string password = settings.Find(setting => setting.Name == "Sapphire.Password")?.Value ?? "";

//            //IEnumerable<TimeFilter> hours = Enumerable.Range(0, 24).Where(index => (~post.Hours & (1Lu << index)) > 0).Select(h => TimeFilter.Hour00 + h);
//            //IEnumerable<TimeFilter> days = Enumerable.Range(0, 7).Where(index => (~post.Days & (1Lu << index)) > 0).Select(h => TimeFilter.Sunday + h);
//            //IEnumerable<TimeFilter> weeks = Enumerable.Range(0, 53).Where(index => (~post.Weeks & (1Lu << index)) > 0).Select(h => TimeFilter.Week00 + h);
//            //IEnumerable<TimeFilter> months = Enumerable.Range(0, 12).Where(index => (~post.Months & (1Lu << index)) > 0).Select(h => TimeFilter.January + h);

//            IEnumerable<SapphirePoint> results = null;

//            foreach (int meter in post.IDs)
//            {

//                string componentID = GetSapphireID(dataSourceID, meter);
//                string sessionID = OpenSession(url, credential, password);
//                string xml = QueryData(url, sessionID, componentID, post.StartTime, post.EndTime, CreateChannels(post));
//                string words = CloseSession(url, sessionID);

//            }
//            return results;
//        }

//        private string GetSapphireID(int dataSourceID, int meterID)
//        {
//            using (HttpClient client = new HttpClient())
//            {

//                DataSource dataSource = GetDataSource(dataSourceID);
//                HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), $"api/Meter/Sapphire/{meterID}");

//                if (!response.IsSuccessStatusCode)
//                    throw new Exception(response.ReasonPhrase);

//                Task<string> rsp = response.Content.ReadAsStringAsync();
//                return rsp.Result;
//            }

//        }

//        private string OpenSession(string url, string username, string password)
//        {
//            using (HttpClient client = new HttpClient())
//            {
//                string xml = $@"
//                <?xml version=""1.0"" encoding=""utf-8""?>
//                <Req>
//                  <ID>cf0bdf8d015a43b6bbb91fda8a915a34</ID>
//                  <Priority>MEDIUM</Priority>
//                  <Record>
//                    <Type>OPERATION_REQ</Type>
//                    <Data>
//                      <OperationType>OPEN_SESSION</OperationType>
//                      <Parameters>
//                        <NumOfParameters>3</NumOfParameters>
//                        <Item>
//                          <Name>STD_IS_DATA_ENCRYPTED</Name>
//                          <NumOfValues>1</NumOfValues>
//                          <Values>False</Values>
//                        </Item>
//                        <Item>
//                          <Name>STD_USER_NAME</Name>
//                          <NumOfValues>1</NumOfValues>
//                          <Values>${username}</Values>
//                        </Item>
//                        <Item>
//                          <Name>STD_PASSWORD</Name>
//                          <NumOfValues>1</NumOfValues>
//                          <Values>${password}</Values>
//                        </Item> 
//                      </Parameters>
//                    </Data>
//                  </Record>
//                </Req>
//                ";

//                client.BaseAddress = new Uri(url);
//                return client.PostAsync("rpqz/xml", new ByteArrayContent(Encoding.UTF8.GetBytes(xml))).Result.Content.ReadAsStringAsync().Result;

//            }
//        }

//        private string CloseSession(string url, string sessionID)
//        {
//            using (HttpClient client = new HttpClient())
//            {
//                string xml = $@"
//                <?xml version=""1.0"" encoding=""utf-8""?>
//                <Req>
//                  <ID>d6caa3e30d324e4a9a129160ba2b87be</ID>
//                  <SessionID>${sessionID}</SessionID>
//                  <Priority>MEDIUM</Priority>
//                  <Record>
//                    <Type>OPERATION_REQ</Type>
//                    <Data>
//                      <OperationType>CLOSE_SESSION</OperationType>
//                      <Parameters>
//                        <NumOfParameters>1</NumOfParameters>
//                        <Item>
//                          <Name>STD_SESSION_ID</Name>
//                          <NumOfValues>1</NumOfValues>
//                          <Values>${sessionID}</Values>
//                        </Item>
//                      </Parameters>
//                    </Data>
//                  </Record>
//                </Req>
//                ";

//                client.BaseAddress = new Uri(url);
//                return client.PostAsync("rpqz/xml", new ByteArrayContent(Encoding.UTF8.GetBytes(xml))).Result.Content.ReadAsStringAsync().Result;

//            }
//        }

//        private string QueryData(string url, string sessionID, string componentID, DateTime startTime, DateTime endTime, IEnumerable<string> channels)
//        {
//            using (HttpClient client = new HttpClient())
//            {
//                string xml = $@"
//                <?xml version=""1.0"" encoding=""utf-8""?>
//                <Req>
//                    <ID>d6caa3e30d324e4a9a129160ba2b87be</ID>
//                    <SessionID>${sessionID}</SessionID>
//                    <Priority>MEDIUM</Priority>
//                    <Record>
//                    <Type>GET_BASE_DATA</Type>
//                    <ObjectID>${componentID}</ObjectID>
//                    <Data>
//                        <StartTime>${startTime.ToString(DateTimeFormat)}</StartTime>
//                        <EndTime>${endTime.ToString(DateTimeFormat)}</EndTime>
//                        <CalculationType>AUTOMATIC</CalculationType>
//                        <TimeZoneID>135</TimeZoneID>
//                        <FlaggingApproach>PolyPhase</FlaggingApproach>
//                        <Parameters>
//                            <NumOfParameters>1</NumOfParameters>
//                            <Item>
//                            <Names>${string.Join(",", channels)}
//                            </Names>
//                            </Item>
//                        </Parameters>
//                    </Data>
//                    </Record>
//                </Req>
//                ";

//                client.BaseAddress = new Uri(url);
//                return client.PostAsync("rpqz/xml", new ByteArrayContent(Encoding.UTF8.GetBytes(xml))).Result.Content.ReadAsStringAsync().Result;

//            }
//        }

//        private IEnumerable<string> CreateChannels(SapphirePost post)
//        {
//            return new List<string>() {
//                "STD_RMS_IS10MIN_BAUTO_QMIN_UV1N_FEEDER_1",
//                "STD_RMS_IS10MIN_BAUTO_QMAX_UV1N_FEEDER_1",
//                "STD_RMS_IS10MIN_BAUTO_QAVG_UV1N_FEEDER_1"
//            };
//        }

//        public static string GetSapphireSettings(int dataSourceID, IConfiguration configuration)
//        {
//            string token = GenerateAntiForgeryToken(dataSourceID, configuration);
//            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
//            using (HttpClientHandler handler = new HttpClientHandler())
//            using (HttpClient client = new HttpClient(handler))
//            {


//                try
//                {
//                    handler.ServerCertificateCustomValidationCallback = ServerCertificateCustomValidation;

//                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
//                    HttpResponseMessage response = SetHeaders(client, dataSource, new MediaTypeWithQualityHeaderValue("application/json"), "api/Setting/Category/Sapphire");

//                    if (!response.IsSuccessStatusCode)
//                        return "";

//                    Task<string> rsp = response.Content.ReadAsStringAsync();
//                    return response.Content.ReadAsStringAsync().Result;
//                }
//                catch (Exception ex)
//                {
//                    return ex.Message;
//                }

//            }
//        }

//    }
//}
