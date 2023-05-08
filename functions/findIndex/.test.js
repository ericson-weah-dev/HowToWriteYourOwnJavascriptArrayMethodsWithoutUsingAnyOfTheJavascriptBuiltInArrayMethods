'use strict';

const findIndex = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| The first test case asserts that the findIndex function correctly returns the index of the first element in the array that satisfies the provided testing function.

| The second test case asserts that the findIndex function returns -1 if no element in the array satisfies the provided testing function.

| The third test case asserts that the findIndex function throws a TypeError if the first argument is not an array.
|
*/

describe('findIndex function', () => {


  /*
  |------------------------------------------------------------------------------------
  | Should return the index of the first element in the array that satisfies the provided testing function
  |------------------------------------------------------------------------------------
  */
  test('returns the index of the first element in the array that satisfies the provided testing function', () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (el) => el > 2;

    expect(findIndex(arr, fn)).toEqual(2);
  });

  /*
  |------------------------------------------------------------------------------------
  | Should return -1 if no element in the array satisfies the provided testing function
  |------------------------------------------------------------------------------------
  */
  test('returns -1 if no element in the array satisfies the provided testing function', () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (el) => el > 5;

    expect(findIndex(arr, fn)).toEqual(-1);
  });

  /*
  |------------------------------------------------------------------------------------
  | Should throws a TypeError if the first argument is not an array
  |------------------------------------------------------------------------------------
  */
  test('throws a TypeError if the first argument is not an array', () => {
    const fn = () => findIndex('not an array', () => { });

    expect(fn).toThrow(TypeError);
  });

});