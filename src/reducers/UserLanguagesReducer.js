import ActionTypes from '../constants/ActionTypes';

const initialState = {
  status: 'success',
  response: [],
  error: '',
};

// Case reducer for handling request in getting user languages
function getUserLanguagesRequest(state = initialState, action) {
  const { status } = action.payload;

  return {
    ...state,
    status,
  };
}

// Case reducer for handling success in getting user languages
function getUserLanguagesSuccess(state = initialState, action) {
  const { status } = action.payload;
  const { response } = action.payload;

  return {
    ...state,
    status,
    response,
  };
}

// Case reducer for handling failure in getting user languages
function getUserLanguagesFailure(state = initialState, action) {
  const { status } = action.payload;
  const { error } = action.payload;

  return {
    ...state,
    status,
    error,
  };
}

// Root reducer for user languages
function UserLanguagesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.userLanguages.GET_USER_LANGUAGES_REQUEST:
      return getUserLanguagesRequest(state, action);

    case ActionTypes.userLanguages.GET_USER_LANGUAGES_SUCCESS:
      return getUserLanguagesSuccess(state, action);

    case ActionTypes.userLanguages.GET_USER_LANGUAGES_FAILURE:
      return getUserLanguagesFailure(state, action);

    default:
      return state;
  }
}

export default UserLanguagesReducer;
