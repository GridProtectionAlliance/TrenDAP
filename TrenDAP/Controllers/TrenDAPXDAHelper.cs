//******************************************************************************************************
//  TrenDAPXDAHelper.cs - Gbtc
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
//  08/16/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using openXDA.APIAuthentication;
using System.Net.Http;
using System.Threading.Tasks;
using TrenDAP.Model;

namespace TrenDAP.Controllers
{
    public class TrenDAPXDAHelper : XDAAPIHelper
    {
        private class HelperObject
        {
            public string APIToken { get; set; }
            public string RegistrationKey { get; set; }
            public string URL { get; set; }
        }

        private HelperObject m_Helper;

        public TrenDAPXDAHelper(JObject sourceSetting)
        {
            m_Helper = sourceSetting.ToObject<HelperObject>();
        }

        protected override string Token
        {
            get
            {
                return m_Helper.APIToken;
            }

        }
        protected override string Key
        {
            get
            {
                return m_Helper.RegistrationKey;
            }

        }
        protected override string Host
        {
            get
            {
                return m_Helper.URL;
            }
        }

        public IActionResult GetActionResult(string requestURI, HttpContent content = null)
        {
            Task<HttpResponseMessage> rsp = GetResponseTask(requestURI, content);
            return new RspConverter(rsp);
        }
    }
}
