/**
   * @name some
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *
   * @description Check is fn is true for at least one element
   *
   * @return {Boolean} The result
   *
*/

const some = (array = [], fn = () => {}) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for(let i = 0; i < length(array); i++){
        if(fn(array[i],i, array)) return true;
        if(isArray(array[i])) some(array[i],fn);
    }
    return false;
}



// Usage

const array = [1, 3, 5, 7];

const isEven = some(array, (element, index, array) => {
  return element % 2 === 0;
});

console.log(isEven); // Output: false


// const array = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//   ];
  
//   const isOverThirty = some(array, (person, index, array) => {
//     return person.age > 30;
//   });
  
//   console.log(isOverThirty); // Output: true