/**
   * @name lastIndexOf
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} searchElement the search value
   * @param {Number} fromIndex the start index
   * @param {Number} len the len of the input array
   *
   * @description Find the last index of the first occurrence of the search value
   *
   * @return {Number} The last index of the first occurrence of the search value
   *
*/

const lastIndexOf = (array = [], searchElement, fromIndex, len = length(array)) => {

    if(!isArray(array)) throw new TypeError(`${array} must be an array`);

    let startIndex = fromIndex || len - 1;

    if (startIndex < 0) startIndex = len + startIndex;
    for (let i = startIndex; i >= 0; i--) {
      if (array[i] === searchElement) return i;
      if(isArray(array[i])) lastIndexOf(array[i], searchElement, fromIndex);
    }
    return -1;
}


// Usage

const array = [1, 2, 3, 4, 5];

const index1 = lastIndexOf(array,3);
const index2 = lastIndexOf(array,6);

console.log(index1); // Output: 2
console.log(index2); // Output: -1


// const array = [1, 2, 3, 4, 5];

// const index1 = lastIndexOf(array,3, 2);
// const index2 = lastIndexOf(array,3, 3);

// console.log(index1); // Output: 2
// console.log(index2); // Output: -1