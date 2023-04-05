const country = 'Ukraine';
const continent = 'Eurasia';
let population = 40;
console.log(`I'm from ${country}, it is located in ${continent}. Population of ${country} is ${population} milloins!`);

let isIsland = false;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);

const language = 'ukrainian';
console.log(language);

let halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);

let populationFinland = 6;
console.log(population > populationFinland);

let populationAverage = 33;
console.log(population < populationAverage);

let populationDifference;
if (population > populationAverage){
    console.log("Ukraine's population is above average.")
} else {
    populationDifference = populationAverage - population;
    console.log(`Ukraine's population is ${populationDifference} million below average.`)
}
/*
console.log('23' > 2);
console.log('23' * '2');
console.log('20' / '2');
console.log(2+3+'5'+4-2);
*/

/*const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}
*/

if(language === 'English' && population < 50 && isIsland !== true){
    console.log("You should live in Ukraine :)")
} else {
    console.log("Ukriane doesn't meet your criteria :(")
}

switch (language) {
    case "chinese":
    case "mandarin":
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place in number of native speakers');
        break;
    case 'hindi':
        console.log('4th place in number of native speakers');
        break;
    case 'arabic':
        console.log('5th place in number of native speakers');
        break;
    default:
        console.log('Great language too :)');
}

console.log(`Ukraine's population is ${population > 33 ? 'above' : 'below'} average.`);