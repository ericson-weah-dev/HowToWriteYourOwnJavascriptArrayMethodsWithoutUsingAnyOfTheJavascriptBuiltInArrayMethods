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
    const find = (array = [], fn = () => { }) => {
        if (Object.prototype.toString.call(array) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = 0; i < length(array); i++) {
            if (fn(array[i], i, array)) return array[i];
        }
        return undefined;
    }



    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the find object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = find;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.find.
    |
    */

    else global.find = find;
})(this)