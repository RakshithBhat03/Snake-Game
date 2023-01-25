import {
  ARROWDOWN,
  ARROWLEFT,
  ARROWRIGHT,
  ARROWUP,
  GAME_END,
  GROW_SNAKE,
  RANDOM_FOOD_POSITION,
  RESET_GRID,
  SHOWFOOD,
  START_GAME,
  UPDATE_SCORE,
} from "../constants/constants";
import { initialState } from "../context/snake-context";
import { getRandomGridPosition } from "../utils/getRandomPositionOnGrid";

export const SnakeReducer = (state, { type, payload }) => {
  const { snakePosition, totalColumns, totalRows, foodPosition } = state;
  let clippedSnake = [...snakePosition];
  let headPosition = clippedSnake[clippedSnake.length - 1];
  clippedSnake.shift();
  switch (type) {
    case ARROWUP:
      if (headPosition.positionY < 1) {
        return {
          ...state,
          gameEnd: true,
        };
      } else {
        return {
          ...state,
          snakePosition: [
            ...clippedSnake,
            { ...headPosition, positionY: headPosition.positionY - 1 },
          ],
        };
      }
    case ARROWDOWN:
      if (headPosition.positionY > totalRows + 1) {
        return { ...state, gameEnd: true };
      } else {
        return {
          ...state,
          snakePosition: [
            ...clippedSnake,
            {
              ...headPosition,
              positionY: headPosition.positionY + 1,
            },
          ],
        };
      }
    case ARROWLEFT:
      if (headPosition.positionX < 1) {
        return { ...state, gameEnd: true };
      } else {
        return {
          ...state,
          snakePosition: [
            ...clippedSnake,
            {
              ...headPosition,
              positionX: headPosition.positionX - 1,
            },
          ],
        };
      }
    case ARROWRIGHT:
      if (headPosition.positionX === totalColumns) {
        return { ...state, gameEnd: true };
      } else {
        return {
          ...state,
          snakePosition: [
            ...clippedSnake,
            { ...headPosition, positionX: headPosition.positionX + 1 },
          ],
        };
      }

    case RESET_GRID:
      return { ...state, ...initialState };

    case GAME_END:
      return { ...state, gameEnd: true, gameStarted: false };

    case GROW_SNAKE:
      return {
        ...state,
        snakePosition: [{ ...foodPosition }, ...snakePosition],
      };
    case START_GAME:
      return {
        ...state,
        gameStarted: true,
        gameEnd: false,
        showStartMenu: false,
      };

    case UPDATE_SCORE:
      return { ...state, score: state.score + 1 };

    case RANDOM_FOOD_POSITION:
      return {
        ...state,
        foodPosition: {
          ...getRandomGridPosition(state.totalColumns, state.totalRows),
        },
        showFood: true,
      };
    case SHOWFOOD:
      return { ...state, showFood: true };

    default:
      return { ...state };
  }
};
