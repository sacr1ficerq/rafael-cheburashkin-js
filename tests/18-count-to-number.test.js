const { countToNumber } = require('../exersises/18-count-to-number');

describe('Exercise 18: Count To Number', () => {
  it('counts from 1 to 4', () => {
    expect(countToNumber(4)).toEqual([1, 2, 3, 4]);
  });

  it('counts from 1 to 1', () => {
    expect(countToNumber(1)).toEqual([1]);
  });
});
