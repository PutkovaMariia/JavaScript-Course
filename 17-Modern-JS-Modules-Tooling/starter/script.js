//importing module
//import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, {cart} from './shoppingCart.js'
add('pizza', 2);
add('chicken', 1);
add('tomato', 20);

console.log(cart);


