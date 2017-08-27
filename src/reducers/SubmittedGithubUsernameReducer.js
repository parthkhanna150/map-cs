import ActionTypes from '../constants/ActionTypes';

const initialState = '';

function setSubmittedGithubUsername(state = initialState, action) {
  const { submittedGithubUsername } = action.payload;
  return submittedGithubUsername;
}

function submittedGithubUsernameReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.submittedGithubUsername.SET_SUBMITTED_GITHUB_USERNAME:
      return setSubmittedGithubUsername(state, action);

    default:
      return state;
  }
}

export default submittedGithubUsernameReducer;
