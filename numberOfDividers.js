
//question
//Given a number n> 0. Find the number of divisors of this number. 
//The divisor is the number by which the given number is evenly divisible.

//Write a function named numberOfDividers that takes a number n and
//returns the number of divisors of that number.
////////////////////////////////////////////////////////
function numberOfDividers(n){
let count = 0;
for ( let i = 1; i <= n; i++){
if (n % i === 0){ 
count++;
}
}
return count;
}
