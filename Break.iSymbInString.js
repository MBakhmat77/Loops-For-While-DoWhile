Identify if string has symbol.
//////////////////////////////////
function iSymbInString(str, symb){
for ( let i = 0; i <= str.length; i++){
if ( str[i] === symb){
 return true;
break;
}
}
return false;
}
