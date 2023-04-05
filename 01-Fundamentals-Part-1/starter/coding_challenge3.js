const dolphinsFirst = 97;
const dolphinsSecond = 112;
const dolphinsThird = 101;
const koalasFirst = 109;
const koalasSecond = 95;
const koalasThird = 122;

const dolphinsAverage = (dolphinsFirst + dolphinsSecond + dolphinsThird) / 3;
const koalasAverage = (koalasFirst + koalasSecond + koalasThird) / 3;
console.log(`Average score for Dolphins is ${dolphinsAverage.toFixed(1)}, for Koalas is ${koalasAverage.toFixed(1)}.`)

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
    console.log('The winner is Dilphins!')
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100){
    console.log('The winner is Koalas!')
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100){
    console.log('Friendship wins!')
} else {
    console.log('They both are loosers')
}