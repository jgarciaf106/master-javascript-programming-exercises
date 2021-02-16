// Write your function here
function getAllElementsButNth(inputArray,nth){
    let outputArray = inputArray.slice(); //make a copy
    outputArray.splice(nth, 1);
    return outputArray;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output);