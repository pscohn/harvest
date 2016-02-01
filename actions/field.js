import * as types from '../constants/ActionTypes';
import { decreaseMoney } from './money';
import config from '../config';

function buySquare() {
  return dispatch => {
    dispatch(decreaseMoney(config.SQUARE_COST));
    dispatch(addSquare());
  }
}

function addSquare() {
  return {
    type: types.ADD_SQUARE,
  };
}

function tillSquare(index) {
  return {
    type: types.TILL_SQUARE,
    index: index,
  };
}

function plantSquare(index, seedType) {
  return {
    type: types.TILL_SQUARE,
    index: index,
    seedType: seedType,
  };
}

function waterSquare(index) {
  return {
    type: types.WATER_SQUARE,
    index: index,
  };
}

function drySquares() {
  return {
    type: types.DRY_SQUARES,
  };
}

function harvestSquare(index) {
  return {
    type: types.HARVEST_SQUARE,
    index: index,
  };
}
