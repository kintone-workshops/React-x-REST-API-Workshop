// Completed Version of server.js

// backend - server.js - Routes API requests from the frontend to Kintone

// Express Server Setup
const express = require('express');
const cors = require('cors');
const PORT = 50000;
const app = express();

// Hide sensitive info in a .env file with dotenv
require('dotenv').config({ path: '../.env' });

// Get Kintone credentials from a .env file
const subdomain = process.env.SUBDOMAIN;
const appID = process.env.APPID;
const apiToken = process.env.APITOKEN;

// Parse incoming requests with JSON payloads
app.use(express.json());

// Set Cross-Origin Resource Sharing (CORS) to frontend React App
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000'
};

// Kintone's record(s) endpoints
const multipleRecordsEndpoint = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appID}`
const singleRecordEndpoint = `https://${subdomain}.kintone.com/k/v1/record.json?app=${appID}`;
// Kintone app's field codes are 'country' 'state' and 'city'.

// TODO: Create a GET endpoint at /getData
// This route executes when a GET request lands on localhost:50000/getData
app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token': apiToken
    }
  }
  const response = await fetch(multipleRecordsEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

// TODO: Create a POST endpoint at /postData
// This route executes when a POST request lands on localhost:50000/postData
app.post('/postData', cors(corsOptions), async (req, res) => {
  const requestBody = {
    'app': appID,
    'record': {
      'country': {
        'value': req.body.country
      },
      'state': {
        'value': req.body.state
      },
      'city': {
        'value': req.body.city
      }
    }
  };
  const options = {
    method: 'POST',
    headers: {
      'X-Cybozu-API-Token': apiToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  }
  const response = await fetch(singleRecordEndpoint, options);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`\n Backend server listening at http://localhost:${PORT} \n Confirm if Kintone records are being retrieved at \n http://localhost:${PORT}/getData`);
});
