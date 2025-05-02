function getAverage(numbers) {
  let suma = 0;
  let promedio;
  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  promedio = suma / numbers.length;
  return promedio;
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

function getGrade(studentScore) {
  if (studentScore == 100) return 'A+'
  if (studentScore >= 90) return 'A';
  if (studentScore >= 80) return 'B';
  if (studentScore >= 70) return 'C';
  if (studentScore >= 60) return 'D';
  return 'F'; // Below 60 is a failing grade
}
console.log(getGrade(100))

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== 'F';
}
console.log(hasPassingGrade(100));

function studentMsg(numbers, studentScore) {
  let promedio = getAverage(numbers);
  let grade = getGrade(studentScore);

  if (grade !== "F") {
    return `Class average: ${promedio}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${promedio}. Your grade: ${grade}. You failed the course.`;
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100)); 





// function getGrade(num1, num2, num3){
//   let suma = 0; 
//   let promedio; 
//   suma = num1 + num2 + num3; 
//   promedio = suma / 3; 
//   promedio.toFixed(); 

//     if (promedio >= 90) return 'A';
//     if (promedio >= 80) return 'B';
//     if (promedio >= 70) return 'C';
//     if (promedio >= 60) return 'D';
//     return 'F'; // Below 60 is a failing grade
// }

// console.log(getGrade(100, 90, 60)); 