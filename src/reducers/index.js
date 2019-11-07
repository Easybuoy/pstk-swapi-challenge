import { combineReducers } from 'redux';

import loadingReducer from './loading';
import errorReducer from './error';
import swapiReducer from './swapi';

export default combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  swapi: swapiReducer
});
