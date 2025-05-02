function digitize(n) {
    return String(n)
    .split('')
    .map(Number)
    .reverse();
  }
  console.log(digitize(102)); // [2, 0, 1]