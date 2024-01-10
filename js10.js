function reverseArray(a,n){
    for(let i=0;i<n;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
                if(a[j]<a[min]){
                    min=j;
                }
        }
        let temp=a[i];
        a[i]=a[min];
        a[min]=temp;
    }
    console.log(a);
}
let a=[12,323,4,23,23,42,11,5,222,43];
let n=a.length;
reverseArray(a,n);