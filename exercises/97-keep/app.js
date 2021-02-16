// Write your function here
function keep(arr, el){
    let outputArray = [];
    if(arr.length === 0 || arr.every(function (e) { return e === el;})){
        return [];
    }
    else{
        for(val in arr){
            if(arr[val] == el){
                outputArray.push(arr[val]);
            }
        }
    }
    return outputArray;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);