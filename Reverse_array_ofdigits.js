function arrayOfDigits(n){
let arr;
let num = 0;
let last = 0;
do{
last = n % 10;
num = num * 10 + last;
n = (n - last)/10;
 arr = Array.from(String(num), Number);
for ( let i = 0; i <= arr.length;i++){
if (arr[0] === 0 )
arr.shift();
}
}while (n > 0);
return arr;
}
