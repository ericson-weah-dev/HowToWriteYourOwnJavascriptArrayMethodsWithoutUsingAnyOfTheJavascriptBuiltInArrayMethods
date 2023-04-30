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
    if(!isArray(array)) return array;
    for (let i = 0; i < length(elements); i++) {
      array[length(array)] = elements[i];
    }
    return length(array);
 }

const array = [1, 2, 3];
const newArray = push(array, 4, 5);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(newArray); // Output: 5

// const array = [1, 2, 3];
// const simpleFunction = () => console.log('hello');

// push(array, [4, 5], {a: 6, b: 7}, simpleFunction);

// console.log(array); // Output: [1, 2, 3, [4, 5], {a: 6, b: 7}, () => console.log('hello')]