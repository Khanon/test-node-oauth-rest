# test-node-oauth-rest

## Description
API Rest acceded by OAth authentication.

## Microservices:
<ul>
<li>OAuth</li>
<li>API Rest</li>
<li>DB</li>
<li>Browser test</li>
</ul>

## Requirements
Please install Node and NPM globally.
<ul>
<li><a href="https://nodejs.org/es/download/">https://nodejs.org/es/download/</a></li>
<li><a href="https://www.npmjs.com/">https://www.npmjs.com/</a></li>
</ul>

## How to run
Test designed to be executed on **Windows**.<br>
Execute batch file **build.bat** to build the project. This action is required once. <br>
Execute batch file **start.bat** to start the microservices.<br>
Open URL **http://localhost:8080** on browser to test the API Rest. Check console for responses.<br>

## Notes to improve
Different libraries for microservices on a monorepo could be handled using **Nx** and some framework like **NestJs**.<br>
**GraphQL** could be added to the project to improve the performance of requests.<br>
**MongoDB** should be used instead *DB* microservice.