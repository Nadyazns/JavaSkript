export class Order {
    constructor(price, city, type) {
        this.id = `${Math.random()}`;
        this.price = price;
        this.dateCreated = new Date;
        this.isConfirmed = false;
        this.dateConfirmed = null;
        this.city = city;
        this.type = type;
    }
    checkPrice() {
        return Boolean(this.price > 1000);
    }
    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date;
    }
    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') return true;
        else return false;
    }
}
// const order1 = new Order(600, 'Kyiv');
// const order2 = new Order(1200, 'Dnepr', 'Buy');
// console.log(order1.checkPrice());
// console.log(order1);
// console.log(order1.isValidType());