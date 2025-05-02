let num = 5; 

function factorialCalculator(number){
  let result = 1; 
  for(let i = result; i <= number; i++){
    console.log(result = result*i); 
    }
    return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
