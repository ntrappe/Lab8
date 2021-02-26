const sum = require('../assets/scripts/sum');

// test by calling sum function
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});

// test raw arithmetic 
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
