'use strict';
/*
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers){//default price set to 199 multiplied to the number of passengers(which was set before)-- works only when value we are working with (numPassengers) was set before value we assigning it to
    //ES5 way to set default values
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');//{ flightNum: 'LH123', numPassengers: 1, price: 199 } -- with default values
createBooking('H123', 2, 800);//{ flightNum: 'H123', numPassengers: 2, price: 800 }
createBooking('N900', 5);//{ flightNum: 'N900', numPassengers: 5, price: 995 } -- the price was calculated from default value
//createBooking('fff', , 1000); -- doesn't work because we can't skip parameters this way
createBooking('fff', undefined, 1000);//{ flightNum: 'fff', numPassengers: 1, price: 1000 } -- only way to skip the parameter is to set it to undefined (is false and we need to take default value instead)
*/
/*
const flight = 'LH1234';
const mariia = {
    name: 'Mariia Putkova',
    passport: 123456789
}

const checkIn = function (flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mrs. ' + passenger.name;

    if (passenger.passport === 123456789){
        console.log('Checked in')
    } else{
        console.log('Wrong passport')
    }
}
checkIn(flight, mariia);//Checked in
console.log(flight);//LH1234 -- number doesn't change because function has made new string, like const flightNum = flight; so flight hasn't been affected
console.log(mariia);//{ name: 'Mrs. Mariia Putkova', passport: 123456789 } -- name has changed because we were coping only the way to object, so in the function we really changed the object

const newPassport = function (person){
    person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(mariia);
checkIn(flight, mariia);//Wrong passport
 */
/*
const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str){
    const [first, ...others]= str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//higher-order functions
const transformer = function (str, fn){
    console.log(`Original string ${str}`);
    console.log(`Transformed string ${fn(str)}`);

    console.log(`Transformed by ${fn.name}`);
}
transformer('JavaScript is the best', upperFirstWord);//Transformed string JAVASCRIPT is the best
transformer('JavaScript is the best', oneWord);//Transformed string javascriptisthebest

const high5 = function (){
    console.log('🖐');
};
//document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);//🖐 (3 separate console.logs)
*/
/*
const greet = function (greeting){
    return function (name){
        console.log(`${greeting} ${name}`);
    }
};
const greeterHey = greet('Hey');
greeterHey('Mariia');//Hey Mariia

greet('Hello')('Mariia');//Hello Mariia

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Hi')('Roman');//Hi Roman
 */
/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){//new syntax of creating functions inside the object
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Roman');//Roman booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'Joe');//Joe booked a seat on Lufthansa flight LH635
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//doesn't work
//book(23, 'Mariia');

//call method
book.call(eurowings, 23, 'Mariia');//Mariia booked a seat on Eurowings flight EW23-- the first argument of the call method is what we put in on place of 'this'
console.log(eurowings);

book.call(lufthansa, 239, 'Pedro');//Pedro booked a seat on Lufthansa flight LH239
console.log(lufthansa);

//apply method (old method)
const flightData = [583, 'George'];
book.apply(eurowings, flightData);//George booked a seat on Eurowings flight EW583
console.log(eurowings);

book.call(eurowings, ...flightData);

//bind method
const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEw(45, 'Miley');//Miley booked a seat on Eurowings flight EW45
console.log(eurowings);

bookLH(98, 'Leo');//Leo booked a seat on Lufthansa flight LH98
console.log(lufthansa);

const bookEw23 = book.bind(eurowings, 23);//making pre-set flight number
bookEw23('Ursula');//Ursula booked a seat on Eurowings flight EW23
bookEw23('Tony');//Tony booked a seat on Eurowings flight EW23

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function (){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));//bind we need to define 'this'

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200));//220

const addVAT = addTax.bind(null, 0.23);//the same as addVAT = value => value + value * 0.23;

console.log(addVAT(100));//123

const addTaxRate = function (rate){
    return function (value){
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));//123
 */
/*
//what if we need to execute function only ones and never again?
const runOnce = function (){
    console.log('this run only ones');//this run only ones
}
runOnce();//we need to store function in variable and call it, that is wrong for our condition

//IIFE (immediately invoked function expression)
(function (){
    console.log('this run only ones');//this run only ones -- works for our condition
})();

(() => console.log('this run only ones'))();//this run only ones -- works with arrow functions too

{
    const isPrivate = 23;
    var notPrivate = 46;
}
//console.log(isPrivate); error, variables exist only in their scope
console.log(notPrivate);//46 - that is why we don`t use var, our data can be modified by anyone
 */
/*
//Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();//1 passengers
booker();//2 passengers
booker();//3 passengers

console.dir(booker);

//

let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

g();
f();//46

const h = function (){
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

h();
f();//1554
console.dir(f);

//

const boardPassengers = function (n, wait){
    const perGroup = n/3;
    setTimeout(function (){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);//closure has a priority over scope chain (in this example we use 180, not 1000)
 */
