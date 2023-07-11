// postRecord.js - Passes the POST API request from React to Express server

// Connect with the Express server
const addRecordEndpoint = 'http://localhost:50000/postData';

export default async function postRecord(location) {
  /* Pass the POST API request from React to Express server */
  // - - - - - - - START - - - - - - - -
  const recordBodyParameters = {
    'country': location.country,
    'state': location.state,
    'city': location.city
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recordBodyParameters)
  }

  const response = await fetch(addRecordEndpoint, options);
  const jsonResponse = await response.json();

  console.log(JSON.stringify(jsonResponse));

  // The successful response from Kintone doesn't contain any information we'll use on the front-end.
  // So we'll just pass it back as JSON as is.
  return jsonResponse;
  // - - - - - - - END - - - - - - - - -
};