//******************************************************************************************************
//  RspConverter.cs - Gbtc
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
//  04/28/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace TrenDAP.Model
{
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
            context.HttpContext.Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = rsp.ReasonPhrase;

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
}
