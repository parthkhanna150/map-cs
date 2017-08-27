import request from 'request-promise-native';

import Settings from '../constants/Settings';

// Get the options for a request
function getOptions(query) {
  const accessToken = Settings.github.ACCESS_TOKEN;
  const baseURL = Settings.github.BASE_URL;
  const graphQLPath = Settings.github.GRAPHQL_PATH;

  return {
    method: 'POST',
    uri: `${baseURL}${graphQLPath}`,
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

// Get the public repositories for the specified user
async function getRepositories(username) {
  const numOfRepositories = 5;
  const query = `{
    user(login: "${username}") {
      repositories(first: ${numOfRepositories}) {
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
    }
  }`;

  const response = await callEndpoint(query);
  return response;
}

// Get the location for the specified user
async function getLocation(username) {
  const query = `{
    user(login: "${username}") {
      location
    }
  }`;

  const response =  await callEndpoint(query);
  return response;
}

// Get the languages for the specified user based their repositories
async function getLanguages(username) {
  const numOfRepositories = 5;
  let repositories = await getRepositories(username);
  let userRepositories = [];

  for (let i = 0; i < numOfRepositories; i++) {
    userRepositories.push(repositories.data.user.repositories.edges[i].node.name);
  }

  let languages = new Set();

  for (let i = 0; i < numOfRepositories; i++) {
    const query = `{
      user(login: "${username}") {
        repository(name: "${userRepositories[i]}") {
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

    if (response.data.user.repository !== null) {
      languages.add(response.data.user.repository.languages.edges[0].node.name);
    }
  }

  return [...languages];
}

export {
  getRepositories,
  getLocation,
  getLanguages,
};
