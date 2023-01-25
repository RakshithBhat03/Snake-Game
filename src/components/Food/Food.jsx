export const Food = ({ position }) => {
  const { positionY, positionX } = position;
  return (
    <div
      style={{ gridColumnStart: positionX, gridRowStart: positionY }}
      className={`col-start-20 row-start-1 bg-yellow-500 border`}></div>
  );
};
