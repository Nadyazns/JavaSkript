export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
}

// console.log(vehicle);

export const ship = {


    stopMachine() {
        console.log(`${this.name} lifting anchor down`);

    },
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
    },
    __proto__: vehicle,
};
ship.move();