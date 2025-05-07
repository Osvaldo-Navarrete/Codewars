// Piedra, papel o tijera aleatorio ------ primera versión

const arr1 = ["scissors", "paper", "rock"];
const arr2 = ["scissors", "paper", "rock"];

const rps = (p1, p2) => {
  let randomSelect1 = Math.floor(Math.random() * p1.length);
  let randomSelect2 = Math.floor(Math.random() * p2.length);

  let element1 = p1[randomSelect1];
  let element2 = p2[randomSelect2];

  console.log("Player 1: " + element1)
  console.log("Player 2: " + element2)

  if (element1 === element2) {
    console.log(`"${element1}", "${element2}" --> "Draw!"`)
  } else if ((element1 === "rock" && element2 === "scissors") || (element1 === "scissors" && element2 === "paper") || (element1 === "paper" && element2 === "rock")) {
    console.log(`"${element1}", "${element2}" --> "Player 1 won!"`);
  } else {
    console.log(`"${element1}", "${element2}" --> "Player 2 won!"`);
  }
  return
};


rps(arr1, arr2);


// Piedra, papel o tijera aleatorio ------ segunda versión


function rps(){
  
  const choices = ["scissors", "paper", "rock"];
  let randomSelect1 = Math.floor(Math.random() * choices.length);
  let randomSelect2 = Math.floor(Math.random() * choices.length);

  let element1 = choices[randomSelect1];
  let element2 = choices[randomSelect2];

  console.log("Player 1: " + element1)
  console.log("Player 2: " + element2)

  if (element1 === element2) {
    console.log(`"${element1}", "${element2}" --> "Draw!"`)
  } else if ((element1 === "rock" && element2 === "scissors") || (element1 === "scissors" && element2 === "paper") || (element1 === "paper" && element2 === "rock")) {
    console.log(`"${element1}", "${element2}" --> "Player 1 won!"`);
  } else {
    console.log(`"${element1}", "${element2}" --> "Player 2 won!"`);
  }
  return
};


rps();


// Piedra, papel o tijera aleatorio ------ tercera versión (de codewars)

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};