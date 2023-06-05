'use strict';

// Data needed for a later exercise
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12, close: 22,
    }, [weekdays[4]]: {
        open: 11, close: 23,
    }, [`day-${2+4}`]: {
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