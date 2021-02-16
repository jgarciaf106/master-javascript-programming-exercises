// Write your function here
function getNthElementOfProperty(obj, key, el){
    if(obj.key.length === 0 || Array.isArray(obj.key) === false || !("key" in obj) === true){
        return undefined;
    }
    else{
        return obj.key[el];
    }
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output);