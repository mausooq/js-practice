// reverse array

function reverse(arr,start,end){
    while(start<end){
        let temp= arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    console.log(arr);

}

let arr=[1,2,3,4,5,6];
reverse(arr,0,arr.length-1)