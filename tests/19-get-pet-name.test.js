const { getPetName } = require('../exersises/19-get-pet-name');

describe('Exercise 19: Get Pet Name', () => {
  it('returns the pet name', () => {
    expect(getPetName({ name: 'Milo', type: 'cat' })).toBe('Milo');
  });

  it('works with a different pet', () => {
    expect(getPetName({ name: 'Bingo', type: 'dog' })).toBe('Bingo');
  });
});
