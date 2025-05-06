function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
        return value1 + value2;
        case '-':
        return value1 - value2;
        case '*':
        return value1 * value2;
        case '/':
        return value1 / value2;
        default:
        throw new Error('Invalid operation');
    }
}

basicOp('+', 4, 7); // Expected output: 11
basicOp('-', 15, 18); // Expected output: -3