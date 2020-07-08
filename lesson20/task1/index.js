export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge(a) {
        if (a < 0) {
            return false;
        }
        this.age = a;
        if (a >= 25) {
            this.requestNewPhoto();
        }
        return this.age;
    }
    static createEmpty() {

        return new User(' ', null);

    }
}



const user1 = new User('Tom', -1);
const user2 = new User('Nadya', 33);
console.log(User.createEmpty());

console.log(user1.setAge());