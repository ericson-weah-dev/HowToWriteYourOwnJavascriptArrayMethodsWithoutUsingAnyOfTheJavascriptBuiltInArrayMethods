/**
   * @name demethodize
   * @function
   *
   * @param {Function|Object} fn  the function to bind to object method
   *
   * @description plucks off a method from ANY object and makes that method a completely independent standalone reusable  function.
   *
   *  For instance, if I wanted to make Array.prototype.map method an independent standalone reusable function, I would do something like this: const myArrayMap = pluckOff(Array.prototype.map). Then I would use it like this:
   *
   * const array = [1,2,3,4,5]; const result = myArrayMap(array, x => x * 2); result = [2,4,6,8,10]
   *
   * @return {Function|Object} fn.bind(...args)(), the completely independent standalone reusable function
   *
   */

const demethodize = (fn = () => {}) => (...args)=> fn.bind(...args)();

const forEach = demethodize(Array.prototype.forEach);

// now we can use our new forEach function

const array = [1,2,3,4,5,6,7];
forEach(array, (element, index, array) => console.log(element));
/* Output:
1
2
3
4
5
6
7
*/

const map = demethodize(Array.prototype.map);

// now we can use our new forEach function

// const array = [1,2,3,4,5,6,7];
const tenTime = map(array, (element, index, array) => 10 * element);

console.log(tenTime)

//Output: [10,20,30,40,50,60,70]



const reduce = demethodize(Array.prototype.reduce);

// now we can use our new forEach function

// const array = [1,2,3,4,5,6,7];
const sum = reduce(array, (x, y) => x + y);

console.log(sum)

//Output: 28