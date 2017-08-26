import request from 'request-promise-native';

import Settings from '../constants/Settings';

// Get the options for a request
function getOptions(query) {
  const baseURL = Settings.github.BASE_URL;
  const accessToken = Settings.github.ACCESS_TOKEN;

  return {
    method: 'POST',
    uri: baseURL,
    headers: {
      authorization: `bearer ${accessToken}`,
    },
    body: {
      query,
    },
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

async function getURL(login) {
  const query = `
{
  user(login: "${login}") {
    repositories(first: 30) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          name
        }
      }
    }
    location
    repository(name: "${variables.repo}") {
      languages(first: 1) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
}`;

  const response = await callEndpoint(query);
  return response;
}

export { getURL };
