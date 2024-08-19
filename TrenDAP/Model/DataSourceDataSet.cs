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
using System.Collections.Generic;
using System.Net.Http;
using System;
using System.Text;
using TrenDAP.Controllers;
using static TrenDAP.Controllers.TrenDAPDBController;
using System.Threading;
using Gemstone.Data;
using System.Linq;
using TrenDAP.Attributes;
using GSF.Data.Model;
using System.Reflection;

namespace TrenDAP.Model
{
    public class DataSourceDataSet
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int DataSourceID { get; set; }
        [ParentKey(typeof(DataSet))]
        public int DataSetID { get; set; }
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
    }

    [CustomView(@"
        SELECT
            DataSourceDataSet.ID,
            DataSourceDataSet.DataSourceID,
            DataSourceDataSet.DataSetID,
            DataSourceDataSet.SettingsString,
            DataSource.Name as DataSourceName,
            DataSet.Name as DataSetName
        From 
            DataSourceDataSet LEFT JOIN
            DataSource ON DataSourceDataSet.DataSourceID = DataSource.ID LEFT JOIN
            DataSet ON DataSourceDataSet.DataSetID = DataSet.ID
    ")]
    public class DataSourceDataSetView : DataSourceDataSet
    {
        public string DataSourceName { get; set; }
        public string DataSetName { get; set; }
    }
    
    public class DataSourceDataSetController : ModelController<DataSourceDataSetView>
    {
        public DataSourceDataSetController(IConfiguration configuration) : base(configuration) { }
    }
}
