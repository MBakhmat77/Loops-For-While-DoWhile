
Table of numbers: n lines, 5 numbers each
Write a function called numericalTable that takes n as an
argument and returns a table of numbers from 1 to n. Each
line contains 5 numbers separated by a space. All lines except
the last one end with \ n line feed character.

function numericalTable(n){
let str = '';
  for ( let j = 1; j <= n; j++ ){
    if ( j >=1 && j <=n-1){
 str = str + j + ' ' + j+' ' +j+' ' +j+' ' + j+ '' +'\n';
    } else str = str + j + ' ' + j+' ' +j+' ' +j+' ' + j+'';
 }
 return  str ; 
}
