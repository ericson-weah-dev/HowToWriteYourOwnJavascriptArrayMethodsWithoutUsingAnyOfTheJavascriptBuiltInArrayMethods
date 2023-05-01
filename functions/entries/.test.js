'use strict';

const entries = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| In this test suite, we are testing two different aspects of the entries function:

| 1) It should throw a TypeError if the argument is not an array.
| 2) It should return an array of arrays with each element's index and value.

| We are using Vitest to run the tests, and importing the entries function from a module named entries.js.

| The first test case checks if the function throws a TypeError when it is called with an argument
| that is not an array. 

| The second test case checks if the function returns the expected result
| when it is called with an array argument. 

| We test with various input types to ensure the function handles them correctly.
|
*/

describe('entries function', () => {


    /*
    |------------------------------------------------------------------------------------
    | Throw a TypeError if the argument is not an array.
    |------------------------------------------------------------------------------------
    */

    it('should throw a TypeError if the argument is not an array', () => {
        expect(() => entries(null)).toThrow(TypeError);
        expect(() => entries(42)).toThrow(TypeError);
        expect(() => entries('hello')).toThrow(TypeError);
        expect(() => entries({})).toThrow(TypeError);
    });

    /*
    |------------------------------------------------------------------------------------
    | Return an array of arrays with each element's index and value.
    |------------------------------------------------------------------------------------
    */


    it('should return an array of arrays with each element\'s index and value', () => {
        expect(entries([1, 2, 3])).toEqual([[0, 1], [1, 2], [2, 3]]);
        expect(entries(['a', 'b', 'c'])).toEqual([[0, 'a'], [1, 'b'], [2, 'c']]);
        expect(entries([true, false])).toEqual([[0, true], [1, false]]);
        expect(entries([])).toEqual([]);
    });

});