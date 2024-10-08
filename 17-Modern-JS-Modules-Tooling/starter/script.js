//importing module
//import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

//console.log('importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, {cart} from './shoppingCart.js'

add('pizza', 2);
add('chicken', 1);
add('tomato', 20);

console.log(cart);
/*
// //top level await we can use only in modules
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('end fetching');

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {title: data.at(-1).title, text:data.at(-1).body}
}

const lastPost = getLastPost();
console.log(lastPost);

//not very clean
lastPost.then(last => console.log(last));

//better solution
const lastPost2 = await getLastPost();
console.log(lastPost2);


import {cart} from "./shoppingCart";
*/
/*
const ShoppingCart2 = (function (){
    const cart = [];
    const shoppingCost = 10;
    const totalPrise = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to the cart`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrise,
        totalQuantity,
    }
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2);
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
//import cloneDeep from 'lodash-es';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: {loggedIn: true},
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept();
}

class Person {
    #greeting = 'hey'

    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}

const masha = new Person('Masha');
console.log('Masha' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('test').then(x=>console.log(x));
import 'core-js/stable';

//polifilling async functions
import 'regenerator-runtime/runtime';