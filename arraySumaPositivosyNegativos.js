// Description: Given an array of integers, return an array with the count of positives numbers and the sum of negative numbers.
// If the input array is empty or null, return an empty array.


// function countPositivesSumNegatives(input) {
//     if (input.length === null || input.length === 0) {
//         return [];
//     } else {
//         let arr = [];

//         let countPositives = input.filter((num) => num > 0).length;
//         let sumNegatives = input.filter((num) => num < 0).reduce((acc, num) => acc + num, 0);
//         arr.push(countPositives, sumNegatives);
//         return arr;
//     }

// }

// console.log(countPositivesSumNegatives([null]))

// Description: Given an array of integers, return an array with the count of positives numbers and the sum of negative numbers.
// If the input array is empty or null, return an empty array.


function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    } else {
        let arr = [];

        let countPositives = input.filter((num) => num > 0).length;
        let sumNegatives = input.filter((num) => num < 0).reduce((acc, num) => acc + num, 0);
        arr.push(countPositives, sumNegatives);
        return arr;
    }

}

console.log(countPositivesSumNegatives([null]))