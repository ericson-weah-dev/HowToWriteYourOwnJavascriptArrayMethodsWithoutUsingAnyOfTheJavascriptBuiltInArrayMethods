/**
   * @name values
   * @function
   *
   * @param {Array|Object} array the input array
   * @description Unshift the input array
   * @return {Array} The unshifted array
   *
*/
const unshift = (array = []) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    const originalLength = length(array);
    const newLength = originalLength + length(items);
  
    for (let i = newLength - 1; i >= length(items); i--) {
      arr[i] = arr[i - length(items)];
    }
  
    for (let i = 0; i < length(items); i++) {
      array[i] = items[i];
    }
    return newLength;
  }


  const array = [1, 2, 3];
const length = unshift(array, 4, 5);

console.log(array); // [4, 5, 1, 2, 3]
console.log(length); // 5