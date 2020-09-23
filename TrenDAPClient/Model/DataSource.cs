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

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security;
using System.Threading.Tasks;

namespace TrenDAPClient.Model
{

    public class DataSourceContext : DbContext {
        private IConfiguration m_configuration;
        public DataSourceContext(IConfiguration configuration) {
            m_configuration = configuration;        
        }
        public DbSet<DataSource> DataSources { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite(m_configuration["SystemSettings:DataSource"]);
    }

    public class DataSource
    {
        public enum DataSourceType
        {
            OpenXDA
        }

        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public DataSourceType Type { get; set; }
        public string URL { get; set; }
        public string Credential { get; set; }
        public SecureString Password { get; set; }
    }
}
