/**
   * @name shift
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} len the len of the input array
   * @param {Array|Object|Number|Boolean} firstElement the first element of the input array
   *
   * @description Reverse the input array
   *
   * @return {Array} The result of the reversed array
   *
*/

const shift = (array = [], len = length(array), firstElement = array[0]) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    if (len === 0) return undefined;
    for (let i = 1; i < len; i++) {
      array[i - 1] = array[i];
    }
    array.length = len - 1;
    return firstElement;
  }


  // Usage

const array = [1, 2, 3];
const firstElement = shift(array);
console.log(array); // [2, 3]
console.log(firstElement); // 1

