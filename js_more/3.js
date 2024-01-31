// ### Array Map with Callback:
// - Implement a function 'mapArray' that takes an array and a callback function as arguments. 'mapArray' should apply the callback function to each element of
// the array and return a new array with the modified values.

function changes(a){
   return a*2;
}
function mapArray(arr,callback){
    let result = [];
    for (let i=0;i< arr.length ;i++){
        result[i] = callback(arr[i]);
    }
    return result
}
let arr=[1,2,3];
var res=mapArray(arr,changes)
console.log(res);  