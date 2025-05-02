function pyramid(pattern, rows, bool) {
  let letra = pattern;

  if (rows <= 0) {
    console.log("No valido");
  }

  if (bool === false) {
    for (let i = 1; i <= rows; i++) {
      let fila = "";
      let espacio = ' '.repeat(rows - i);
      let digit = letra.repeat(2 * i - 1);
      fila = espacio + digit;
      console.log(fila);
    }
  }
  if (bool === true) {
    for (let i = rows; i >= 1; i--) {
      let fila = "";
      let espacio = ' '.repeat(rows - i);
      let digit = letra.repeat(2 * i - 1);
      fila = espacio + digit;
      console.log(fila);
    }
  }
}
pyramid("O", 4, false);
pyramid("0", 4, true);   