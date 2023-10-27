'use strict';
const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function (){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function (){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

class CarCl{
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS(){
        const curSpeed = this.speed / 1.6;
        console.log(`current speed is ${curSpeed} mi/h  get`);
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
        console.log(`current speed is ${this.speed} km/h  set`);
    }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);//CarCl { make: 'Ford', speed: 80 } -- 80 = 50 * 1.6

////////

const EV = function (make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
};

EV.prototype.accelerate = function (){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};
const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);

EV.prototype.constructor = EV;
console.dir(EV.prototype.constructor);