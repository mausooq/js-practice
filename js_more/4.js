// ### Array Filter with Callback:
// Write a function 'filterArray' that takes an array and a callback function as arguments. 'filterArray' should filter the elements of the array based on the condition specified by the callback function and return a new array with the filtered elements.

function filterArray(arr,callback){
    function xyz(element,index,array){
        if(callback(element)===true)
            return true;
        else
            return false
    }
    return arr.filter(xyz);
}
function isEven(element){
    if(element%2 === 0){
        return true;
    }
}

let arr=[1,2,3,4,5,6,7,8,9,10];
newArr = filterArray(arr,isEven);
console.log(newArr);