import * as types from '../constants/ActionTypes';

const DAYS_PER_MONTH = 30;

export default function time(state = {
  SEASONS: ['Spring', 'Summer', 'Fall', 'Winter'],
  season: 0,
  day: 1,
}, action) {
  switch (action.type) {
  case types.ADVANCE_SEASON:
    let newSeason = state.season + 1;
    if (newSeason > state.SEASONS.length) {
      newSeason = 0;
    }
    return Object.assign({}, state, {
      season: newSeason,
    });
  case types.ADVANCE_DAY:
    let newDay = state.day + 1;
    if (newDay > DAYS_PER_MONTH) {
      newDay = 1;
    }
    return Object.assign({}, state, {
      day: newDay,
    });
  case types.RESET_DAY:
    return Object.assign({}, state, {
      day: 0,
    });
  default:
    return state;
  }
}
