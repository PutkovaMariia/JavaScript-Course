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