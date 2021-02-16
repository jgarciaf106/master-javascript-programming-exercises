// Write your function here
function areValidCredentials(username, password){
    if(username.length > 3 && password.length > 8){
        return true;
    }
    else{
        return false;
    }
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);