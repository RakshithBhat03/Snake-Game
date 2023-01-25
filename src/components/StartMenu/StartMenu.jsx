import { START_GAME } from "../../constants/constants";
import { useSnake } from "../../context/snake-context";

export const StartMenu = () => {
  const { dispatch } = useSnake();
  return (
    <div className="absolute inset-0 bg-kimberly-900 opacity-80 flex items-center justify-center rounded-lg">
      <div className="">
        <button
          onClick={() => dispatch({ type: START_GAME })}
          className="px-4 py-2 bg-white flex text-2xl rounded-md">
          Start
        </button>
      </div>
    </div>
  );
};
