export const Snake = ({ position }) => {
  const { positionY, positionX } = position;
  const gridVariants = {
    gridColumnStart: positionX,
    gridRowStart: positionY,
  };
  return (
    <div
      style={gridVariants}
      className={`col-start-20 row-start-1 bg-rose-500 border`}></div>
  );
};
