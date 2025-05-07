function feast(beast, dish) {
    let beastFirstLetter = beast[0];
    let beastLastLetter = beast[beast.length - 1];
    let dishFirstLetter = dish[0];
    let dishLastLetter = dish[dish.length - 1];

    if (beastFirstLetter === dishFirstLetter && beastLastLetter === dishLastLetter) {
        return true;
    } else {
        return false;
    }
}

console.log(feast('great blue heron', 'garlic naan')) // true

//OTRO EJEMPLO DE LA MISMA FUNCION:
// function feast(beast, dish) {
// 	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }


//OTRO EJEMPLO DE LA MISMA FUNCION:
// function feast(beast, dish) {
//     return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1])
// }