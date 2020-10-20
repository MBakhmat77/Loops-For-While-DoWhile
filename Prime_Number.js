
Prime number.
question
Given a number n> 0. Determine whether the given number n is prime.

A number is called prime if it is divisible only by 1 and by itself 
(that is, the number of divisors of the number is 2). For example, the
numbers 2, 3, 5, 5, 7, 11, 13, 17, 19 are prime. The number 1 is neither 
simple nor compound.

Write a function called isPrime that takes n and returns true if the number 
is prime and false otherwise.
unction isPrime(n){

    if (n===1)
  {
    return false;
  }
    else if(n === 2)
  {
    return true;
  } else {
    for(var x = 2; x < n; x++){
    if(n % x === 0){
    return false;
      }
    }
    return true;  
  }
}
