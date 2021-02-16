// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
    let sum = 0;

    if (obj.key.length === 0 || Array.isArray(obj.key) === false || !("key" in obj) === true) {
        return 0;
    }
    else {
        for (num in obj.key) {
            sum = sum + obj.key[num];
        }
        return sum / obj.key.length;
    }

}
var obj = {
    key: [1, 2, 3]
};

var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);