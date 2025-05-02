function generatePassword(num) {
    //Se crea una variable dentro de la función que se llamará password y se inicializa como un string vacío.
    //Se crea una variable dentro de la función que se llamará digit y se inicializa como un string que contiene todos los caracteres que se pueden usar para generar la contraseña.
    let password = "";
    let digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  
    //Se creará un ciclo for que se ejecutará el numero de veces que se haya pasado como argumento a la función.
    //Dentro del ciclo for se generará un número aleatorio que será un índice de la variable digit y se almacenará en la variable indiceAleatorio.
    //Se concatenará a la variable password el caracter que se encuentre en el índice aleatorio de la variable digit.
    //Al final del ciclo for se retornará la variable password.
    for (let i = 0; i < num; i++) {
      let indiceAleatorio = Math.floor(Math.random() * digit.length);
      password += digit[indiceAleatorio];
    }
    return password;
  }
  //Se llama a la función generatePassword y se le pasa como argumento el número 10.
  //Se imprime en consola el resultado de la función generatePassword.
  let password = generatePassword(10);
  console.log(`Generated password: ${password}`);