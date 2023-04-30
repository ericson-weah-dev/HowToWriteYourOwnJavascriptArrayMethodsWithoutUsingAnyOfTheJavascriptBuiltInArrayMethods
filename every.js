/**
   * @name every
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *
   * @description Check is fn is true for each element
   *
   * @return {Boolean} The result
   *
*/

const every = (array = [], fn = () => {}) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for(let i = 0; i < length(array); i++){
        if(fn(array[i], i, array) === false) return false;
        if(isArray(array[i])) every(array[i],fn);
    }
    return true;
}


const array = [2, 4, 6, 8];

const isEven = every(array, (element, index, array) => {
  return element % 2 === 0;
});

console.log(isEven); // Output: true



// const array = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//   ];
  
//   const isOverTwenty = every(array, (person, inddex, array) => {
//     return person.age > 20;
//   });
  
//   console.log(isOverTwenty); // Output: true