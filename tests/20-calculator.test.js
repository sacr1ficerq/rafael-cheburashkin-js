const { calculator } = require('../exersises/20-calculator');

describe('Exercise 20: Calculator', () => {
  it('adds numbers', () => {
    expect(calculator(2, '+', 3)).toBe(5);
  });

  it('subtracts numbers', () => {
    expect(calculator(8, '-', 3)).toBe(5);
  });

  it('multiplies numbers', () => {
    expect(calculator(4, '*', 5)).toBe(20);
  });

  it('divides numbers', () => {
    expect(calculator(20, '/', 4)).toBe(5);
  });

  it('returns null for an unknown operator', () => {
    expect(calculator(2, '^', 3)).toBeNull();
  });
});
