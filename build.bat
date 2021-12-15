cd ./oauth
call npm i
call npm run build

cd ..
cd ./api-rest
call npm i
call npm run build

cd ..
cd ./db
call npm i
call npm run build

cd ..
cd ./browser-test
call npm i
call npm run build

