const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
  };
  
  let propertyName = "city";
  console.log(person[propertyName]);
  
  // Función para agregar múltiples propiedades
  function addProperty(property, value) {
    person[property] = value;
    console.log(`Propiedad agregada: ${property} = ${value}`);
    console.log(person);
  }
  
  // Interactividad para agregar propiedades
  while (true) {
    let newProperty = prompt("Ingresa el nombre de la propiedad (o escribe 'salir' para terminar):");
    if (newProperty.toLowerCase() === "salir") break;
    
    let newValue = prompt(`Ingresa el valor para la propiedad "${newProperty}":`);
    addProperty(newProperty, newValue);
  }
  
  console.log("Objeto final:", person);
  