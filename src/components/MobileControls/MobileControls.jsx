import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import {
  ARROWDOWN,
  ARROWLEFT,
  ARROWRIGHT,
  ARROWUP,
} from "../../constants/constants";
import { usePreviousKey } from "../../context/previousKey-context";
export const MobileControls = () => {
  const { previousKey, setPreviousKey } = usePreviousKey();
  return (
    <div className="flex visible md:hidden bottom-0 fixed w-full justify-evenly">
      <button
        onClick={() => previousKey !== ARROWRIGHT && setPreviousKey(ARROWLEFT)}
        className="bg-kimberly-700 text-white rouded-md w-full border h-12">
        <WestIcon />
      </button>
      <button
        onClick={() => previousKey !== ARROWDOWN && setPreviousKey(ARROWUP)}
        className="bg-kimberly-700 text-white rouded-md w-full border h-12">
        <NorthIcon />
      </button>
      <button
        onClick={() => previousKey !== ARROWUP && setPreviousKey(ARROWDOWN)}
        className="bg-kimberly-700 text-white rouded-md w-full border h-12">
        <SouthIcon />
      </button>
      <button
        onClick={() => previousKey !== ARROWLEFT && setPreviousKey(ARROWRIGHT)}
        className="bg-kimberly-700 text-white rouded-md w-full border h-12">
        <EastIcon />
      </button>
    </div>
  );
};
