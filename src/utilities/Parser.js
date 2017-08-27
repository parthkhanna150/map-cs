function parseUserLocationResponse(response) {
  let userLocation = null;
  if (response !== null) {
    userLocation = response.data.user.location;
  }

  return userLocation;
}

function parseUserLocationError(error) {
  return 'Error';
}

function parseUserRepositoriesResponse(response) {
  const numOfRepositories = 5;
  let userRepositories = [];

  for (let i = 0; i < numOfRepositories; i++) {
    userRepositories.push(response.data.user.repositories.edges[i].node.name);
  }

  return userRepositories;
}

function parseUserRepositoriesError(error) {
  return 'Error';
}

function parseUserLanguagesResponse(response) {
  return response;
}

function parseUserLanguagesError(error) {
  return 'Error';
}

export {
  parseUserLocationResponse,
  parseUserLocationError,
  parseUserRepositoriesResponse,
  parseUserRepositoriesError,
  parseUserLanguagesResponse,
  parseUserLanguagesError,
};
