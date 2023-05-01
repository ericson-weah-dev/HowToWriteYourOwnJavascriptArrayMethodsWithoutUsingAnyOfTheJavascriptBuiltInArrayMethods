((root, factory) => {
    // AMD module support
  if(typeof define === 'function' && define.amd) define(['exports'], factory);
  // CommonJS module support
  else if (typeof exports === 'object' && typeof exports.nodeName === 'string') factory(exports);
  // Browser globals
  else factory((root.fns = {}));
})(this, exports => {

    /**
   * @name length
   * @function
   *
   * @param {String|Object|Array|Number} input input argument
   * @param {Number} count  initial count
   *
   * @description input element length
   *
   * @return {Number} The input element length
   *
*/
const length  = (input = 'something', count = 0) => {
    for (let i = 0; i < input.length; i++) {
      count++;
    }
    return count;
 }


 /**
   * @name isArray
   * @function
   *
   * @param {Array|Object|} input input argument
   *
   * @description checks if input element is an array
   *
   * @return {Number} True if input element is an array
   *
*/
const isArray = (input = []) => Object.prototype.toString.call(input) === '[object Array]';

/**
   * @name push
   * @function
   *
   * @param {Array} array input array
   * @param {Array|Object|Number} elements elements to push to the array
   *
   * @description pushes elements to the array
   *
   * @return {Array} The augmented array
   *
*/

const push = (array = [], ...elements) => {
    if(!isArray(array)) return array;
    for (let i = 0; i < length(elements); i++) {
      array[length(array)] = elements[i];
    }
    return length(array);
 }


 /**
   * @name from
   * @function
   *
   * @param {Array|Object} interable the input object to convert
   * @param {Function} mapFn  the function to map the input object
   * @param {Object} thisArg The argument to map the input object
   * @param {Array} result the result object
   *
   * @description  Creates a new array from an array-like or iterable object
   *
   * @return {Array} The result array.
   *
*/


function from(iterable,mapFn,thisArg, result = []) {
    if (iterable == null) throw new TypeError(`Cannot convert ${iterable} to an array`);

    const iterator = iterable[Symbol.iterator]();

    for (let i = 0; i < length(iterable); i++) {
      const value = mapFn ? mapFn.call(thisArg, iterator.next().value, i) : iterator.next().value;
      push(result, value);
    }

    return result;
  }




    /**
   * @name concat
   * @function
   *
   * @param {Array} array input array
   * @param {Array} result  the suposed initial array
   *
   * @description concatenates the input array
   *
   * @return {Array} The concatenated array
   *
*/

const concat = (...args) => {
    const result = [];
    for (let i = 0; i < length(args); i++) {
      const arg = args[i];
      if (isArray(arg)) {
        for (let j = 0; j < length(arg); j++) {
          push(result, arg[j]);
        }
      } else {
        push(result, arg);
      }
    }
    return result;
}


// exports
exports.length = length;
exports.isArray = isArray; 
exports.push  = push
exports.concat = concat;

})