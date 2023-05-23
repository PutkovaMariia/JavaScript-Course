'use strict';

/*
function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1991 && birthYear <= 1996) {
            const firstName = 'Mariia';
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // add(3, 4);
    }
    printAge();
    return age;
}

const firstName = 'Masha';
calcAge(1994);
 */
/*
//Variables
//console.log(me);//undefined
//console.log(job);//temporal dead zone, access only after initialization
//console.log(year);//temporal dead zone, access only after initialization

var me = 'Masha';
let job = 'housewife';
const year = 1994;

//Functions
//console.log(addDecl(2, 3));//we can call it before it was declared
//console.log(addExpr(2, 3));//access only after initialization
//console.log(addArrow(2, 3));//access only after initialization
function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

//Example
//it works because var before initialization is undefined (which is 'true')
//that is why we don't use var
if (!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
    console.log('All products deleted');
}
*/
/*
console.log(this);

const calcAge = function (birthYear) {
    console.log(2023 - birthYear);
    console.log(this);
}
calcAge(1994);

const calcAgeArrow = birthYear => {
    console.log(2023 - birthYear);
    console.log(this);
}
calcAgeArrow(1992);
*/
/*
const masha = {
    year: 1994,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);
    }
}
masha.calcAge();

const roman = {
    year: 1992,
}
roman.calcAge = masha.calcAge;
roman.calcAge();
*/
/*
// var firstName = 'Masha';
const masha = {
    firstName: 'Mariia',
    year: 1994,
    calcAge: function () {
        //console.log(this);
        console.log(2023 - this.year);

        //solution 1
        // const self = this;//self or that
        // const isMillennial = function (){
        //     console.log(self.year >= 1991 && self.year <= 1996);
        // }

        //solution 2
        const isMillennial = () => {
            console.log(this);
            console.log(this.year >= 1991 && this.year <= 1996);
        }

        isMillennial();
    },
    greet: function () { console.log(`Hey, ${this.firstName}`)},
}
masha.greet();
masha.calcAge();

//arguments key word exists only in regular functions!
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 3);
addExpr(2, 3 , 8, 10);

const addArrow = (a, b) => {
    console.log(arguments);//wrong
    return a + b;
};
//addArrow(2, 3, 8, 10);
 */
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Masha',
    age: 29,
};
const friend = me;
friend.age = 30;
console.log('Friend:', friend);
console.log('Me:', me);
 */
//primitive types
let lastName = 'Makovieieva';
let oldLastName = lastName;
lastName = 'Putkova';
console.log(lastName, oldLastName);

//reference types
const mariia = {
    firstName: 'Mariia',
    lastName: 'Makovieieva',
    age: 29,
};
const marriedMariia = mariia;
marriedMariia.lastName = 'Putkova';
console.log('Before marriage:', mariia);
console.log('After marriage:', marriedMariia);

//copying objects
const mariia2 = {
    firstName: 'Mariia',
    lastName: 'Makovieieva',
    age: 29,
    family: ['Nataliia', 'Serhii'],
};

const mariiaCopy = Object.assign({}, mariia2); //copying only first level properties
mariiaCopy.lastName = 'Putkova';
mariiaCopy.family.unshift('Roman');
console.log('Before marriage:', mariia2);
console.log('After marriage:', mariiaCopy);

