import { combineReducers } from 'redux';
// import userReducer from './userReducer';
import errorReducer from './errorReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  // user: userReducer,
  errors: errorReducer,
  isModalVisible: modalReducer
});
