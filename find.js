/**
   * @name find
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *
   * @description Finds an elment or elments in the given array
   *
   * @return {String|Object|Array|Number|Boolean} The element or elments found
   *
*/
const find = (array = [], fn = () => {}) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for (let i = 0; i < length(array); i++) {
        if (fn(array[i], i, array)) return array[i];
        if (isArray(array[i])) find(array[i], fn);
    }
    return undefined;
}

const array = [2, 4, 6, 8];

const element = find(array, (element, index, array) => {
  return element > 5;
});

console.log(element); // Output: 6


// const array = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//   ];
  
//   const element = find(array, (person, index, array) => {
//     return person.age > 30;
//   });
  
//   console.log(element); // Output: { name: 'Charlie', age: 35 }