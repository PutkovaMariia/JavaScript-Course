'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes.toFixed(2)}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === +inputLoginPin.value) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Math.floor(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        +inputClosePin.value === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);
        // .indexOf(23)

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(23 === 23.00)//true
// base 10 - 0 to 9
// binary base 2 - 0 and 1

//converting strings to numbers
console.log(Number('23'));//23
console.log(+'23');//23
console.log(Number('8') === +'8');//true

//parsing
console.log(Number.parseInt('30px', 10));//30 (where 10 is base 10, we need to write it to avoid some bugs)
console.log(Number.parseInt('e23', 10));//NaN (because it should start from a number)

console.log(Number.parseFloat('2.5rem'));//2.5
console.log(Number.parseInt('2.5rem'));//2

//check if value is NaN
console.log(Number.isNaN(20));//false
console.log(Number.isNaN('20'));//false
console.log(Number.isNaN(+'20x'));//true
console.log(Number.isNaN(23/0));//false

//checking if the value is a number (the best way)
console.log(Number.isFinite(20));//true
console.log(Number.isFinite('20'));//false
console.log(Number.isFinite(+'20x'));//false
console.log(Number.isFinite(23/0));//false
*/
/*
console.log(Math.sqrt(25));//5
console.log(25 ** (1/2));//5 (the same)
console.log(8 ** (1/3));//2 (only way to calculate the cubic root)

console.log(Math.max(5,18,23,1,22));//23
console.log(Math.max(5,18,'23',1,22));//23 (still works)
console.log(Math.max(5,18,'23px',1,22));//Nan

//calculate the area of the circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);//314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1);//random from 1 to 6

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));//random from 10 to 20

//rounding integers
console.log(Math.trunc(23.2));//23
console.log(Math.round(23.9));//24

console.log(Math.ceil(23.2));//24
console.log(Math.ceil(23.9));//24

console.log(Math.floor(23.2));//23
console.log(Math.floor(23.9));//23

console.log(Math.trunc(-23.2));//-23
console.log(Math.floor(-23.9));//-24

//rounding decimals
console.log((2.7).toFixed(0))//'3' (as string)
console.log((2.7).toFixed(3))//'2.700'
console.log((2.345).toFixed(2))//'2.35'
console.log(+(2.345).toFixed(2))//2.35 (+ converts string to a number)
*/
/*
//reminder operator
console.log(5 % 2);//1

//we can check if the number is even (0,2,4,6,8,9...) or not (1,3,5,7,11...)
const isEven = n => n % 2 === 0;
console.log(isEven(8));//true
console.log(isEven(13));//false

//we can use it when we need to do something every n-th time

labelBalance.addEventListener('click', function (){
    [...document.querySelectorAll('.movements__row')]
        .forEach(function (row, i) {
            if (i % 2 === 0) row.style.backgroundColor = 'orangered';
            if (i % 3 === 0) row.style.backgroundColor = 'green';
        });
})
*/
/*
//numeric separators (only for numbers)
//287,460,000,000
const diameter = 287_460_000_000;//we can use _ to separate numbers to understand them more clearly, in the console it will be without _
console.log(diameter);//287460000000

console.log(Number('230000'));//230000
console.log(Number('230_000'));//NaN
*/

//the biggest number (because we have 64-bit system)
console.log(2**53-1);//9007199254740991
// (53 because only 53 are used to display digits themselves,
// the rest are for storing the position of the decimal point and a sign)
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

//if we need to write a big number we can have this problem
console.log(1234567890123456789123456789123456789);//1.2345678901234568e+36
//but if we will add 'n' this number becomes BigINT
console.log(1234567890123456789123456789123456789n);//1234567890123456789123456789123456789n

//BigInt should be used with smaller numbers
console.log(BigInt(1234567890123456789123456789123456789));//1234567890123456841093504014485553152n(not the same as we logged)
console.log(BigInt(1234567890123456));//1234567890123456n

//operations
console.log(10000n + 10000n);//20000n
console.log(4562145862148563214586n * 100000n);//456214586214856321458600000n
console.log(11n / 3n);//3n
console.log(10n / 3n);//3n
console.log(12n / 3n);//4n

console.log(523665254236952369n + 'is a big int');//523665254236952369is a big int (as a string)

//exceptions
console.log(20n> 15);//true
console.log(20n === 20);//false
console.log(20n == '20');//true

