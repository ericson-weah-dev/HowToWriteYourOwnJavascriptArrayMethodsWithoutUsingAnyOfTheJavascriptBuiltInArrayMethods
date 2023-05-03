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
    const indexOf = (array = [], searchElement = '', fromIndex = 0, len = length(array)) => {
        if (Object.prototype.toString.call(array) !== '[object Array]') throw new TypeError(`${array} must be an array`);
        let startIndex = fromIndex || 0;
        if (startIndex < 0) startIndex = len + startIndex;

        for (let i = startIndex; i < len; i++) {
            if (array[i] === searchElement) return i;
            //if (Object.prototype.toString.call(array[i]) === '[object Array]') indexOf(array[i], searchElement, fromIndex, len);
        }
        return -1;
    }




    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the indexOf object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = indexOf;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.indexOf.
    |
    */

    else global.indexOf = indexOf;
})(this)