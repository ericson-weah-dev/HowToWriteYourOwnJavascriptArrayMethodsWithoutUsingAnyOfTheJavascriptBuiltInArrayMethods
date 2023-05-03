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

        if (Object.prototype.toString.call(array) !== '[object Array]') throw new TypeError(`${array} must be an array`);

        for (let i = 0; i < len; i++) {
            if (array[i] === null || array[i] === undefined) push(stringArray, '');
            else push(stringArray, array[i].toLocaleString());
            
        }
        return join(stringArray, separator + ' ');
    }



    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the toLocalString object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = toLocalString;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.toLocalString.
    |
    */

    else global.toLocalString = toLocalString;
})(this)