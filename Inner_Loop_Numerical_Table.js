Write a function called numericalTable that takes numbers n and m in
 as arguments and returns a table of numbers from 1 to n.
 Each line contains m numbers separated by a space.
 All lines except the last one end with a \ n newline character.
 ////////////////////////////////////////////////////////////
function numericalTable(n, m){
 let str ='';

 for ( let j = 1; j <= n; j++){
 if ( j === 1 ) str = str ;
 else
   str =str+'\n';
 for (let i = 0; i <= m; i++){
 str = str+' '+1  ;
 }
 }
return str;
}
console.log(numericalTable(5, 4));
