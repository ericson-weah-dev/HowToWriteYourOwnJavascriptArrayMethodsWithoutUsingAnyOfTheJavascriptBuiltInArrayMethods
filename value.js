/**
   * @name values
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {Number} index the len of the input array
   * @description Gets the values of the input array
   *
   * @return {Iterator} The string representing values of the array
   *
*/
const values = (array = [], index = 0) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    const iterator = {
      next: function() {
        if (index < length(array)) {
          return { value: array[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  
    return iterator;
  }


// Usage
const fruits = ['apple', 'banana', 'cherry'];
const iterator = values(fruits);

console.log(iterator.next().value); // "apple"
console.log(iterator.next().value); // "banana"
console.log(iterator.next().value); // "cherry"