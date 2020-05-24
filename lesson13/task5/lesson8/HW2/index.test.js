import { user } from './index.js';



it('should return value of hobby', () => {
    const result = user.hobby;
    expect(result).toEqual('football')
});
it('return value of obj address value of the country', () => {
    const result = user.address['country'];
    expect(result).toEqual('Ukraine');
});

it('should return value of the key favourite music', () => {
    const result = user['favorite music'];
    expect(result).toEqual('rock');
});