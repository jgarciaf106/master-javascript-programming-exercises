function isOldEnoughToVote(age) {
  // your code here
  if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}
var output = isOldEnoughToVote(22);
console.log(output);