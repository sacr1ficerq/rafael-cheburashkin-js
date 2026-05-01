const { biggerNumber } = require('../exersises/08-bigger-number');

describe('Exercise 08: Bigger Number', () => {
  it('returns the bigger number when the first is bigger', () => {
    expect(biggerNumber(9, 2)).toBe(9);
  });

  it('returns the bigger number when the second is bigger', () => {
    expect(biggerNumber(1, 8)).toBe(8);
  });

  it('returns the shared number when they are equal', () => {
    expect(biggerNumber(5, 5)).toBe(5);
  });
});
