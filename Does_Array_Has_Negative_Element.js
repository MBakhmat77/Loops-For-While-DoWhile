Identify if an array has a negative element.
//////////////////////////////////////////
function isNegativeInArray(arr){
for ( let i = 0; i <= arr.length;i++){
if ( arr[i] < 0){
return true;
break;
}
}
return false;
}
