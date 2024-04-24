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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Serilog;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using System.Xml;
using TrenDAP.Model;
using DataSet = TrenDAP.Model.DataSet;
namespace TrenDAP.Controllers.Sapphire
{
    public class SapphireChannelRow
    {
        public string Asset { get; set; }
        public string Characteristic { get; set; }
        public int Harmonic { get; set; }
        public int ID { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Meter { get; set; }
        public string Name { get; set; }
        public string Phase { get; set; }
        public string Station { get; set; }
        public string Type { get; set; }
        public string Unit { get; set; }
        public List<Point> Data { get; set; } = new List<Point>();
        public List<Event> Events { get; set; } = new List<Event>();
    }

    public class Event
    {
        public int ID { get; set; }
        public DateTime StartTime { get; set; }

    }

    [Serializable]
    public class Point
    {
        public string Tag { get; set; }
        public DateTime Timestamp { get; set; }
        public double Minimum { get; set; }
        public double Average { get; set; }
        public double Maximum { get; set; }
        public ulong QualityFlags { get; set; }

    }


    public class SapphireDataSetData
    {
        public List<int> IDs { get; set; }
        public List<int> Phases { get; set; }
        public List<int> Types { get; set; }
        public string Aggregate { get; set; }
        public string Harmonics { get; set; }
    }

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

    public class SapphirePost
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Aggregate { get; set; }
        public List<int> IDs { get; set; }
        public List<int> Phases { get; set; }
        public List<int> Types { get; set; }
        public string Harmonics { get; set; }
        public ulong Hours { get; set; }
        public ulong Days { get; set; }
        public ulong Weeks { get; set; }
        public ulong Months { get; set; }
        
    }


    [Route("api/[controller]")]
    [ApiController]
    public class SapphireController : ControllerBase
    {


        #region [Members ]
        private List<Tuple<string, string>> Phases = new List<Tuple<string, string>>()
        {
            new Tuple<string, string>("UV1N", "VAN"),
            new Tuple<string, string>("UV2N", "VBN"),
            new Tuple<string, string>("UV3N", "VCN"),
            new Tuple<string, string>("UVN", "VNG"),
            new Tuple<string, string>("UV1G", "VAG"),
            new Tuple<string, string>("UV2G", "VBG"),
            new Tuple<string, string>("UV3G", "VCG"),
            new Tuple<string, string>("UV12", "VAB"),
            new Tuple<string, string>("UV23", "VBC"),
            new Tuple<string, string>( "UV31", "VCA"),
            new Tuple<string, string>( "UVDC", "VDC"),
            new Tuple<string, string>( "UVLEAK", "Vleak"),
            new Tuple<string, string>( "UV123", "VABC"),
            new Tuple<string, string>( "UI1", "IA"),
            new Tuple<string, string>( "UI2", "IB"),
            new Tuple<string, string>( "UI3", "IC"),
            new Tuple<string, string>( "UIN", "IN"),
            new Tuple<string, string>( "UIG", "IG"),
            new Tuple<string, string>( "UI12", "IAB"),
            new Tuple<string, string>( "UI23", "IBC"),
            new Tuple<string, string>( "UI31", "ICA"),
            new Tuple<string, string>( "UILEAK", "Ileak"),
            new Tuple<string, string>( "UI123", "UIABC"),
            new Tuple<string, string>( "UP1", "PA"),
            new Tuple<string, string>( "UP2", "PB"),
            new Tuple<string, string>( "UP3", "PC"),
            new Tuple<string, string>( "UP12", "PAB"),
            new Tuple<string, string>( "UP23", "PBC"),
            new Tuple<string, string>( "UP31", "PCA"),
            new Tuple<string, string>( "UP123", "Ptot"),
            new Tuple<string, string>( "UFREQUENCY", "FREQ"),


        };

        private string GetType(string phase) {
            if (phase.Contains("UV")) return "Voltage";
            else if (phase.Contains("UI")) return "Current";
            else if (phase.Contains("UP")) return "Power";
            else return "Frequency";
        }

        private string GetPhase(string phase) {
            return Phases.Find(x => phase == x.Item1)?.Item2 ?? phase;
        }

        private List<Tuple<string, string, string>> ChannelGroupTypes = new List<Tuple<string, string,string>>()
        {
            // Item 1: Sapphire Field, Item 2: Sapphire Description, Item 3: XDA Characteristic
            new Tuple<string, string, string>("CRESTF", "Crest Factor", "CrestFactor"),
            new Tuple<string, string, string>("FREQBYPHASE", "Frequency By Phase","Frequency"),
            new Tuple<string, string, string>("HRMS", "Harmonics Amplitude","HRMS"),
            new Tuple<string, string, string>("KF", "K Factor","KFactor"),
            new Tuple<string, string, string>("OVERDEV", "Over Deviation", "OverDeviation"),
            new Tuple<string, string, string>("PEAKF", "Fundamental Peak", "Peak"),
            new Tuple<string, string, string>("PHASORANG", "Phasor Angle", "PhasorAngle"),
            new Tuple<string, string, string>("PLT", "PLT", "FlkrPLT"),
            new Tuple<string, string, string>("PST", "PST", "FlkrPST"),
            new Tuple<string, string, string>("RELAY", "Relay", "Relay"),
            new Tuple<string, string, string>("RMS", "RMS", "RMS"),
            new Tuple<string, string, string>("RMSFUND", "RMS - Fundamental", "RMS"),
            new Tuple<string, string, string>("RMSNONFUND", "RMS - non- Fundamental", "RMS"),
            new Tuple<string, string, string>("THD", "Total Harmonic Distortion", "TotalTHD"),
            new Tuple<string, string, string>("THDEVEN", "THD - Even Harmonics", "EvenHD"),
            new Tuple<string, string, string>("THDODD", "THD - Odd Harmonics", "OddTHD"),
            new Tuple<string, string, string>("TOLERANCE", "Tolerance", "Tolerance"),
            new Tuple<string, string, string>("UNDERDEV", "Under Deviation", "UnderDeviation"),
            new Tuple<string, string, string>("ACTPWR", "Active Power", "P"),
            new Tuple<string, string, string>("ACTPWRF", "Active Power - Fundamental", "P"),
            new Tuple<string, string, string>("ACTPWRH", "Active Power - Harmonics Aggregation", "P"),
            new Tuple<string, string, string>("APPPWR", "Apparent Power", "S"),
            new Tuple<string, string, string>("APPPWRF", "Apparent Power - Fundamental", "S"),
            new Tuple<string, string, string>("APPPWRH", "Apparent Power - Harmonics Aggregation", "S"),
            new Tuple<string, string, string>("ENERGYAPP", "Apparent Energy", "E"),
            new Tuple<string, string, string>("ENERGYINACT", "Active Energy Consumption (In)", "E"),
            new Tuple<string, string, string>("ENERGYINREA", "Reactive Energy Consumption (In)", "E"),
            new Tuple<string, string, string>("ENERGYOUTACT", "Active Energy Production (Out)", "E"),
            new Tuple<string, string, string>("ENERGYOUTREA", "Reactive Energy Production (Out)", "E"),
            new Tuple<string, string, string>("FREQ", "Frequency Main", "Frequency"),
            new Tuple<string, string, string>("NSEQ", "Negative Sequence (U2)","S2"),
            new Tuple<string, string, string>("PF", "Power Factor", "PF"),
            new Tuple<string, string, string>("PFF", "Power Factor - Fundamental", "PFFund"),
            new Tuple<string, string, string>("PFFSOURCE", "Power Factor Source - Fundamental", "PFFund"),
            new Tuple<string, string, string>("PFH", "Power Factor - Harmonics Aggregation", "PFHarmonic"),
            new Tuple<string, string, string>("PFHSOURCE", "Power Factor Source - Harmonics Aggregation", "PFHarmonic"),
            new Tuple<string, string, string>("PFSOURCE", "Power Factor Source", "PF"),
            new Tuple<string, string, string>("PSEQ", "Positive Sequence (U1)", "S1"),
            new Tuple<string, string, string>("R", "Resistance", "R"),
            new Tuple<string, string, string>("REAPWR", "Reactive Power", "Q"),
            new Tuple<string, string, string>("REAPWRF", "Reactive Power - Fundamental", "QFund"),
            new Tuple<string, string, string>("REAPWRH", "Reactive Power - Harmonics Aggregation", "QHarmonic"),
            new Tuple<string, string, string>("RF", "Resistance - Fundamental", "RFund"),
            new Tuple<string, string, string>("RH", "Resistance - Harmonics Aggregation", "RHarmonic"),
            new Tuple<string, string, string>("UNBAL", "Negative Sequence Unbalance (U2/U1)", "S2S1"),
            new Tuple<string, string, string>("ZSEQ", "Zero Sequence (U0)", "S0"),
            new Tuple<string, string, string>("ZUNBAL", "Zero Sequence Unbalance (U0/U1)", "S0S1"),
            new Tuple<string, string, string>("HRMSANG", "CBC harmonic angle (relative to H1)","HRMSAngle"),
            new Tuple<string, string, string>("HRMSINCYC", "Harmonics Amplitude", "HRMS"),
            new Tuple<string, string, string>("HRMSPER", "Harmonics Amplitude (%)", "HRMS"),
            new Tuple<string, string, string>("HRMSPERG", "Percentage Harmonics RMS Group", "HRMS"),
            new Tuple<string, string, string>("HRMSPERINCYC", "Harmonics Amplitude (%)", "HRMS"),
            new Tuple<string, string, string>("IHRMS", "Inter-Harmonics", "IHRMS"),
            new Tuple<string, string, string>("IHRMSA", "Spectrum Angle Relative to Fundamental", "IHRMS"),
            new Tuple<string, string, string>("IHRMSB ", "Spectrum Amplitude - per Harmonic", "IHRMS"),
            new Tuple<string, string, string>("PWRHRMSACT", "Active Power - per Harmonic","PHarmonic"),
            new Tuple<string, string, string>("PWRHRMSANG", "Apparent Power - per Harmonic", "SHarmonic"),
            new Tuple<string, string, string>("PWRHRMSPF", "Power Factor - per Harmonic", "PFHarmonic"),
            new Tuple<string, string, string>("PWRHRMSPFSOURCE", "Power Factor Source - per Harmonic", "PFHarmonic"),
            new Tuple<string, string, string>("PWRHRMSREACT", "Reactive Power - per Harmonic", "QHarmonic"),
            new Tuple<string, string, string>("TDD15", "TDD 15 Min", "TDD"),
            new Tuple<string, string, string>("TDD30", "TDD 30 Min","TDD"),
            new Tuple<string, string, string>("TIF", "TIF", "TIF"),
            new Tuple<string, string, string>("TOTALRMS", "Total RMS","RMS")
        };

        private string GetUnits(string type, string characteristic) {
            if (characteristic == "TotalTHD" || characteristic == "OddTHD" || characteristic == "AvgImbal") return "%";
            else if (characteristic == "AngleFund") return "Degree";
            else if (characteristic == "Frequency") return "Hz";
            else if (characteristic == "PLTSlide" || characteristic == "FlkrPLT") return "Plt";
            else if (characteristic == "FlkrPST") return "Pst";
            else if (characteristic == "S0S1" || characteristic == "S2S1" || characteristic == "KFactor" || characteristic == "PF" || characteristic == "PFDemand" || characteristic == "None") return "None";
            else if (type =="Current" && (characteristic == "HRMS" || characteristic == "SNeg"|| characteristic == "SPos"|| characteristic == "SZero"|| characteristic == "RMS"|| characteristic == "IHRMS"|| characteristic == "Peak")) return "A";
            else if (type == "Voltage" && (characteristic == "HRMS" || characteristic == "SNeg" || characteristic == "SPos" || characteristic == "SZero" || characteristic == "RMS" || characteristic == "IHRMS" || characteristic == "Peak")) return "V";
            else return "Unknown";
        }

        private List<Tuple<string, string>> Resolution = new List<Tuple<string, string>>()
        {
            new Tuple<string, string>("IS10MIN", "Point each 10 minutes"),
            new Tuple<string, string>("IS15MIN", "Point each 15 minutes"),
            new Tuple<string, string>("IS30MIN", "Point each half hour"),
            new Tuple<string, string>("IS1HOUR", "Point every round hour"),
            new Tuple<string, string>("IS2HOUR", "Point every 2 hours"),
            new Tuple<string, string>("IS1DAY", "Point every one day"),
            new Tuple<string, string>("IS1WEEK", "Point every one week "),
            new Tuple<string, string>("IS1MONTH", "Point each month"),
            new Tuple<string, string>("IS1YEAR", "Point every one year"),
        };

        const string DateTimeFormat = "yyyy-M-dTH:m:s.fffffff00Z";



        public class XMLItem { 
            [System.Xml.Serialization.XmlElement("Name")]
            public string Name { get; set; }
            [System.Xml.Serialization.XmlElement("Status")]
            public string Status { get; set; }
            [System.Xml.Serialization.XmlElement("NumOfValues")]
            public int NumOfValues { get; set; }
            [System.Xml.Serialization.XmlElement("Values")]
            public string Values { get; set; }
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
                if (table == "Phase") return Ok(Phases.Select((x,i) => new { ID = i, Name = x.Item2, Description = x.Item1}).ToList());
                else if (table == "Resolution") return Ok(Resolution.Select((x, i) => new { ID = i, DisplayName = x.Item2, Description = x.Item1 }).ToList());
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
                    SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                    Task<string> rsp = helper.GetAsync("api/Meter/Sapphire");
                    return Ok(rsp.Result);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }

        private JObject GetMeter(int dataSourceID, int meterID)
        {
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    DataSource dataSource = GetDataSource(dataSourceID);
                    SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                    Task<string> rsp = helper.GetAsync($"api/Meter/One/{meterID}");
                    return JObject.Parse(rsp.Result);
                }
                catch (Exception ex)
                {
                    return new JObject(new JProperty("Name", "None"));
                }
            }
        }

        private JObject GetAsset(int dataSourceID, int meterID)
        {
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    DataSource dataSource = GetDataSource(dataSourceID);
                    SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                    Task<string> rsp = helper.GetAsync($"api/Meter/Sapphire/Asset/{meterID}");
                    return JObject.Parse(rsp.Result);
                }
                catch (Exception ex)
                {
                    return new JObject(new JProperty("AssetName", "None"));
                }
            }
        }

        private JObject GetStation(int dataSourceID, int meterID)
        {
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    DataSource dataSource = GetDataSource(dataSourceID);
                    SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                    Task<string> rsp = helper.GetAsync($"api/Meter/Sapphire/Station/{meterID}");
                    return JObject.Parse(rsp.Result);
                }
                catch (Exception ex)
                {
                    return new JObject(new JProperty("Name", "None"), new JProperty("Latitude", "0.0"), new JProperty("Longitude", "0.0"));
                }
            }
        }

        private List<Event> GetEvents(int dataSourceID, int meterID, DateTime startTime, DateTime endTime)
        {
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    DataSource dataSource = GetDataSource(dataSourceID);
                    SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                    Task<List<Event>> rsp = helper.GetAllAsync<Event>($"api/Meter/Sapphire/Events/{meterID}/{startTime.ToString("MM-dd-yyyy HH:mm:ss")}/{endTime.ToString("MM-dd-yyyy HH:mm:ss")}");
                    return rsp.Result;
                }
                catch (Exception ex)
                {
                    return new List<Event>();
                }
            }
        }

        private string GetSapphireID(int dataSourceID, int meterID)
        {
            using (HttpClient client = new HttpClient())
            {
                DataSource dataSource = GetDataSource(dataSourceID);
                SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                Task<string> rsp = helper.GetAsync($"api/Meter/Sapphire/{meterID}");
                return rsp.Result.Replace("\"", "");
            }
        }

        private ActionResult GetOpenXDA(int dataSourceID, string table) {
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    DataSource dataSource = GetDataSource(dataSourceID);
                    SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                    Task<string> rsp = helper.GetAsync($"api/{table}");
                    return Ok(rsp.Result);
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

        private XmlDocument SendRequest(string url, string xml)
        {
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "xml");
                HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, url + "/rpqz/xml");
                request.Content = new StringContent(xml, Encoding.UTF8);
                string response = client.SendAsync(request).Result.Content.ReadAsStringAsync().Result;
                XmlDocument respxml = new XmlDocument();
                respxml.LoadXml(response);
                return respxml;
            }
        }

        private string OpenSession(string url, string username, string password) {
            string xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
                            "<Req>\n" +
                            "  <ID>cf0bdf8d015a43b6bbb91fda8a915a34</ID>\n" +
                            "  <Priority>MEDIUM</Priority>\n"+
                            "    <Record>\n"+
                            "       <Type>OPERATION_REQ</Type>\n" +
                            "       <Data>\n" +
                            "         <OperationType>OPEN_SESSION</OperationType>\n" +
                            "         <Parameters>\n" +
                            "           <NumOfParameters>3</NumOfParameters>\n" +
                            "           <Item>\n" +
                            "             <Name>STD_IS_DATA_ENCRYPTED</Name>\n" +
                            "             <NumOfValues>1</NumOfValues>\n" +
                            "             <Values>False</Values>\n" +
                            "           </Item>\n" +
                            "           <Item>\n" +
                            "             <Name>STD_USER_NAME</Name>\n" +
                            "             <NumOfValues>1</NumOfValues>\n" +
                        $"             <Values>{username}</Values>\n" +
                            "           </Item>\n" +
                            "           <Item>\n" +
                            "             <Name>STD_PASSWORD</Name>\n" +
                            "             <NumOfValues>1</NumOfValues>\n" +
                        $"             <Values>{password}</Values>\n" +
                            "           </Item> \n" +
                            "         </Parameters>\n" +
                            "       </Data>\n" +
                            "     </Record>\n" +
                            "   </Req>\n" +
                            "   ";
            XmlDocument respxml = SendRequest(url, xml);
            return respxml["Resp"].SelectSingleNode("Record").SelectSingleNode("Data").SelectSingleNode("Parameters").SelectSingleNode("Item").SelectSingleNode("Values").InnerText;
        }

        private string CloseSession(string url, string sessionID)
        {
            string xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
                        "<Req>\n" +
                        "  <ID>d6caa3e30d324e4a9a129160ba2b87be</ID>\n" +
                       $"  <SessionID>{sessionID}</SessionID>\n" +
                        "  <Priority>MEDIUM</Priority>\n" +
                        "  <Record>\n" +
                        "    <Type>OPERATION_REQ</Type>\n" +
                        "    <Data>\n" +
                        "      <OperationType>CLOSE_SESSION</OperationType>\n" +
                        "      <Parameters>\n" +
                        "        <NumOfParameters>1</NumOfParameters>\n" +
                        "        <Item>\n" +
                        "          <Name>STD_SESSION_ID</Name>\n" +
                        "          <NumOfValues>1</NumOfValues>\n" +
                        $"          <Values>{sessionID}</Values>\n" +
                        "        </Item>\n" +
                        "      </Parameters>\n" +
                        "    </Data>\n" +
                        "  </Record>\n" +
                        "</Req>\n";


            XmlDocument respxml = SendRequest(url, xml);
            return respxml["Resp"].SelectSingleNode("Record").SelectSingleNode("Data").SelectSingleNode("Status").InnerText;
        }

        private XmlDocument QueryData(string url, string sessionID, string componentID, DateTime startTime, DateTime endTime, IEnumerable<string> channels)
        {
            string xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
                        "<Req>\n" +
                        "    <ID>d6caa3e30d324e4a9a129160ba2b87be</ID>\n" +
                        $"    <SessionID>{sessionID}</SessionID>\n" +
                        "    <Priority>MEDIUM</Priority>\n" +
                        "    <Record>\n" +
                        "    <Type>GET_BASE_DATA</Type>\n" +
                        $"    <ObjectID>{componentID}</ObjectID>\n" +
                        "    <Data>\n" +
                        $"        <StartTime>{startTime.ToString(DateTimeFormat)}</StartTime>\n" +
                        $"        <EndTime>{endTime.ToString(DateTimeFormat)}</EndTime>\n" +
                        "        <CalculationType>AUTOMATIC</CalculationType>\n" +
                        "        <TimeZoneID>135</TimeZoneID>\n" +
                        "        <FlaggingApproach>PolyPhase</FlaggingApproach>\n" +
                        "        <Parameters>\n" +
                        "            <NumOfParameters>1</NumOfParameters>\n" +
                        "            <Item>\n" +
                        $"            <Names>{string.Join(",", channels)}\n" +
                        "            </Names>\n" +
                        "            </Item>\n" +
                        "        </Parameters>\n" +
                        "    </Data>\n" +
                        "    </Record>\n" +
                        "</Req>\n";

            return SendRequest(url, xml);
        }

        private IEnumerable<string> CreateChannels(SapphirePost post) {
            List<string> channels = new List<string>();
            foreach(int type in post.Types.Where(t => !ChannelGroupTypes[t].Item1.Contains("HRMS")))
            {
                foreach (int phase in post.Phases) {
                    channels.Add($"STD_{ChannelGroupTypes[type].Item1}_{post.Aggregate}_BAUTO_QMIN_{Phases[phase].Item1}_FEEDER_1");
                    channels.Add($"STD_{ChannelGroupTypes[type].Item1}_{post.Aggregate}_BAUTO_QMAX_{Phases[phase].Item1}_FEEDER_1");
                    channels.Add($"STD_{ChannelGroupTypes[type].Item1}_{post.Aggregate}_BAUTO_QAVG_{Phases[phase].Item1}_FEEDER_1");
                }
            }
            foreach (int type in post.Types.Where(t => ChannelGroupTypes[t].Item1.Contains("HRMS")))
            {
                foreach (int phase in post.Phases)
                {
                    foreach(string hg in post.Harmonics.Split(","))
                    {
                        if (hg.Contains("-"))
                        {
                            int group1 = int.Parse(hg.Split("-")[0]);
                            int group2 = int.Parse(hg.Split("-")[1]);
                            channels.Add($"MULTI_STD_{ChannelGroupTypes[type].Item1}_{group1}:{group2}_{post.Aggregate}_BAUTO_QMIN_{Phases[phase].Item1}_FEEDER_1");
                            channels.Add($"MULTI_STD_{ChannelGroupTypes[type].Item1}_{group1}:{group2}_{post.Aggregate}_BAUTO_QMAX_{Phases[phase].Item1}_FEEDER_1");
                            channels.Add($"MULTI_STD_{ChannelGroupTypes[type].Item1}_{group1}:{group2}_{post.Aggregate}_BAUTO_QAVG_{Phases[phase].Item1}_FEEDER_1");

                        }
                        else {
                            int group = int.Parse(hg);

                            channels.Add($"STD_{ChannelGroupTypes[type].Item1}_{group}_{post.Aggregate}_BAUTO_QMIN_{Phases[phase].Item1}_FEEDER_1");
                            channels.Add($"STD_{ChannelGroupTypes[type].Item1}_{group}_{post.Aggregate}_BAUTO_QMAX_{Phases[phase].Item1}_FEEDER_1");
                            channels.Add($"STD_{ChannelGroupTypes[type].Item1}_{group}_{post.Aggregate}_BAUTO_QAVG_{Phases[phase].Item1}_FEEDER_1");

                        }

                    }
                }
            }

            return channels;
        }

        public  List<SapphireChannelRow> Query(int dataSourceID, SapphirePost post,CancellationToken cancellationToken)
        {
            string json = GetSapphireSettings(dataSourceID, Configuration);

            // Get Settings to query Sapphire
            List<Setting> settings = JsonConvert.DeserializeObject<IEnumerable<Setting>>(json).ToList();
            string url = settings.Find(setting => setting.Name == "Sapphire.Url")?.Value ?? "";
            string credential = settings.Find(setting => setting.Name == "Sapphire.Credential")?.Value ?? "";
            string password = settings.Find(setting => setting.Name == "Sapphire.Password")?.Value ?? "";

            // Create list from flags to reject data based on time contexes
            IEnumerable<int> hours = Enumerable.Range(0, 24).Where(index => (~post.Hours & (1Lu << index)) > 0);
            IEnumerable<int> days = Enumerable.Range(0, 7).Where(index => (~post.Days & (1Lu << index)) > 0);
            IEnumerable<int> weeks = Enumerable.Range(0, 53).Where(index => (~post.Weeks & (1Lu << index)) > 0);
            IEnumerable<int> months = Enumerable.Range(0, 12).Where(index => (~post.Months & (1Lu << index)) > 0).Select(m => m +1);

            List<SapphireChannelRow> results = new List<SapphireChannelRow>();


            // break each query into a meter because API only allows one meter per query 
            foreach (int meterID in post.IDs)
            {

                // Get XDA Meter, Asset, and Station info
                JObject meter = GetMeter(dataSourceID, meterID);
                JObject asset = GetAsset(dataSourceID, meterID);
                JObject station = GetStation(dataSourceID, meterID);
                List<Event> events = GetEvents(dataSourceID, meterID, post.StartTime, post.EndTime);

                // Get componentID FROM XDA
                string componentID = GetSapphireID(dataSourceID, meterID);

                // Get Session Token from Sapphire
                string sessionID = OpenSession(url, credential, password);
                try
                {
                    // create list of channels to query from sapphire based one list from post data
                    IEnumerable<string> channels = CreateChannels(post);

                    Dictionary<string, SapphireChannelRow> values = new Dictionary<string, SapphireChannelRow>();

                    // Split queries into lists of 400 or less channels because query fails above 450
                    for(int i = 0; i < channels.Count(); i+= 400)
                    {
                        IEnumerable<string> subset = channels.Skip(i).Take(400);

                        // Query xml form Sapphire
                        XmlDocument xml = QueryData(url, sessionID, componentID.Replace("\"", ""), post.StartTime, post.EndTime, subset);

                        // Get the data node from XML
                        XmlNode data = xml["Resp"]?.SelectSingleNode("Record")?.SelectSingleNode("Data");

                        // If not there continue to next meter, this one has no data
                        if (data == null) continue;

                        // Check status node, if not OK go to next meter because the data is bad
                        string status = data?.SelectSingleNode("Status")?.InnerText;
                        if (status != "OK") continue;

                        // Get the time stamp node and parse it to a list, if the time stamp node doesnt exist go to next meter, something has failed
                        XmlNode timestampsNode = data?.SelectSingleNode("Timestamps")?.SelectSingleNode("Items");
                        if (timestampsNode == null) continue;
                        List<string> timestamps = timestampsNode.InnerText.Split(',').ToList();

                        // Split items under the parameter node into individual channels and parse accordingly
                        XmlNodeList items = data?.SelectSingleNode("Parameters")?.SelectNodes("Item");
                        foreach (XmlNode item in items)
                        {

                            // get channel tag and status of the time, if not ok go to next channel, something has failed
                            string channelTag = item?.SelectSingleNode("Name").InnerText;
                            string itemStatus = item?.SelectSingleNode("Status")?.InnerText;
                            if (itemStatus != "OK") continue;

                            // pull out channel info from tag and use it to build channel record 
                            Regex regex = new Regex("^[a-zA-Z0-9]+_(?<Characteristic>[a-zA-Z0-9]+)_?(?<Harmonic>[0-9]+)?_(?<Aggregation>[a-zA-Z0-9]+)_BAUTO_Q(?<Series>[A-Z]+)_(?<Phase>[a-zA-Z0-9]+)\\w*$");
                            var match = regex.Match(channelTag);
                            string characteristic = match.Groups["Characteristic"].Value;
                            string phase = match.Groups["Phase"].Value;
                            string type = GetType(phase);
                            string channel = $"{characteristic}-{GetPhase(phase)}";
                            int harmonic = int.Parse((match.Groups["Harmonic"]?.Value ?? "") == string.Empty ? "0" : match.Groups["Harmonic"].Value);
                            // get the series node and parse out the itemvalues/values
                            string series = match.Groups["Series"].Value;
                            List<string> datapoints = item?.SelectSingleNode("ItemValues")?.SelectSingleNode("Values")?.InnerText?.Split(',')?.ToList();

                            // if the channel has already been seen, 
                            if (values.ContainsKey(channel + harmonic))
                            {
                                // check if each timestamp has been excluded then add if approiate
                                for (int j = 0; j < timestamps.Count(); j++)
                                {
                                    DateTime timestamp = DateTime.ParseExact(timestamps[j].Replace(".000000000Z", ""), "yyyy-M-dTH:m:s", null);
                                    CultureInfo cultureInfo = new CultureInfo("en-US");
                                    Calendar calendar = cultureInfo.Calendar;

                                    if (hours.Any(x => x == timestamp.Hour)) continue;
                                    else if (days.Any(x => x == (int)timestamp.DayOfWeek)) continue;
                                    else if (weeks.Any(x => x == calendar.GetWeekOfYear(timestamp, cultureInfo.DateTimeFormat.CalendarWeekRule, cultureInfo.DateTimeFormat.FirstDayOfWeek))) continue;
                                    else if (months.Any(x => x == timestamp.Month)) continue;

                                    if (series == "AVG")
                                        values[channel + harmonic].Data[j].Average = double.Parse(datapoints[j]);
                                    else if (series == "MIN")
                                        values[channel + harmonic].Data[j].Minimum = double.Parse(datapoints[j]);
                                    else if (series == "MAX")
                                        values[channel + harmonic].Data[j].Maximum = double.Parse(datapoints[j]);
                                }
                            }
                            // if the channel has not been seen
                            else {
                                // add new row to dictionary
                                SapphireChannelRow row = new SapphireChannelRow() { 
                                    ID = values.Count + results.Count,
                                    Asset = asset["AssetName"].ToString(), 
                                    Characteristic = characteristic,
                                    Meter = meter["Name"].ToString(),
                                    Station = station["Name"].ToString(),
                                    Latitude = double.Parse(station["Latitude"].ToString()),
                                    Longitude = double.Parse(station["Longitude"].ToString()),
                                    Harmonic = harmonic,
                                    Name = channel,
                                    Phase = GetPhase(phase),
                                    Type = type,
                                    Unit = GetUnits(type, characteristic),
                                    Events = events

                                };
                                values.Add(channel+harmonic, row);
                                // check if each timestamp has been excluded then add if approiate
                                for (int j = 0; j < timestamps.Count(); j++)
                                {
                                    DateTime timestamp = DateTime.ParseExact(timestamps[j].Replace(".000000000Z", ""),"yyyy-M-dTH:m:s", null);
                                    CultureInfo cultureInfo = new CultureInfo("en-US");
                                    Calendar calendar = cultureInfo.Calendar;

                                    if (hours.Any(x => x == timestamp.Hour)) continue;
                                    else if (days.Any(x => x == (int)timestamp.DayOfWeek)) continue;
                                    else if (weeks.Any(x => x == calendar.GetWeekOfYear(timestamp, cultureInfo.DateTimeFormat.CalendarWeekRule, cultureInfo.DateTimeFormat.FirstDayOfWeek))) continue;
                                    else if (months.Any(x => x == timestamp.Month)) continue;

                                    if (series == "AVG")
                                        values[channel + harmonic].Data.Add(new Point() { Tag = channel, Timestamp = timestamp, Average = double.Parse(datapoints[j]) });
                                    else if (series == "MIN")
                                        values[channel + harmonic].Data.Add(new Point() { Tag = channel, Timestamp = timestamp, Minimum = double.Parse(datapoints[j]) });
                                    else if (series == "MAX")
                                        values[channel + harmonic].Data.Add(new Point() { Tag = channel, Timestamp = timestamp, Maximum = double.Parse(datapoints[j]) });
                                }
                            }
                        }
                    }

                    // concat values for the meter to master list of return values
                    results = results.Concat(values.ToList().Select(kvp =>kvp.Value)).ToList();

                }
                catch (Exception ex) {
                    Log.Error(ex.Message);
                }
                finally
                {
                    string words = CloseSession(url, sessionID);

                }

            }

            return results;
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
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                return helper.GetAsync($"api/Event/TrenDAP");
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
                Aggregate = data.Aggregate,
                Harmonics = data.Harmonics
            };


        }

        public static string GetSapphireSettings(int dataSourceID, IConfiguration configuration)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
                    return helper.GetAsync($"api/Setting/Category/Sapphire").Result;
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
                    SourceHelper<DataSource> helper = new SourceHelper<DataSource>(dataSource);
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
