import * as types from '../constants/ActionTypes';
import { config } from '../config';

export default function money(state = {
  amount: config.DEFAULT_MONEY,
}, action) {
  switch (action.type) {
  case types.INCREASE_MONEY:
    return Object.assign({}, state, {
      amount: amount + action.amount,
    });
  case types.DECREASE_MONEY:
    return Object.assign({}, state, {
      amount: amount - action.amount,
    });
  default:
    return state;
  }
}
