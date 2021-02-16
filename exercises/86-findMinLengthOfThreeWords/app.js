// Write your function here
function findMinLengthOfThreeWords(str1, str2, str3){
    let wordArray = [str1, str2, str3];
    let lengthArray = [];
    for(str in wordArray){
        lengthArray.push(wordArray[str].length);
    }

    return Math.min.apply(Math,lengthArray);
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);