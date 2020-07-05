export const wallet = {
        transactions: [1, 663, 98, 98342, 56, 2],
        getMax() {
            return Math.max(...this.transactions);
        },
        getMin() {
            return Math.min.apply(null, this.transactions);
        }
    }
    // console.log(wallet.getMax());
    // console.log(wallet.getMin());