const { subtractNumbers } = require('../exersises/05-subtract-numbers');

describe('Exercise 05: Subtract Numbers', () => {
  it('subtracts smaller from bigger', () => {
    expect(subtractNumbers(9, 4)).toBe(5);
  });

  it('can return a negative number', () => {
    expect(subtractNumbers(3, 8)).toBe(-5);
  });
});
