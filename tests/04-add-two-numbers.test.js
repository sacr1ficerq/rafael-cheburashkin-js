const { addTwoNumbers } = require('../exersises/04-add-two-numbers');

describe('Exercise 04: Add Two Numbers', () => {
  it('adds two positive numbers', () => {
    expect(addTwoNumbers(2, 3)).toBe(5);
  });

  it('adds a positive and a negative number', () => {
    expect(addTwoNumbers(10, -4)).toBe(6);
  });
});
