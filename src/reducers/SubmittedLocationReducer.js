import ActionTypes from '../constants/ActionTypes';

const initialState = '';

function setSubmittedLocation(state = initialState, action) {
  const { submittedLocation } = action.payload;

  return submittedLocation;
}

function SubmittedLocationReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.submittedLocation.SET_SUBMITTED_LOCATION:
      return setSubmittedLocation(state, action);

    default:
      return state;
  }
}

export default SubmittedLocationReducer;
