//******************************************************************************************************
//  GemstoneSecurityPrincipal.cs - Gbtc
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
//  09/28/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace TrenDAP.WebApp
{
    public class GemstoneSecurityPrincipal : ClaimsPrincipal
    {
        #region [ Properties ]
        private readonly string ConnectionString;
        private readonly string DataProviderString;
        #endregion

        #region [ Static ]
        static private Dictionary<string, List<string>> s_cache;
        static GemstoneSecurityPrincipal()
        {
            s_cache = new Dictionary<string, List<string>>();
        }
        #endregion

        #region [ Constructors ]
        public GemstoneSecurityPrincipal(ClaimsPrincipal principal, string connectionString, string dataProviderString) : base(principal)
        {
            ConnectionString = connectionString;
            DataProviderString = dataProviderString;
        }
        #endregion

        #region [ Methods ]

        public override bool IsInRole(string role)
        {
            if (!Claims.Any()) return false;

            var claims = Claims.Select(claim => "'" + claim.Value + "'");

            try
            {
                using (AdoDataConnection connection = new AdoDataConnection(ConnectionString, DataProviderString))
                {
                    DataTable data = connection.RetrieveData(@"
                    SELECT *
                    FROM(
                    SELECT
	                    UserAccount.Name,
	                    ApplicationRole.Name as Role
                    FROM
	                    UserAccount join 
	                    ApplicationRoleUserAccount ON UserAccount.ID = ApplicationRoleUserAccount.UserAccountID JOIN
	                    ApplicationRole ON ApplicationRoleUserAccount.ApplicationRoleID = ApplicationRole.ID
                    UNION
                    SELECT
	                    SecurityGroup.Name,
	                    ApplicationRole.Name as Role
                    FROM
	                    SecurityGroup join 
	                    ApplicationRoleSecurityGroup ON SecurityGroup.ID = ApplicationRoleSecurityGroup.SecurityGroupID JOIN
	                    ApplicationRole ON ApplicationRoleSecurityGroup.ApplicationRoleID = ApplicationRole.ID)t
                    WHERE 
	                    Role = {0} AND Name IN (" + string.Join(",", claims) + @")
                ", role);
                    return data.Rows.Count > 0;

                }
            }
            catch (Exception ex) {
                return false;
            }
        }

        #endregion
    }
}
