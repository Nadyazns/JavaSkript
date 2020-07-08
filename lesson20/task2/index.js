export class Vehicle {
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

export class Ship extends Vehicle {
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