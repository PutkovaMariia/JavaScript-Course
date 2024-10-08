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

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    //we need to create a copy, so we do not mutate original array
    const movs = sort ? movements
        .slice()
        .sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
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


const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements
        .reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${acc.balance}€`;
};

//////////////
const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const outcome = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outcome)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * acc.interestRate / 100)
        .filter(inter => inter >= 1)
        .reduce((acc, inter) => acc + inter, 0);
    labelSumInterest.textContent = `${interest}€`;
}

//////////////
const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLocaleLowerCase().split(' ')
            .map(name => name[0]).join('');
    })
}

createUsernames(accounts);

const updateUI = function (acc) {
    //display movements
    displayMovements(acc.movements);

    //display balance
    calcDisplayBalance(acc);

    //display summary
    calcDisplaySummary(acc);
};

//event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {

    e.preventDefault();//prevent form from submitting
    currentAccount = accounts
        .find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {//? is optional chaining, so we don`t need to write this second time in another place, we can make it in one place multiple times

        //display ui and welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        //clear the input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();//this field loses focus

        //update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();//prevent form from submitting
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts
        .find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc.username !== currentAccount.username) {
        //doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 &&
        currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        //add the movment
        currentAccount.movements.push(amount);

        //update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts
            .findIndex(acc => acc.username === currentAccount.username);
        console.log(index);

        //delete account
        accounts.splice(index, 1);

        //hide UI
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
})

/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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

/*
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

const deposits = movements.filter(mov => mov > 0);
console.log(movements);//[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits);//[200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);//[ -400, -650, -130 ]


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
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);//5522.000000000001
*/
/*
//returns first element which satisfied the condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//the same with for of
const accountFor = function (name){
    for (const acc of accounts){
        if (acc.owner === name){
            return acc;
        }
    }
};
console.log(accountFor('Jonas Schmedtmann'));
 */

/////////
/*
//equality
console.log(movements.includes(-130));

//some: condition (at least 1 matches the condition)
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//every (all need to match the condition)
console.log(account4.movements.every(mov => mov > 0));//true

//separate callback (we can save the condition and don`t write it every time)
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
 */
/*
//flat method only goes one level deep
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());//[1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());//[Array(2), 3, 4, Array(2), 7, 8]

//we can set how deep we want to go
const arrDeep2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep2.flat(2));//[1, 2, 3, 4, 5, 6, 7, 8]

////////

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);//[Array(8), Array(8), Array(8), Array(5)]
const allMovements = accountMovements.flat();
console.log(allMovements);//[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
const overallBalance = allMovements
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);//17840

//the same but shorter
const overallBalance2 = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);//17840

//flatMap (combine map and flat) (goes only 1 level deep, and we can not change it)
const overallBalance3 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance3);
 */
/*
//sort with strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());//[ "Adam", "Jonas", "Martha", "Zach" ]
console.log(owners);////[ "Adam", "Jonas", "Martha", "Zach" ]--sort mutates original array

//sort with numbers
console.log(movements);//[ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(movements.sort());//[ -130, -400, -650, 1300, 200, 3000, 450, 70 ]--works incorrectly

//return < 0 => a, b (keep order)
//return > 0 => b, a (switch order)
//first option (long)
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
// })
//second option (short)
movements.sort((a, b) => a - b);
console.log(movements);//[ -650, -400, -130, 70, 200, 450, 1300, 3000 ]
 */
/*
const x = new Array(7);
console.log(x);//[ <7 empty slots> ]
//method fill, only one way to work with empty arrays
x.fill(1);
console.log(x);//[ 1, 1, 1, 1, 1, 1, 1 ]

const y = new Array(7);
y.fill(1, 3, 5);
console.log(y);//[ <3 empty slots>, 1, 1, <2 empty slots> ]

//method fill works with full arrays too
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 6);
console.log(arr);//[ 1, 2, 23, 23, 23, 23, 7 ]

//array.from
const q = Array.from({length: 7}, () => 1);
console.log(q);//[ 1, 1, 1, 1, 1, 1, 1 ]

const w = Array
    .from({length: 7}, (_, i) => i + 1);//_ is `throwaway` variable, that we don`t need but we can`t skip it
console.log(w);//[ 1, 2, 3, 4, 5, 6, 7 ]

//creating an array of 100 dice rolls
const e = Array
    .from({length: 100}, () => Math
        .floor(Math.random() * 6) + 1);
console.log(e);

labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('€', '')));
    console.log(movementsUI);
})
 */
//////////////////////////////
//practice
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum,cur) => sum + cur, 0);
console.log(bankDepositSum);
/////
//first way
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov >= 1000)
    .length;
console.log(numDeposits1000);//6
//second way
const numDeposits1000second = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0);//another way of count + 1 is ++count
console.log(numDeposits1000second);//6
/////
const {deposits, withdrawals} = accounts
    .flatMap(acc => acc.movements)
    .reduce((sums, cur) => {
        //cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;//this is cleaner then the upper one
        return sums;
    }, {deposits: 0, withdrawals: 0});
console.log(deposits, withdrawals);//25180 -7340
/////
const convertTitleCase = function (title){
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
    const exceptions = ['a', 'an', 'and', 'but', 'or', 'on', 'in', 'with'];
    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => exceptions.includes(word) ? word : capitalize(word))
        .join(' ');

    return capitalize(titleCase);
}
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));