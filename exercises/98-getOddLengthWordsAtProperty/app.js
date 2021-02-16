// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    let outputArray = [];
    for(key in obj){
        for(str in obj[key]){
            if(obj[key][str].length % 2 !== 0){
               outputArray.push(obj[key][str]); 
            };
        }        
    }
    return outputArray;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);