import ActionTypes from '../constants/ActionTypes';

function setSubmittedLocation(location) {
  return {
    type: ActionTypes.submittedLocation.SET_SUBMITTED_LOCATION,
    payload: {
      submittedLocation: location,
    },
  };
}

export { setSubmittedLocation };
