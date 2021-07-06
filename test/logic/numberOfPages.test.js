const { InvalidValueException } = require('../../src/api/exception/exceptions');

const key = 'numberOfPages';
describe(`${key} invariants`, () => {
  const { numberOfPages } = require(`../../src/logic/book/${key}`);

  it('should create', () => {
    expect(numberOfPages(200)).toBe(200);
  });

  it('error when value is not integer', () => {
    const invalidInteger = '1A2';
    expect(() => numberOfPages(invalidInteger)).toThrow(InvalidValueException);
  });

  it('error when value is lower than 1', () => {
    const zeroPages = 0;
    expect(() => numberOfPages(zeroPages)).toThrow(InvalidValueException);
  });
});
