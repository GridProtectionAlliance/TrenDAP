//******************************************************************************************************
//  DataSourceController.cs - Gbtc
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

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Linq;
using TrenDAPClient.Model;

namespace TrenDAPClient.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataSourceController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public DataSourceController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        [Route("")]
        public ActionResult Get()
        {
            using (DataSourceContext context = new DataSourceContext(m_configuration))
            {
                return Ok(context.DataSources);
            }
        }


        [Route("{id:int}")]
        public ActionResult Get(int id)
        {
            using (DataSourceContext context = new DataSourceContext(m_configuration))
            {
                return Ok(context.DataSources.Find(id));
            }
        }

        [Route("")]
        public ActionResult Post([FromBody] DataSource dataSource)
        {
            using (DataSourceContext context = new DataSourceContext(m_configuration))
            {
                return Ok(context.DataSources.Add(dataSource));
            }
        }

        [Route("")]
        public ActionResult Patch([FromBody] DataSource dataSource)
        {
            using (DataSourceContext context = new DataSourceContext(m_configuration))
            {
                return Ok(context.DataSources.Update(dataSource));
            }
        }

    }
}
