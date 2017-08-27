import ActionTypes from '../constants/ActionTypes';

import { getLocation } from '../services/Github';
import { getCoordinates } from '../services/Google';
import {
  parseUserLocationResponse,
  parseUserLocationError,
  parseUserCoordinatesResponse,
  parseUserCoordinatesError,
} from '../utilities/Parser';

function getUserLocationRequest() {
  return {
    type: ActionTypes.userLocation.GET_USER_LOCATION_REQUEST,
    payload: {
      status: 'in progress',
    },
  };
}

function getUserLocationSuccess(response) {
  return {
    type: ActionTypes.userLocation.GET_USER_LOCATION_SUCCESS,
    payload: {
      status: 'success',
      response,
    },
  };
}

function getUserLocationFailure(error) {
  return {
    type: ActionTypes.userLocation.GET_USER_LOCATION_FAILURE,
    payload: {
      status: 'failure',
      error,
    },
  };
}

function getUserLocation(username) {
  return dispatch => {
    dispatch(getUserLocationRequest());

    return getLocation(username)
      .then(response => {
        const location = parseUserLocationResponse(response);
        dispatch(getUserLocationRequest());

        return getCoordinates(location)
          .then(response => {
            const coordinates = parseUserCoordinatesResponse(response);
            dispatch(getUserLocationSuccess(coordinates));
          })
          .catch(error => {
            const errorDetail = parseUserCoordinatesError(error);
            dispatch(getUserLocationFailure(errorDetail));
          });
      })
      .catch(error => {
        const errorDetail = parseUserLocationError(error);
        dispatch(getUserLocationFailure(errorDetail));
      });
  };
}

export { getUserLocation };
