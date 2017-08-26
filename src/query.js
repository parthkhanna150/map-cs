const query = {
  repositoryOwner(login: variables[login]) {
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
  };

const variables = {
  login : "elailai94",
  repo_name: repo_name,
}

var repo_name;
var repo_array;

for (var i = repo_array.length - 1; i >= 0; i--) {
  repo_name = repo_array[i];
}
