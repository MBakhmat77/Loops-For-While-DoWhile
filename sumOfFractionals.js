//
//Sum of fractions
//question
//Given a number n> 0. Find the sum: 1 + 1/2 + 1/3 + 1/4 + ... + 1 / n

function sumOfFractionals(n){
let sum = 0;
 let d = 0;
for ( let i = 1; i <=n ; i++){
sum = sum + 1/i; 
d++;
}
sum= +sum.toFixed(2);
return sum;
}
