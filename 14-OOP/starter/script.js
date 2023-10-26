'use strict';
/*
//basics of constructor functions
const Person = function (firstName, birthYear){
    //console.log(this);//Person {}

    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //never do this (never create a method inside of a constructor function)
    // this.calcAge = function (){
    //     console.log(2023 - this.birthYear);
    // };
};
const mariia = new Person('Mariia', 1994);
console.log(mariia);//Person { firstName: 'Mariia', birthYear: 1994 }

//1. new {} is created
//2. function is called, this = {}
//3. {} is linked to the prototype
//4. function automatically return {}

const roman = new Person('Roman', 1992);
const poi = new Person();
console.log('-------------', poi);//------------- Person { firstName: undefined, birthYear: undefined }
console.log(roman);//Person { firstName: 'Roman', birthYear: 1992 }

console.log(mariia instanceof Person);//true

//prototypes
//(each and every function in JS automatically has
// a property called prototype, and that includes constructor functions)
//every object created from a certain constructor function will get
// access to all the methods and properties that we defined on the
// constructors prototype properties (like Person.prototype)
console.log(Person.prototype);//{}

Person.prototype.calcAge = function (){
    console.log(2023 - this.birthYear);
};

mariia.calcAge();//29

console.log(mariia.__proto__ === Person.prototype);//true
console.log(Person.prototype.isPrototypeOf(mariia));//true
console.log(Person.prototype.isPrototypeOf(Person));//false

Person.prototype.species = 'Homo Sapiens';
console.log(roman.species);//Homo Sapiens

console.log(roman.hasOwnProperty('firstName'));//true
console.log(roman.hasOwnProperty('species'));//false  (it just has access to it because of its prototype)
console.log('--------------------');

const arr = [1,2,3,1,5,6,3,8,2];// [] === new Array
console.log(arr.__proto__ === Array.prototype);//true

Array.prototype.unique = function (){
    return [...new Set (this)];
};

console.log(arr.unique());//[ 1, 2, 3, 5, 6, 8 ]
*/

//class expression
//const PersonCL = class{}

//class declaration
class PersonCL {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //methods will be added to the prototype property (but not in the constructor)
    calcAge(){
        console.log(2023- this.birthYear);
    }
}
const masha = new PersonCL('Masha', 1994);
console.log(masha);//PersonCL { firstName: 'Masha', birthYear: 1994 }
masha.calcAge();//29

PersonCL.prototype.greet = function (){
    console.log(`hey ${this.firstName}`)
};
masha.greet();//hey Masha

//1. classes are not hoisted (not going up)
//2. classes are first-class citizens
//3. classes are executed in strict mode