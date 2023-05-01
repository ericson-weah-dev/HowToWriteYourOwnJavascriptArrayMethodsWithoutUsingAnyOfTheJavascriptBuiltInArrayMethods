const isArray = require('./index')

describe('isArray function', () => {
    it('It should return true for arrays', () => {
        const input = [1, 2, 3];

        const output = isArray(input);

        expect(output).toBe(true);
    });

    it('It should return false for non-arrays', () => {
        const input = 'hello';

        const output = isArray(input);

        expect(output).toBe(false);
    });

    it('It should return true for empty arrays', () => {
        const input = [];

        const output = isArray(input);

        expect(output).toBe(true);
    });

    it('It should return true for arrays with mixed types', () => {
        const input = [1, 'two', { three: 3 }];

        const output = isArray(input);

        expect(output).toBe(true);
    });

    it('It should return false for objects', () => {
        const input = { foo: 'bar' };

        const output = isArray(input);

        expect(output).toBe(false);
    });
});