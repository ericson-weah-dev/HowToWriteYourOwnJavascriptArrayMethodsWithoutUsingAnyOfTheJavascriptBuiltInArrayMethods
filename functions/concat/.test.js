const concat  = require('./index');

describe('concat function', () => {
  it('should concatenate arrays and values', () => {
    expect(concat([1, 2], [3, 4], 5, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return a new array', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const result = concat(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4]);
    expect(result).not.toBe(arr1);
    expect(result).not.toBe(arr2);
  });

  it('should handle non-array arguments', () => {
    expect(concat('hello', [1, 2], null, undefined, 3)).toEqual(['h', 'e', 'l', 'l', 'o', 1, 2, null, undefined, 3]);
  });

  it('should handle empty arrays', () => {
    expect(concat([], [], [])).toEqual([]);
  });
});