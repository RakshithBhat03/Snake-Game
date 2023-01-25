import { useSnake } from "../../context/snake-context";
import { usePreviousKey } from "../../context/previousKey-context";
import { Snake } from "../Snake/Snake";
import useInterval from "../../hooks/useInterval";
import { collisionWithWall } from "../../utils/collisionWithWall";
import { Food } from "../Food/Food";
import { willSnakeEatFood } from "../../utils/willSnakeEatFood";
import { ARROWRIGHT, RANDOM_FOOD_POSITION } from "../../constants/constants";
import { collisionWithSnakeBody } from "../../utils/collisionWithSnakeBody";
import { v4 as uuid } from "uuid";
import { StartMenu } from "../StartMenu/StartMenu";
import { EndScreen } from "../EndScreen/EndScreen";
import { Score } from "../Score/Score";
import { useEffect } from "react";
export const GameBoard = () => {
  const { grid, dispatch } = useSnake();
  const { previousKey, setPreviousKey } = usePreviousKey();
  const {
    snakePosition,
    foodPosition,
    gameEnd,
    showFood,
    gameStarted,
    showStartMenu,
  } = grid;
  const gridConfig = {
    gridTemplateRows: `repeat(${grid.totalRows},1fr)`,
    gridTemplateColumns: `repeat(${grid.totalColumns},1fr)`,
  };
  useInterval(
    () => {
      dispatch({ type: previousKey });
      willSnakeEatFood(grid, dispatch, previousKey);
      collisionWithWall(grid, dispatch);
      collisionWithSnakeBody(grid, dispatch, setPreviousKey);
    },
    !gameStarted ? null : 200
  );
  useInterval(
    () => {
      dispatch({ type: RANDOM_FOOD_POSITION });
    },
    !gameStarted ? null : showFood ? 50000 : null
  );
  useEffect(() => {
    if (gameEnd) {
      setPreviousKey(ARROWRIGHT);
    }
  }, [gameEnd]);

  return (
    <main className="h-[65%] w-[95%] md:w-[45%] lg:[w-40%] xl:[w-35%] rounded-lg mt-24 relative mx-8 ">
      <div className="absolute -top-8 w-full">{<Score />}</div>
      <div
        className="grid w-full bg-kimberly-700 rounded-lg h-full overflow-hidden game-board"
        style={gridConfig}>
        {snakePosition.map((snakePos) => (
          <Snake key={uuid()} position={snakePos} />
        ))}
        {<Food position={foodPosition} />}
        {showStartMenu && <StartMenu />}
        {gameEnd && <EndScreen />}
      </div>
    </main>
  );
};
