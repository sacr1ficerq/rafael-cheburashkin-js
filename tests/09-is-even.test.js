const { isEven } = require('../exersises/09-is-even');

describe('Exercise 09: Is Even', () => {
  it('returns true for an even number', () => {
    expect(isEven(8)).toBe(true);
  });

  it('returns false for an odd number', () => {
    expect(isEven(5)).toBe(false);
  });
});
