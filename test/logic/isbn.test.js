const { InvalidValueException } = require('../../src/api/exception/exceptions');

const key = 'isbn';
describe(`${key} invariants`, () => {
  const { isbn } = require(`../../src/logic/book/${key}`);

  it('should create', () => {
    expect(isbn('978-85-333-0400-5')).toBe('978-85-333-0400-5');
  });

  it('error when value is null or empty', () => {
    const nullValue = null;
    const emptyValue = '';
    expect(() => isbn(nullValue)).toThrow(InvalidValueException);
    expect(() => isbn(emptyValue)).toThrow(InvalidValueException);
  });

  it('error when value is not numeric with dash', () => {
    const invalidValue = '978A85-333-0400-5';
    expect(() => isbn(invalidValue)).toThrow(InvalidValueException);
  });
});
