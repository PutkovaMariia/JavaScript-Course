'use strict';
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
const ukraineDescription = describeCountry('Ukraine', 40, 'Kyiv');
const polandDescription = describeCountry('Poland', 38, 'Warsaw');
const greeceDescription = describeCountry('Greece', 10, 'Athens');

console.log(ukraineDescription, polandDescription, greeceDescription);

function percentageOfWorld1(population){
    return (population / 7900) * 100;
}
const perChina = `Chinese people in the world ${percentageOfWorld1(1441).toFixed(2)}% of population`;
const perGreece = `Greek people in the world ${percentageOfWorld1(10).toFixed(2)}% of population`;
const perPoland = `Polish people in the world ${percentageOfWorld1(38).toFixed(2)}% of population`;
console.log(perChina);
console.log(perGreece);
console.log(perPoland);

const percentageOfWorld2 = function(population){
    return (population / 7900) * 100;
}
const perChina2 = percentageOfWorld2(1441).toFixed(2);
const perGreece2 = percentageOfWorld2(10).toFixed(2);
const perPoland2 = percentageOfWorld2(30).toFixed(2);
console.log(perChina2, perGreece2, perPoland2);