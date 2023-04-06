'use strict';
/*
function logger() {
    console.log('My name is Mariia');
}
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
 */

//function declaration
function calcAge1(birthYear){
    return 2023 - birthYear;
}
const age1 = calcAge1(1994);

//function expression
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1994);
console.log(age1, age2);