
Star triangle

Write a function called starTriangle that takes n as an argument and returns 
a triangle of n strings consisting of asterisks (*).
All lines except the last one end with a \ n newline character.
////////////////////////////////////////////////////////////////////
function starTriangle(n){
var str = '';
  var star = '*';
  for ( var j = 1; j <= n; j++ ){
    if ( j === 1) str = str;
   else  str = str+'\n';
for (var i = 1; i <= j ;i++){
  if ( i === j)str = str +  star;
 else str =str  +star + '';
}
}
return str;
}
