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
        if (Object.prototype.toString.call(array) !== '[object Array]') return array;
        for (let i = 0; i < length(elements); i++) {
            array[length(array)] = elements[i];
            if(Object.prototype.toString.call(array[i]) === '[object Array]') push(array, ...array[i])
        }
        return length(array);
    }



    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the push object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = push;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.push.
    |
    */

    else global.push = push;
})(this)