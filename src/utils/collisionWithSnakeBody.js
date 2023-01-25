import { GAME_END, RANDOM_KEY, RESET_GRID } from "../constants/constants";

export const collisionWithSnakeBody = (grid, dispatch, setPreviousKey) => {
  const { totalColumns, totalRows, snakePosition } = grid;
  const headPosition = snakePosition[snakePosition.length - 1];
  const snakeBody = [...snakePosition.slice(0, snakePosition.length - 1)];
  if (
    snakeBody.some(
      (snake) =>
        snake.positionX === headPosition.positionX &&
        snake.positionY === headPosition.positionY
    )
  ) {
    dispatch({ type: GAME_END });
  }
};
