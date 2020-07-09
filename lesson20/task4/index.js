export class Order {
    constructor(price, city, type) {
        this._id = Math.random().toString;
        this._price = price;
        this._dateCreated = new Date;
        this._isConfirmed = false;
        this._dateConfirmed = null;
        this._city = city;
        this._type = type;
    }
    checkPrice() {
        return Boolean(this._price > 1000);
    }
    confirmOrder() {
        this._isConfirmed = true;
        this._dateConfirmed = new Date;
    }
    isValidType() {
        if (this._type === 'Buy' || this._type === 'Sell') return true;
        else return false;
    }
}
const order1 = new Order(600, 'Kyiv');
const order2 = new Order(1200, 'Dnepr', 'Buy');
console.log(order1.checkPrice());
console.log(order1);
console.log(order1.isValidType());