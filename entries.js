/**
   * @name entries
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {Array} result the result array
   *
   * @description Finds entries in the given array
   *
   * @return {Array} The result array
   *
*/
const entries = (array = [], result = []) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for (let i = 0; i < length(array); i++) {
      push(result,[i, array[i]]);
      //if(isArray(array[i])) entries(array[i], result);
    }
    return result;
}


// Usage

const array = ['apple', 'banana', 'cherry'];

  const arrayEntries = entries(array);

  for (const [index, value] of arrayEntries) {
    console.log(`${index}: ${value}`);
  }

/*
Output:

0: apple
1: banana
2: cherry

*/
