Write a function called sumsInArray that 
takes a two-dimensional array arr as an argument
and returns an array containing the sums of the 
elements of the nested arrays.
///////////////////////////////////////////////

function sumsInArray(arr){
let arrSums = [];
for ( var i = 0; i < arr.length; i++){
  let sum = 0;
  for ( var j = 0; j < arr[i].length; j++){
    
     sum =sum + arr[i][j];
  }   

arrSums.push(sum);     
}
return arrSums;
}
//console.log(sumsInArray([[1,1],[2,2]]));  
console.log(sumsInArray([[1,2],[2,3]]));  
