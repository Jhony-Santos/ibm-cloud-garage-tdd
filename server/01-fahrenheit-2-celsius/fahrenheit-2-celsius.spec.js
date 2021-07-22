// eslint-disable-next-line no-unused-vars
const { fahrenheitToCelsius } = require('./fahrenheit-2-celsius');

// DESCRIBE: creates a block that groups together several related tests in one "test suite"
// IT: takes two arguments. The first arguments describes the test; the second argument that contains
// the expectations to test


describe('the fahrenheit-2-celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a fahrenheitToCelsius function should', () => {
  it('return 0 for 32',() => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
  it.todo('return 0 for 32');
  it.todo('return 10 for 50');
  it.todo('return 100 for 212');
  it.todo('return -40 for -40');
  it.todo('return -273.15 for -459.67');
});

