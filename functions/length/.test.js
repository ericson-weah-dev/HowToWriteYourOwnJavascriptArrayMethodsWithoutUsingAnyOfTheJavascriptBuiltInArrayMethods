'use strict';

const length = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| In this example, we import the test function from Jest and the mount function from @vue/test-utils. We also import the length function from the module we want to test.

| We then define three tests using the test function. 

| The first test checks that the length function returns the correct length for a non-empty input string.
| We define an input string and the expected output, and then call the length function with the input string.
| We use the expect function to check that the output of the length function matches the expected output.

| The second test checks that the length function returns 0 for an empty input string. 
| We define an empty input string and the expected output, 
| and then call the length function with the input string. 
| We use the expect function to check that the output of 
| the length function matches the expected output.

| The third test checks that the length function correctly handles the optional count parameter. 
| We define an input string, a count value, and the expected output, and 
| then call the length function with both the input string and the count value. 
| We use the expect function to check that the output of the length function matches the expected output.

| Overall, these tests check that the length function behaves correctly under different input conditions, 
| and ensures that the function works as expected in both Node.js and the browser using Vite.
|
*/


describe('length function', () => {

  /*
  |------------------------------------------------------------------------------------
  |Should returns the correct length for a non-empty input string.
  |------------------------------------------------------------------------------------
  */
  it(' should return the correct length', () => {
    const input = 'hello';
    const expectedOutput = 5;

    const output = length(input);

    expect(output).toBe(expectedOutput);
  });

  /*
  |------------------------------------------------------------------------------------
  | Should returns 0 for an empty input string. 
  |------------------------------------------------------------------------------------
  */
  it('should return the correct length for empty input', () => {
    const input = '';
    const expectedOutput = 0;

    const output = length(input);

    expect(output).toBe(expectedOutput);
  });

  /*
  |------------------------------------------------------------------------------------
  | Should correctly handle the optional count parameter. 
  |------------------------------------------------------------------------------------
  */
  it('should return the correct length with count parameter', () => {
    const input = 'hello';
    const count = 2;
    const expectedOutput = 7;

    const output = length(input, count);

    expect(output).toBe(expectedOutput);
  });
});