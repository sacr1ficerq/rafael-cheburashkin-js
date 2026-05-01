const { firstLetter } = require('../exersises/12-first-letter');

describe('Exercise 12: First Letter', () => {
  it('returns the first character', () => {
    expect(firstLetter('sun')).toBe('s');
  });

  it('works with longer words', () => {
    expect(firstLetter('planet')).toBe('p');
  });
});
