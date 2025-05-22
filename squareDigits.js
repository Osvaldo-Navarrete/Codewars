function squareDigits(num) {
    let digit = num.toString().split('').map(n => n * n).join('');
    return Number(digit)
}