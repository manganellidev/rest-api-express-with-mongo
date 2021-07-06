const { InvalidValueException } = require('../../src/api/exception/exceptions');

const key = 'publishingDate';
describe(`${key} invariants`, () => {
  const { publishingDate } = require(`../../src/logic/book/${key}`);

  it('should create', () => {
    expect(publishingDate('01/01/2000').isValid()).toBeTruthy();
  });

  it('should create with empty or null value', () => {
    expect(publishingDate('')).toBe('');
    expect(publishingDate(null)).toBe('');
  });

  it('error when date format is not valid', () => {
    const invalidDateFormat = '01/31/2010';
    expect(() => publishingDate(invalidDateFormat)).toThrow(InvalidValueException);
  });

  it('error when date value is not valid', () => {
    const invalidDateValue = 'aa/01/2010';
    expect(() => publishingDate(invalidDateValue)).toThrow(InvalidValueException);
  });

  it('error when date is before 2000', () => {
    const dateBefore2000 = '31/12/1999';
    expect(() => publishingDate(dateBefore2000)).toThrow(InvalidValueException);
  });
});
