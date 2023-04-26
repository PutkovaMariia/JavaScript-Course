'use strict';
/*
function printForecast(arr) {
    let str = [];
    for (let i = 0; i < arr.length; i++) {
            str[i] = `${arr[i]}ºC in ${i + 1} days...`;
    }
    str.unshift('...');
    console.log(str.join(''));
}

printForecast([55, 77, 11, -5, 0, 1]);
*/

function printForecast(arr) {
    let str = '...';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i + 1} days...`;
    }
    console.log(str);
}

printForecast([55, 77, 11, -5, 0, 1]);