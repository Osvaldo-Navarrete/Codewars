// function testEven(n) {
//     return n % 2 === 0 ? true : false;
// }

// console.log(testEven(10))

function oddOrEven(array) {
    return array.reduce((acc, num) => acc + num, 0) % 2 === 0 ? "even" : "odd";
}