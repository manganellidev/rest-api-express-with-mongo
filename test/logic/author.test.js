const { InvalidValueException } = require('../../src/api/exception/exceptions');

const key = 'author';
describe(`${key} invariants`, () => {
  const { author } = require(`../../src/logic/book/${key}`);

  it('should create', () => {
    expect(author(['Jarbas José', 'Carla Sabol'])).toStrictEqual(['Jarbas José', 'Carla Sabol']);
  });

  it('error when value type is not an array', () => {
    const invalidValueType = 'Jarbas José';
    expect(() => author(invalidValueType)).toThrow(InvalidValueException);
  });

  it('error when value in array is null or empty', () => {
    const authorsWithEmpty = ['Jarbas', ''];
    const authorsWithNull = ['Jarbas', 'Maria', null];
    expect(() => author(authorsWithEmpty)).toThrow(InvalidValueException);
    expect(() => author(authorsWithNull)).toThrow(InvalidValueException);
  });

  it('error when value is not alphabet with accent or space', () => {
    const authorsNonAlphabet = ['Jarbas José', 'Maria Augusta', 'R00bert Lara'];
    expect(() => author(authorsNonAlphabet)).toThrow(InvalidValueException);
  });

  it('error when value length is greater than 40', () => {
    const invalidValue = ['Jarbas Josééééééééééééééééééééééééééééééé'];
    expect(() => author(invalidValue)).toThrow(InvalidValueException);
  });
});
