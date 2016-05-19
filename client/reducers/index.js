import R from 'ramda';
import { DATA_RECEIVED, SQUARE_MOVE_REQUESTED } from '../actions';

const MIN_VALUE = 0;
const MAX_VALUE = 4;

function getPoint(x, y) {
  return { x, y };
}

function isPointInBounds(point) {
  return (point >= MIN_VALUE) && (point < MAX_VALUE);
}

const addPoints = R.curry(function(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y,
  };
});

const isTargetTheEmptyCell = R.curry(function(grid, possibleTarget) {
  return isTargetInBounds(possibleTarget) && grid[possibleTarget.y][possibleTarget.x] === 0;
});

function isTargetInBounds(possibleTarget) {
  return isPointInBounds(possibleTarget.x) && isPointInBounds(possibleTarget.y);
}

function getTargetCoordinates(grid, point) {
  const offsets = [getPoint(0, 1), getPoint(0, -1), getPoint(1, 0), getPoint(-1, 0)];

  return R.compose(
    R.head,
    R.filter(isTargetTheEmptyCell(grid)),
    R.map(addPoints(point))
  )(offsets);
}

function getGridWithAppliedMove(grid, x, y) {
  const newGrid = [ ...grid ];
  const point = getPoint(x, y);
  const targetCoordinates = getTargetCoordinates(grid, point);

  if (targetCoordinates) {
    newGrid[targetCoordinates.y][targetCoordinates.x] = grid[y][x];
    newGrid[y][x] = 0;
    return newGrid;
  }

  return grid;
}

function grid(state = [], action) {
  switch(action.type) {
    case DATA_RECEIVED:
      return action.payload.data;
    case SQUARE_MOVE_REQUESTED:
      return getGridWithAppliedMove(state, action.payload.x, action.payload.y);
    default:
      return state;
  }
}

export function selectGrid(state) {
  return state || [];
}

export default grid;
