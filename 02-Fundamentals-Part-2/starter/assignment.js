'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const ukraineDescription = describeCountry('Ukraine', 40, 'Kyiv');
const polandDescription = describeCountry('Poland', 38, 'Warsaw');
const greeceDescription = describeCountry('Greece', 10, 'Athens');

console.log(ukraineDescription, polandDescription, greeceDescription);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const perChina = `Chinese people in the world ${percentageOfWorld1(1441).toFixed(2)}% of population`;
const perGreece = `Greek people in the world ${percentageOfWorld1(10).toFixed(2)}% of population`;
const perPoland = `Polish people in the world ${percentageOfWorld1(38).toFixed(2)}% of population`;
console.log(perChina);
console.log(perGreece);
console.log(perPoland);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const perChina2 = percentageOfWorld2(1441).toFixed(2);
const perGreece2 = percentageOfWorld2(10).toFixed(2);
const perPoland2 = percentageOfWorld2(38).toFixed(2);
console.log('percentageOfWorld2', perChina2, perGreece2, perPoland2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const perChina3 = percentageOfWorld3(1441).toFixed(2);
const perGreece3 = percentageOfWorld3(10).toFixed(2);
const perPoland3 = percentageOfWorld3(38).toFixed(2);
console.log('percentageOfWorld3', perChina3, perGreece3, perPoland3);

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population).toFixed(1)}% of the world.`;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Poland', 38));
console.log(describePopulation('Greece', 10));

const populations = [1441, 10, 38, 40];
console.log(4 === populations.length);
const percentages =
    [percentageOfWorld1(populations[0]).toFixed(2), percentageOfWorld1(populations[1]).toFixed(2), percentageOfWorld1(populations[2]).toFixed(2), percentageOfWorld1(populations[3]).toFixed(2)];
console.log(percentages);