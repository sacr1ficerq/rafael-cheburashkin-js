const { favoriteNumber } = require('../exersises/02-favorite-number');

describe('Exercise 02: Favorite Number', () => {
  it('returns the number 7', () => {
    expect(favoriteNumber()).toBe(7);
  });
});
