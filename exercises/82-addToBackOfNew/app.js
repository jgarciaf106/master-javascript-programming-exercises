// Write your function here
function addToBackOfNew(inputArray, newValue){
    let outputArray = Array.from(inputArray);
    outputArray.push(newValue);
    return outputArray;    
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(output);
console.log(input); 