import {
  GROW_SNAKE,
  RANDOM_FOOD_POSITION,
  UPDATE_SCORE,
} from "../constants/constants";
export const willSnakeEatFood = (grid, dispatch) => {
  const { snakePosition, foodPosition } = grid;
  const headPosition = snakePosition[snakePosition.length - 1];
  if (
    foodPosition.positionX === headPosition.positionX &&
    foodPosition.positionY === headPosition.positionY
  ) {
    dispatch({ type: GROW_SNAKE });
    dispatch({ type: RANDOM_FOOD_POSITION });
    dispatch({ type: UPDATE_SCORE });
  }
};
