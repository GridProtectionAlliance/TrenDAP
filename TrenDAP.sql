--//******************************************************************************************************
--//  TrenDAP.sql - Gbtc
--//
--//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
--//
--//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
--//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
--//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
--//  file except in compliance with the License. You may obtain a copy of the License at:
--//
--//      http://opensource.org/licenses/MIT
--//
--//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
--//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
--//  License for the specific language governing permissions and limitations.
--//
--//  Code Modification History:
--//  ----------------------------------------------------------------------------------------------------
--//  06/10/2020 - Billy Ernest
--//       Generated original version of source code.
--//
--//******************************************************************************************************

USE [master]
GO
CREATE DATABASE TrenDAP
GO

USE TrenDAP
GO

CREATE TABLE Log (

   Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
   Message nvarchar(max) NULL,
   MessageTemplate nvarchar(max) NULL,
   Level nvarchar(128) NULL,
   TimeStamp datetimeoffset(7) NOT NULL,
   Exception nvarchar(max) NULL,
   Properties xml NULL,
   LogEvent nvarchar(max) NULL
)
GO

CREATE TABLE Setting
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    Name VARCHAR(200) NULL,
    Value VARCHAR(MAX) NULL,
    DefaultValue VARCHAR(MAX) NULL
)
GO

CREATE TABLE DataSourceType
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
)
GO

INSERT INTO DataSourceType (Name) VALUES ('OpenXDA')
GO

CREATE TABLE DataSource
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    Name VARCHAR(200) NULL,
    DataSourceTypeID INT NOT NULL REFERENCES DataSourceType(ID),
    URL VARCHAR(MAX) NULL,
    Credential varchar(max) NULL,
    Password varchar(max) NULL

)
GO
