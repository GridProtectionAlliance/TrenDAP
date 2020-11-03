//******************************************************************************************************
//  OpenXDAController.cs - Gbtc
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
//  10/07/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data;
using Gemstone.Data.Model;
using Gemstone.Reflection.MemberInfoExtensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using TrenDAP.Model;

namespace TrenDAP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpenXDAController : ControllerBase 
    {


        #region [Members ]

        public class Search
        {
            public string FieldName { get; set; }
            public string SearchText { get; set; }
            public string Operator { get; set; }
            public string Type { get; set; }

        }

        public class PostData
        {
            public IEnumerable<Search> Searches { get; set; }
            public string OrderBy { get; set; }
            public bool Ascending { get; set; }
        }

        #endregion

        #region [ Constructor ]
        public OpenXDAController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        #endregion

        #region [ Properties ]
        private IConfiguration Configuration { get; }
        #endregion

        #region [ Http Methods ]
        [HttpGet, Route("{dataSourceID:int}/{table}")]
        public virtual ActionResult Get(int dataSourceID, string table)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration["SystemSettings:ConnectionString"], Configuration["SystemSettings:DataProviderString"]))
            //using (WebRequestHandler handler = new WebRequestHandler())
            using (HttpClient client = new HttpClient())
            {

                try
                {
                    DataSource dataSource = new TableOperations<DataSource>(connection).QueryRecordWhere("ID = {0}", dataSourceID);

                    client.BaseAddress = new Uri(dataSource.URL);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{dataSource.Credential}:{dataSource.Password}")));



                    HttpResponseMessage response = client.GetAsync($"api/{table}").Result;

                    if (!response.IsSuccessStatusCode)
                        return StatusCode((int)response.StatusCode, response.ReasonPhrase);

                    Task<string> rsp = response.Content.ReadAsStringAsync();
                    return Ok(rsp.Result);
                }
                catch (InvalidOperationException ex) {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);

                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex);
                }
            }

        }

        //[HttpGet, Route("{parentID?}")]
        //public virtual ActionResult Get(string parentID = null)
        //{
        //    if (GetRoles == string.Empty || User.IsInRole(GetRoles))
        //    {
        //        using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
        //        {

        //            try
        //            {
        //                IEnumerable<T> result;
        //                if (HasParent && parentID != null)
        //                {
        //                    PropertyInfo parentKey = typeof(T).GetProperty(ParentKey);
        //                    if (parentKey.PropertyType == typeof(int))
        //                        result = new TableOperations<T>(connection).QueryRecords(GetOrderByExpression, new RecordRestriction(ParentKey + " = {0}", int.Parse(parentID)));
        //                    else if (parentKey.PropertyType == typeof(Guid))
        //                        result = new TableOperations<T>(connection).QueryRecords(GetOrderByExpression, new RecordRestriction(ParentKey + " = {0}", Guid.Parse(parentID)));
        //                    else
        //                        result = new TableOperations<T>(connection).QueryRecords(GetOrderByExpression, new RecordRestriction(ParentKey + " = {0}", parentID));
        //                }
        //                else
        //                    result = new TableOperations<T>(connection).QueryRecords(GetOrderByExpression);

        //                return Ok(result);
        //            }
        //            catch (Exception ex)
        //            {
        //                return StatusCode(StatusCodes.Status500InternalServerError, ex);
        //            }
        //        }
        //    }
        //    else
        //    {
        //        return Unauthorized();
        //    }

        //}
        //[HttpGet, Route("One/{id}")]
        //public virtual ActionResult GetOne(string id)
        //{
        //    if (GetRoles == string.Empty || User.IsInRole(GetRoles))
        //    {
        //        using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
        //        {
        //            try
        //            {
        //                T result = null;
        //                PropertyInfo primaryKey = typeof(T).GetProperty(PrimaryKeyField);
        //                if (primaryKey.PropertyType == typeof(int))
        //                    result = new TableOperations<T>(connection).QueryRecordWhere(PrimaryKeyField + " = {0}", int.Parse(id));
        //                else if (primaryKey.PropertyType == typeof(Guid))
        //                    result = new TableOperations<T>(connection).QueryRecordWhere(PrimaryKeyField + " = {0}", Guid.Parse(id));
        //                else
        //                    result = new TableOperations<T>(connection).QueryRecordWhere(PrimaryKeyField + " = {0}", id);

        //                if (result == null)
        //                {
        //                    TableNameAttribute tableNameAttribute;
        //                    string tableName;
        //                    if (typeof(T).TryGetAttribute(out tableNameAttribute))
        //                        tableName = tableNameAttribute.TableName;
        //                    else
        //                        tableName = typeof(T).Name;
        //                    return BadRequest(string.Format(PrimaryKeyField + " provided does not exist in '{0}'.", tableName));
        //                }
        //                else
        //                    return Ok(result);
        //            }
        //            catch (Exception ex)
        //            {
        //                return StatusCode(StatusCodes.Status500InternalServerError, ex);
        //            }
        //        }
        //    }
        //    else
        //    {
        //        return Unauthorized();
        //    }

        //}


        //[HttpPost]
        //public virtual ActionResult Post([FromBody] JObject record)
        //{
        //    try
        //    {
        //        if (PostRoles == string.Empty || User.IsInRole(PostRoles))
        //        {
        //            using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
        //            {

        //                T newRecord = record.ToObject<T>();
        //                int result = new TableOperations<T>(connection).AddNewRecord(newRecord);
        //                if (HasUniqueKey)
        //                {
        //                    PropertyInfo prop = typeof(T).GetProperty(UniqueKeyField);
        //                    if (prop != null)
        //                    {
        //                        object uniqueKey = prop.GetValue(newRecord);
        //                        newRecord = new TableOperations<T>(connection).QueryRecordWhere(UniqueKeyField + " = {0}", uniqueKey);
        //                        return Ok(newRecord);
        //                    }

        //                }
        //                return Ok(result);
        //            }
        //        }
        //        else
        //        {
        //            return Unauthorized();
        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, ex);
        //    }
        //}

        //[HttpPatch]
        //public virtual ActionResult Patch([FromBody] T record)
        //{
        //    try
        //    {
        //        if (PatchRoles == string.Empty || User.IsInRole(PatchRoles))
        //        {

        //            using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
        //            {
        //                int result = new TableOperations<T>(connection).AddNewOrUpdateRecord(record);
        //                return Ok(result);
        //            }
        //        }
        //        else
        //        {
        //            return Unauthorized();
        //        }


        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, ex);
        //    }
        //}

        //[HttpDelete]
        //public virtual ActionResult Delete(T record)
        //{
        //    try
        //    {
        //        if (DeleteRoles == string.Empty || User.IsInRole(DeleteRoles))
        //        {

        //            using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
        //            {
        //                TableNameAttribute tableNameAttribute;
        //                string tableName;
        //                if (typeof(T).TryGetAttribute(out tableNameAttribute))
        //                    tableName = tableNameAttribute.TableName;
        //                else
        //                    tableName = typeof(T).Name;

        //                PropertyInfo idProp = typeof(T).GetProperty(PrimaryKeyField);
        //                if (idProp.PropertyType == typeof(int))
        //                {
        //                    int id = (int)idProp.GetValue(record);
        //                    int result = connection.ExecuteNonQuery($"EXEC UniversalCascadeDelete '{tableName}', '{PrimaryKeyField} = {id}'");
        //                    return Ok(result);

        //                }
        //                else if (idProp.PropertyType == typeof(Guid))
        //                {
        //                    Guid id = (Guid)idProp.GetValue(record);
        //                    int result = connection.ExecuteNonQuery($"EXEC UniversalCascadeDelete '{tableName}', '{PrimaryKeyField} = ''{id}'''");
        //                    return Ok(result);

        //                }
        //                else if (idProp.PropertyType == typeof(string))
        //                {
        //                    string id = (string)idProp.GetValue(record);
        //                    int result = connection.ExecuteNonQuery($"EXEC UniversalCascadeDelete '{tableName}', '{PrimaryKeyField} = ''{id}'''");
        //                    return Ok(result);

        //                }
        //                else
        //                {
        //                    int result = new TableOperations<T>(connection).DeleteRecord(record);
        //                    return Ok(result);
        //                }
        //            }
        //        }
        //        else
        //        {
        //            return Unauthorized();
        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, ex);
        //    }
        //}

        #endregion


    }
}
