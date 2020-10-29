//console.log(doesNumberContain2(5438));

function doesNumberContain2(num){
var f = 2;
while(num > 0 ){
  if( num % 10 == f)
    return true;
 
  
  num = Math.floor(num / 10);
  }
  return false;
}
