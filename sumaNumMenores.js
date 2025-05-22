function sumTwoSmallestNumbers(numbers) {
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
    // Return the sum of the first two elements
    return numbers[0] + numbers[1];
  }