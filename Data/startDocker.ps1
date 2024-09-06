
$sa_password = $env:sa_password
$User = $env:User
$Password = $env:Password
$onStartSQL = $env:onStartSQL
$onStartSQLFile = $env:onStartSQLFile

# start the service
Write-Host "Starting SQL Server"
$SqlServiceName = 'SQL Server (SQLEXPRESS)'; 

start-service $SqlServiceName

Write-Host "Started SQL Server."

if($sa_password -eq "_") {
    if (Test-Path $env:sa_password_path) {
        $sa_password = Get-Content -Raw $secretPath
    }
    else {
        Write-Host "WARN: Using default SA password, secret file not found at: $secretPath"
        
    }
}

if($sa_password -ne "_")
{
    Write-Host "Changing SA login credentials"
    $sqlcmd = "ALTER LOGIN sa with password=" +"'" + $sa_password + "'" + ";ALTER LOGIN sa ENABLE;"
    sqlcmd -S "localhost\SQLEXPRESS" -Q $sqlcmd
}

Write-Host "Generating TrenDAP login credentials"
$sqlcmd = "CREATE LOGIN " + $User + " with password=" +"'" + $Password + "'" + "; CREATE USER " + $User + " FOR LOGIN " + $User +";  "
sqlcmd -S "localhost\SQLEXPRESS" -Q $sqlcmd
$sqlcmd = "Use TrenDAP; EXEC sp_AddUser '" + $User + "', '" + $User + "', 'db_owner';"
sqlcmd -S "localhost\SQLEXPRESS" -Q $sqlcmd

if ($onStartSQL -ne "") {
    Write-Host "Running On Start SQL"
    sqlcmd -S "localhost\SQLEXPRESS" -Q $onStartSQL
}

if ($onStartSQLFile -ne "") {
    Write-Host "Running File $onStartSQLFile" 
    sqlcmd -S "localhost\SQLEXPRESS" -d TrenDAP -i "$onStartSQLFile"
}


$lastCheck = (Get-Date).AddSeconds(-2) 
while ($true) 
{ 
    Get-EventLog -LogName Application -Source "MSSQL*" -After $lastCheck | Select-Object TimeGenerated, EntryType, Message	 
    $lastCheck = Get-Date 
    Start-Sleep -Seconds 2 
}
