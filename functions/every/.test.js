'use strict';

const every  = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| In this test suite, we are testing three different aspects of the every function:

| 1) It should throw a TypeError if the first argument is not an array.
| 2) It should return true if all elements in the array pass the test function.
| 3) It should return false if any element in the array fails the test function.

| We are using Vitest to run the tests, and importing the every function from a module named every.js.

| The first test case checks if the function throws a TypeError when it is called with an argument that
| is not an array. 

| The second test case checks if the function returns true when all elements in 
| the array pass the test function.

| The third test case checks if the function returns false
| when any element in the array fails the test function.

| We test with various input types to ensure the function handles them correctly.
|
*/

describe('every function', () => {

    /*
    |------------------------------------------------------------------------------------
    |  Throw a TypeError if the first argument is not an array
    |------------------------------------------------------------------------------------
    */ 
    
    it('should throw a TypeError if the first argument is not an array', () => {
      expect(() => every(null, () => true)).toThrow(TypeError);
      expect(() => every(42, () => true)).toThrow(TypeError);
      expect(() => every('hello', () => true)).toThrow(TypeError);
      expect(() => every({}, () => true)).toThrow(TypeError);
    });
  

    /*
    |------------------------------------------------------------------------------------
    |  Return true if all elements in the array pass the test function
    |------------------------------------------------------------------------------------
    */ 


    it('should return true if all elements in the array pass the test', () => {
      expect(every([2, 4, 6], (num) => num % 2 === 0)).toBe(true);
      expect(every(['hello', 'world'], (str) => typeof str === 'string')).toBe(true);
      expect(every([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }], (person) => person.age >= 25)).toBe(true);
      expect(every([], () => true)).toBe(true);
    });
  

    /*
    |------------------------------------------------------------------------------------
    |  Return false if any element in the array fails the test function
    |------------------------------------------------------------------------------------
    */ 

    it('should return false if any element in the array fails the test', () => {
      expect(every([2, 4, 5, 6], (num) => num % 2 === 0)).toBe(false);
      expect(every(['hello', null, 'world'], (str) => typeof str === 'string')).toBe(false);
      expect(every([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }], (person) => person.age >= 30)).toBe(false);
    });
  });