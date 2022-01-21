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
INSERT INTO DataSourceType (Name) VALUES ('Sapphire')
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

-- Author: Kevin Conner
-- Source: http://stackoverflow.com/questions/116968/in-sql-server-2005-can-i-do-a-cascade-delete-without-setting-the-property-on-my
CREATE procedure usp_delete_cascade (
    @base_table_name varchar(200), @base_criteria nvarchar(1000)
)
as begin
    -- Adapted from http://www.sqlteam.com/article/performing-a-cascade-delete-in-sql-server-7
    -- Expects the name of a table, and a conditional for selecting rows
    -- within that table that you want deleted.
    -- Produces SQL that, when run, deletes all table rows referencing the ones
    -- you initially selected, cascading into any number of tables,
    -- without the need for "ON DELETE CASCADE".
    -- Does not appear to work with self-referencing tables, but it will
    -- delete everything beneath them.
    -- To make it easy on the server, put a "GO" statement between each line.

    declare @to_delete table (
        id int identity(1, 1) primary key not null,
        criteria nvarchar(1000) not null,
        table_name varchar(200) not null,
        processed bit not null,
        delete_sql varchar(1000)
    )

    insert into @to_delete (criteria, table_name, processed) values (@base_criteria, @base_table_name, 0)

    declare @id int, @criteria nvarchar(1000), @table_name varchar(200)
    while exists(select 1 from @to_delete where processed = 0) begin
        select top 1 @id = id, @criteria = criteria, @table_name = table_name from @to_delete where processed = 0 order by id desc

        insert into @to_delete (criteria, table_name, processed)
            select referencing_column.name + ' in (select [' + referenced_column.name + '] from [' + @table_name +'] where ' + @criteria + ')',
                referencing_table.name,
                0
            from  sys.foreign_key_columns fk
                inner join sys.columns referencing_column on fk.parent_object_id = referencing_column.object_id
                    and fk.parent_column_id = referencing_column.column_id
                inner join  sys.columns referenced_column on fk.referenced_object_id = referenced_column.object_id
                    and fk.referenced_column_id = referenced_column.column_id
                inner join  sys.objects referencing_table on fk.parent_object_id = referencing_table.object_id
                inner join  sys.objects referenced_table on fk.referenced_object_id = referenced_table.object_id
                inner join  sys.objects constraint_object on fk.constraint_object_id = constraint_object.object_id
            where referenced_table.name = @table_name
                and referencing_table.name != referenced_table.name

        update @to_delete set
            processed = 1
        where id = @id
    end

    select 'print ''deleting from ' + table_name + '...''; delete from [' + table_name + '] where ' + criteria from @to_delete order by id desc
end
GO

-- =============================================
-- Author:      <Author, William Ernest/ Stephen Wills>
-- Create date: <Create Date,12/1/2016>
-- Description: <Description, Calls usp_delete_cascade to perform cascading deletes for a table>
-- =============================================
CREATE PROCEDURE UniversalCascadeDelete
    @tableName VARCHAR(200),
    @baseCriteria NVARCHAR(1000)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @deleteSQL NVARCHAR(900)

    CREATE TABLE #DeleteCascade
    (
        DeleteSQL NVARCHAR(900)
    )

    INSERT INTO #DeleteCascade
    EXEC usp_delete_cascade @tableName, @baseCriteria

    DECLARE DeleteCursor CURSOR FOR
    SELECT *
    FROM #DeleteCascade

    OPEN DeleteCursor

    FETCH NEXT FROM DeleteCursor
    INTO @deleteSQL

    WHILE @@FETCH_STATUS = 0
    BEGIN
        EXEC sp_executesql @deleteSQL

        FETCH NEXT FROM DeleteCursor
        INTO @deleteSQL
    END

    CLOSE DeleteCursor
    DEALLOCATE DeleteCursor

    DROP TABLE #DeleteCascade
END
GO


USE master
go