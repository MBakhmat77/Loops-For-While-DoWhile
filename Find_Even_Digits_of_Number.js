
Even digits of a number.
A positive integer is given. Get an array of even digits of this number.

Write a function named evenDigits that takes n as an argument and returns an array of even digits.
If there are no such digits in the number, return an empty array. The use of string and array methods is prohibited.
Use a do while loop in your solution. The order of the digits in the array must match the order of the digits in the original number.

function evenDigits(n){
let arr = [];
let evenDigit = [];
 let i = 0;
  arr = Array.from(String(n), Number);
do{
  for (i;i<=arr.length;i++){
    if (arr[i] % 2 === 0 ){
    evenDigit.push(arr[i]);
    }
  }
}while (n > 0) ;
return evenDigit;
}
