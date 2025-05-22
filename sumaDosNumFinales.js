const sumFinales = (array) =>{
    let ordenados =  array.sort((a, b) => a - b);
    return ordenados[ordenados.length-1] + ordenados[ordenados.length -2]
}

console.log(sumFinales([2,4,5,3,11]))