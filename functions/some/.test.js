'use strict';

const some  = require('./index');


/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| This test
|
*/

describe('some function', () => {

    test('returns true if at least one element passes the test', () => {
        const arr = [1, 2, 3, 4, 5];
        const fn = (element) => element > 3;
        expect(some(arr, fn)).toBe(true);
      });
    
      test('returns false if none of the elements pass the test', () => {
        const arr = [1, 2, 3, 4, 5];
        const fn = (element) => element > 5;
        expect(some(arr, fn)).toBe(false);
      });
    
      test('throws TypeError if the first argument is not an array', () => {
        const arr = 'not an array';
        const fn = (element) => element > 5;
        expect(() => some(arr, fn)).toThrow(TypeError);
      });
    
      test('calls the callback function with the correct arguments', () => {
        // const arr = [1, 2, 3];
        // const callback = fn();
        // some(arr, callback);
        // expect(callback.mock.calls.length).toBe(arr.length);
        // expect(callback.mock.calls[0][0]).toBe(1);
        // expect(callback.mock.calls[0][1]).toBe(0);
        // expect(callback.mock.calls[0][2]).toBe(arr);
      });

});