//the athlete ran n km on the first day of training. 
Each subsequent day, he increased the rate by 10% from 
the rate of the previous day. Determine how many kilometers
the athlete will run on the 10th day of training.

Round the result to the nearest integer using Math.round ().
///////////////////////////////////////////
function running(n){
let sumKm = n;
let count = 1 ;
do {
sumKm = sumKm + 0.1* sumKm;
count++;
}while ( count < 10);
sumKm = Math.round(sumKm);
return sumKm;
}
