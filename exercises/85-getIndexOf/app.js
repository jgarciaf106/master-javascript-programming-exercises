// Write your function here
function getIndexOf(char, str){
    let counter = 0;
    for(let chr of str){
        counter += 1;
        if(chr === char){
            break;
        }
    }
    return counter - 1;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output);