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
       * @name sort
       * @function
       *
       * @param {Array|Object} array the array to reverse
       *  @param {Function|Object} fn  A function to execute for each element in the array.
       *
       * @description Sorts the input array
       *
       * @return {Array} The result of the sorted array
       *
    */


     const sort = (array = [], fn = () => { }) => {
        // check if array is an array and callback is a function
        if (Object.prototype.toString.call(array) !== '[object Array]' || typeof fn !== 'function') return undefined;

        // quicksort implementation
        const quickSort = (qArray = [], left = 0, right = length(qArray) - 1) => {
            if (left >= right) return;
            
            let pivotIndex = partition(qArray, left, right);
            quickSort(qArray, left, pivotIndex - 1);
            quickSort(qArray, pivotIndex + 1, right);
        }

        const partition = (pArray = [], left = 0, right = length(pArray) - 1) => {
            let pivotIndex = Math.floor((left + right) / 2);
            let pivotValue = pArray[pivotIndex];
            swap(pArray, pivotIndex, right);
            let storeIndex = left;
            for (let i = left; i < right; i++) {
                if (fn(pArray[i], pivotValue) < 0) {
                    swap(pArray, i, storeIndex);
                    storeIndex++;
                }
            }
            swap(pArray, storeIndex, right);
            return storeIndex;
        }

        const swap = (sArray, i = 0, j = 0) => {
            let temp = sArray[i];
            sArray[i] = sArray[j];
            sArray[j] = temp;
        }

        // call quicksort with initial left and right indices
        quickSort(array, 0, length(array) - 1);

        return array;
    }




    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the sort object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = sort;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.sort.
    |
    */

    else global.sort = sort;
})(this)