function pyramid(char, rows, inverted) {
    let result = "\n"; // Ensure it starts with a newline
    
    if (!inverted) {
        // Normal pyramid (vertex up)
        for (let i = 0; i < rows; i++) {
            let pattern = char.repeat(2 * i + 1);
            let spaces = " ".repeat(rows - i - 1);
            result += spaces + pattern + "\n";
        }
    } else {
        // Inverted pyramid (vertex down)
        for (let i = rows - 1; i >= 0; i--) {
            let pattern = char.repeat(2 * i + 1);
            let spaces = " ".repeat(rows - i - 1);
            result += spaces + pattern + "\n";
        }
    }
    
    return result; // Ensure it ends with a newline
}

// Example usage
console.log(pyramid("o", 4, false)); // Normal pyramid
console.log(pyramid("p", 5, true));  // Inverted pyramid