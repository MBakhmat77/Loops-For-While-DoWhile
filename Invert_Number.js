
Flip the number
// Given a positive integer. Get another whole
// number obtained from the original number by reading it
// from right to left. Use multiplication, division
// and find the remainder of the division. Forbidden to use
// methods
// strings and arrays. Use a do while loop in your solution.

function invertNumber(n){
let num = 0;
let last = 0;
do{
last = n % 10;
num = num * 10 + last;
n = (n - last)/10;
}while (n > 0);
return num;
}
