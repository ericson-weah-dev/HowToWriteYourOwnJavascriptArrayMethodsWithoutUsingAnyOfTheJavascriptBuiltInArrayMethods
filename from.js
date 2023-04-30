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


// Usage

const mySet = new Set(['apple', 'banana', 'cherry']);

const array = from(mySet);

console.log(array); // Output: ['apple', 'banana', 'cherry']