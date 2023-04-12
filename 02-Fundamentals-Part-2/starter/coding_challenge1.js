'use strict';

const calcAverage = (a, b, c) => (a + b + c) / 3;

const calcAvgDolphins = calcAverage(85, 54, 41);
const calcAvgKoalas = calcAverage(123, 134, 127);

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Both are losers');
    }
}
checkWinner(calcAvgDolphins, calcAvgKoalas);
checkWinner(576, 111);