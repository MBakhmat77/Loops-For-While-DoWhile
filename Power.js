//https://www.codewars.com/kata/562926c855ca9fdc4800005b/solutions/javascript
function numberToPower(number, power){
    let nump = 1;
    for (let i = 1; i <= power; i++) {
        nump = nump * number;
    }
    return nump;
  }
