import ActionTypes from '../constants/ActionTypes';

const initialState = {
  status: 'success',
  response: [],
  error: '',
};

// Case reducer for handling request in getting user location
function getUserLocationRequest(state = initialState, action) {
  const { status } = action.payload;

  return {
    ...state,
    status,
  };
}

// Case reducer for handling success in getting user location
function getUserLocationSuccess(state = initialState, action) {
  const { status } = action.payload;
  const { response } = action.payload;

  return {
    ...state,
    status,
    response,
  };
}

// Case reducer for handling failure in getting user location
function getUserLocationFailure(state = initialState, action) {
  const { status } = action.payload;
  const { error } = action.payload;

  return {
    ...state,
    status,
    error,
  };
}

// Root reducer for user location
function UserLocationReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.userLocation.GET_USER_LOCATION_REQUEST:
      return getUserLocationRequest(state, action);

    case ActionTypes.userLocation.GET_USER_LOCATION_SUCCESS:
      return getUserLocationSuccess(state, action);

    case ActionTypes.userLocation.GET_USER_LOCATION_FAILURE:
      return getUserLocationFailure(state, action);

    default:
      return state;
  }
}

export default UserLocationReducer;
