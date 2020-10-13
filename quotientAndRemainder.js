function quotientAndRemainder(n, k){
let quotient = 0;
let remainder = 0;
if( n < k) return [0,n];
while ( n >= k ){
n = n - k;
quotient++;
remainder = n ;
} 
return [quotient,remainder];
}
