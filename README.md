# How To Write Your Own Javascript Array Methods Without Using Any Of The Javascript Built-In Array Methods
## Introduction

As a JavaScript developer, you might be familiar with the built-in array methods like map, filter, reduce, forEach, and others. These methods make it easy to manipulate arrays, but have you ever thought about how they work under the hood? What if you had to write your own array methods without using these built-in methods? In this post, we'll explore how to write your own JavaScript array methods without using the built-in ones.

Before we dive into the implementation, let's first understand what an array method is. In JavaScript, an array method is a function that operates on each element of an array and returns a new array, a scalar value or modifies the original array.

### length

Now, let's start with the first array function (or method): <span style="color: gray">length</span>. The length function is used to get the number of elements in an array. Here's how you can implement the length the method from scratch:

```javascript
/**
   * @name length
   * @function
   *
   * @param {String|Object|Array|Number} input input argument
   * @param {Number} count  initial count
   *  
   * @description input element length 
   * 
   * @return {Number} The input element length
   * 
*/
const length  = (input = 'something', count = 0) => {
    for (let i = 0; i < input.length; i++) {
      count++;
    }
    return count;
 }
```
The length function can be called directly. For example, to get the length of an array using this function, you would use the following syntax:
```javascript
const array = [1, 2, 3, 4];
console.log(length(array)); // Output: 4
```

### isArray

Next, let's move on to the isArray function (or method). The isArray function is used to determine whether a given value is an array or not. This method returns a boolean value, true if the value is an array, and false otherwise.

The isArray function takes one argument, which can be any value. If the argument is an array, the method will return true. If the argument is not an array, the method will return false.

Here's how you can implement the isArray function:

```javascript
  /**
   * @name isArray
   * @function
   *
   * @param {Array|Object|} input input argument
   *  
   * @description checks if input element is an array
   * 
   * @return {Number} True if input element is an array
   * 
*/
 const isArray = (input = []) => Object.prototype.toString.call(input) === '[object Array]';
```
Here's an example that demonstrates how to use the isArray function:

```javascript
const myArray = [1, 2, 3, 4];
const notAnArray = 'This is not an array';

console.log(isArray(myArray)); // Output: true
console.log(isArray(notAnArray)); // Output: false
```
Note that the isArray function only works for arrays created with the Array constructor or array literals ([]). It does not work for arrays created with other constructors or object literals. For example:

```javascript
const myObj = { a: 1, b: 2 };
const myArray = new Int8Array([1, 2, 3, 4]);

console.log(isArray(myObj)); // Output: false
console.log(isArray(myArray)); // Output: false
```

### push

Next, let's move on to thepush function (or method) In JavaScript, thepush function is used to add one or more elements to the end of an array. Thepush function modifies the original array and returns the new length of the array. It takes one or more arguments, each representing an element to be added to the end of the array.

 Here's how you can implement thepushfunction:


```javascript
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
```
Here's an example that demonstrates how to use thepushfunction  :

```javascript
const array = [1, 2, 3];
const newArray = push(array, 4, 5);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(newArray); // Output: 5
```

Note that thepushfunction can be used to add any type of element to an array, including other arrays, objects, and functions. For example:

```javascript
const array = [1, 2, 3];
const simpleFunction = () => console.log('hello');

push(array, [4, 5], {a: 6, b: 7}, simpleFunction);

console.log(array); // Output: [1, 2, 3, [4, 5], {a: 6, b: 7}, () => console.log('hello')]
```
Overall, the push function is a useful method that allows you to add one or more elements to the end of an array.

### concat

Next, let's move on to theconcatfunction (or method). Theconcatfunction is used to merge two or more arrays into a single array. Theconcatfunction does not modify the original arrays, instead, it returns a new array that contains the elements from all of the arrays passed to it as arguments. Theconcatfunction  can take any number of arguments, each representing an array. 

Here's how you can implement the contact function:

```javascript
  /**
   * @name concat
   * @function
   *
   * @param {Array} array input array
   * @param {Array} result  the suposed initial array
   *  
   * @description concatenates the input array
   * 
   * @return {Array} The concatenated array
   * 
*/

 const concat = (...args) => {
    const result = [];
    for (let i = 0; i < length(args); i++) {
      const arg = args[i];
      if (isArray(arg)) {
        for (let j = 0; j < length(arg); j++) {
          push(result, arg[j]);
        }
      } else {
        push(result, arg);
      }
    }
    return result;
}
```

Here's an example that demonstrates how to use the concatfunction:

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const newArray = concat(array1, array2, array3);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Theconcatfunction can also be used with non-array values. If you pass a non-array value as an argument to theconcatmethod, the value will be converted to an array before it is merged with the other arrays. For example:

```javascript
const array1 = [1, 2, 3];
const string = 'hello';

const newArray = concat(array1, string);

console.log(newArray); // Output: [1, 2, 3, 'h', 'e', 'l', 'l', 'o']
```

Overall, the concat function is a useful function that allows you to merge multiple arrays (and non-array values) into a single array.


### flat

Next, let's move on to theflatfunction. The flat function (or method) is used to flatten an array, which means that it creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The flat method does not modify the original array but returns a new flattened array.

Theflatfunction takes two optional arguments: the first specifies the depth of flattening and the second the new array or return array. By default, the depth is 1, which means that the method only flattens one level of sub-arrays. If you pass a value of 2 or greater as the argument, the method will recursively flatten up to that depth.

 Here's how you can implement the flat method:

```javascript
 /**
   * @name flat
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Number} depth  the flat level or flat depth
   * @param {Array|Object} result  the suposed initial flattened array
   *  
   * @description flattens an array
   * 
   * @return {Array|Object} The flattened result array
   * 
*/
const flat = (array = [], depth = 1, result = []) => {
    for (var i = 0; i < length(array); i++) {
        if ((isArray(array[i])) && depth > 0) {
          result = concat(result, flat(array[i], depth - 1))
        } else {
          push(result,array[i]);
        }
    }
    return result;
}
```

Here's an example that demonstrates how to use the flat function:
```javascript
const array = [1, 2, [3, 4], [5, [6, 7]]];

const flattenedArray = flat(array);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]
```
The flat function recursively concatenates all elements of the sub-arrays into a single array. The result is a new array that contains all the elements of array at a depth of 1.

Note that the flat function does not modify the original array. Instead, it returns a new flattened array.

The flat function can also be used with sparse arrays, which are arrays with empty slots. In this case, the empty slots are removed from the flattened array. For example:

```javascript
const array = [1, 2, , 4, [5, , 7]];

const flattenedArray = flat(array);

console.log(flattenedArray); // Output: [1, 2, 4, 5, 7]
```
Overall, the flat function is a useful method that allows you to flatten an array into a new array, recursively concatenating all elements of sub-arrays.

### filter

Next, let's move on to the filter function (or method). The filter function is used to create a new array that contains all the elements of the original array that meet a certain condition. The filter function does not modify the original array but returns a new array containing only the elements that pass the condition specified in the callback function.

The filter function takes a callback function as its argument, which is executed once for each element in the array. The callback function should return a boolean value, which determines whether the element should be included in the new array.

Here's how you can implement the filter method:


```javascript
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

```

Here's an example that demonstrates how to use the filter function:

```javascript
const array = [1, 2, 3, 4, 5];

const filteredArray = filter(array, (element, index, array) => {
  return element > 2;
});

console.log(filteredArray); // Output: [3, 4, 5]
```

Note that the filter function does not modify the original array (array). Instead, it returns a new array (filteredArray) that contains only the elements that passed the condition specified in the callback function.

The filter function can also be used with objects. In this case, the callback function should reference a property of the object. For example:

```javascript
const array = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const filteredArray = filter(array, (person, index, array) => {
  return person.age > 30;
});

console.log(filteredArray); // Output: [{ name: 'Charlie', age: 35 }]
```

Overall, the filter function is a powerful method that allows you to create a new array containing only the elements of the original array that meet a certain condition.

### map

Next, let's move on to the map function. The map function is used to create a new array with the same length as the original array but with each element transformed based on a provided callback function. The map function does not modify the original array but returns a new array with the transformed elements.

The map function takes a callback function as its argument, which is executed once for each element in the array. The callback function should return a transformed value for each element.

Here's how you can implement the map method:

```javascript
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
```

Here's an example that demonstrates how to use the map function:

```javascript
const array = [1, 2, 3, 4];

const transformedArray = map(array,(element, index, array) => {
  return element * 2;
});

console.log(transformedArray); // Output: [2, 4, 6, 8]
```

Note that the map function does not modify the original array (array). Instead, it returns a new array (transformedArray) with the transformed elements.

The map function can also be used with objects. In this case, the callback function should reference a property of the object. For example:

```javascript
const array = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const transformedArray = map(array, (person, index, array) => {
  return person.age;
});

console.log(transformedArray); // Output: [25, 30, 35]
```
Overall, the map function is a powerful function that allows you to create a new array with each element transformed based on a provided callback function.

### forEach

Next, let's move on to the forEach function (or method). The forEach function is used to execute a provided function once for each element in an array. The forEach function does not modify the original array, but it provides an easy way to iterate through an array and perform a certain operation on each element.

The forEach function takes a callback function as its argument, which is executed once for each element in the array. The callback function can take up to three arguments: the current element being processed, the index of the current element, and the array being traversed.

Here's how you can implement the forEach function:


```javascript
 /**
   * @name forEach
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *  
   * @description maps an array
   * 
   * @return Does not return anything
   * 
*/
const forEach = (array = [], fn = () => {}) => {
   if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for(let i = 0; i < length(array); i++){
        fn(array[i],i, array);
    }
}
```
Here's an example that demonstrates how to use the forEach function:

```javascript
const array = [1, 2, 3, 4];

forEach(array, (element, index, array) => {
  console.log(`Element ${index}: ${element}`);
});
```

Note that the forEach function does not modify the original array (myArray). Instead, it provides an easy way to iterate through an array and perform a certain operation on each element.

The forEach function is particularly useful when you need to perform the same operation on each element in an array, such as updating a user interface or performing a calculation. It can also be used to execute asynchronous code on each element, such as making API requests.

Overall, the forEach function is a useful function that allows you to loop through each element in an array and perform a certain operation on each element.

### reduce

Next, let's move on to the reduce function. The reduce function is used to reduce an array to a single value by executing a provided function for each element in the array. The reduce function can be used to perform a variety of operations on an array, such as calculating a sum, finding the maximum value, or concatenating a string.

The reduce function takes two arguments: a callback function and an optional initial value. The callback function is executed for each element in the array and should return a new value, which is used as the accumulator for the next iteration. The initial value is the starting value for the accumulator. If no initial value is provided, the first element in the array is used as the initial value.

Here's how you can implement the reduce method:

```javascript
 /**
   * @name reduce
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   * @param {Array|Object|Number|String} initialValue  The initial value
   *  
   * @description reduces an array
   * 
   * @return {Array|Object|Number|String} The result 
   * 
*/

const reduce = (array = [], fn = () => {}, initialValue = undefined) =>{

    let accumulator = initialValue === undefined ? array[0] : initialValue;
    const startingIndex = initialValue === undefined ? 1 : 0;

    for (let i = startingIndex; i < length(array); i++) {
        accumulator = fn(accumulator, array[i], i, array);
    }

    return accumulator;
}
```
Here's an example that demonstrates how to use the reduce function:

```javascript
const array = [1, 2, 3, 4];

const sum = reduce(array, (accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 10
```
Note that the reduce function can also be used without an initial value. In this case, the first element in the array is used as the initial value, and the callback function starts with the second element in the array. For example:

```javascript
const array = [1, 2, 3, 4];

const sum = myArray.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
});

console.log(sum); // Output: 10
```

Overall, the reduce function is a powerful method in JavaScript that allows you to reduce an array to a single value by executing a provided function for each element in the array.

### every

Next, let's move on to the every function. The every function is used to test whether all elements in an array pass a certain condition. The every function returns a boolean value (true or false) indicating whether all elements in the array pass the condition.

The every function takes a callback function as its argument, which is executed once for each element in the array. The callback function should return a boolean value, which determines whether the element passes the condition or not.

Here's how you can implement the every function:

```javascript
 /**
   * @name every
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *  
   * @description Check is fn is true for each element
   * 
   * @return {Boolean} The result 
   * 
*/

const every = (array = [], fn = () => {}) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for(let i = 0; i < length(array); i++){
        if(fn(array[i], i, array) === false) return false;
        if(isArray(array[i])) every(array[i],fn);
    }
    return true;
}
```
Here's an example that demonstrates how to use the every function:

```javascript
const array = [2, 4, 6, 8];

const isEven = every(array, (element, index, array) => {
  return element % 2 === 0;
});

console.log(isEven); // Output: true
```

Note that the every function stops iterating through the array as soon as it encounters an element that does not pass the condition. This can be useful for optimizing performance, especially for large arrays.

The every function can also be used with objects. In this case, the callback function should reference a property of the object. For example:

```javascript
const array = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const isOverTwenty = every(array, (person, inddex, array) => {
  return person.age > 20;
});

console.log(isOverTwenty); // Output: true
```
Overall, the every function is a useful function that allows you to test whether all elements in an array pass a certain condition.

### some

Next, let's move on to the some function. The somefunction is used to test whether at least one element in an array passes a certain condition. The some function returns a boolean value (true or false) indicating whether at least one element in the array passes the condition.

The some fuction takes a callback function as its argument, which is executed once for each element in the array. The callback function should return a boolean value, which determines whether the element passes the condition or not.

Here's how you can implement the some function:

```javascript
/**
   * @name some
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *  
   * @description Check is fn is true for at least one element
   * 
   * @return {Boolean} The result 
   * 
*/

const some = (array = [], fn = () => {}) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for(let i = 0; i < length(array); i++){
        if(fn(array[i],i, array)) return true;
        if(isArray(array[i])) some(array[i],fn);
    }
    return false;
}

```

Here's an example that demonstrates how to use the some function:

```javascript
const array = [1, 3, 5, 7];

const isEven = some(array, (element, index, array) => {
  return element % 2 === 0;
});

console.log(isEven); // Output: false
```

Note that the some function stops iterating through the array as soon as it encounters an element that passes the condition. This can be useful for optimizing performance, especially for large arrays.

The some function can also be used with objects. In this case, the callback function should reference a property of the object. For example:

```javascript
const array = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const isOverThirty = some(array, (person, index, array) => {
  return person.age > 30;
});

console.log(isOverThirty); // Output: true
```
Overall, the some function is a useful method in JavaScript that allows you to test whether at least one element in an array passes a certain condition.

### findIndex

Next, let's move on to the findIndex method. The findIndex function is used to find the index of the first element in an array that passes a certain condition. The findIndex function returns the index of the first element that passes the condition, or -1 if no element passes the condition.

The findIndex function takes a callback function as its argument, which is executed once for each element in the array. The callback function should return a boolean value, which determines whether the element passes the condition or not.

Here's how you can implement the findIndex function:

```javascript
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
```

Note that the findIndex function stops iterating through the array as soon as it encounters an element that passes the condition. This can be useful for optimizing performance, especially for large arrays.

The findIndex function can also be used with objects. In this case, the callback function should reference a property of the object. For example:

```javascript
const array = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const index = findIndex(array, (person, index, array) => {
  return person.age > 30;
});

console.log(index); // Output: 2
```

Here's an example that demonstrates how to use the findIndex function:

```javascript
const array = [2, 4, 6, 8];

const index = findIndex(array, (element, index, array) => {
  return element > 5;
});

console.log(index); // Output: 2
```
Overall, the findIndex function is a useful function that allows you to find the index of the first element in an array that passes a certain condition.


### find

Next, let's move on to the find method. The findfunction is used to find the first element in an array that passes a certain condition. The find method returns the first element that passes the condition, or undefined if no element passes the condition.

The find function takes a callback function as its argument, which is executed once for each element in the array. The callback function should return a boolean value, which determines whether the element passes the condition or not.

Here's how you can implement the find function:

```javascript
 /**
   * @name find
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   *  
   * @description Finds an elment or elments in the given array
   * 
   * @return {String|Object|Array|Number|Boolean} The element or elments found
   * 
*/
const find = (array = [], fn = () => {}) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for (let i = 0; i < length(array); i++) {
        if (fn(array[i], i, array)) return array[i];
        if (isArray(array[i])) find(array[i], fn);
    }
    return undefined;
}

```

Here's an example that demonstrates how to use the find() function:

```javascript
const array = [2, 4, 6, 8];

const element = find(array, (element, index, array) => {
  return element > 5;
});

console.log(element); // Output: 6
```

Note that the find function stops iterating through the array as soon as it encounters an element that passes the condition. This can be useful for optimizing performance, especially for large arrays.

The find function can also be used with objects. In this case, the callback function should reference a property of the object. For example:

```javascript
const array = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const element = find(array, (person, index, array) => {
  return person.age > 30;
});

console.log(element); // Output: { name: 'Charlie', age: 35 }
```
Overall, the find function is a useful function that allows you to find the first element in an array that passes a certain condition.

### entries

Next, let's move on to the entries function. The fentries function is used to return an array iterator object with key-value pairs of the array's entries. Each entry is represented as a two-element array containing the index and the corresponding element value.

The entries function returns a new array iterator object, which can be used to loop through the entries of the original array using a for...of loop or the next function.

Here's how you can implement the entries method:

```javascript
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

```

Note that the resulting iterator contains the same key-value pairs as the iterator produced by the built-in Array.entries method. However, this implementation does not handle sparse arrays in the same way as the built-in method. It also does not support the optional thisArg parameter. Nonetheless, it provides a basic example of how to create an iterator of key-value pairs from an array using JavaScript.

Here's an example that demonstrates how to use the entries function:

```javascript
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
```

### fill

Next, let's move on to the fill function. The fill  function is used to fill all the elements of an array with a static value. The fill function takes up to four arguments: the input array, the value to fill the array with, the starting index to fill from (optional), and the ending index to fill to (optional).

Here's how you can implement the fill function:

```javascript
/**
   * @name fill
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} value the value to fill in with
   * @param {Number} start the start index
   * @param {Number} len the len of the input array
   *  
   * @description Fill in the given array with the input values
   * 
   * @return {Array} The filled array
   * 
*/

const fill = (array = [], value = 0, start = 0, end = length(array)) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    for (let i = start; i < end; i++) {
        array[i] = value;
        if(isArray(array[i])) fill(array[i], value, start, end);
    }
    return array;
}
```
Here's an example that demonstrates how to use the fill fill:

```javascript
const aray = [1, 2, 3, 4, 5];

fill(array, 0);

console.log(myArray); // Output: [0, 0, 0, 0, 0]
```
Here's an example that demonstrates how to use the fill function with starting and ending indices:

```javascript
const array = [1, 2, 3, 4, 5];

fill(array, 0, 2, 4);

console.log(Array); // Output: [1, 2, 0, 0, 5]
```
Overall, the fill function is a useful function that allows you to fill all the elements of an array with a static value, with optional starting and ending indices.

### from

Next, let's move on to the from  function (or method). The from function is used to create a new array from an array-like or iterable object. An array-like object is an object that has a length property and indexed elements but is not necessarily an array (e.g., the arguments object or a NodeList object). An iterable object is an object that can be iterated over using a for...of loop (e.g., an array, a Map object, or a Set object).

The from function takes four arguments with the third one being optional arguments: an interable function, a mapFn function, and  a thisArg object. The mapFn function is used to map each element of the input object to a new value, and the thisArg value is used as the this context for the mapFn function.

Here's how you can implement the from method:

```javascript
/**
   * @name from
   * @function
   *
   * @param {Array|Object} interable the input object to convert
   * @param {Function} mapFn  the function to map the input object
   * @param {Object} thisArg The argument to map the input object
   * @param {Array} result the result object
   *  
   * @description  Creates a new array from an array-like or iterable object
   * 
   * @return {Array} The result array.
   * 
*/


function from(iterable,mapFn,thisArg, result = []) {
    if (iterable == null) throw new TypeError(`Cannot convert ${iterable} to an array`);

    const iterator = iterable[Symbol.iterator]();

    for (let i = 0; i < length(iterable); i++) {
      const value = mapFn ? mapFn.call(thisArg, iterator.next().value, i) : iterator.next().value;
      push(result, value);
    }
  
    return result;
  }
```

Here's an example that demonstrates how to use the from function to create a new array from an iterable object:

```javascript
const mySet = new Set(['apple', 'banana', 'cherry']);

const array = from(mySet);

console.log(array); // Output: ['apple', 'banana', 'cherry']
```


### includes

Next, let's move on to the includes function. The includes function is used to determine whether an array includes a certain value. The method returns a boolean value (true or false) indicating whether the value was found in the array or not.

The includes function takes two required arguments: the input array and the search value which is the value to search for in the array. It also takes two optional second arguments: the index at which to begin the search and the length of the array.

Here's how you can implement the includes method:

```javascript
  /**
   * @name includes
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} searchElement the search value
   * @param {Number} fromIndex the start index
   * @param {Number} len the len of the input array
   *  
   * @description Checks whether  the input array contains the specified search element
   * 
   * @return {Boolean} True if the input array contains the searchElement
   * 
*/

  const includes = (array = [], searchElement = '', fromIndex = 0, len = length(array)) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    let startIndex = fromIndex || 0;
    if (startIndex < 0) startIndex = len + startIndex;
    for (let i = startIndex; i < len; i++) {
      if (array[i] === searchElement) return true;
    }
    return false;
}

```
Here's an example that demonstrates how to use the includes function:

```javascript
const array = [1, 2, 3, 4, 5];

const result1 = includes(array, 3);
const result2 = includes(array, 6);

console.log(result1); // Output: true
console.log(result2); // Output: false
```

Here's an example that demonstrates how to use the includes function with a starting index:

```javascript
const array = [1, 2, 3, 4, 5];

const result1 = includes(array, 3, 2);
const result2 = includes(array, 3, 3);

console.log(result1); // Output: true
console.log(result2); // Output: false
```
Overall, the includes function is a useful function that allows you to determine whether an array includes a certain value, with an optional starting index.

### indexOf

Next, let's move on to the indexOf function. The indexOf function is used to find the index of the first occurrence of a specified value in an array. If the specified value is not found in the array, the function returns -1.

The indexOf function takes one required argument, which is the value to search for in the array. It also takes an optional second argument, which is the index at which to begin the search.

Here's how you can implement the indexOf method:

```javascript
/**
   * @name indexOf
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} searchElement the search value
   * @param {Number} fromIndex the start index
   * @param {Number} len the len of the input array
   *  
   * @description Find the index of the first occurrence of the search value
   * 
   * @return {Number} The index of the first occurrence of the search value
   * 
*/
const indexOf = (array = [], searchElement = '', fromIndex = 0, len = length(array)) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    let startIndex = fromIndex || 0;
    if (startIndex < 0) startIndex = len + startIndex;
    
    for (let i = startIndex; i < len; i++) {
      if (array[i] === searchElement) return i;
      if(isArray(array[i])) indexOf(array[i], searchElement, fromIndex, len);
    }
    return -1;
}
```
Here's an example that demonstrates how to use the indexOf function:

```javascript
const array = [1, 2, 3, 4, 5];

const index1 = indexOf(array, 3);
const index2 = indexOf(array, 6);

console.log(index1); // Output: 2
console.log(index2); // Output: -1
```
Here's an example that demonstrates how to use the indexOf function with a starting index:

```javascript
const array = [1, 2, 3, 4, 5];

const index1 = indexOf(array, 3, 2);
const index2 = indexOf(array, 3, 3);

console.log(index1); // Output: 2
console.log(index2); // Output: -1
```
Overall, the indexOf function is a useful function that allows you to find the index of the first occurrence of a specified value in an array, with an optional starting index.

### join

Next, let's move on to the join method. The joinfunction is used to create a new string by concatenating all the elements of an array, separated by a specified separator string. If no separator is provided, the default separator is a comma.

The join function takes one optional argument, which is the separator string to use to separate the array elements. If the separator argument is not provided, the default separator (a comma) is used.

Here's how you can implement the join function:

```javascript
  /**
   * @name join
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} separator the separator
   * @param {Number} len the length of the input array
   * @param {String} result the result string
   *  
   * @description Join the input array
   * 
   * @return {String} The result string
   * 
*/
const join = (array = [], separator = ' ', len = length(array), result =  '') => {

    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
 
    for (let i = 0; i < len; i++) {
      result += array[i];
      if (i !== len - 1) result += separator || ',';
      if(isArray(array[i])) join(array[i], separator);
    }
    return result;
}
```

Here's an example that demonstrates how to use the join function:

```javascript
const array = ['apple', 'banana', 'cherry'];

const result1 = join(array);
const result2 = join(array,'-');

console.log(result1); // Output: "apple,banana,cherry"
console.log(result2); // Output: "apple-banana-cherry"
```

Overall, the join function is a useful function that allows you to create a new string by concatenating all the elements of an array, separated by a specified separator string.


### keys

Next, let's move on to the keys method. The keys function is used to create a new array iterator object that contains the keys of an array. The iterator object can be used to loop through the keys of the array using a for...of loop.

The keys function takes two arguments: the input array, and the optional index

Here's how you can implement the keys function:

```javascript
  /**
   * @name keys
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {Number} nextIndex the index of the next
   *  
   * @description Finds keys in the input array
   * 
   * @return {Object} the result object with keys as an interation object
   * 
*/
const keys = (array = [], nextIndex = 0) => {
    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    return {
      next: function() {
        return nextIndex < length(array) ?
          { value: nextIndex++, done: false } :
          { value: undefined, done: true };
      }
    };
}

```

Here's an example that demonstrates how to use the keys function:

```javascript
const array = ['apple', 'banana', 'cherry'];

const arrayKeys = keys(array);

for (const index of arrayKeys) {
  console.log(index);
}

/**
 Output: 
    0
    1
    2
*/
```
Overall, the keys function is a useful function that allows you to create a new array iterator object containing the keys of an array.

### lastIndexOf

Next, let's move on to the lastIndexOf method. The lastIndexoffunction is used to find the index of the last occurrence of a specified value in an array. If the specified value is not found in the array, the method returns -1.

The lastIndexOf function takes one required argument, which is the value to search for in the array. It also takes an optional second argument, which is the index at which to begin the search.

Here's how you can implement the lastIndexOf function:

```javascript
  /**
   * @name lastIndexOf
   * @function
   *
   * @param {Array|Object} array the input array
   * @param {String|Number} searchElement the search value
   * @param {Number} fromIndex the start index
   * @param {Number} len the len of the input array
   *  
   * @description Find the last index of the first occurrence of the search value
   * 
   * @return {Number} The last index of the first occurrence of the search value
   * 
*/

const lastIndexOf = (array = [], searchElement, fromIndex, len = length(array)) => {

    if(!isArray(array)) throw new TypeError(`${array} must be an array`);

    let startIndex = fromIndex || len - 1;

    if (startIndex < 0) startIndex = len + startIndex;
    for (let i = startIndex; i >= 0; i--) {
      if (array[i] === searchElement) return i;
      if(isArray(array[i])) lastIndexOf(array[i], searchElement, fromIndex);
    }
    return -1;
}

```
Here's an example that demonstrates how to use the lastIndexOf function:

```javascript
const array = [1, 2, 3, 4, 5];

const index1 = lastIndexOf(array,3);
const index2 = lastIndexOf(array,6);

console.log(index1); // Output: 2
console.log(index2); // Output: -1
```
Here's an example that demonstrates how to use the lastIndexOf function with a starting index:

```javascript
const array = [1, 2, 3, 4, 5];

const index1 = lastIndexOf(array,3, 2);
const index2 = lastIndexOf(array,3, 3);

console.log(index1); // Output: 2
console.log(index2); // Output: -1
```
Overall, the lastIndexOf function is a useful function that allows you to find the index of the last occurrence of a specified value in an array, with an optional starting index.


### reduceRight

Next, let's move on to the reduceRight function (or method). The reduceRightfunction is similar to the reduce function, but it works from right-to-left instead of left-to-right. The function applies a function to each element of an array (starting from the rightmost element) and returns a single value. The reduceRight() function takes two arguments: a callback function and an optional initial value.

The callback function takes four arguments: the accumulator, the current element, the current index, and the array being processed. The accumulator is the value returned by the previous iteration of the callback function, or the initial value if it was provided. The current element is the current element being processed in the array. The current index is the index of the current element being processed. The array being processed is the array that the reduceRight function was called on.

Here's how you can implement the reduceRight method:

```javascript
 /**
   * @name reduceRight
   * @function
   *
   * @param {Array|Object} array the array to filter
   * @param {Function|Object} fn  A function to execute for each element in the array.
   *   It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   * @param {Array|Object|Number|String} initialValue  The initial value
   *  
   * @description right reduces an array
   * 
   * @return {Array|Object|Number|String} The result 
   * 
*/

const reduceRight = (array = [], fn = () => {}, initialValue, len = length(array)) => {

    if(!isArray(array)) throw new TypeError(`${array} must be an array`);
    
    let accumulator = initialValue === undefined ? array[len - 1] : initialValue;
    let startIndex = initialValue === undefined ? len - 2 : len - 1;
  
    if (len === 0 && initialValue === undefined) throw new TypeError('Reduce of empty array with no initial value');
    
    for (let i = startIndex; i >= 0; i--) {
      accumulator = fn(accumulator, array[i], i, array);
    }
    return accumulator;
}
```
Here's an example that demonstrates how to use the reduceRight function:

```javascript
const array = [1, 2, 3, 4, 5];

const result = reduceRight(array, (accumulator, currentValue,index, array) => {
  return accumulator + currentValue;
}, 0);

console.log(result); // Output: 15
```

Overall, the reduceRight function is a useful function that allows you to apply a function to each element of an array from right-to-left and return a single value.

### reverse

Next, let's move on to the reverse function. The reversefunction is used to reverse the order of the elements in an array. This function modifies the original array in place and returns a reference to the same array.

The reverse function works by swapping the positions of the elements in the array. The first element is swapped with the last element, the second element is swapped with the second-to-last element, and so on until all elements have been swapped. 

If the array has an odd number of elements, the middle element remains in place because it has no element to swap with.

Here's how you can implement the reverse function:

```javascript

 /**
   * @name reverse
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} len the len of the input array
   *  
   * @description Reverse the input array
   * 
   * @return {Array} The result of the reversed array
   * 
*/
const reverse = (array = [], len = length(array)) => {
  if(!isArray(array)) throw new TypeError(`${array} must be an array`);

  const mid = Math.floor(len / 2);
  for (let i = 0; i < mid; i++) {
    const temp = array[i];
    array[i] = array[len - 1 - i];
    array[len - 1 - i] = temp;
    if(isArray(array[i])) reverse(array[i], len);
  }

  return array;
}
```

Here's an example of using reverse:

```javascript
const array = [1, 2, 3];
reverse(array);
console.log(array); // [3, 2, 1]
```

Note that reverse modifies the original array in place, so be careful when using it. 


### shift

Next, let's move on to the shift function. The shiftfunction is used to remove the first element from an array and return it. This method modifies the original array in place and returns the removed element. If the array is empty, undefined is returned.

Here's how you can implement the shift function:

```javascript
 /**
   * @name shift
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} len the len of the input array
   * @param {Array|Object|Number|Boolean} firstElement the first element of the input array
   *  
   * @description Reverse the input array
   * 
   * @return {Array} The result of the reversed array
   * 
*/

const shift = (array = [], len = length(array), firstElement = array[0]) => {
  if(!isArray(array)) throw new TypeError(`${array} must be an array`);
  if (len === 0) return undefined;
  for (let i = 1; i < len; i++) {
    array[i - 1] = array[i];
  }
  array.length = len - 1;
  return firstElement;
}
```

Here's an example of using the  shift function:

```javascript
const array = [1, 2, 3];
const firstElement = shift(array);
console.log(array); // [2, 3]
console.log(firstElement); // 1
```


### slice

Next, let's move on to the slice function. The slicefunction is used to create a shallow copy of a portion of an array into a new array object. The original array is not modified.

Here's how you can implement the slice function:

```javascript
/**
   * @name slice
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} len the len of the input array
   * @param {Array} result the result of the slice operation
   *  
   * @description Slices the input array
   * 
   * @return {Array} The result of the sliced array
   * 
*/
const slice = (array = [], len = length(array), result = []) => {
  if(!isArray(array)) throw new TypeError(`${array} must be an array`);

  const startIndex = start === undefined ? 0 : start < 0 ? len + start : start;
  const endIndex = end === undefined ? len : end < 0 ? len + end : end;

  for (let i = startIndex; i < endIndex; i++) {
    push(result, arr[i]);
    if(isArray(array[i])) slice(array[i], len, result);
  }

  return result;
}
```
Here's an example of using slice:

```javascript
const array = [1, 2, 3, 4, 5];
const slicedArr = slice(array,1, 4);
console.log(slicedArr); // [2, 3, 4]
```
Note that the slice function creates a shallow copy of the original array. This means that if the original array contains reference values (such as objects or arrays), the copied array will contain references to the same values, rather than new copies of those values.

```javascript
const array = [1, 2, 3, {name: 'John'}, [4, 5]];
const slicedArr = slice(array,2);
console.log(slicedArr); // [3, {name: 'John'}, [4, 5]]

slicedArr[1].name = 'Jane';
console.log(slicedArr); // [3, {name: 'Jane'}, [4, 5]]
console.log(array); // [1, 2, 3, {name: 'Jane'}, [4, 5]]
```

In this example, the slice function creates a new array called slicedArr that contains a copy of the elements from index 2 to the end of the array array. However, since one of the copied values is an object, both the array and slicedArr arrays contain references to the same object. Therefore, when we modify the object through slicedArr, the change is reflected in array as well.


### splice

Next, let's move on to the splice function. The splicefunction is used to modify an array by adding, removing, and/or replacing elements. This method modifies the original array in place and returns an array containing the elements that were removed.

Here's how you can implement the splice function:

```javascript
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
```
Here's an example of using splice:

```javascript
const array = [1, 2, 3, 4, 5];
const removedItems = splice(array, 2, 2, 'a', 'b');
console.log(array); // [1, 2, 'a', 'b', 5]
console.log(removedItems); // [3, 4]
```

Note that splice modifies the original array in place, so be careful when using it. If you need to modify an array without modifying the original, you can use the slice method to create a copy of the array and then call splice on the copy:

```javascript
const array = [1, 2, 3, 4, 5];
const copy = slice(array);
const removedItems = splice(copy, 2, 2, 'a', 'b');
console.log(array); // [1, 2, 3, 4, 5]
console.log(copy); // [1, 2, 'a', 'b', 5]
console.log(removedItems); // [3, 4]
```
Note that splice does not create a new array; it modifies the original array in place. So in this example, array and copy are two separate arrays with the same elements.


### sort

Next, let's move on to the sort function. The sortfunction is used to sort the elements of an array in place and return the sorted array. The sorting is performed based on the Unicode code points of the elements, by default.

The sort function takes an array and a callback function as parameters. The callback function is used to compare the values in the array during the sorting process. The quickSort function is an implementation of the quicksort algorithm, which recursively partitions the array and swaps values until it is sorted. The partition function chooses a pivot value and compares it to each value in the array, swapping values until the pivot is in its final position. The swap function simply swaps two values in the array. The sort function then calls the quickSort function with the initial left and right indices of the array and returns the sorted array.

Here's how you can implement the sort function:

```javascript
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
```

Here's an example of using sort:

```javascript
// Example usage:
const unsorted = [3, 2, 1, 4, 5];
const sorted = sort(unsorted, (a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4, 5]
```

### toLocalString

Next, let's move on to the toLocalString function. The toLocalStringfunction returns a string representing the elements of an array. It converts each element of the array to a string using the toLocaleString method of that element and then concatenates the resulting strings with a comma separator.

The toLocaleString function of each element is used to ensure that each element is represented as a string in a locale-specific format. This means that numbers, dates, and other objects that can be represented differently in different locales will be formatted appropriately based on the user's locale.

The toLocaleString method of an array can take two optional arguments: locales and options. The locales argument specifies the locale or locales to use for formatting the array elements. The options argument is an object that can contain various formatting options, such as style for specifying whether to format numbers as currency or percentages.

Here's how you can implement the toLocalString function:


```javascript
/**
   * @name toLocalString
   * @function
   *
   * @param {Array|Object} array the array to reverse
   * @param {Number} len the len of the input array
   * @param {Array} stringArray  the result of the slice operation
   * @param {String} separator  the number of items
   *  
   * @description Create the string representing the elements of the input array
   * 
   * @return {String} The string representing the elements of an array
   * 
*/
const toLocalString = (array = [], len = length(array), stringArray = [], separator = new Intl.NumberFormat().format(1.1).charAt(1)) => {

  if(!isArray(array)) throw new TypeError(`${array} must be an array`);

  for (let i = 0; i < len; i++) {
    if (array[i] === null || array[i] === undefined) {
      push(stringArray,'');
    } else {
      push(stringArray, array[i].toLocaleString());
    }
    if(isArray(array[i])) toLocalString(array[i], len, stringArray, separator);
  }
  return join(stringArray, separator + ' ');
}

```
Here is an example of how to use toLocaleString on an array of numbers:

```javascript
const numbers = [12345.67, 8910.11, 123.45];
const formattedNumbers = toLocaleString(numbers, 'en-US', { style: 'currency', currency: 'USD' });
console.log(formattedNumbers); // "$12,345.67, $8,910.11, $123.45"
```

### values

Next, let's move on to the values function. The valuesfunction returns a new array iterator object that contains the values of an array. This method does not modify the original array.

The returned iterator object can be used to iterate over the values in the array using a for...of loop or the next method. The iterator object returns each value of the array in the order they appear in the array.

Here's how you can implement the valus function:

```javascript
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
```
Here is an example of how to use the values function on an array:

```javascript
const fruits = ['apple', 'banana', 'cherry'];
const iterator = values(fruits);

console.log(iterator.next().value); // "apple"
console.log(iterator.next().value); // "banana"
console.log(iterator.next().value); // "cherry"
```
The values function can be used in combination with other array iterator functions we saw earlier in this post, such as entries and key, to iterate over arrays in different ways.

### unshift

Next, let's move on to the unshift function. The unshiftfunction adds one or more elements to the beginning of an array and returns the new length of the array.

The unshift function modifies the original array by adding elements to the beginning of it. It does not create a new array. If no elements are provided to be added to the array, unshift will simply return the length of the array.

Here's how you can implement the unshift function:


```javascript
/**
   * @name values
   * @function
   *
   * @param {Array|Object} array the input array 
   * @description Unshift the input array
   * @return {Array} The unshifted array
   * 
*/
const unshift = (array = []) => {
  if(!isArray(array)) throw new TypeError(`${array} must be an array`);
  const originalLength = length(array);
  const newLength = originalLength + length(items);

  for (let i = newLength - 1; i >= length(items); i--) {
    arr[i] = arr[i - length(items)];
  }

  for (let i = 0; i < length(items); i++) {
    array[i] = items[i];
  }
  return newLength;
}
```
Here is an example of how to use the unshift method on an array:

```javascript
const array = [1, 2, 3];
const length = unshift(array, 4, 5);

console.log(array); // [4, 5, 1, 2, 3]
console.log(length); // 5
```
The unshift function can be useful when you want to add elements to the beginning of an array without modifying the original order of the elements. It can also be used to create a new array by adding elements to the beginning of an empty array.

# Bonus: Using Some Functional Programming Tricks

Let's create ademethodizefunction that will allow us to create any of the functions we already created effortlessly. Here is an implementation of ourdemthodize function: 


```javascript
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
```

The demethodize function takes a method function fn as its input parameter.

It returns a new function that accepts any number of arguments (...args).

This new function creates a bound function by calling fn.bind(...args). The bind() method creates a new function with the same body as the original fn function, but with its this value bound to the object passed as the first argument. In this case, ...args represents the object that the method fn function would normally be called on.

The new bound function is immediately called with no arguments () using the parentheses at the end of the line, and its return value is returned by the outer function.

Our demethodize  function allows you to "demethodize" a method function so that it can be called separately from an object context. It does this by creating a bound function using fn.bind(...args) and immediately calling it with no arguments (). The return value of the bound function is then returned by the outer function.

Let us now use demethodize  function to re-create some of the Javascript functions we already created from scratch without using any of the Javascript built-in array methods. 

Here is how to use the demethodize function to create any of the javascript built-in array functions.  To avoid repeating ourselves too much in this example we will use our demethodize  to re-create only 3 functions (or methods): the forEach , the map , and the reduce functions.

Let's start with re-creating the demethodize  function or method:


```javascript
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
```
Next, let's start re-creating the map  function or method:

```javascript
const map = demethodize(Array.prototype.map);

// now we can use our new forEach function

const array = [1,2,3,4,5,6,7];
const tenTime = map(array, (element, index, array) => 10 * element);

console.log(tenTime)

//Output: [10,20,30,40,50,60,70]

```

Finally, let's start re-creating the reduce  function or method:

```javascript
const reduce = demethodize(Array.prototype.reduce);

// now we can use our new forEach function

const array = [1,2,3,4,5,6,7];
const sum = reduce(array, (x, y) => x + y);

console.log(sum)

//Output: 28
```
### Taking Ourdemethodize function a little further.

You may have noticed that creating functions with our demethodize function can become quite repetitive. For each function we create, we have to use it repeatedly to create all the variations we need. This can quickly become tiresome if we need to create many functions. However, there's a more efficient way to do this. What if we could create a single function that allows us to generate all of the JavaScript built-in array methods, without having to use our function multiple times? This would save us time and make our code more concise. 

That is exactly what we will do now: create a single function that allows us to generate all the javascript built-in array methods we already created without having to use our demethodize function multiple times. Let's call this function demethodizeConstruct. Here is an implementation: 

```javascript
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

```
The demethodizeConstruct function takes three parameters: the Source constructor function whose prototype methods need to be demethodized, the fn function to apply to the the Source constructor and the Destination object where the demethodized functions will be added.

It loops through all the prototype methods of the Source constructor function using a for..of loop and the Object.getOwnPropertyNames method.

For each prototype method, it creates a new function using the fn function, passing in the method as the fn parameter and an empty object {} as the thisArg parameter.

It adds the new demethodized function to the Destination object with the same method name.

The Destination object with the demethodized functions added to it is returned.

Our demethodizeConstruct  function allows you to demethodize all the prototype methods of a constructor function and add them to a target object. It does this by looping through all the prototype methods of the Source constructor function, using the demethodize function to create a new demethodized function for each method, and adding the new demethodized function to the Destination object. The Destination object with the demethodized functions added to it is then returned.

Here is an example of how to use the demethodizeConstruct method on an array:

```javascript
const arrayFns = demethodizeConstruct(Array, demethodize);


// you could well use const {reduce } = demethodizeConstruct(Array, demethodize)

const {reduce} = arrayFns; //arrayFns object now has all the array methods as functions!

// now we can use our new forEach function

const array = [1,2,3,4,5,6,7];
const sum = reduce(array, (x, y) => x + y);

console.log(sum);

// //Output: 28
```

## Final Thoughts

Writing your own JavaScript array methods can be a rewarding and educational experience. By understanding the underlying logic and algorithms used in the built-in array methods, you can create your own customized versions that suit your specific needs. Although it may seem daunting at first, with a little bit of practice and experimentation, you'll soon be able to write efficient and effective array methods that can be used in your own projects.

It's worth noting that while it's certainly possible to write your own array methods without using any of the built-in JavaScript array methods, doing so may not always be the most practical approach. In many cases, the built-in methods are already highly optimized and efficient and may be more suitable for performance-critical applications. However, for learning purposes or for situations where you need highly specific behavior that is not available in the built-in methods, writing your own array methods can be a valuable tool in your JavaScript toolbox.

Overall, the key takeaway is to understand the principles behind JavaScript arrays and their methods and to use that knowledge to create your own customized solutions as needed. By doing so, you'll be well on your way to becoming a more skilled and knowledgeable JavaScript developer.














