// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    let outPutArray = [];
    if (obj.key.length === 0 || Array.isArray(obj.key) === false || !("key" in obj) === true || obj.key.some(el => el > 10) === false) {
        return [];
    }
    else {
        for (key in obj) {
            for (val in obj[key]) {
                if (obj[key][val] > 10) {
                    outPutArray.push(obj[key][val]);
                }
            }
        }
    }
    return outPutArray
}
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);