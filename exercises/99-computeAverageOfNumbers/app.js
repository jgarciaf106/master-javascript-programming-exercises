// Write your function here
function computeAverageOfNumbers(inputArray){
    let avg = 0;
    for(val in inputArray){
        avg += inputArray[val];
    }
    return avg / inputArray.length;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);