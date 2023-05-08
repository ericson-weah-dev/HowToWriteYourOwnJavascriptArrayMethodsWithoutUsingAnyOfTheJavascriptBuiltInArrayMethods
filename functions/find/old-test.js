'use strict';

const find  = require('./index');

/*
|------------------------------------------------------------------------------------
| SUIT TEST
|------------------------------------------------------------------------------------
|
| This test
|
*/

describe('find function', () => {
  it('throws a TypeError if the first argument is not an array', () => {
    expect(() => find('not an array', () => true)).toThrow(TypeError);
    expect(() => find(123, () => true)).toThrow(TypeError);
    expect(() => find({ name: 'test' }, () => true)).toThrow(TypeError);
  });

  it('returns the first element that matches the given function', () => {
    const arr = [1, 2, 3, 4, 5];
    const even = x => x % 2 === 0;
    const odd = x => x % 2 !== 0;
    expect(find(arr, even)).toBe(2);
    expect(find(arr, odd)).toBe(1);
  });

  it('returns undefined if no elements match the given function', () => {
    const arr = [1, 3, 5, 7, 9];
    const even = x => x % 2 === 0;
    expect(find(arr, even)).toBe(undefined);
  });

  it('passes the element, index, and array to the given function', () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = jest.fn();
    find(arr, fn);
    expect(fn.mock.calls.length).toBe(arr.length);
    expect(fn.mock.calls[0][0]).toBe(1);
    expect(fn.mock.calls[0][1]).toBe(0);
    expect(fn.mock.calls[0][2]).toEqual(arr);
  });
});