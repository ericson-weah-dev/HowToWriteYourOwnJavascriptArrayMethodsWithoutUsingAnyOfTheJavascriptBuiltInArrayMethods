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

    const fill = (array = [], value = 0, start = 0, end = length(array)) => {
        if (Object.prototype.toString.call(array) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        for (let i = start; i < end; i++) array[i] = value;
        return array;
    }


    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the fill object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = fill;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.fill.
    |
    */

    else global.fill = fill;
})(this)