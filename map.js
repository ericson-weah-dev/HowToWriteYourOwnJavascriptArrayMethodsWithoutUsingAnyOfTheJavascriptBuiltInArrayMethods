/**
   * @name map
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   * @param {Array|Object} result  the suposed initial filtered array
   *
   * @description maps an array
   *
   * @return {Array|Object} the resulted mapped array
   *
*/

const map = (array = [], fn = () => {}, result = []) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
     for(let i = 0; i < length(array); i++){
         if(fn(array[i],i, array)) push(result,fn(array[i],i, array))
         if(isArray(array[i])) map(array[i], fn, result)
     }
     return result;
 }


 const array = [1, 2, 3, 4];

const transformedArray = map(array,(element, index, array) => {
  return element * 2;
});

console.log(transformedArray); // Output: [2, 4, 6, 8]


// const array = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//   ];
  
//   const transformedArray = map(array, (person, index, array) => {
//     return person.age;
//   });
  
//   console.log(transformedArray); // Output: [25, 30, 35]