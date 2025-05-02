const number = (busStops) => {
    let cifra = 0; 
    busStops.forEach(element => {
    cifra += element[0] - element[1]
    });
    return cifra
}

console.log(number([[10,0],[3,5],[5,8]]))