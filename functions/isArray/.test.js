'use strict';

const isArray = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| In this example, we import the test function from Jest and the mount function from @vue/test-utils. We also import the isArray function from the module we want to test.

| We then define five tests using the test function. 

| The first test checks that the isArray function returns true for an array. 
| We define an input array and call the isArray function with it. 
| We use the expect function to check that the output of the isArray function is true.

| The second test checks that the isArray function returns false for a non-array value. 
| We define a non-array input and call the isArray function with it. We use the expect function
|  to check that the output of the isArray function is false.

| The third test checks that the isArray function returns true for an empty array. 
| We define an empty input array and call the isArray function with it. 
| We use the expect function to check that the output of the isArray function is true.

| The fourth test checks that the isArray function returns true for an array with mixed types. 
| We define an input array with numbers, strings, and objects, and call the isArray function with it. 
| We use the expect function to check that the output of the isArray function is true.

| The fifth test checks that the isArray function returns false for an object. 
| We define an input object and call the isArray function with it. 
| We use the expect function to check that the output of the isArray function is false.

| Overall, these tests check that the isArray function correctly identifies arrays and non-arrays,
| and ensures that the function works as expected in both Node.js and the browser using Vite.
|
*/

describe('isArray function', () => {

    /*
    |----------------------------------------------------
    | Should returns true for an array. 
    |----------------------------------------------------
    */
    it('It should return true for arrays', () => {
        const input = [1, 2, 3];

        const output = isArray(input);

        expect(output).toBe(true);
    });


    /*
    |----------------------------------------------------
    | Should returns false for a non-array value. 
    |----------------------------------------------------
    */
    it('It should return false for non-arrays', () => {
        const input = 'hello';

        const output = isArray(input);

        expect(output).toBe(false);
    });


    /*
    |----------------------------------------------------
    | Should returns true for an empty array. 
    |----------------------------------------------------
    */
    it('It should return true for empty arrays', () => {
        const input = [];

        const output = isArray(input);

        expect(output).toBe(true);
    });


    /*
    |----------------------------------------------------------------
    | Should returns true for an array with mixed types. 
    |----------------------------------------------------------------
    */
    it('It should return true for arrays with mixed types', () => {
        const input = [1, 'two', { three: 3 }];

        const output = isArray(input);

        expect(output).toBe(true);
    });

    /*
    |-----------------------------------------------------
    | Should returns false for an object. 
    |-----------------------------------------------------
    */
    it('It should return false for objects', () => {
        const input = { foo: 'bar' };

        const output = isArray(input);

        expect(output).toBe(false);
    });
});