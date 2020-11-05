
Inverted star triangle
Write a function called upsideDown that takes n as an argument and returns an n-string triangle of asterisks (*). 
The first line contains n stars, the second contains (n-1) asterisk, ..., the last line contains 1 asterisk.
All lines except the last one end with a '\n' newline character.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function upsideDown(n){
var str = '';
  var star = '*';
  for ( var j = 1; j <= n; j++ ){
    if ( j === 1) str = str ;
   else  str = str+'\n';
for (var i = j; i <= n ;i++){ 
  str =str  +star + '' ;
}
}
return str;
} 
