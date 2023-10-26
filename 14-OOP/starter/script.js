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
const poi = new Person();
console.log('-------------', poi);//------------- Person { firstName: undefined, birthYear: undefined }
console.log(roman);//Person { firstName: 'Roman', birthYear: 1992 }

console.log(mariia instanceof Person);//true

Person.hey = function (){
    console.log(`hey there👋`);
    console.log(this);
};
Person.hey();

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


//class expression
//const PersonCL = class{}

//class declaration
class PersonCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //methods will be added to the prototype property (but not in the constructor)
    //instance methods
    calcAge(){
        console.log(2023- this.birthYear);
    }

    get age(){
        return 2023-this.birthYear;
    }

    //set a property that is already exists
    set fullName(name){
        console.log(name);
        if (name.includes(' ')){
            this._fullName = name;
        } else {
            console.log(`${name} is not a full name`)
        }
    }

    get fullName(){
        return this._fullName;
    }

    //static method
    static hey(){
        console.log(`hey there👋`);
        console.log(this);
    }
}
const masha = new PersonCL('Masha Putkova', 1994);
console.log(masha);//PersonCL { fullName: 'Masha Putkova', birthYear: 1994 }
masha.calcAge();//29

PersonCL.prototype.greet = function (){
    console.log(`hey ${this.fullName}`)
};
masha.greet();//hey Masha Putkova
console.log(masha.age);//29

//1. classes are not hoisted (not going up)
//2. classes are first-class citizens
//3. classes are executed in strict mode

const roma = new PersonCL('Roman Putkov', 1992);

PersonCL.hey();

const account = {
    owner: 'Masha',
    movements: [200,300,800],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
};
console.log(account.latest);//800
account.latest = 450;
console.log(account.movements);//[ 200, 300, 800, 450 ]