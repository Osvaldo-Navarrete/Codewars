
function removeEveryOther(arr) {
    console.log(arr.filter((num, index) => index % 2 === 0));
}

removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"]);