const length = require('./functions/length')
const isArray = require('./functions/isArray')
const push = require('./functions/push')

/**
   * @name concat
   * @function
   *
   * @param {Array} array input array
   * @param {Array} result  the suposed initial array
   *
   * @description concatenates the input array
   *
   * @return {Array} The concatenated array
   *
*/

const concat = (...args) => {
    const result = [];
    for (let i = 0; i < length(args); i++) {
      const arg = args[i];
      if (isArray(arg)) {
        for (let j = 0; j < length(arg); j++) {
          push(result, arg[j]);
        }
      } else {
        push(result, arg);
      }
    }
    return result;
}

// Usage

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const newArray = concat(array1, array2, array3,[]);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]



// const array1 = [1, 2, 3];
// const string = 'hello';

// const newArray = concat(array1, string);

// console.log(newArray); // Output: [1, 2, 3, 'h', 'e', 'l', 'l', 'o']

module.exports = concat;
