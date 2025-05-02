function solution(str, ending) {
    return str.lastIndexOf(ending) === str.length - ending.length;
}

console.log(solution('abcde', 'cde')) // true 
console.log(solution('abcde', 'abc')) // false