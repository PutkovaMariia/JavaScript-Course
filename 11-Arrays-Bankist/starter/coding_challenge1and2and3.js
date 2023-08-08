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
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('----------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

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
        .reduce((acc, age, i, arr) => acc + age/ arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));