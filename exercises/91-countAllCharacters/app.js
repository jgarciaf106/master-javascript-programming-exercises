// Write your function here
function countAllCharacters(str){
    let charCount = {};
    if (str.length === 0){
        return [];
    }
    else{
        for(char of str){
           charCount[char] = str.split(char).length - 1;
        }
    }
    return charCount;
}

var output = countAllCharacters('banana');
console.log(output); 