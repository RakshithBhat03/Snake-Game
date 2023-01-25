export const highlightBox = ({ grid, currentPosition }, type) => {
  const { foodPositionX, foodPositionY } = grid;
  const { postionX, postionY } = currentPosition;

  switch (type) {
    case "SNAKE":
      break;
    case "FOOD":
      if (foodPositionX === postionX && foodPositionY === postionY)
        return { highlight: true, color: "yellow" };
      else {
        return { highlight: false, color: "white" };
      }
    default:
      return { highlight: false, color: "white" };
  }
};
