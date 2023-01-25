import { useContext, createContext, useReducer } from "react";
import { ARROWRIGHT, INITIALSNAKEPOSITION } from "../constants/constants";
import { SnakeReducer } from "../reducers/SnakeReducer";
import { getRandomGridPosition } from "../utils/getRandomPositionOnGrid";
export const initialState = {
  totalColumns: 30,
  totalRows: 20,
  headPosition: 5,
  tailPosition: 0,
  snakePosition: INITIALSNAKEPOSITION,
  initialKeyPressed: ARROWRIGHT,
  gameEnd: false,
  gameStarted: false,
  showFood: true,
  foodPosition: {
    ...getRandomGridPosition(30, 20),
  },
  score: 0,
  showStartMenu: true,
};
const SnakeContext = createContext(initialState);
export const SnakeProvider = ({ children }) => {
  const [grid, dispatch] = useReducer(SnakeReducer, initialState);
  return (
    <SnakeContext.Provider value={{ grid, dispatch }}>
      {children}
    </SnakeContext.Provider>
  );
};
export const useSnake = () => useContext(SnakeContext);
