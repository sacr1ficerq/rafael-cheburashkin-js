const { multiplyNumbers } = require('../exersises/06-multiply-numbers');

describe('Exercise 06: Multiply Numbers', () => {
  it('multiplies two positive numbers', () => {
    expect(multiplyNumbers(3, 4)).toBe(12);
  });

  it('multiplies by zero', () => {
    expect(multiplyNumbers(8, 0)).toBe(0);
  });
});
