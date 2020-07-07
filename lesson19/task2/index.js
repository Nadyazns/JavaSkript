export function getOwnProps(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return prop;
        }
    }
    // return console.log(Object.keys(obj));


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