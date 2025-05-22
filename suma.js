function getSum(a, b) {
    let numbers = [];
    if (a == b) {
        return a;
    }
    if (a < b) {
        for (let i = a; i <= b; i++) {
            numbers.push(i);
        }
        return numbers.reduce((acc, curr) => acc + curr, 0);
    } else if (b < a) {
        for (let i = b; i <= a; i++) {
            numbers.push(i);
        }
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    return 0;
}

console.log(getSum(1, 2));