// Esta función devuelve el nuevo status de la célula
// Revisa las coordenadas de cada uno de sus vecinos
// Cuenta cuántos están vivos
// Analiza si la célula se queda viva o muerta
// Devuélve la célula nueva

// - Si tiene menos de 2 células contiguas vivas, muere por "soledad".
//   - Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
//   - Si tiene 2 o 3 células contiguas vivas, sobrevive.
// - Una célula muerta sigue la siguiente regla: Permanece muerta hasta que tiene exactamente 3 células contiguas vivas, momento en el que "nace".

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

  if (aliveParentsCounter === 2 || aliveParentsCounter === 3) {
    newCellStatus = 1;
  } else {
    newCellStatus = 0;
  }

  return newCellStatus;
};
