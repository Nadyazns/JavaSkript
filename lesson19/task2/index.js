 export function getOwnProps(obj) {
     // for (let prop in obj) {
     //     if (obj.hasOwnProperty(prop)) {
     //         return prop;
     //     }
     // }
     return Object.keys(obj).filter((i) => typeof obj[i] != 'function');
 }

 //  const vehicle = {
 //      name: 'Argo',
 //      move() {
 //          console.log(`${this.name} is moving`);
 //      },
 //      stop() {
 //          console.log(`${this.name} stopped`);
 //      },
 //  }

 //  // console.log(vehicle);

 //  const ship = {
 //      age: 1,
 //      name: 'Argo',
 //      stopMachine() {
 //          this.stop();
 //          console.log(`${this.name} lifting anchor down`);

 //      },
 //      startMachine() {

 //          console.log(`${this.name} lifting anchor up`);
 //          this.move();
 //      },
 //      __proto__: vehicle,
 //  };

 //  console.log(getOwnProps(ship));