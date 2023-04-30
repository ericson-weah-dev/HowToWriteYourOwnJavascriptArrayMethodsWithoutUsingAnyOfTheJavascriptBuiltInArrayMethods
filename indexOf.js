/**
   * @name indexOf
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} searchElement the search value
   * @param {Number} fromIndex the start index
   * @param {Number} len the len of the input array
   *
   * @description Find the index of the first occurrence of the search value
   *
   * @return {Number} The index of the first occurrence of the search value
   *
*/
const indexOf = (array = [], searchElement = '', fromIndex = 0, len = length(array)) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    let startIndex = fromIndex || 0;
    if (startIndex < 0) startIndex = len + startIndex;

    for (let i = startIndex; i < len; i++) {
      if (array[i] === searchElement) return i;
      if(isArray(array[i])) indexOf(array[i], searchElement, fromIndex, len);
    }
    return -1;
}

const array = [1, 2, 3, 4, 5];

const index1 = indexOf(array, 3);
const index2 = indexOf(array, 6);

console.log(index1); // Output: 2
console.log(index2); // Output: -1


// const array = [1, 2, 3, 4, 5];

// const index1 = indexOf(array, 3, 2);
// const index2 = indexOf(array, 3, 3);

// console.log(index1); // Output: 2
// console.log(index2); // Output: -1