function XO(str){
    // Convert the string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();
    
    // Count the occurrences of 'x' and 'o'
    const xCount = str.split('x').length - 1;
    const oCount = str.split('o').length - 1;
    
    // Return true if the counts are equal, false otherwise
    return xCount === oCount;
}