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

const variables = {
  login: ['elailai94', 'parthkhanna150', 'graphcool', 'AllanWang', 'hiyangyue']
}

variables.login.map(username => {
  return getURL(username).then(response => console.log(response)).catch(error => console.log(error));   
})

async function getURL(login) {

/*
 * Gets
 */
  const query = 
`{
  repositoryOwner(login: "${login}") {
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
  }
  user(login: "${login}") {
    location
    repository(name: "Hippothesis") {
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

//     location
//     repository(name: "${repo}") {
//       languages(first: 1) {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//     }
//   }
// }`;
  const response = await callEndpoint(query);
  return response;
}

export { getURL };
