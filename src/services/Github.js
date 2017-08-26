import request from 'request-promise-native';

import Settings from '../constants/Settings';

// Get the options for a request
function getOptions(query, variables) {
  const baseURL = Settings.github.BASE_URL;
  const accessToken = Settings.github.ACCESS_TOKEN;

  return {
    method: 'POST',
    uri: baseURL,
    authorization: `bearer ${accessToken}`,
    body: {
      query,
      variables,
    },
//    gzip: true,
    json: true,
  };
}

// Call the endpoint
async function callEndpoint(query, variables) {
  const options = getOptions(query, variables);
  const response = await request(options);

  return response;
}

async function getURL(login) {
  /*
  var query = `query RollDice($dice: Int!, $sides: Int) {
    rollDice(numDice: $dice, numSides: $sides)
  }`;
  */
  const query = `query user($login: String!) {
    url
  }`;
  const variables = {
    login,
  };

  const response = await callEndpoint(query, variables);
  return response;
}

export { getURL };
