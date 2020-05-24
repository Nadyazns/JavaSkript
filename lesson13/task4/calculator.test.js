import { calc } from './calculator.js';
it('should get sum', () => {
    const result = calc('2 * 3');
    expect(result).toEqual('2 * 3 = 6');
});

it('should return null', () => {
    const result = calc(1);
    expect(result).toEqual(null);
});