/**
   * @name filter
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   * @param {Array|Object} result  the suposed initial filtered array
   *
   * @description filters an array
   *
   * @return {Array|Object} array, the filtered array
   *
*/

const filter = (array = [], fn = () => {}, result = []) =>  {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for(let i = 0; i < length(array); i++){
        if(fn(array[i],i,array)) push(result,array[i]);
        if(isArray(array[i])) filter(array[i], fn, result)
    }
    return result;
}

const array = [1, 2, 3, 4, 5];

const filteredArray = filter(array, (element, index, array) => {
  return element > 2;
});

console.log(filteredArray); // Output: [3, 4, 5]


// const array = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//   ];
  
//   const filteredArray = filter(array, (person, index, array) => {
//     return person.age > 30;
//   });
  
//   console.log(filteredArray); // Output: [{ name: 'Charlie', age: 35 }]