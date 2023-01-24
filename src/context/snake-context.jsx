import { useContext, useState, createContext } from "react";
const initialState = {
  totalColumns: 30,
  totalRows: 20,
  headPosition: 5,
  tailPosition: 0,
  foodPositionX: 10,
  foodPositionY: 11,
};
const SnakeContext = createContext(initialState);
export const SnakeProvider = ({ children }) => {
  const [grid, setGrid] = useState(initialState);
  return (
    <SnakeContext.Provider value={{ grid, setGrid }}>
      {children}
    </SnakeContext.Provider>
  );
};
export const useSnake = () => useContext(SnakeContext);
