import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get squared number of the smallest number of array', () => {
    const result = getMinSquaredNumber([-77, 2, 3, -7, -1]);
    expect(result).toEqual(1);
});