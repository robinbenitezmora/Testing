const reverseString = require('./reverseString');

it('should return the reverse of the string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
