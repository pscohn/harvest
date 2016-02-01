import { combineReducers } from 'redux';
import time from './time';
import money from './money';
import being from './being';
import field from './field';

const rootReducer = combineReducers({
  time,
  money,
  being,
  field,
});

export default rootReducer;
