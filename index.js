
/*
|------------------------------------------------------------------------------------
| Universal Module Definition (UMD)
|------------------------------------------------------------------------------------
|
| This is an implementation of the Universal Module Definition (UMD) pattern
| for creating a module that can be used in both browser and Node.js environments.


| 'root' refers to the global object (i.e. window in the browser, global in Node.js)
| 'factory' is a callback function that is called to create the module.
|
*/

((root, factory) => {

    /*
    |----------------------------------------------------------------------------------
    | AMD module support
    |----------------------------------------------------------------------------------
    |
    | Inside the anonymous function, the code checks the type of the defined variable.
    | If it exists and is a function, then the module is being loaded using 
    | an AMD (Asynchronous Module Definition) loader. In this case, the code uses
    | the define function to create the module.

    |
    */

    if (typeof define === 'function' && define.amd) define(['exports'], factory);

    /*
    |---------------------------------------------------------------------------------
    | CommonJS module support
    |---------------------------------------------------------------------------------
    |
    | If define does not exist, the code checks if exports is an object and
    | has a property called nodeName that is not a string. If so,
    | then the module is being loaded using a CommonJS module loader.
    | In this case, the factory function is called with the exports object,
    | which is then used to export the module.
    |
    */

    else if (typeof exports === 'object' && typeof exports.nodeName === 'string') factory(exports);

    /*
    |----------------------------------------------------------------------------------------
    | Browser globals
    |----------------------------------------------------------------------------------------
    |
    | Finally, if neither define nor exports are defined, then the code assumes that 
    | the module is being loaded in the browser and creates the module as a property of
    | the root object (i.e. window.fns).
    |
    */

    else factory((root.fns = {}));

})(this, exports => {

    /*
    |-----------------------------------------------------------------------------------------
    | THE ACTUAL LOADING FUNCTIONS OR OBJECTS
    |-----------------------------------------------------------------------------------------
    |
    | The second argument to the anonymous function is another callback function
    | that takes an exports argument. This function is where the actual module code is defined.
    | In this case, the code defines a single function called contact,
    | which is attached to the exports object.
    |
    */


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
    const length = (input = 'something', count = 0) => {
        for (let i = 0; i < input.length; i++) {
            count++;
        }
        return count;
    }

    exports.length = length;

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
    exports.isArray = (input = []) => Object.prototype.toString.call(input) === '[object Array]';


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
        if (Object.prototype.toString.call(arg) !== '[object Array]') return array;
        for (let i = 0; i < length(elements); i++) {
            array[length(array)] = elements[i];
        }
        return length(array);
    }

    // exports 
    exports.push = push;

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

    exports.concat = (...args) => {

        const result = [];
    
        for (let i = 0; i < length(args); i++) {
    
          const arg = args[i];
    
          if (Object.prototype.toString.call(arg) === '[object Array]' && length(arg) !== 0) {
            for (let j = 0; j < length(arg); j++) {
              push(result, arg[j]);
            }
          } else if (typeof arg === 'string' && arg.trim().length !== 0) {
            for (let j = 0; j < length(arg); j++) {
              push(result, arg[j]);
            }
    
          } else if (!(Object.prototype.toString.call(arg) === '[object Array]' && length(arg) === 0)) {
            push(result, arg);
        }
      }
    
      return result;
    
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


      function from(iterable, mapFn, thisArg, result = []) {
        if (iterable == null) throw new TypeError(`Cannot convert ${iterable} to an array`);

        const iterator = iterable[Symbol.iterator]();

        for (let i = 0; i < length(iterable); i++) {
            const value = mapFn ? mapFn.call(thisArg, iterator.next().value, i) : iterator.next().value;
            push(result, value);
        }

        return result;
    }

    // export function
    exports.from = from;


    /**
       * @name entries
       * @function
       *
       * @param {Array|Object} array the input array
       * @param {Array} result the result array
       *
       * @description Finds entries in the given array
       *
       * @return {Array} The result array
       *
    */
    exports.entries = (array = [], result = []) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            push(result, [i, array[i]]);
            //if(Object.prototype.toString.call(array[i]) === '[object Array]') entries(array[i], result);
        }
        return result;
    }



    /**
       * @name every
       * @function
       *
       * @param {Array|Object} array the array to filter
       * @param {Function|Object} fn  A function to execute for each element in the array.
       *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
       *
       * @description Check is fn is true for each element
       *
       * @return {Boolean} The result
       *
    */

    exports.every = (array = [], fn = () => { }) => {
        if (Object.prototype.toString.call(array) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            if (fn(array[i], i, array) === false) return false;
            //if (Object.prototype.toString.call(array[i]) === '[object Array]') every(array[i], fn);
        }
        return true;
    }

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

    exports.fill = (array = [], value = 0, start = 0, end = length(array)) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = start; i < end; i++) {
            array[i] = value;
            if (Object.prototype.toString.call(array[i]) === '[object Array]') fill(array[i], value, start, end);
        }
        return array;
    }


    /**
       * @name find
       * @function
       *
       * @param {Array|Object} array the array to filter
       * @param {Function|Object} fn  A function to execute for each element in the array.
       *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
       *
       * @description Finds an elment or elments in the given array
       *
       * @return {String|Object|Array|Number|Boolean} The element or elments found
       *
    */
    exports.find = (array = [], fn = () => { }) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            if (fn(array[i], i, array)) return array[i];
            if (Object.prototype.toString.call(array[i]) === '[object Array]') find(array[i], fn);
        }
        return undefined;
    }



    /**
       * @name findIndex
       * @function
       *
       * @param {Array|Object} array the array to filter
       * @param {Function|Object} fn  A function to execute for each element in the array.
       *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
       *
       * @description Finds the index of an element in the array
       *
       * @return {Number} The index of the found element
       *
    */
    exports.findIndex = (array = [], fn = () => { }) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            if (fn(array[i], i, array)) return i;
            if (Object.prototype.toString.call(array[i]) === '[object Array]') findIndex(array[i], fn);
        }
        return -1;
    }


    /**
       * @name flat
       * @function
       *
       * @param {Array|Object} array the array to filter
       * @param {Number} depth  the flat level or flat depth
       * @param {Array|Object} result  the suposed initial flattened array
       *
       * @description flattens an array
       *
       * @return {Array|Object} The flattened result array
       *
    */
    exports.flat = (array = [], depth = 1, result = []) => {
        for (var i = 0; i < length(array); i++) {
            if ((Object.prototype.toString.call(array[i]) === '[object Array]') && depth > 0) {
                result = concat(result, flat(array[i], depth - 1))
            } else {
                push(result, array[i]);
            }
        }
        return result;
    }



    /**
       * @name filter
       * @function
       *
       * @param {Array|Object} array the array to filter
       * @param {Function|Object} fn  A function to execute for each element in the array.
       *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
       * @param {Array|Object} result  the suposed initial filtered array
       *
       * @description filters an array
       *
       * @return {Array|Object} array, the filtered array
       *
    */

    exports.filter = (array = [], fn = () => { }, result = []) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            if (fn(array[i], i, array)) push(result, array[i]);
            if (Object.prototype.toString.call(array[i]) === '[object Array]') filter(array[i], fn, result)
        }
        return result;
    }



    /**
       * @name forEach
       * @function
       *
       * @param {Array|Object} array the array to filter
       * @param {Function|Object} fn  A function to execute for each element in the array.
       *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
       *
       * @description maps an array
       *
       * @return Does not return anything
       *
    */
    exports.forEach = (array = [], fn = () => { }) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            fn(array[i], i, array);
        }
    }




    /**
     * @name includes
     * @function
     *
     * @param {Array|Object} array the input array
     * @param {String|Number} searchElement the search value
     * @param {Number} fromIndex the start index
     * @param {Number} len the len of the input array
     *
     * @description Checks whether  the input array contains the specified search element
     *
     * @return {Boolean} True if the input array contains the searchElement
     *
  */

    exports.includes = (array = [], searchElement = '', fromIndex = 0, len = length(array)) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        let startIndex = fromIndex || 0;
        if (startIndex < 0) startIndex = len + startIndex;
        for (let i = startIndex; i < len; i++) {
            if (array[i] === searchElement) return true;
        }
        return false;
    }


    /**
       * @name indexOf
       * @function
       *
       * @param {Array|Object} array the input array
       * @param {String|Number} searchElement the search value
       * @param {Number} fromIndex the start index
       * @param {Number} len the len of the input array
       *
       * @description Find the index of the first occurrence of the search value
       *
       * @return {Number} The index of the first occurrence of the search value
       *
    */
    exports.indexOf = (array = [], searchElement = '', fromIndex = 0, len = length(array)) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        let startIndex = fromIndex || 0;
        if (startIndex < 0) startIndex = len + startIndex;

        for (let i = startIndex; i < len; i++) {
            if (array[i] === searchElement) return i;
            if (Object.prototype.toString.call(array[i]) === '[object Array]') indexOf(array[i], searchElement, fromIndex, len);
        }
        return -1;
    }



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
    exports.join = (array = [], separator = ' ', len = length(array), result = '') => {

        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        for (let i = 0; i < len; i++) {
            result += array[i];
            if (i !== len - 1) result += separator || ',';
            if (Object.prototype.toString.call(array[i]) === '[object Array]') join(array[i], separator);
        }
        return result;
    }



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
    exports.keys = (array = [], nextIndex = 0) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        return {
            next: function () {
                return nextIndex < length(array) ?
                    { value: nextIndex++, done: false } :
                    { value: undefined, done: true };
            }
        };
    }



    /**
       * @name lastIndexOf
       * @function
       *
       * @param {Array|Object} array the input array
       * @param {String|Number} searchElement the search value
       * @param {Number} fromIndex the start index
       * @param {Number} len the len of the input array
       *
       * @description Find the last index of the first occurrence of the search value
       *
       * @return {Number} The last index of the first occurrence of the search value
       *
    */

    exports.lastIndexOf = (array = [], searchElement, fromIndex, len = length(array)) => {

        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        let startIndex = fromIndex || len - 1;

        if (startIndex < 0) startIndex = len + startIndex;
        for (let i = startIndex; i >= 0; i--) {
            if (array[i] === searchElement) return i;
            if (Object.prototype.toString.call(array[i]) === '[object Array]') lastIndexOf(array[i], searchElement, fromIndex);
        }
        return -1;
    }


    /**
       * @name map
       * @function
       *
       * @param {Array|Object} array the array to filter
       * @param {Function|Object} fn  A function to execute for each element in the array.
       *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
       * @param {Array|Object} result  the suposed initial filtered array
       *
       * @description maps an array
       *
       * @return {Array|Object} the resulted mapped array
       *
    */

    exports.map = (array = [], fn = () => { }, result = []) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            if (fn(array[i], i, array)) push(result, fn(array[i], i, array))
            if (Object.prototype.toString.call(array[i]) === '[object Array]') map(array[i], fn, result)
        }
        return result;
    }


    /**
      * @name reduce
      * @function
      *
      * @param {Array|Object} array the array to filter
      * @param {Function|Object} fn  A function to execute for each element in the array.
      *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
      * @param {Array|Object|Number|String} initialValue  The initial value
      *
      * @description reduces an array
      *
      * @return {Array|Object|Number|String} The result
      *
   */

    exports.reduce = (array = [], fn = () => { }, initialValue = undefined) => {

        let accumulator = initialValue === undefined ? array[0] : initialValue;
        const startingIndex = initialValue === undefined ? 1 : 0;

        for (let i = startingIndex; i < length(array); i++) {
            accumulator = fn(accumulator, array[i], i, array);
        }

        return accumulator;
    }


    /**
       * @name reduceRight
       * @function
       *
       * @param {Array|Object} array the array to filter
       * @param {Function|Object} fn  A function to execute for each element in the array.
       *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
       * @param {Array|Object|Number|String} initialValue  The initial value
       *
       * @description right reduces an array
       *
       * @return {Array|Object|Number|String} The result
       *
    */

    exports.reduceRight = (array = [], fn = () => { }, initialValue, len = length(array)) => {

        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        let accumulator = initialValue === undefined ? array[len - 1] : initialValue;
        let startIndex = initialValue === undefined ? len - 2 : len - 1;

        if (len === 0 && initialValue === undefined) throw new TypeError('Reduce of empty array with no initial value');

        for (let i = startIndex; i >= 0; i--) {
            accumulator = fn(accumulator, array[i], i, array);
        }
        return accumulator;
    }



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
    exports.reverse = (array = [], len = length(array)) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        const mid = Math.floor(len / 2);
        for (let i = 0; i < mid; i++) {
            const temp = array[i];
            array[i] = array[len - 1 - i];
            array[len - 1 - i] = temp;
            if (Object.prototype.toString.call(array[i]) === '[object Array]') reverse(array[i], len);
        }

        return array;
    }


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

    exports.shift = (array = [], len = length(array), firstElement = array[0]) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        if (len === 0) return undefined;
        for (let i = 1; i < len; i++) {
            array[i - 1] = array[i];
        }
        array.length = len - 1;
        return firstElement;
    }


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
    exports.slice = (array = [], len = length(array), result = []) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        const startIndex = start === undefined ? 0 : start < 0 ? len + start : start;
        const endIndex = end === undefined ? len : end < 0 ? len + end : end;

        for (let i = startIndex; i < endIndex; i++) {
            push(result, arr[i]);
            if (Object.prototype.toString.call(array[i]) === '[object Array]') slice(array[i], len, result);
        }

        return result;
    }



    /**
     * @name some
     * @function
     *
     * @param {Array|Object} array the array to filter
     * @param {Function|Object} fn  A function to execute for each element in the array.
     *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
     *
     * @description Check is fn is true for at least one element
     *
     * @return {Boolean} The result
     *
  */

    exports.some = (array = [], fn = () => { }) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            if (fn(array[i], i, array)) return true;
            if (Object.prototype.toString.call(array[i]) === '[object Array]') some(array[i], fn);
        }
        return false;
    }



    /**
       * @name sort
       * @function
       *
       * @param {Array|Object} array the array to reverse
       *  @param {Function|Object} fn  A function to execute for each element in the array.
       *
       * @description Sorts the input array
       *
       * @return {Array} The result of the sorted array
       *
    */


    exports.sort = (array = [], fn = () => { }) => {
        // check if array is an array and callback is a function
        if (Object.prototype.toString.call(arg) !== '[object Array]' || typeof fn !== 'function') return undefined;

        // quicksort implementation
        const quickSort = (qArray = [], left = 0, right = length(qArray) - 1) => {
            if (left >= right) {
                return;
            }
            let pivotIndex = partition(qArray, left, right);
            quickSort(qArray, left, pivotIndex - 1);
            quickSort(qArray, pivotIndex + 1, right);
        }

        const partition = (pArray = [], left = 0, right = length(pArray) - 1) => {
            let pivotIndex = Math.floor((left + right) / 2);
            let pivotValue = pArray[pivotIndex];
            swap(pArray, pivotIndex, right);
            let storeIndex = left;
            for (let i = left; i < right; i++) {
                if (fn(pArray[i], pivotValue) < 0) {
                    swap(pArray, i, storeIndex);
                    storeIndex++;
                }
            }
            swap(pArray, storeIndex, right);
            return storeIndex;
        }

        const swap = (sArray, i = 0, j = 0) => {
            let temp = sArray[i];
            sArray[i] = sArray[j];
            sArray[j] = temp;
        }

        // call quicksort with initial left and right indices
        quickSort(array, 0, length(array) - 1);

        return array;
    }



    /**
     * @name splice
     * @function
     *
     * @param {Array|Object} array the array to reverse
     * @param {Number} start the len of the input array
     * @param {Number} deleteCount the result of the slice operation
     * @param {Number|Array} items the number of items
     *
     * @description Splices the input array
     *
     * @return {Array} The result of the spliced array
     *
  */

    exports.splice = (array = [], start = 0, deleteCount = 0, ...items) => {

        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        const len = length(array);
        const startIndex = start < 0 ? len + start : start;
        const numDelete = deleteCount === undefined ? len - startIndex : deleteCount;

        const deletedItems = [];

        for (let i = startIndex; i < startIndex + numDelete; i++) {
            push(deletedItems, array[i]);
        }

        const numInsert = length(items);
        const numTail = len - startIndex - numDelete;

        if (numInsert < numDelete) {
            for (let i = startIndex; i < startIndex + numInsert; i++) {
                array[i] = items[i - startIndex];
            }

            for (let i = startIndex + numInsert; i < len; i++) {
                array[i] = array[i + numDelete - numInsert];
            }

            array.length = len - numDelete + numInsert;
        } else if (numInsert > numDelete) {
            array.length = len + numInsert - numDelete;

            for (let i = len - 1; i >= startIndex + numDelete; i--) {
                array[i + numInsert - numDelete] = array[i];
            }

            for (let i = 0; i < numInsert; i++) {
                array[startIndex + i] = items[i];
            }
        } else {
            for (let i = 0; i < numInsert; i++) {
                array[startIndex + i] = items[i];
            }
        }

        return deletedItems;
    }


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
    exports.toLocalString = (array = [], len = length(array), stringArray = [], separator = new Intl.NumberFormat().format(1.1).charAt(1)) => {

        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        for (let i = 0; i < len; i++) {
            if (array[i] === null || array[i] === undefined) {
                push(stringArray, '');
            } else {
                push(stringArray, array[i].toLocaleString());
            }
            if (Object.prototype.toString.call(array[i]) === '[object Array]') toLocalString(array[i], len, stringArray, separator);
        }
        return join(stringArray, separator + ' ');
    }


    /**
       * @name values
       * @function
       *
       * @param {Array|Object} array the input array
       * @description Unshift the input array
       * @return {Array} The unshifted array
       *
    */

    exports.unshift = (array = []) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
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


    /**
       * @name values
       * @function
       *
       * @param {Array|Object} array the input array
       * @param {Number} index the len of the input array
       * @description Gets the values of the input array
       *
       * @return {Iterator} The string representing values of the array
       *
    */

    exports.values = (array = [], index = 0) => {
        if (Object.prototype.toString.call(arg) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        const iterator = {
            next: function () {
                if (index < length(array)) {
                    return { value: array[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };

        return iterator;
    }



        /**
       * @name demethodize
       * @function
       *
       * @param {Function|Object} fn  the function to bind to object method
       *
       * @description plucks off a method from ANY object and makes that method a completely independent standalone reusable  function.
       *
       *  For instance, if I wanted to make Array.prototype.map method an independent standalone reusable function, I would do something like this: const myArrayMap = pluckOff(Array.prototype.map). Then I would use it like this:
       *
       * const array = [1,2,3,4,5]; const result = myArrayMap(array, x => x * 2); result = [2,4,6,8,10]
       *
       * @return {Function|Object} fn.bind(...args)(), the completely independent standalone reusable function
       *
       */

        const demethodize = (fn = () => { }) => (...args) => fn.bind(...args)();

        // exports
        exports.demethodize = demethodize;


        /**
           * @name demethodizeConstruct
           * @function
           *
           * @param {Function|Object} Source  The object to demethodize
           * @param {Function|Object} fn  the function to apply to the source object
           * @param {Function|Object} Destination  The object to methodify
           *
           * @description Methodifies a destination object with all the methods on the prototype of the source object
           *
           * @return {Function|Object} The methodified object
           *
           */
    
        exports.demethodizeConstruct = (Source = {}, fn = () => { }, Destination = {}) => {
    
            for (let method of Object.getOwnPropertyNames(Source.prototype)) {
                Destination[method] = fn(Source.prototype[method])
            }
            return Destination;
        }

})