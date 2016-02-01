import * as types from '../constants/ActionTypes';

export default function being(state = {
  fatigue: 0,
  hunger: 0,
}, action) {
  switch (action.type) {
  case types.INCREASE_FATIGUE:
    return Object.assign({}, state, {
      fatigue: state.fatigue + action.amount,
    });
  case types.DECREASE_FATIGUE:
    return Object.assign({}, state, {
      amount: state.fatigue - action.amount,
    });
  case types.RESET_FATIGUE:
    return Object.assign({}, state, {
      fatigue: 0,
    });
  case types.INCREASE_HUNGER:
    return Object.assign({}, state, {
      hunger: state.hunger + action.amount,
    });
  case types.DECREASE_HUNGER:
    return Object.assign({}, state, {
      hunger: state.hunger - action.amount,
    });
  case types.RESET_HUNGER:
    return Object.assign({}, state, {
      hunger: 0,
    });
  default:
    return state;
  }
}
