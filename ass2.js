// "my name is abdul mausooq ""==> ['my','name','is','abdul','mausooq']

str="my name is abdul mausooq ";
let arr=[];
let strr='';
let j=0;
for(let i =0;i< str.length;i++){
   if(str[i]!=' '){
        strr+=str[i];
   }
   else{
   
    arr[j]=strr;
    j++;
    strr='';
   }
}
console.log(arr);

// OR
str2="my name is shakir";
function make(str2){
    return str2.split(" ");
}
ans=make(str2);
console.log(ans);

// ['my','name','is','abdul','mausooq']===>"my name is abdul mausooq "

array=['my','name','is','abdul','mausooq'];
str1='';
for(let k=0;k<array.length;k++){
    str1+=array[k];
    str1+=' ';
}
console.log(str1);

// OR
a=['my','name','is','abdul','mausooq'];
function makestr(ans2){
    return ans2.join(" ");
}
ans2=makestr(a);
console.log(ans2);