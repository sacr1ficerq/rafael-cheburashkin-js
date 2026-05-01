const { countItems } = require('../exersises/15-count-items');

describe('Exercise 15: Count Items', () => {
  it('counts three items', () => {
    expect(countItems(['cat', 'dog', 'fish'])).toBe(3);
  });

  it('counts one item', () => {
    expect(countItems(['only'])).toBe(1);
  });
});
