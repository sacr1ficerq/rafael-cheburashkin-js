const { sayHello } = require('../exersises/01-hello-message');

describe('Exercise 01: Hello Message', () => {
  it('returns the expected hello message', () => {
    expect(sayHello()).toBe('Hello, JavaScript!');
  });
});
