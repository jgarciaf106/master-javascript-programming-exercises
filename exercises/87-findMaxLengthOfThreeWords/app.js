// Write your function here
function findMaxLengthOfThreeWords(str1, str2, str3){
    let wordArray = [str1, str2, str3];
    let lengthArray = [];
    for(str in wordArray){
        lengthArray.push(wordArray[str].length);
    }

    return Math.max.apply(Math,lengthArray);
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);