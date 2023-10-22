// Generar la primer tabla
// Imprimir la primer tabla
// Recorrer el primer elemento de la primer tabla / sumar sus parientes / cambiar el valor en esa posición y colocarlo en un nuevo array
// CUANDO SE RECORRA TODO
// Imprimir el nuevo Array
// Recorrer el primer elemento del segundo array / sumar sus parientes / cambiar el valor en esa posición y colorcarlo en un nuevo Array

import { generateModifiedCellTable } from './generateModifiedCellTable.js';
import { generateNewCellTable } from './generateNewCellTable.js';
import { printCellsTable } from './printCellsTable.js';

const runLifeGame = () => {
  let firstroundSwitch = true;
  const finalRoundTimer = 10;
  let currentTable;
  let counter;
  counter = 0;

  const newLifeGameTurn = () => {
    if (counter <= finalRoundTimer) {
      counter++;

      if (firstroundSwitch === true) {
        currentTable = generateNewCellTable(3, 3);
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

runLifeGame();
