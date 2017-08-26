import { request } from 'graphql-request';
import { GraphQLClient } from 'graphql-request'

import Settings from '../constants/Settings';

// Get the options for a request
function getOptions(query, variables) {
  const baseURL = Settings.github.BASE_URL;
  const accessToken = Settings.github.ACCESS_TOKEN;

  return {
    method: 'POST',
    uri: baseURL,
<<<<<<< HEAD
    headers: {
      authorization: `bearer ${accessToken}`,
    },
=======
    authorization: `bearer 404c81ffcc86354a6d229af92426c62bb58d3351`,
>>>>>>> 6d1c65f5ccfcb8f639b86632b80bb6da9be60f0c
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
<<<<<<< HEAD
  /*
  const query = `query {
    user(login: String!) {
     location
    }
  }`;
  */
  const variables = {
    login: 'elailai94',
  };
  // console.log(variables.login)
  const query = `{
  repositoryOwner(login: "${variables.login}") {
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
  user(login: "${variables.login}") {
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
// console.log(query)
=======
>>>>>>> 6d1c65f5ccfcb8f639b86632b80bb6da9be60f0c

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer 404c81ffcc86354a6d229af92426c62bb58d3351`,
  },
})

const variables = {
  login : 'elailai94',
  repo_name: 'FloodIt',
};

// const query = `{
//   Movie(title: "Inception") {
//     releaseDate
//     actors {
//       name
//     }
//   }
// }`


const query = 
`query repositoryOwner($login: String!) {
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
  }`
  
client.request('https://api.github.com/graphql', query, variables).then(data => console.log(data)).catch(error => console.log(error));

  // const query = `query user($login: String!) {
  //   url
  // }`;
  // const variables = {
  //   login,
  // };

  // const response = await callEndpoint(query, variables);
  // return response;
}

export { getURL };
