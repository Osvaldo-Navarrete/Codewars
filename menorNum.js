
function findSmallestInt(arr) {
    return arr.reduce((min, current) => {
        return current < min ? current : min;
    }, arr[0]);
}

console.log(findSmallestInt([34, 15, 88, 2]))