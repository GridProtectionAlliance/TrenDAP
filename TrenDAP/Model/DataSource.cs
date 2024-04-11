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
using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;
using openXDA.APIAuthentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
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
        public DateTime? Expires { get; set; }
        [UseEscapedName]
        public bool Public { get; set; }
        [UseEscapedName]
        public string User { get; set; }
        public string Settings { get; set; }

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
    
        [HttpGet, Route("TestAuth/{dataSourceID:int}")]
        public ActionResult TestAuth(int dataSourceID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            {
                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);
                    DataSourceHelper helper = new DataSourceHelper(dataSource);
                    HttpResponseMessage rsp = helper.GetResponseTask($"api/TestAuth").Result;
                    switch (rsp.StatusCode)
                    {
                        default:
                        case HttpStatusCode.Unauthorized:
                            return Ok("Failed to authorize with datasource credentials.");
                        case HttpStatusCode.NotFound:
                            return Ok("Unable to find datasource.");
                        case HttpStatusCode.OK:
                            return Ok("1");
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }
        }
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

    public class RspConverter : IActionResult
    {
        Task<HttpResponseMessage> rspTask;
        public RspConverter(Task<HttpResponseMessage> rsp)
        {
            rspTask = rsp;
        }
        //Note for reviewer: This should just be copying the stream over and sending it out. Idea is to sidestep loading all data server-side, then send it out.
        public async Task ExecuteResultAsync(ActionContext context)
        {
            HttpResponseMessage rsp = rspTask.Result;
            context.HttpContext.Response.StatusCode = (int)rsp.StatusCode;

            // Have to clear chunking header, results in errors client side otherwise
            if (rsp.Headers.TransferEncodingChunked == true && rsp.Headers.TransferEncoding.Count == 1) rsp.Headers.TransferEncoding.Clear();

            foreach (KeyValuePair<string, IEnumerable<string>> header in rsp.Headers) context.HttpContext.Response.Headers.TryAdd(header.Key, new StringValues(header.Value.ToArray()));

            if (rsp.Content != null)
            {
                using (var stream = await rsp.Content.ReadAsStreamAsync())
                {
                    await stream.CopyToAsync(context.HttpContext.Response.Body);
                    await context.HttpContext.Response.Body.FlushAsync();
                }
            }
        }
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

        public IActionResult GetActionResult(string requestURI, HttpContent content = null)
        {
            Task<HttpResponseMessage> rsp = GetResponseTask(requestURI, content);
            return new RspConverter(rsp);
        }
    }
}
