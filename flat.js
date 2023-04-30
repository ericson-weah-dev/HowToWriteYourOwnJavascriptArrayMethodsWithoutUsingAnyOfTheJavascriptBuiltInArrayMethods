/**
   * @name flat
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Number} depth  the flat level or flat depth
   * @param {Array|Object} result  the suposed initial flattened array
   *
   * @description flattens an array
   *
   * @return {Array|Object} The flattened result array
   *
*/
const flat = (array = [], depth = 1, result = []) => {
    for (var i = 0; i < length(array); i++) {
        if ((isArray(array[i])) && depth > 0) {
          result = concat(result, flat(array[i], depth - 1))
        } else {
          push(result,array[i]);
        }
    }
    return result;
}


// Usage


const array = [1, 2, [3, 4], [5, [6, 7]]];

const flattenedArray = flat(array);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]



// const array = [1, 2, , 4, [5, , 7]];

// const flattenedArray = flat(array);

// console.log(flattenedArray); // Output: [1, 2, 4, 5, 7]