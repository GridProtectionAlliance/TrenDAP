//******************************************************************************************************
//  DataSource.cs - Gbtc
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
//  09/10/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System.Collections.Generic;
using Gemstone.Data;
using Gemstone.Data.Model;
using GSF.Data.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using TrenDAP.Attributes;
using TrenDAP.Controllers;
using JsonIgnore = Newtonsoft.Json.JsonIgnoreAttribute;
using PrimaryKeyAttribute = Gemstone.Data.Model.PrimaryKeyAttribute;
using UseEscapedNameAttribute = Gemstone.Data.Model.UseEscapedNameAttribute;

namespace TrenDAP.Model
{
    public class DataSource
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        [UseEscapedName]
        public bool Public { get; set; }
        [ParentKey(typeof(string))]
        [UseEscapedName]
        public string User { get; set; }
        [JsonIgnore]
        public string PrivateString { get; set; }
        [NonRecordField]
        public JObject PrivateSettings
        {
            get
            {
                try { return JObject.Parse(PrivateString); }
                catch { return new JObject(); }
            }
        }
        [JsonIgnore]
        public string SettingsString { get; set; }
        [NonRecordField]
        public JObject Settings
        {
            get
            {
                try { return JObject.Parse(SettingsString); }
                catch { return new JObject(); }
            }
        }
        public static DataSource GetDataSource(IConfiguration configuration, int id)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                return new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", id);
            }
        }
    }

    public class DataSourceController: ModelController<DataSource>
    {
        public DataSourceController(IConfiguration configuration) : base(configuration){ }

        public override ActionResult GetOne(string _id)
        {
            return BadRequest("Method not allowed");
        }
        public override ActionResult<IEnumerable<DataSource>> Get(string _id)
        {
            return base.Get(Request.HttpContext.User.Identity.Name);
        }
        public override ActionResult Post([FromBody] JObject record)
        {
            DataSource newRecord = record.ToObject<DataSource>();
            newRecord.User = Request.HttpContext.User.Identity.Name;
            newRecord.PrivateString = record["PrivateSettings"].ToString();
            newRecord.SettingsString = record["Settings"].ToString();
            return Post(newRecord);
        }
        public override ActionResult Patch([FromBody] JObject record)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
            {
                DataSource result = new TableOperations<DataSource>(connection).QueryRecordWhere("ID={0}", record["ID"].ToString());
                if (result == null) return BadRequest("Data source does not exist");
                else if (!result.User.Equals(Request.HttpContext.User.Identity.Name, System.StringComparison.OrdinalIgnoreCase)) return Unauthorized("Data source does not belong to user");
            }
            DataSource newRecord = record.ToObject<DataSource>();
            newRecord.User = Request.HttpContext.User.Identity.Name;
            newRecord.PrivateString = record["PrivateSettings"].ToString();
            newRecord.SettingsString = record["Settings"].ToString();
            return Patch(newRecord);
        }
        public override ActionResult Delete([FromBody] DataSource record)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
            {
                DataSource result = new TableOperations<DataSource>(connection).QueryRecordWhere("ID={0}", record.ID);
                if (result == null) base.Delete(record);
                else if (result.User != Request.HttpContext.User.Identity.Name) return Unauthorized("Data source does not belong to user");
            }
            return base.Delete(record);
        }
    }

    [RootQueryRestriction("[Public] = 1")]
    [CustomView(@"
        SELECT
            DataSource.ID,
            DataSource.Type,
            DataSource.Name,
            DataSource.[Public],
            DataSource.[User],
            'Hidden' as PrivateString,
            DataSource.SettingsString
        From 
            DataSource
    ")]
    public class DataSourcePublic : DataSource { }

    public class DataSourcePublicController : ModelController<DataSourcePublic>
    {
        public DataSourcePublicController(IConfiguration configuration) : base(configuration) { }
    }
}
