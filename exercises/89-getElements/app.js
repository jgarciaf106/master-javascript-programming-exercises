// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    let outPutArray = [];
    if(obj.key.length === 0 || Array.isArray(obj.key) === false || !("key" in obj) === true || obj.key.includes(10) ===  false){
        return [];
    }
    else{
        for(key in obj){
            for(val in obj[key]){
                if(obj[key][val] === 10){
                    outPutArray.push(obj[key][val]);
                }          
            }            
        }
    }
    return outPutArray
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); 