// Esta función devuelve el nuevo status de la célula
// Revisa las coordenadas de cada uno de sus vecinos
// Cuenta cuántos están vivos
// Analiza si la célula se queda viva o muerta
// Devuélve la célula nueva

// - Si tiene menos de 2 células contiguas vivas, muere por "soledad".
//   - Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
//   - Si tiene 2 o 3 células contiguas vivas, sobrevive.
// - Una célula muerta sigue la siguiente regla: Permanece muerta hasta que tiene exactamente 3 células contiguas vivas, momento en el que "nace".

const mutateCell = (arrayToIterate, cellPositionX, cellPositionY) => {
  let newCellStatus;

  for (let x = 0; x < arrayToIterate.length; x++) {
    for (let y = 0; y < arrayToIterate[x].length; y++) {
      const aliveParentsCounter =
        arrayToIterat[cellPositionX - 1][cellPositionY - 1] +
        arrayToIterat[cellPositionX - 1][cellPositionY] +
        arrayToIterat[cellPositionX - 1][cellPositionY + 1] +
        arrayToIterat[cellPositionX][cellPositionY - 1] +
        arrayToIterat[cellPositionX][cellPositionY + 1] +
        arrayToIterat[cellPositionX + 1][cellPositionY - 1] +
        arrayToIterat[cellPositionX + 1][cellPositionY] +
        arrayToIterat[cellPositionX + 1][cellPositionY + 1];
    }
  }

  if (aliveParentsCounter < 2 || aliveParentsCounter > 3) {
    newCellStatus = 0;
  }

  return newCellStatus;
};
