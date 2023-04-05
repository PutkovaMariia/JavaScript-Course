let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let bmiMarkFirst = markMass / markHeight ** 2;
let bmiMarkSecond = markMass / (markHeight * markHeight);
console.log(bmiMarkFirst, bmiMarkSecond);
let bmiJohnFirst = johnMass / johnHeight ** 2;
let bmiJohnSecond = johnMass / (johnHeight * johnHeight);
console.log(bmiJohnFirst, bmiJohnSecond);

let markHigherBMI = bmiMarkFirst > bmiJohnFirst;
console.log(markHigherBMI);

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

bmiMarkFirst = markMass / markHeight ** 2;
bmiMarkSecond = markMass / (markHeight * markHeight);
console.log(bmiMarkFirst, bmiMarkSecond);
bmiJohnFirst = johnMass / johnHeight ** 2;
bmiJohnSecond = johnMass / (johnHeight * johnHeight);
console.log(bmiJohnFirst, bmiJohnSecond);

markHigherBMI = bmiMarkFirst > bmiJohnFirst;
console.log(markHigherBMI);

if (bmiMarkFirst > bmiJohnFirst){
    console.log(`Mark's BMI (${bmiMarkFirst.toFixed(1)}) is higher than John's (${bmiJohnFirst.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${bmiJohnFirst.toFixed(1)}) is higher than Mark's (${bmiMarkFirst.toFixed(1)})!`);
}