import { transaction } from './index.js'

it('return value of key currency', () => {
    const result = transaction.currency;
    expect(result).toEqual('USD')
});
it('return value of key value', () => {
    const result = transaction['value'];
    expect(result).toEqual(170);
});

it('return value of the object agent key company', () => {
    const result = transaction.agent['company'];
    expect(result).toEqual('NYSE');
});