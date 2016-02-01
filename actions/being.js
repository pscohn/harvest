import * as types from '../constants/ActionTypes';

function increaseFatigue(amount) {
  return {
    type: types.INCREASE_FATIGUE,
    amount: amount,
  };
}

function decreaseFatigue(amount) {
  return {
    type: types.DECREASE_FATIGUE,
    amount: amount,
  };
}


function resetFatigue() {
  return {
    type: types.RESET_FATIGUE,
  };
}

function increaseHunger(amount) {
  return {
    type: types.INCREASE_HUNGER,
    amount: amount,
  };
}

function decreaseHunger(amount) {
  return {
    type: types.DECREASE_HUNGER,
    amount: amount,
  };
}


function resetHunger() {
  return {
    type: types.RESET_HUNGER,
  };
}
