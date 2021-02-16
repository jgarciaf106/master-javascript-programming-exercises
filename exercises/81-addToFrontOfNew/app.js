// Write your function here
function addToFrontOfNew(inputArray, newValue){
    let outputArray = Array.from(inputArray);
    outputArray.unshift(newValue);
    return outputArray;    
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input); 