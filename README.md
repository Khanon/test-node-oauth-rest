# test-node-oauth-rest

## Description
Test for Conecta turismo by Lorenzo Portillo.<br>
API Rest acceded by OAth authentication.

## Microservices:

<ul>
<li>API Rest</li>
<li>OAuth</li>
<li>Browser test</li>
</ul>

## Tools:
<ul>
<li>Swagger</li>
<li>Docker container</li>
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
Open URL **http://localhost:1010** on browser to test the API Rest.<br>

## Notes to improve
Different libraries for microservices on a monorepo could be handled using Nx and some framework like NestJs.
GraphQL could be added to the project to improve the performance of requests.