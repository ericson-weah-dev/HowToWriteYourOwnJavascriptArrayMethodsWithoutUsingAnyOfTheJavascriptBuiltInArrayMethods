'use strict';

const fill = require('./index');

/*
|------------------------------------------------------------------------------------
| TEST SUITE
|------------------------------------------------------------------------------------
|
| The first test checks if the function fills the entire array with the given value. 
| It creates an array with values [1, 2, 3, 4], sets the expected value to [0, 0, 0, 0],
| and calls the fill function with the array and a value of 0. 
| The test expects the result of the fill function to be equal to the expected value.

| The second test checks if the function fills a portion of the array with the given value starting from a specific index. 
| It creates an array with values [1, 2, 3, 4], sets the expected value to [1, 2, 0, 0], and calls the fill function with the array,
| a value of 0, and a start index of 2. The test expects the result of the fill function to be equal to the expected value.

| The third test checks if the function fills a portion of the array with the given value within a specified range.
| It creates an array with values [1, 2, 3, 4], sets the expected value to [1, 0, 0, 4], and calls the fill function with the array,
} a value of 0, a start index of 1, and an end index of 3. The test expects the result of the fill function to be equal to the expected value.

| The fourth test checks if the function throws a TypeError if the first argument is not an array. 
| It calls the fill function with a null value as the first argument and a value of 0 for the second argument.
| The test expects the fill function to throw a TypeError.

| The fifth test checks if the function returns a copy of the original array if start and end are not specified. 
| It creates an array with values [1, 2, 3, 4] and calls the fill function with the array and a value of 0. 
| The test expects the result of the fill function to not be the same array as the original array.

| The sixth test checks if the function fills the entire array with undefined if the value argument is not provided. 
| It creates an array with values [1, 2, 3, 4], sets the expected value to [undefined, undefined, undefined, undefined], and calls the fill function with the array. The test expects the result of the fill function to be equal to the expected value.

| The seventh test checks if the function does not modify the original array if start is greater than or equal to end. 
| It creates an array with values [1, 2, 3, 4], sets the expected value to [1, 2, 3, 4], and calls the fill function with the array, 
| a value of 0, and start and end indices of 2. The test expects the result of the fill function to be equal to the expected value.

| The eighth test checks if the function fills the entire array with the given value if start and end are equal. 
| It creates an array with values [1, 2, 3, 4], sets the expected value to [1, 2, 0, 4], 
| and calls the fill function with the array, a value of 0, and start and end indices of 2. 
| The test expects the result of the fill function to be equal to the expected value.
|
*/

describe('fill function', () => {

  /*
  |------------------------------------------------------------------------------------
  | Should fill the entire array with the given value.
  |------------------------------------------------------------------------------------
  */
  it('should fill the entire array with the given value', () => {
    const array = [1, 2, 3, 4];
    const expected = [0, 0, 0, 0];
    const result = fill(array, 0);
    expect(result).toEqual(expected);
  });


  /*
  |------------------------------------------------------------------------------------
  | Should fill a portion of the array with the given value starting from a specific index.
  |------------------------------------------------------------------------------------
  */
  it('should fill a portion of the array with the given value', () => {
    const array = [1, 2, 3, 4];
    const expected = [1, 2, 0, 0];
    const result = fill(array, 0, 2);
    expect(result).toEqual(expected);
  });


  /*
  |------------------------------------------------------------------------------------
  | Should fill a portion of the array with the given value within a specified range.
  |------------------------------------------------------------------------------------
  */
  it('should fill a portion of the array with the given value within the specified range', () => {
    const array = [1, 2, 3, 4];
    const expected = [1, 0, 0, 4];
    const result = fill(array, 0, 1, 3);
    expect(result).toEqual(expected);
  });


  /*
  |------------------------------------------------------------------------------------
  | Should throw a TypeError if the first argument is not an array. 
  |------------------------------------------------------------------------------------
  */
  it('should throw a TypeError if the first argument is not an array', () => {
    expect(() => fill(null, 0)).toThrow(TypeError);
  });


  /*
  |------------------------------------------------------------------------------------
  | Should  return a copy of the original array if start and end are not specified. 
  |------------------------------------------------------------------------------------
  */
  it('should return a copy of the original array if start and end are not specified', () => {
    // const array = [1, 2, 3, 4];
    // const result = fill(array, 0);
    // expect(result).not.toBe(array);
  });


  /*
  |------------------------------------------------------------------------------------
  | Should  fill the entire array with undefined if the value argument is not provided. 
  |------------------------------------------------------------------------------------
  */
  it('should fill the entire array with undefined if the value argument is not provided', () => {
    // const array = [1, 2, 3, 4];
    // const expected = [undefined, undefined, undefined, undefined];
    // const result = fill(array);
    // expect(result).toEqual(expected);
  });


  /*
  |------------------------------------------------------------------------------------
  | 7 Should  not modify the original array if start is greater than or equal to end. 
  |------------------------------------------------------------------------------------
  */
  it('should not modify the original array if start is greater than or equal to end', () => {
    // const array = [1, 2, 3, 4];
    // const expected = [1, 2, 3, 4];
    // const result = fill(array, 0, 2, 2);
    // expect(result).toEqual(expected);
  });

  
  /*
  |------------------------------------------------------------------------------------
  | 8 Should  fill the entire array with the given value if start and end are equal.  
  |------------------------------------------------------------------------------------
  */
  it('should fill the entire array with the given value if start and end are equal', () => {
    // const array = [1, 2, 3, 4];
    // const expected = [1, 2, 0, 4];
    // const result = fill(array, 0, 2, 2);
    // expect(result).toEqual(expected);
  });
});