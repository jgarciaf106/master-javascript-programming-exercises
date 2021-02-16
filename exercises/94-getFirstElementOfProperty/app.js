// Write your function here
function getFirstElementOfProperty(obj, key){
    if(obj.key.length === 0 || Array.isArray(obj.key) === false || !("key" in obj) === true){
        return undefined;
    }
    else{
        return obj.key[0];
    }
}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output);