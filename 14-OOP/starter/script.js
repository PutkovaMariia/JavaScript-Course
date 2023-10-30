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
 */
/*
const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
//this will return new object that is linked to the prototype that we pass in ()
//with Object.create we can set the prototype of objects manually to any object that we want (but this is the least used way)
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();//21

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();//44
*/
////////////////////////////////
/*
//inheritance between 'classes': constructor functions
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function (){
    console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
}

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function (){
    console.log(`my name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 1991, 'computer science');
mike.introduce();//my name is Mike and I study computer science
mike.calcAge();//32

console.log(mike instanceof Student);//true
console.log(mike instanceof Person);//true
console.log(mike instanceof Object);//true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);//function Student(firstName, birthYear, course)
//but without line 199 it will be function Person(firstName, birthYear) which is incorrect
*/
////////////////////////////////
/*
//inheritance between 'classes': ES6 classes

class PersonCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //instance methods
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    greet() {
        console.log(`hey ${this.fullName}`)
    }

    get age() {
        return 2023 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            console.log(`${name} is not a full name`)
        }
    }

    get fullName() {
        return this._fullName;
    }

    //static method
    static hey() {
        console.log(`hey there👋`);
    }
}

class StudentCL extends PersonCL {
    constructor(fullName, birthYear, course) {
        //always needs to happen first
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`my name is ${this.fullName} and I study ${this.course}`)
    }

    calcAge() {
        console.log(`I'm ${2023 - this.birthYear} years old, but as a student I feel more like ${2023 - this.birthYear + 10}`)
    }
}

const martha = new StudentCL('Martha Jones', 1992, 'computer science');
martha.introduce();
martha.calcAge();
 */
////////////////////////////////
/*
//inheritance between 'classes': Object.create

const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function (){
    console.log(`my name is ${this.firstName} and I study ${this.course}`)
}

const jay = Object.create(StudentProto);
jay.init('Jay', 1997, 'math');
jay.introduce();
jay.calcAge();
*/

//1.public fields
//2.private fields
//3.public methods
//4.private methods
//there is also the static version

class Account{
    //1.public fields(instances)
    locale = navigator.language;

    //2.private fields(instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //protected property
        // this._movements = [];
        // this.local = navigator.language;

        console.log(`thanks for opening account, ${owner}`);
    }

    //3.public methods
    //public interface
    getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

    requestLoan (val){
        // if (this.#approveLoan(val)){
        if (this._approveLoan(val)){
            this.deposit(val);
            console.log('loan approved');
            return this;
        }
    }

    //4.private methods
    // #approveLoan(val){
    _approveLoan(val){
        return true;
    }
}

const acc1 = new Account('Masha', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);

// console.log(acc1.#movements);

//chaining methods (we need to write in every method 'return this')
acc1.deposit(300).deposit(500).withdraw(45)
    .requestLoan(2500).withdraw(4000);

