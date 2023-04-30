/**
   * @name demethodizeConstruct
   * @function
   *
   * @param {Function|Object} Source  The object to demethodize
   * @param {Function|Object} fn  the function to apply to the source object
   * @param {Function|Object} Destination  The object to methodify
   *
   * @description Methodifies a destination object with all the methods on the prototype of the source object
   *
   * @return {Function|Object} The methodified object
   *
   */

const demethodizeConstruct = (Source = {}, fn = () => {}, Destination =  {}) => {

    for(let method of Object.getOwnPropertyNames(Source.prototype)){
        Destination[method] = fn(Source.prototype[method])
    }
    return Destination;
}


// Usage

const arrayFns = demethodizeConstruct(Array, demethodize);


// you could well use const {reduce } = demethodizeConstruct(Array, demethodize)

const {reduce} = arrayFns; //arrayFns object now has all the array methods as functions!

// now we can use our new forEach function

const array = [1,2,3,4,5,6,7];
const sum = reduce(array, (x, y) => x + y);

console.log(sum);

// //Output: 28