import ActionTypes from '../constants/ActionTypes';

import { getLanguages } from '../services/Github';
import {
  parseUserLanguagesResponse,
  parseUserLanguagesError,
} from '../utilities/Parser';

function getUserLanguagesRequest() {
  return {
    type: ActionTypes.userLanguages.GET_USER_LANGUAGES_REQUEST,
    payload: {
      status: 'in progress',
    },
  };
}

function getUserLanguagesSuccess(response) {
  return {
    type: ActionTypes.userLanguages.GET_USER_LANGUAGES_SUCCESS,
    payload: {
      status: 'success',
      response,
    },
  };
}

function getUserLanguagesFailure(error) {
  return {
    type: ActionTypes.userLanguages.GET_USER_LANGUAGES_FAILURE,
    payload: {
      status: 'failure',
      error,
    },
  };
}

function getUserLanguages(username) {
  return dispatch => {
    dispatch(getUserLanguagesRequest());

    return getLanguages(username)
      .then(response => {
        const languages = parseUserLanguagesResponse(response);
        dispatch(getUserLanguagesSuccess(languages));
      })
      .catch(error => {
        const errorDetail = parseUserLanguagesError(error);
        dispatch(getUserLanguagesFailure(errorDetail));
      });
  };
}

export { getUserLanguages };
