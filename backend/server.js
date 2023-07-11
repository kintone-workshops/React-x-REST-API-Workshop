// backend - server.js - Routes API requests from the frontend to Kintone

// Express Server Setup
const express = require('express');
const cors = require('cors');
const PORT = 5000;
const app = express();

// Hide sensitive info in a .env file with dotenv
require('dotenv').config({path: '../.env'});

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

// TODO: Create a GET endpoint at /getData and a POST endpoint at /postData


// - - - - - - - END - - - - - - - -

app.listen(PORT, () => {
  console.log(`\n Backend server listening at http://localhost:${PORT} \n Confirm if Kintone records are being retrieved at \n http://localhost:${PORT}/getData`);
});