'use strict';

const values = require('./index');

/*
|------------------------------------------------------------------------------------
| TEST SUITE
|------------------------------------------------------------------------------------
|
| The values function takes two optional parameters: an array and an index (which defaults to 0 if not specified).
| The function returns an iterator object that can be used to iterate through the values in the array starting from the specified index.


| The test suite is implemented using Jest, a popular JavaScript testing framework. 
| The test suite includes four individual tests that cover different scenarios of the values function.

| The first test checks whether the values function returns an iterator object with the expected methods. 
| The test uses the Jest expect function to check that the result of calling values with an empty array is an object,
| that the object has a next method, and that the next method is a function. These checks ensure that 
| the values function is returning an iterator object that can be used to iterate over an array.

| The second test checks whether the values function throws a TypeError when the argument is not an array. 
| The test uses the Jest expect function and the toThrow matcher to check that calling values 
| with a non-array argument (a string, a number, or an object) results in a TypeError being thrown. 
| This test ensures that the values function correctly validates its input and throws an appropriate error when necessary.

| The third test checks whether the values function iterates through the array and returns each value in the array. 
| The test creates an array of numbers and passes it to the values function. 
| The test then uses the expect function to check that calling the next method of the returned iterator object returns each value in 
| the array in sequence, starting from the first value. The test also checks that calling next after 
| the last value in the array returns an object with done=true.

| The fourth test checks whether the values function returns done=true when the end of the array is reached. 
| The test creates an array of numbers and passes it to the values function. The test then calls the next method of 
| the iterator object twice to iterate through the first two values in the array. The test then uses 
| the expect function to check that calling next again returns an object with done=true. 
| This test ensures that the values function correctly reports when it has reached the end of the array.
|
*/

describe('values function', () => {

    /*
    |------------------------------------------------------------------------------------
    | Should return an iterator object with the expected methods. 
    |------------------------------------------------------------------------------------
    */
    it('returns an iterator object', () => {
        const iterator = values([]);
        expect(typeof iterator).toBe('object');
        expect(iterator.next).toBeDefined();
        expect(typeof iterator.next).toBe('function');
    });


    /*
    |------------------------------------------------------------------------------------
    | Should throw a TypeError when the argument is not an array. 
    |------------------------------------------------------------------------------------
    */
    it('throws a TypeError if the argument is not an array', () => {
        expect(() => values('not an array')).toThrow(TypeError);
        expect(() => values(123)).toThrow(TypeError);
        expect(() => values({})).toThrow(TypeError);
    });


    /*
    |------------------------------------------------------------------------------------
    | Should iterate through the array and returns each value in the array. 
    |------------------------------------------------------------------------------------
    */
    it('iterates through the array and returns each value', () => {
        const arr = [1, 2, 3, 4, 5];
        const iterator = values(arr);
        expect(iterator.next().value).toBe(1);
        expect(iterator.next().value).toBe(2);
        expect(iterator.next().value).toBe(3);
        expect(iterator.next().value).toBe(4);
        expect(iterator.next().value).toBe(5);
        expect(iterator.next().done).toBe(true);
    });

    /*
    |------------------------------------------------------------------------------------
    | Should return done=true when the end of the array is reached. 
    |------------------------------------------------------------------------------------
    */
    it('returns done=true when the end of the array is reached', () => {
        const arr = [1, 2];
        const iterator = values(arr);
        iterator.next();
        iterator.next();
        expect(iterator.next().done).toBe(true);
    });

});