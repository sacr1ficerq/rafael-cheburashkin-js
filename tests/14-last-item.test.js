const { lastItem } = require('../exersises/14-last-item');

describe('Exercise 14: Last Item', () => {
  it('returns the last item from words', () => {
    expect(lastItem(['red', 'blue', 'green'])).toBe('green');
  });

  it('returns the last item from numbers', () => {
    expect(lastItem([4, 5, 6])).toBe(6);
  });
});
