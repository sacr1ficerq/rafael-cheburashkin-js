const { addOne } = require('../exersises/03-add-one');

describe('Exercise 03: Add One', () => {
  it('adds one to a small number', () => {
    expect(addOne(4)).toBe(5);
  });

  it('adds one to zero', () => {
    expect(addOne(0)).toBe(1);
  });
});
