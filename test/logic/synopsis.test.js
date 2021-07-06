const { InvalidValueException } = require('../../src/api/exception/exceptions');
const { SAMPLE_WITH_300_CHARS, SAMPLE_WITH_301_CHARS } = require('./synopsisSamples');

const key = 'synopsis';

describe(`${key} invariants`, () => {
  const { synopsis } = require(`../../src/logic/book/${key}`);

  const sampleSynopsis = '';

  it('should create', () => {
    expect(synopsis(SAMPLE_WITH_300_CHARS)).toBe(SAMPLE_WITH_300_CHARS);
  });

  it('should create with empty or null value', () => {
    expect(synopsis('')).toBe('');
    expect(synopsis(null)).toBe('');
  });

  it('error when value length is greater than 300', () => {
    expect(() => synopsis(SAMPLE_WITH_301_CHARS)).toThrow(InvalidValueException);
  });
});
