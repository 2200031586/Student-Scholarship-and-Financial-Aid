
import { combineReducers } from 'redux';
import scholarshipReducer from './scholarshipReducer';
import studentReducer from './studentReducer';
import applicationReducer from './applicationReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  scholarships: scholarshipReducer,
  students: studentReducer,
  applications: applicationReducer,
  notifications: notificationReducer,
});

export default rootReducer;
