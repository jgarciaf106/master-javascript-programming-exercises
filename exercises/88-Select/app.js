// Write your function here
function select(arr, obj){
    let newObj = {};
    for(key in obj){
        for(val in arr){
            if(key == arr[val]){
                newObj[key] = obj[key];
            }
        }   
    }
    return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);