export const user = {
    firstName: "Nadya",
    lastName: "Zhuravlova",
    fullName: function getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
user.fullName();