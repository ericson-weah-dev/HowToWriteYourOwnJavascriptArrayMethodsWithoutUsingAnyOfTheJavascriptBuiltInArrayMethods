'use strict';

const find = require('./index');
const assert = require('assert');

/*
|------------------------------------------------------------------------------------
| TEST SUITE
|------------------------------------------------------------------------------------
|
| The find function takes two optional parameters: an array and a function.
| The function iterates over the array and returns the first element for which the given function returns a truthy value.
| If no such element is found, the function returns undefined.

| The fourth test in the find function test suite checks whether the find function passes the element, index, and array to the given function.

| The test first creates an array of numbers and a mock function that takes in the element, index, and array and returns them as an array.
| The mock function is defined using a function expression that takes in three parameters: element, index, and array.

| Next, the test passes the mock function as the second parameter to the find function and assigns the return value to a variable called result.

| Then, the test creates an expected array that contains the first element of the original array, its index, and the original array itself.
| The expected array is created using an array literal and the bracket notation to access the first element and the length property of the array.

| Finally, the test uses the assert.deepStrictEqual() method from the built-in assert module to compare the result array to 
| the expected array and ensure that they are deeply equal.

| If the result array matches the expected array, the test passes. Otherwise, the test fails and an error is thrown.

| By testing this behavior, we can ensure that the find function is functioning as intended and that the code is correctly passing the element, index, and array
| to any user-defined functions that are passed to it. The test also helps us catch any potential bugs or errors that might arise from incorrect argument passing.
|
*/

describe('find function', () => {

    /*
    |------------------------------------------------------------------------------------
    | Should throw a TypeError if the first argument is not an array
    |------------------------------------------------------------------------------------
    */
    it('throws a TypeError if the first argument is not an array', () => {
        assert.throws(() => find('not an array', () => true), TypeError);
        assert.throws(() => find(123, () => true), TypeError);
        assert.throws(() => find({ name: 'test' }, () => true), TypeError);
    });

    /*
    |------------------------------------------------------------------------------------
    | Should return the first element that matches the given function
    |------------------------------------------------------------------------------------
    */

    it('returns the first element that matches the given function', () => {
        const arr = [1, 2, 3, 4, 5];
        const even = x => x % 2 === 0;
        const odd = x => x % 2 !== 0;
        assert.strictEqual(find(arr, even), 2);
        assert.strictEqual(find(arr, odd), 1);
    });

    /*
    |------------------------------------------------------------------------------------
    | Should return undefined if no elements match the given function
    |------------------------------------------------------------------------------------
    */

    it('returns undefined if no elements match the given function', () => {
        const arr = [1, 3, 5, 7, 9];
        const even = x => x % 2 === 0;
        assert.strictEqual(find(arr, even), undefined);
    });

    /*
    |------------------------------------------------------------------------------------
    | Should passe the element, index, and array to the given function
    |------------------------------------------------------------------------------------
    */
    it('passes the element, index, and array to the given function', () => {
        const arr = [1, 2, 3, 4, 5];
        const mockFn = function (element, index, array) {
            return [element, index, array];
        }
        const result = find(arr, mockFn);
        const expected = [1, 0, [1, 2, 3, 4, 5]];
        assert.deepStrictEqual(result, expected);
    });
});