const stringLength = require('./stringLength');

it('should return the length of the string', () => {
  expect(stringLength('hello')).toBe(5);
});

it('requires the string to be at least 1 character', () => {
  expect(() => stringLength('')).toThrow();
});

it('requires the string not to be longer than 10 characters', () => {
  expect(() => stringLength('hello world')).toThrow();
});