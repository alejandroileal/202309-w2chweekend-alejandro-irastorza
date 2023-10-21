// Generar la primer tabla
// Imprimir la primer tabla
// Recorrer el primer elemento de la primer tabla / sumar sus parientes / cambiar el valor en esa posición y colocarlo en un nuevo array
// CUANDO SE RECORRA TODO
// Imprimir el nuevo Array
// Recorrer el primer elemento del segundo array / sumar sus parientes / cambiar el valor en esa posición y colorcarlo en un nuevo Array

import { generateNewCellTable } from './generateNewCellTable.js';
import { printCellsTable } from './printCellsTable.js';

let firstroundSwitch = true;
const finalRoundTimer = 100;
let currentTable;

if (firstroundSwitch === true) {
  currentTable = generateNewCellTable(3, 3);
  printCellsTable(currentTable);
  firstroundSwitch = false;
}

if (firstroundSwitch === false) {
  for (let i = 0; i < finalRoundTimer; i++) {
    currentTable = generateModifiedCellTable(currentTable);
    printCellsTable(currentTable);
  }
}
