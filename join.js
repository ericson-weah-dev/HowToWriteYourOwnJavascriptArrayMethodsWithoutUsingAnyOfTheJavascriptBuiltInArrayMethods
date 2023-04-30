/**
   * @name join
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} separator the separator
   * @param {Number} len the length of the input array
   * @param {String} result the result string
   *
   * @description Join the input array
   *
   * @return {String} The result string
   *
*/
const join = (array = [], separator = ' ', len = length(array), result =  '') => {

    if(!isArray(array)) throw new TypeError(`${array} must be an array`);

    for (let i = 0; i < len; i++) {
      result += array[i];
      if (i !== len - 1) result += separator || ',';
      if(isArray(array[i])) join(array[i], separator);
    }
    return result;
}



// Usage

const array = ['apple', 'banana', 'cherry'];

const result1 = join(array);
const result2 = join(array,'-');

console.log(result1); // Output: "apple,banana,cherry"
console.log(result2); // Output: "apple-banana-cherry"