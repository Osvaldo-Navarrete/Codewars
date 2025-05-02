const inventory = [];

function findProductIndex(product) {
  let producto = product.toLowerCase()
  for (let prod of inventory) {
    if (prod.name === producto) {
      let resultado = inventory.indexOf(prod);
      return resultado;
    }
  } return -1
}

// console.log(findProductIndex("fluor"))
// console.log(findProductIndex("Flour")) 

function addProduct(item) {
  //Variables para definir el producto y buscar la existencia del producto similar en el array.
  let producto = item.name.toLowerCase();
  let prodExistencia = inventory.find(prod => prod.name.toLowerCase() === producto);

  //Si existe el producto, este actualizará el valor de su propiedad "cantidad/quantity"
  //Si no, se crea una variable que defina un nuevo producto, 
  //se le asignará con push sus valores a las propiedades
  if (prodExistencia) {
    prodExistencia.quantity += item.quantity;
    console.log(`${prodExistencia.name} quantity updated`);

  } else {
    let nuevoProducto = { name: producto, quantity: item.quantity };
    inventory.push(nuevoProducto);
    console.log(`${nuevoProducto.name} added to inventory`);
  }
}

//Se agregan con la función Addproduct los productos al inventario
addProduct({ name: "FLOUR", quantity: 20 });
addProduct({ name: "MAIZ", quantity: 5 });


console.log(inventory);

function removeProduct(productName, cantidad) {
  let producto = productName.toLowerCase(); // Convertimos a minúsculas

  //.findIndex() busca en el array inventory el primer elemento que cumpla la condición dada en el callback (la función dentro de findIndex).
  // Si encuentra un elemento que cumple la condición, devuelve su índice dentro del array.
  // Si no lo encuentra, devuelve -1.
  let index = inventory.findIndex(prod => prod.name.toLowerCase() === producto);

  //Si no se encuentra el producto, se imprime un mensaje de que no se encontró el producto.
  if (index === -1) {
    console.log(`${producto} not found`);
    return;
  }
  //Si encuentra, se almacena en la variable prod el producto encontrado en el índice index.
  let prod = inventory[index];

  //Si la cantidad de producto es mayor o igual a la cantidad que se quiere remover, se resta la cantidad a la propiedad quantity del producto.
  //Si la cantidad de producto es igual a 0, se elimina el producto del inventario.
  if (prod.quantity >= cantidad) {
    prod.quantity -= cantidad;

    if (prod.quantity === 0) {
      inventory.splice(index, 1);
      console.log(`${producto} removed from inventory`);
    } else {
      console.log(`Remaining ${producto} pieces: ${prod.quantity}`);
    }
  } else {
    console.log(`Not enough ${producto} available, remaining pieces: ${prod.quantity}`);
  }
}

removeProduct("FLOUR", 20); 
