import { RESET_GRID, START_GAME } from "../../constants/constants";
import { useSnake } from "../../context/snake-context";

export const EndScreen = () => {
  const {
    grid: { score },
    dispatch,
  } = useSnake();
  const restartGame = () => {
    dispatch({ type: RESET_GRID });
    dispatch({ type: START_GAME });
  };
  return (
    <div className="absolute inset-0 bg-kimberly-900 opacity-80 flex items-center justify-center rounded-lg ">
      <div className="flex flex-col gap-2">
        <div className="text-2xl text-white flex items-center gap-1">
          <span>Your Score :</span>
          <span>{score}</span>
        </div>
        <div className="mx-auto">
          <button
            onClick={restartGame}
            className="px-4 py-2 bg-white flex text-xl rounded-md">
            Play again
          </button>
        </div>
      </div>
    </div>
  );
};
