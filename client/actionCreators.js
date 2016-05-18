import { DATA_RECEIVED, SQUARE_MOVE_REQUESTED } from './actions';
import getRandomStartingData from './data';

export function loadData() {
  const data = getRandomStartingData();
  return {
    type: DATA_RECEIVED,
    payload: {
      data,
    },
  };
}

export function requestMoveSquare(y, x) {
  return {
    type: SQUARE_MOVE_REQUESTED,
    payload: {
      y,
      x,
    },
  };
}
