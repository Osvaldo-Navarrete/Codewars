//USO DE PUSH PARA AGREGAR ELEMENTOS AL FINAL.
const lunches = [];

const addLunchToEnd = (lunches, item) => {
  lunches.push(item)
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches;
}
console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

//USO DE UNSHIFT PARA AGREGAR ELEMENTOS AL PRINCIPIO DEL ARRAY.
function addLunchToStart(lunches, item2) {
  lunches.unshift(item2);
  console.log(`${item2} added to the start of the lunch menu.`);
  return lunches;
}
console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));


//USO DE POP PARA ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY. 

const removeLastLunch = (lunches) => {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let item = lunches.pop();
    console.log(`${item} removed from the end of the lunch menu.`);
  }
  return lunches;
};

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));


//USO DE SHIFT PARA ELIMINAR EL PRIMER ELEMENTO DEL ARRAY. 
const removeFirstLunch = (lunches) => {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let item = lunches.shift();
    console.log(`${item} removed from the start of the lunch menu.`);
  }
  return lunches;
}

console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));


//RANDOM PICK
const getRandomLunch = (lunches) => {
  if (lunches.length == 0) {
    console.log("No lunches available.");
  } else {
    let randomNum = Math.floor(Math.random() * lunches.length);
    let randomElement = lunches[randomNum];
    console.log(`Randomly selected lunch: ${randomElement}`)
  }
  return lunches;
}
console.log(getRandomLunch(["Picsa", "Cerbesa", "Papas", "Poyo", "Jelatinas", "Cerial con leshe"]));

//Mostras elementos de menú
const showLunchMenu = (lunches) => {
  let [item1, item2, ...rest] = lunches;
  if (lunches.length == 0) {
    console.log("The menu is empty.");
  } else {
     console.log(`Menu items: ${item1}, ${item2}, ${rest.join(", ")}`);
  }
  return lunches;
}

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));

console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));  