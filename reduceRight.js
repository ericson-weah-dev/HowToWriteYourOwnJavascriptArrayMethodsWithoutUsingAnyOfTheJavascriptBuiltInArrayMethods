/**
   * @name reduceRight
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   * @param {Array|Object|Number|String} initialValue  The initial value
   *
   * @description right reduces an array
   *
   * @return {Array|Object|Number|String} The result
   *
*/

const reduceRight = (array = [], fn = () => {}, initialValue, len = length(array)) => {

    if(!isArray(array)) throw new TypeError(`${array} must be an array`);

    let accumulator = initialValue === undefined ? array[len - 1] : initialValue;
    let startIndex = initialValue === undefined ? len - 2 : len - 1;

    if (len === 0 && initialValue === undefined) throw new TypeError('Reduce of empty array with no initial value');

    for (let i = startIndex; i >= 0; i--) {
      accumulator = fn(accumulator, array[i], i, array);
    }
    return accumulator;
}


const array = [1, 2, 3, 4, 5];

const result = reduceRight(array, (accumulator, currentValue,index, array) => {
  return accumulator + currentValue;
}, 0);

console.log(result); // Output: 15

