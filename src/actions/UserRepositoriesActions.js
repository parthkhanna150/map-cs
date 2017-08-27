import ActionTypes from '../constants/ActionTypes';

import { getRepositories } from '../services/Github';
import {
  parseUserRepositoriesResponse,
  parseUserRepositoriesError,
} from '../utilities/Parser';

function getUserRepositoriesRequest() {
  return {
    type: ActionTypes.userRepositories.GET_USER_REPOSITORIES_REQUEST,
    payload: {
      status: 'in progress',
    },
  };
}

function getUserRepositoriesSuccess(response) {
  return {
    type: ActionTypes.userRepositories.GET_USER_REPOSITORIES_SUCCESS,
    payload: {
      status: 'success',
      response,
    },
  };
}

function getUserRepositoriesFailure(error) {
  return {
    type: ActionTypes.userRepositories.GET_USER_REPOSITORIES_FAILURE,
    payload: {
      status: 'failure',
      error,
    },
  };
}

function getUserRepositories(username) {
  return dispatch => {
    dispatch(getUserRepositoriesRequest());

    return getRepositories(username)
      .then(response => {
        const repositories = parseUserRepositoriesResponse(response);
        dispatch(getUserRepositoriesSuccess(repositories));
      })
      .catch(error => {
        const errorDetail = parseUserRepositoriesError(error);
        dispatch(getUserRepositoriesFailure(errorDetail));
      });
  };
}

export { getUserRepositories };
