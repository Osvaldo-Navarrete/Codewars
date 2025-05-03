function highAndLow(numbers) {
    const array = numbers.split(" ").sort((a, b) => a - b)
    let primero = Number(array[0])
    let segundo = Number(array[array.length - 1])
    return `${segundo} ${primero}`;
}

console.log(highAndLow("5 2 5 3"))