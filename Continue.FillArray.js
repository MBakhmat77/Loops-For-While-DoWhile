
Get an array of integers from 1 to n, excluding the given number x.
Write a function named fillArray that takes the numbers n (n> = 1)
and x (1 <= x <= n) as arguments and returns an array of integers
between 1 and n, inclusive, excluding x.
You must use the continue statement in your solution.
/////////////////////////////////////////////////////////////////
function fillArray(n, x){
let arr =[];
//arr = Array.from(String(n), Number);
for (let i = 0; i <= n; i++){
if (i >= 1 && i !== x && i<= n )
arr.push(i);
continue;
}
return arr;
}
