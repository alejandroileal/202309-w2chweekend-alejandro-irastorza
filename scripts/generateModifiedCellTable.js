// Declaramos un array clonado del original para después reemplazar los elementos con los nuevos
// Recorremos el Array que pusimos de parámetro / por cada posición analizamos los vecinos y sumamos aquellos que estén en 1 dentro de un acumulador /

export const generateModifiedCellTable = (tableToModify) => {
  const newTable = [...tableToModify];

  for (let x = 0; x < tableToModify.length; x++) {
    for (let y = 0; y < tableToModify[x].length; y++) {
      newTable[x][y] = mutateCell(tableToModify[x][y]);
    }
  }

  return newTable;
};

// En esta función necesito integrar el proceso que hará que el array se modifique y lo regresará modificado.
