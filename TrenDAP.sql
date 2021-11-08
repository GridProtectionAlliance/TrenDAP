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

INSERT INTO DataSourceType (Name) VALUES ('TrenDAPDB')
GO
INSERT INTO DataSourceType (Name) VALUES ('OpenHistorian')
GO

CREATE TABLE DataSource
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    Name VARCHAR(200) NULL,
    [User] VARCHAR(MAX) NOT NULL,
    DataSourceTypeID INT NOT NULL REFERENCES DataSourceType(ID),
    URL VARCHAR(MAX) NULL,
    [Public] bit NULL DEFAULT 0,
    Credential varchar(max) NULL,
    Password varchar(max) NULL,
    OIDC bit NOT NULL DEFAULT 0

)
GO


CREATE TABLE DataSet
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    [Context] VARCHAR(11) NOT NULL,
    [RelativeValue] FLOAT NOT NULL,
    [RelativeWindow] VARCHAR(5) NOT NULL,
    [From] Date NOT NULL,
    [To] Date NOT NULL,
    [Hours] INT NOT NULL,
    [Days] INT NOT NULL,
    [Weeks] BIGINT NOT NULL,
    [Months] INT NOT NULL,
    [Name] VARCHAR(200) NOT NULL,
    [User] VARCHAR(MAX) NOT NULL,
    [Public] bit NULL DEFAULT 0,
    UpdatedOn DATETIME NULL DEFAULT GETUTCDATE(),
    [JSON] varbinary(max) NULL
)
GO

CREATE TABLE WorkSpace
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    [Name] VARCHAR(200) NOT NULL,
    [User] VARCHAR(MAX) NOT NULL,
    [Type] VARCHAR(200) NULL DEFAULT('Regular'),
    [Public] bit NULL DEFAULT 0,
    UpdatedOn DATETIME NULL DEFAULT GETUTCDATE(),
    [JSON] varbinary(max) NULL,
    [Open] bit NOT NULL DEFAULT 0,
    [DataSetID] INT NOT NULL REFERENCES DataSet(ID)
)
GO

CREATE TABLE ApplicationRole
(
    ID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID() PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
    Description VARCHAR(MAX) NULL,
    CreatedOn DATETIME NULL DEFAULT GETUTCDATE(),
    CreatedBy VARCHAR(200) NULL DEFAULT SUSER_NAME(),
    UpdatedOn DATETIME NULL DEFAULT GETUTCDATE(),
    UpdatedBy VARCHAR(200) NULL DEFAULT SUSER_NAME()
)
GO

INSERT INTO ApplicationRole(Name, Description) VALUES('Administrator', 'Admin Role')
GO



CREATE TABLE SecurityGroup
(
    ID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID() PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
    Description VARCHAR(MAX) NULL,
    CreatedOn DATETIME NULL DEFAULT GETUTCDATE(),
    CreatedBy VARCHAR(200) NULL DEFAULT SUSER_NAME(),
    UpdatedOn DATETIME NULL DEFAULT GETUTCDATE(),
    UpdatedBy VARCHAR(200) NULL DEFAULT SUSER_NAME()
)
GO

INSERT INTO SecurityGroup(Name, Description) VALUES('S-1-5-32-545', 'All Windows authenticated users')
GO

CREATE TABLE UserAccount
(
    ID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID() PRIMARY KEY,
    Name VARCHAR(200) NOT NULL UNIQUE,
    Password VARCHAR(200) NULL,
    FirstName VARCHAR(200) NULL,
    LastName VARCHAR(200) NULL,
    LockedOut BIT NOT NULL DEFAULT 0,
    Approved BIT NOT NULL DEFAULT 0,
    UseADAuthentication BIT NOT NULL DEFAULT 1,
    ChangePasswordOn DATETIME NULL DEFAULT DATEADD(DAY, 90, GETUTCDATE()),
    CreatedOn DATETIME NULL DEFAULT GETUTCDATE(),
    CreatedBy VARCHAR(50) NULL DEFAULT SUSER_NAME(),
    UpdatedOn DATETIME NULL DEFAULT GETUTCDATE(),
    UpdatedBy VARCHAR(50) NULL DEFAULT SUSER_NAME()
)
GO

CREATE TABLE ApplicationRoleSecurityGroup
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    ApplicationRoleID UNIQUEIDENTIFIER NOT NULL REFERENCES ApplicationRole(ID),
    SecurityGroupID UNIQUEIDENTIFIER NOT NULL REFERENCES SecurityGroup(ID)
)
GO

CREATE TABLE ApplicationRoleUserAccount
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    ApplicationRoleID UNIQUEIDENTIFIER NOT NULL REFERENCES ApplicationRole(ID),
    UserAccountID UNIQUEIDENTIFIER NOT NULL REFERENCES UserAccount(ID)
)
GO

CREATE TABLE SecurityGroupUserAccount
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    SecurityGroupID UNIQUEIDENTIFIER NOT NULL REFERENCES SecurityGroup(ID),
    UserAccountID UNIQUEIDENTIFIER NOT NULL REFERENCES UserAccount(ID)
)
GO

INSERT INTO ApplicationRoleSecurityGroup(ApplicationRoleID, SecurityGroupID) VALUES((SELECT ID FROM ApplicationRole WHERE Name = 'Administrator'), (SELECT ID FROM SecurityGroup))
GO

USE master
go