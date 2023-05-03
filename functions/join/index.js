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
     const join = (array = [], separator = ' ', len = length(array), result = '') => {

        if (Object.prototype.toString.call(array) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        for (let i = 0; i < len; i++) {
            result += array[i];
            if (i !== len - 1) result += separator || ',';
            //if (Object.prototype.toString.call(array[i]) === '[object Array]') join(array[i], separator);
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
    | the join object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = join;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.join.
    |
    */

    else global.join = join;
})(this)