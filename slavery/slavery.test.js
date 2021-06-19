const enslavement = require('./slavery');

test("irrationality of slavery and master's self imprisonment", () => {
  expect(enslavement()).toBe(false);
})
