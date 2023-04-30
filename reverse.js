/**
   * @name reverse
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} len the len of the input array
   *
   * @description Reverse the input array
   *
   * @return {Array} The result of the reversed array
   *
*/
const reverse = (array = [], len = length(array)) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
  
    const mid = Math.floor(len / 2);
    for (let i = 0; i < mid; i++) {
      const temp = array[i];
      array[i] = array[len - 1 - i];
      array[len - 1 - i] = temp;
      if(isArray(array[i])) reverse(array[i], len);
    }
  
    return array;
  }


  const array = [1, 2, 3];
reverse(array);
console.log(array); // [3, 2, 1]