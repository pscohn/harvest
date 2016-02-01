import * as types from '../constants/ActionTypes';

export default function money(state = {
  amount: 100,
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
