// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`Hi, I am ${this.name}`);
//     }
//     requestNewPhoto() {
//         console.log(`New photo request was sent for ${this.name}`);
//     }
//     setAge(a) {
//         if (a < 0) {
//             return false;
//         }
//         this.age = a;
//         if (a >= 25) {
//             this.requestNewPhoto();
//         }
//         return this.age;
//     }
//     static createEmpty() {

//         this.name = " ";
//         this.age = null;

//     }
// }



// const user1 = new User('Tom', -1);
// const user2 = new User('Nadya', 33);
// console.log(User.createEmpty());

// console.log(user1.setAge());

class Vehicle {
    constructor(name, numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
};

// console.log(vehicle);

class Ship extends Vehicle {
    constructor(name, maxSpeed) {
        super(name, false);
        this.maxSpeed = maxSpeed;

    }

    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);

    }
    startMachine() {

        console.log(`${this.name} lifting anchor up`);
        this.move();
    }

};

const ship1 = new Ship('Aurora', 100);
console.log(ship1);

ship1.stopMachine();