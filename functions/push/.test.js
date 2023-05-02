'use strict';

const push = require('./index')
const length = require('../length')

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| In this test suite, we are testing five different aspects of the push function:

| We then define five tests using the test function.

| The first test checks that the push function correctly appends elements to an array. 
| We define an input array and an array of elements to append, and call the push function with them.
| We use the expect function to check that the output of the push function is the new length of the array,
| and that the input array has been updated correctly.

| The second test checks that the push function does not append elements to non-arrays. 
| We define a non-array input and an array of elements to append, and call the push function with them. 
| We use the expect function to check that the output of the push function is the input value,
| and that the input value has not been modified.

| The third test checks that the push function does not append elements to null or undefined. 
| We define a null input and an array of elements to append, and call the push function with them. 
| We use the expect function to check that the output of the push function is the input value,
| and that the input value has not been modified.

| The fourth test checks that the push function correctly returns the new length of the array.
| We define an input array and an array of elements to append, and call the push function with them. 
| We use the expect function to check that the output of the push function is the new length of the array.

| The fifth test checks that the push function correctly app
|
*/

describe('push function', () => {


  /*
  |------------------------------------------------------------------------------------
  | Should correctly appends elements to an array.
  |------------------------------------------------------------------------------------
  */
  it('push function appends elements to an array', () => {
    const input = [1, 2, 3];
    const elements = [4, 5];

    const output = push(input, ...elements);

    expect(output).toBe(length(input));
    expect(input).toEqual([1, 2, 3, 4, 5]);
  });

  /*
  |------------------------------------------------------------------------------------
  | Should not append elements to non-arrays
  |------------------------------------------------------------------------------------
  */
  it('It should not append elements to non-arrays', () => {
    const input = 'hello';
    const elements = [4, 5];

    const output = push(input, ...elements);

    expect(output).toBe(input);
    expect(input).toEqual('hello');
  });

  /*
  |------------------------------------------------------------------------------------
  | Should not append elements to null or undefined.
  |------------------------------------------------------------------------------------
  */
  it('It should not append elements to null or undefined', () => {
    const input = null;
    const elements = [4, 5];

    const output = push(input, ...elements);

    expect(output).toBe(input);
    expect(input).toEqual(null);
  });


  /*
  |------------------------------------------------------------------------------------
  | Should correctly returns the new length of the array.
  |------------------------------------------------------------------------------------
  */
  it('It should return the new length of the array', () => {
    const input = [1, 2, 3];
    const elements = [4, 5];

    const output = push(input, ...elements);

    expect(output).toBe(length(input));
  });


  /*
  |------------------------------------------------------------------------------------
  | Should correctly append elements to an empty array.
  |------------------------------------------------------------------------------------
  */
  it('It should append elements to an empty array', () => {
    const input = [];
    const elements = [4, 5];

    const output = push(input, ...elements);

    expect(output).toBe(length(input));
    expect(input).toEqual([4, 5]);
  });

})

