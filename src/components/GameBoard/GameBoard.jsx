import { useSnake } from "../../context/snake-context";
import { Box } from "../Box/Box";
export const GameBoard = () => {
  const { grid } = useSnake();
  console.log(grid);
  return (
    <div className="flex border h-fit flex-col">
      {[...Array(grid.totalRows)].map((row, postionX) => (
        <div key={postionX} className="flex">
          {[...Array(grid.totalColumns)].map((col, postionY) => (
            <Box currentPosition={{ postionX, postionY }} />
          ))}
        </div>
      ))}
    </div>
  );
};
