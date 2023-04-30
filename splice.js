/**
   * @name splice
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} start the len of the input array
   * @param {Number} deleteCount the result of the slice operation
   * @param {Number|Array} items the number of items
   *
   * @description Splices the input array
   *
   * @return {Array} The result of the spliced array
   *
*/

const splice = (array = [], start = 0, deleteCount = 0, ...items) => {

    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
  
    const len = length(array);
    const startIndex = start < 0 ? len + start : start;
    const numDelete = deleteCount === undefined ? len - startIndex : deleteCount;
  
    const deletedItems = [];
  
    for (let i = startIndex; i < startIndex + numDelete; i++) {
      push(deletedItems, array[i]);
    }
  
    const numInsert = length(items);
    const numTail = len - startIndex - numDelete;
  
    if (numInsert < numDelete) {
      for (let i = startIndex; i < startIndex + numInsert; i++) {
        array[i] = items[i - startIndex];
      }
  
      for (let i = startIndex + numInsert; i < len; i++) {
        array[i] = array[i + numDelete - numInsert];
      }
  
      array.length = len - numDelete + numInsert;
    } else if (numInsert > numDelete) {
      array.length = len + numInsert - numDelete;
  
      for (let i = len - 1; i >= startIndex + numDelete; i--) {
        array[i + numInsert - numDelete] = array[i];
      }
  
      for (let i = 0; i < numInsert; i++) {
        array[startIndex + i] = items[i];
      }
    } else {
      for (let i = 0; i < numInsert; i++) {
        array[startIndex + i] = items[i];
      }
    }
  
    return deletedItems;
  }

  const array = [1, 2, 3, 4, 5];
const removedItems = splice(array, 2, 2, 'a', 'b');
console.log(array); // [1, 2, 'a', 'b', 5]
console.log(removedItems); // [3, 4]



// const array = [1, 2, 3, 4, 5];
// const copy = slice(array);
// const removedItems = splice(copy, 2, 2, 'a', 'b');
// console.log(array); // [1, 2, 3, 4, 5]
// console.log(copy); // [1, 2, 'a', 'b', 5]
// console.log(removedItems); // [3, 4]