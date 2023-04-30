/**
   * @name sort
   * @function
   *
   * @param {Array|Object} array the array to reverse
   *  @param {Function|Object} fn  A function to execute for each element in the array.
   *
   * @description Sorts the input array
   *
   * @return {Array} The result of the sorted array
   *
*/


const  sort = (array = [], fn = () => {})  => {
    // check if array is an array and callback is a function
    if (!isArray(array) || typeof fn !== 'function') return undefined;
  
    // quicksort implementation
    const  quickSort = (qArray = [], left = 0, right = length(qArray) - 1) =>  {
      if (left >= right) {
        return;
      }
      let pivotIndex = partition(qArray, left, right);
      quickSort(qArray, left, pivotIndex - 1);
      quickSort(qArray, pivotIndex + 1, right);
    }
  
    const  partition = (pArray = [], left = 0, right = length(pArray) - 1) => {
      let pivotIndex = Math.floor((left + right) / 2);
      let pivotValue = pArray[pivotIndex];
      swap(pArray, pivotIndex, right);
      let storeIndex = left;
      for (let i = left; i < right; i++) {
        if (fn(pArray[i], pivotValue) < 0) {
          swap(pArray, i, storeIndex);
          storeIndex++;
        }
      }
      swap(pArray, storeIndex, right);
      return storeIndex;
    }
  
    const  swap = (sArray, i = 0, j = 0)  => {
      let temp = sArray[i];
      sArray[i] = sArray[j];
      sArray[j] = temp;
    }
  
    // call quicksort with initial left and right indices
    quickSort(array, 0, length(array) - 1);
  
    return array;
  }

  // Example usage:
const unsorted = [3, 2, 1, 4, 5];
const sorted = sort(unsorted, (a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4, 5]
