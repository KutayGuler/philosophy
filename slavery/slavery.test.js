const enslavement = require('./slavery');

test('irrationality of slavery', () => {
  expect(enslavement()).toBe(false);
})
