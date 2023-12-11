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


