const { repeatWord } = require('../exersises/17-repeat-word');

describe('Exercise 17: Repeat Word', () => {
  it('repeats a word with spaces between copies', () => {
    expect(repeatWord('hi', 3)).toBe('hi hi hi');
  });

  it('returns the word once when times is 1', () => {
    expect(repeatWord('wow', 1)).toBe('wow');
  });
});
