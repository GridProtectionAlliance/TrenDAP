//******************************************************************************************************
//  Startup.cs - Gbtc
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
//  08/25/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gemstone.Web;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Security.Principal;
using TrenDAP.WebApp;

namespace TrenDAP
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            Env = env;
        }

        public IWebHostEnvironment Env { get; set; }
        public IConfiguration Configuration { get; }


        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            IMvcBuilder builder = services.AddControllersWithViews()
            .AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
            }
            );


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseStaticFiles(WebExtensions.StaticFileEmbeddedResources());

            app.UseRouting();

            app.UseAuthentication();
            //app.UseAuthorization();

            app.Use((context, next) =>
            {
                //string username = context.Request.HttpContext.User?.Identity.Name;

                //if ((object)username == null)
                //    return null;

                //// Get the principal used for verifying the user's pass-through authentication
                //IPrincipal passthroughPrincipal = context.Request.HttpContext.User;

                //// Create the security provider that will verify the user's pass-through authentication
                //ISecurityProvider securityProvider = SecurityProviderCache.CreateProvider(username, passthroughPrincipal, false);
                //securityProvider.Authenticate();

                //// Return the security principal that will be used for role-based authorization
                //SecurityIdentity securityIdentity = new SecurityIdentity(securityProvider);
                context.Request.HttpContext.User = new GemstoneSecurityPrincipal(context.Request.HttpContext.User, Configuration["SecurityProvider:ConnectionString"], Configuration["SecurityProvider:DataProviderString"]);

                return next.Invoke();
            });


            app.UseEndpoints(endpoints =>
            {
                //endpoints.MapRazorPages();
                //endpoints.MapControllers();

                endpoints.MapControllerRoute(
                name: "default",
                pattern: "{newaction?}/{id?}",
                defaults: new
                {
                    controller = "Home",
                    action = "Index"
                });

            });
        }
    }
}
