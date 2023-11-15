class Account {
    //1.public fields(instances)
    // locale = navigator.language;

    //2.private fields(instances)
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //protected property
        // this._movements = [];
        // this.local = navigator.language;

        console.log(`thanks for opening account, ${owner}`);
    }

    call() {
    //     ...
    }
}

const circle1 = {
    run: function () {
        //...
    }
}

const circle2 = {
    run: function () {
        //...
    }
}


const circle3 = {
    run: function () {
        //...
    }
}

const circles = [circle1, circle2, circle3]

circles.forEach(curcle => {
    curcle.rut()
    switch (typeof curcle) {
        case "circle1":
            curcle.runCircle1()
            break
        case "circle2":
            curcle.run()
            break
        case circle3:
            curcle.doIt()
    }
})

circles.forEach(animal => {
    animal.run()
})

//
// nie robimy objektu. Abstrack
class Animals {
    run() {
        console.log("Global Method")
    }
}

interface Animals {
    run()
}

// abstract
class WhiteCat extends Animals {
    test() {

    }
}

const myWhiteCat = new WhiteCat()
myWhiteCat.test()
myWhiteCat.run()

class cat extends Animals {
// class cat implements Animals {
    run() {
        console.log("cat Method")
    }
}

class dog extends Animals() {
    run() {
        console.log("dog Method")
    }
}

class pit extends Animals() {
    run() {
        console.log("pit Method")
    }
}

const animals = [new cat(), new dog(), new pit()]

animals.forEach(animal => {
    animal.run()
})

