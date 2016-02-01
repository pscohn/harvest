import * as types from '../constants/ActionTypes';

const defaultSquare = {
  tilled: false,
  watered: false,
  seed: null,
  daysWatered: 0,
};

export default function field(state = {
  squares: [],
}, action) {
  switch (action.type) {
  case types.ADD_SQUARE:
    return Object.assign({}, state, {
      squares: [
        ...state.squares,
        defaultSquare,
      ],
    });
  case types.TILL_SQUARE:
    return Object.assign({}, state, {
      squares: [
        ...state.squares.slice(0, action.index),
        Object.assign({}, state.squares[index], {
          tilled: true,
        }),
        ...state.squares.slice(action.index + 1),
      ],
    });
  case types.PLANT_SQUARE:
    return Object.assign({}, state, {
      squares: [
        ...state.squares.slice(0, action.index),
        Object.assign({}, state.squares[index], {
          seed: action.seedType,
        }),
        ...state.squares.slice(action.index + 1),
      ],
    });
  case types.WATER_SQUARE:
    return Object.assign({}, state, {
      squares: [
        ...state.squares.slice(0, action.index),
        Object.assign({}, state.squares[index], {
          watered: true,
          daysWatered: state.squares[index].daysWatered + 1,
        }),
        ...state.squares.slice(action.index + 1),
      ],
    });
  case types.DRY_SQUARES:
  case types.HARVEST_SQUARE:
  default:
    return state;
  }
}
