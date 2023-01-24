import { useSnake } from "../../context/snake-context";
import { highlightBox } from "../../utils/highlightBox";

export const Box = ({ currentPosition }) => {
  const { grid } = useSnake();
  const { highlight, color } = highlightBox({ grid, currentPosition }, "FOOD");
  if (highlight) {
    return <div className="border bg-yellow-200 w-10 h-10"></div>;
  }
  return <div className="border w-10 h-10"></div>;
};
