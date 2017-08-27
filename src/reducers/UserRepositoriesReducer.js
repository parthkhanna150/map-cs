import ActionTypes from '../constants/ActionTypes';

const initialState = {
  status: 'success',
  response: [],
  error: '',
};

// Case reducer for handling request in getting user repositories
function getUserRepositoriesRequest(state = initialState, action) {
  const { status } = action.payload;

  return {
    ...state,
    status,
  };
}

// Case reducer for handling success in getting user repositories
function getUserRepositoriesSuccess(state = initialState, action) {
  const { status } = action.payload;
  const { response } = action.payload;

  return {
    ...state,
    status,
    response,
  };
}

// Case reducer for handling failure in getting user repositories
function getUserRepositoriesFailure(state = initialState, action) {
  const { status } = action.payload;
  const { error } = action.payload;

  return {
    ...state,
    status,
    error,
  };
}

// Root reducer for user repositories
function UserRepositoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.userRepositories.GET_USER_REPOSITORIES_REQUEST:
      return getUserRepositoriesRequest(state, action);

    case ActionTypes.userRepositories.GET_USER_REPOSITORIES_SUCCESS:
      return getUserRepositoriesSuccess(state, action);

    case ActionTypes.userRepositories.GET_USER_REPOSITORIES_FAILURE:
      return getUserRepositoriesFailure(state, action);

    default:
      return state;
  }
}

export default UserRepositoriesReducer;
