//******************************************************************************************************
//  ModelController.cs - Gbtc
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
using Gemstone.Reflection.MemberInfoExtensions;
using GSF.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using TrenDAP.Attributes;
using TrenDAP.Model;

namespace TrenDAP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModelController<T> : ControllerBase where T:class, new()
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
        public ModelController(IConfiguration configuration)
        {
            Configuration = configuration;
            PrimaryKeyField = typeof(T).GetProperties().FirstOrDefault(p => p.GetCustomAttributes<PrimaryKeyAttribute>().Any())?.Name ?? "ID";
            ParentKey = typeof(T).GetProperties().FirstOrDefault(p => p.GetCustomAttributes<ParentKeyAttribute>().Any())?.Name ?? "";
            CustomView = typeof(T).GetCustomAttribute<CustomViewAttribute>()?.CustomView ?? "";
        }

        #endregion

        #region [ Properties ]
        protected IConfiguration Configuration { get; }

        protected virtual string ParentKey { get; } = "";
        protected virtual string PrimaryKeyField { get; } = "ID";
        protected virtual bool HasUniqueKey { get; } = false;
        protected virtual string UniqueKeyField { get; } = "";
        protected virtual string SettingCategory { get; } = "systemSettings";
        protected virtual string GetRoles { get; } = "";
        protected virtual string PostRoles { get; } = "Administrator";
        protected virtual string PatchRoles { get; } = "Administrator";
        protected virtual string DeleteRoles { get; } = "Administrator";
        protected virtual string CustomView { get; } = "";
        protected virtual string GetOrderByExpression { get; } = null;
        #endregion

        #region [ Http Methods ]
        [HttpGet, Route("New")]
        public virtual ActionResult GetNew()
        {
            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
                {

                    try
                    {
                        return Ok(new TableOperations<T>(connection).NewRecord());
                    }
                    catch (Exception ex)
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError,ex);
                    }
                }
            }
            else
            {
                return Unauthorized();
            }

        }

        [HttpGet, Route("{parentID?}")]
        public virtual ActionResult<IEnumerable<T>> Get(string parentID = null)
        {
            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
                {

                    try
                    {
                        IEnumerable<T> result;
                        if (!string.IsNullOrEmpty(ParentKey) && parentID != null)
                        {
                            PropertyInfo parentKey = typeof(T).GetProperty(ParentKey);
                            if (parentKey.PropertyType == typeof(int))
                                result = QueryRecordsWhere(null, false, ParentKey + " = {0}", int.Parse(parentID));
                            else if (parentKey.PropertyType == typeof(Guid))
                                result = QueryRecordsWhere(null, false, ParentKey + " = {0}", Guid.Parse(parentID));
                            else
                                result = QueryRecordsWhere(null, false, ParentKey + " = {0}", parentID);
                        }
                        else
                            result = QueryRecordsWhere(null, false, null);

                        return Ok(result);
                    }
                    catch (Exception ex)
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError, ex);
                    }
                }
            }
            else
            {
                return Unauthorized();
            }

        }
        [HttpGet, Route("One/{id}")]
        public virtual ActionResult GetOne(string id)
        {
            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
                {
                    try
                    {
                        T result = null;
                        PropertyInfo primaryKey = typeof(T).GetProperty(PrimaryKeyField);
                        if (primaryKey.PropertyType == typeof(int))
                            result = QueryRecordWhere(PrimaryKeyField + " = {0}", int.Parse(id));
                        else if (primaryKey.PropertyType == typeof(Guid))
                            result = QueryRecordWhere(PrimaryKeyField + " = {0}", Guid.Parse(id));
                        else
                            result = QueryRecordWhere(PrimaryKeyField + " = {0}", id);

                        if (result == null)
                        {
                            TableNameAttribute tableNameAttribute;
                            string tableName;
                            if (typeof(T).TryGetAttribute(out tableNameAttribute))
                                tableName = tableNameAttribute.TableName;
                            else
                                tableName = typeof(T).Name;
                            return BadRequest(string.Format(PrimaryKeyField + " provided does not exist in '{0}'.", tableName));
                        }
                        else
                            return Ok(result);
                    }
                    catch (Exception ex)
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError, ex);
                    }
                }
            }
            else
            {
                return Unauthorized();
            }

        }

        protected virtual IEnumerable<T> QueryRecordsWhere(string orderBy, bool ascending, string filterExpression, params object[] parameters)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
            {
                RecordRestriction restriction = string.IsNullOrEmpty(filterExpression) ? null : new RecordRestriction(filterExpression, parameters);
                if (string.IsNullOrEmpty(CustomView))
                    return new TableOperations<T>(connection).QueryRecords(null, restriction);

                string flt = filterExpression;

                string orderString = null;
                if (!string.IsNullOrEmpty(orderBy))
                    orderString = orderBy + (ascending ? " ASC" : " DESC");

                string sql = $@"
                    SELECT * FROM 
                    ({CustomView}) FullTbl 
                    {(string.IsNullOrEmpty(filterExpression) ? "" : $"WHERE { flt}")}
                    {(string.IsNullOrEmpty(orderBy) ? "" : " ORDER BY " + orderString)}";


                DataTable dataTbl = connection.RetrieveData(sql, parameters);

                List<T> result = new List<T>();
                TableOperations<T> tblOperations = new TableOperations<T>(connection);
                foreach (DataRow row in dataTbl.Rows)
                {
                    result.Add(tblOperations.LoadRecord(row));
                }
                return result;
            }
        }

        protected virtual T QueryRecordWhere(string filterExpression, params object[] parameters)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
            {
                if (CustomView == String.Empty)
                    return new TableOperations<T>(connection).QueryRecordWhere(filterExpression, parameters);

                string whereClause = filterExpression;
                object[] param = parameters;

                whereClause = " WHERE " + whereClause;
                string sql = "SELECT * FROM (" + CustomView + ") FullTbl";
                DataTable dataTbl = connection.RetrieveData(sql + whereClause, param);

                TableOperations<T> tblOperations = new TableOperations<T>(connection);
                if (dataTbl.Rows.Count > 0)
                    return tblOperations.LoadRecord(dataTbl.Rows[0]);
                return null;

            }
        }


        [HttpPost]
        public virtual ActionResult Post([FromBody] JObject record)
        {
            try
            {
                if (CustomView != String.Empty) return BadRequest();
                if (PostRoles == string.Empty || User.IsInRole(PostRoles))
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
                    {

                        T newRecord = record.ToObject<T>();
                        int result = new TableOperations<T>(connection).AddNewRecord(newRecord);
                        if (HasUniqueKey)
                        {
                            PropertyInfo prop = typeof(T).GetProperty(UniqueKeyField);
                            if (prop != null)
                            {
                                object uniqueKey = prop.GetValue(newRecord);
                                newRecord = new TableOperations<T>(connection).QueryRecordWhere(UniqueKeyField + " = {0}", uniqueKey);
                                return Ok(newRecord);
                            }

                        }
                        return Ok(result);
                    }
                }
                else
                {
                    return Unauthorized();
                }

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }

        [HttpPatch]
        public virtual ActionResult Patch([FromBody] JObject record)
        {
            try
            {
                if (CustomView != String.Empty) return BadRequest();
                if (PatchRoles == string.Empty || User.IsInRole(PatchRoles))
                {

                    using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
                    {
                        T newRecord = record.ToObject<T>();

                        int result = new TableOperations<T>(connection).AddNewOrUpdateRecord(newRecord);
                        return Ok(result);
                    }
                }
                else
                {
                    return Unauthorized();
                }


            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }

        [HttpDelete]
        public virtual ActionResult Delete(T record)
        {
            try
            {
                if (CustomView != String.Empty) return BadRequest();
                if (DeleteRoles == string.Empty || User.IsInRole(DeleteRoles))
                {

                    using (AdoDataConnection connection = new AdoDataConnection(Configuration[SettingCategory + ":ConnectionString"], Configuration[SettingCategory + ":DataProviderString"]))
                    {
                        TableNameAttribute tableNameAttribute;
                        string tableName;
                        if (typeof(T).TryGetAttribute(out tableNameAttribute))
                            tableName = tableNameAttribute.TableName;
                        else
                            tableName = typeof(T).Name;

                        PropertyInfo idProp = typeof(T).GetProperty(PrimaryKeyField);
                        if (idProp.PropertyType == typeof(int))
                        {
                            int id = (int)idProp.GetValue(record);
                            int result = connection.ExecuteNonQuery($"EXEC UniversalCascadeDelete '{tableName}', '{PrimaryKeyField} = {id}'");
                            return Ok(result);

                        }
                        else if (idProp.PropertyType == typeof(Guid))
                        {
                            Guid id = (Guid)idProp.GetValue(record);
                            int result = connection.ExecuteNonQuery($"EXEC UniversalCascadeDelete '{tableName}', '{PrimaryKeyField} = ''{id}'''");
                            return Ok(result);

                        }
                        else if (idProp.PropertyType == typeof(string))
                        {
                            string id = (string)idProp.GetValue(record);
                            int result = connection.ExecuteNonQuery($"EXEC UniversalCascadeDelete '{tableName}', '{PrimaryKeyField} = ''{id}'''");
                            return Ok(result);

                        }
                        else
                        {
                            int result = new TableOperations<T>(connection).DeleteRecord(record);
                            return Ok(result);
                        }
                    }
                }
                else
                {
                    return Unauthorized();
                }

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }

        #endregion


    }
}
