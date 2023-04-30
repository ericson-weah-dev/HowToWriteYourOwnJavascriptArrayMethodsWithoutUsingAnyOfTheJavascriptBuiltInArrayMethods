/**
   * @name fill
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} value the value to fill in with
   * @param {Number} start the start index
   * @param {Number} len the len of the input array
   *
   * @description Fill in the given array with the input values
   *
   * @return {Array} The filled array
   *
*/

const fill = (array = [], value = 0, start = 0, end = length(array)) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for (let i = start; i < end; i++) {
        array[i] = value;
        if(isArray(array[i])) fill(array[i], value, start, end);
    }
    return array;
}

// Usage


const aray = [1, 2, 3, 4, 5];

fill(array, 0);

console.log(myArray); // Output: [0, 0, 0, 0, 0]


// const array = [1, 2, 3, 4, 5];

// fill(array, 0, 2, 4);

// console.log(Array); // Output: [1, 2, 0, 0, 5]