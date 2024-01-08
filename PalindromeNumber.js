/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let sum=0,temp,rev;
    temp=x;
    while(x>0){
        rev = x % 10;
        sum = (sum * 10)+ rev;
        x = Math.floor(x / 10);
    }
    if(temp==sum){
        return true;
    }
    else{
        return false;
    }
}
let d=isPalindrome(121);
console.log(d);