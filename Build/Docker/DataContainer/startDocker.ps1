#Setup Influx
start powershell "Start-Sleep 5; .\influx\influx setup --username $env:User --password $env:Password --token $env:Token --org $env:Org --bucket $env:Bucket --force" 
echo "Setting up Influx"
.\influxdb\influxd