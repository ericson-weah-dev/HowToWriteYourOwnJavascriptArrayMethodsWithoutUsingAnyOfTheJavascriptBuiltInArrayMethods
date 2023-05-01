const from = require('./index')

describe('from function', () => {
    it('It should convert iterable to array with no map function', () => {
        const iterable = [1, 2, 3];
      
        const output = from(iterable);
      
        expect(output).toEqual([1, 2, 3]);
      });
      
      it('It should convert iterable to array with map function', () => {
        const iterable = [1, 2, 3];
      
        const mapFn = x => x * 2;
      
        const output = from(iterable, mapFn);
      
        expect(output).toEqual([2, 4, 6]);
      });
      
      it('It should convert iterable to array with map function and thisArg', () => {
        const iterable = [1, 2, 3];
      
        const mapFn = function(x) {
          return x * this.multiplier;
        };
      
        const thisArg = { multiplier: 2 };
      
        const output = from(iterable, mapFn, thisArg);
      
        expect(output).toEqual([2, 4, 6]);
      });
      
      it('It should throw TypeError for null iterable', () => {
        const iterable = null;
      
        expect(() => from(iterable)).toThrow(TypeError);
      });
      
      it('It should throw TypeError for undefined iterable', () => {
        const iterable = undefined;
      
        expect(() => from(iterable)).toThrow(TypeError);
      });
      
      it('It should throw TypeError for non-iterable', () => {
        const iterable = 123;
      
        expect(() => from(iterable)).toThrow(TypeError);
      });
})