function bankPercent(money, percent, period){
let year = 0;
let sum = money;
let p = percent/100+1;
do{
sum = sum * p;
year++;
}while (year < period);
return sum.toFixed(2);
}
