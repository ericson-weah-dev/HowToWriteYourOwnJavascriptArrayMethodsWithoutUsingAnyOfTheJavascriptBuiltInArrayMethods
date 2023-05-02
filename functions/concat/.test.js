'use strict';

const concat = require('./index');

/*
|------------------------------------------------------------------------------------
| SUITE TEST
|------------------------------------------------------------------------------------
|
| In this test suite, we are testing four different aspects of the concat function:

| 1) It should correctly concatenate arrays and values.
| 2) It should return a new array, not modify the original arrays.
| 3) It should handle non-array arguments and concatenate them into the result array.
| 4) It should handle empty arrays and return an empty array.

| We are using Jest to run the tests, and importing the concat function from a module named concat.js.

| The first test case checks if the function returns the correct concatenated array.

| The second test case checks if it returns a new array. 

| The third test case checks if it correctly handles non-array arguments. 

| The fourth test case checks if it correctly handles empty arrays.
|
*/


describe('concat function', () => {

  /*
  |------------------------------------------------------------------------------------
  | Correctly concatenate arrays and values
  |------------------------------------------------------------------------------------
  */
  it('should concatenate arrays and values', () => {
    expect(concat([1, 2], [3, 4], 5, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });


  /*
  |------------------------------------------------------------------------------------
  | Return a new array, not modify the original arrays.
  |------------------------------------------------------------------------------------
  */
  it('should return a new array', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const result = concat(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4]);
    expect(result).not.toBe(arr1);
    expect(result).not.toBe(arr2);
  });


  /*
  |------------------------------------------------------------------------------------
  | Handle non-array arguments and concatenate them into the result array.
  |------------------------------------------------------------------------------------
  */
  it('should handle non-array arguments', () => {
    expect(concat('hello', [1, 2], null, undefined, 3)).toEqual(['h', 'e', 'l', 'l', 'o', 1, 2, null, undefined, 3]);
  });


  /*
  |------------------------------------------------------------------------------------
  | Handle empty arrays and return an empty array.
  |------------------------------------------------------------------------------------
  */
  it('should handle empty arrays', () => {
    expect(concat([], [], [])).toEqual([]);
  });
});