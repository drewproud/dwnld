import { DATA_RECEIVED, SQUARE_MOVE_REQUESTED } from '../actions';

function getValueForPair(x, y, offsetX, offsetY) {
  if ((x + offsetX >= 0) && (x + offsetX < 16) && (y + offsetY >= 0) && (y + offsetY < 16)) {
    return grid[y + offsetY][x + offsetX];
  }

  return null;
}


function getValidMoveForSquare(grid, x, y) {
  const moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    const offsetX = move[0];
    const offsetY = move[1];
    if (getValueForPair(x, y, offsetX, offsetY) === 0) {
      return move;
    }
    return null;
  }
}

function getGridWithAppliedMove(grid, x, y) {
  const newGrid = [ ...grid ];
  const validMove = getValidMoveForSquare(grid, x, y);
  if (validMove) {
    newGrid[y + validMove[1]][x + validMove[0]] = grid[y][x];
    newGrid[y][x] = 0;
    return newGrid;
  }
  return grid;
}

function grid(state = [], action) {
  console.log(action);
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
