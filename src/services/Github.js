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
var object_map = { 
};
var repos=[];
var langs_array=[];
async function getRepos(login) {
  object_map.username = login;
// console.log(login);
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
 // console.log(response);

 var i=0;
 while(i<15) {
  repos.push(response.data.user.repositories.edges[i].node.name);
  i++;
}
// object_map.repos_array = repos;
  //parse response for repos array
  //fetch languages by passing repos array
  return repos;
}

async function getLocation(login) {
  const location_query =   
  `{
    user(login: "${login}") {
      location
    }
  }`;

  var loc = await callEndpoint(location_query);
  if(loc!==null){
    loc = loc.data.user.location;
    object_map.location = loc;
  }
  return loc;
}

async function getLanguages(login) {
  var languages_query;
  var repos = await getRepos(login);
  var i = 0;

  while (i<15) {
    // console.log(repos[i]);
    languages_query = 
    `{
      user(login: "${login}") {
        repository(name: "${repos[i]}") {
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

    i++;

    const langs = await callEndpoint(languages_query);
    if (langs.data.user.repository!==null){
      // console.log(langs);
      langs_array.push(langs.data.user.repository.languages.edges[0].node.name);
    }
  }
  // console.log(langs_array);
  object_map.languages = langs_array;
  return langs_array;
}

console.log(object_map);

export { getRepos, getLocation, getLanguages };

