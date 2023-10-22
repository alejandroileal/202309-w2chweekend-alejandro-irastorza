export const aliveChecker = (tableToCheck) => {
  for (let x = 0; x < tableToCheck.length; x++) {
    for (let y = 0; y < tableToCheck[x].length; y++) {
      const parentOne = tableToCheck[x - 1][y - 1];
      const parentTwo = tableToCheck[x - 1][y];
      const parentThree = tableToCheck[x - 1][y + 1];
      const parentFour = tableToCheck[x][y - 1];
      const parentFive = tableToCheck[x][y + 1];
      const parentSix = tableToCheck[x - 1][y - 1];
      const parentSeven = tableToCheck[x - 1][y];
      const parentEight = tableToCheck[x - 1][y + 1];
      const aliveParentCounter =
        parentOne +
        parentTwo +
        parentThree +
        parentFour +
        parentFive +
        parentSix +
        parentSeven +
        parentEight;

      console.log(parentOne, parentTwo);

      return aliveParentCounter;
    }
  }
};

export const generateModifiedCellTable = (tableToModify) => {
  const newTable = [...tableToModify];

  for (let x = 0; x < tableToModify.length; x++) {
    for (let y = 0; y < tableToModify[x].length; y++) {
      newTable[x][y] = mutateCell(tableToModify, x, y);
    }
  }

  return newTable;
};

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

export const printCellsTable = (tableToPrint) => console.table(tableToPrint);

export const mutateCell = (arrayToIterate, cellPositionX, cellPositionY) => {
  let newCellStatus;
  let aliveParentsCounter = 0;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      try {
        if (arrayToIterate[cellPositionX + x][cellPositionY + y] > 0) {
          aliveParentsCounter++;
        }
      } catch (error) {}
    }
  }

  if (arrayToIterate[cellPositionX][cellPositionY] > 0) {
    aliveParentsCounter--;
  }

  if (aliveParentsCounter > 3 || aliveParentsCounter < 2) {
    newCellStatus = 0;
  } else {
    newCellStatus = 1;
  }

  return newCellStatus;
};

export const runLifeGame = () => {
  let firstroundSwitch = true;
  const finalRoundTimer = 30;
  let currentTable;
  let counter;
  counter = 0;

  const newLifeGameTurn = () => {
    if (counter <= finalRoundTimer) {
      counter++;

      if (firstroundSwitch === true) {
        currentTable = generateNewCellTable(10, 10);
        printCellsTable(currentTable);
        firstroundSwitch = false;
        setTimeout(newLifeGameTurn, 2000);
      }

      if (firstroundSwitch === false && counter > 1) {
        currentTable = generateModifiedCellTable(currentTable);
        printCellsTable(currentTable);
        setTimeout(newLifeGameTurn, 2000);
      }
    }
  };

  newLifeGameTurn();
};
