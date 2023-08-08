'use strict';

// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];

/*
const result = [];
for(const acc of accounts) {
    if (acc.owner.split(" ").length === 2) {
        const [firstName, lastName] = acc.owner.split(" ")
        result.push({
            firstname: firstName,
            lastName: lastName
        })
    }
}

const aa = console.log("aaaa")
let rest2 = accounts.filter(acc => acc.owner.split(" ").length === 2)
    .map(acc => {
        const [firstName, lastName] = acc.owner.split(" ")
        return {
            firstname: firstName,
            lastName: lastName
        }
    });
console.log(rest2);
*/

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}
displayMovements(account1.movements);

const calcDisplayBalance =function (movements){
    const balance = movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);
//////////////
const calcDisplaySummary = function (movements){
    const incomes = movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const outcome = movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outcome)}€`;

    const interest = movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * 1.2/100)
        .filter(inter => inter >= 1)
        .reduce((acc, inter) => acc + inter, 0);
    labelSumInterest.textContent = `${interest}€`;
}
calcDisplaySummary(account1.movements);
//////////////
const createUsernames = function (accs) {
    accs.forEach(function (acc){
        acc.username = acc.owner.toLocaleLowerCase().split(' ')
            .map(name => name[0]).join('');
    })
}

createUsernames(accounts);

/////////////////////////////////////////////////
/*
//slice (does not mutate array)
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2,4));//[ 'c', 'd' ]
console.log(arr.slice(-2));//[ 'd', 'e' ]
console.log(arr.slice(1,-2));//[ 'b', 'c']
console.log(arr.slice());//copy whole array
console.log([...arr]);//copy whole array

////////
//splice (mutate array)
//console.log(arr.splice(2));//[ 'c', 'd', 'e' ]
//console.log(arr);//[ 'a', 'b' ] - data we spliced from arr were deleted

arr.splice(-1);//[ 'a', 'b', 'c', 'd' ]--we use this to delete last element
arr.splice(1, 2);//[ 'a', 'd' ]
console.log(arr);

///////
//reverse (mutate array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());//[ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2);//[ 'f', 'g', 'h', 'i', 'j' ]

///////
//concat (does not mutate array)
const letters = arr.concat(arr2);
console.log(letters);//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(...arr, ...arr2);//a b c d e f g h i j
console.log([...arr, ...arr2]);//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

///////
//join (does not mutate array)
console.log(letters.join('.'));//a.b.c.d.e.f.g.h.i.j
console.log(letters);//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
 */
/*
const arr = [23, 11, 64];

console.log(arr[0]);//23
console.log(arr.at(0));//23

//getting last element
console.log(arr[arr.length - 1]);//64
console.log(arr.slice(-1));//[ 64 ]
console.log(arr.slice(-1)[0]);//64
console.log(arr.at(-1));//64
//'at' works with strings too
console.log('masha'.at(0));//m
console.log('masha'.at(-1));//a
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements){
  if (movement > 0){
    console.log(`here comes the money 🎉${movement}🎉`);
  } else {
    console.log(`i hope you spent this on vacation 🌊${Math.abs(movement)}🌊`);
  }
}
console.log('------------------')
//how to access current index in the for of loop
for (const [i, movement] of movements.entries()){
  if (movement > 0){
    console.log(`${i + 1}.here comes the money 🎉${movement}🎉`);
  } else {
    console.log(`${i + 1}.i hope you spent this on vacation 🌊${Math.abs(movement)}🌊`);
  }
}
///////////////////////
console.log('------------------')
movements.forEach(function (movement){
  if (movement > 0){
    console.log(`here comes the money 🎉${movement}🎉`);
  } else {
    console.log(`i hope you spent this on vacation 🌊${Math.abs(movement)}🌊`);
  }
});
console.log('------------------')
//how to access current index in the forEach loop
movements.forEach(function (mov, i, arr){//only in this order
  if (mov > 0){
    console.log(`${i + 1}.here comes the money 🎉${mov}🎉`);
  } else {
    console.log(`${i + 1}.i hope you spent this on vacation 🌊${Math.abs(mov)}🌊`);
  }
});
*/
/*
//map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})

//set
const currenciesUnique = new Set(['USD', 'GBR', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);//Set(3) { 'USD', 'GBR', 'EUR' }
currenciesUnique.forEach(function (value, _, map) {//in sets we don`t have key
    console.log(`${value}: ${value}`);
})
 */


//map method
//we create a function map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov){
//     return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

//the same but with loops and new array
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) =>
    // if (mov > 0) {
    //     return `${i + 1}.here comes the money 🎉${mov}🎉`;
    // } else {
    //     return `${i + 1}.i hope you spent this on vacation 🌊${Math.abs(mov)}🌊`;
    // }
    //or
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);
/*
const deposits = movements.filter(mov => mov > 0);
console.log(movements);//[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits);//[200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);//[ -400, -650, -130 ]
 */

//accumulator is like a snowball (all values added)
// const balance = movements.reduce(function
// (accumulator, cur, i, arr){
//     console.log(`iteration ${i}: ${accumulator}`);
//     return accumulator + cur;
// }, 0);//we want to start adding from zero
//the same in arrow function
const balance = movements.reduce((accumulator, cur) => accumulator + cur, 0);
console.log(`balance ` + balance);

//the same with for of
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//max value
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
console.log(max);

/////////////////////
//pipeline
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);//5522.000000000001


