
// Find a peak element which is not smaller than its neighbours

function maxnumber(a,n){
        if(n==1){
            console.log(a[0]);
        }
        if(a[0]>=a[1]){
            console.log(a[0]);
        }
        if(a[n-1]>=a[n-2]){
            console.log(n-1);
        }
        else{
            for(let i=1 ; i < n-1 ; i++){
                if(a[i]>=a[i-1] && a[i]>=a[i+1]){
                    console.log(a[i]);
                }
            }
        }
}
let a=[12,323,4,23,23,42,11,5,222,43];
let n=a.length;
maxnumber(a,n);
