https://www.codewars.com/kata/55b051fac50a3292a9000025
var FilterString = function(value) {
 value = value.split("");   
 let res = '';
for ( let i = 0; i <= value.length; i++){
  if ( !isNaN(value[i]))
      res+=value[i];
 }
   return +res;
}
