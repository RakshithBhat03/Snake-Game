export const getRandomGridPosition = (totalColumns, totalRows) => {
  const positionX = Math.floor(Math.random() * totalColumns) + 1;
  const positionY = Math.floor(Math.random() * totalRows) + 1;
  return { positionX, positionY };
};
