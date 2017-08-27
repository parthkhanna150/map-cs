import ActionTypes from '../constants/ActionTypes';

function setSubmittedGithubUsername(githubUsername) {
  return {
    type: ActionTypes.submittedGithubUsername.SET_SUBMITTED_GITHUB_USERNAME,
    payload: {
      submittedGithubUsername: githubUsername,
    },
  };
}

export { setSubmittedGithubUsername };
