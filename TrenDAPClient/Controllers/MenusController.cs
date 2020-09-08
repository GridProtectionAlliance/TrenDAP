//******************************************************************************************************
//  MenusController.cs - Gbtc
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
//  09/08/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using ElectronNET.API;
using ElectronNET.API.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrenDAPClient.Controllers
{
    public class MenusController : Controller
    {
        public IActionResult Index()
        {
            if (HybridSupport.IsElectronActive)
            {
                var menu = new MenuItem[] {
                new MenuItem { Label = "Edit", Type = MenuType.submenu, Submenu = new MenuItem[] {
                    new MenuItem { Label = "Undo", Accelerator = "CmdOrCtrl+Z", Role = MenuRole.undo },
                    new MenuItem { Label = "Redo", Accelerator = "Shift+CmdOrCtrl+Z", Role = MenuRole.redo },
                    new MenuItem { Type = MenuType.separator },
                    //new MenuItem { Label = "Cut", Accelerator = "CmdOrCtrl+X", Role = MenuRole.cut },
                    //new MenuItem { Label = "Copy", Accelerator = "CmdOrCtrl+C", Role = MenuRole.copy },
                    //new MenuItem { Label = "Paste", Accelerator = "CmdOrCtrl+V", Role = MenuRole.paste },
                    //new MenuItem { Label = "Select All", Accelerator = "CmdOrCtrl+A", Role = MenuRole.selectall }
                }
                },
                new MenuItem { Label = "View", Type = MenuType.submenu, Submenu = new MenuItem[] {
                    new MenuItem
                    {
                        Label = "Reload",
                        Accelerator = "CmdOrCtrl+R",
                        Click = () =>
                        {
                            // on reload, start fresh and close any old
                            // open secondary windows
                            var mainWindowId = Electron.WindowManager.BrowserWindows.ToList().First().Id;
                            Electron.WindowManager.BrowserWindows.ToList().ForEach(browserWindow => {
                                if(browserWindow.Id != mainWindowId)
                                {
                                    browserWindow.Close();
                                }
                                else
                                {
                                    browserWindow.Reload();
                                }
                            });
                        }
                    },
                    new MenuItem
                    {
                        Label = "Toggle Full Screen",
                        Accelerator = "CmdOrCtrl+F",
                        Click = async () =>
                        {
                            bool isFullScreen = await Electron.WindowManager.BrowserWindows.First().IsFullScreenAsync();
                            Electron.WindowManager.BrowserWindows.First().SetFullScreen(!isFullScreen);
                        }
                    },
                    new MenuItem
                    {
                        Label = "Open Developer Tools",
                        Accelerator = "CmdOrCtrl+I",
                        Click = () => Electron.WindowManager.BrowserWindows.First().WebContents.OpenDevTools()
                    }
                }
                },
                new MenuItem { Label = "Data Sources", Role = MenuRole.window, Type = MenuType.submenu, Submenu = new MenuItem[] {
                         new MenuItem { Label = "New Data Source", Accelerator = "CmdOrCtrl+M", Role = MenuRole.minimize },
                    }
                },
                new MenuItem { Label = "Work Spaces", Role = MenuRole.window, Type = MenuType.submenu, Submenu = new MenuItem[] {
                         new MenuItem { Label = "New Work Space", Accelerator = "CmdOrCtrl+M", Role = MenuRole.minimize },
                    }
                },

                new MenuItem { Label = "Window", Role = MenuRole.window, Type = MenuType.submenu, Submenu = new MenuItem[] {
                     new MenuItem { Label = "Minimize", Accelerator = "CmdOrCtrl+M", Role = MenuRole.minimize },
                     new MenuItem { Label = "Close", Accelerator = "CmdOrCtrl+W", Role = MenuRole.close }
                }
                },
                new MenuItem { Label = "Help", Role = MenuRole.help, Type = MenuType.submenu, Submenu = new MenuItem[] {
                    new MenuItem
                    {
                        Label = "Learn More",
                        Click = async () => await Electron.Shell.OpenExternalAsync("https://github.com/ElectronNET")
                    }
                }
                }
            };

                Electron.Menu.SetApplicationMenu(menu);

                CreateContextMenu();
            }

            return Ok();
        }

        private void CreateContextMenu()
        {
            var menu = new MenuItem[]
            {
                new MenuItem
                {
                    Label = "Hello",
                    Click = async () => await Electron.Dialog.ShowMessageBoxAsync("Electron.NET rocks!")
                },
                new MenuItem { Type = MenuType.separator },
                new MenuItem { Label = "Electron.NET", Type = MenuType.checkbox, Checked = true }
            };

            Electron.App.BrowserWindowFocus += () => {
                var mainWindow = Electron.WindowManager.BrowserWindows.FirstOrDefault();
                Electron.Menu.SetContextMenu(mainWindow, menu);
            };

            Electron.IpcMain.On("show-context-menu", (args) =>
            {
                var mainWindow = Electron.WindowManager.BrowserWindows.FirstOrDefault();
                Electron.Menu.ContextMenuPopup(mainWindow);
            });
        }
    }
}
