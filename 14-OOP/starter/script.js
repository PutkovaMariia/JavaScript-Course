'use strict';

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

