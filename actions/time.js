import * as types from '../constants/ActionTypes';

export function advanceDay() {
  return {
    type: types.ADVANCE_DAY,
  };
}

export function advanceSeason() {
  return {
    type: types.ADVANCE_SEASON,
  };
}

function resetDay() {
  return {
    type: types.RESET_DAY,
  };
}
