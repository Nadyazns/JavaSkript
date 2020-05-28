//input:obj,
//output: modified obj,


// algo
// 1.getFullName returns full name;
// 2.setFullName ('name lastname') => modified obj accordingly to name lastname.

export const user = {
    firstName: "Nadya",
    lastName: "Zhuravlova",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(name) {
        let arr = name.split(" ");
        // console.log(arr[0]);
        this.firstName = arr[0];
        this.lastName = arr[1];
        // console.log(user);

    }
}

// console.log(user.getFullName());
// let name = user.getFullName();
// console.log(name);