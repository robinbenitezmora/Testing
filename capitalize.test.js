const capitalize = require('./capitalize.js');

it('capitalizes the first letter of a string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
