//******************************************************************************************************
//  ControllerHelper.cs - Gbtc
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
//  03/08/2021 - Billy Ernest
//       Generated original version of source code.
//  03/16/2024 - Gabriel Santos
//       Rewrite to use API auth
//
//******************************************************************************************************
using Gemstone.Data;
using Microsoft.Extensions.Configuration;
using openXDA.APIAuthentication;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System;
using TrenDAP.Model;
using Gemstone.Data.Model;

namespace TrenDAP.Controllers
{
    public class ControllerHelper: XDAAPIHelper
    {

        private DataSource m_dataSource;
        private IConfiguration m_config;

        public ControllerHelper(IConfiguration config, int dataSourceId)
        {
            m_config = config;
            using (AdoDataConnection connection = new AdoDataConnection(config["SystemSettings:ConnectionString"], config["SystemSettings:DataProviderString"]))
            {
                m_dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceId);
            }
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