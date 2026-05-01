const { makeFullName } = require('../exersises/10-make-full-name');

describe('Exercise 10: Make Full Name', () => {
  it('joins first and last name with a space', () => {
    expect(makeFullName('Ada', 'Lovelace')).toBe('Ada Lovelace');
  });

  it('works with short names too', () => {
    expect(makeFullName('Bo', 'Peep')).toBe('Bo Peep');
  });
});
