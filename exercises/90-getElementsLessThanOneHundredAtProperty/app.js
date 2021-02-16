// Write your function here
function getElementsLessThan100AtProperty() {
    let outPutArray = [];
    if (obj.key.length === 0 || Array.isArray(obj.key) === false || !("key" in obj) === true || obj.key.some(el => el < 100) === false) {
        return [];
    }
    else {
        for (key in obj) {
            for (val in obj[key]) {
                if (obj[key][val] < 100) {
                    outPutArray.push(obj[key][val]);
                }
            }
        }
    }
    return outPutArray
}
var obj = {
    key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);