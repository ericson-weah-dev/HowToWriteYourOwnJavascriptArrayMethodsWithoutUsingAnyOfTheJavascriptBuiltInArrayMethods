'use strict';

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

        for (let i = 0; i < iterable.length; i++) {
            const value = mapFn ? mapFn.call(thisArg, iterator.next().value, i) : iterator.next().value;
            push(result, value);
        }

        return result;
    }




    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the from object by assigning it to module.exports
    |
    |
    */

    if (typeof module !== 'undefined' && module.exports) module.exports = from;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.from.
    |
    */

    else global.from = from;
})(this)