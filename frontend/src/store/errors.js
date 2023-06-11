import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session';
import { tweetErrorsReducer } from './tweets';

const nullErrors = null;

export const sessionErrorsReducer = (state = nullErrors, action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      return nullErrors;
    default:
      return state;
  }
};

export default combineReducers({
  session: sessionErrorsReducer,
	tweets: tweetErrorsReducer
});

