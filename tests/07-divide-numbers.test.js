const { divideNumbers } = require('../exersises/07-divide-numbers');

describe('Exercise 07: Divide Numbers', () => {
  it('divides bigger numbers', () => {
    expect(divideNumbers(12, 3)).toBe(4);
  });

  it('can return a decimal number', () => {
    expect(divideNumbers(5, 2)).toBe(2.5);
  });
});
