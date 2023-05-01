const length = require('./index')

describe('length function', () => {
  it(' should return the correct length', () => {
    const input = 'hello';
    const expectedOutput = 5;

    const output = length(input);

    expect(output).toBe(expectedOutput);
  });

  it('should return the correct length for empty input', () => {
    const input = '';
    const expectedOutput = 0;

    const output = length(input);

    expect(output).toBe(expectedOutput);
  });

  it('should return the correct length with count parameter', () => {
    const input = 'hello';
    const count = 2;
    const expectedOutput = 7;

    const output = length(input, count);

    expect(output).toBe(expectedOutput);
  });
});