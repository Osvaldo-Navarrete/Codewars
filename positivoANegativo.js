//Con arrayyyyysssssssss
function invert(array) {    
    return array.map((num) => num * -1);
}
 
console.log(invert([0]))
console.log(invert([1, 2, 3, 4, 5, 6, 7, 8, 900]))




//Con enteros: 
function makeNegative(num) {
    return num > 0 ? num * -1 : num * 1; 
  }