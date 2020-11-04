
Numerical triangle
Write a function called numericalTriangle that takes n as an argument and 
returns a triangle of numbers 1 through n, separated by a space. 
All lines except the last one end with a \ n newline character.
///////////////////////////////////////////////////////////////////////
function numericalTriangle(n){
var str = '';
  
  for ( var j = 1; j <= n; j++ ){
    if ( j === 1) str = str;
   else  str = str+'\n';
for (var i = 1; i <= j ;i++){
  if ( i === j)str = str + j;
else str =str  +j + ' ';
}
}
return str;
}
