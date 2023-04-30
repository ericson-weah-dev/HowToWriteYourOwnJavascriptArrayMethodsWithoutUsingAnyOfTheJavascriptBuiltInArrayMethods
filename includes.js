/**
   * @name includes
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} searchElement the search value
   * @param {Number} fromIndex the start index
   * @param {Number} len the len of the input array
   *
   * @description Checks whether  the input array contains the specified search element
   *
   * @return {Boolean} True if the input array contains the searchElement
   *
*/

const includes = (array = [], searchElement = '', fromIndex = 0, len = length(array)) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    let startIndex = fromIndex || 0;
    if (startIndex < 0) startIndex = len + startIndex;
    for (let i = startIndex; i < len; i++) {
      if (array[i] === searchElement) return true;
    }
    return false;
}

// Usage

const array = [1, 2, 3, 4, 5];

const result1 = includes(array, 3);
const result2 = includes(array, 6);

console.log(result1); // Output: true
console.log(result2); // Output: false



// const array = [1, 2, 3, 4, 5];

// const result1 = includes(array, 3, 2);
// const result2 = includes(array, 3, 3);

// console.log(result1); // Output: true
// console.log(result2); // Output: false