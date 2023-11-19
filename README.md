# OpenAI API Key Tester

An simple app to test API keys following issues coding the [Pensano meal planner app](https://github.com/Pensano-dev/meal-plan-generator).

## Installation

Clone the repo to your local machine:
Install dependencies:
```bash
cd frontend
npm install
cd ../backend
npm install
```
Create a `.env` file in the backend directory and add three OpenAI API keys (with the names shown below) and a port number of your choosing for the express server (if no port is given then the default 4000 will be used):
```bash
PORT=4000

# My API key
OPENAI_API_KEY_1=<api-key-here, e.g. sk-blahblahblah>
# Pensano API key
OPENAI_API_KEY_2=<api-key-here, e.g. sk-blahblahblah>
# Another API key
OPENAI_API_KEY_3=
```
NOTE: As in the example above, an API Key may be laft blank but the environment variable must be declared.
Run the app in development mode:
```bash
# to start both servers concurrently, navigate to the backend if not already there.
npm start
# index.html is usually served on [localhost:8080](http://localhost:8080)
```
```bash
# to start the backend server only, navigate to the backend if not already there.
npm run backend 
# the server will be listening on the port you specified in the .env file or 4000 by default
```
```bash
# to start the frontend server only
cd frontend
npm run frontend 
# index.html is usually served on [localhost:8080](http://localhost:8080)
```

## Usage
Ensure that there a env varibales for `OPENAI_API_KEY_1`, `OPENAI_API_KEY_2` and `OPENAI_API_KEY_3`. They do not need to be valid OpenAI API keys.
Start the servers, backend and frontend.
Open [localhost:8080](http://localhost:8080) in a browser.
Click `Test API keys`.

![Test results](images/../frontend/public/images/Screenshot%202023-11-19%20at%2013.58.40.png)

## App Structure
The app is built on a Node.js and Express.js backend with no database and has a separate frontend server using vanilla js and a simple html page. The backend server is used only for the API calls to OpenAI and the frontend server used to serve the html page and the static assets.