'use strict';
/*
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}.`);
*/
/////////

function calcTip(value) {
    return value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
}
/*
console.log(calcTip(430));

const bills = [22, 295, 176];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`tips ${tips}`);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`total ${total}`);
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i= 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}
console.log(`tips ${tips}`, `totals ${totals}`);

const calcArr = [10, 20, 30];
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
function calcAverageByReduce(arr) {
    return arr.reduce((prevEl, currEl) => (prevEl + currEl)) / arr.length
}
console.log(calcAverage(totals));
console.log(calcAverageByReduce(totals));