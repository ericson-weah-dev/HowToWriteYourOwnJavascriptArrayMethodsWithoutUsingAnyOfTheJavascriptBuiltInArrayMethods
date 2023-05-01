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

  const concat = (...args) => {

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
  


  /*
  |----------------------------------------------------------------------------------
  | EXPORTS MODULE IN NODEJS ENVIRONMENTS
  |----------------------------------------------------------------------------------
  |
  | The module is exported using an if/else statement. If the module object is defined and
  | has an exports property, then the module is being used in Node.js and we export 
  | the concat object by assigning it to module.exports
  |
  |
  */

  if (typeof module !== 'undefined' && module.exports) module.exports = concat;

/*
|----------------------------------------------------------------------------------------
| EXPORT MODULE IN BROWSER ENVIRONMENTS
|----------------------------------------------------------------------------------------
|
| If module is not defined or does not have an exports property, then the module is being used
| in the browser and we attach the myModule object to the global object (which is the window object
| in the browser) by assigning it to global.concat.
|
*/

else global.concat = concat;
}) (this)