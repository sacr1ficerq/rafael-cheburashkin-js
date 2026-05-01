const { sumArray } = require('../exersises/16-sum-array');

describe('Exercise 16: Sum Array', () => {
  it('adds several numbers together', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  it('works with one number', () => {
    expect(sumArray([9])).toBe(9);
  });
});
