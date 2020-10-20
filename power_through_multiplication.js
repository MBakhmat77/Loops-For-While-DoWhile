//Without using the exponentiation operation, raise the number a to the power n.
//Write a function named power that takes the numbers a and n as arguments and returns the value of a to the power 
//of n (a and n are non-negative integers). Use a for loop in your solution. 
//The exponentiation operation and methods of the Math object cannot be used in this task
function power(a, n){
 let mult = 1;
 for ( let i = 1; i <= n; i++){
 mult = mult * a;
 }
return mult;
}
