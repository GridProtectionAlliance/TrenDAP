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

using Gemstone.Data;
using Microsoft.Extensions.Configuration;
using openXDA.APIAuthentication;
using System;
using TrenDAP.Controllers;
using PrimaryKeyAttribute = Gemstone.Data.Model.PrimaryKeyAttribute;
using UseEscapedNameAttribute = Gemstone.Data.Model.UseEscapedNameAttribute;

namespace TrenDAP.Model
{
    public class DataSource
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Name { get; set; }
        public int DataSourceTypeID { get; set; }
        public string URL { get; set; }
        // Todo: maybe we want to break datasource from api auth? two tables where a source is linked to an auth row?
        public string RegistrationKey { get; set; }
        public string APIToken { get; set; }
        public DateTime Expires { get; set; }
        [UseEscapedName]
        public bool Public { get; set; }
        [UseEscapedName]
        public string User { get; set; }
        public string OtherSettings { get; set; }

        public static DataSource GetDataSource(IConfiguration configuration, int id)
        {
            using (AdoDataConnection connection = new AdoDataConnection(configuration["SystemSettings:ConnectionString"], configuration["SystemSettings:DataProviderString"]))
            {
                return new Gemstone.Data.Model.TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", id);
            }
        }

    }

    public class DataSourceController: ModelController<DataSource>
    {
        public DataSourceController(IConfiguration configuration) : base(configuration){}
    }

    public class DataSourceType
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Name { get; set; }
    }


    public class DataSourceTypeController : ModelController<DataSourceType>
    {
        public DataSourceTypeController(IConfiguration configuration) : base(configuration) {} 
    }

    public class DataSourceHelper : XDAAPIHelper
    {
        private DataSource m_dataSource;

        public DataSourceHelper(IConfiguration config, int dataSourceId)
        {
            using (AdoDataConnection connection = new AdoDataConnection(config["SystemSettings:ConnectionString"], config["SystemSettings:DataProviderString"]))
            {
                m_dataSource = new Gemstone.Data.Model.TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceId);
            }
        }

        public DataSourceHelper(DataSource dataSource)
        {
            m_dataSource = dataSource;
        }

        protected override string Token
        {
            get
            {
                return m_dataSource.APIToken;
            }

        }
        protected override string Key
        {
            get
            {
                return m_dataSource.RegistrationKey;
            }

        }
        protected override string Host
        {
            get
            {
                return m_dataSource.URL;
            }
        }
    }
}
