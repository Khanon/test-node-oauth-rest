cd ./oauth
start cmd.exe /k "call npm run start"

cd..
cd ./api-rest
start cmd.exe /k "call npm run start"

cd..
cd ./db
start cmd.exe /k "call npm run start"

cd..
cd ./browser-test
start cmd.exe /k "call npm run start"
