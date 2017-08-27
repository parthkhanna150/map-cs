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



// variables.login.map(username => {
//   return getURL(username).then(response => console.log(response)).catch(error => console.log(error));   
// })

async function getURL(login) {
console.log(login);
/*
 * Gets
 */
  const query = 
`{
  user(login: "${login}") {
    repositories(first: 15) {
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
   console.log(response);

  var i=0;
  var repos=[];
  while(true) {
    if(i<15){
      repos.push(response.data.user.repositories.edges[i].node.name);
      i++;
    }
    else{
      // console.log(repos);
      break;
    }
  }
 
  const languages_query = 
`{
  user(login: "${login}") {
    location
    repository(name: "${repos}") {
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
  const langs = await callEndpoint(languages_query);
  console.log(langs);

  //parse response for repos array
  //fetch languages by passing repos array
  return response;
}


export { getURL };
