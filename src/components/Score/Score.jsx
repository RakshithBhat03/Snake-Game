import { useSnake } from "../../context/snake-context";

export const Score = () => {
  const {
    grid: { score },
  } = useSnake();
  return (
    <div className="w-full flex justify-between px-2">
      <div className="text-xl ">Score : {score}</div>
      <div className="text-xl ">High score : 99</div>
    </div>
  );
};
