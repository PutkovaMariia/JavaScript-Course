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
/*
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
 */
/*
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1994, 'Mariia'));
console.log(yearsUntilRetirement(1992, 'Roman'));
*/
/*
function cutFruitPieces (fruit){
    return fruit * 3;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}
console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = birthYear => 2023 - birthYear;
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1994, 'Masha'));
console.log(yearsUntilRetirement(1950, 'Mike'));
 */
/*
let counter = 0;

function addFive() {
    counter += 5
    console.log(counter)
}

function addTwo() {
    counter += 2
    console.log(counter)
}

addFive(counter);// 5
addTwo(counter);// 7
 */
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Mariia';
const mariia = [firstName, 'Putkova', 2023 - 1994, friends];
console.log(mariia);
/////
const calcAge = birthYear => 2023 - birthYear;
const years = [1990, 2018, 1977];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);