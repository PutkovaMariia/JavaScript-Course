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
/*
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
 */
/*
//add elements to the end of array (returns length of array)
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//add elements to the beginning of array (returns length of array)
friends.unshift('John');
console.log(friends);

//remove from end (returns removed elements)
const popped = friends.pop();
console.log(friends);
console.log(popped);

//remove from beginning (returns removed elements)
friends.shift();
console.log(friends);
 /////
console.log(friends.indexOf('Steven'));//1
console.log(friends.indexOf('Bob'));//-1
/////
friends.push(23);
console.log(friends.includes('Peter'));//true
console.log(friends.includes('Bob'));//false
console.log(friends.includes('23'));//false (search strict ===)

if (friends.includes('Peter')){
    console.log('You have a friend called Peter');
}
 */
/*
const jonas= {
    firstName: 'Jonas',
    lastName: 'Schedelman',
    age: 2023-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Stephen']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, job, age, friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, job, age, friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas[interestedIn]);

////
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/
/*
const jonas= {
    firstName: 'Jonas',
    lastName: 'Schedelman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Stephen'],
    hasDriversLicense: true,

    calcAge: function (){
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
 */

for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}