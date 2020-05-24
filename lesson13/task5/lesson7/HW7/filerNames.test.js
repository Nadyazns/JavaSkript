import { filterNames } from './index.js';

it('should filter the array of names and return only names that include assigned value', () => {
    const result = filterNames(['John', 'Oliviya', 'Nadya'], 'ya');
    expect(result).toEqual(['Oliviya']);
});

it('should filter the array of names and return only names longer than 5', () => {
    const result = filterNames(['John', 'Oliviya', 'Nadya'], 'ya');
    expect(result).toEqual(['Oliviya']);
});
it('should filter the array of names and return only names longer than 5', () => {
    const result = filterNames(['John', 'Oliviya', 'Nadiya'], 'ya');
    expect(result).toEqual(['Oliviya', 'Nadiya']);
});