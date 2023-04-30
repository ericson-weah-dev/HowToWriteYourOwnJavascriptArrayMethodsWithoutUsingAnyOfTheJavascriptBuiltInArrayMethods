/**
   * @name keys
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {Number} nextIndex the index of the next
   *
   * @description Finds keys in the input array
   *
   * @return {Object} the result object with keys as an interation object
   *
*/
const keys = (array = [], nextIndex = 0) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    return {
      next: function() {
        return nextIndex < length(array) ?
          { value: nextIndex++, done: false } :
          { value: undefined, done: true };
      }
    };
}

const array = ['apple', 'banana', 'cherry'];


for (const index of keys(array)) {
  console.log(index);
}

/**
 Output:
    0
    1
    2
*/