let arr = [100, 40, 34, 57, 29, 72, 57, 88]; 

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints;
}


console.log(betterThanAverage(arr, 50))