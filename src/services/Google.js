import request from 'request-promise-native';

import Settings from '../constants/Settings';

// Get the options for a request
function getOptions(queryStrings) {
  const APIKey = Settings.google.API_KEY;
  const baseURL = Settings.google.BASE_URL;
  const geocodingPath = Settings.google.GEOCODING_PATH;

  return {
    uri: `${baseURL}${geocodingPath}`,
    qs: queryStrings,
    gzip: true,
    json: true,
  };
}

// Call the endpoint
async function callEndpoint(query) {
  const options = getOptions(query);
  const response = await request(options);

  return response;
}

// Get the longitude and latitude for the location
async function getCoordinates(address) {
  const key = Settings.google.API_KEY;
  const queryStrings = {
    address,
    key,
  };

  const response = await callEndpoint(queryStrings);
  return response;
}

export { getCoordinates };
