function grow(x) {
  return x.reduce((acc, num) => acc * num)
}
console.log(grow([1, 2])) // 24