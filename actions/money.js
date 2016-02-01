import * as types from '../constants/ActionTypes';

function increaseMoney(amount) {
  return {
    type: types.INCREASE_MONEY,
    amount: amount,
  };
}

function decreaseMoney(amount) {
  return {
    type: types.DECREASE_MONEY,
    amount: amount,
  };
}

