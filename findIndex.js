/**
   * @name findIndex
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *
   * @description Finds the index of an element in the array
   *
   * @return {Number} The index of the found element
   *
*/
const findIndex = (array = [], fn = () => {}) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for (let i = 0; i < length(array); i++) {
        if (fn(array[i], i, array)) return i;
        if(isArray(array[i])) findIndex(array[i], fn);
    }
    return -1;
}

const array = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];
  
  const index = findIndex(array, (person, index, array) => {
    return person.age > 30;
  });
  
  console.log(index); // Output: 2


//   const array = [2, 4, 6, 8];

// const index = findIndex(array, (element, index, array) => {
//   return element > 5;
// });

// console.log(index); // Output: 2