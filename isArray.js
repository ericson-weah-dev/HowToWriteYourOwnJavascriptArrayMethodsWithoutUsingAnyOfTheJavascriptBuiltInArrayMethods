/**
   * @name isArray
   * @function
   *
   * @param {Array|Object|} input input argument
   *
   * @description checks if input element is an array
   *
   * @return {Number} True if input element is an array
   *
*/
const isArray = (input = []) => Object.prototype.toString.call(input) === '[object Array]';


// Usage

const myArray = [1, 2, 3, 4];
const notAnArray = 'This is not an array';

console.log(isArray(myArray)); // Output: true
console.log(isArray(notAnArray)); // Output: false


// const myObj = { a: 1, b: 2 };
// const myArray = new Int8Array([1, 2, 3, 4]);

// console.log(isArray(myObj)); // Output: false
// console.log(isArray(myArray)); // Output: false


module.exports = isArray