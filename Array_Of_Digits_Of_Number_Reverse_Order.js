// An array of digits of a number
// written in reverse order.
// A positive integer is given. 
// Get an array of its digits, 
//   written in reverse order (from the 
//                             last digit to the first).

// Write a function called arrayOfDigits 
// that takes the number n as an argument and returns an array of its digits in reverse order. It is forbidden to use the split, reverse methods.
// Use a do while loop in your solution.

function arrayOfDigits(n){
let arr;
let num = 0;
let last = 0;
do{
last = n % 10;
num = num * 10 + last;
n = (n - last )/10;
 arr = Array.from(String(num), Number);

}while (n > 0);
return last;
}
console.log(arrayOfDigits(1000));
