import { arrAverage } from './index.js';

it('should return null argument passed in function is not array', () => {
    const result = arrAverage(2);
    expect(result).toEqual(null);
});
it('should return the arithmetic mean of given array of numbers ', () => {
    const result = arrAverage([1, 2, 3]);
    expect(result).toEqual(2);
});
it('should return the arithmetic mean of given array of numbers ', () => {
    const result = arrAverage([1, 26, 3]);
    expect(result).toEqual(10);
});