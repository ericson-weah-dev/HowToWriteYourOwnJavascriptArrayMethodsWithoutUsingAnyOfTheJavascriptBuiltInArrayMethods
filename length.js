/**
   * @name length
   * @function
   *
   * @param {String|Object|Array|Number} input input argument
   * @param {Number} count  initial count
   *
   * @description input element length
   *
   * @return {Number} The input element length
   *
*/
const length  = (input = 'something', count = 0) => {
    for (let i = 0; i < input.length; i++) {
      count++;
    }
    return count;
 }


 // Usage
const array = [1, 2, 3, 4];
console.log(length(array)); // Output: 4