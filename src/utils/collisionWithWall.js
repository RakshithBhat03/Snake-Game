import { GAME_END, RANDOM_KEY, RESET_GRID } from "../constants/constants";

export const collisionWithWall = (grid, dispatch) => {
  const { totalColumns, totalRows, snakePosition } = grid;
  const { positionX, positionY } = snakePosition[snakePosition.length - 1];
  if (
    positionX > totalColumns ||
    positionX < 1 ||
    positionY > totalRows ||
    positionY < 1
  ) {
    dispatch({ type: GAME_END });
  }
};
