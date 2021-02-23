//******************************************************************************************************
//  WorkSpace.cs - Gbtc
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
//  09/25/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


using Gemstone.Data.Model;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using TrenDAP.Controllers;

namespace TrenDAP.Model
{

    public class WorkSpace
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Name { get; set; }
        [UseEscapedName]
        public string User { get; set; }
        public byte[] JSON { get; set; }
        public int DataSetID { get; set; }

        [NonRecordField]
        public string JSONString
        {
            get
            {
                try { return Encoding.UTF8.GetString(JSON); }
                catch { return Encoding.ASCII.GetString(JSON); }
            }

        }

        [UseEscapedName]
        public bool Public { get; set; }
        public DateTime UpdatedOn { get; set; }
        [UseEscapedName]
        public bool Open { get; set; }
    }


    public class WorkSpaceController : ModelController<WorkSpace>
    {
        public WorkSpaceController(IConfiguration configuration) : base(configuration){}
        public override ActionResult Post([FromBody] JObject record)
        {
            record["User"] = Request.HttpContext.User.Identity.Name;
            record["JSON"] = Encoding.UTF8.GetBytes(record["JSONString"].ToString());
            return base.Post(record);
        }
        public override ActionResult Patch([FromBody] JObject record)
        {
            record["JSON"] = Encoding.UTF8.GetBytes(record["JSONString"].ToString());

            return base.Patch(record);
        }


    }
}
