'use strict';

const mark = {
    firstName: 'Mark',
    lastName : 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI : function (){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI : function (){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
console.log(mark.calcBMI());
console.log(john.calcBMI());
if (john.bmi > mark.bmi) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi.toFixed(2)})!`);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi.toFixed(2)})!`);
}
