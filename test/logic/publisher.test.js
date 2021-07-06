const { InvalidValueException } = require('../../src/api/exception/exceptions');

const key = 'publisher';
describe(`${key} invariants`, () => {
  const { publisher } = require(`../../src/logic/book/${key}`);

  it('should create', () => {
    expect(publisher('Books 4EVER #UP')).toBe('Books 4EVER #UP');
  });

  it('should create with empty or null value', () => {
    expect(publisher('')).toBe('');
    expect(publisher(null)).toBe('');
  });

  it('error when value length is greater than 40', () => {
    const invalidValue = 'Books 4EVER #UP aaaaaaaaaaaaaaaaaaaaaaaaa';
    expect(() => publisher(invalidValue)).toThrow(InvalidValueException);
  });
});
