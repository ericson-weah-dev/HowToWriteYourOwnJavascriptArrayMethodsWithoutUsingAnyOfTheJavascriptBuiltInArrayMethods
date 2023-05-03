'use strict';
const length = require('../length');
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

    const reduceRight = (array = [], fn = () => { }, initialValue, len = length(array)) => {

        if (Object.prototype.toString.call(array) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        let accumulator = initialValue === undefined ? array[len - 1] : initialValue;
        let startIndex = initialValue === undefined ? len - 2 : len - 1;

        if (len === 0 && initialValue === undefined) throw new TypeError('Reduce of empty array with no initial value');

        for (let i = startIndex; i >= 0; i--) {
            accumulator = fn(accumulator, array[i], i, array);
        }
        return accumulator;
    }



    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the reduceRight object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = reduceRight;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.reduceRight.
    |
    */

    else global.reduceRight = reduceRight;
})(this)