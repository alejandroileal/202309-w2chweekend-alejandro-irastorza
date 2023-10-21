const testArray = [
  [0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 1],
];

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

console.log(aliveChecker(testArray));
