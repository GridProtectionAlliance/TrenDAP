//******************************************************************************************************
//  DataSourceDataSet.cs - Gbtc
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
//  04/02/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System.Text;
using TrenDAP.Controllers;

namespace TrenDAP.Model
{
    public class DataSourceDataSet
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int DataSourceID { get; set; }
        public int DataSetID { get; set; }
        public byte[] SettingsBin { get; set; }
        [NonRecordField]
        public string Settings
        {
            get
            {
                try { return Encoding.UTF8.GetString(SettingsBin); }
                catch { return Encoding.ASCII.GetString(SettingsBin); }
            } 
            
        }
    }

    public class DataSourceDataSetController : ModelController<DataSourceDataSet>
    {
        public DataSourceDataSetController(IConfiguration configuration) : base(configuration) { }

        public override ActionResult Post([FromBody] JObject record)
        {
            record["SettingsBin"] = Encoding.UTF8.GetBytes(record["Settings"].ToString());
            return base.Post(record);
        }
        public override ActionResult Patch([FromBody] JObject record)
        {
            record["SettingsBin"] = Encoding.UTF8.GetBytes(record["Settings"].ToString());
            return base.Patch(record);
        }
    }
}
