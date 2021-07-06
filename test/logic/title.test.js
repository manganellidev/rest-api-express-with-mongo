const { InvalidValueException } = require('../../src/api/exception/exceptions');

const key = 'title';
describe(`${key} invariants`, () => {
  const { title } = require(`../../src/logic/book/${key}`);

  it('should create', () => {
    expect(title('Harry Potter 5')).toBe('Harry Potter 5');
  });

  it('error when value is null or empty', () => {
    const nullValue = null;
    const emptyValue = '';
    expect(() => title(nullValue)).toThrow(InvalidValueException);
    expect(() => title(emptyValue)).toThrow(InvalidValueException);
  });

  it('error when value is not alphanumeric with space', () => {
    const invalidValue = 'Harr1 Pott@@';
    expect(() => title(invalidValue)).toThrow(InvalidValueException);
  });

  it('error when value length is greater than 40', () => {
    const invalidValue = 'Harry Pooooooooooooooooooooooooooooootter';
    expect(() => title(invalidValue)).toThrow(InvalidValueException);
  });
});
