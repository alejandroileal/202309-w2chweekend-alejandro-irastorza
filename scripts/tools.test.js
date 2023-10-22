import {
  generateNewCellTable,
  printCellsTable,
  aliveChecker,
  mutateCell,
  generateModifiedCellTable,
  runLifeGame,
} from './tools';

describe('Print the array [1, 2, 3]', () => {
  describe('When the argument is [1, 2, 3]', () => {
    test('The result should be undefined', () => {
      const n = [1, 2, 3];
      const expected = undefined;
      const result = printCellsTable(n);
      expect(result).toBe(expected);
    });
  });
});

describe('Cell dying cases', () => {
  describe('When the arguments are [[0, 0, 0], [1, 1, 0], [0, 0, 0]], 1, 1', () => {
    test('The result should be 0', () => {
      const n = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 0, 0],
      ];

      const expected = 0;

      const result = mutateCell(n, 1, 1);

      expect(result).toBe(expected);
    });
  });

  describe('When the arguments are [[0, 0, 0], [0, 1, 0], [0, 0, 0]]', () => {
    test('The result should be 0', () => {
      const n = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];

      const expected = 0;

      const result = mutateCell(n, 1, 1);

      expect(result).toBe(expected);
    });
  });

  describe('When the arguments are [[1, 0, 1], [1, 1, 0], [0, 0, 1]], 1, 1', () => {
    test('The result should be 0', () => {
      const n = [
        [1, 0, 1],
        [1, 1, 0],
        [0, 0, 1],
      ];

      const expected = 0;

      const result = mutateCell(n, 1, 1);

      expect(result).toBe(expected);
    });
  });
});

describe('Cell survival cases', () => {
  describe('When the argument is [[0,0,0], [1,1,0], [1,0,0]]', () => {
    test('The result shoud be 1', () => {
      const n = [
        [0, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
      ];
      const expected = 1;

      const result = mutateCell(n, 1, 1);
    });
  });

  describe('When the argument is [[1,0,1],[0,1,0],[0,0,1]], 1, 1', () => {
    test('The result should be 1', () => {
      const n = [
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 1],
      ];

      const expected = 1;

      const result = mutateCell(n, 1, 1);
    });
  });
});

describe('Cell birth case', () => {
  describe('When the argument is [[0,0,1],[1,0,0],[1,0,0]], 1, 1', () => {
    test('The result should be 1', () => {
      const n = [
        [0, 0, 1],
        [1, 0, 0],
        [1, 0, 0],
      ];

      const expected = 1;

      const result = mutateCell(n, 1, 1);

      expect(result).toBe(expected);
    });
  });
});
