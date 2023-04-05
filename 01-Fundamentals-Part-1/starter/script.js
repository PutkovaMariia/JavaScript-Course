/*let javascriptIsFun = true;
if (javascriptIsFun != false) console.log('As I said');

javascriptIsFun = 'yes';
console.log(typeof javascriptIsFun);
 */

/*const now = 2023;
const ageMasha = now - 1994;
const ageRoma = now - 1992;
console.log(`Masha is ${ageMasha} years and Roma is ${ageRoma}`);
 */

/*const firstName = 'Masha';
const lastName = 'Putkova';
const job = 'unemployed';
const birthYear = 1994;
let year = 2023;

const masha = "I'm " + firstName + ' ' + lastName +
    ". Currently I'm " + job + ". In two weeks I'll be " +
    (year - birthYear) + ' years old.';
console.log(masha);
const mashaNew = `I'm ${firstName} ${lastName}. Currently I'm ${job}. In two weeks I'll be ${year - birthYear} years old.`;
console.log(mashaNew);
 */

/*const age = 15;

if (age >= 18){
   console.log('Sarah can start driving licence 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`)
}

const birthYear = 1994;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);
 */

/*const inputYear = '1991';
console.log(Number(inputYear) + 18);

console.log(String(20));

console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - '3');
console.log('23' * '2');
console.log('20' / '2');
console.log(2+3+'5'+4);
 */

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Masha'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money){
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job!');
}

let height;
if(height){
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
 */

/*const age = '18';
if(age === 18) console.log('You just became an adult (strict)');
if(age == 18) console.log('You just became an adult (loose)'); //don't use

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if(favourite === 23){
    console.log('Cool! 23 is an amazing number')
} else if(favourite === 7){
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if(favourite !== 23) console.log('Why not 23?')
 */
/*
const hasDriversLicence = true;
const hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if(hasDriversLicence && hasGoodVision){
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Sarah should not drive')
// }

const isTired = true;
console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);

if(hasDriversLicence && !hasGoodVision && isTired){
    console.log('Sarah is able to drive')
} else {
    console.log('Sarah should not drive')
}
 */
/*
const day = 'thurs';

// switch (day) {
//     case 'monday':
//         console.log('Go to the gym');
//         console.log('Learn js');
//         break;
//     case 'tuesday':
//         console.log('Make love with my husband');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Go to the beach');
//         console.log('Watch the sunrise');
//         break;
//     case 'friday':
//         console.log('Practice English');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :)');
//         break;
//     default:
//         console.log('Do you see what are you typing? Really?')
// }

if (day === 'monday'){
    console.log('Go to the gym');
    console.log('Learn js');
} else if (day === 'tuesday'){
    console.log('Make love with my husband');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('Go to the beach');
    console.log('Watch the sunrise');
} else if (day === 'friday'){
    console.log('Practice English');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :)');
} else {
    console.log('Do you see what are you typing? Really?')
}
 */
