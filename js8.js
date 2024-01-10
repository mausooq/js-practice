//find minmum and maximum in array

function MaxMin(arr){
    arr.sort(function(a, b){return a - b});
    console.log("minmum : " +arr[0]+ " maximum : "+arr[arr.length-1]);
}

let arr=[12,323,4,23,23,42,11,5,222,43];
MaxMin(arr);
