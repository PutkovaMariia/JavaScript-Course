'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaNew = dogsJulia.slice(1, -2);
    const dogsAge = [...dogsJuliaNew, ...dogsKate];
    dogsAge.forEach(function (age, i) {
        if (age >= 3) {
            console.log(`Dog number ${i + 1} is an adult🐕, and is ${age} years old`)
        } else if (age < 3) {
            console.log(`Dog number ${i + 1} is still a puppy🐶`)
        }
    })
}
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log('----------');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

////////

// const calcAverageHumanAge = function (ages) {
//     const humanAge = ages.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4);
//     console.log(`humanAge: ${humanAge}`);
//     const adultDogs = humanAge.filter(age => age >= 18);
//     console.log(`adultDogs: ${adultDogs}`);
//     console.log(`adultDogs.length: ${adultDogs.length}`);
//     return adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
// };

const calcAverageHumanAge = ages => ages
    .map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
//console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
//     Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
//     Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']},
];
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

//mine
// dogs.forEach(function (item, index){
//     const recommendedFood = Math.round(item.weight ** 0.75 * 28);
//     item.recommendedFood = recommendedFood;
// });

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//////////////////////////////////////////
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �

//mine
// dogs.forEach(function (item, index){
//     if (item.owners.includes('Sarah')) {
//         if (item.curFood > item.recommendedFood){
//             console.log('eat too much');//true
//         } else if (item.curFood < item.recommendedFood){
//             console.log('eat too little');
//         };
//     }
// })

const dogSarah = dogs
    .find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'too much' : 'too little'}`);

//////////////////////////////////////////
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

//mine
// const ownersEatTooMuchArr = [];
// const ownersEatTooLittleArr = [];
// dogs.forEach(function (item, index){
//     if (item.curFood > item.recommendedFood){
//         ownersEatTooMuchArr.push(item.owners);
//     } else if (item.curFood < item.recommendedFood){
//         ownersEatTooLittleArr.push(item.owners);
//     }
// })

const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);

//////////////////////////////////////////
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

//mine
// const ownersEatTooMuch = ownersEatTooMuchArr.flat();
// const ownersEatTooLittle = ownersEatTooLittleArr.flat();
//
// console.log(`${ownersEatTooMuch[0]} and ${ownersEatTooMuch[1]} and ${ownersEatTooMuch[2]}'s dogs eat too much!`)
// console.log(`${ownersEatTooLittle[0]} and ${ownersEatTooLittle[1]} and ${ownersEatTooLittle[2]}'s dogs eat too little!`)

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//////////////////////////////////////////
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)

//mine
// dogs.forEach(function (item, index){
//     item.curFood === item.recommendedFood ? console.log(true) : console.log(false);
// })

console.log(dogs.some(dog => dog.curFood === dog.recFood));

//////////////////////////////////////////
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

//mine
// dogs.forEach(function (item, index){
//     item.curFood >= item.recommendedFood * 0.9 &&
//     item.curFood <= item.recommendedFood * 1.1 ?
//         console.log(true) : console.log(false);
// })

const eatOk = dog => dog.curFood > dog.recFood * 0.9 &&
    dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(eatOk));

//////////////////////////////////////////
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)

//mine
// const eatOkay = [];
// dogs.forEach(function (item, index){
//     if (item.curFood >= item.recommendedFood * 0.9 &&
//     item.curFood <= item.recommendedFood * 1.1){
//         eatOkay.push(item);
//     }
// })

console.log(dogs.filter(eatOk));

//////////////////////////////////////////
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)

//mine
// const dogsCopy = dogs.map(x => x).sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogsCopy);

const dogsCopy = dogs
    .slice()
    .sort((a,b) => a.recFood - b.recFood);
console.log(dogsCopy);
