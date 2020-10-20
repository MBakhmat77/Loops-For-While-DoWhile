
Create an array of divisors
question
Given a number n> 0. Find all the divisors of this number. 
The divisor is the number by which the given number is evenly divisible.

Write a function called dividers that takes a number n and returns 
the divisors of that number as an array.
//////////////////////////////////////////////////////////
function dividers(n){
let arr =[];
let div = 1;
for ( let i = 1; i <= n; i++){
if ( n % i === 0){
arr.push(i);
}
}
return arr ;
}
