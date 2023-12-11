//exporting module
console.log('exporting module');

//blocking code
// console.log('start fetching users');
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetching');

const shippingCost = 10;
export const cart = [];

//export need to be in top level code, we can't put it inside 'if' or something else
export const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`)
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq};

export default function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`)
};
