import { useState, useContext, createContext } from "react";
import useKeyPress from "react-use-keypress";
import {
  ARROWDOWN,
  ARROWLEFT,
  ARROWRIGHT,
  ARROWUP,
} from "../constants/constants";
const PreviousKeyContext = createContext();
const PreviousKeyProvider = ({ children }) => {
  const [previousKey, setPreviousKey] = useState(ARROWRIGHT);
  useKeyPress([ARROWDOWN, ARROWLEFT, ARROWRIGHT, ARROWUP], (event) => {
    switch (event.key) {
      case ARROWUP:
        previousKey !== ARROWDOWN && setPreviousKey(ARROWUP);
        break;
      case ARROWDOWN:
        previousKey !== ARROWUP && setPreviousKey(ARROWDOWN);
        break;
      case ARROWLEFT:
        previousKey !== ARROWRIGHT && setPreviousKey(ARROWLEFT);
        break;
      case ARROWRIGHT:
        previousKey !== ARROWLEFT && setPreviousKey(ARROWRIGHT);
        break;
      default:
        break;
    }
  });
  return (
    <PreviousKeyContext.Provider value={{ previousKey, setPreviousKey }}>
      {children}
    </PreviousKeyContext.Provider>
  );
};
const usePreviousKey = () => useContext(PreviousKeyContext);
export { PreviousKeyProvider, usePreviousKey };
