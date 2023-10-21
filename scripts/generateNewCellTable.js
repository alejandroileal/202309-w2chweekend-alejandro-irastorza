export const generateNewCellTable = (rows, colums) => {
  const cellArray = [];
  for (let i = 0; i < colums; i++) {
    cellArray.push([]);
    for (let j = 0; j < rows; j++) {
      cellArray[i].push(Math.random() > 0.5 ? 1 : 0);
    }
  }

  return cellArray;
};
