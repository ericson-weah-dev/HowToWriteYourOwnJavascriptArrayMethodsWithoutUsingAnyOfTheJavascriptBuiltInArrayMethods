/**
   * @name reduce
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   * @param {Array|Object|Number|String} initialValue  The initial value
   *
   * @description reduces an array
   *
   * @return {Array|Object|Number|String} The result
   *
*/

const reduce = (array = [], fn = () => {}, initialValue = undefined) =>{

    let accumulator = initialValue === undefined ? array[0] : initialValue;
    const startingIndex = initialValue === undefined ? 1 : 0;

    for (let i = startingIndex; i < length(array); i++) {
        accumulator = fn(accumulator, array[i], i, array);
    }

    return accumulator;
}

const array = [1, 2, 3, 4];

const sum = reduce(array, (accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 10


// const array = [1, 2, 3, 4];

// const sum = myArray.reduce((accumulator, currentValue, index, array) => {
//   return accumulator + currentValue;
// });

// console.log(sum); // Output: 10