function fractional(n){
let mult = 1;
let fract = 0;
let sum = 0;
let d = 0;
for ( let i = 1; i <= n; i++){
mult = mult * i;
sum = sum + i;
fract = sum / mult;
d++;
}
fract = +fract.toFixed(3);
return fract;
}
