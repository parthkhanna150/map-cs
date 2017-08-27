import ActionTypes from '../constants/ActionTypes';

const initialState = {
  id: '',
  name: '',
  lat: 0,
  lng: 0,
};

function setSubmittedLocation(state = initialState, action) {
  const { submittedLocation } = action.payload;
  return {

  };
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
