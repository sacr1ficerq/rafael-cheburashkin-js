const { firstItem } = require('../exersises/13-first-item');

describe('Exercise 13: First Item', () => {
  it('returns the first item from words', () => {
    expect(firstItem(['red', 'blue', 'green'])).toBe('red');
  });

  it('returns the first item from numbers', () => {
    expect(firstItem([4, 5, 6])).toBe(4);
  });
});
