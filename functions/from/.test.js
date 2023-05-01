'use strict';

const from = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| In this example, we import the test function from Jest, the mount function from @vue/test-utils, and the length, isArray, push, and from functions from various modules.

| We then define five tests using the test function. 

| The first test checks that the from function correctly converts an iterable to an array with no map function.
| We define an iterable and call the from function with it. We use the expect function to check that the output
| of the from function is an array that matches the input iterable.

| The second test checks that the from function correctly converts an iterable to an array with a map function.
| We define an iterable, a map function, and call the from function with them. 
| We use the expect function to check that the output of the from function is an array
| that matches the mapped values of the input iterable.

| The third test checks that the from function correctly converts an iterable to an array with a map function and thisArg. 
| We define an iterable, a map function, a thisArg object, and call the from function with them. 
| We use the expect function to check that the output of the from function is an array that matches
| the mapped values of the input iterable with the thisArg object used as this in the map function.

| The fourth test checks that the from function throws a TypeError for a null input iterable.
| We define a null input iterable and call the from function with it. 
| We use the expect function to check that the TypeError is thrown.

| The fifth test checks that the from function throws a TypeError for an undefined input iterable.
| We define an undefined input iterable and call the from function with it. We use the expect function
|
*/


describe('from function', () => {

  /*
  |-----------------------------------------------------------------------------------------------
  | Should convert an iterable to an array with no map function
  |-----------------------------------------------------------------------------------------------
  */
  it('It should convert iterable to array with no map function', () => {
    const iterable = [1, 2, 3];

    const output = from(iterable);

    expect(output).toEqual([1, 2, 3]);
  });


  /*
  |-----------------------------------------------------------------------------------------------
  | Should convert an iterable to an array with a map function.
  |-----------------------------------------------------------------------------------------------
  */
  it('It should convert iterable to array with map function', () => {
    const iterable = [1, 2, 3];

    const mapFn = x => x * 2;

    const output = from(iterable, mapFn);

    expect(output).toEqual([2, 4, 6]);
  });


  /*
  |-----------------------------------------------------------------------------------------------
  | Should convert an iterable to an array with a map function and thisArg.
  |-----------------------------------------------------------------------------------------------
  */
  it('It should convert iterable to array with map function and thisArg', () => {
    const iterable = [1, 2, 3];

    const mapFn = function (x) {
      return x * this.multiplier;
    };

    const thisArg = { multiplier: 2 };

    const output = from(iterable, mapFn, thisArg);

    expect(output).toEqual([2, 4, 6]);
  });


  /*
  |----------------------------------------------------------------------------------------------
  | Should throw a TypeError for a null input iterable.
  |-----------------------------------------------------------------------------------------------
  */
  it('It should throw TypeError for null iterable', () => {
    const iterable = null;

    expect(() => from(iterable)).toThrow(TypeError);
  });


  /*
  |-----------------------------------------------------------------------------------------------
  | Should throw a TypeError for an undefined input iterable.
  |-----------------------------------------------------------------------------------------------
  */
  it('It should throw TypeError for undefined iterable', () => {
    const iterable = undefined;

    expect(() => from(iterable)).toThrow(TypeError);
  });



  /*
  |-----------------------------------------------------------------------------------------------
  | Should throw TypeError for non-iterable.
  |-----------------------------------------------------------------------------------------------
  */
  it('It should throw TypeError for non-iterable', () => {
    const iterable = 123;

    expect(() => from(iterable)).toThrow(TypeError);
  });
})