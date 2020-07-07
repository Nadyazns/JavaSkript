export function getOwnProps(obj) {
    return console.log(Object.keys(obj));
}

// const vehicle = {
//     name: 'Argo',
//     move() {
//         console.log(`${this.name} is moving`);
//     },
//     stop() {
//         console.log(`${this.name} stopped`);
//     },
// }

// // console.log(vehicle);

// const ship = {


//     stopMachine() {
//         this.stop();
//         console.log(`${this.name} lifting anchor down`);

//     },
//     startMachine() {

//         console.log(`${this.name} lifting anchor up`);
//         this.move();
//     },
//     __proto__: vehicle,
// };

// getOwnProps(ship);