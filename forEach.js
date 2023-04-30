/**
   * @name forEach
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *
   * @description maps an array
   *
   * @return Does not return anything
   *
*/
const forEach = (array = [], fn = () => {}) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
     for(let i = 0; i < length(array); i++){
         fn(array[i],i, array);
     }
 }


 // Usage

const array = [1, 2, 3, 4];

forEach(array, (element, index, array) => {
  console.log(`Element ${index}: ${element}`);
});

