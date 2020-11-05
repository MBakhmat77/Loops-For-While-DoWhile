
Given a two-dimensional array. Find the number of lines that have negative elements.
question
Write a function called countLinesWithNegativeElements that takes a two-dimensional
array arr as an argument and returns the number of lines that contain at least one
negative element.
////////////////////////////////////////////////////////////////////////////////////////
function countLinesWithNegativeElements(arr){
let count = 0;
for ( let i = 0 ; i < arr.length; i++){
 let element = arr[i];
for ( let j = 0; j < element.length;j++){
  if (element[j] < 0 ){
  count++;
  break;
  }
} 
}
return count;
 }
