const { countLetters } = require('../exersises/11-count-letters');

describe('Exercise 11: Count Letters', () => {
  it('counts letters in a short word', () => {
    expect(countLetters('cat')).toBe(3);
  });

  it('counts letters in a longer word', () => {
    expect(countLetters('giraffe')).toBe(7);
  });
});
