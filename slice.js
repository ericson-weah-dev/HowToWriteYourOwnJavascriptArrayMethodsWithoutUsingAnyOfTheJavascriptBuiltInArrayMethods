/**
   * @name slice
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} len the len of the input array
   * @param {Array} result the result of the slice operation
   *
   * @description Slices the input array
   *
   * @return {Array} The result of the sliced array
   *
*/
const slice = (array = [], len = length(array), result = []) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
  
    const startIndex = start === undefined ? 0 : start < 0 ? len + start : start;
    const endIndex = end === undefined ? len : end < 0 ? len + end : end;
  
    for (let i = startIndex; i < endIndex; i++) {
      push(result, arr[i]);
      if(isArray(array[i])) slice(array[i], len, result);
    }
  
    return result;
  }


  const array = [1, 2, 3, 4, 5];
const slicedArr = slice(array,1, 4);
console.log(slicedArr); // [2, 3, 4]




// const array = [1, 2, 3, {name: 'John'}, [4, 5]];
// const slicedArr = slice(array,2);
// console.log(slicedArr); // [3, {name: 'John'}, [4, 5]]

// slicedArr[1].name = 'Jane';
// console.log(slicedArr); // [3, {name: 'Jane'}, [4, 5]]
// console.log(array); // [1, 2, 3, {name: 'Jane'}, [4, 5]]