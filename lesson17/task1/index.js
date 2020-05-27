export const user = {
    firstName: "Nadya",
    lastName: "Zhuravlova",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
user.getFullName();