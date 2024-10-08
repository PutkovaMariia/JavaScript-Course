'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12, close: 22,
    }, [weekdays[4]]: {
        open: 11, close: 23,
    }, sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    /////////////////////


    //ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({time = '20:00', adress, mainIndex = 0, starterIndex = 1}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}😘`)
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};
////////////////
/*
//Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Buffet');
rest.set(1, 'Kharkiv');
rest.set(2, 'Dnipro');
console.log(rest);//Map(3) { 'name' => 'Buffet', 1 => 'Kharkiv', 2 => 'Dnipro' }

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open')
    .set(false, 'we are closed');

console.log(rest.get('name'));//Buffet
console.log(rest.get(true));//we are open

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));//we are closed

console.log(rest.has('categories'));//true

rest.delete(2);
console.log(rest);//no key 2 or Dnipro in console

console.log(rest.size);//7

// rest.clear();
// console.log(rest);//Map(0) {}

rest.set([1, 2], 'Test');
console.log(rest);//"[ 1, 2 ] => 'Test'" added

console.log(rest.get([1, 2]));//undefined, because it is not the same array

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

//Maps: Iteration
const question = new Map([
    ['question', 'what is the best programming language in the world?'],
    [1, 'c'],
    [2, 'java'],
    [3, 'javascript'],
    ['correct', 3],
    [true, 'correct🎉'],
    [false, 'try again😈'],
]);
console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iteration
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`answer ${key}: ${value}`);
    }
}
//const answer = Number(prompt('your answer'));
const answer = 3;
//console.log(answer);

// if (answer === question.get('correct')) {
//     console.log(question.get(true))
// } else {
//     console.log(question.get(false));
// }

//now the same but easier
console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
//console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/
/*
//SETS
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);//Set(3) { 'Pasta', 'Pizza', 'Risotto' }

console.log(new Set('Mariia'));//Set(4) { 'M', 'a', 'r', 'i' }

console.log(ordersSet.size);//3
console.log(ordersSet.has('Pizza'));//true
console.log(ordersSet.has('Bread'));//false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);//Set(4) { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }
ordersSet.delete('Risotto');
console.log(ordersSet);//Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }
for (const order of ordersSet) console.log(order);//Pasta Pizza Garlic Bread

//example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffSet = [...new Set(staff)];
console.log(staffSet);//[ 'Waiter', 'Chef', 'Manager' ]
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);//3
console.log(new Set('mariiaputkova').size);//10
*/
/*
//property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties){
    openStr += `${day}, `;
}
console.log(openStr);

//property values
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
//without optional chaining
if (restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open)
}

//with optional chaining (will work only if all before ? exists)
console.log(restaurant.openingHours.mon?.open);

//example
const days =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0,1) ?? 'method doesn`t exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'method doesn`t exist');

//arrays
const users = [{name: 'Mariia', email: 'a@gmail.com'}];
console.log(users[0]?.name ?? 'user array empty');
*/
/*
//for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()){
    console.log(`${i + 1}: ${el}`);
}
*/
/*
const rest1 = {
    name:'Capri',
    //numGuests: 20,
    numGuests: 0,
};
const rest2 = {
    name:'La Piazza',
    owner: 'Giovanni',
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
//nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator (assign a value if it's currently truthy)
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
/*
//the nullish coalescing operator (??)
//if value is 0 (fallacy value)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish: null and undefined (not 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
/*
//&& and||

//use any data type, return any data type, short-circuiting
console.log(3 || 'Mariia');//3
console.log('' || 'Mariia');//Mariia
console.log(true || 0);//true
console.log(undefined || null);//null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);//Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests :10;//10
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----------and-----------')

console.log(0 && 'Mariia');//0
console.log(7 && 'Mariia');//Mariia
console.log('Hello' && 23 && null && 'Mariia');//null

if (restaurant.orderPizza) {
    restaurant.orderPizza('cheese', 'onion');
}

restaurant.orderPizza && restaurant.orderPizza('beef');
*/
/*
//1.destructuring

//SPREAD, because on Right side of =
const arr = [1,2,...[3,4]];

//REST, because on left side of =
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);//1 2 [ 3, 4, 5 ]

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);//Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);//{ thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

//2.functions

const add = function (...num) {
    let sum = 0;
    for (let i=0; i<num.length; i++) sum += num[i];
    console.log(sum);
}
add(2,3);//5
add(5,3,7,2);//17

const x = [23,5,7];
add(...x);//35

restaurant.orderPizza('tomato', 'dough', 'banana');//tomato [ 'dough', 'banana' ]
*/
/*
restaurant.orderDelivery({
    time: '22:30',
    adress: 'Edwarda Stachury 1',
    mainIndex: 2,
    starterIndex: 1,
});
restaurant.orderDelivery({
    adress: 'Architektoriv 20',
    starterIndex: 0,
})

//destructuring objects
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//destructuring objects with changing variable names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//setting default value to undefined variable (menu)
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a,b} = obj);
console.log(a,b);//23,7

//nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);//11,23
///////////////////////////////

const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);
//spread operator (works only with iterables)
//iterables: arrays, strings, maps, sets. NOT the objects
const newArr = [1,2,...arr];
console.log(newArr);//[ 1, 2, 7, 8, 9 ]
console.log(...newArr);//1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);//[ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 or more arrays
const menuMerged = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuMerged);

const str = 'Masha';
const letters = [...str, '', 'P.'];
console.log(letters);//'M', 'a', 's', 'h', 'a', '', 'P.'
console.log(...str);//M a s h a

//real-world example
const ingredients = [prompt('Let\'s make pasta! What is the first ingredient?'),
    prompt('What is the second ingredient?'),
    prompt('The third ingredient?')];
console.log(ingredients);//['rum', 'cola', 'ice']
restaurant.orderPasta(...ingredients);//Here is your delicious pasta with rum, cola and ice😘

//objects
const newRestaurant = {foundedIn: 2025, ...restaurant, founder: 'Mariia'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Dubstep house';
console.log(restaurant);
console.log(restaurantCopy);
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log('main1:', main, ', secondary1:', secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('main2:', main);
// console.log('secondary2:', secondary);

[main, secondary] = [secondary, main];
console.log('main2:', main, ', secondary2:', secondary);

//receive 2 return values from the function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i,j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);//A
console.log('B737'[0]);//B

console.log(airline.length);//16
console.log('B737'.length);//4

console.log(airline.indexOf('r'));//6
console.log(airline.lastIndexOf('r'));//10
console.log(airline.indexOf('Portugal'));//8
console.log(airline.indexOf('portugal'));//-1, because it is case-sensitive

console.log(airline.slice(4));//Air Portugal
console.log(airline.slice(4, 7));//Air

//how to find the first word
console.log(airline.slice(0, airline.indexOf(' ')));//TAP
//how to find the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));//Portugal

console.log(airline.slice(-2));//al
console.log(airline.slice(1, -1));//AP Air Portuga

const checkMiddleSeat = function (seat) {
    //B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E'){
        console.log('You got a middle seat😕');
    } else {
        console.log('You got side seat😃');
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());//tap air portugal
console.log(airline.toUpperCase());//TAP AIR PORTUGAL

//fix capitalization in name
const passenger = 'mArIiA';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);//Mariia

const passengerName = function (name){
    const nameLower = name.toLowerCase();
    return nameLower[0].toUpperCase() + nameLower.slice(1);
}
console.log(passengerName('rOmAn'));//Roman

//comparing email
const email = 'hello@google.com';
const loginEmail = '   Hello@GooGle.com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);//hello@google.com

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);//hello@google.com
console.log(email === normalizedEmail);//true

//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);//288.97$

const announsment = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announsment.replace('door', 'gate'));//All passengers come to boarding gate 23. Boarding door 23!
console.log(announsment.replaceAll('door', 'gate'));//All passengers come to boarding gate 23. Boarding gate 23!
//g for global
console.log(announsment.replace(/door/g, 'gate'));//All passengers come to boarding gate 23. Boarding gate 23!

//booleans
const planeNew = "Airbus A320neo";
console.log(planeNew.includes('A320'));//true
console.log(planeNew.startsWith('Air'));//true
console.log(planeNew.startsWith('Aib'));//false

if (planeNew.startsWith('Airbus') && planeNew.endsWith('neo')){
    console.log('Part of the new Airbus family');
}

//practice

const checkBaggage = function (items){
    const baggage = items.toLowerCase();

    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('Come with us, we will show you something')
    } else {
        console.log('You can fly')
    }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//////////

//split and join
console.log('a+very+nice+string'.split('+'));//[ 'a', 'very', 'nice', 'string' ]
console.log('Masha Putkova'.split(' '));//[ 'Masha', 'Putkova' ]

const [firstname, lastName] = 'Masha Putkova'.split(' ');

const newName = ['Mrs.', firstname, lastName.toUpperCase()].join(' ');
console.log(newName);//Mrs. Masha PUTKOVA

const capitalizeName = function (name){
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names){
        //namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');//Jessica Ann Smith Davis
capitalizeName('roman putkov');//Roman Putkov

//padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));//++++++++++++Go to gate 23
console.log('Masha'.padStart(25, '+'));//++++++++++++++++++++Masha

console.log(message.padEnd(35, '+'));//Go to gate 23++++++++++++++++++++++
console.log(message.padStart(15, '+').padEnd(25, '+'));//++Go to gate 23++++++++++

const maskCreditCard = function (number){
    const str = number + '';//how to make a number as a string
    const last = str.slice(-4);
    return last.padStart(str.length, '⁕');
}

console.log(maskCreditCard(98769876));//⁕⁕⁕⁕9876
console.log(maskCreditCard(1234123412341234));//⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕1234
console.log(maskCreditCard('123456789123456789'));//⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕6789

//repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(3));//Bad weather... All departures delayed...Bad weather... All departures delayed...Bad weather... All departures delayed...

const planesInLine = function (n){
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planesInLine(3);//There are 3 planes in line ✈✈✈
planesInLine(12);//There are 12 planes in line ✈✈✈✈✈✈✈✈✈✈✈✈
 */

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase();

for (const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';');
    const output =
        `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(45);
    console.log(output);
}
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)