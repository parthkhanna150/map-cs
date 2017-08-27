import { combineReducers } from 'redux';

import UserLanguagesReducer from './UserLanguagesReducer';
import UserLocationReducer from './UserLocationReducer';
import UserRepositoriesReducer from './UserRepositoriesReducer';

// Root reducer for app
const AppReducer = combineReducers({
  userLanguages: UserLanguagesReducer,
  userLocation: UserLocationReducer,
  userRepositories: UserRepositoriesReducer,
});

export default AppReducer;
