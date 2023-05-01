const push = require('./index')
const length = require('../length')

describe('push function', () => {

    it('push function appends elements to an array', () => {
        const input = [1, 2, 3];
        const elements = [4, 5];
      
        const output = push(input, ...elements);
        
        expect(output).toBe(length(input));
        expect(input).toEqual([1, 2, 3, 4, 5]);
      });
      
      it('It should not append elements to non-arrays', () => {
        const input = 'hello';
        const elements = [4, 5];
      
        const output = push(input, ...elements);
      
        expect(output).toBe(input);
        expect(input).toEqual('hello');
      });
      
      it('It should not append elements to null or undefined', () => {
        const input = null;
        const elements = [4, 5];
      
        const output = push(input, ...elements);
      
        expect(output).toBe(input);
        expect(input).toEqual(null);
      });
      
      it('It should return the new length of the array', () => {
        const input = [1, 2, 3];
        const elements = [4, 5];
      
        const output = push(input, ...elements);
      
        expect(output).toBe(length(input));
      });
      
      it('It should append elements to an empty array', () => {
        const input = [];
        const elements = [4, 5];
      
        const output = push(input, ...elements);
      
        expect(output).toBe(length(input));
        expect(input).toEqual([4, 5]);
      });

})

