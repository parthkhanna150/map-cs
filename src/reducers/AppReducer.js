import { combineReducers } from 'redux';

import SubmittedLocationReducer from './SubmittedLocationReducer';
import SubmittedGithubUsernameReducer from './SubmittedGithubUsernameReducer';
import UserLanguagesReducer from './UserLanguagesReducer';
import UserLocationReducer from './UserLocationReducer';
import UserRepositoriesReducer from './UserRepositoriesReducer';

// Root reducer for app
const AppReducer = combineReducers({
  submittedLocation: SubmittedLocationReducer,
  submittedGithubUsername: SubmittedGithubUsernameReducer,
  userLanguages: UserLanguagesReducer,
  userLocation: UserLocationReducer,
  userRepositories: UserRepositoriesReducer,
});

export default AppReducer;
