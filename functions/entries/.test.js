'use strict';

const entries  = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| This test
|
*/

describe('entries function', () => {

    it('should throw a TypeError if the argument is not an array', () => {
        expect(() => entries(null)).toThrow(TypeError);
        expect(() => entries(42)).toThrow(TypeError);
        expect(() => entries('hello')).toThrow(TypeError);
        expect(() => entries({})).toThrow(TypeError);
      });
    
      it('should return an array of arrays with each element\'s index and value', () => {
        expect(entries([1, 2, 3])).toEqual([[0, 1], [1, 2], [2, 3]]);
        expect(entries(['a', 'b', 'c'])).toEqual([[0, 'a'], [1, 'b'], [2, 'c']]);
        expect(entries([true, false])).toEqual([[0, true], [1, false]]);
        expect(entries([])).toEqual([]);
      });

});