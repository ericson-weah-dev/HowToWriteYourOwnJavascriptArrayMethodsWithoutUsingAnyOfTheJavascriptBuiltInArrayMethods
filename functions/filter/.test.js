'use strict';

const filter  = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| This test
|
*/

describe('filter function', () => {

  it('Test for correct output', () => {
    // const arr1 = [1, 2, 3, 4, 5];
    // const filterFunc1 = (n) => n > 3;
    // const expectedOutput1 = [4, 5];
    // assert.deepEqual(filter(arr1, filterFunc1), expectedOutput1);
  
    // const arr2 = ['apple', 'banana', 'cherry'];
    // const filterFunc2 = (str) => str.includes('a');
    // const expectedOutput2 = ['apple', 'banana'];
    // assert.deepEqual(filter(arr2, filterFunc2), expectedOutput2);
  });
  
  it('Test for error handling', () => {
    // assert.throws(() => filter(null), TypeError);
    // assert.throws(() => filter(undefined), TypeError);
    // assert.throws(() => filter('not an array'), TypeError);
  
    // const arr = [1, 2, 3];
    // const invalidFunc = 'not a function';
    // assert.throws(() => filter(arr, invalidFunc), TypeError);
  });
  
  it('Test for optional parameter', () => {
    // const arr = [1, 2, 3];
    // const filterFunc = (n) => n > 1;
    // const initialValue = [0];
    // const expectedOutput = [0, 2, 3];
  
    // const result = filter(arr, filterFunc, initialValue);
    // assert.deepEqual(result, expectedOutput);
    // assert.notEqual(result, arr);
  });
  
  it('Test for immutability', () => {
    // const arr = [1, 2, 3];
    // const filterFunc = (n) => n > 1;
    // filter(arr, filterFunc);
    // assert.deepEqual(arr, [1, 2, 3]);
  });

});