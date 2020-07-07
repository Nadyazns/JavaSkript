export function User(name, age) {
    this.name = name;
    this.age = age;
};

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function(a) {
    if (a < 0) return false;
    if (a > 0) {
        if (a >= 25) {
            return this.requestNewPhoto();
        }
        return this.age;
    }
};


// const user1 = new User('Tom', -1);
// const user2 = new User('Nadya', 33);

// console.log(user1.setAge());