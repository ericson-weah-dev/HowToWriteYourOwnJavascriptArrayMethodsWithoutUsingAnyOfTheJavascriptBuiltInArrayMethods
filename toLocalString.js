/**
   * @name toLocalString
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} len the len of the input array
   * @param {Array} stringArray  the result of the slice operation
   * @param {String} separator  the number of items
   *
   * @description Create the string representing the elements of the input array
   *
   * @return {String} The string representing the elements of an array
   *
*/
const toLocalString = (array = [], len = length(array), stringArray = [], separator = new Intl.NumberFormat().format(1.1).charAt(1)) => {

    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
  
    for (let i = 0; i < len; i++) {
      if (array[i] === null || array[i] === undefined) {
        push(stringArray,'');
      } else {
        push(stringArray, array[i].toLocaleString());
      }
      if(isArray(array[i])) toLocalString(array[i], len, stringArray, separator);
    }
    return join(stringArray, separator + ' ');
  }



  // Usage
const numbers = [12345.67, 8910.11, 123.45];
const formattedNumbers = toLocaleString(numbers, 'en-US', { style: 'currency', currency: 'USD' });
console.log(formattedNumbers); // "$12,345.67, $8,910.11, $123.45"

