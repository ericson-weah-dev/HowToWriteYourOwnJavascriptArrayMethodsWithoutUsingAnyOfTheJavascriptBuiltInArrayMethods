'use strict';
const length = require('../length');
const push = require('../push');
/*
|------------------------------------------------------------------------------------
| Universal Module Definition (UMD)
|------------------------------------------------------------------------------------
|
| This is an implementation of the Universal Module Definition (UMD) pattern
| for creating a module that can be used in both browser and Node.js environments.


| The function is wrapped in an immediately invoked function expression (IIFE),
| which allows the module to have its own private scope and prevent any variable conflicts with other code.
| 
| The global variable is passed as a parameter to the function. In the browser,
| the global variable refers to the window object, while in Node.js it refers to the global scope.
|
*/

(global => {

    /*
    |----------------------------------------------------------------------------------
    | MODULE DEFINITION
    |----------------------------------------------------------------------------------
    |
    | The module is defined as an object or a function.

    |
    */
    
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

    const splice = (array = [], start = 0, deleteCount = 0, ...items) => {

        if (Object.prototype.toString.call(array) !== '[object Array]') throw new TypeError(`${array} must be an array`);

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

    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the splice object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = splice;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.splice.
    |
    */

    else global.splice = splice;
})(this)